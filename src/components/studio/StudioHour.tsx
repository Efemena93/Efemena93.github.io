"use client";

import { useSyncExternalStore } from "react";

/**
 * StudioHour, one line that changes with the visitor's own clock.
 *
 * A studio is a room someone is in at a particular hour, and a room that
 * reads the same at seven in the morning and eleven at night is a page
 * pretending to be a room. This is the smallest honest way to let the site
 * notice when you arrived.
 *
 * ── What it must not do ───────────────────────────────────────────────────
 * It is not a status, and it does not imply anyone is here. "Currently
 * designing" on a static page is a small lie that a visitor can catch simply
 * by returning at three in the morning. These lines describe the hour, not
 * the designer's availability.
 *
 * ── Hydration ─────────────────────────────────────────────────────────────
 * The server has no idea what time it is where the reader is, so rendering
 * an hour-dependent string during SSG and again on the client guarantees a
 * mismatch. `useSyncExternalStore` is the sanctioned way to say "the server
 * and the first client render agree on nothing here": it returns the server
 * snapshot until hydration finishes, then the client one. That avoids both
 * the mismatch and the setState-in-an-effect pattern, which triggers a
 * second render pass for every reader.
 *
 * The slot keeps its height while empty, so nothing below it moves when the
 * line appears.
 */

const HOURS: Array<{ from: number; to: number; line: string }> = [
  { from: 5, to: 11, line: "A morning for noticing" },
  { from: 11, to: 14, line: "A midday for making" },
  { from: 14, to: 18, line: "An afternoon for revising" },
  { from: 18, to: 22, line: "An evening for reading back" },
  { from: 22, to: 29, line: "A late hour for thinking" },
];

function lineForHour(hour: number): string {
  // The last band wraps past midnight, so hours before 5 are read as 24+.
  const h = hour < 5 ? hour + 24 : hour;
  return HOURS.find((band) => h >= band.from && h < band.to)?.line ?? HOURS[0].line;
}

/** Nothing to subscribe to: the hour is read once, at hydration. */
const subscribe = () => () => {};

export function StudioHour() {
  const line = useSyncExternalStore(
    subscribe,
    () => lineForHour(new Date().getHours()),
    () => null,
  );

  return (
    <p className="label-type min-h-5 text-[var(--studio-ink-muted)]" aria-live="off">
      {line}
    </p>
  );
}
