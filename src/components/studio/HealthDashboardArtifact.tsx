import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * The health dashboard — Olive-Ilive.
 *
 * A monitor on the studio desk showing a responsive layout in schematic
 * form: a navigation rail, a set of content regions, and a reading pane.
 *
 * ── Why the screen is abstract ────────────────────────────────────────────
 * The amendment says to use real approved screens when available and a
 * clearly labelled abstract placeholder until then. There are none in the
 * repository, so this is the placeholder: regions and rules, no invented
 * medical content, no fabricated record, no numbers. Olive-Ilive is a health
 * portal — a plausible-looking fake health interface is exactly the wrong
 * thing to put on a page, and the abstraction is a safety property as much
 * as an honesty one.
 *
 * ── The interaction ───────────────────────────────────────────────────────
 * At rest the layers sit slightly flattened and dim. On hover or focus they
 * come into focus together and two regions — the navigation rail and the
 * primary content card — take a restrained sage highlight, the colour this
 * site uses for evidence. Pure CSS opacity and colour changes; nothing
 * moves, so reduced motion loses nothing but the transition.
 */

export function HealthDashboardArtifact({
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
      subtitle="Making fragmented health information easier to access"
      discipline="Research, responsive UX and interface design"
      sceneDescription="An illustration of a desktop monitor and a tablet on a desk, showing an abstract responsive layout: a navigation rail, content regions and a reading pane, drawn as plain blocks. This is a labelled placeholder, not the product's real interface."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-sage"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Monitor on the desk, tablet beside it — the same layout, responsive. */}
        <ellipse cx="132" cy="176" rx="76" ry="4" fill="#000" opacity="0.5" />
        <rect x="40" y="18" width="184" height="120" rx="5" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        <rect x="46" y="24" width="172" height="108" rx="2" className="fill-sunk" />
        <rect x="122" y="138" width="20" height="30" className="fill-raised" opacity="0.95" />
        <rect x="100" y="168" width="64" height="6" rx="3" className="fill-raised" opacity="0.95" />

        {/* Screen contents — layered regions that come into focus together,
            with two of them taking a restrained highlight. */}
        <g className="opacity-70 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          {/* Navigation rail — highlighted region 1 */}
          <rect
            x="52" y="30" width="32" height="96" rx="2"
            className="fill-charcoal opacity-[0.07] transition-[fill,opacity] duration-500 group-hover:fill-sage group-hover:opacity-[0.26] group-focus-within:fill-sage group-focus-within:opacity-[0.26]"
          />
          {[38, 52, 66, 80].map((y) => (
            <rect key={y} x="58" y={y} width="20" height="3" rx="1.5" className="fill-charcoal" opacity="0.24" />
          ))}

          {/* Primary content card — highlighted region 2 */}
          <rect
            x="90" y="30" width="122" height="42" rx="2"
            className="fill-charcoal opacity-[0.07] transition-[fill,opacity] duration-500 group-hover:fill-sage group-hover:opacity-[0.19] group-focus-within:fill-sage group-focus-within:opacity-[0.19]"
          />
          <rect x="98" y="38" width="56" height="4" rx="2" className="fill-charcoal" opacity="0.32" />
          <rect x="98" y="48" width="94" height="3" rx="1.5" className="fill-charcoal" opacity="0.17" />
          <rect x="98" y="56" width="76" height="3" rx="1.5" className="fill-charcoal" opacity="0.17" />

          {[[90, 80, 58, 46], [154, 80, 58, 46]].map(([x, y, w, h]) => (
            <g key={x}>
              <rect x={x} y={y} width={w} height={h} rx="2" className="fill-charcoal" opacity="0.05" />
              <rect x={x + 8} y={y + 10} width={w - 26} height="3" rx="1.5" className="fill-charcoal" opacity="0.2" />
              <rect x={x + 8} y={y + 20} width={w - 16} height="2.5" rx="1.25" className="fill-charcoal" opacity="0.12" />
              <rect x={x + 8} y={y + 28} width={w - 30} height="2.5" rx="1.25" className="fill-charcoal" opacity="0.12" />
            </g>
          ))}
        </g>

        {/* Tablet */}
        <ellipse cx="258" cy="176" rx="30" ry="4" fill="#000" opacity="0.45" />
        <rect x="232" y="86" width="52" height="80" rx="4" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="236" y="90" width="44" height="72" rx="2" className="fill-sunk" />
        <rect x="240" y="166" width="36" height="8" rx="3" className="fill-raised" opacity="0.95" />
        <g className="opacity-70 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
          <rect x="240" y="94" width="36" height="12" rx="1.5" className="fill-charcoal" opacity="0.14" />
          <rect x="240" y="110" width="36" height="20" rx="1.5" className="fill-charcoal" opacity="0.08" />
          <rect x="240" y="134" width="36" height="20" rx="1.5" className="fill-charcoal" opacity="0.08" />
        </g>
      </svg>
    </StudioArtifact>
  );
}
