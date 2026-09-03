import type { CaseStudy } from "../types";

/**
 * Rewritten from the published Olive-Ilive case study on udezimena.work.
 * Figures preserved exactly: 52 survey participants, 19 questions,
 * 5 interviews; A/B preference test n=17, split 12/5, reported at 95%
 * significance. Nothing added that was not in the original.
 */

export const oliveIlive: CaseStudy = {
  slug: "olive-ilive",
  title: "Olive-Ilive",
  premise:
    "A responsive health and wellbeing portal designed for inclusivity, privacy and the questions people are embarrassed to ask.",
  problemArea: "Health & wellbeing · access to reliable information",
  shortRole: "Sole designer across research and UI",
  projectType: "End-to-end immersive project",
  headline: "A/B preference test on 17 participants split 12–5 for the simpler splash screen, reported at 95% significance; card sorting sent me back to revise the sitemap.",
  summary:
    "An end-to-end study for a responsive health portal: 52 survey participants, 5 interviews, open card sorting, moderated usability testing and an A/B preference test. The design brief made privacy and inclusivity constraints, not features.",
  featured: true,
  order: 3,
  status: "complete",
  year: "2022",
  timeline: "End-to-end",
  context: "CareerFoundry UX/UI immersive project",
  roles: ["UX Designer", "UX Researcher", "Data Analyst", "Visual Designer"],
  tools: [
    "Figma",
    "InVision",
    "Miro",
    "Google Forms",
    "UsabilityHub",
    "OptimalSort",
    "Pen & paper",
  ],
  disciplines: ["ux-research", "product-design", "design-systems"],
  cover: {
    alt: "A soft grid of overlapping circles, one filled",
    accent: "sage",
  },
  externalUrl: { label: "Original case study", href: "https://udezimena.work/p/03aa289f" },

  atAGlance: {
    problem:
      "People trying to improve their physical and mental health struggle to reach reliable information and the right specialist, because the resources are scattered and the questions are often ones they would rather not ask out loud.",
    role: "Sole designer across research, analysis, IA, interaction, visual design and the design language system.",
    approach:
      "Lean UX — build, measure, learn — with competitive analysis, a 52-person survey, 5 interviews, open card sorting, moderated usability testing against Nielsen's severity scale, and an A/B preference test.",
    outcome:
      "A tested, responsive design and a documented design language system. The A/B test result was statistically significant; the broader design was iterated but the project is a course project, not a shipped product.",
  },

  ethics: {
    is: [
      "A responsive portal concept for health and wellbeing information, records and appointments.",
      "Designed against explicit constraints for inclusivity and data sensitivity.",
    ],
    isNot: [
      "Not a clinical product, and not a substitute for medical advice.",
      "Not a diagnostic tool. The design connects people to practitioners; it does not assess them.",
    ],
    unvalidated: [
      "Real-world outcomes. Usability testing measured whether people could complete tasks, not whether the product improved anyone's health.",
      "Whether the privacy assurances in the interface would be sufficient to earn trust at scale.",
    ],
  },

  sections: [
    {
      id: "brief",
      kind: "context",
      title: "Constraints as the brief",
      standfirst:
        "Four constraints were set before any design began. They did more work than any feature list.",
      blocks: [
        {
          type: "prose",
          text: [
            "Olive-Ilive is a responsive portal for health information, medical records and appointments, designed to be usable on a phone, a tablet or a desktop. As a designer it helps enormously to have criteria and constraints to work against — constraints are what make the creative decisions decidable.",
          ],
        },
        {
          type: "list",
          title: "The four constraints",
          items: [
            "Design for a specific circumstance — people with high-stress jobs and no time for a 'work-life balance' they have been told to find.",
            "Design for inclusivity — users arrive with different physical, psychological and social circumstances, and an inclusive design reaches more of the people who would benefit.",
            "Educate the user — not everyone knows how to change a behaviour or build a habit; the portal has to support the journey rather than just record it.",
            "Remember privacy — health and medical information is sensitive, and users must feel reassured before they will use any of it honestly.",
          ],
        },
        {
          type: "callout",
          title: "Why the fourth one governs the other three",
          text: "A health product that people do not trust gets used dishonestly, and a portal populated with cautious half-answers cannot educate anyone. Privacy was treated as a precondition for the rest of the brief, not as a compliance item.",
        },
      ],
    },

    {
      id: "research",
      kind: "research",
      title: "Research",
      blocks: [
        {
          type: "prose",
          text: [
            "I began with competitive analysis of two adjacent products — Sanvello, centred on mental health through short activities and a supportive community, and Flo, a women's health app tracking the reproductive cycle. Both are strong in a narrow band, which framed the question of whether a broader portal is a genuine need or a diluted one.",
            "I then ran a survey and follow-up interviews, with three objectives: find where existing apps create friction, understand how people navigate and complete tasks in them, and see how users respond to features derived from the competitive analysis.",
          ],
        },
        {
          type: "statRow",
          stats: [
            { value: "52", label: "Survey participants" },
            { value: "19", label: "Survey questions" },
            { value: "5", label: "Interviews" },
          ],
          source: "Google Forms survey and semi-structured interviews.",
        },
        {
          type: "claimGroup",
          title: "Problems identified",
          claims: [
            {
              level: "evidence",
              text: "Users lack features that guide them in maintaining a healthy lifestyle, as opposed to features that merely record what they already do.",
              source: "Survey of 52 participants",
            },
            {
              level: "evidence",
              text: "Female participants struggle to find reliable information on the causes and effects of irregular menstrual cycles.",
              source: "Survey of 52 participants",
            },
            {
              level: "evidence",
              text: "Access to mental health therapists is not readily available to participants when they want it.",
              source: "Survey of 52 participants",
            },
            {
              level: "evidence",
              text: "Male participants generally did not consider their hormonal cycle and were unaware of the effects of hormonal imbalance.",
              source: "5 semi-structured interviews",
            },
            {
              level: "evidence",
              text: "Participants preferred to address health concerns from home, and welcomed apps that could resolve as many issues as possible without a trip.",
              source: "5 semi-structured interviews",
            },
            {
              level: "evidence",
              text: "Participants welcomed transferable health records stored in an app, and every one of them raised data security as a concern in the same breath.",
              source: "5 semi-structured interviews",
            },
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "The recurring shape across these findings is that people want to ask an uncomfortable question without an audience. That reframes the portal's core value from convenience to privacy of enquiry — and it is why the search-and-answer path became the primary flow rather than a secondary one.",
        },
      ],
    },

    {
      id: "definition",
      kind: "synthesis",
      title: "Hypothesis and problem statement",
      blocks: [
        {
          type: "claim",
          level: "hypothesis",
          text: "Developing a platform that offers 24-hour healthcare guidance and connections to healthcare experts is essential; this will be confirmed or refuted by user feedback and reviews.",
        },
        {
          type: "callout",
          title: "Problem statement",
          text: "Individuals seeking to improve their physical and mental health struggle to access reliable education on healthy living and to connect with specialists when making informed decisions, because the resources are neither centralised nor accessible.",
        },
        {
          type: "prose",
          text: [
            "From the research I built personas, a journey map, task flows and user flows. One user story carried most of the design weight: as someone with an irregular menstrual cycle, I want to find reliable information about the cycle so that I can understand how to manage my situation. Entry point: open the app. Success: the answer is reliable and relevant to what was actually asked.",
          ],
        },
      ],
    },

    {
      id: "ia",
      kind: "craft",
      title: "Information architecture",
      blocks: [
        {
          type: "prose",
          text: [
            "I ran an open card sort in OptimalSort with 20 cards across six categories, to see how users would organise the content rather than how I would. Reading the dendrogram, nutrition and meal-plan cards clustered most tightly, followed by profile and settings.",
          ],
        },
        {
          type: "claim",
          level: "evidence",
          text: "Participants clustered nutrition and meal-plan content most closely of any pair, and profile and settings second.",
          source: "Open card sort, OptimalSort, 20 cards / 6 categories",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "The clusters did not match my original sitemap, so I revised the sitemap rather than the participants' mental model. This is the cheapest correction in the whole process and the one most often skipped.",
        },
      ],
    },

    {
      id: "testing",
      kind: "craft",
      title: "Testing, and an argument about splash screens",
      blocks: [
        {
          type: "prose",
          text: [
            "I moved from low-fidelity wireframes through mid fidelity for rapid prototyping of the onboarding flow, then to a high-fidelity clickable prototype. I planned and moderated the usability test — choosing the method, writing the test plan and a script to keep sessions consistent — then analysed the results with affinity mapping and a rainbow spreadsheet, rating issues against Nielsen's severity scale.",
            "Separately, I ran an A/B preference test on UsabilityHub between two splash screen designs.",
          ],
        },
        {
          type: "statRow",
          stats: [
            { value: "17", label: "Preference test participants" },
            { value: "12 / 5", label: "Split, design A over B" },
            { value: "95%", label: "Reported significance" },
          ],
          source: "UsabilityHub preference test.",
        },
        {
          type: "claim",
          level: "evidence",
          text: "The simpler of the two splash screens was preferred by 12 of 17 participants, at a reported 95% likelihood that the difference was not due to chance.",
          source: "UsabilityHub preference test, n=17",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "For a first screen in a health context, simpler wins. My reading is that a splash screen is the moment a user decides how much of themselves to hand over, and ornament reads as a product with something to sell.",
        },
      ],
    },

    {
      id: "visual",
      kind: "craft",
      title: "Visual design and the design language system",
      blocks: [
        {
          type: "prose",
          text: [
            "Once usability issues were resolved I designed the final screens in Figma, working from Gestalt principles and Material Design guidance, aiming for a clean and minimal surface that helps people reach a goal rather than admire the interface. Colour, iconography and illustration were checked for accessibility as part of the design rather than as a pass at the end.",
            "After several iterations the result was documented as a design language system, so the decisions were reusable rather than re-argued.",
          ],
        },
        {
          type: "todo",
          note: "Export the Olive-Ilive personas, journey map, dendrogram, wireframe sets, final screens and DLS pages into /public/work/olive-ilive/ and replace the figure blocks.",
        },
      ],
    },

    {
      id: "reflection",
      kind: "reflection",
      title: "What I took from it",
      blocks: [
        {
          type: "list",
          items: [
            "Research is not optional. Nothing user-centred came out of this project that did not go in through an interview or a survey first.",
            "The product exists to solve the user's problem, not to express the designer's preferences — a lesson that is easy to agree with and hard to apply when you like your own idea.",
            "Design guidelines are what hold a design together. Having them written down made intuitiveness, learnability, efficiency and consistency into things I could check rather than things I could claim.",
          ],
        },
      ],
    },
  ],
};
