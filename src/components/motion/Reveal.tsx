"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useMotionPreference } from "./MotionProvider";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Milliseconds. Use sparingly — long delays feel like slow loading. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
}

/**
 * Scroll entrance for a single element.
 *
 * Never used on above-the-fold hero copy: the first thing a recruiter reads
 * must be present at first paint, not waiting on an intersection.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { reduced, resolved } = useMotionPreference();
  const Component = motion[as];

  if (!resolved || reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
    >
      {children}
    </Component>
  );
}
