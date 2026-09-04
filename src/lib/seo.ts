import type { Metadata } from "next";

import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article" | "profile";
  /** Archived work: reachable by direct link, but never indexed or listed. */
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  const desc = description ?? site.description;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: `${title} · ${site.name}`,
      description: desc,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description: desc,
    },
  };
}
