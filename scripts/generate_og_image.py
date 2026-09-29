"""Gera a imagem de preview (Open Graph / social share) do portfolio.

Roda uma unica vez sempre que o texto precisar mudar; a saida
(assets/og-image.png) fica versionada no repositorio.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT_PATH = Path(__file__).resolve().parent.parent / "assets" / "og-image.png"

W, H = 1200, 630
BG = (10, 11, 13)
TEXT = (237, 238, 240)
MUTED = (154, 160, 168)
ACCENT = (91, 155, 219)

FONT_DIR = Path("C:/Windows/Fonts")
name_font = ImageFont.truetype(str(FONT_DIR / "georgiab.ttf"), 78)
tagline_font = ImageFont.truetype(str(FONT_DIR / "arial.ttf"), 34)
stack_font = ImageFont.truetype(str(FONT_DIR / "arial.ttf"), 26)
url_font = ImageFont.truetype(str(FONT_DIR / "arialbd.ttf"), 24)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# glow suave atras do texto (alguns circulos com opacidade baixa, sem blur real)
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
odraw = ImageDraw.Draw(overlay)
odraw.ellipse([-200, -250, 500, 350], fill=(91, 155, 219, 26))
odraw.ellipse([850, -150, 1400, 300], fill=(91, 155, 219, 16))
img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"), (0, 0))
draw = ImageDraw.Draw(img)

margin_x = 90

# linha de destaque
draw.rectangle([margin_x, 150, margin_x + 46, 154], fill=ACCENT)

draw.text((margin_x, 180), "Vinícius de", font=name_font, fill=TEXT)
draw.text((margin_x, 268), "Souza Silva", font=name_font, fill=TEXT)

draw.text((margin_x, 380), "Analista & Engenheiro de Dados", font=tagline_font, fill=ACCENT)

stack_line = "Azure Data Factory  \u00b7  SQL Server  \u00b7  Power BI  \u00b7  dbt  \u00b7  Python"
draw.text((margin_x, 434), stack_line, font=stack_font, fill=MUTED)

draw.text((margin_x, H - 78), "vinnysou.github.io", font=url_font, fill=MUTED)

OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT_PATH, "PNG")
print(f"Salvo em {OUT_PATH} ({img.size[0]}x{img.size[1]})")
