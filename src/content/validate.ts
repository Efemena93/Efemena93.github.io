import type { Block, CaseStudy, FieldNote } from "./types";

/**
 * Build-time content validation.
 *
 * Published content is held to a standard that unfinished content is not: no
 * placeholder text, no empty required fields, no "to write" panels. This runs
 * at module load, so `next build` fails rather than shipping a page with
 * `[TODO: job title]` on it — which is exactly what happened before this
 * existed.
 *
 * Draft and archived content is skipped. That is the point of the statuses:
 * work in progress is allowed to be in progress, it just cannot be public.
 */

/** Strings that must never survive into a published page. */
const PLACEHOLDER_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /\[TODO/i, label: "a [TODO placeholder" },
  { pattern: /\bTo write\b/i, label: 'a "To write" marker' },
  { pattern: /\bLorem ipsum\b/i, label: "lorem ipsum filler" },
  { pattern: /\bTBD\b/, label: "a TBD marker" },
  { pattern: /^\s*(Untitled|Placeholder|Example|Project name)\s*$/i, label: "a placeholder title" },
];

export class ContentValidationError extends Error {
  constructor(problems: string[]) {
    super(
      `Content validation failed — ${problems.length} problem${problems.length === 1 ? "" : "s"} in published content:\n` +
        problems.map((p) => `  · ${p}`).join("\n") +
        "\n\nEither finish the content, or set its visibility to \"draft\".",
    );
    this.name = "ContentValidationError";
  }
}

function scanText(where: string, value: string | undefined, problems: string[]): void {
  if (value === undefined) return;
  for (const { pattern, label } of PLACEHOLDER_PATTERNS) {
    if (pattern.test(value)) {
      problems.push(`${where} contains ${label}: "${value.slice(0, 72)}${value.length > 72 ? "…" : ""}"`);
      return;
    }
  }
}

function requireNonEmpty(where: string, value: string | undefined, problems: string[]): void {
  if (!value || !value.trim()) problems.push(`${where} is empty, and is required on published content`);
  else scanText(where, value, problems);
}

function scanBlocks(where: string, blocks: Block[], problems: string[]): void {
  blocks.forEach((block, i) => {
    const at = `${where} block ${i + 1} (${block.type})`;

    if (block.type === "todo") {
      problems.push(`${at} is a "to write" block — published content cannot contain one`);
      return;
    }

    switch (block.type) {
      case "prose":
        block.text.forEach((t, j) => scanText(`${at}, paragraph ${j + 1}`, t, problems));
        break;
      case "claim":
        scanText(at, block.text, problems);
        // The evidence contract: an observed claim must name where it came from.
        if (block.level === "evidence" && !block.source?.trim())
          problems.push(`${at} is level "evidence" but names no source`);
        break;
      case "claimGroup":
        block.claims.forEach((c, j) => {
          scanText(`${at}, claim ${j + 1}`, c.text, problems);
          if (c.level === "evidence" && !c.source?.trim())
            problems.push(`${at}, claim ${j + 1} is level "evidence" but names no source`);
        });
        break;
      case "quote":
        scanText(at, block.text, problems);
        scanText(`${at} attribution`, block.attribution, problems);
        break;
      case "list":
        block.items.forEach((t, j) => scanText(`${at}, item ${j + 1}`, t, problems));
        break;
      case "steps":
        block.steps.forEach((s, j) => {
          scanText(`${at}, step ${j + 1} title`, s.title, problems);
          scanText(`${at}, step ${j + 1}`, s.text, problems);
        });
        break;
      case "figure":
        requireNonEmpty(`${at} alt text`, block.image.alt, problems);
        break;
      case "callout":
        scanText(`${at} title`, block.title, problems);
        scanText(at, block.text, problems);
        break;
      case "statRow":
        block.stats.forEach((s, j) => scanText(`${at}, stat ${j + 1}`, s.label, problems));
        break;
      case "comparison":
        block.rows.forEach((r, j) => r.forEach((c) => scanText(`${at}, row ${j + 1}`, c, problems)));
        break;
      default:
        break;
    }
  });
}

export function validateCaseStudies(studies: CaseStudy[]): string[] {
  const problems: string[] = [];
  for (const s of studies) {
    if (s.visibility !== "published") continue;
    const at = `Case study "${s.slug}"`;
    requireNonEmpty(`${at} title`, s.title, problems);
    requireNonEmpty(`${at} premise`, s.premise, problems);
    requireNonEmpty(`${at} summary`, s.summary, problems);
    requireNonEmpty(`${at} problemArea`, s.problemArea, problems);
    requireNonEmpty(`${at} shortRole`, s.shortRole, problems);
    requireNonEmpty(`${at} projectType`, s.projectType, problems);
    requireNonEmpty(`${at} headline`, s.headline, problems);
    requireNonEmpty(`${at} timeline`, s.timeline, problems);
    (["problem", "role", "approach", "outcome"] as const).forEach((k) =>
      requireNonEmpty(`${at} atAGlance.${k}`, s.atAGlance[k], problems),
    );
    if (s.sections.length === 0) problems.push(`${at} has no sections`);
    s.sections.forEach((sec) => {
      requireNonEmpty(`${at} section "${sec.id}" title`, sec.title, problems);
      scanBlocks(`${at} section "${sec.id}"`, sec.blocks, problems);
    });
  }
  return problems;
}

export function validateFieldNotes(notes: FieldNote[]): string[] {
  const problems: string[] = [];
  for (const n of notes) {
    if (n.visibility !== "published") continue;
    const at = `Story "${n.slug}"`;
    requireNonEmpty(`${at} title`, n.title, problems);
    requireNonEmpty(`${at} standfirst`, n.standfirst, problems);
    if (n.blocks.length === 0) problems.push(`${at} has no body`);
    scanBlocks(at, n.blocks, problems);
  }
  return problems;
}

/**
 * Contact and identity values that must be real before they are published.
 * The résumé PDF is exempt: it is allowed to be absent, and the UI already
 * degrades to a "read résumé" link when it is.
 */
export function validateSiteConfig(site: {
  url: string;
  name: string;
  contact: { email: string; location: string; availability: string };
  socials: ReadonlyArray<{ label: string; href: string }>;
}): string[] {
  const problems: string[] = [];
  requireNonEmpty("site.url", site.url, problems);
  requireNonEmpty("site.name", site.name, problems);
  requireNonEmpty("site.contact.email", site.contact.email, problems);
  requireNonEmpty("site.contact.location", site.contact.location, problems);
  requireNonEmpty("site.contact.availability", site.contact.availability, problems);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.contact.email))
    problems.push(`site.contact.email is not a valid address: "${site.contact.email}"`);
  site.socials.forEach((s) => {
    scanText(`site.socials["${s.label}"]`, s.href, problems);
    if (!/^https?:\/\//.test(s.href))
      problems.push(`site.socials["${s.label}"] is not a URL: "${s.href}"`);
  });
  return problems;
}

/**
 * Throws in production so the build fails; warns in development so an
 * in-progress edit does not block the dev server.
 */
export function assertContentIntegrity(problems: string[]): void {
  if (problems.length === 0) return;
  if (process.env.NODE_ENV === "production") throw new ContentValidationError(problems);
  console.warn(new ContentValidationError(problems).message);
}
