#!/usr/bin/env python3
"""Replace currency amounts in treasures MDX with <Coin> components."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TREASURES = ROOT / "src" / "content" / "docs" / "treasures"

COIN_MAP = {"зм": "g", "см": "s", "мм": "c", "эм": "e", "пм": "p"}
IMPORT_LINE = 'import { Coin } from "~/components";\n'

# 1) Fixed amount: "1 000 зм", "18 000 зм", "0,1 зм", "10 зм", "1,000см"
#    Not when the digits are a die size (preceded by d/D).
AMOUNT_RE = re.compile(
    r"(?<![dD\d])"  # not die size like d6 / d100
    r"(\d{1,3}(?:[ \u00a0]\d{3})+|\d{1,3}(?:,\d{3})+|\d+(?:[.,]\d+)?)"
    r"\s*"
    r"(зм|см|мм|эм|пм)"
    r"(?![\w])"
)

# 2) Dice quantity without fixed face value: "3d8 см", "1d100 мм", "2d4 зм"
DICE_UNIT_RE = re.compile(
    r"(\d+d\d+)\s*(зм|см|мм|эм|пм)(?![\w])"
)


def normalize_num(num: str) -> str:
    n = num.replace(" ", "").replace("\u00a0", "")
    # Decimal comma: 0,1 / 0,25 — not thousand grouping
    if re.fullmatch(r"\d+,\d{1,2}", n):
        return n.replace(",", ".")
    # Thousand separators: 1,000 or 18 000 (spaces already removed)
    return n.replace(",", "")


def coin_tag(num: str | None, unit: str) -> str:
    t = COIN_MAP[unit]
    if num is None:
        return "<Coin />" if t == "g" else f'<Coin t="{t}" />'
    n = normalize_num(num)
    if t == "g":
        return f'<Coin v="{n}" />'
    return f'<Coin v="{n}" t="{t}" />'


def replace_amounts(text: str) -> str:
    text = AMOUNT_RE.sub(lambda m: coin_tag(m.group(1), m.group(2)), text)
    text = DICE_UNIT_RE.sub(
        lambda m: f"{m.group(1)} {coin_tag(None, m.group(2))}", text
    )
    return text


def ensure_import(text: str) -> str:
    if "<Coin" not in text:
        return text
    if "import { Coin }" in text:
        return text
    if not text.startswith("---"):
        return IMPORT_LINE + "\n" + text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return IMPORT_LINE + "\n" + text
    body = parts[2]
    if body.startswith("\n"):
        body = "\n" + IMPORT_LINE + body.lstrip("\n")
        if not body.startswith("\n\n") and not body.startswith("\nimport"):
            pass
        # ensure blank line after import
        rest = body[len("\n" + IMPORT_LINE) :]
        body = "\n" + IMPORT_LINE + "\n" + rest.lstrip("\n")
    else:
        body = "\n" + IMPORT_LINE + "\n" + body
    return f"---{parts[1]}---{body}"


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = replace_amounts(original)
    if updated == original:
        return False
    updated = ensure_import(updated)
    path.write_text(updated, encoding="utf-8")
    return True


def main() -> None:
    # quick self-check
    samples = {
        "18 000 зм": '<Coin v="18000" />',
        "1 000 мм": '<Coin v="1000" t="c" />',
        "0,1 зм": '<Coin v="0.1" />',
        "10 зм": '<Coin v="10" />',
        "1,000см": '<Coin v="1000" t="s" />',
        "3d8 см": '3d8 <Coin t="s" />',
        "1d100 зм": '1d100 <Coin />',
        "1 пм = 5 зм": '<Coin v="1" t="p" /> = <Coin v="5" />',
        "1d6 × 1 000 см": '1d6 × <Coin v="1000" t="s" />',
        "d6 × 1000 зм": 'd6 × <Coin v="1000" />',
    }
    for src, expect in samples.items():
        got = replace_amounts(src)
        if got != expect:
            print(f"FAIL {src!r}\n  got:    {got!r}\n  expect: {expect!r}")
            return
    print("Self-check OK")

    changed = []
    for path in sorted(TREASURES.rglob("*.mdx")):
        if process_file(path):
            changed.append(path.relative_to(ROOT))
            print(f"  updated {path.relative_to(ROOT)}")
    print(f"Done: {len(changed)} file(s).")


if __name__ == "__main__":
    main()
