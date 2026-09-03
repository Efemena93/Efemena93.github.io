import Link from "next/link";

import { AmbientStatus } from "@/components/content/AmbientStatus";
import { CapabilityList } from "@/components/content/CapabilityList";
import { ContactCTA } from "@/components/content/ContactCTA";
import { FeaturedProjectCard } from "@/components/content/FeaturedProjectCard";
import { SignalIndex } from "@/components/content/SignalIndex";
import { Reveal } from "@/components/motion/Reveal";
import { GuideThread, ScrollQuiet } from "@/components/motion/ScrollScene";
import { Container, Eyebrow, LinkButton, Section } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { SignalConstellation } from "@/components/signals/SignalConstellation";
import { featuredCaseStudies } from "@/content/case-studies";
import { profile, site } from "@/content/site";

export default function HomePage() {
  const resumeReady = !site.resumePdf.startsWith("[TODO");

  return (
    <>
      {/* ═══ Hero ═══════════════════════════════════════════════════════════
          Name, discipline and positioning are plain text at first paint, in
          the left column, with no entrance animation and nothing behind them.
          The field occupies the right side only, so it can never sit under
          the words a recruiter came to read.
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" aria-labelledby="hero-name">
        <GlowField />

        {/* The interactive field, offset to the right of the headline column
            so no point can ever sit behind text and no label can reach it.
            Large screens only — see SignalConstellation for why there is no
            touch equivalent. */}
        <div className="absolute inset-y-0 right-0 z-0 hidden lg:left-[56%] lg:block xl:left-[50%]">
          <SignalConstellation />
        </div>

        <Container className="relative z-20 pointer-events-none pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
          <ScrollQuiet>
            <div className="pointer-events-auto lg:max-w-[30rem] xl:max-w-[34rem]">
              <AmbientStatus className="mb-8 h-4" />

              <h1
                id="hero-name"
                className="font-display text-display-1 text-charcoal"
              >
                {site.name}
              </h1>

              <p className="label-type mt-5 text-charcoal-muted">{site.role}</p>

              <p className="mt-8 max-w-[26ch] font-display text-h2 leading-snug text-charcoal-soft sm:max-w-[30ch]">
                &ldquo;{site.positioningFirstPerson}&rdquo;
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <LinkButton href="/work">View selected work</LinkButton>
                <LinkButton href="/about" variant="outline">
                  About me
                </LinkButton>
                {resumeReady ? (
                  <LinkButton href={site.resumePdf} variant="outline" download>
                    Download résumé
                  </LinkButton>
                ) : (
                  // Honest until the PDF exists: this reads the résumé rather
                  // than promising a download that is not there yet.
                  <LinkButton href="/resume" variant="outline">
                    Read résumé
                  </LinkButton>
                )}
              </div>

              <p className="mt-10 max-w-[46ch] text-small text-charcoal-muted">
                Three featured case studies below. The points to the right are the same
                projects, plus the themes and observations they came from —{" "}
                <Link href="#field-index" className="link-underline text-blue-deep">
                  or read them all as a list
                </Link>
                .
              </p>
            </div>
          </ScrollQuiet>
        </Container>

      </section>

      {/* The thread that leads the eye out of the hero and into the work.
          Placed between the sections rather than inside the hero, so it is
          never clipped by the hero's own overflow. */}
      <div className="relative hidden lg:block">
        <GuideThread className="pointer-events-none absolute left-1/2 top-0 h-28 w-32 -translate-x-1/2" />
      </div>

      {/* ═══ The field, as text ════════════════════════════════════════════
          Always present, at every breakpoint. The constellation is a second
          way in, never the only one.
          ══════════════════════════════════════════════════════════════════ */}
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
              study; themes and observations link to the project they came from, so nothing
              here is a claim without a source.
            </p>
          </div>
          <SignalIndex />
        </Container>
      </Section>

      {/* ═══ Featured work ═════════════════════════════════════════════════ */}
      <Section labelledBy="featured-heading" className="border-t border-line">
        <Container>
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 lg:mb-16">
            <Eyebrow as="h2" id="featured-heading">
              Selected work
            </Eyebrow>
            <Link href="/work" className="link-underline label-type text-charcoal">
              All six projects →
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-20 lg:grid-cols-12">
            {featuredCaseStudies.map((study, index) => (
              <div
                key={study.slug}
                className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <Reveal delay={index === 0 ? 0 : 60}>
                  <FeaturedProjectCard study={study} index={index} large={index === 0} />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══ Introduction ══════════════════════════════════════════════════ */}
      <Section spacing="tight" labelledBy="intro-heading" className="border-t border-line">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="intro-heading">
                Introduction
              </Eyebrow>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <Reveal>
                <div className="measure space-y-5 text-lead text-charcoal-soft">
                  {profile.intro.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-8">
                  <Link href="/about" className="link-underline label-type text-charcoal">
                    More about how I work →
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ Capabilities ══════════════════════════════════════════════════ */}
      <Section labelledBy="capabilities-heading" className="border-t border-line">
        <Container>
          <div className="mb-12 lg:mb-16">
            <Eyebrow as="h2" id="capabilities-heading" className="mb-4">
              Capabilities
            </Eyebrow>
            <p className="measure text-lead text-charcoal-soft">
              I work across research and interface craft rather than choosing one. The list
              below is what I have actually done on shipped or completed projects.
            </p>
          </div>
          <CapabilityList />
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
