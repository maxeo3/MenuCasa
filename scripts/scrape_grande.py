#!/usr/bin/env python3
"""Scarica il menù del grande dal sito della scuola e aggiorna data/grande.json.

Solo libreria standard: gira identico in locale e nella GitHub Action.
Scrive il file solo se il menù è cambiato (così la Action non fa commit inutili).
"""
import datetime as dt
import html
import json
import pathlib
import re
import sys
import urllib.request

URL = "https://www.angeli-custodi.com/cosa-si-mangia"
OUT = pathlib.Path(__file__).resolve().parent.parent / "data" / "grande.json"
KEEP_DAYS = 56  # quante settimane passate conservare (8)

DAY_RE = re.compile(r"^(LUNED|MARTED|MERCOLED|GIOVED|VENERD)[IÌ]\s*['’`]?\s*$", re.I)
RANGE_RE = re.compile(r"dal\s+(\d{1,2})/(\d{1,2})(?:/(\d{2,4}))?\s+al\s+(\d{1,2})/(\d{1,2})", re.I)
DAY_INDEX = {"LUNED": 0, "MARTED": 1, "MERCOLED": 2, "GIOVED": 3, "VENERD": 4}


def html_to_lines(raw: str) -> list[str]:
    start = raw.find("<main")
    end = raw.find("</main>")
    if start != -1 and end != -1:
        raw = raw[start:end]
    raw = re.sub(r"(?is)<(script|style)\b.*?</\1>", "", raw)
    raw = re.sub(r"(?i)<br\s*/?>|</(p|h[1-6]|div|li|section)>", "\n", raw)
    raw = re.sub(r"<[^>]+>", "", raw)
    text = html.unescape(raw).replace("\xa0", " ")
    return [re.sub(r"\s+", " ", ln).strip() for ln in text.split("\n")]


def pick_year(day: int, month: int, today: dt.date) -> dt.date:
    best = None
    for y in (today.year - 1, today.year, today.year + 1):
        try:
            d = dt.date(y, month, day)
        except ValueError:
            continue
        if best is None or abs((d - today).days) < abs((best - today).days):
            best = d
    return best


def parse(lines: list[str], today: dt.date) -> dict:
    weeks: dict = {}
    cur = None      # settimana corrente
    day = None      # indice giorno corrente
    last_label = ""
    for ln in lines:
        if not ln:
            day = None if (cur and day is not None and cur["days"][day]) else day
            continue
        if "SETTIMANA" in ln.upper() and len(ln) < 40:
            last_label = ln.strip().upper()
            continue
        m = RANGE_RE.search(ln)
        if m:
            d0, m0, y0 = int(m.group(1)), int(m.group(2)), m.group(3)
            if y0:
                y = int(y0) + (2000 if len(y0) == 2 else 0)
                first = dt.date(y, m0, d0)
            else:
                first = pick_year(d0, m0, today)
            monday = first - dt.timedelta(days=first.weekday())
            cur = {"label": last_label.title(), "range": m.group(0), "days": [[], [], [], [], []]}
            weeks[monday.isoformat()] = cur
            day = None
            continue
        if ln.upper().startswith("MENU"):
            day = None
            continue
        dm = DAY_RE.match(ln)
        if dm and cur is not None:
            day = DAY_INDEX[dm.group(1).upper()]
            continue
        if cur is not None and day is not None and len(cur["days"][day]) < 5 and len(ln) < 80:
            cur["days"][day].append(ln)
    # scarta settimane vuote
    return {k: v for k, v in weeks.items() if any(v["days"])}


def main() -> int:
    today = dt.date.today()
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (MenuCasa menu reader)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        raw = r.read().decode("utf-8", errors="replace")
    found = parse(html_to_lines(raw), today)
    if not found:
        print("Nessun menù trovato: forse il sito è cambiato. File non modificato.")
        return 0

    old = {"weeks": {}}
    if OUT.exists():
        old = json.loads(OUT.read_text(encoding="utf-8"))
    weeks = dict(old.get("weeks", {}))
    weeks.update(found)
    cutoff = (today - dt.timedelta(days=KEEP_DAYS)).isoformat()
    weeks = {k: weeks[k] for k in sorted(weeks) if k >= cutoff}

    if weeks == old.get("weeks"):
        print(f"Nessuna novità ({len(found)} settimane sul sito).")
        return 0
    OUT.parent.mkdir(parents=True, exist_ok=True)
    data = {"source": URL, "updated": dt.datetime.now().isoformat(timespec="minutes"), "weeks": weeks}
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"Aggiornato: {', '.join(sorted(found))}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
