"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useMotionPreference } from "./MotionProvider";

/**
 * Staggered entrance for a list.
 *
 * The stagger is capped so a long list never leaves its last item waiting:
 * beyond six children the delay stops increasing.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const { reduced, resolved } = useMotionPreference();
  const Component = motion[as];

  if (!resolved || reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.07 } } }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  index?: number;
}) {
  const { reduced, resolved } = useMotionPreference();
  const Component = motion[as];

  if (!resolved || reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        shown: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1],
            delay: Math.min(index, 6) * 0.07,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
