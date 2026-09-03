"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { useMotionPreference } from "./MotionProvider";

/**
 * Scroll-linked behaviour for the homepage.
 *
 * Both components below are scroll-*linked* rather than scroll-triggered:
 * they follow the scroll position continuously instead of firing an
 * animation at a threshold, which is what makes the page feel like one
 * continuous space rather than a sequence of reveals.
 *
 * Under reduced motion both render as plain, fully-visible markup.
 */

/**
 * The hero becomes quieter as the work arrives — it recedes rather than
 * disappearing, and it never moves far enough to be hard to read on the way.
 * Text stays fully opaque for the first third of the travel, so a slow reader
 * is not fading the headline out from under themselves.
 */
export function ScrollQuiet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { reduced, resolved } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1, 0.18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  if (!resolved || reduced) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div ref={ref}>
      <motion.div style={{ opacity, y }}>{children}</motion.div>
    </div>
  );
}

/**
 * A thread that draws itself from the hero down into the featured work as you
 * scroll, so the eye is led rather than jumped. Decorative: it is aria-hidden
 * and carries nothing that is not also in the page structure.
 */
export function GuideThread({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { reduced, resolved } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  if (!resolved || reduced) {
    return (
      <div aria-hidden="true" className={className}>
        <svg
          viewBox="0 0 100 260"
          preserveAspectRatio="none"
          className="h-full w-full"
          focusable="false"
        >
          <path
            d="M50 0 C 50 90, 14 130, 14 260"
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} aria-hidden="true" className={`atmosphere ${className ?? ""}`}>
      <svg
        viewBox="0 0 100 260"
        preserveAspectRatio="none"
        className="h-full w-full"
        focusable="false"
      >
        <motion.path
          d="M50 0 C 50 90, 14 130, 14 260"
          fill="none"
          stroke="var(--color-sage)"
          strokeOpacity="0.5"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
