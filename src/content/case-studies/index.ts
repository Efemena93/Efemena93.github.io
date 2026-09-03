import { assertContentIntegrity, validateCaseStudies } from "../validate";
import type { CaseStudy } from "../types";

import { holdingPattern } from "./holding-pattern";
import { oliveIlive } from "./olive-ilive";
import { syncHearts } from "./synchearts";
import { virtualBuddy } from "./virtualbuddy";
import { vocHub } from "./vochub";
import { windchill } from "./windchill";

/**
 * Every case study in the repository, whatever its visibility.
 *
 * Nothing outside this file should use `allCaseStudies` to render a public
 * surface — use one of the selectors below, which is where the draft rule is
 * actually enforced. This export exists for tooling and for the content
 * report, not for pages.
 */
const allCaseStudies: CaseStudy[] = [
  holdingPattern,
  syncHearts,
  oliveIlive,
  windchill,
  vocHub,
  virtualBuddy,
].sort((a, b) => a.order - b.order);

// Runs during `next build`. Fails the build if anything published contains a
// placeholder, an empty required field, or an unsourced "observed" claim.
assertContentIntegrity(validateCaseStudies(allCaseStudies));

/* ------------------------------------------------------------- selectors */

/** Public, listable work. Drafts and archived work are both excluded. */
export const publishedCaseStudies = allCaseStudies.filter((s) => s.visibility === "published");

/**
 * Selected work — the homepage and the work index.
 *
 * Only completed projects appear here. Scaffolds are preserved in the
 * repository but never compete with finished work for a recruiter's attention.
 */
export const selectedWork = publishedCaseStudies.filter((s) => s.featured);

/**
 * Archived work: reachable by direct link, deliberately not listed and not in
 * the sitemap. Nothing is archived yet — the category exists so that retiring
 * a project later does not mean deleting it or breaking its URL.
 */
export const archivedCaseStudies = allCaseStudies.filter((s) => s.visibility === "archived");

/**
 * The slugs that get a static page. Published and archived both route;
 * drafts do not exist as far as the build is concerned.
 */
export const routableCaseStudies = allCaseStudies.filter((s) => s.visibility !== "draft");

/** Kept for the content report and for `npm run content:todo`. */
export const draftCaseStudies = allCaseStudies.filter((s) => s.visibility === "draft");

/* ------------------------------------------------------------- lookups */

/** Returns undefined for drafts, so a draft slug cannot be rendered by accident. */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return routableCaseStudies.find((study) => study.slug === slug);
}

/**
 * Next / previous, wrapping, across published work only — so a reader is
 * never handed a link to an unfinished project, and an archived project is
 * never surfaced by navigation it was deliberately removed from.
 */
export function adjacentCaseStudies(slug: string) {
  const list = publishedCaseStudies;
  const index = list.findIndex((study) => study.slug === slug);
  if (index === -1 || list.length < 2) return { next: undefined, previous: undefined };
  return {
    next: list[(index + 1) % list.length],
    previous: list[(index - 1 + list.length) % list.length],
  };
}
