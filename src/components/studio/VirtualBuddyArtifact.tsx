import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * VirtualBuddy — a small laptop showing a study-community interface, beside
 * a short stack of collaborative notes.
 *
 * Schematic throughout: the screen is geometric regions standing in for
 * profile cards and a shared feed, and the notes carry no invented text —
 * no real VirtualBuddy screens are approved for this page.
 *
 * On hover or focus the screen brightens and the notes settle flatter —
 * CSS opacity and transform only, neutralised under reduced motion.
 */
export function VirtualBuddyArtifact({
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
      subtitle="A responsive study-community experience"
      discipline="Interface design · Education · Responsive design"
      sceneDescription="An illustration of a small laptop showing a study-community interface — profile cards and a shared feed, drawn as plain blocks — beside a short stack of collaborative notes. This is an illustrative reconstruction, not a real project screen."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-sage"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Laptop, standing on the desk. */}
        <ellipse cx="130" cy="176" rx="92" ry="4" fill="#000" opacity="0.5" />
        <path d="M58 150 L 202 150 L 214 168 L 46 168 Z" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" />
        <rect x="66" y="38" width="128" height="112" rx="4" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        <rect x="72" y="44" width="116" height="100" rx="2" className="fill-sunk" />

        <g className="opacity-65 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          {/* Two profile cards. */}
          {[[80, 50], [136, 50]].map(([x, y]) => (
            <g key={x}>
              <rect x={x} y={y} width="52" height="34" rx="2" className="fill-charcoal" opacity="0.07" />
              <circle cx={x + 12} cy={y + 12} r="6" className="fill-sage" opacity="0.4" />
              <rect x={x + 22} y={y + 8} width="22" height="3" rx="1.5" className="fill-charcoal" opacity="0.24" />
              <rect x={x + 22} y={y + 15} width="16" height="2.5" rx="1.25" className="fill-charcoal" opacity="0.14" />
            </g>
          ))}
          {/* Shared feed. */}
          <rect x="80" y="92" width="108" height="42" rx="2" className="fill-charcoal" opacity="0.05" />
          {[100, 110, 120].map((y, i) => (
            <rect key={y} x="88" y={y} width={i === 2 ? 58 : 92} height="3" rx="1.5" className="fill-charcoal" opacity="0.16" />
          ))}
        </g>

        {/* A short stack of collaborative notes, settling flatter on hover/focus. */}
        {[
          [232, 96, -6],
          [242, 88, 3],
        ].map(([x, y, rot], i) => (
          <g
            key={i}
            className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:[transform:rotate(0deg)] group-focus-within:[transform:rotate(0deg)]"
            style={{ transformOrigin: `${x + 25}px ${y + 34}px`, transform: `rotate(${rot}deg)` }}
          >
            <rect x={x} y={y} width="50" height="66" rx="2" className="fill-parchment" opacity="0.92" />
            {[y + 14, y + 24, y + 34].map((ly, j) => (
              <rect key={ly} x={x + 8} y={ly} width={j === 2 ? 20 : 34} height="2.2" rx="1.1" fill="#2E2A24" opacity="0.22" />
            ))}
          </g>
        ))}
      </svg>
    </StudioArtifact>
  );
}
