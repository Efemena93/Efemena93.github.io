import type { CaseStudy } from "../types";

/**
 * Rewritten from the published VirtualBuddy case study on udezimena.work.
 * The source case study describes a design process from user stories
 * through to a prototype tested across screen sizes, with no interviews or
 * surveys run and no exact project duration stated, so neither is invented
 * here.
 *
 * One addition beyond that source, flagged rather than silently folded in:
 * the informal Figma-prototype walkthrough with a small group of students is
 * from Efemena's own account of the work, not from the original write-up.
 *
 * DO NOT upgrade the research claims here from the "My Portfolio" Figma deck
 * (file 2lc62uPpDKu9hiSs3O91lM). Its VirtualBuddy case study contains a
 * "Research Analysis" table of 14 participants with Likert means of 4.4-4.9.
 * That table is NOT VirtualBuddy's: its six column totals (61, 65, 66, 62,
 * 65, 69) and all six means are identical to the usability study in the IoT
 * mobility app file, where the same table carries 15 real participant names.
 * Efemena confirmed on 2026-10-25 that the study is IoT Venture's and the
 * table was reused as a layout in the deck. The claims below — an informal
 * walkthrough, not a structured usability study — are the accurate ones.
 */

export const virtualBuddy: CaseStudy = {
  slug: "virtualbuddy",
  visibility: "published",
  title: "VirtualBuddy",
  premise:
    "A study-together platform concept for students to connect, share materials and encourage each other, without tipping into prescribing how someone should feel.",
  problemArea: "Education · study community",
  humanProblem:
    "Students need a safe place to find study partners and share materials, but a product built around encouragement can easily slide from supporting someone into prescribing to them, a line this project set out to hold.",
  shortRole: "UI designer",
  projectType: "Self-directed project",
  headline:
    "A complete, responsive interface system across multiple screen sizes, walked through informally with a small group of students on the Figma prototype, which confirmed the core flows rather than surfacing major issues. Never built as a live product.",
  summary:
    "A responsive study-community app: students create a profile, find and connect with people studying the same subject, and share study material. Designed from user stories through wireframes to a full UI system and prototype.",
  featured: false,
  order: 9,
  status: "complete",
  year: "2022",
  timeline: "End-to-end · 2022",
  context: "Self-directed project",
  roles: ["UI Designer"],
  tools: ["UsabilityHub", "Figma", "Canva", "Vectornator", "Lucidchart", "Pen & paper"],
  disciplines: ["interaction-design", "product-design"],
  cover: { alt: "A small circle orbiting a larger one", accent: "sage" },
  externalUrl: { label: "Original case study", href: "https://udezimena.work" },

  ethics: {
    is: [
      "A UI design study for a study-together platform, built for everyday use by students.",
      "Grounded in the designer's own stated commitment to projects that support a positive outlook, rather than in user research for this particular project.",
    ],
    isNot: [
      "Not a mental health intervention, and not a substitute for professional support.",
      "Not a mood-tracking or assessment tool.",
    ],
    unvalidated: [
      "The task flows and personas: no interviews or surveys were run for this project; it moved from user stories directly into task flows, wireframes and UI.",
      "The interface itself beyond a small, informal walkthrough: a handful of students tried the core flows on the Figma prototype and confirmed the direction, but that is not a structured usability study, and the product has never been built.",
      "Whether the product would actually be used the way the task flows assume, beyond that small informal walkthrough.",
    ],
  },

  atAGlance: {
    problem:
      "Students needed a straightforward way to find and connect with peers studying the same subject and to share study material, in a product that supports rather than prescribes a positive outlook.",
    role: "UI designer: task flows, wireframes, the visual system and prototype.",
    approach:
      "Wrote three user stories (creating a profile, finding and connecting with study partners, and sharing study material), and task flows for each; built low- to mid-fidelity wireframes on a 12-column grid; compared two mood-board directions before choosing a calmer, natural palette; built a full UI token system (colour, typography, iconography, imagery), and prototyped it across multiple screen sizes.",
    outcome:
      "A complete, responsive UI system and prototype. A small, informal walkthrough with students on the Figma prototype confirmed the core flows worked as intended; it has not been built as a live product, and has not had a structured usability study.",
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "Discover and define",
      blocks: [
        {
          type: "prose",
          text: [
            "VirtualBuddy is a study-together platform: a place for students to connect, find people studying the same or a related subject, and make study material available to each other. I chose it because I have always wanted to work on projects that foster an optimistic outlook without tipping into anything prescriptive; I'm an advocate for education, and this project let me explore that alongside my study skills.",
            "That distinction (support, not prescription) is the boundary that shaped every decision after it. The product had to help students find each other and share material, and nothing about it was allowed to read as monitoring how someone felt or telling them how they should feel.",
          ],
        },
        {
          type: "list",
          title: "The three user stories",
          items: [
            "As a new user, I want to create a profile, so that other students can find me.",
            "As a new user, I want to find and connect with students studying my subject (or a related one), so that we may collaborate.",
            "As a frequent user, I want to view and share articles, videos, images and other files, and write posts for other students to read, so that we can share knowledge.",
          ],
        },
      ],
    },

    {
      id: "craft",
      kind: "craft",
      title: "Develop and deliver",
      standfirst: "Low- to mid-fidelity wireframes on a strict grid, then a full visual system.",
      blocks: [
        {
          type: "prose",
          text: [
            "Each user story became a task flow, landing page, sign up or sign in, study-profile setup, then the story-specific steps: selecting language and study location and connecting with others, or opening the information hub to view and share study material. I moved from low-fidelity wireframes to a mid-fidelity mockup on a 12-column grid (11pt gutter, 16pt margin, stretch type), chosen because a fluid grid keeps elements balanced and holds up when the design has to adapt to other screen sizes.",
          ],
        },
        {
          type: "comparison",
          title: "Two mood-board directions",
          columns: ["Direction", "Why"],
          rows: [
            ["Natural, calm palette, chosen", "Reflects the target market's lifestyle and communicates the product's tone more clearly."],
            ["Bright, playful palette (not chosen", "Better suited to entertainment products) music, games, comedy, than to a study tool."],
          ],
        },
        {
          type: "prose",
          text: [
            "After an informal walkthrough of the screens with a small group of students (who tried the core flows on the prototype and confirmed the direction rather than surfacing major issues) I built the final UI in Figma and assembled UI kits (labels, navigation, colour, typography, imagery and iconography) then prototyped the navigation and produced design mockups across different screen sizes and break points, so the responsive behaviour was demonstrated rather than assumed.",
          ],
        },
      ],
    },

    {
      id: "reflection",
      kind: "reflection",
      title: "Where this stands",
      blocks: [
        {
          type: "callout",
          tone: "caution",
          title: "Never built, and only informally walked through",
          text: "VirtualBuddy was never built as a live product, and the informal walkthrough with students confirmed the core flows without being a structured usability study. The task flows and personas were also authored rather than researched. Both are the main things a next iteration should change before trusting any of the interface decisions here.",
        },
      ],
    },
  ],
};
