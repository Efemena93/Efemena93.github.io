import { seededRandom } from "@/lib/utils";

/**
 * A project's cover, until there is artwork.
 *
 * Rather than a grey rectangle, each project gets its own constellation:
 * seeded from the slug, so it is stable, unique per project, and unmistakably
 * part of the same environment as the hero field. Replace with next/image
 * when real covers exist — nothing else has to change.
 */

const ACCENT: Record<Accent, { line: string; dot: string; wash: string }> = {
  sage: {
    line: "var(--color-sage)",
    dot: "var(--color-sage)",
    wash: "color-mix(in srgb, var(--color-sage) 16%, transparent)",
  },
  blue: {
    line: "var(--color-blue)",
    dot: "var(--color-blue)",
    wash: "color-mix(in srgb, var(--color-blue) 16%, transparent)",
  },
  clay: {
    line: "var(--color-clay)",
    dot: "var(--color-clay)",
    wash: "color-mix(in srgb, var(--color-clay) 16%, transparent)",
  },
};

export type Accent = "sage" | "blue" | "clay";

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function CoverField({
  seed,
  accent,
  density = 14,
}: {
  seed: string;
  accent: Accent;
  density?: number;
}) {
  const rand = seededRandom(hashString(seed));
  const colours = ACCENT[accent];

  const W = 800;
  const H = 500;

  const points = Array.from({ length: density }, () => ({
    x: 60 + rand() * (W - 120),
    y: 50 + rand() * (H - 100),
    r: 1.6 + rand() * 2.6,
  }));

  // Connect each point to its nearest two neighbours: a legible constellation
  // rather than the dense mesh the hero field uses.
  const edges: Array<[number, number]> = [];
  points.forEach((p, i) => {
    const ranked = points
      .map((q, j) => ({ j, d: Math.hypot(p.x - q.x, p.y - q.y) }))
      .filter((entry) => entry.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    for (const { j } of ranked) {
      const key: [number, number] = i < j ? [i, j] : [j, i];
      if (!edges.some(([a, b]) => a === key[0] && b === key[1])) edges.push(key);
    }
  });

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <radialGradient id={`wash-${seed}`} cx="32%" cy="28%" r="82%">
          <stop offset="0%" stopColor={colours.wash} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="var(--color-sunk)" />
      <rect width={W} height={H} fill={`url(#wash-${seed})`} />

      <g stroke={colours.line} strokeOpacity="0.38" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={points[a].x.toFixed(1)}
            y1={points[a].y.toFixed(1)}
            x2={points[b].x.toFixed(1)}
            y2={points[b].y.toFixed(1)}
          />
        ))}
      </g>

      <g fill={colours.dot}>
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x.toFixed(1)}
            cy={p.y.toFixed(1)}
            r={p.r.toFixed(2)}
            fillOpacity={(0.45 + (i % 4) * 0.14).toFixed(2)}
          />
        ))}
      </g>
    </svg>
  );
}
