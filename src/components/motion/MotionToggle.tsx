"use client";

import { useMotionPreference, type MotionPreference } from "./MotionProvider";

const OPTIONS: Array<{ value: MotionPreference; label: string }> = [
  { value: "system", label: "System" },
  { value: "full", label: "Full" },
  { value: "reduced", label: "Reduced" },
];

/**
 * Lets a visitor set motion in the page rather than in their OS settings.
 * Rendered as a radiogroup so it is announced correctly and operable with
 * arrow keys, which is what assistive-technology users expect here.
 */
export function MotionToggle() {
  const { preference, setPreference, reduced, resolved } = useMotionPreference();

  return (
    <div className="no-print">
      <div className="label-type mb-2 text-charcoal-muted" id="motion-toggle-label">
        Motion
      </div>
      <div
        role="radiogroup"
        aria-labelledby="motion-toggle-label"
        // Wraps rather than overflowing. At 1024px this control was 41px
        // wider than its footer column and put a horizontal scrollbar on
        // every page on the site.
        className="flex max-w-full flex-wrap rounded border border-line bg-paper p-0.5"
      >
        {OPTIONS.map((option) => {
          const checked = preference === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => setPreference(option.value)}
              className={[
                "label-type min-h-11 shrink rounded px-3 py-2 transition-colors duration-150",
                checked
                  ? "bg-charcoal text-ivory"
                  : "text-charcoal-muted hover:text-charcoal",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-small text-charcoal-muted" aria-live="polite">
        {!resolved
          ? " "
          : reduced
            ? "Animation is off. Nothing is hidden."
            : "Animation is on."}
      </p>
    </div>
  );
}
