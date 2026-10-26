import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * Zalando — a service blueprint pinned to the research wall, with a small
 * row of design-token swatches beneath it.
 *
 * Schematic throughout: swimlanes and touchpoints with no invented copy, and
 * token swatches that are plain colour chips rather than a reproduced brand
 * palette. There is no approved employer content in the repository — see
 * docs/homepage-studio-amendment.md.
 *
 * On hover or focus the blueprint's lanes separate slightly and the token
 * swatches brighten — CSS opacity and transform only, neutralised under
 * reduced motion.
 */
export function ZalandoBlueprintArtifact({
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
      title="Zalando"
      subtitle="Plus early access and design-system contributions"
      discipline="Service design · Design systems · Product strategy"
      sceneDescription="The Zalando logo. The work was a service blueprint with touchpoints and design-token contributions."
      symbol="garment"
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-sage"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* The board, standing on the desk. */}
        <ellipse cx="150" cy="176" rx="128" ry="4" fill="#000" opacity="0.5" />
        <rect x="16" y="14" width="268" height="118" rx="3" className="fill-sunk"
              stroke="currentColor" strokeOpacity="0.26" />

        {/* Swimlanes, separating slightly on hover/focus. */}
        <g className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:[transform:translateY(-2px)] group-focus-within:[transform:translateY(-2px)]">
          <line x1="30" y1="42" x2="270" y2="42" stroke="currentColor" strokeOpacity="0.2" />
          <text x="30" y="36" className="fill-charcoal" opacity="0.3" fontSize="7" fontFamily="inherit">Front stage</text>
        </g>
        <g className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:[transform:translateY(0px)] group-focus-within:[transform:translateY(0px)]">
          <line x1="30" y1="82" x2="270" y2="82" stroke="currentColor" strokeOpacity="0.2" />
          <text x="30" y="76" className="fill-charcoal" opacity="0.3" fontSize="7" fontFamily="inherit">Back stage</text>
        </g>
        <g className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:[transform:translateY(2px)] group-focus-within:[transform:translateY(2px)]">
          <line x1="30" y1="122" x2="270" y2="122" stroke="currentColor" strokeOpacity="0.2" />
          <text x="30" y="116" className="fill-charcoal" opacity="0.3" fontSize="7" fontFamily="inherit">Support</text>
        </g>

        {/* Touchpoints, one column per stage of the journey. */}
        {[54, 96, 138, 180, 222, 258].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="42" r="3" className="fill-sage" opacity={i % 2 ? 0.55 : 0.9} />
            <circle cx={x} cy="82" r="3" className="fill-blue" opacity={i % 3 === 0 ? 0.85 : 0.4} />
            <circle cx={x} cy="122" r="3" className="fill-clay" opacity={i % 2 ? 0.35 : 0.7} />
            <line x1={x} y1="45" x2={x} y2="79" stroke="currentColor" strokeOpacity="0.14" />
            <line x1={x} y1="85" x2={x} y2="119" stroke="currentColor" strokeOpacity="0.14" />
          </g>
        ))}

        {/* Design-token swatches, brightening on hover/focus. */}
        <g className="opacity-70 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          {[
            ["#3E5C76", 30],
            ["#7C9885", 62],
            ["#C97C5D", 94],
            ["#2E2A24", 126],
          ].map(([fill, x]) => (
            <rect key={x as string} x={x as number} y="146" width="24" height="16" rx="2" fill={fill as string} opacity="0.55" />
          ))}
          <rect x="166" y="146" width="112" height="6" rx="3" className="fill-charcoal" opacity="0.14" />
          <rect x="166" y="156" width="80" height="6" rx="3" className="fill-charcoal" opacity="0.14" />
        </g>
      </svg>
    </StudioArtifact>
  );
}
