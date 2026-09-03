import type { MetadataRoute } from "next";

/** Required by `output: "export"` — this file has no dynamic inputs, so it is
 *  written once at build time. */
export const dynamic = "force-static";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
