"use client";

import { motion } from "motion/react";

import { useMotionPreference } from "@/components/motion/MotionProvider";

/**
 * A hairline that draws itself when it enters the viewport. Used as a section
 * rule and across the top of a case-study card on hover.
 *
 * Under reduced motion it is simply a line. It never carries information, so
 * losing the drawing loses nothing.
 */
export function ThreadLine({
  orientation = "horizontal",
  className = "",
  accent = "line",
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  accent?: "line" | "sage" | "blue";
}) {
  const { reduced, resolved } = useMotionPreference();
  const stroke =
    accent === "sage"
      ? "var(--color-sage)"
      : accent === "blue"
        ? "var(--color-blue)"
        : "var(--color-line)";

  const isHorizontal = orientation === "horizontal";

  if (!resolved || reduced) {
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{
          display: "block",
          background: stroke,
          width: isHorizontal ? "100%" : "1px",
          height: isHorizontal ? "1px" : "100%",
        }}
      />
    );
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      preserveAspectRatio="none"
      viewBox={isHorizontal ? "0 0 100 1" : "0 0 1 100"}
      style={{ width: isHorizontal ? "100%" : "1px", height: isHorizontal ? "1px" : "100%" }}
    >
      <motion.line
        x1={0}
        y1={isHorizontal ? 0.5 : 0}
        x2={isHorizontal ? 100 : 0}
        y2={isHorizontal ? 0.5 : 100}
        stroke={stroke}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
