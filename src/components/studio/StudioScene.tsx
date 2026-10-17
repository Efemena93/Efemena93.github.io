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

/** The connective threads for the professional-work row. Decorative — the
 *  relationship is stated in text. */
function ProfessionalThreads() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-28 hidden h-28 lg:block"
    >
      {/* Zalando → IoT Venture: inquiry (indigo) */}
      <path
        d="M336 86 C 396 86, 404 42, 476 44"
        fill="none"
        stroke="var(--color-blue)"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.5"
      />
      <circle cx="336" cy="86" r="3.5" fill="var(--color-blue)" opacity="0.9" />
      <circle cx="476" cy="44" r="3" fill="var(--color-blue)" opacity="0.7" />

      {/* IoT Venture → Merlin Mines: evidence (sage) */}
      <path
        d="M602 44 C 664 42, 676 76, 748 74"
        fill="none"
        stroke="var(--color-sage)"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.46"
      />
      <circle cx="602" cy="44" r="3" fill="var(--color-sage)" opacity="0.7" />
      <circle cx="748" cy="74" r="3.5" fill="var(--color-sage)" opacity="0.9" />
    </svg>
  );
}

/** A single, quieter thread for the case-studies row: Olive-Ilive → VocHub →
 *  VirtualBuddy, one continuous line rather than two separate ones — this
 *  row is calmer, not busier. */
function CaseStudyThread() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 90"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-16 hidden h-20 lg:block"
    >
      <path
        d="M210 60 C 340 34, 500 78, 620 40 S 780 30, 800 52"
        fill="none"
        stroke="var(--color-clay)"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.38"
      />
      <circle cx="210" cy="60" r="3" fill="var(--color-clay)" opacity="0.75" />
      <circle cx="500" cy="60" r="2.5" fill="var(--color-clay)" opacity="0.5" />
      <circle cx="800" cy="52" r="3" fill="var(--color-clay)" opacity="0.75" />
    </svg>
  );
}

/**
 * Desk props. Three restrained line objects — a stack of books, a closed
 * notebook, a cup — at low contrast along the desk. They give the surface
 * scale and stop the objects floating. Deliberately few: the amendment rules
 * out clutter and literal art supplies, and nothing here should read as
 * clickable.
 */
function DeskProps() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 90"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-1 hidden h-16 text-charcoal-muted lg:block"
    >
      <g stroke="currentColor" strokeOpacity="0.3" fill="none" strokeWidth="1">
        {/* Stack of books, left */}
        <rect x="24" y="40" width="150" height="13" rx="2" />
        <rect x="30" y="53" width="150" height="13" rx="2" />
        <rect x="26" y="66" width="150" height="13" rx="2" />
        {/* Closed notebook, centre-left */}
        <rect x="250" y="52" width="180" height="22" rx="3" />
        <line x1="250" y1="58" x2="430" y2="58" strokeOpacity="0.18" />
        {/* Cup, right of centre */}
        <path d="M690 44 h54 v22 a12 12 0 0 1 -12 12 h-30 a12 12 0 0 1 -12 -12 z" />
        <path d="M744 50 a11 9 0 0 1 0 18" />
        <ellipse cx="717" cy="82" rx="40" ry="4" strokeOpacity="0.16" />
      </g>
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
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* ── Introduction: upper-left quarter ─────────────────────────── */}
          <div className="lg:col-span-5 lg:pr-6">{intro}</div>

          {/* ── The two right-hand labels sit at introduction height, as in
                 the reference. Below lg they are part of their artifact. ── */}
          <div className="hidden lg:col-span-7 lg:block" aria-hidden="true" />
        </div>

        {/* ── Professional work ───────────────────────────────────────────
            Given the strongest visual prominence: raised, illuminated,
            first in reading order. */}
        <div className="relative mt-16 lg:mt-6">
          <h3 id="professional-work-heading" className="label-type mb-8 text-blue-deep lg:mb-6">
            Professional work
          </h3>

          <ProfessionalThreads />

          <div className="grid gap-y-20 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-[1.15fr_0.78fr_1.02fr] lg:gap-x-8 lg:gap-y-0 lg:pb-12">
            <IotVentureArtifact study={iotVenture} index={1} raise="md" className="lg:order-2" />
            <ZalandoBlueprintArtifact study={zalando} index={2} className="lg:order-1" />
            <MerlinMonitorArtifact study={merlinMines} index={3} raise="sm" className="lg:order-3" />
          </div>

          {/* Desk edge and surface. Sits on the object bases. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-12 left-1/2 hidden h-0 w-screen -translate-x-1/2 lg:block"
          >
            {/* Full-bleed: a desk that stops at the text column reads as a
                rectangle drawn on the page rather than a surface. */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color-mix(in_srgb,var(--color-charcoal)_7%,transparent)] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent opacity-80" />
          </div>
          <DeskProps />
        </div>

        {/* ── Selected case studies ────────────────────────────────────────
            Quieter — no raise, no lift into the label band — but sharing the
            same desk surface, object language and a connecting thread. Not
            diminished: same label treatment, same interaction states. */}
        <div className="relative mt-20 border-t border-line pt-14 lg:mt-16 lg:pt-12">
          <h3 id="case-studies-heading" className="label-type mb-8 text-blue-deep lg:mb-6">
            Selected case studies
          </h3>

          <CaseStudyThread />

          <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:pb-4">
            <HealthDashboardArtifact study={oliveIlive} index={4} />
            <VocHubArtifact study={vocHub} index={5} />
            <VirtualBuddyArtifact study={virtualBuddy} index={6} />
          </div>
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
        leave behind — what they do, what they feel and what systems often fail to notice.
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
