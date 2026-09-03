import Link from "next/link";
import { notFound } from "next/navigation";

import { BlockRenderer } from "@/components/content/BlockRenderer";
import { ContactCTA } from "@/components/content/ContactCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow } from "@/components/primitives";
import { getFieldNote, routableFieldNotes } from "@/content/field-notes";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  // Draft stories are absent here, so they generate no page.
  return routableFieldNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) return {};
  return pageMetadata({
    title: note.title,
    description: note.standfirst,
    path: `/field-notes/${note.slug}`,
    type: "article",
  });
}

export default async function FieldNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();

  return (
    <>
      <article>
        <Container className="border-b border-line py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link href="/field-notes" className="link-underline label-type text-charcoal-muted">
              ← All stories
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <time dateTime={note.date} className="label-type text-charcoal-muted">
              {formatDate(note.date)}
            </time>
            <Eyebrow aria-hidden="true">·</Eyebrow>
            <Eyebrow>{note.readingMinutes} min read</Eyebrow>
          </div>

          <h1 className="mt-6 max-w-[20ch] font-display text-display-2 text-charcoal">
            {note.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lead text-charcoal-soft">{note.standfirst}</p>
        </Container>

        <Container className="py-16 sm:py-24">
          <div className="space-y-10">
            {note.blocks.map((block, index) => (
              <Reveal key={index}>
                <BlockRenderer block={block} />
              </Reveal>
            ))}
          </div>
        </Container>
      </article>

      <ContactCTA heading="Disagree with any of this? I would genuinely like to hear it." />
    </>
  );
}
