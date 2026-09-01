from __future__ import annotations

import asyncio
import os
import re
import smtplib
import time
from collections import defaultdict, deque
from email.message import EmailMessage
from pathlib import Path
from typing import Deque

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field, field_validator

ROOT = Path(__file__).resolve().parents[2]
DIST = ROOT / "frontend" / "dist"
RATE_WINDOW_SECONDS = 15 * 60
RATE_LIMIT = 5
REQUESTS: dict[str, Deque[float]] = defaultdict(deque)

app = FastAPI(
    title="MediaMagnet API",
    version="1.0.0",
    docs_url="/api/docs" if os.getenv("ENVIRONMENT", "development") != "production" else None,
    redoc_url=None,
)


class ContactPayload(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(min_length=5, max_length=160)
    phone: str = Field(default="", max_length=40)
    company: str = Field(default="", max_length=160)
    service: str = Field(min_length=2, max_length=160)
    websiteUrl: str = Field(default="", max_length=400)
    message: str = Field(min_length=15, max_length=5000)
    consent: bool
    website: str = Field(default="", max_length=200)

    @field_validator("email")
    @classmethod
    def valid_email(cls, value: str) -> str:
        value = value.strip()
        if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", value):
            raise ValueError("Ogiltig e-postadress")
        return value

    @field_validator("name", "phone", "company", "service", "websiteUrl", "message", "website")
    @classmethod
    def strip_text(cls, value: str) -> str:
        return value.strip()


def client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def apply_rate_limit(key: str) -> None:
    now = time.time()
    attempts = REQUESTS[key]
    while attempts and now - attempts[0] > RATE_WINDOW_SECONDS:
        attempts.popleft()
    if len(attempts) >= RATE_LIMIT:
        raise HTTPException(status_code=429, detail="För många försök. Vänta en stund och prova igen.")
    attempts.append(now)


def smtp_ready() -> bool:
    required = ["CONTACT_TO_EMAIL", "SMTP_HOST", "SMTP_FROM_EMAIL"]
    return all(os.getenv(key, "").strip() for key in required)


def send_email(payload: ContactPayload) -> None:
    message = EmailMessage()
    message["Subject"] = f"Ny MediaMagnet-förfrågan – {payload.service} – {payload.name}"
    message["From"] = os.environ["SMTP_FROM_EMAIL"]
    message["To"] = os.environ["CONTACT_TO_EMAIL"]
    message["Reply-To"] = payload.email
    message.set_content(
        "\n".join(
            [
                "Ny förfrågan från MediaMagnet",
                "",
                f"Namn: {payload.name}",
                f"Företag: {payload.company or '-'}",
                f"E-post: {payload.email}",
                f"Telefon: {payload.phone or '-'}",
                f"Tjänst: {payload.service}",
                f"Nuvarande hemsida: {payload.websiteUrl or '-'}",
                "",
                "Meddelande:",
                payload.message,
            ]
        )
    )

    with smtplib.SMTP(
        os.environ["SMTP_HOST"],
        int(os.getenv("SMTP_PORT", "587")),
        timeout=20,
    ) as smtp:
        if os.getenv("SMTP_USE_TLS", "true").lower() in {"1", "true", "yes"}:
            smtp.starttls()
        username = os.getenv("SMTP_USERNAME", "")
        if username:
            smtp.login(username, os.getenv("SMTP_PASSWORD", ""))
        smtp.send_message(message)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok", "email": "configured" if smtp_ready() else "preview"}


@app.post("/api/contact")
async def contact(payload: ContactPayload, request: Request):
    apply_rate_limit(client_ip(request))

    if payload.website:
        return JSONResponse(status_code=202, content={"status": "accepted"})
    if not payload.consent:
        raise HTTPException(status_code=422, detail="Samtycke krävs.")

    if not smtp_ready():
        return JSONResponse(
            status_code=202,
            content={
                "status": "preview",
                "message": "Formuläret är validerat men SMTP är inte konfigurerat ännu.",
            },
        )

    try:
        await asyncio.to_thread(send_email, payload)
    except (OSError, smtplib.SMTPException) as exc:
        raise HTTPException(
            status_code=502,
            detail="E-posttjänsten kunde inte ta emot meddelandet just nu.",
        ) from exc

    return {"status": "sent", "message": "Tack! Din förfrågan har skickats."}


@app.get("/{full_path:path}")
def serve_frontend(full_path: str):
    if not DIST.exists():
        raise HTTPException(status_code=503, detail="Frontend är inte byggd.")

    candidate = (DIST / (full_path or "index.html")).resolve()
    try:
        candidate.relative_to(DIST.resolve())
    except ValueError as exc:
        raise HTTPException(status_code=403, detail="Otillåten sökväg.") from exc

    if candidate.is_file():
        return FileResponse(candidate)

    index_file = DIST / "index.html"
    if index_file.is_file():
        return FileResponse(index_file)

    raise HTTPException(status_code=404, detail="Sidan finns inte.")
