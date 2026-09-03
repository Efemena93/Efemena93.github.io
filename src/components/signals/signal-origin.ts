/**
 * Spatial continuity between the homepage field and a case study.
 *
 * When a point in the constellation is selected we remember where it sat on
 * screen. The destination page resumes the movement from those coordinates,
 * so the transition reads as travelling to the thing rather than as a page
 * swap that happens to be animated.
 *
 * Stored in sessionStorage because it must survive a route change and must
 * not survive the tab. It is read once and cleared.
 */

export interface SignalOrigin {
  /** Viewport-relative percentage, 0–100. */
  xPct: number;
  yPct: number;
  accent: "sage" | "blue" | "clay";
  at: number;
}

const KEY = "eu:signal-origin";
/** Older than this and the arrival is not a continuation of anything. */
const MAX_AGE_MS = 4000;

export function setSignalOrigin(origin: Omit<SignalOrigin, "at">): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ ...origin, at: Date.now() }));
  } catch {
    /* storage unavailable — the transition simply will not be spatial */
  }
}

export function takeSignalOrigin(): SignalOrigin | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SignalOrigin;
    if (typeof parsed?.xPct !== "number" || typeof parsed?.yPct !== "number") return null;
    if (Date.now() - parsed.at > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}
