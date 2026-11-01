#!/usr/bin/env python3
"""Prepare the three exploration covers from Efemena's mockup exports.

Supplied 2026-11-01: presentation mockups for VocHub, VirtualBuddy and
Olive-Ilive — the three projects in "More explorations", which until now
were represented by whatever single screen happened to exist.

Two of the three arrive as PNGs with the devices floating on transparency,
and the alpha is kept rather than flattened. A flattened cover carries its
own background colour, which then sits wrong against the card in one of the
two themes; with alpha the devices sit directly on the card surface and look
correct in both. The transparent margin around them is trimmed first, so the
image is devices rather than devices-and-a-lot-of-nothing.

Run from anywhere:  python3 -I scripts/prepare-exploration-covers.py
"""

import os
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = "/mnt/user-data/attachments/0cba748c-34c6-52b1-9951-2e4854a0136a"

JOBS = [
    # (source file, project slug, output name, target width)
    ("73342d90-image.jpg", "vochub", "mockups.webp", 1200),
    ("a67dfb3c-image.png", "virtualbuddy", "mockups.webp", 1400),
    ("e0c4fb4b-image.png", "olive-ilive", "mockups.webp", 1400),
]

PAD = 12  # a little air left around the trimmed devices


def main():
    for src_name, slug, out_name, target_w in JOBS:
        src = os.path.join(SRC_DIR, src_name)
        if not os.path.exists(src):
            print(f"  SKIP {slug}: source not found ({src_name})")
            continue

        im = Image.open(src)
        before = im.size

        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            bbox = im.getchannel("A").getbbox()
            if bbox:
                box = (
                    max(0, bbox[0] - PAD),
                    max(0, bbox[1] - PAD),
                    min(im.size[0], bbox[2] + PAD),
                    min(im.size[1], bbox[3] + PAD),
                )
                im = im.crop(box)
        else:
            im = im.convert("RGB")

        if im.size[0] > target_w:
            im = im.resize(
                (target_w, round(im.size[1] * target_w / im.size[0])), Image.LANCZOS
            )

        out_dir = os.path.join(ROOT, "public/work", slug)
        os.makedirs(out_dir, exist_ok=True)
        out = os.path.join(out_dir, out_name)
        im.save(out, "WEBP", quality=86, method=6)

        print(
            f"  {slug:14s} {before[0]}x{before[1]} -> {im.size[0]}x{im.size[1]}  "
            f"{'alpha' if im.mode == 'RGBA' else 'opaque'}  "
            f"{os.path.getsize(out) // 1024} KB"
        )
        print(f"                 width: {im.size[0]}, height: {im.size[1]}")


if __name__ == "__main__":
    sys.exit(main())
