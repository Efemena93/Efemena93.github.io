"use client";

import { useEffect, useRef } from "react";

import { useMotionPreference } from "@/components/motion/MotionProvider";

import { takeSignalOrigin } from "./signal-origin";

const ACCENT_VAR = {
  sage: "--color-sage",
  blue: "--color-blue",
  clay: "--color-clay",
} as const;

/**
 * The other half of the spatial transition.
 *
 * If this page was opened by selecting a point in the homepage field, a soft
 * bloom continues outward from exactly where that point was, then clears. If
 * the page was opened any other way — a direct link, the work index, a
 * bookmark — nothing is ever shown.
 *
 * Driven imperatively rather than through state: this is decoration
 * synchronising with an external system (sessionStorage), it renders nothing
 * that React needs to reconcile, and a state round-trip would only add a
 * render for a span that removes itself 700ms later.
 */
export function ArrivalBloom() {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { reduced, resolved } = useMotionPreference();

  useEffect(() => {
    if (!resolved) return;

    const origin = takeSignalOrigin();
    if (!origin) return;

    const el = ref.current;
    // Under reduced motion the origin is still consumed — so it cannot leak
    // into a later navigation — but nothing is drawn.
    if (reduced || !el) return;

    el.style.left = `${origin.xPct}%`;
    el.style.top = `${origin.yPct}%`;
    el.style.background = `radial-gradient(circle, color-mix(in srgb, var(${ACCENT_VAR[origin.accent]}) 40%, transparent) 0%, transparent 68%)`;
    el.style.animation = "signal-arrive 700ms var(--ease-out-soft) forwards";
    el.hidden = false;

    const timer = window.setTimeout(() => {
      if (ref.current) ref.current.hidden = true;
    }, 760);

    return () => window.clearTimeout(timer);
  }, [reduced, resolved]);

  return (
    <span
      ref={ref}
      hidden
      aria-hidden="true"
      className="atmosphere pointer-events-none fixed z-30 block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
    />
  );
}
