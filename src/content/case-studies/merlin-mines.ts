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
 *     its navigation and its screens. The pack is explicit that no research,
 *     usability testing or outcome data exists, so NOTHING here is written at
 *     evidence level. Every claim about a user is a hypothesis; every claim
 *     about a design is a concept. That is not a gap in the page, it is the
 *     page telling the truth about what stage the work reached.
 *
 * Deliberately absent, and to stay absent until Efemena confirms them:
 *   · `tools` — the pack lists Figma as "to verify". Not guessed.
 *   · Any number read off a dashboard screen. Those are interface content,
 *     never product performance.
 *   · Any statement that SpellCarver shipped, launched or was adopted.
 */

export const merlinMines: CaseStudy = {
  slug: "merlin-mines",
  visibility: "published",
  title: "SpellCarver",
  premise:
    "A CI/CD automation product where the marketing promise and the product interface had to be designed as one continuous journey.",
  problemArea: "Developer tooling · CI/CD automation",
  humanProblem:
    "A developer evaluating an automation tool has to work out what it does, where to begin, whether it is running, and whether it is safe - usually in that order, usually alone.",
  shortRole: "UI/UX design intern · sole designer",
  projectType: "Internship, in-house · Merlin Mines",
  headline:
    "Established the product's first UI patterns and components as its only dedicated design resource. The interface is a design proposition: no part of it has been tested with a developer.",
  summary:
    "Three months as the sole designer on SpellCarver, a secure-automation product from Merlin Mines. The work spans the public site and the product interface, and the argument running through it is that those are one journey, not two projects - the words a visitor reads on the marketing page should be the words they find in the navigation.",
  featured: true,
  order: 9,
  status: "next-testing-phase",
  year: "2025",
  timeline: "Jun – Aug 2025 · Remote, US",
  context: "Internship, in-house",
  roles: ["UI/UX Design Intern"],
  tools: [],
  disciplines: ["product-design", "interaction-design", "design-systems"],
  cover: {
    alt: "A workflow of connected pipeline steps resolving into a single clear panel",
    accent: "clay",
  },

  atAGlance: {
    problem:
      "SpellCarver had to persuade a developer on a marketing page and then orient them inside a technical product - and the two surfaces were being designed as if they were unrelated.",
    role: "Sole designer on the team, and the product's first dedicated design resource: end-to-end UX and UI across the public site and the product interface.",
    approach:
      "Treated the site and the product as one journey. Grouped navigation around what a developer is trying to do, gave pipeline state a deliberate reading order, and made security a named destination rather than something to be inferred.",
    outcome:
      "A coherent screen set, a documented navigation structure and the product's first UI patterns and components. No usability testing, no accessibility audit and no outcome metrics - the evaluation plan below is proposed work, not completed work.",
  },

  ethics: {
    is: [
      "An interface design project: information architecture, content hierarchy and UI patterns for a developer-facing automation product.",
      "A record of design decisions and the reasoning behind each one.",
    ],
    isNot: [
      "Not a research study. No user interviews, surveys, competitive analysis or usability testing were conducted.",
      "Not a security or compliance claim. The product is positioned around secure automation; nothing here certifies that it is secure or compliant.",
      "Not a performance report. The figures visible on the dashboard screens are interface content - sample values that demonstrate a layout. They are not measurements of anything.",
    ],
    unvalidated: [
      "The audience model. Who uses SpellCarver, and what they need first, is reasoned from the product category rather than observed.",
      "The information architecture. No tree test or findability study was run against it.",
      "The dashboard reading order. Nobody has been asked to interpret a pipeline state from these screens.",
      "The flow from marketing page to first meaningful task, end to end.",
      "Accessibility. The checklist below is a standard to design against; it has not been audited.",
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
            "SpellCarver is a secure-automation product: it runs CI/CD pipelines and keeps the security picture visible while it does. Like most products of its kind, it exists as two things at once - a public site that has to be persuasive, and a product interface that has to be precise.",
            "The failure mode is familiar to anyone who has evaluated developer tooling. The marketing page promises something in confident, abstract language; you sign in, and the interface greets you with a different vocabulary and no obvious first move. Nothing is broken. The product simply has not told you what it is, and you have to reconstruct it from the navigation.",
            "I joined as the only designer on the team. The product had never had a dedicated design resource, which meant the question was not which screens needed polishing - it was what conventions the product should have at all, since whatever I established would be what the engineers built against afterwards.",
          ],
        },
        {
          type: "callout",
          title: "What this page is, and what it is not",
          tone: "caution",
          text:
            "No research was conducted on this project - no interviews, no surveys, no usability testing, no accessibility audit. Everything below is therefore marked as a hypothesis or an unvalidated concept rather than a finding. I would rather show the reasoning honestly labelled than dress a design argument up as evidence it does not have.",
        },
      ],
    },

    {
      id: "audience",
      kind: "research",
      title: "Who I was designing for",
      standfirst: "Reasoned from the product category. Written down so it can be checked, and disproved.",
      blocks: [
        {
          type: "prose",
          text: [
            "I had no research budget and no access to users, so the audience model is an argument rather than an observation. Writing it down explicitly was the point: a hypothesis someone can disagree with is more useful than an assumption nobody notices is there.",
          ],
        },
        {
          type: "claimGroup",
          title: "The audience model",
          claims: [
            {
              level: "hypothesis",
              text: "The primary audience is developers and platform engineers who configure and monitor automation workflows as part of their day, not as a project.",
            },
            {
              level: "hypothesis",
              text: "A secondary audience - technical leads and security-minded stakeholders - arrives needing confidence in process status and security posture rather than needing to run anything.",
            },
            {
              level: "hypothesis",
              text: "On arriving in the product, a developer's first three questions are, in order: what is my next action, is work progressing, and where is the security information. The interface should answer them in that order.",
            },
            {
              level: "hypothesis",
              text: "Approachable language helps a visitor on the marketing page and hurts a developer in the product, where an imprecise status label is worse than a dull one.",
            },
          ],
        },
        {
          type: "prose",
          text: [
            "That last one shaped more of the work than it looks like it should. Merlin Mines has a warm brand with a light sense of craft to it, and the instinct is to carry that voice everywhere. I kept it on the marketing surface and deliberately did not carry it into status labels, where a developer is making an operational decision and needs the literal word.",
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
            "Connect the story to the product - make the site's value proposition and its calls to action lead naturally into the interface.",
            "Make navigation predictable - group destinations around tasks, not around the internal feature list.",
            "Prioritise status and next actions - give pipeline state and progress a deliberate visual hierarchy.",
            "Make security discoverable - treat it as a first-class destination, not a buried utility.",
            "Keep the interface technically credible - concise labels, clear status language, consistent patterns for metrics and actions.",
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
            "The journey in three stages. Discover, on the marketing site: state the promise, establish security as the frame, make one next step obvious. Get oriented, in the product: group destinations by intent, show current state, name the next action. Act and investigate, in the workspace: configure and run work, read pipeline progress, reach security and documentation. The continuity being designed for is terminology - a word read on the site should be the word found in the navigation.",
          },
      ],
    },

    {
      id: "decision-journey",
      kind: "concept",
      title: "Decision one - the site and the product are one journey",
      standfirst: "Each of the four decisions below is a design proposition. None has been tested.",
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
      title: "Decision two - navigation grouped by intent",
      blocks: [
        {
          type: "prose",
          text: [
            "The product's destinations - dashboard, the SpellCarver workspace itself, tasks, documentation, security, the Spellbook, notifications - can be listed flat, or grouped by what someone came to do. I grouped them: a place to see state, a place to do work, a place to learn, a place to check trust. A developer arriving mid-task should be able to predict which group a destination belongs to without reading every label.",
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
          text: "Grouping destinations by intent lets a developer predict where a task belongs without reading the full navigation. A tree test would confirm or kill this quickly.",
        },
      ],
    },

    {
      id: "decision-state",
      kind: "concept",
      title: "Decision three - operational state gets a reading order",
      blocks: [
        {
          type: "prose",
          text: [
            "A dashboard full of equally weighted numbers is a dashboard nobody reads twice. I separated summary values from live pipeline activity and gave them a deliberate sequence: what you should notice first, what you scan second, where you go for detail. Status is carried by a label as well as a colour, so the distinction between informational and actionable survives both greyscale and a colour-blind reader.",
            "The figures visible on those screens are sample content. They demonstrate how a metric behaves in a layout - how a long duration wraps, how a count sits next to its label. They are not measurements, and I have been careful not to let them become outcomes later in this page.",
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
      title: "Decision four - security is a destination, not an inference",
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
          text: "In a product whose promise is security, a dedicated security destination is where users will look first. Asking developers where they would go, before showing them, would test this directly.",
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
            "Six steps: discover the value, orient to the workspace, configure prerequisites, run a workflow, monitor the status. The sixth, investigate - security or documentation - is drawn as a dashed return path rather than an endpoint, because reaching for the security screen or the docs is something a developer does at any point, not a stage they graduate to.",
        },
        {
          type: "prose",
          text: [
            "Drawing investigation as a loop rather than a final step changed where documentation and security had to live. If they are the end of a sequence, they can sit deep. If they are something you reach for mid-task, they have to be reachable from wherever you are - which is what made the case for keeping both in the top-level navigation rather than inside the workspace.",
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
      title: "What I would test first",
      standfirst: "Proposed work. None of this has been run.",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "First-task comprehension",
              text: "Show a developer the landing page, take it away, ask them to explain what the product does and who it is for. If the promise does not survive being paraphrased, the marketing surface is doing less work than it appears to.",
            },
            {
              title: "Navigation findability",
              text: "Ask people to locate a task, the documentation and the security information without guidance. Record misroutes and hesitation, not just success - the pause before a correct click is where the grouping is failing.",
            },
            {
              title: "Pipeline status interpretation",
              text: "Show a dashboard screen and ask what is happening and what to do next. This is the one I would run first: the reading order is the decision I am least certain about.",
            },
            {
              title: "First-run completion",
              text: "Watch a new user try to identify the prerequisites and get through setup. Capture blockers and recovery, including the states that only appear when something fails.",
            },
            {
              title: "Accessibility review",
              text: "Contrast, focus visibility, keyboard access, status that does not rely on colour alone, and behaviour at narrow widths and under zoom. Designed against; not yet audited.",
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
            "What the internship produced: a coherent screen set across the public site and the product, a documented navigation structure, a consistent content hierarchy for metrics and status, and the product's first UI patterns and components - which, as the first dedicated design resource the product had, is the part that outlasts any individual screen.",
            "What it did not produce: a single validated claim. The design is reasoned, internally consistent and completely untested. The honest version of this case study is one where the four decisions above are good arguments waiting for someone to check them, and I would rather hand a design director that than a page of invented percentages.",
            "The lesson I took from it is narrower than \"developer tools should be clear.\" It is that a technical product's mental model gets assembled from four places at once - the marketing story, the navigation structure, the operational states and the security information - and that designing any one of them without the other three produces a product people can use but cannot describe.",
          ],
        },
      ],
    },
  ],
};
