from __future__ import annotations

import asyncio
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

from .config import settings
from .rate_limiter import rate_limiter
from .schemas import LeadPayload
from .services import lead_dispatcher

app = FastAPI(
    title="MediaMagnet API",
    version="1.0.0",
    docs_url="/api/docs" if settings.environment != "production" else None,
    redoc_url=None,
)


@app.get("/api/health")
@app.get("/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "provider": settings.effective_provider,
        "web3forms": "configured" if bool(settings.web3forms_access_key) else "missing",
        "crm": "configured" if bool(settings.crm_api_url) else "missing",
        "smtp": "configured" if settings.is_smtp_configured else "missing",
    }


@app.post("/api/contact")
@app.post("/contact")
async def contact(payload: LeadPayload, request: Request):
    # 1. IP Rate limiting
    rate_limiter.check(rate_limiter.extract_ip(request))

    # 2. Honeypot check for bots
    if payload.website:
        return JSONResponse(status_code=202, content={"status": "accepted"})

    # 3. Consent check
    if not payload.consent:
        raise HTTPException(status_code=422, detail="Samtycke krävs.")

    # 4. Dispatch lead to the configured service in worker thread
    try:
        result = await asyncio.to_thread(lead_dispatcher.dispatch, payload)
    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail="Tjänsten kunde inte ta emot meddelandet just nu.",
        ) from exc

    status_code = 202 if result.status == "preview" else 200
    return JSONResponse(
        status_code=status_code,
        content={"status": result.status, "message": result.message},
    )
