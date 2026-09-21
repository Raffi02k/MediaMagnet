from __future__ import annotations

import re
from pydantic import BaseModel, Field, field_validator


class LeadPayload(BaseModel):
    form_type: str = Field(default="contact", max_length=50)
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(min_length=5, max_length=160)
    phone: str = Field(default="", max_length=40)
    company: str = Field(default="", max_length=160)
    service: str = Field(default="Allmänt", max_length=160)
    websiteUrl: str = Field(default="", max_length=400)
    budget: str = Field(default="", max_length=100)
    timeline: str = Field(default="", max_length=100)
    message: str = Field(min_length=5, max_length=5000)
    consent: bool = Field(default=True)
    website: str = Field(default="", max_length=200)  # Honeypot

    @field_validator("email")
    @classmethod
    def valid_email(cls, value: str) -> str:
        value = value.strip()
        if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", value):
            raise ValueError("Ogiltig e-postadress")
        return value

    @field_validator(
        "form_type",
        "name",
        "phone",
        "company",
        "service",
        "websiteUrl",
        "budget",
        "timeline",
        "message",
        "website",
    )
    @classmethod
    def strip_text(cls, value: str) -> str:
        return value.strip()


class SubmissionResult(BaseModel):
    status: str  # 'sent', 'preview', 'error'
    message: str
