import { ImageResponse } from "next/og";

import { site } from "@/content/site";

/**
 * Required for `output: "export"`: tells Next this route has no dynamic
 * inputs, so the PNG can be rendered once at build time and written into
 * `out/` like any other file.
 */
export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card. Deliberately typographic: no photograph, no screenshot, and
 * the same ivory/charcoal relationship as the site, so a shared link looks
 * like it came from here.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f2ea",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#7e9585",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#5a6461",
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, color: "#1e2422", letterSpacing: -2 }}>{site.name}</div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.4,
              color: "#3b4441",
              maxWidth: 900,
            }}
          >
            {site.positioning}
          </div>
        </div>

        <div style={{ display: "flex", height: 1, background: "#d8d0c2" }} />
      </div>
    ),
    size,
  );
}
