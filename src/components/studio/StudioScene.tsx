import Link from "next/link";
import type { ReactNode } from "react";

import { Container, LinkButton } from "@/components/primitives";
import type { CaseStudy } from "@/content/types";
import { site } from "@/content/site";

import { HealthDashboardArtifact } from "./HealthDashboardArtifact";
import { MobilePrototypeArtifact } from "./MobilePrototypeArtifact";
import { ResearchWallArtifact } from "./ResearchWallArtifact";

/**
 * StudioScene — the composed stage: the introduction and the three case-study
 * artifacts sharing one continuous surface.
 *
 * Built from the visual reference in docs/references/homepage-studio-concept.png.
 * The reference is inspiration, not an asset: nothing here is a flattened
 * image. Every word is selectable text, every artifact is a semantic link to a
 * real route, and the whole thing is responsive.
 *
 * ── The composition ───────────────────────────────────────────────────────
 * At `lg` the introduction occupies the upper-left quarter and the research
 * board sits directly beneath it, with the phone and the monitor to the right
 * on the same desk line. Labels float above their objects. Two fine threads
 * run board → phone → monitor: the Signals-of-Care layer, connecting the
 * three projects rather than decorating them.
 *
 * Below `lg` the scene becomes a vertical shelf. It is not the desktop room
 * shrunk down — the introduction is a normal block of text, and each artifact
 * is a full-width composition at a readable size with its label and CTA
 * always visible.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component throughout. Illumination, thread visibility and the 2–4px
 * lift are CSS on `group-hover` / `group-focus-within`. Nothing follows the
 * pointer, so keyboard and touch get the identical experience.
 */

/** The connective threads. Decorative — the relationship is stated in text. */
function CrossThreads() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-28 hidden h-28 lg:block"
    >
      {/* board → phone: inquiry (indigo) */}
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

      {/* phone → monitor: evidence (sage) */}
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

export function StudioScene({
  wall,
  prototype,
  dashboard,
  /** The introduction, rendered into the scene's upper-left quarter. */
  intro,
}: {
  wall: CaseStudy;
  prototype: CaseStudy;
  dashboard: CaseStudy;
  intro: ReactNode;
}) {
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

        {/* ── The desk ─────────────────────────────────────────────────────
            One row, three objects, bottom-aligned on a shared line. */}
        <div className="relative mt-14 lg:mt-4">
          <CrossThreads />

          <div className="grid gap-y-20 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-[1.15fr_0.78fr_1.02fr] lg:gap-x-8 lg:gap-y-0 lg:pb-12">
            <ResearchWallArtifact study={wall} index={1} />
            <MobilePrototypeArtifact study={prototype} index={2} raise="md" />
            <HealthDashboardArtifact study={dashboard} index={3} raise="sm" />
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
      <p className="label-type eyebrow-tick mb-6 text-blue-deep">{site.hero.eyebrow}</p>

      {/* display-2 rather than display-1: in a five-column well the larger
          size ran to five lines and pushed the studio below the fold. Three
          lines, as in the reference. */}
      <h1 id="hero-heading" className="max-w-[13ch] font-display text-display-2 text-charcoal">
        {site.hero.heading}
      </h1>

      <p className="mt-6 max-w-[46ch] text-body text-charcoal-soft">
        {site.hero.supporting}
      </p>

      <p className="label-type mt-6 text-charcoal-muted">{site.hero.credential}</p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <LinkButton href="#studio-heading">Explore the studio</LinkButton>
        <LinkButton href="/work" variant="outline">
          View all work
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
