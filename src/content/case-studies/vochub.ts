import type { CaseStudy } from "../types";

/** SCAFFOLD — premise taken from the published project; body to be written. */

export const vocHub: CaseStudy = {
  slug: "vochub",
  // Scaffold. Preserved in the repository, excluded from every public
  // surface until the case study is actually written.
  visibility: "draft",
  title: "VocHub",
  premise: "A vocabulary learning application, designed end to end as a study in habit and retention.",
  problemArea: "Language learning · vocabulary retention",
  shortRole: "Sole designer, research through UI",
  projectType: "Self-directed project",
  headline: "Complete end-to-end study. Case study currently being rewritten.",
  summary:
    "A vocabulary learning app built to practise the fundamentals of UX and UI design end to end — from research through to a finished interface.",
  featured: false,
  order: 5,
  status: "complete",
  year: "2022",
  timeline: "[TODO: duration]",
  context: "Self-directed project",
  roles: ["UX Designer", "UI Designer"],
  tools: ["Figma"],
  disciplines: ["product-design", "interaction-design"],
  cover: { alt: "Stacked cards offset in a loose fan", accent: "clay" },
  externalUrl: { label: "Original case study", href: "https://udezimena.work" },

  atAGlance: {
    problem: "[TODO: what makes vocabulary learning fail for people — be specific]",
    role: "Sole designer, research through UI.",
    approach: "[TODO: methods used]",
    outcome: "[TODO: what the design achieved or what you learned]",
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "Context",
      blocks: [
        {
          type: "todo",
          note: "Two paragraphs: who this is for, and why existing vocabulary apps do not work for them. If you have research, add it as `evidence` claims with sources.",
        },
      ],
    },
    {
      id: "craft",
      kind: "craft",
      title: "Design",
      blocks: [
        { type: "todo", note: "Export final screens to /public/work/vochub/ and add figure blocks with functional alt text." },
      ],
    },
    {
      id: "reflection",
      kind: "reflection",
      title: "Reflection",
      blocks: [{ type: "todo", note: "One honest paragraph on what you would do differently now." }],
    },
  ],
};
