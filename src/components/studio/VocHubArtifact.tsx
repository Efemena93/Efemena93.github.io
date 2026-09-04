import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * VocHub — a small fan of vocabulary cards beside an open notebook, with a
 * compact mobile-learning screen behind them.
 *
 * Schematic throughout: the cards carry no invented words, the notebook is
 * ruled paper, and the phone screen is geometric regions — no real VocHub
 * screens are approved for this page.
 *
 * On hover or focus the cards straighten slightly and the phone screen
 * brightens — CSS transform and opacity only, neutralised under reduced
 * motion.
 */
export function VocHubArtifact({
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
      subtitle="Designing a more engaging vocabulary-learning experience"
      discipline="UX research · Education · Mobile design"
      sceneDescription="An illustration of a small fan of vocabulary cards beside an open, ruled notebook, with a compact phone screen behind them. The cards straighten slightly on hover or focus. The screens and cards are abstract placeholders, not the product's real interface."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-clay"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Small phone screen, behind the cards. */}
        <ellipse cx="230" cy="172" rx="30" ry="4" fill="#000" opacity="0.4" />
        <rect x="204" y="76" width="52" height="96" rx="7" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="209" y="83" width="42" height="76" rx="3" className="fill-sunk" />
        <g className="opacity-65 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          <rect x="213" y="89" width="34" height="12" rx="2" className="fill-clay" opacity="0.32" />
          {[108, 122, 136].map((y) => (
            <rect key={y} x="213" y={y} width="34" height="8" rx="2" className="fill-charcoal" opacity="0.14" />
          ))}
        </g>

        {/* Open notebook, ruled paper. */}
        <ellipse cx="96" cy="176" rx="80" ry="4" fill="#000" opacity="0.45" />
        <path d="M20 108 L 96 100 L 172 108 L 172 168 L 96 160 L 20 168 Z" className="fill-parchment" opacity="0.9"
              stroke="currentColor" strokeOpacity="0.18" />
        <line x1="96" y1="100" x2="96" y2="160" stroke="currentColor" strokeOpacity="0.16" />
        {[120, 132, 144].map((y) => (
          <g key={y}>
            <line x1="30" y1={y} x2="88" y2={y - 2} stroke="#2E2A24" strokeOpacity="0.2" />
            <line x1="104" y1={y - 2} x2="162" y2={y} stroke="#2E2A24" strokeOpacity="0.2" />
          </g>
        ))}

        {/* A small fan of vocabulary cards, straightening on hover/focus. */}
        {[
          [46, 46, -8],
          [72, 40, 4],
          [98, 44, -2],
        ].map(([x, y, rot], i) => (
          <g
            key={i}
            className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:[transform:rotate(0deg)] group-focus-within:[transform:rotate(0deg)]"
            style={{ transformOrigin: `${x + 22}px ${y + 30}px`, transform: `rotate(${rot}deg)` }}
          >
            <rect x={x} y={y} width="44" height="60" rx="4" className="fill-raised" opacity="0.98"
                  stroke="currentColor" strokeOpacity="0.26" />
            <line x1={x + 8} y1={y + 20} x2={x + 36} y2={y + 20} stroke="currentColor" strokeOpacity="0.24" />
            <line x1={x + 8} y1={y + 32} x2={x + 28} y2={y + 32} stroke="currentColor" strokeOpacity="0.16" />
            <circle cx={x + 22} cy={y + 46} r="4" className="fill-clay" opacity="0.4" />
          </g>
        ))}
      </svg>
    </StudioArtifact>
  );
}
