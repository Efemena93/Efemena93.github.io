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
  premise: "Leading research through service blueprinting and pilot launch for Zalando Plus.",
  problemArea: "E-commerce · service design for Zalando Plus",
  humanProblem:
    "Zalando Plus needed a cohesive, consistent design language across the platform, and the team's UI/UX templates had fallen out of date.",
  boundary:
    "Employer work, NDA-protected. This page reproduces only what my résumé already discloses publicly: no confidential screens, research data or business detail are shown.",
  shortRole: "Product designer",
  projectType: "In-house product design · Jun 2022 to Dec 2022",
  headline:
    "Led design end to end for a set of Zalando Plus features, from research through service blueprinting to a pilot launch, and produced the design blueprint the team worked from afterwards. Engagement rose 15%, a figure of my own rather than an independent audit.",
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
  context: "In-house, product design team",
  roles: ["Product Designer"],
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
    /* ── TOP: the answer. Everything below is bounded by the NDA, so the
       honest lead is scope and contribution rather than screens. ───────── */
    {
      id: "outcome",
      kind: "synthesis",
      title: "What I did",
      standfirst: "End to end on a set of features, inside an established product organisation.",
      blocks: [
        {
          type: "prose",
          text: [
            "My work on Zalando Plus sat inside a larger product ecosystem, where consistency, collaboration and service experiences intersect. I led the design process end to end for a set of features, from research and concept through service blueprinting to a pilot launch, and produced a design blueprint meant to keep the team's output cohesive afterwards, not only for the features I shipped myself.",
            "Engagement rose 15% after the work. That figure is my own rather than an independent audit, and it is the only number published here.",
          ],
        },
      ],
    },

    {
      id: "decisions",
      kind: "synthesis",
      title: "Two things I would point at",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "interpretation",
              text:
                "Service blueprinting was the useful instrument, not the wireframes. A membership proposition is experienced across touchpoints that different teams own, so the thing worth drawing is the seam between them rather than any single screen.",
            },
            {
              level: "interpretation",
              text:
                "A blueprint outlives a feature. Revamping the templates fixed what was in front of me; writing down the patterns is what let the next person be consistent with me without asking.",
            },
          ],
        },
      ],
    },

    {
      id: "process",
      kind: "craft",
      title: "How it ran",
      standfirst: "Double diamond, the same as my other product work, compressed by what can be said.",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Discover",
              text:
                "Research into how members actually experience the proposition, across the touchpoints that make it up rather than within one product surface.",
            },
            {
              title: "Define",
              text:
                "Service blueprinting, to get the seams between teams onto one page where they could be argued about.",
            },
            {
              title: "Develop",
              text:
                "Interface patterns and revamped templates, worked through with developers, PMs and stakeholders rather than handed to them, alongside design rituals, workshops and critiques.",
            },
            {
              title: "Deliver",
              text:
                "A pilot launch for the features, and the design blueprint as the lasting artefact for the team.",
            },
          ],
        },
      ],
    },

    {
      id: "scope",
      kind: "reflection",
      title: "What is not shown here",
      blocks: [
        {
          type: "callout",
          title: "Confidential, by design",
          tone: "caution",
          text:
            "Employer work under NDA. Nothing beyond what my resume already states publicly is reproduced: no interface, no research data, no internal metrics beyond the engagement figure above. This is the shortest case study on the site for that reason, not because it was the smallest piece of work. I am glad to talk it through in an interview.",
        },
      ],
    },
  ],
};
