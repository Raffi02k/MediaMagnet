#!/usr/bin/env python3
"""One-click local preview server for the prebuilt Raffi Digital website."""

from __future__ import annotations

import mimetypes
import os
import socket
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "frontend" / "dist"

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("application/manifest+json", ".webmanifest")


def find_available_port(start: int = 4178, attempts: int = 20) -> int:
    for port in range(start, start + attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            try:
                sock.bind(("127.0.0.1", port))
            except OSError:
                continue
            return port
    raise RuntimeError("Kunde inte hitta en ledig lokal port.")


class PreviewHandler(SimpleHTTPRequestHandler):
    server_version = "RaffiDigitalPreview/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST), **kwargs)

    def do_GET(self):  # noqa: N802
        parsed = urlparse(self.path)
        request_path = unquote(parsed.path).lstrip("/")

        if request_path:
            candidate = (DIST / request_path).resolve()
            try:
                candidate.relative_to(DIST.resolve())
            except ValueError:
                self.send_error(403)
                return

            if candidate.is_file():
                super().do_GET()
                return

            html_candidate = (DIST / f"{request_path}.html").resolve()
            if html_candidate.is_file():
                self.path = f"/{request_path}.html"
                super().do_GET()
                return

        self.path = "/index.html"
        super().do_GET()


def main() -> None:
    if not DIST.joinpath("index.html").exists():
        print("Den färdigbyggda webbplatsen saknas i frontend/dist.")
        raise SystemExit(1)

    port = find_available_port(int(os.environ.get("PORT", "4178")))
    address = f"http://127.0.0.1:{port}"
    server = ThreadingHTTPServer(("127.0.0.1", port), PreviewHandler)

    print("\nRaffi Digital – lokal förhandsvisning")
    print(f"Öppnar {address}")
    print("Tryck Ctrl+C i terminalen för att stänga servern.\n")

    threading.Timer(0.7, lambda: webbrowser.open(address)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nFörhandsvisningen stängdes.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
