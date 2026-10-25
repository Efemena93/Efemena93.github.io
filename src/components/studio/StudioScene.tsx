import Link from "next/link";
import type { ReactNode } from "react";

import { Container, LinkButton } from "@/components/primitives";
import type { CaseStudy } from "@/content/types";
import { site } from "@/content/site";

import { HealthDashboardArtifact } from "./HealthDashboardArtifact";
import { IotVentureArtifact } from "./IotVentureArtifact";
import { MerlinMonitorArtifact } from "./MerlinMonitorArtifact";
import { VirtualBuddyArtifact } from "./VirtualBuddyArtifact";
import { VocHubArtifact } from "./VocHubArtifact";
import { ZalandoBlueprintArtifact } from "./ZalandoBlueprintArtifact";

/**
 * StudioScene — the composed stage: the introduction, three professional-work
 * artifacts and three case-study artifacts sharing one continuous surface.
 *
 * Built from the visual reference in docs/references/homepage-studio-concept.png,
 * per the 2026-09-03 professional-artifacts revision to the amendment. The
 * reference is inspiration, not an asset: nothing here is a flattened image.
 * Every word is selectable text, every artifact is a semantic link to a real
 * route, and the whole thing is responsive.
 *
 * ── The composition ───────────────────────────────────────────────────────
 * Two rows on one desk. The first row is professional work — Zalando's
 * blueprint on the wall (left), the IoT Venture phone and connected-bike
 * device on the desk (centre, raised), Merlin Mines' monitor (right) — given
 * the strongest visual prominence and a lifted, illuminated hover state. The
 * second row is quieter but not diminished: Olive-Ilive, VocHub and
 * VirtualBuddy, sitting lower and without the raise, but sharing the same
 * desk surface, the same object language and their own connecting thread.
 *
 * DOM order in each row is the reading/priority order (also the mobile
 * order): IoT Venture, Zalando, Merlin Mines, then Olive-Ilive, VocHub,
 * VirtualBuddy. The professional-work row uses `lg:order-*` to place Zalando
 * on the left and Merlin Mines on the right at scene widths, matching the
 * reference composition, without changing the reading order a keyboard or
 * screen-reader user gets.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component throughout. Illumination, thread visibility and the 2–4px
 * lift are CSS on `group-hover` / `group-focus-within`. Nothing follows the
 * pointer, so keyboard and touch get the identical experience.
 */

/** One signal line joining the two artifacts beside the introduction. Decorative —
 *  the relationship is stated in text. */
function OpeningSignal() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-[38%] top-[44%] hidden h-24 w-[26%] lg:block"
    >
      <path
        d="M4 96 C 110 100, 150 14, 396 24"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="1.25"
        strokeDasharray="3 6"
        opacity="0.7"
      />
      <circle cx="4" cy="96" r="4" fill="var(--color-amber)" />
      <circle cx="396" cy="24" r="4" fill="var(--color-amber)" />
    </svg>
  );
}

export interface StudioArtifacts {
  iotVenture: CaseStudy;
  zalando: CaseStudy;
  merlinMines: CaseStudy;
  oliveIlive: CaseStudy;
  vocHub: CaseStudy;
  virtualBuddy: CaseStudy;
}

export function StudioScene({
  artifacts,
  /** The introduction, rendered into the scene's upper-left quarter. */
  intro,
}: {
  artifacts: StudioArtifacts;
  intro: ReactNode;
}) {
  const { iotVenture, zalando, merlinMines, oliveIlive, vocHub, virtualBuddy } = artifacts;

  return (
    <div className="relative">
      {/* Soft directional light, falling from the upper left across the room.
          Decorative and opt-out-aware via .atmosphere. */}
      <div
        aria-hidden="true"
        className="atmosphere pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 18% 0%, color-mix(in srgb, var(--color-charcoal) 6%, transparent) 0%, transparent 62%)",
        }}
      />

      <Container className="relative pb-16 pt-12 sm:pt-14 lg:pb-24 lg:pt-16">
        {/* ── The opening corner ──────────────────────────────────────────
            The introduction is one object among others: a research artifact
            (Zalando's blueprint) and a product artifact (the IoT Venture
            phone), joined by a signal line. DOM order is reading order. */}
        <div className="relative grid gap-y-14 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0">
          <div className="lg:col-span-4 lg:pr-4">{intro}</div>

          <OpeningSignal />

          <div className="grid gap-y-14 md:grid-cols-2 md:gap-x-8 lg:col-span-8 lg:grid-cols-[1.1fr_0.8fr] lg:items-start">
            <ZalandoBlueprintArtifact study={zalando} index={1} className="lg:mt-6 lg:h-auto" />
            <IotVentureArtifact study={iotVenture} index={2} className="lg:mt-24 lg:h-auto" />
          </div>
        </div>

        {/* ── Row two: a wide interface crop with a monitor offset beside it ── */}
        <div className="relative mt-20 grid gap-y-14 border-t border-line pt-14 md:grid-cols-2 md:gap-x-8 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pt-16">
          <HealthDashboardArtifact
            study={oliveIlive}
            index={3}
            className="lg:col-span-7 lg:h-auto"
          />
          <MerlinMonitorArtifact
            study={merlinMines}
            index={4}
            className="lg:col-span-4 lg:col-start-9 lg:mt-20 lg:h-auto"
          />
        </div>

        {/* ── Row three: two collected, slightly staggered objects ── */}
        <div className="relative mt-20 grid gap-y-14 md:grid-cols-2 md:gap-x-8 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0">
          <VocHubArtifact study={vocHub} index={5} className="lg:col-span-5 lg:col-start-2 lg:h-auto" />
          <VirtualBuddyArtifact
            study={virtualBuddy}
            index={6}
            className="lg:col-span-5 lg:col-start-8 lg:mt-16 lg:h-auto"
          />
        </div>
      </Container>
    </div>
  );
}

/**
 * The introduction block. Name, role and value, in plain text, before
 * anything interactive — a recruiter must be able to read it without touching
 * the studio.
 */
export function StudioIntro() {
  return (
    <>
      <p className="label-type eyebrow-tick mb-6 text-blue-deep">
        Efemena Udezi · {site.hero.eyebrow}
      </p>

      <h1 id="hero-heading" className="max-w-[13ch] font-display text-display-2 text-charcoal">
        Welcome to my studio.
      </h1>

      <p className="mt-6 max-w-[46ch] text-body text-charcoal-soft">
        I’m Efemena, a product and interaction designer interested in the signals people
        leave behind - what they do, what they feel and what systems often fail to notice.
      </p>
      <p className="mt-4 max-w-[46ch] text-body text-charcoal-soft">
        This is where I collect those signals, connect patterns and turn them into
        thoughtful experiences.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <LinkButton href="/work">View all work</LinkButton>
        <LinkButton href="/resume" variant="outline">
          Résumé
        </LinkButton>
        <LinkButton href="/contact" variant="outline">
          Contact
        </LinkButton>
      </div>
    </>
  );
}

/** Ambient labels — a statement of what the room is for, not a live status. */
export function StudioAmbient() {
  const words = ["Researching", "Designing", "Testing", "Reflecting"];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <p aria-hidden="true" className="label-type flex flex-wrap gap-x-3 gap-y-1 text-charcoal-muted">
        {words.map((word, i) => (
          <span key={word} className="flex items-center gap-3">
            {word}
            {i < words.length - 1 ? (
              <span className="inline-block h-px w-4 bg-line-strong" />
            ) : null}
          </span>
        ))}
      </p>
      <Link href="/work" className="link-underline label-type text-charcoal-soft">
        View all work →
      </Link>
    </div>
  );
}
