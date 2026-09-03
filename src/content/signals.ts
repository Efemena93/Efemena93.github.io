import { caseStudies } from "./case-studies";

/**
 * The signal field.
 *
 * Every point in the homepage constellation is one of three things:
 *
 *   project      — a case study. Selecting it opens that case study.
 *   theme        — a question the work keeps returning to.
 *   observation  — something noticed in the research. Interpretation, not a
 *                  statistic; each one traces back to a project on this site.
 *
 * Nothing here is invented for atmosphere. Themes and observations are drawn
 * from the case studies, so a visitor who follows one can find where it came
 * from. Nothing implies live activity, and there are no counters.
 */

export type SignalKind = "project" | "theme" | "observation";

export interface SignalNode {
  id: string;
  kind: SignalKind;
  /** Shown on hover, focus and in the text list. */
  title: string;
  /** One sentence. Shown alongside the title. */
  description: string;
  /**
   * Normalised position 0–1 *within the field element*, which occupies the
   * right-hand side of the hero only. Hand-placed, not random — and the field
   * never overlaps the headline column, so no point can hide behind text.
   */
  x: number;
  y: number;
  accent: "sage" | "blue" | "clay";
  /** Present only on project nodes. */
  slug?: string;
  /** Where a theme or observation comes from. Keeps them traceable. */
  fromSlug?: string;
}

export const KIND_LABEL: Record<SignalKind, string> = {
  project: "Project",
  theme: "Research theme",
  observation: "Observation",
};

/**
 * Positions are composed rather than generated: projects sit on a loose arc,
 * themes cluster inside it, and observations sit toward the edges. The field
 * element itself is offset to the right of the headline column, so these
 * coordinates can use the full 0–1 range without ever colliding with text.
 */
const NODES: SignalNode[] = [
  /* ── Projects ─────────────────────────────────────────────────────── */
  {
    id: "p-holding-pattern",
    kind: "project",
    slug: "holding-pattern",
    title: "Holding Pattern",
    description:
      "How military families hold a shared life together across a deployment, from the side that stays.",
    x: 0.358,
    y: 0.26,
    accent: "blue",
  },
  {
    id: "p-synchearts",
    kind: "project",
    slug: "synchearts",
    title: "SyncHearts",
    description:
      "Communication for long-distance couples, built around time zones rather than constant availability.",
    x: 0.717,
    y: 0.44,
    accent: "clay",
  },
  {
    id: "p-olive-ilive",
    kind: "project",
    slug: "olive-ilive",
    title: "Olive-Ilive",
    description:
      "A health and wellbeing portal designed around the questions people would rather not ask out loud.",
    x: 0.491,
    y: 0.68,
    accent: "sage",
  },
  {
    id: "p-windchill",
    kind: "project",
    slug: "windchill-engineering-change",
    title: "Windchill Engineering Change",
    description:
      "Enterprise PLM: a four-page wireframe set for a high-consequence engineering change workflow.",
    x: 0.868,
    y: 0.19,
    accent: "blue",
  },
  {
    id: "p-vochub",
    kind: "project",
    slug: "vochub",
    title: "VocHub",
    description: "A vocabulary learning app, designed end to end as a study in habit and retention.",
    x: 0.925,
    y: 0.72,
    accent: "clay",
  },
  {
    id: "p-virtualbuddy",
    kind: "project",
    slug: "virtualbuddy",
    title: "VirtualBuddy",
    description:
      "Encouragement without prescription — and a firm line about what the product must never do.",
    x: 0.208,
    y: 0.83,
    accent: "sage",
  },

  /* ── Themes ───────────────────────────────────────────────────────── */
  {
    id: "t-unsaid",
    kind: "theme",
    title: "What goes unsaid",
    description:
      "The editing people do to protect each other, and what it costs the person doing the editing.",
    x: 0.528,
    y: 0.38,
    accent: "blue",
    fromSlug: "holding-pattern",
  },
  {
    id: "t-distance",
    kind: "theme",
    title: "Distance as a design condition",
    description:
      "Time zones, deployments and waiting: separation treated as the normal case, not the edge case.",
    x: 0.792,
    y: 0.58,
    accent: "clay",
    fromSlug: "synchearts",
  },
  {
    id: "t-privacy",
    kind: "theme",
    title: "Privacy of enquiry",
    description:
      "People answer honestly only when nobody is watching. That is a design constraint, not a policy note.",
    x: 0.302,
    y: 0.55,
    accent: "sage",
    fromSlug: "olive-ilive",
  },
  {
    id: "t-evidence",
    kind: "theme",
    title: "Evidence discipline",
    description:
      "Keeping what was observed separate from what was concluded, and labelling which is which.",
    x: 0.113,
    y: 0.42,
    accent: "sage",
    fromSlug: "holding-pattern",
  },
  {
    id: "t-expertise",
    kind: "theme",
    title: "Designing for experts",
    description:
      "Building for people who understand the process better than you do, inside a system you did not choose.",
    x: 0.96,
    y: 0.36,
    accent: "blue",
    fromSlug: "windchill-engineering-change",
  },

  /* ── Observations ─────────────────────────────────────────────────── */
  {
    id: "o-silence",
    kind: "observation",
    title: "A missed window can weigh more than the call",
    description:
      "In separation, the interpretation of a silence often does more damage than the silence itself.",
    x: 0.415,
    y: 0.12,
    accent: "blue",
    fromSlug: "holding-pattern",
  },
  {
    id: "o-overheard",
    kind: "observation",
    title: "People answer differently when they might be overheard",
    description:
      "Which is why participants welcomed storing health records in an app and raised security in the same breath.",
    x: 0.04,
    y: 0.7,
    accent: "sage",
    fromSlug: "olive-ilive",
  },
  {
    id: "o-fine",
    kind: "observation",
    title: "“I'm fine” is a decision, not a status",
    description: "Someone chose it, for a reason, and the reason is usually the design problem.",
    x: 0.642,
    y: 0.86,
    accent: "clay",
    fromSlug: "holding-pattern",
  },
  {
    id: "o-cardsort",
    kind: "observation",
    title: "A card-sort disagreement is two mental models",
    description:
      "Not one right answer and one wrong one — which is an argument for more than one path to the same thing.",
    x: 0.943,
    y: 0.54,
    accent: "clay",
    fromSlug: "synchearts",
  },
  {
    id: "o-simple",
    kind: "observation",
    title: "On a first screen, simpler wins",
    description:
      "Twelve of seventeen chose the plainer splash screen. A first screen is where someone decides how much to hand over.",
    x: 0.208,
    y: 0.66,
    accent: "sage",
    fromSlug: "olive-ilive",
  },
];

export const signalNodes: SignalNode[] = NODES;

export const projectNodes = NODES.filter((node) => node.kind === "project");
export const themeNodes = NODES.filter((node) => node.kind === "theme");
export const observationNodes = NODES.filter((node) => node.kind === "observation");

/** Threads are authored, not distance-derived: each one is a real relationship. */
export const signalThreads: Array<[string, string]> = [
  ["p-holding-pattern", "t-unsaid"],
  ["p-holding-pattern", "t-evidence"],
  ["p-holding-pattern", "o-silence"],
  ["p-holding-pattern", "o-fine"],
  ["t-unsaid", "t-distance"],
  ["t-unsaid", "p-synchearts"],
  ["p-synchearts", "t-distance"],
  ["p-synchearts", "o-cardsort"],
  ["p-olive-ilive", "t-privacy"],
  ["p-olive-ilive", "o-overheard"],
  ["p-olive-ilive", "o-simple"],
  ["t-privacy", "t-unsaid"],
  ["t-privacy", "p-virtualbuddy"],
  ["t-evidence", "t-privacy"],
  ["p-windchill", "t-expertise"],
  ["t-expertise", "p-synchearts"],
  ["p-vochub", "t-distance"],
  ["p-vochub", "o-cardsort"],
  ["p-virtualbuddy", "o-simple"],
];

/** Guards against a node pointing at a project that no longer exists. */
export function assertSignalIntegrity(): string[] {
  const slugs = new Set(caseStudies.map((study) => study.slug));
  const ids = new Set(NODES.map((node) => node.id));
  const problems: string[] = [];

  for (const node of NODES) {
    if (node.slug && !slugs.has(node.slug)) problems.push(`Unknown project slug: ${node.slug}`);
    if (node.fromSlug && !slugs.has(node.fromSlug))
      problems.push(`Unknown source slug: ${node.fromSlug}`);
  }
  for (const [a, b] of signalThreads) {
    if (!ids.has(a)) problems.push(`Thread references unknown node: ${a}`);
    if (!ids.has(b)) problems.push(`Thread references unknown node: ${b}`);
  }
  return problems;
}
