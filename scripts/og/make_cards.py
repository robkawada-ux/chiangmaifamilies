"""Render the Chiang Mai Families share cards (1200x630) and app icons.

Run from the repo root:  python3 scripts/og/make_cards.py
Needs Playwright (pip install playwright && playwright install chromium) and Pillow.
Every page must emit an og:image; see SECTION_CARDS in src/lib/seo.ts.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]

LOGO = """<svg width="80" height="80" viewBox="0 0 68 68"><circle cx="34" cy="11" r="9" fill="#C8553D"/><circle cx="57" cy="34" r="9" fill="#6FB3C8"/><circle cx="34" cy="57" r="9" fill="#2F6B4F"/><circle cx="11" cy="34" r="9" fill="#8DC63F"/></svg>"""

HILLS = """<svg viewBox="0 0 1200 260" preserveAspectRatio="none" style="position:absolute;left:0;bottom:0;width:1200px;height:260px">
<path d="M0 260 L0 130 L140 60 L260 130 L400 20 L540 120 L660 70 L800 150 L940 40 L1080 120 L1200 80 L1200 260 Z" fill="#C8553D" opacity="0.55"/>
<path d="M0 260 L0 190 L170 120 L320 180 L500 105 L680 185 L860 115 L1020 175 L1200 130 L1200 260 Z" fill="#24543E"/>
<g fill="none" stroke-linecap="round">
<path id="r" d="M 900 262 C 830 236, 1010 214, 920 190 S 830 160, 900 142" stroke="#1f1530" stroke-width="30"/>
<path d="M 900 262 C 830 236, 1010 214, 920 190 S 830 160, 900 142" stroke="#2b2b2b" stroke-width="24"/>
<path d="M 900 262 C 830 236, 1010 214, 920 190 S 830 160, 900 142" stroke="#fff" stroke-width="3" stroke-dasharray="12 12"/>
</g>
<g fill="#E3A12F" stroke="#2E2420" stroke-width="2.5"><rect x="884" y="132" width="32" height="10"/><path d="M 888 132 C 888 112, 912 112, 912 132 Z"/><path d="M 896 116 L 900 92 L 904 116 Z"/></g>
</svg>"""

def card(title, sub):
    return f"""<html><body style="margin:0"><div style="position:relative;width:1200px;height:630px;overflow:hidden;background:#2F6B4F;font-family:Georgia,serif;color:#fff">
<div style="position:absolute;left:72px;top:56px;display:flex;align-items:center;gap:22px"><div style="background:#fff;border-radius:28px;padding:12px;display:flex">{LOGO}</div><span style="font-size:46px;font-weight:700">Chiang Mai Families</span></div>
<div style="position:absolute;left:72px;top:205px;width:1070px">
<div style="font-family:Arial,sans-serif;font-weight:900;letter-spacing:6px;font-size:26px;color:#F5EEE1">YOUR CHIANG MAI ROADMAP</div>
<div style="margin-top:18px;font-size:56px;font-weight:700;line-height:1.1">{title.replace("Chiang Mai","Chiang&nbsp;Mai")}</div>
<div style="margin-top:16px;font-family:Arial,sans-serif;font-size:28px;color:#EAF2EE">{sub}</div></div>
{HILLS}</div></body></html>"""

CARDS = {
    "src/app/opengraph-image.png": ("Schools and family life in Chiang Mai", "International schools compared by area, curriculum and fees"),
    "src/app/schools/opengraph-image.png": ("International Schools in Chiang Mai", "Compared by area, curriculum and budget"),
    "src/app/camps/opengraph-image.png": ("Holiday Camps in Chiang Mai", "Christmas, Songkran and summer, with real dates and prices"),
    "src/app/activities/opengraph-image.png": ("Things to Do With Kids in Chiang Mai", "Days out and weekly classes, with real prices"),
    "src/app/blog/opengraph-image.png": ("Family life in Chiang Mai, explained", "Practical guides for families in the north"),
    "public/images/og/blog/christmas-holiday-camps-chiang-mai-2026.png": ("Christmas Holiday Camps in Chiang Mai 2026", "Dates, ages and prices for December and January"),
    "public/images/og/blog-default.png": ("Guides for Chiang Mai families", "From the team behind BKK Families"),
}
ALT = {
    "src/app/opengraph-image.alt.txt": "The Chiang Mai Families four-dot logo on a mountain green card with cartoon hills and a road winding up to a temple, and the words Your Chiang Mai Roadmap: schools and family life in Chiang Mai.",
    "src/app/schools/opengraph-image.alt.txt": "The Chiang Mai Families four-dot logo on a mountain green card with cartoon hills and a road, and the words International Schools in Chiang Mai.",
    "src/app/camps/opengraph-image.alt.txt": "The Chiang Mai Families four-dot logo on a mountain green card with cartoon hills and a road, and the words Holiday Camps in Chiang Mai.",
    "src/app/activities/opengraph-image.alt.txt": "The Chiang Mai Families four-dot logo on a mountain green card with cartoon hills and a road, and the words Things to Do With Kids in Chiang Mai.",
    "src/app/blog/opengraph-image.alt.txt": "The Chiang Mai Families four-dot logo on a mountain green card with cartoon hills and a road, and the words Family life in Chiang Mai, explained.",
}

ICON = f"""<html><body style="margin:0;background:#fff"><div style="width:180px;height:180px;display:flex;align-items:center;justify-content:center;background:#fff">{LOGO.replace('width="80" height="80"','width="150" height="150"')}</div></body></html>"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 630})
    for out, (t, s) in CARDS.items():
        pg.set_content(card(t, s)); pg.screenshot(path=str(ROOT / out))
        print("wrote", out)
    pg.set_viewport_size({"width": 180, "height": 180})
    pg.set_content(ICON); pg.screenshot(path=str(ROOT / "src/app/apple-icon.png"))
    b.close()
for path, text in ALT.items():
    (ROOT / path).write_text(text + "\n")
im = Image.open(ROOT / "src/app/apple-icon.png").convert("RGBA")
im.save(ROOT / "src/app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("icons done")
