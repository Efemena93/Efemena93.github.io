#!/usr/bin/env python3
"""Crop the three phone mockups out of the HearEase connect-flow sheet.

Produces `public/work/hearease/connect-flow-cover.webp`, the homepage
gallery cover for HearEase. Reproducible: re-run it and you get the same
file.

WHY A SEPARATE COVER. `connect-flow.png` is a figure sheet built for the
case-study body — a baked heading, a standfirst, and three captions under
the devices. That makes it wrong for a gallery panel twice over:

  1. The baked heading ("CONNECTING THE GLASSES") competes with the panel's
     own title, which is the templated, two-headings-per-card look the
     brief of 2026-10-27 asked to be rid of.
  2. The captions in the source overlap each other and clip at the right
     edge — "neither activeHighlighted", "still dimmedKeep", "the phor".
     That is a real defect in a published asset and it is still visible on
     the HearEase case-study page, which this script does not touch.

So the cover shows the devices and nothing else. The sheet itself stays
exactly as it is, caption bug and all, until Efemena decides how to fix it.

HOW THE CROP IS FOUND. Nothing is hardcoded to this image's pixel
dimensions. The phone screens are the only near-white areas on a dark
ground, so:

  rows    the longest contiguous run of rows containing near-white — the
          device band, excluding heading and captions above and below
  cols    first to last near-white column — the full span of all three
          phones (the *longest run* would return a single phone, since the
          gaps between devices break the run)

An earlier attempt thresholded on summed RGB brightness and swallowed the
sage heading, whose channels sum above a mid grey. Requiring every channel
to be high keeps it to the screens.
"""

import os

import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public/work/hearease/connect-flow.png")
OUT = os.path.join(ROOT, "public/work/hearease/connect-flow-cover.webp")

# The device body extends past the lit screen: a little above for the notch
# bezel, more below for the chin. PAD_BOTTOM is the tight one — the baked
# caption row begins about 80px under the screens, so anything past ~70 lets
# a sliver of "AT REST / STEP ONE ACTIVE / CONNECTING" back into the cover,
# which is the whole thing this crop exists to remove.
PAD_X, PAD_TOP, PAD_BOTTOM = 16, 26, 62
TARGET_W = 1500


def longest_run(mask):
    runs, start = [], None
    for i, v in enumerate(mask):
        if v and start is None:
            start = i
        elif not v and start is not None:
            runs.append((start, i))
            start = None
    if start is not None:
        runs.append((start, len(mask)))
    return max(runs, key=lambda r: r[1] - r[0])


def main():
    im = Image.open(SRC).convert("RGB")
    a = np.asarray(im).astype(int)
    width, height = im.size

    near_white = (a[..., 0] > 215) & (a[..., 1] > 215) & (a[..., 2] > 215)

    top, bottom = longest_run(near_white.sum(axis=1) > width * 0.10)
    cols = np.where(near_white.sum(axis=0) > height * 0.05)[0]
    left, right = int(cols[0]), int(cols[-1]) + 1

    box = (
        max(0, left - PAD_X),
        max(0, top - PAD_TOP),
        min(width, right + PAD_X),
        min(height, bottom + PAD_BOTTOM),
    )
    crop = im.crop(box)
    crop = crop.resize(
        (TARGET_W, round(crop.size[1] * TARGET_W / crop.size[0])), Image.LANCZOS
    )
    crop.save(OUT, "WEBP", quality=88, method=6)

    print(f"source   {width}x{height}")
    print(f"screens  x {left}..{right}   y {top}..{bottom}")
    print(f"crop box {box}")
    print(
        f"wrote    {os.path.relpath(OUT, ROOT)}  "
        f"{crop.size[0]}x{crop.size[1]}  {os.path.getsize(OUT) // 1024} KB"
    )


if __name__ == "__main__":
    main()
