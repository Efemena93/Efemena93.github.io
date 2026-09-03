/**
 * SignalThread — the connective layer of the studio.
 *
 * A fine line between two points, with a single lit point that travels along
 * it once when the artifact it belongs to is hovered or focused. It is the
 * Signals-of-Care idea rendered as one restrained gesture rather than a
 * particle field: it supports the artifact, it does not compete with it.
 *
 * Always `aria-hidden`. The relationship it draws is stated in the label
 * text; the line is a picture of something already said.
 *
 * Implementation: `stroke-dashoffset` for the draw and `offset-path` for the
 * travelling point, both CSS. No JavaScript, no canvas, no rAF loop. Under
 * reduced motion the global kill-switch zeroes the durations, which leaves
 * the line drawn and the point parked at its start — a static, complete
 * picture rather than a missing one.
 */

export function SignalThread({
  /** SVG path in the parent svg's own coordinate space. */
  d,
  /** Draws the line at rest instead of only on hover. */
  restingOpacity = 0.35,
  className = "",
  travelDuration = "1.4s",
}: {
  d: string;
  restingOpacity?: number;
  className?: string;
  travelDuration?: string;
}) {
  return (
    <g aria-hidden="true" className={className}>
      {/* The thread. Present at rest at low opacity so the connection is
          legible before any interaction, then brightened. */}
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={restingOpacity}
        className="transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-90 group-focus-within:opacity-90"
      />

      {/* The travelling point. Zero radius at rest so nothing moves until
          asked; it grows and runs the path once on hover or focus. */}
      <circle
        r={2.5}
        fill="currentColor"
        className="signal-traveller opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          offsetPath: `path('${d}')`,
          animationDuration: travelDuration,
        }}
      />
    </g>
  );
}
