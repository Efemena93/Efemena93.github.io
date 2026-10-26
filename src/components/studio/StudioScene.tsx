import Link from "next/link";

import { Container, Eyebrow } from "@/components/primitives";
import type { CaseStudy } from "@/content/types";

import { HealthDashboardArtifact } from "./HealthDashboardArtifact";
import { HearEaseArtifact } from "./HearEaseArtifact";
import { IotVentureArtifact } from "./IotVentureArtifact";
import { MerlinMonitorArtifact } from "./MerlinMonitorArtifact";
import { VirtualBuddyArtifact } from "./VirtualBuddyArtifact";
import { VocHubArtifact } from "./VocHubArtifact";
import { ZalandoBlueprintArtifact } from "./ZalandoBlueprintArtifact";

/**
 * StudioScene — section 02, the desk the work sits on.
 *
 * Revised for the floating-studio homepage: the introduction has moved out to
 * StudioHero and taken the whole first viewport with it, so this section now
 * begins below the fold, under its own heading, and contains nothing but
 * work. That separation is the point of the revision — the studio is the
 * experience, the projects are discovered after it.
 *
 * ── Order ─────────────────────────────────────────────────────────────────
 * IoT Venture, SpellCarver, Zalando, HearEase, then the remaining projects in
 * their existing relative order. DOM order is that order, at every
 * breakpoint, so what a keyboard or screen-reader user meets matches what a
 * sighted user reads. No `order-*` utility reshuffles anything here.
 *
 * IoT Venture takes the first row largely to itself — the widest column, the
 * only one given a full row — because it is the flagship shipped product.
 * Everything after it shares a two-column rhythm with staggered offsets, so
 * no project reads as filler.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component throughout. Illumination and the 2–4px lift are CSS on
 * `group-hover` / `group-focus-within`. Nothing follows the pointer, so
 * keyboard and touch get the identical experience.
 */

export interface StudioArtifacts {
  iotVenture: CaseStudy;
  merlinMines: CaseStudy;
  zalando: CaseStudy;
  hearEase: CaseStudy;
  oliveIlive: CaseStudy;
  vocHub: CaseStudy;
  virtualBuddy: CaseStudy;
}

export function StudioScene({ artifacts }: { artifacts: StudioArtifacts }) {
  const { iotVenture, merlinMines, zalando, hearEase, oliveIlive, vocHub, virtualBuddy } =
    artifacts;

  return (
    <div className="relative border-t border-line bg-paper">
      {/* The transition out of the hero: the room's light falls away and the
          work surface begins. Decorative, opt-out aware. */}
      <div
        aria-hidden="true"
        className="atmosphere pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-charcoal) 5%, transparent) 0%, transparent 100%)",
        }}
      />

      <Container className="relative pb-16 pt-16 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 lg:mb-20">
          <div>
            <Eyebrow as="h2" id="selected-work-heading">
              Selected work
            </Eyebrow>
            <p className="mt-4 max-w-[44ch] text-body text-charcoal-soft">
              Seven projects, shipped products, a graduate team project and self-directed
              studies. Each one opens into the reasoning behind it.
            </p>
          </div>
          <Link href="/work" className="link-underline label-type text-charcoal-soft">
            View all work →
          </Link>
        </div>

        {/* ── 1. IoT Venture, the flagship, given its own row ── */}
        <div className="grid lg:grid-cols-12">
          <IotVentureArtifact
            study={iotVenture}
            index={1}
            className="lg:col-span-8 lg:col-start-1 lg:h-auto"
          />
        </div>

        {/* ── 2 and 3. SpellCarver and Zalando ── */}
        <div className="mt-20 grid gap-y-16 border-t border-line pt-14 md:grid-cols-2 md:gap-x-8 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pt-16">
          <MerlinMonitorArtifact
            study={merlinMines}
            index={2}
            className="lg:col-span-5 lg:h-auto"
          />
          <ZalandoBlueprintArtifact
            study={zalando}
            index={3}
            className="lg:col-span-6 lg:col-start-7 lg:mt-16 lg:h-auto"
          />
        </div>

        {/* ── 4 and 5. HearEase and Olive-Ilive ── */}
        <div className="mt-20 grid gap-y-16 border-t border-line pt-14 md:grid-cols-2 md:gap-x-8 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pt-16">
          <HearEaseArtifact
            study={hearEase}
            index={4}
            className="lg:col-span-5 lg:col-start-2 lg:h-auto"
          />
          <HealthDashboardArtifact
            study={oliveIlive}
            index={5}
            className="lg:col-span-5 lg:col-start-8 lg:mt-20 lg:h-auto"
          />
        </div>

        {/* ── 6 and 7. VocHub and VirtualBuddy ── */}
        <div className="mt-20 grid gap-y-16 border-t border-line pt-14 md:grid-cols-2 md:gap-x-8 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pt-16">
          <VocHubArtifact
            study={vocHub}
            index={6}
            className="lg:col-span-5 lg:col-start-1 lg:h-auto"
          />
          <VirtualBuddyArtifact
            study={virtualBuddy}
            index={7}
            className="lg:col-span-5 lg:col-start-7 lg:mt-16 lg:h-auto"
          />
        </div>
      </Container>
    </div>
  );
}

/** Ambient labels — a statement of what the room is for, not a live status. */
export function StudioAmbient() {
  const words = ["Researching", "Designing", "Testing", "Reflecting"];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <p
        aria-hidden="true"
        className="label-type flex flex-wrap gap-x-3 gap-y-1 text-charcoal-muted"
      >
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
