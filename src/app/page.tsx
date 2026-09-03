import Link from "next/link";

import { AmbientStatus } from "@/components/content/AmbientStatus";
import { ContactCTA } from "@/components/content/ContactCTA";
import { ProjectSignalCard } from "@/components/content/ProjectSignalCard";
import { SignalIndex } from "@/components/content/SignalIndex";
import { StoryCard } from "@/components/content/StoryCard";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollQuiet } from "@/components/motion/ScrollScene";
import { Container, Eyebrow, LinkButton, Section } from "@/components/primitives";
import { Moon } from "@/components/signals/Atmosphere";
import { SignalConstellation } from "@/components/signals/SignalConstellation";
import { publishedCaseStudies, selectedWork } from "@/content/case-studies";
import { featuredFieldNotes } from "@/content/field-notes";
import { signalNodes, signalThreads } from "@/content/signals";
import { site } from "@/content/site";

/**
 * Homepage.
 *
 * Order is deliberate and follows the brief: hero → selected work → earlier
 * work → practice → field notes → contact. A recruiter who reads only the
 * first two sections has seen the positioning and the three strongest
 * projects; everything after that is for the reader who wants more.
 *
 * The interactive constellation is offset into the right-hand margin at
 * ≥1024px and absent below it, so no point can ever sit behind the words
 * someone came to read. The text index of the same field sits below, at every
 * breakpoint, so the field is never the only way in.
 */

/** Work shown in the compact archive: published, not already featured above. */
const earlierWork = publishedCaseStudies.filter((study) => !study.featured);

export default function HomePage() {
  return (
    <>
      {/* ═══ Hero ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <Moon />

        <div className="absolute inset-y-0 right-0 z-0 hidden lg:left-[56%] lg:block xl:left-[52%]">
          <SignalConstellation nodes={signalNodes} threads={signalThreads} />
        </div>

        <Container className="pointer-events-none relative z-20 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
          <ScrollQuiet>
            <div className="pointer-events-auto lg:max-w-[32rem] xl:max-w-[36rem]">
              <AmbientStatus className="mb-8 h-4" />

              <p className="label-type eyebrow-tick mb-7 text-sage-deep">
                {site.hero.eyebrow}
              </p>

              <h1
                id="hero-heading"
                className="font-display text-display-1 text-charcoal"
              >
                {site.hero.heading}
              </h1>

              <p className="mt-8 measure text-lead text-charcoal-soft">
                {site.hero.supporting}
              </p>

              <p className="label-type mt-7 text-charcoal-muted">
                {site.hero.credential}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <LinkButton href={site.hero.primaryCta.href}>
                  {site.hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={site.hero.secondaryCta.href} variant="outline">
                  {site.hero.secondaryCta.label}
                </LinkButton>
              </div>
            </div>
          </ScrollQuiet>
        </Container>

        <hr className="signal-rule mx-auto w-full max-w-[var(--container-page)]" aria-hidden="true" />
      </section>

      {/* ═══ Selected work ══════════════════════════════════════════════════
          Capstone first and full-width; the other two share a row. */}
      <Section labelledBy="work-heading">
        <Container>
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 lg:mb-16">
            <Eyebrow as="h2" id="work-heading">
              Selected work
            </Eyebrow>
            <Link href="/work" className="link-underline label-type text-charcoal-soft">
              All work →
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-20 lg:grid-cols-12">
            {selectedWork.map((study, index) => (
              <div
                key={study.slug}
                className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <Reveal delay={index === 0 ? 0 : 60}>
                  <ProjectSignalCard
                    study={study}
                    index={index}
                    lead={index === 0}
                    priority={index === 0}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══ Earlier and collaborative work ═════════════════════════════════
          A compact list, not cards. These projects are real and worth
          reaching, but they should not compete with the three above. */}
      {earlierWork.length > 0 ? (
        <Section spacing="tight" labelledBy="earlier-heading" className="border-t border-line">
          <Container>
            <div className="mb-10 lg:mb-12">
              <Eyebrow as="h2" id="earlier-heading" className="mb-4">
                Earlier and collaborative work
              </Eyebrow>
              <p className="measure text-body text-charcoal-soft">
                Projects that came before the three above, or that were smaller in
                scope. Each has a full case study.
              </p>
            </div>

            <ul>
              {earlierWork.map((study) => (
                <li key={study.slug} className="border-t border-line">
                  <Link
                    href={`/work/${study.slug}`}
                    className="group flex flex-wrap items-baseline gap-x-6 gap-y-2 py-6 rounded focus-visible:outline-offset-4 sm:flex-nowrap"
                  >
                    <span className="label-type w-16 shrink-0 text-charcoal-muted">
                      {study.year}
                    </span>
                    <span className="font-display text-h3 text-charcoal sm:w-72 sm:shrink-0">
                      <span className="link-underline">{study.title}</span>
                    </span>
                    <span className="flex-1 text-small text-charcoal-muted">
                      {study.problemArea}
                    </span>
                    <span
                      aria-hidden="true"
                      className="label-type shrink-0 text-blue-deep transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-focus-within:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {/* ═══ Practice statement ═════════════════════════════════════════════ */}
      <Section labelledBy="practice-heading" className="border-t border-line">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="practice-heading">
                How I work
              </Eyebrow>
            </div>
            <div className="mt-6 lg:col-span-9 lg:mt-0">
              <Reveal>
                <p className="measure font-display text-h2 leading-snug text-charcoal">
                  {site.practice.lead}
                </p>
                <div className="mt-8 measure space-y-5 text-body text-charcoal-soft">
                  {site.practice.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-8">
                  <Link href="/about" className="link-underline label-type text-charcoal-soft">
                    More about my practice →
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ Field notes ════════════════════════════════════════════════════ */}
      {featuredFieldNotes.length > 0 ? (
        <Section labelledBy="notes-heading" className="border-t border-line">
          <Container>
            <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 lg:mb-16">
              <Eyebrow as="h2" id="notes-heading">
                Field notes
              </Eyebrow>
              <Link
                href="/field-notes"
                className="link-underline label-type text-charcoal-soft"
              >
                All notes →
              </Link>
            </div>

            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {featuredFieldNotes.map((note, index) => (
                <Reveal key={note.slug} delay={index * 60}>
                  <StoryCard note={note} className="h-full" />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ═══ The field, as text ═════════════════════════════════════════════
          Everything in the constellation, written out — so the field is a
          second way in rather than the only one. */}
      <Section
        id="field-index"
        spacing="tight"
        labelledBy="field-index-heading"
        className="border-t border-line"
      >
        <Container>
          <div className="mb-10 lg:mb-14">
            <Eyebrow as="h2" id="field-index-heading" className="mb-4">
              The field, in full
            </Eyebrow>
            <p className="measure text-body text-charcoal-soft">
              Everything in the constellation, written out. Projects link to their case
              study; themes and observations link to the project they came from, so
              nothing here is a claim without a source.
            </p>
          </div>
          <SignalIndex />
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
