import type { CaseStudy } from "../types";

/**
 * SCAFFOLD. Structure is complete; the narrative is yours to write.
 * Every `todo` block names exactly what belongs there.
 */

export const windchill: CaseStudy = {
  slug: "windchill-engineering-change",
  // Scaffold. Preserved in the repository, excluded from every public
  // surface until the case study is actually written.
  visibility: "draft",
  title: "Windchill Engineering Change",
  premise:
    "A four-page wireframe set for the engineering change workflow in Windchill PSE, designed against an existing enterprise design system.",
  problemArea: "Enterprise PLM · engineering change workflow",
  shortRole: "UX/UI designer within an existing design system",
  projectType: "Enterprise UI · four-page wireframe set",
  headline: "In progress — four-page set drafted against the existing component library.",
  summary:
    "Enterprise PLM work: taking a dense, high-consequence engineering change process and designing an interface that respects both the complexity of the task and the expertise of the people doing it.",
  featured: false,
  order: 4,
  status: "in-progress",
  year: "2026",
  timeline: "[TODO: duration]",
  context: "Enterprise UI · PLM",
  roles: ["UX Designer", "UI Designer"],
  tools: ["Figma", "Design system components"],
  disciplines: ["product-design", "design-systems", "interaction-design"],
  cover: { alt: "Nested rectangles connected by right-angled paths", accent: "blue" },

  atAGlance: {
    problem:
      "[TODO: what was wrong with the existing engineering change workflow — the specific friction, not 'it was outdated']",
    role: "Designed a four-page wireframe set working within an established design system.",
    approach: "[TODO: how you approached it — who you talked to, what you looked at, what you tried]",
    outcome: "[TODO: what changed as a result, or what stage it reached]",
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "The workflow",
      blocks: [
        {
          type: "todo",
          note: "Explain what an engineering change is in Windchill PSE and why it is hard: who raises it, who approves it, what it costs when it goes wrong. Write for a design director who has never seen PLM software. Two or three paragraphs.",
        },
        {
          type: "todo",
          note: "State the constraint that mattered most — an existing design system, a fixed data model, a user group of experts who already know the process better than you do. Enterprise work is judged on how well you handled the constraint.",
        },
      ],
    },
    {
      id: "craft",
      kind: "craft",
      title: "The four pages",
      blocks: [
        {
          type: "todo",
          note: "One figure per page with a functional caption saying what the screen does and what decision it supports. Export the wireframes to /public/work/windchill/.",
        },
        {
          type: "todo",
          note: "Add two or three `claim` blocks at level 'interpretation' explaining a design decision and the reasoning behind it. Enterprise work is where reasoning is most visible and most valued.",
        },
      ],
    },
    {
      id: "reflection",
      kind: "reflection",
      title: "Reflection",
      blocks: [
        {
          type: "todo",
          note: "What working inside someone else's design system taught you. Where you had to argue for an exception, and whether you won.",
        },
      ],
    },
  ],
};
