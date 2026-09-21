from __future__ import annotations

import time
from collections import defaultdict, deque
from typing import Deque
from fastapi import HTTPException, Request


class RateLimiter:
    def __init__(self, max_requests: int = 5, window_seconds: int = 15 * 60) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._requests: dict[str, Deque[float]] = defaultdict(deque)

    def extract_ip(self, request: Request) -> str:
        forwarded = request.headers.get("x-forwarded-for")
        if forwarded:
            return forwarded.split(",")[0].strip()
        return request.client.host if request.client else "unknown"

    def check(self, ip: str) -> None:
        now = time.time()
        attempts = self._requests[ip]
        while attempts and now - attempts[0] > self.window_seconds:
            attempts.popleft()
        if len(attempts) >= self.max_requests:
            raise HTTPException(
                status_code=429,
                detail="För många försök från din anslutning. Vänta en stund och prova igen.",
            )
        attempts.append(now)


rate_limiter = RateLimiter()
