"""
Grade the studio photograph so it reads as a room someone works in.

Three moves, in order, all on the original PNG so nothing compounds a
previous export:

  1. A gentle S-curve on luminance. Lifts the shadow detail (the pinboard,
     the shelf clutter, the books under the desk) without blowing the window,
     which is where "lived in" actually lives: in the stuff, not the mood.
  2. A warm grade. A touch more red in the highlights and a touch less blue
     in the shadows, which is what late-afternoon light through a sheer
     curtain does, and what the room is lit by.
  3. Fine grain. Low amplitude, luminance-only, slightly stronger in the
     midtones than in the highlights, so it reads as film rather than noise.
     This is what stops a rendered interior looking rendered.
"""
import os
import numpy as np
from PIL import Image

os.chdir("/home/claude/efemena93.github.io")
SRC = "public/studio/studio-room.png"  # the untouched original, never overwritten
OUT = "public/studio"

im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.float32) / 255.0

# ── 1. S-curve, applied to luminance and reapplied to the channels, so the
#       hue does not shift as contrast changes.
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
# lift shadows, hold highlights: a soft gamma plus a gentle contrast pivot
lifted = np.power(lum, 0.88)                       # open the shadows
curved = 0.5 + (lifted - 0.5) * 1.07               # a little midtone snap
curved = np.clip(curved, 0.0, 1.0)
gain = np.divide(curved, np.maximum(lum, 1e-4))
gain = np.clip(gain, 0.0, 2.2)[..., None]
a = np.clip(a * gain, 0.0, 1.0)

# ── 2. Warm grade. Weight by luminance so highlights warm and shadows cool
#       slightly, rather than a flat sepia wash over everything.
w = a[..., :1]  # placeholder to keep shape clear
l2 = (0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2])[..., None]
a[..., 0] = np.clip(a[..., 0] + 0.030 * l2[..., 0] + 0.008, 0, 1)   # red
a[..., 1] = np.clip(a[..., 1] + 0.010 * l2[..., 0], 0, 1)           # green
a[..., 2] = np.clip(a[..., 2] - 0.022 * (1.0 - l2[..., 0]), 0, 1)   # blue

# ── 3. Grain. Deterministic seed so a rebuild is byte-reproducible.
rng = np.random.default_rng(20261027)
h, wdt = a.shape[:2]
grain = rng.normal(0.0, 1.0, (h, wdt))
# strongest in the midtones, almost absent at both ends
l3 = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
weight = 4.0 * l3 * (1.0 - l3)
a = np.clip(a + (grain * 0.011 * weight)[..., None], 0.0, 1.0)

graded = Image.fromarray((a * 255.0 + 0.5).astype(np.uint8), "RGB")
print("graded master held in memory; only the exports are written")

# ── exports, same shapes as before so the markup does not change
W, H = graded.size
for tw in (768, 1152, 1536):
    if tw > W:
        continue
    r = graded.resize((tw, round(H * tw / W)), Image.LANCZOS)
    p = f"{OUT}/studio-room-{tw}.webp"
    r.save(p, "WEBP", quality=84, method=6)
    print(f"  {os.path.basename(p):<34} {r.size[0]}x{r.size[1]}  {os.path.getsize(p)//1024} KB")

# portrait crop, same aspect as the existing mobile asset (0.702)
target = 0.702
ch = H
cw = int(round(ch * target))
# the crop the brief settled on: monitor, desk and shelving, reading corner dropped
left = int(round((W - cw) * 0.28))
port = graded.crop((left, 0, left + cw, ch))
for tw in (480, 720):
    r = port.resize((tw, round(port.size[1] * tw / port.size[0])), Image.LANCZOS)
    p = f"{OUT}/studio-room-portrait-{tw}.webp"
    r.save(p, "WEBP", quality=84, method=6)
    print(f"  {os.path.basename(p):<34} {r.size[0]}x{r.size[1]}  {os.path.getsize(p)//1024} KB")
