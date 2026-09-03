"use client";

import { useEffect, useState } from "react";

/**
 * A small line that changes with the visitor's own local time.
 *
 * Deliberately about *their* hour, not about mine, and it claims nothing:
 * no visitor count, no "currently available", no "last updated 2 minutes
 * ago", nothing that implies activity which is not happening. It is a way of
 * acknowledging that someone is here at a particular moment, and no more.
 *
 * Rendered client-side only. The server has no idea what time it is where
 * you are, and guessing would be both wrong and a hydration mismatch.
 */

const BANDS: Array<{ until: number; text: string }> = [
  { until: 5, text: "A small hour for wandering" },
  { until: 8, text: "An early morning for noticing" },
  { until: 11, text: "A morning for making" },
  { until: 14, text: "A midday for reading closely" },
  { until: 17, text: "An afternoon for observing" },
  { until: 21, text: "An evening for reflecting" },
  { until: 24, text: "A late evening for quiet work" },
];

export function AmbientStatus({ className }: { className?: string }) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const hour = new Date().getHours();
      setText(BANDS.find((band) => hour < band.until)?.text ?? BANDS[0].text);
    }
    update();
    // Re-check every ten minutes so a long visit crossing a boundary updates.
    const timer = window.setInterval(update, 600_000);
    return () => window.clearInterval(timer);
  }, []);

  // Reserve the line's height so nothing shifts when it appears.
  return (
    <p className={className} aria-live="off">
      <span className="label-type text-charcoal-muted">{text ?? " "}</span>
    </p>
  );
}
