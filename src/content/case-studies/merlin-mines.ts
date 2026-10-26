import type { CaseStudy } from "../types";

/**
 * Merlin Mines internship, presented through the SpellCarver work.
 *
 * History: this file previously published nothing about the interface, on the
 * grounds that the internship was NDA-protected. Efemena confirmed on
 * 2026-10-24 that the SpellCarver material is cleared for public disclosure,
 * so the boundary section has been replaced with the case study itself. The
 * slug is deliberately unchanged so the existing URL keeps working.
 *
 * Two sources, kept separate:
 *
 *  1. resume.ts (transcribed from Efemena_Udezi_Resume_ATS_1.pdf) — the only
 *     source for role, dates, seniority and scope. Those are stated as fact.
 *  2. The SpellCarver case-study pack (case-study.md, design-artifacts.md,
 *     evidence-and-gaps.md, portfolio-brief.md) — the source for the product,
 *     its navigation and its screens.
 *  3. Efemena directly, 2026-10-25, correcting the pack on four points: she
 *     worked closely with the in-house developers who are the tool's actual
 *     users; she ran usability testing with those developers; there were
 *     three design iterations; and the work was implemented by the end of
 *     the internship.
 *
 * That correction matters. The pack asserts no research or testing exists,
 * and an earlier version of this page said so prominently. It was wrong.
 * Process facts — testing happened, with whom, three iterations, implemented
 * — are now stated at evidence level, sourced to her.
 *
 * STILL MISSING, and the reason the design claims below are NOT evidence:
 * what the testing actually found, and what changed between the three
 * iterations. Without those, "tested" cannot become "validated" for any
 * specific decision. Asked; not yet answered. When she gives them, the
 * relevant claims in decision-navigation, decision-state and
 * decision-security can be upgraded with the study named as the source.
 *
 * Deliberately absent, and to stay absent until Efemena confirms them:
 *   · `tools` — the pack lists Figma as "to verify". Not guessed.
 *   · Any number read off a dashboard screen. Those are interface content,
 *     never product performance.
 *   · Participant count for the usability testing. She said "the developers",
 *     not how many.
 *   · Any screenshot. The interface is NDA-protected; see `boundary`.
 */

export const merlinMines: CaseStudy = {
  slug: "merlin-mines",
  visibility: "published",
  title: "SpellCarver",
  premise:
    "A CI/CD automation product where the marketing promise and the product interface had to be designed as one continuous journey.",
  problemArea: "Developer tooling · CI/CD automation",
  humanProblem:
    "A developer evaluating an automation tool has to work out what it does, where to begin, whether it is running, and whether it is safe, usually in that order, usually alone.",
  shortRole: "UI/UX design intern · sole designer",
  projectType: "Internship, in-house · Merlin Mines",
  boundary:
    "The interface itself is NDA-protected, so no screens appear on this page. The design reasoning, the process and the outcome are published with permission; the screens are available to talk through in an interview.",
  headline:
    "Established the product's first UI patterns and components as its only dedicated design resource, across three design iterations tested with the in-house developers who use the tool. Implemented by the end of the internship.",
  summary:
    "Three months as the sole designer on SpellCarver, a secure-automation product from Merlin Mines, across the public site and the product interface. Three iterations, tested with the in-house developers who use it, implemented before the internship ended.",
  featured: true,
  order: 2,
  status: "complete",
  year: "2025",
  timeline: "Jun to Aug 2025 · Remote, US",
  context: "Internship, in-house",
  roles: ["UI/UX Design Intern"],
  tools: [],
  disciplines: ["ux-research", "product-design", "interaction-design", "design-systems"],
  cover: {
    alt: "A workflow of connected pipeline steps resolving into a single clear panel",
    accent: "clay",
  },

  atAGlance: {
    problem:
      "SpellCarver had to persuade a developer on a marketing page and then orient them inside a technical product, and the two surfaces were being designed as if they were unrelated.",
    role: "Sole designer on the team, and the product's first dedicated design resource: end-to-end UX and UI across the public site and the product interface.",
    approach:
      "Worked alongside the in-house developers who use the tool, through three design iterations and usability testing with them. Grouped navigation around what a developer is trying to do, gave pipeline state a reading order, and made security a named destination.",
    outcome:
      "Implemented by the end of the internship, with the product's first UI patterns and components established for the engineers to build against. No accessibility audit, and no outcome metrics were measured.",
  },

  ethics: {
    is: [
      "An interface design project: information architecture, content hierarchy and UI patterns for a developer-facing automation product.",
      "Designed with its users in the building (the in-house developers who run the tool) across three iterations and usability testing with them.",
      "A record of design decisions and the reasoning behind each one.",
    ],
    isNot: [
      "Not a published-interface case study. The screens are NDA-protected and none appear here.",
      "Not a security or compliance claim. The product is positioned around secure automation; nothing here certifies that it is secure or compliant.",
      "Not a performance report. The figures on the dashboard screens are interface content (sample values demonstrating a layout), and nothing was measured after release.",
    ],
    unvalidated: [
      "The specific design arguments below. Testing happened, but what it found is not reproduced on this page, so no individual decision here should be read as validated by it.",
      "The marketing-site half of the journey. The testing was with the developers who use the product, not with visitors arriving at the public page.",
      "Accessibility. The checklist was a standard to design against; no audit was run.",
      "Anything after release. The work was implemented, and no measurement of how it performed was taken.",
    ],
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "Two surfaces, one decision",
      standfirst:
        "A developer tool has to say what it can do and show what it is doing. Those usually get designed by different people, at different times, in different words.",
      blocks: [
        {
          type: "prose",
          text: [
            "SpellCarver is a secure-automation product: it runs CI/CD pipelines and keeps the security picture visible while it does. Like most products of its kind, it exists as two things at once, a public site that has to be persuasive, and a product interface that has to be precise.",
            "The failure mode is familiar. The marketing page promises something in confident, abstract language; you sign in, and the interface greets you with a different vocabulary and no obvious first move. Nothing is broken, but you have to reconstruct the product from its navigation.",
            "I joined as the only designer. The product had never had a dedicated design resource, so the question was not which screens needed polishing: it was what conventions the product should have at all, since whatever I set would be what the engineers built against.",
            "The one real advantage was that the users were in the building. SpellCarver is used by Merlin Mines' own developers, so the people I designed for were colleagues I could sit with, watch work, and put a prototype in front of.",
          ],
        },
        {
          type: "callout",
          title: "Why there are no screens here",
          text:
            "The interface is covered by an NDA, so this page carries the reasoning and the diagrams rather than the product. That is also why the design arguments below stay arguments: the work was tested and implemented, but showing what the testing changed would mean showing the screens.",
        },
      ],
    },

    {
      id: "audience",
      kind: "research",
      title: "Designing with the users, not for them",
      standfirst: "Three iterations, tested with the developers who would have to live with the result.",
      blocks: [
        {
          type: "prose",
          text: [
            "Most internship projects end at a prototype nobody has used. This one did not, for a structural reason: the users sat in the same company, so I could work with them directly rather than infer what they needed.",
          ],
        },
        {
          type: "claimGroup",
          title: "How the work actually ran",
          claims: [
            {
              level: "evidence",
              text: "The design went through three iterations rather than one pass, with usability testing run with the in-house developers who use the tool.",
              source: "My own record of the internship, Jun to Aug 2025",
            },
            {
              level: "evidence",
              text: "The people tested were the product's actual users (the Merlin Mines developers whose daily workflow the tool supports), not proxies recruited to stand in for them.",
              source: "My own record of the internship, Jun to Aug 2025",
            },
            {
              level: "interpretation",
              text: "Having the users in the building changed what the iterations were for. Each round was less about whether a layout was attractive and more about whether a developer could predict where something lived, which is the kind of question you can only settle by watching someone look for it.",
            },
          ],
        },
        {
          type: "prose",
          text: [
            "What I have not reproduced is what each round surfaced and what changed between the three iterations. That detail lives in the screens, and the screens are under NDA. So the process is documented, the findings are not public, and no individual decision below should be read as proven by the testing.",
          ],
        },
        {
          type: "claimGroup",
          title: "What I was designing against",
          claims: [
            {
              level: "interpretation",
              text: "The primary audience is developers and platform engineers who configure and monitor automation workflows as part of their day, not as a project.",
            },
            {
              level: "interpretation",
              text: "On arriving in the product, a developer's first three questions are, in order: what is my next action, is work progressing, and where is the security information. The interface should answer them in that order.",
            },
            {
              level: "interpretation",
              text: "Approachable language helps a visitor on the marketing page and hurts a developer in the product, where an imprecise status label is worse than a dull one.",
            },
          ],
        },
        {
          type: "prose",
          text: [
            "That last one shaped more than it looks like it should. Merlin Mines has a warm brand, and the instinct is to carry that voice everywhere. I kept it on the marketing surface and out of status labels, where a developer is making an operational decision and needs the literal word.",
          ],
        },
      ],
    },

    {
      id: "goals",
      kind: "synthesis",
      title: "What I set out to do",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Connect the story to the product: make the site's value proposition and its calls to action lead naturally into the interface.",
            "Make navigation predictable: group destinations around tasks, not around the internal feature list.",
            "Prioritise status and next actions: give pipeline state and progress a deliberate visual hierarchy.",
            "Make security discoverable: treat it as a first-class destination, not a buried utility.",
            "Keep the interface technically credible: concise labels, clear status language, consistent patterns for metrics and actions.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/experience-map.svg",
            alt: "Experience map in three stages: discover on the marketing site, get oriented in the product, then act and investigate in the workspace, with arrows running left to right between them",
            width: 1200,
            height: 560,
          },
          description:
            "Three stages. Discover, on the marketing site: state the promise, establish security as the frame, make one next step obvious. Get oriented, in the product: group destinations by intent, show current state, name the next action. Act and investigate: configure and run work, read progress, reach security and documentation.",
          },
      ],
    },

    {
      id: "decision-journey",
      kind: "concept",
      title: "Decision one: the site and the product are one journey",
      standfirst: "Four decisions, each argued from the problem rather than from a screenshot. All four went through the three iterations; what testing said about each is the part that stays behind the NDA.",
      blocks: [
        {
          type: "prose",
          text: [
            "The public page and the first product screen were being drafted as separate artefacts with separate vocabularies. I designed them against a shared terminology instead, so the path from a call to action to a first meaningful task is a continuation rather than a translation. The promise a visitor reads is the promise the interface is shaped to fulfil.",
          ],
        },
        {
          type: "claim",
          level: "concept",
          text: "Holding terminology constant between the marketing page and the product navigation reduces the gap between understanding the promise and knowing where to begin.",
        },
      ],
    },

    {
      id: "decision-navigation",
      kind: "concept",
      title: "Decision two: navigation grouped by intent",
      blocks: [
        {
          type: "prose",
          text: [
            "The product's destinations can be listed flat, or grouped by what someone came to do. I grouped them: a place to see state, a place to do work, a place to learn, a place to check trust. A developer arriving mid-task should be able to predict which group a destination belongs to without reading every label.",
          ],
        },
        {
          type: "comparison",
          title: "Two ways to organise the same destinations",
          columns: ["Flat feature list", "Grouped by intent"],
          rows: [
            ["Mirrors how the product is built internally", "Mirrors why someone opened it"],
            ["Every label has to be read to be placed", "The group narrows the search before the label is read"],
            ["New features append to the end", "New features have an obvious home, or reveal a missing group"],
            ["Security sits among the utilities", "Security is a named area of its own"],
          ],
        },
        {
          type: "claim",
          level: "hypothesis",
          text: "Grouping destinations by intent lets a developer predict where a task belongs without reading the full navigation. Watching a developer hesitate before a correct click is how you tell whether a grouping works, and hesitation is what the iterations were for.",
        },
      ],
    },

    {
      id: "decision-state",
      kind: "concept",
      title: "Decision three: operational state gets a reading order",
      blocks: [
        {
          type: "prose",
          text: [
            "A dashboard of equally weighted numbers is one nobody reads twice. I separated summary values from live pipeline activity and gave them a sequence: what to notice first, what to scan second, where to go for detail. Status carries a label as well as a colour, so it survives greyscale.",
            "The figures on those screens are sample content, demonstrating how a metric behaves in a layout. They are not measurements.",
          ],
        },
        {
          type: "claim",
          level: "concept",
          text: "Separating summary metrics from live pipeline state, and giving each a distinct visual treatment, lets a developer orient before acting rather than while acting.",
        },
      ],
    },

    {
      id: "decision-security",
      kind: "concept",
      title: "Decision four: security is a destination, not an inference",
      blocks: [
        {
          type: "prose",
          text: [
            "The product is positioned around secure automation, which makes it strange to ask someone to hunt for the security information. It became a named top-level area with a predictable location, so there is one answer to \"where would I look\" rather than several plausible ones.",
            "Worth saying plainly: making security easy to find is an interface decision. It does not make the product secure, and nothing in this case study should be read as a compliance claim.",
          ],
        },
        {
          type: "claim",
          level: "hypothesis",
          text: "In a product whose promise is security, a dedicated security destination is where users will look first, the cheapest check being to ask where someone would look before showing them anything.",
        },
      ],
    },

    {
      id: "flow",
      kind: "craft",
      title: "The path through it",
      blocks: [
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/core-flow.svg",
            alt: "A six-step flow: discover, orient, configure, run, monitor, and a dashed return path to investigate security or docs from any point",
            width: 1200,
            height: 360,
          },
          description:
            "Six steps: discover, orient, configure, run, monitor. The sixth, investigate, is drawn as a dashed return path rather than an endpoint, because reaching for security or the docs is something a developer does at any point.",
        },
        {
          type: "prose",
          text: [
            "Drawing investigation as a loop changed where documentation and security had to live. Something you reach for mid-task has to be reachable from wherever you are, which is what kept both in the top-level navigation rather than inside the workspace.",
          ],
        },
        {
          type: "list",
          title: "Distinctions the UI has to hold consistently",
          items: [
            "Primary action versus secondary navigation",
            "Summary metric versus live operational state",
            "Informational status versus actionable warning",
            "Global navigation versus workspace-specific actions",
            "Marketing language versus precise in-product terminology",
          ],
        },
      ],
    },

    {
      id: "validation",
      kind: "reflection",
      title: "What stayed untested",
      standfirst: "Testing ran with the developers. These are the questions it did not reach.",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "The marketing promise, on a stranger",
              text: "Show someone the landing page, take it away, ask them to explain what the product does and who it is for. If the promise does not survive being paraphrased, the public surface is doing less work than it appears to. The whole site-to-product argument rests on this and it was never checked.",
            },
            {
              title: "Anyone outside the company",
              text: "Everyone who tested this already worked at Merlin Mines and already knew roughly what the product was for. That is the right group for the in-product work and the wrong one for judging whether the marketing page explains itself to a stranger.",
            },
            {
              title: "An accessibility audit",
              text: "Contrast, focus visibility, keyboard access, status that does not rely on colour alone, behaviour at narrow widths and under zoom. All designed against as a standard; none of it formally audited.",
            },
            {
              title: "Anything after release",
              text: "It was implemented and I left. No measurement was taken of whether it made the developers' work faster, clearer or less error-prone, so there is no outcome figure on this page, and I would not trust one invented afterwards.",
            },
          ],
        },
      ],
    },

    {
      id: "outcome",
      kind: "reflection",
      title: "Where it got to",
      blocks: [
        {
          type: "prose",
          text: [
            "It was implemented before the internship ended. For a three-month placement on a product that had never had a designer, getting into the build rather than into a handover deck is the outcome I would point at, and it happened because the developers who built it had already seen the design three times.",
            "What the internship produced: a coherent screen set across the public site and the product, a documented navigation structure, a consistent content hierarchy for metrics and status, and the product's first UI patterns and components, which, as the first dedicated design resource the product had, is the part that outlasts any individual screen.",
            "What it did not produce is a number. Nobody measured whether it worked better afterwards, and the NDA keeps the evidence that does exist out of public view. I would rather say that plainly than invent a percentage.",
            "The lesson is narrower than \"developer tools should be clear\": a technical product's mental model is assembled from four places at once, the marketing story, the navigation, the operational states and the security information. Design any one without the other three and you get a product people can use but cannot describe.",
          ],
        },
      ],
    },
  ],
};
