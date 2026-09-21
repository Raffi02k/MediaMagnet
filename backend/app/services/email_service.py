from __future__ import annotations

import smtplib
from email.message import EmailMessage
from backend.app.config import settings
from backend.app.schemas import LeadPayload, SubmissionResult


class EmailService:
    def submit(self, payload: LeadPayload) -> SubmissionResult:
        if not settings.is_smtp_configured:
            return SubmissionResult(
                status="preview",
                message="Formuläret är validerat men SMTP är inte konfigurerat ännu.",
            )

        message = EmailMessage()
        message["Subject"] = f"Ny MediaMagnet-förfrågan – {payload.service} – {payload.name}"
        message["From"] = settings.smtp_from_email
        message["To"] = settings.contact_to_email
        message["Reply-To"] = payload.email
        message.set_content(
            "\n".join(
                [
                    "Ny förfrågan från MediaMagnet",
                    "",
                    f"Typ: {payload.form_type}",
                    f"Namn: {payload.name}",
                    f"Företag: {payload.company or '-'}",
                    f"E-post: {payload.email}",
                    f"Telefon: {payload.phone or '-'}",
                    f"Tjänst: {payload.service}",
                    f"Nuvarande hemsida: {payload.websiteUrl or '-'}",
                    f"Budget: {payload.budget or '-'}",
                    f"Tidsram: {payload.timeline or '-'}",
                    "",
                    "Meddelande:",
                    payload.message,
                ]
            )
        )

        with smtplib.SMTP(
            settings.smtp_host,
            settings.smtp_port,
            timeout=20,
        ) as smtp:
            if settings.smtp_use_tls:
                smtp.starttls()
            if settings.smtp_username:
                smtp.login(settings.smtp_username, settings.smtp_password)
            smtp.send_message(message)

        return SubmissionResult(
            status="sent",
            message="Tack! Din förfrågan har skickats via e-post.",
        )
