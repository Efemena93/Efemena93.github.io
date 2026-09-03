/**
 * Paper grain. A single inline SVG turbulence, fixed to the viewport, so it
 * costs one paint and no network request. Multiplied at ~4% so it reads as
 * surface rather than noise, and removed entirely under prefers-contrast,
 * prefers-reduced-transparency and forced-colors (see globals.css).
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="atmosphere pointer-events-none fixed inset-0 z-50 opacity-[0.038] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
