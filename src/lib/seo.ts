import type { Metadata } from "next";

import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article" | "profile";
}): Metadata {
  const url = `${site.url}${path}`;
  const desc = description ?? site.description;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
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
