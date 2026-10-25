import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * Merlin Mines — the main studio monitor, showing an abstract workflow
 * diagram, with a small notes card beside it.
 *
 * Schematic throughout: connected nodes standing in for the engineers'
 * workflow, no invented labels or data. There is no approved employer
 * content in the repository — see docs/homepage-studio-amendment.md.
 *
 * On hover or focus the diagram's layers come into focus and one path
 * through the nodes is highlighted — CSS opacity and colour only,
 * neutralised under reduced motion.
 */
export function MerlinMonitorArtifact({
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
      title="SpellCarver"
      subtitle={study.premise}
      discipline={study.projectType}
      sceneDescription="An illustration of a studio monitor showing an abstract workflow diagram of connected nodes, with a small notes card beside it. This is an illustrative reconstruction, not a real project screen."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-clay"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Monitor on the desk. */}
        <ellipse cx="140" cy="176" rx="90" ry="4" fill="#000" opacity="0.5" />
        <rect x="42" y="16" width="196" height="126" rx="5" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        <rect x="48" y="22" width="184" height="114" rx="2" className="fill-sunk" />
        <rect x="128" y="142" width="24" height="26" className="fill-raised" opacity="0.95" />
        <rect x="104" y="168" width="72" height="7" rx="3.5" className="fill-raised" opacity="0.95" />

        {/* Workflow diagram — connected nodes, one path highlighted. */}
        <g className="opacity-65 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          {[
            [66, 88],
            [104, 56],
            [104, 118],
            [148, 78],
            [190, 56],
            [190, 108],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 12} y={y - 9} width="24" height="18" rx="3" className="fill-charcoal" opacity="0.1" />
          ))}

          <path
            d="M78 88 L 92 62 L 136 82 L 178 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="opacity-40 transition-[opacity,stroke] duration-500 group-hover:text-clay group-hover:opacity-90 group-focus-within:text-clay group-focus-within:opacity-90"
          />
          <line x1="78" y1="94" x2="92" y2="112" stroke="currentColor" strokeOpacity="0.22" />
          <line x1="116" y1="118" x2="136" y2="88" stroke="currentColor" strokeOpacity="0.22" />
          <line x1="160" y1="82" x2="178" y2="104" stroke="currentColor" strokeOpacity="0.22" />

          {[
            [66, 88],
            [104, 56],
            [104, 118],
            [148, 78],
            [190, 56],
            [190, 108],
          ].map(([x, y], i) => (
            <circle
              key={`${x}-${y}-dot`}
              cx={x}
              cy={y}
              r="3"
              className={i === 0 || i === 1 || i === 3 || i === 4 ? "fill-clay" : "fill-charcoal"}
              opacity={i === 0 || i === 1 || i === 3 || i === 4 ? 0.85 : 0.3}
            />
          ))}
        </g>

        {/* Small notes card beside the monitor. */}
        <rect x="250" y="90" width="34" height="46" rx="2" className="fill-parchment" opacity="0.92" />
        {[100, 110, 120].map((y) => (
          <rect key={y} x="256" y={y} width={y === 120 ? 14 : 22} height="2" rx="1" fill="#2E2A24" opacity="0.24" />
        ))}
      </svg>
    </StudioArtifact>
  );
}
