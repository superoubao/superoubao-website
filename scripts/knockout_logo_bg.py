"""Make near-black pixels transparent in header/favicon PNGs."""
from pathlib import Path

from PIL import Image

# Pixels with max(R,G,B) below this become transparent (removes black square frame)
THRESHOLD = 42


def process(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if max(r, g, b) < THRESHOLD:
                pixels[x, y] = (0, 0, 0, 0)
    img.save(path, optimize=True)
    print(f"OK: {path}")


if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent / "public"
    for name in ("header-logo.png", "favicon.png"):
        p = root / name
        if p.exists():
            process(p)
