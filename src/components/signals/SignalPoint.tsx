import { cx } from "@/lib/utils";

type Accent = "sage" | "blue" | "clay" | "charcoal";

const FILL: Record<Accent, string> = {
  sage: "bg-sage",
  blue: "bg-blue",
  clay: "bg-clay",
  charcoal: "bg-charcoal",
};

const RING: Record<Accent, string> = {
  sage: "border-sage",
  blue: "border-blue",
  clay: "border-clay",
  charcoal: "border-charcoal",
};

/**
 * A single point of light. Used as a section marker and as a list bullet.
 * Decorative in every usage, so it never carries meaning on its own.
 */
export function SignalPoint({
  accent = "sage",
  variant = "filled",
  className,
}: {
  accent?: Accent;
  variant?: "filled" | "half" | "hollow";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cx("relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center", className)}
    >
      {variant === "filled" ? (
        <span className={cx("h-2 w-2 rounded-full", FILL[accent])} />
      ) : variant === "half" ? (
        <span
          className={cx("h-2 w-2 overflow-hidden rounded-full border", RING[accent])}
        >
          <span className={cx("block h-full w-1/2", FILL[accent])} />
        </span>
      ) : (
        <span className={cx("h-2 w-2 rounded-full border", RING[accent])} />
      )}
    </span>
  );
}
