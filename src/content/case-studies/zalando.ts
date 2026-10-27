import type { CaseStudy } from "../types";

/**
 * Employer work — NDA-protected. There is no approved public case study for
 * this internship. Every fact here is transcribed from resume.ts (itself
 * transcribed from Efemena_Udezi_Resume_ATS_1.pdf) and nothing else. See
 * `boundary` below and docs/homepage-studio-amendment.md for the reasoning.
 */

export const zalando: CaseStudy = {
  slug: "zalando",
  visibility: "published",
  title: "Zalando Plus",
  premise: "Product design intern leading research through service blueprinting and pilot launch for Zalando Plus.",
  problemArea: "E-commerce · service design for Zalando Plus",
  humanProblem:
    "Zalando Plus needed a cohesive, consistent design language across the platform, and the team's UI/UX templates had fallen out of date.",
  boundary:
    "Employer work, NDA-protected. This page reproduces only what my résumé already discloses publicly: no confidential screens, research data or business detail are shown.",
  shortRole: "Product design intern",
  projectType: "Internship, in-house · Jun 2022 to Dec 2022",
  headline: "Revamped outdated UI/UX templates with developers, PMs and stakeholders. User engagement rose 15%.",
  summary:
    "Led design from research through service blueprinting and pilot launch, shipping features for Zalando Plus and producing a design blueprint used across the team.",
  featured: true,
  card: {
    description:
      "Shaping more cohesive membership experiences through service design, scalable interface patterns, and cross-functional collaboration.",
    category: "Service Design / UX/UI / Design Systems",
  },
  order: 3,
  status: "complete",
  year: "2022",
  timeline: "Jun 2022 to Dec 2022 · Berlin, Germany",
  context: "Internship, in-house",
  roles: ["Product Design Intern"],
  tools: [],
  disciplines: ["service-design", "design-systems", "product-design"],
  cover: { alt: "A blueprint roll, partly unrolled, with swimlanes and touchpoints", accent: "sage" },

  atAGlance: {
    problem: "Zalando Plus needed cohesive, consistent design across the platform, and its existing UI/UX templates had gone out of date.",
    role: "Led the design process from research and concept through service blueprinting and pilot launch, shipping several features for Zalando Plus.",
    approach:
      "Created a comprehensive design blueprint for the Zalando Plus team; revamped outdated UI/UX templates alongside developers, PMs and stakeholders; contributed to design rituals, workshops, critiques and the design system.",
    outcome:
      "User engagement rose 15%. That figure is my own rather than an independent audit, and no further metrics, screens or interface detail are published here.",
  },

  sections: [
    {
      id: "role",
      kind: "context",
      title: "The role",
      blocks: [
        {
          type: "prose",
          text: [
            "My work on Zalando Plus involved contributing to a larger product ecosystem where consistency, collaboration, and service experiences intersect. Through service blueprinting, interface patterns, and design-system contributions, I supported the development of more coherent customer experiences.",
            "As a product design intern, I led the design process end to end for a set of features, from research and concept through service blueprinting to a pilot launch. I also produced a design blueprint meant to keep the team's output cohesive going forward, not just for the features I shipped myself.",
          ],
        },
      ],
    },
    {
      id: "scope",
      kind: "reflection",
      title: "What's shown here",
      blocks: [
        {
          type: "callout",
          title: "Confidential, by design",
          text: "This is employer work, protected by an NDA. Nothing beyond what my résumé already states publicly is reproduced here: no interface, no research data, no internal metrics beyond the engagement figure above. I'm glad to talk through the work in more detail in an interview.",
        },
      ],
    },
  ],
};
