import type { CaseStudy } from "../types";

/** SCAFFOLD — premise taken from the published project; body to be written. */

export const virtualBuddy: CaseStudy = {
  slug: "virtualbuddy",
  title: "VirtualBuddy",
  premise:
    "A companion app concept aimed at supporting optimistic behaviour and a steadier outlook, without pretending to be a clinical tool.",
  problemArea: "Everyday encouragement · behaviour without prescription",
  shortRole: "Sole designer, research through UI",
  projectType: "Self-directed project",
  headline: "Complete. The most interesting decision was what the product must never do.",
  summary:
    "A design project about encouraging positive behaviour, and about the line between supporting someone and prescribing to them.",
  featured: false,
  order: 6,
  status: "complete",
  year: "2022",
  timeline: "[TODO: duration]",
  context: "Self-directed project",
  roles: ["UX Designer", "UI Designer"],
  tools: ["Figma"],
  disciplines: ["product-design", "interaction-design"],
  cover: { alt: "A small circle orbiting a larger one", accent: "sage" },
  externalUrl: { label: "Original case study", href: "https://udezimena.work" },

  atAGlance: {
    problem: "[TODO: what makes a steadier outlook hard to sustain day to day]",
    role: "Sole designer, research through UI.",
    approach: "[TODO: methods used]",
    outcome: "[TODO: what the design achieved, and what it deliberately refused to do]",
  },

  ethics: {
    is: ["A design study on encouragement and behaviour, built for everyday use."],
    isNot: [
      "Not a mental health intervention, and not a substitute for professional support.",
      "Not a mood-tracking or assessment tool.",
    ],
    unvalidated: ["[TODO: state what was never tested — be specific rather than modest]"],
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "Context",
      blocks: [
        {
          type: "todo",
          note: "Why you are drawn to projects that foster a positive outlook, and what you decided this product must never do. That boundary is the most interesting thing about this project — lead with it.",
        },
      ],
    },
    {
      id: "craft",
      kind: "craft",
      title: "Design",
      blocks: [
        { type: "todo", note: "Export final screens to /public/work/virtualbuddy/ and add figure blocks." },
      ],
    },
    {
      id: "reflection",
      kind: "reflection",
      title: "Reflection",
      blocks: [{ type: "todo", note: "What you learned about designing near emotional territory." }],
    },
  ],
};
