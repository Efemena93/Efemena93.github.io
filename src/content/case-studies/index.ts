import type { CaseStudy } from "../types";

import { holdingPattern } from "./holding-pattern";
import { oliveIlive } from "./olive-ilive";
import { syncHearts } from "./synchearts";
import { virtualBuddy } from "./virtualbuddy";
import { vocHub } from "./vochub";
import { windchill } from "./windchill";

export const caseStudies: CaseStudy[] = [
  holdingPattern,
  syncHearts,
  oliveIlive,
  windchill,
  vocHub,
  virtualBuddy,
].sort((a, b) => a.order - b.order);

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** Next / previous, wrapping, so a reader is never left at a dead end. */
export function adjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return { next: undefined, previous: undefined };
  return {
    next: caseStudies[(index + 1) % caseStudies.length],
    previous: caseStudies[(index - 1 + caseStudies.length) % caseStudies.length],
  };
}
