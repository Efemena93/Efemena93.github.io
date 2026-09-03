/**
 * Content model for the portfolio.
 *
 * Content is plain typed data, not a CMS and not MDX. Three reasons:
 *  - every claim in a case study is type-checked at build time;
 *  - the evidence system (below) cannot be bypassed by writing loose markup;
 *  - the whole model maps 1:1 onto a headless CMS later without a rewrite.
 */

/* ---------------------------------------------------------------- taxonomy */

export type Discipline =
  | "ux-research"
  | "product-design"
  | "interaction-design"
  | "design-systems"
  | "service-design";

export const DISCIPLINE_LABEL: Record<Discipline, string> = {
  "ux-research": "UX Research",
  "product-design": "Product Design",
  "interaction-design": "Interaction Design",
  "design-systems": "Design Systems",
  "service-design": "Service Design",
};

/**
 * Publication state — whether a piece of content reaches the public build.
 *
 * Deliberately NOT the same field as `ProjectStatus` below. That one says how
 * far the *work* got; this one says who is allowed to see it. Conflating them
 * is how an unfinished project ends up published because it was "complete
 * enough", so they are separate fields with separate names.
 *
 *   draft     — never routed, never listed, never in the sitemap. Preserved in
 *               the repository; invisible to the public build.
 *   published — routed, listed, indexed, eligible for selected work.
 *   archived  — routed and reachable by direct link, but not listed and not in
 *               the sitemap. For work kept for the record, not for display.
 *               See docs note in `routableCaseStudies()` for the exact rules.
 */
export type Visibility = "draft" | "published" | "archived";

export type ProjectStatus = "complete" | "in-progress" | "concept";

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  complete: "Complete",
  "in-progress": "In progress",
  concept: "Concept",
};

/* ------------------------------------------------------- the evidence system

   The single most important type in this codebase.

   A claim cannot be written without declaring what kind of claim it is. This
   is what keeps a research narrative honest: a reader can always tell what
   was observed, what was inferred from it, what is merely proposed, and what
   is an untested design idea.

   Encoding is never colour alone. Each level renders a text label, a distinct
   dot fill and a distinct rule style — see components/content/Claim.tsx.
                                                                             */

export type EvidenceLevel = "evidence" | "interpretation" | "hypothesis" | "concept";

export interface EvidenceMeta {
  label: string;
  short: string;
  definition: string;
}

export const EVIDENCE: Record<EvidenceLevel, EvidenceMeta> = {
  evidence: {
    label: "Observed",
    short: "Observed",
    definition: "Came directly from data I collected. A source is always named.",
  },
  interpretation: {
    label: "Interpreted",
    short: "Interpreted",
    definition: "My reading of that data. Reasonable, and still mine rather than the participants'.",
  },
  hypothesis: {
    label: "Hypothesis",
    short: "Hypothesis",
    definition: "A proposition I have not yet tested. Written down so it can be proved wrong.",
  },
  concept: {
    label: "Unvalidated concept",
    short: "Unvalidated",
    definition: "A design idea. There is no evidence yet that it works.",
  },
};

/* ------------------------------------------------------------------ blocks */

export interface ImageRef {
  src: string;
  /** Functional description: what the screen does, not "screenshot of an app". */
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProseBlock {
  type: "prose";
  text: string[];
}

export interface ClaimBlock {
  type: "claim";
  level: EvidenceLevel;
  text: string;
  /** Required for level "evidence" — enforced by assertContentIntegrity(). */
  source?: string;
}

export interface ClaimGroupBlock {
  type: "claimGroup";
  title?: string;
  claims: Array<Omit<ClaimBlock, "type">>;
}

export interface StatRowBlock {
  type: "statRow";
  stats: Array<{ value: string; label: string }>;
  source?: string;
}

export interface QuoteBlock {
  type: "quote";
  text: string;
  /** Role and stage only. Never a name, unit, base or date. */
  attribution: string;
  note?: string;
}

export interface ListBlock {
  type: "list";
  title?: string;
  ordered?: boolean;
  items: string[];
}

export interface StepsBlock {
  type: "steps";
  title?: string;
  steps: Array<{ title: string; text: string }>;
}

export interface FigureBlock {
  type: "figure";
  image: ImageRef;
  width?: "measure" | "wide" | "bleed";
  /** Text equivalent for complex diagrams, shown to everyone. */
  description?: string;
}

export interface ComparisonBlock {
  type: "comparison";
  title?: string;
  columns: [string, string];
  rows: Array<[string, string]>;
}

export interface CalloutBlock {
  type: "callout";
  title: string;
  text: string;
  tone?: "neutral" | "caution";
}

export interface DividerBlock {
  type: "divider";
}

export interface TodoBlock {
  type: "todo";
  /** What still needs writing. Surfaced by `npm run content:todo`. */
  note: string;
}

export type Block =
  | ProseBlock
  | ClaimBlock
  | ClaimGroupBlock
  | StatRowBlock
  | QuoteBlock
  | ListBlock
  | StepsBlock
  | FigureBlock
  | ComparisonBlock
  | CalloutBlock
  | DividerBlock
  | TodoBlock;

/* ---------------------------------------------------------------- sections */

export type SectionKind =
  | "context"
  | "research"
  | "synthesis"
  | "concept"
  | "craft"
  | "reflection";

export const SECTION_LABEL: Record<SectionKind, string> = {
  context: "Context",
  research: "Research",
  synthesis: "Synthesis",
  concept: "Concept",
  craft: "Craft",
  reflection: "Reflection",
};

export interface CaseSection {
  id: string;
  kind: SectionKind;
  title: string;
  standfirst?: string;
  blocks: Block[];
}

/* ------------------------------------------------------------- case study */

export interface EthicsStatement {
  /** Required on research-led projects. */
  is: string[];
  isNot: string[];
  unvalidated: string[];
  notRepresented?: string[];
}

export interface AtAGlance {
  problem: string;
  role: string;
  approach: string;
  outcome: string;
}

export interface CaseStudy {
  slug: string;
  /** Publication state. Required — a project cannot be added without deciding. */
  visibility: Visibility;
  title: string;
  /** One sentence, ≤ 140 characters. */
  premise: string;
  /**
   * Card facts. These four are what a recruiter scans on the homepage before
   * deciding whether to open anything, so they are required rather than
   * optional — a project without them cannot be added to the site.
   */
  problemArea: string;
  shortRole: string;
  projectType: string;
  /** One meaningful outcome, or the honest current status. Never a metric that was not measured. */
  headline: string;
  /** Two or three sentences. Used on cards and in social metadata. */
  summary: string;
  featured: boolean;
  order: number;
  status: ProjectStatus;
  year: string;
  timeline: string;
  context: string;
  roles: string[];
  team?: string;
  tools: string[];
  disciplines: Discipline[];
  cover: { alt: string; accent: "sage" | "blue" | "clay" };
  atAGlance: AtAGlance;
  sections: CaseSection[];
  ethics?: EthicsStatement;
  /** External link to the original published case study, where one exists. */
  externalUrl?: { label: string; href: string };
}

/* ------------------------------------------------------------- field notes */

export interface FieldNote {
  slug: string;
  /** Publication state. Required — a note cannot be added without deciding. */
  visibility: Visibility;
  title: string;
  standfirst: string;
  date: string; // ISO
  readingMinutes: number;
  tags: string[];
  blocks: Block[];
}

/* ----------------------------------------------------------------- résumé */

export interface ResumeRole {
  organisation: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
}

export interface ResumeEducation {
  institution: string;
  qualification: string;
  start: string;
  end: string;
  note?: string;
}

export interface Resume {
  roles: ResumeRole[];
  education: ResumeEducation[];
  skillClusters: Array<{ title: string; items: string[] }>;
  recognition?: string[];
  pdfHref?: string;
}
