import Link from "next/link";
import { notFound } from "next/navigation";

import { AtAGlance } from "@/components/content/AtAGlance";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { EthicsPanel } from "@/components/content/EthicsPanel";
import { EvidenceLegend } from "@/components/content/EvidenceLegend";
import { Reveal } from "@/components/motion/Reveal";
import {
  Container,
  Eyebrow,
  MetaList,
  Section,
  TextLink,
} from "@/components/primitives";
import { CreativeWorkJsonLd } from "@/components/seo/JsonLd";
import { ArrivalBloom } from "@/components/signals/ArrivalBloom";
import { GlowField } from "@/components/signals/GlowField";
import { ThreadLine } from "@/components/signals/ThreadLine";
import {
  adjacentCaseStudies,
  getCaseStudy,
  routableCaseStudies,
} from "@/content/case-studies";
import { DISCIPLINE_LABEL, SECTION_LABEL, STATUS_LABEL } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  // Drafts are absent from routableCaseStudies, so no page is generated for
  // them and no URL exists to find.
  return routableCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { next } = adjacentCaseStudies(slug);
  const usesClaims = study.sections.some((section) =>
    section.blocks.some((block) => block.type === "claim" || block.type === "claimGroup"),
  );

  return (
    <>
      {/* Continues the movement from the homepage field, when that is where
          this page was opened from. Renders nothing otherwise. */}
      <ArrivalBloom />

      <CreativeWorkJsonLd
        name={study.title}
        description={study.summary}
        slug={study.slug}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <Container className="relative pb-14 pt-14 sm:pb-20 sm:pt-20">
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link href="/work" className="link-underline label-type text-charcoal-muted">
              ← All work
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Eyebrow>{study.context}</Eyebrow>
            <Eyebrow aria-hidden="true">·</Eyebrow>
            <Eyebrow>{study.year}</Eyebrow>
            {study.status !== "complete" ? (
              <span className="label-type text-clay-deep">{STATUS_LABEL[study.status]}</span>
            ) : null}
          </div>

          <h1 className="mt-6 max-w-[16ch] font-display text-display-2 text-charcoal">
            {study.title}
          </h1>

          <p className="mt-6 measure text-lead text-charcoal-soft">{study.premise}</p>

          <MetaList
            className="mt-12"
            columns={4}
            items={[
              { label: "Role", value: study.roles.join(", ") },
              { label: "Timeline", value: study.timeline },
              {
                label: "Disciplines",
                value: study.disciplines.map((d) => DISCIPLINE_LABEL[d]).join(", "),
              },
              { label: "Tools", value: study.tools.join(", ") },
            ]}
          />

          {study.externalUrl ? (
            <p className="mt-8 text-small text-charcoal-muted">
              <TextLink href={study.externalUrl.href}>{study.externalUrl.label} ↗</TextLink>
            </p>
          ) : null}
        </Container>
      </section>

      {/* ── At a glance ──────────────────────────────────────────────── */}
      <Container>
        <AtAGlance data={study.atAGlance} />
      </Container>

      {/* ── Evidence legend ──────────────────────────────────────────── */}
      {usesClaims ? (
        <Container className="pt-12 sm:pt-16">
          <Reveal>
            <EvidenceLegend />
          </Reveal>
        </Container>
      ) : null}

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <Container className="pb-8 pt-16 sm:pt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Section rail: a thread running the length of the argument. */}
          <aside
            aria-hidden="true"
            className="hidden lg:col-span-1 lg:block"
          >
            <div className="sticky top-32 h-64">
              <ThreadLine orientation="vertical" className="mx-auto" />
            </div>
          </aside>

          <div className="space-y-24 lg:col-span-10 lg:col-start-2 lg:space-y-32">
            {study.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28"
              >
                <header className="mb-10">
                  <Eyebrow className="mb-3">{SECTION_LABEL[section.kind]}</Eyebrow>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-h2 text-charcoal"
                  >
                    {section.title}
                  </h2>
                  {section.standfirst ? (
                    <p className="mt-4 max-w-[52ch] text-lead text-charcoal-soft">
                      {section.standfirst}
                    </p>
                  ) : null}
                </header>

                <div className="space-y-10">
                  {section.blocks.map((block, index) => (
                    <Reveal key={`${section.id}-${index}`}>
                      <BlockRenderer block={block} />
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Ethics ───────────────────────────────────────────────────── */}
      {study.ethics ? (
        <Container className="py-16 sm:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-10 lg:col-start-2">
              <Reveal>
                <EthicsPanel ethics={study.ethics} />
              </Reveal>
            </div>
          </div>
        </Container>
      ) : null}

      {/* ── Next ─────────────────────────────────────────────────────── */}
      {next ? (
        <Section spacing="tight" className="border-t border-line">
          <Container>
            <Eyebrow as="h2" className="mb-6">
              Next project
            </Eyebrow>
            <Link href={`/work/${next.slug}`} className="group block">
              <h3 className="font-display text-display-2 text-charcoal">
                <span className="link-underline">{next.title}</span>
              </h3>
              <p className="mt-4 measure text-body text-charcoal-soft">{next.premise}</p>
            </Link>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
