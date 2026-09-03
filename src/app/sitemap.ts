import type { MetadataRoute } from "next";

/** Required by `output: "export"` — this file has no dynamic inputs, so it is
 *  written once at build time. */
export const dynamic = "force-static";

import { publishedCaseStudies } from "@/content/case-studies";
import { fieldNotes } from "@/content/field-notes";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // /resume is deliberately absent: the page is not in the production build
  // until verified employment history exists.
  const staticRoutes = ["", "/work", "/about", "/field-notes", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  // Drafts and archived work are both out: drafts have no page at all,
  // archived pages exist but are deliberately not advertised.
  const work = publishedCaseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: study.featured ? 0.9 : 0.6,
  }));

  const notes = fieldNotes.map((note) => ({
    url: `${site.url}/field-notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...work, ...notes];
}
