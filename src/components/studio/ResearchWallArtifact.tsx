import type { CaseStudy } from "@/content/types";

import { SignalThread } from "./SignalThread";
import { StudioArtifact } from "./StudioArtifact";

/**
 * The research wall — Holding Pattern.
 *
 * A pinned wall of research material: note cards on warm cream paper, an
 * emotional-journey line, a deployment timeline along the bottom, evidence
 * markers, and two separated points joined by a single restrained signal.
 *
 * ── What the notes say ────────────────────────────────────────────────────
 * Nothing. They are ruled lines, not text. There are no participant
 * quotations here, real or invented — the amendment forbids inventing them
 * and the approved case-study content has none to borrow. Rendering
 * unreadable pretend handwriting would imply evidence that does not exist,
 * so the notes are explicitly abstract: paper with rules on it.
 *
 * ── The interaction ───────────────────────────────────────────────────────
 * At rest the notes sit at small, uneven angles, as pinned paper does. On
 * hover or keyboard focus they straighten slightly — the gesture of someone
 * tidying a wall to look at it properly — and the signal runs once between
 * the two separated points. Both are CSS transforms with no JavaScript, and
 * both are neutralised under reduced motion, leaving the wall composed and
 * complete.
 */

/** x, y, width, height, resting rotation, rule count. */
const NOTES: Array<[number, number, number, number, number, number]> = [
  [34, 64, 62, 42, -3.2, 3],
  [108, 60, 62, 42, 2.6, 2],
  [182, 66, 62, 42, -1.6, 3],
  [70, 108, 62, 40, 2.4, 2],
  [150, 110, 62, 40, -2.0, 2],
];

/** Evidence markers: x, y. Small illuminated points of inquiry. */
const EVIDENCE: Array<[number, number]> = [
  [102, 110],
  [176, 106],
  [246, 116],
  [58, 152],
];

export function ResearchWallArtifact({
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
      title="Holding Pattern"
      subtitle="Emotional continuity during military deployment"
      discipline="Graduate capstone · Research in progress"
      sceneDescription="An illustration of a research wall: pinned note cards, a line tracing emotional highs and lows across a deployment, a timeline along the bottom, and two separated points joined by a fine signal. The notes are abstract — ruled paper rather than transcribed quotations."
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-blue"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="rw-board" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.09" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* The board, standing on the desk. */}
        <ellipse cx="150" cy="174" rx="128" ry="4" fill="#000" opacity="0.5" />
        <rect x="16" y="10" width="268" height="162" rx="3" fill="url(#rw-board)"
              stroke="currentColor" strokeOpacity="0.26" />

        {/* Emotional journey across the deployment, and the timeline under it.
            A shape, not a data set: it plots no numbers and claims none. */}
        <path
          d="M30 42 C 58 28, 74 26, 92 32 S 128 46, 150 40 S 190 22, 210 30 S 252 44, 270 36"
          fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          opacity="0.6"
          className="transition-opacity duration-500 group-hover:opacity-95 group-focus-within:opacity-95"
        />
        {[[30, 42], [92, 32], [150, 40], [210, 30], [270, 36]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="2.5" className="fill-blue" opacity="0.85" />
        ))}
        <line x1="30" y1="52" x2="270" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.26" />
        {[30, 90, 150, 210, 270].map((x) => (
          <line key={x} x1={x} y1="49" x2={x} y2="55" stroke="currentColor" strokeWidth="1" opacity="0.32" />
        ))}

        {/* Pinned notes. Warm cream paper with rules on it — deliberately not
            text: there are no participant quotations to reproduce, and drawing
            unreadable pretend handwriting would imply evidence that does not
            exist. They straighten slightly on hover or focus. */}
        {NOTES.map(([x, y, w, h, rot, rules], i) => (
          <g
            key={i}
            className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:[transform:rotate(0deg)] group-focus-within:[transform:rotate(0deg)]"
            style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px`, transform: `rotate(${rot}deg)` }}
          >
            <rect x={x} y={y} width={w} height={h} rx="1.5" className="fill-parchment" opacity="0.94" />
            <circle cx={x + w / 2} cy={y + 5} r="1.8" className="fill-clay" opacity="0.95" />
            {Array.from({ length: rules }).map((_, r) => (
              <rect
                key={r}
                x={x + 8}
                y={y + 16 + r * 9}
                width={r === rules - 1 ? w - 30 : w - 16}
                height="2.2"
                rx="1.1"
                fill="#2E2A24"
                opacity="0.26"
              />
            ))}
          </g>
        ))}

        {/* Evidence markers — small illuminated points of inquiry. */}
        {EVIDENCE.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" className="fill-sage" opacity="0.75" />
        ))}

        {/* The two separated points, and the one signal between them: two
            people, a distance, a line that has to carry everything. */}
        <circle cx="42" cy="160" r="4" className="fill-clay" />
        <circle cx="258" cy="160" r="4" className="fill-clay" />
        <SignalThread d="M42 160 C 110 146, 190 146, 258 160" restingOpacity={0.32} className="text-clay" />
      </svg>
    </StudioArtifact>
  );
}
