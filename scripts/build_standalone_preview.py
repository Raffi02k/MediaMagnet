#!/usr/bin/env python3
"""Keeps the standalone preview file in place for the static Raffi build."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STANDALONE = ROOT / "OPEN_WEBSITE.html"


def main() -> None:
    if not STANDALONE.exists():
        raise SystemExit("OPEN_WEBSITE.html saknas.")
    print("OPEN_WEBSITE.html finns redan och används som portabel preview.")


if __name__ == "__main__":
    main()
