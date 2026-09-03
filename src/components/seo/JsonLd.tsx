import { site } from "@/content/site";

/**
 * Structured data. Emitted server-side; contains only information that is
 * already visible on the page.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.positioning,
    url: site.url,
    sameAs: site.socials.map((s) => s.href).filter((href) => href.startsWith("http")),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CreativeWorkJsonLd({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: `${site.url}/work/${slug}`,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
