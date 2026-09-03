"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { useMotionPreference } from "./MotionProvider";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { reduced, resolved } = useMotionPreference();

  if (!resolved || reduced) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
