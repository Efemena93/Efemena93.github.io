import type { NextConfig } from "next";

/**
 * Static export.
 *
 * `output: "export"` renders every route to plain HTML at build time, into
 * `out/`. No Node server is needed to host the result — GitHub Pages, Netlify,
 * S3, or any static host will serve it.
 *
 * basePath is read from the environment rather than hard-coded, because the
 * right value depends on where the site is published:
 *
 *   https://you.github.io                    → "" (a user site)
 *   https://you.github.io/efemena-portfolio  → "/efemena-portfolio"
 *   https://your-domain.com                  → ""
 *
 * The bundled GitHub Actions workflow works this out from the repository name
 * and sets it, so neither value has to be remembered.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",

  // Directory-style URLs (/work/holding-pattern/index.html), which every
  // static host resolves without rewrite rules.
  trailingSlash: true,

  basePath,
  assetPrefix: basePath || undefined,

  images: {
    // There is no server to optimise images on a static host. The site uses
    // inline SVG rather than bitmaps, so this costs nothing today — and it
    // keeps next/image usable if real cover artwork is added later.
    unoptimized: true,
  },
};

export default nextConfig;
