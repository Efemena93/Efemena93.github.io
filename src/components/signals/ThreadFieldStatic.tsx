import { THREAD_DISTANCE, THREAD_MAX_ALPHA, buildField } from "./field-seed";

/**
 * One frame of the signal field, rendered as SVG on the server.
 *
 * This is what a visitor sees when motion is reduced, when JavaScript has not
 * arrived, or on a very small screen. It is the same seeded composition as the
 * canvas — the environment is intact, it has simply stopped moving.
 */

const VIEW_W = 1200;
const VIEW_H = 800;
const COUNT = 26;

export function ThreadFieldStatic({ className = "" }: { className?: string }) {
  const points = buildField(COUNT).map((p) => ({
    ...p,
    px: p.x * VIEW_W,
    py: p.y * VIEW_H,
  }));

  // Threads are computed against the same distance rule as the canvas,
  // scaled from CSS pixels into the viewBox.
  const threshold = THREAD_DISTANCE * (VIEW_W / 1440);
  const threads: Array<{ x1: number; y1: number; x2: number; y2: number; a: number }> = [];

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const d = Math.hypot(a.px - b.px, a.py - b.py);
      if (d >= threshold) continue;
      threads.push({
        x1: a.px,
        y1: a.py,
        x2: b.px,
        y2: b.py,
        a: (1 - d / threshold) * THREAD_MAX_ALPHA,
      });
    }
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${className}`}
    >
      <defs>
        <radialGradient id="signal-glow">
          <stop offset="0%" stopColor="var(--color-sage)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--color-sage)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="var(--color-blue)" strokeWidth="1">
        {threads.map((t, i) => (
          <line
            key={i}
            x1={t.x1.toFixed(1)}
            y1={t.y1.toFixed(1)}
            x2={t.x2.toFixed(1)}
            y2={t.y2.toFixed(1)}
            strokeOpacity={t.a.toFixed(3)}
          />
        ))}
      </g>

      <g>
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.px.toFixed(1)}
              cy={p.py.toFixed(1)}
              r={(p.r * 6).toFixed(1)}
              fill="url(#signal-glow)"
            />
            <circle
              cx={p.px.toFixed(1)}
              cy={p.py.toFixed(1)}
              r={p.r.toFixed(2)}
              fill="var(--color-sage)"
              fillOpacity={p.a.toFixed(3)}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
