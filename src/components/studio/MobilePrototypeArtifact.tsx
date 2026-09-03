import type { CaseStudy } from "@/content/types";

import { SignalThread } from "./SignalThread";
import { StudioArtifact } from "./StudioArtifact";

/**
 * The mobile prototype — SyncHearts.
 *
 * A phone standing on the studio desk, showing two schematic interface
 * states that cross-fade slowly.
 *
 * ── Why the screens are abstract ──────────────────────────────────────────
 * There are no approved SyncHearts screens in the repository, and the
 * amendment is explicit: do not create fake product screens. So the two
 * states are geometric regions — a header band, message rows, a composer —
 * with no invented copy, no invented feature names and no invented data.
 * They read as "an interface being designed", which is true, rather than as
 * "the product", which would not be. The alternative text says so.
 *
 * ── The interaction ───────────────────────────────────────────────────────
 * The two states cross-fade on an 9s cycle: slow enough to be ambient rather
 * than a slideshow demanding attention, and it stops entirely under reduced
 * motion, which leaves state A composed and legible. The message signal runs
 * once between two points on hover or focus.
 */

export function MobilePrototypeArtifact({
  study,
  index,
  className,
  raise,
}: {
  study: CaseStudy;
  index: number;
  className?: string;
  raise?: "sm" | "md";
}) {
  return (
    <StudioArtifact
      className={className}
      raise={raise}
      study={study}
      index={index}
      subtitle="Supporting connection across distance and conflicting schedules"
      discipline="UX research + product design"
      sceneDescription="An illustration of a phone standing on a desk. Its screen alternates slowly between two schematic interface layouts — bands and blocks standing in for a message list and a composer — and a small signal travels between two points beside it. The screens are abstract placeholders, not the product's real interface."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-clay"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <clipPath id="mp-screen">
            <rect x="118" y="32" width="64" height="124" rx="5" />
          </clipPath>
        </defs>

        {/* Phone on a dock, standing on the desk. */}
        <ellipse cx="150" cy="178" rx="58" ry="4" fill="#000" opacity="0.5" />
        <rect x="112" y="24" width="76" height="140" rx="11" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.34" strokeWidth="1" />
        <rect x="118" y="32" width="64" height="124" rx="5" className="fill-sunk" />
        <rect x="104" y="164" width="92" height="12" rx="3" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.22" />

        <g clipPath="url(#mp-screen)">
          {/* State A — a list of conversations. */}
          <g className="screen-state-a">
            <rect x="118" y="32" width="64" height="16" className="fill-clay" opacity="0.3" />
            {[54, 74, 94, 114].map((y, i) => (
              <g key={y}>
                <circle cx="129" cy={y + 6} r="4" className="fill-clay" opacity="0.45" />
                <rect x="138" y={y + 2} width={i % 2 ? 26 : 36} height="3.5" rx="1.75" className="fill-charcoal" opacity="0.36" />
                <rect x="138" y={y + 9} width={i % 2 ? 38 : 30} height="3" rx="1.5" className="fill-charcoal" opacity="0.18" />
              </g>
            ))}
            <rect x="124" y="136" width="52" height="12" rx="6" className="fill-clay" opacity="0.3" />
          </g>

          {/* State B — one thread, with a composer. */}
          <g className="screen-state-b">
            <rect x="118" y="32" width="64" height="16" className="fill-blue" opacity="0.3" />
            <rect x="125" y="56" width="34" height="14" rx="5" className="fill-charcoal" opacity="0.22" />
            <rect x="143" y="76" width="32" height="14" rx="5" className="fill-clay" opacity="0.4" />
            <rect x="125" y="96" width="28" height="14" rx="5" className="fill-charcoal" opacity="0.22" />
            <rect x="147" y="116" width="28" height="11" rx="5" className="fill-clay" opacity="0.32" />
            <rect x="124" y="138" width="52" height="11" rx="5" className="fill-charcoal" opacity="0.16" />
          </g>
        </g>

        {/* Two points, and one message crossing between them. */}
        <circle cx="34" cy="72" r="4" className="fill-clay" />
        <circle cx="266" cy="112" r="4" className="fill-clay" />
        <SignalThread d="M34 72 C 70 30, 228 34, 266 112" restingOpacity={0.28} travelDuration="1.6s" />
      </svg>
    </StudioArtifact>
  );
}
