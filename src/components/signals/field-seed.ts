import { seededRandom } from "@/lib/utils";

/**
 * The composition of the signal field.
 *
 * Seeded, so that:
 *  1. the field looks the same on every visit — it is a place, not noise;
 *  2. the animated canvas and the static reduced-motion SVG show the *same*
 *     arrangement. Turning motion off stops the drift; it does not replace
 *     the picture with a different one.
 */

export interface SignalSeed {
  /** Normalised 0–1 position. */
  x: number;
  y: number;
  /** Normalised velocity per frame at 30fps. */
  vx: number;
  vy: number;
  /** Radius in CSS pixels. */
  r: number;
  /** Base opacity. */
  a: number;
}

export const FIELD_SEED = 20210704;

/** Threads are drawn between points closer than this, in CSS pixels. */
export const THREAD_DISTANCE = 180;
export const THREAD_MAX_ALPHA = 0.32;
export const POINTER_RADIUS = 220;
export const POINTER_PULL = 0.04;
export const POINTER_THREAD_ALPHA = 0.5;

export function buildField(count: number, seed = FIELD_SEED): SignalSeed[] {
  const rand = seededRandom(seed);
  const points: SignalSeed[] = [];

  for (let i = 0; i < count; i += 1) {
    // Bias points away from the dead centre, where the headline sits.
    const x = rand();
    const y = rand();
    const centreBias = Math.hypot(x - 0.5, y - 0.5);
    const pushed = centreBias < 0.18 ? { x: x < 0.5 ? x - 0.16 : x + 0.16, y } : { x, y };

    points.push({
      x: Math.min(0.98, Math.max(0.02, pushed.x)),
      y: Math.min(0.98, Math.max(0.02, pushed.y)),
      vx: (rand() - 0.5) * 0.00028,
      vy: (rand() - 0.5) * 0.00028,
      r: 1.1 + rand() * 1.9,
      a: 0.34 + rand() * 0.42,
    });
  }

  return points;
}

/** Point count scales with viewport so a phone is not asked to do desktop work. */
export function pointCountFor(width: number): number {
  if (width < 380) return 0; // static SVG only
  if (width < 640) return 16;
  if (width < 1024) return 22;
  return 34;
}
