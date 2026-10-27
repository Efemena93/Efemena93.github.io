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
 *
 * SCREENS, added 2026-10-27. Efemena supplied three SpellCarver screenshots
 * directly, against a brief that asks for them by name: the Pipeline Builder
 * with the Active Pipeline list, the documentation search modal, and the
 * security report. They supersede the earlier NDA position on imagery, which
 * was hers to set and hers to lift, and `boundary` has been narrowed to match.
 *
 * Two identifiers were painted out of the security report before it was
 * published: the pipeline run ID and the repository name
 * (`public/work/merlin-mines/security-report-*.webp`). Neither is design
 * evidence, and together they said which internal repository had open
 * findings on a given date. The CVE identifiers left visible are public
 * advisories against base OS packages, not Merlin Mines code. The unredacted
 * originals are not in this repository.
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
  shortRole: "Sole designer",
  projectType: "In-house product design · Merlin Mines",
  boundary:
    "Three screens appear here with permission, with the run ID and repository name painted out. The rest of the interface stays unpublished, and so do the numbers on these screens: they are interface content, not product performance.",
  headline:
    "Established the product's first UI patterns and components as its only dedicated design resource, across three design iterations tested with the in-house developers who use the tool. Implemented before I left.",
  summary:
    "Three months as the sole designer on SpellCarver, a secure-automation product from Merlin Mines, across the public site and the product interface. Three iterations, tested with the in-house developers who use it, implemented before I left.",
  featured: true,
  card: {
    description:
      "Bringing clarity to complex DevSecOps workflows through actionable security insights, pipeline visibility, and developer-focused interfaces.",
    category: "B2B SaaS / Developer Experience / Complex Workflows",
  },
  order: 2,
  status: "complete",
  year: "2025",
  timeline: "Jun to Aug 2025 · Remote, US",
  context: "In-house, sole designer",
  roles: ["UI/UX Designer"],
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
      "Implemented by the end of my time there, with the product's first UI patterns and components established for the engineers to build against. No accessibility audit, and no outcome metrics were measured.",
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
    /* ── TOP: the answer ────────────────────────────────────────────────
       The result first. For a three-month engagement on a product that had
       never had a designer, reaching the build is the outcome worth leading
       with, and it is the one this page can actually support. */
    {
      id: "outcome",
      kind: "synthesis",
      title: "What shipped",
      standfirst:
        "Implemented before I left, as the product's first UI patterns and components.",
      blocks: [
        {
          type: "prose",
          text: [
            "SpellCarver is a secure-automation product: it runs CI/CD pipelines and keeps the security picture visible while it does. I was its only designer for three months, across the public site and the product interface.",
            "The work went into the build rather than into a handover deck, and it did so because the developers who built it had already seen the design three times. What came out of it: a coherent screen set across the site and the product, a documented navigation structure, a consistent hierarchy for metrics and status, and the first UI patterns and components the product had.",
          ],
        },
        {
          type: "callout",
          title: "No outcome metrics",
          tone: "caution",
          text:
            "Nothing here was measured after release. There is no adoption figure, no task-time change and no accessibility audit. Everything below is process and reasoning, not proof of effect.",
        },
      ],
    },

    /* ── MIDDLE: the arguments ─────────────────────────────────────────── */
    {
      id: "decisions",
      kind: "synthesis",
      title: "Three decisions that shaped it",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "interpretation",
              text:
                "Group navigation by intent, not by feature. Navigation was the only friction that showed up in all three journeys I mapped, which made it the first decision rather than a later refinement.",
            },
            {
              level: "interpretation",
              text:
                "Make the product speak at the moments it was going quiet. The mapping kept surfacing the same gap: after a failure, after an adjustment, after a vulnerability is resolved. Status in words, log output on the run itself and explicit confirmation all answer that.",
            },
            {
              level: "interpretation",
              text:
                "Give security a destination. A product positioned around secure automation should not ask anyone to hunt for the security picture, so it became a named top-level area with a predictable location.",
            },
          ],
        },
      ],
    },

    /* ── BOTTOM: the evidence, as the double diamond ───────────────────── */
    {
      id: "discover",
      kind: "research",
      title: "Discover",
      standfirst: "The users sat in the same building, so I worked with them rather than inferred them.",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "evidence",
              text:
                "The design went through three iterations rather than one pass, with usability testing run with the in-house developers who use the tool.",
              source: "My own record of the engagement, Jun to Aug 2025",
            },
            {
              level: "evidence",
              text:
                "The people tested were the product's actual users, the Merlin Mines developers whose daily workflow the tool supports, not proxies recruited to stand in for them.",
              source: "My own record of the engagement, Jun to Aug 2025",
            },
            {
              level: "interpretation",
              text:
                "Having the users in the building changed what the iterations were for. Each round was less about whether a layout was attractive and more about whether a developer could predict where something lived, which is a question you can only settle by watching someone look for it.",
            },
          ],
        },
        {
          type: "prose",
          text: [
            "One thing shaped more than it looks like it should: Merlin Mines has a warm brand, and the instinct is to carry that voice everywhere. I kept it on the marketing surface and out of status labels, where a developer is making an operational decision and needs the literal word.",
          ],
        },
      ],
    },

    {
      id: "define",
      kind: "synthesis",
      title: "Define",
      standfirst: "Three journeys, with the friction in each one ranked rather than listed.",
      blocks: [
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/user-flows-1065.webp",
            alt: "Three user-flow diagrams, each with a ranked list of friction points beside it: new user onboarding, pipeline management, and vulnerability resolution",
            width: 1065,
            height: 1042,
            caption:
              "The flow mapping. A ranked list is a design brief; an unranked one is a complaint.",
          },
          description:
            "Onboarding runs from landing page to a first pipeline run, and its friction is led by access-token complexity, then unclear error handling, then not knowing where to go on arrival. Pipeline management runs from the dashboard to adjusting or triggering a run, and its friction is led by difficulty finding the pipeline tools, then ambiguous status, then uncertainty about the options when adjusting. Vulnerability resolution runs from the dashboard through the security section to a confirmed fix, and its friction is led by confusing severity indicators and remediation steps, then unintuitive navigation to security, then ambiguity about which remediation to take. All three end on weak or missing confirmation.",
        },
        {
          type: "callout",
          title: "What this does and does not establish",
          text:
            "These friction points are my own analysis, recorded on the flow-mapping sheet. Whether each was observed in the testing sessions or reasoned out beforehand is not something the sheet records, so they are marked as interpretation rather than as findings.",
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/site-map-1065.webp",
            alt: "Site map of SpellCarver: a dashboard branching into Spellcarver, Settings, Spellbook, Account and Documents, each with its own destinations beneath it",
            width: 1065,
            height: 914,
            caption:
              "The site map that answered it. Five areas, each matching a different reason for opening the product.",
          },
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
      ],
    },

    {
      id: "develop",
      kind: "craft",
      title: "Develop",
      standfirst: "Where those decisions met a screen.",
      blocks: [
        {
          type: "prose",
          text: [
            "A dashboard of equally weighted numbers is one nobody reads twice. I separated summary values from live pipeline activity and gave them a sequence: what to notice first, what to scan second, where to go for detail.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/pipeline-builder-1400.webp",
            alt: "The SpellCarver Pipeline Builder above a list of active pipeline runs, each showing repository, branch, elapsed duration, a Running status pill, the latest log line and a progress bar",
            width: 1400,
            height: 879,
            caption:
              "Each run states its repository, branch, elapsed time, status in words as well as colour, latest log line and progress, so \"is it running, and how far\" is answered without opening anything.",
          },
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/security-report-1400.webp",
            alt: "The security report: three panels counting SAST, CVE and Bearer findings by critical, high, medium and low severity, above a filterable list of all vulnerabilities with the affected component and an open status on each",
            width: 1400,
            height: 919,
            caption:
              "Three scanners summarised by severity, then every finding in one filterable list. Counts are numbers and words, and each finding carries its status in text, so nothing depends on telling red from amber. The run identifier and repository name are painted out; the figures are sample content.",
          },
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/merlin-mines/doc-search-1400.webp",
            alt: "The documentation search modal open over the docs page, with the query getting matched against two guides, each labelled guide and summarised in a line, and keyboard hints for navigate, select and close along the bottom",
            width: 1400,
            height: 865,
            caption:
              "Documentation search as a modal over the page rather than a separate destination, so the choice is made before the reader leaves what they were doing. Reachable and dismissible from the keyboard.",
          },
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "The public page and the first product screen were being drafted as separate artefacts with separate vocabularies. Designing them against shared terminology makes the path from a call to action to a first real task a continuation rather than a translation.",
        },
      ],
    },

    {
      id: "deliver",
      kind: "craft",
      title: "Deliver",
      standfirst: "Into the build, not into a deck.",
      blocks: [
        {
          type: "prose",
          text: [
            "The screen set went to the engineers as patterns and components rather than as finished pictures, which is the part that outlasts any individual screen. A product that has never had a designer does not need one good layout; it needs the vocabulary to make the next twenty consistent.",
          ],
        },
      ],
    },

    {
      id: "limits",
      kind: "reflection",
      title: "What stayed untested",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "hypothesis",
              text:
                "That grouping destinations by intent lets a developer predict where a task belongs without reading the full navigation. Watching someone hesitate before a correct click is how you tell, and that is what the iterations were for.",
            },
            {
              level: "hypothesis",
              text:
                "That restricting an action to the state where it is genuinely an exception keeps it legible as an escape hatch rather than a way to dismiss a reminder.",
            },
            {
              level: "concept",
              text:
                "Making security easy to find is an interface decision. It does not make the product secure, and nothing here should be read as a compliance claim.",
            },
          ],
        },
        {
          type: "prose",
          text: [
            "What I still cannot publish is what each testing round surfaced and what changed between the three iterations. Without that, \"tested\" cannot become \"validated\" for any single decision above.",
          ],
        },
      ],
    },
  ],
};
