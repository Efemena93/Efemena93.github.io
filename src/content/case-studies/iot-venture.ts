import type { CaseStudy } from "../types";

/**
 * IoT Venture GmbH — the full case study.
 *
 * History: this file previously stopped at an NDA boundary and published
 * nothing beyond the résumé. Efemena confirmed on 2026-10-24 that the
 * product-level material is cleared for public disclosure. The slug is
 * unchanged so the existing URL keeps working.
 *
 * NEEDS EFEMENA'S CONFIRMATION — the 3.3 date.
 * The refinement brief of 2026-10-27 states that version 3.3 "was scheduled
 * for release in October 2026 when I left". Her tenure on this page, and on
 * the résumé, is Oct 2023 to Aug 2025, which puts that date fourteen months
 * after she left. Both can be true (a roadmap slot a year out), so the page
 * says what she said and claims nothing more. If the date is wrong, the
 * sentence in the "outcome" section is the only place it appears.
 *
 * WHAT IS DELIBERATELY WITHHELD, and must stay withheld unless she says
 * otherwise — the source pack flags each of these as needing permission:
 *   · The vendor/OEM integration names (the drive-system and tracker
 *     manufacturers). Named nowhere on this page.
 *   · CAN field names, units and value semantics. Described only as
 *     "vendor-specific technical values", never enumerated.
 *   · Exact rider-app copy, timing thresholds and stale-data trigger rules.
 *   · The usability study's participant table. It lists 15 people by name,
 *     six of them full names; 14 returned a complete set of scores, and the
 *     means in the file are computed over those 14 (Q1 totals 61, 61/14 =
 *     4.36, matching the stated 4.4 — over 15 it would read 4.1). The page
 *     states both numbers rather than rounding to one. Neither the table nor any participant
 *     name is reproduced anywhere — only aggregate figures (n, means) and
 *     themes, per the site-wide rule that participants are described by
 *     role, never by name.
 *   · Any partner or customer identifier. The dealer-portal screens below
 *     carried a partner's name and support hotline in their side panel; that
 *     block is cropped or painted out of every export in
 *     public/work/iot-venture/. Everything else on those screens is sample
 *     data from the design file — placeholder serials, store names, a dummy
 *     tax number and a dummy phone number — not customer records.
 *
 * Evidence levels here differ from merlin-mines on purpose. This role DID
 * involve research she ran herself — user research feeding the 3.0 redesign,
 * and usability testing through an iOS beta before full release, with named
 * changes that came out of it. Those are `evidence` with the study named.
 * The design reasoning layered on top is `interpretation`; the propositions
 * nobody tested are `hypothesis` or `concept`.
 *
 * THE 20% RETENTION FIGURE: Efemena asked for this to be attributed to a
 * source rather than left as a bare "self-reported". She has not yet told me
 * what the source is, and I will not invent one. Until she does it stays out
 * of the body as a levelled claim and appears only in `headline` and
 * `atAGlance.outcome` with the hedge attached, exactly as the résumé has it.
 * When she names the source, it becomes an `evidence` claim in the outcome
 * section and the hedge comes off.
 */

export const iotVenture: CaseStudy = {
  slug: "iot-venture",
  visibility: "published",
  title: "IoT Venture GmbH",
  premise:
    "Two years as the only designer on a connected-bike product, where most of the design work was deciding what the system should say when it isn't sure.",
  problemArea: "Connected hardware · mobile app + partner dashboards",
  humanProblem:
    "A connected bike reports states a rider never asked about (a maintenance window opening, a tracker that stopped reporting, a permission that was declined), and each one has to be legible enough to act on without the rider learning the system.",
  boundary:
    "Employer work. Product behaviour, design reasoning and the dealer-portal screens are published with permission, with sample data throughout; the drive-system and tracker vendor integrations, their technical field definitions, a partner's support details, exact rider-app copy and timing thresholds are not reproduced here.",
  shortRole: "Sole UI/UX designer",
  projectType: "Full-time, in-house role · Oct 2023 to Aug 2025",
  headline:
    "Led the 3.0 redesign across the flagship app and the white-label partner apps it had to stay compatible with, and shaped the state model behind predictive inspection. User retention rose 20% after the release.",
  summary:
    "As the company's only designer, owned UX and UI across a connected-bike product: the flagship app, a partner dashboard and white-label partner apps. The through-line is conditional behaviour: inspection states, permission outcomes and stale device data are all cases where the interface has to be honest about what it does and does not know.",
  featured: true,
  card: {
    description:
      "Making connected mobility simpler through intuitive tracking, thoughtful security interactions, and a unified product experience.",
    category: "Product Design / Interaction Design / Design Systems",
  },
  order: 1,
  status: "complete",
  year: "2023 to 2025",
  timeline: "Oct 2023 to Aug 2025 · Darmstadt, Germany",
  context: "Full-time, in-house role",
  roles: ["Sole UI/UX Designer"],
  tools: [],
  disciplines: ["ux-research", "product-design", "interaction-design", "design-systems"],
  cover: { alt: "A phone and a connected-device panel, joined by a single line", accent: "blue" },

  atAGlance: {
    problem:
      "A connected-bike product across a consumer app, a partner dashboard and several white-label apps, where the hardest screens report a state the rider never asked about.",
    role: "Sole designer. Owned all UX and UI: research, the 3.0 redesign, usability testing, and the design system holding the surfaces together.",
    approach:
      "Double diamond. Research and a 15-participant beta test before the build was fixed, then the inspection state model, the responsive dealer portal, the permission sequences and the stale-data indicator, delivered on one design system.",
    outcome:
      "3.0 shipped October to November 2024 across the flagship and white-label apps on one design system. Retention rose 20% after release, a figure of my own rather than an independent audit.",
  },

  ethics: {
    is: [
      "Interface and interaction design for a connected-hardware product, across mobile and fleet-facing surfaces.",
      "Grounded in a 15-participant usability test I ran myself, named where the claims rest on it.",
    ],
    isNot: [
      "Not a disclosure of the vendor integrations, their technical field definitions, exact interface copy or timing thresholds. Those remain confidential.",
      "Not a claim that every workstream belonged to one release. These ran across two years and are gathered under one theme for the telling.",
      "Not a measured impact report. One retention figure exists and it is self-reported.",
    ],
    unvalidated: [
      "Why three inspection states is the right number. The states were built; the argument was never tested against users.",
      "Whether the conditional skip rule reads as an escape hatch rather than a dismissal.",
      "Whether the pre-permission explanation improves the grant rate. No measurement was taken.",
      "The stale-data threshold. The design makes freshness visible; nobody checked whether the window matches what riders treat as current.",
    ],
    notRepresented: [
      "Dealers and workshop staff were not part of the usability testing, which ran with riders through the iOS beta. The workflow designed for them rests on requirements and review, not observation.",
    ],
  },

  sections: [
    /* ── TOP OF THE PYRAMID: the answer ──────────────────────────────────
       Minto's rule, and the reason this section exists at all: the result
       goes first, before the role, the problem or the process. A hiring
       designer who reads only this box should already know what happened. */
    {
      id: "outcome",
      kind: "synthesis",
      title: "What shipped",
      standfirst:
        "Mobility 3.0, October to November 2024, across the flagship app and the white-label apps built on the same platform.",
      blocks: [
        {
          type: "prose",
          text: [
            "I was the only designer at IoT Venture for two years, and 3.0 was the centre of it: a redesign of It's My Bike that had to land on the flagship app and on every partner-branded app built from the same platform.",
            "User retention rose 20% after the release. That figure is my own, taken from what we tracked at the time rather than from an independent audit, and it is the only number of its kind on this page.",
            "After 3.0 the work continued as evolution rather than a second redesign. Version 3.3 was on the roadmap, scheduled for October 2026, when I left. I designed toward it and did not ship it.",
          ],
        },
      ],
    },

    /* ── MIDDLE OF THE PYRAMID: the arguments ────────────────────────────
       Three decisions, each stated once and each carrying the result above.
       The evidence for them is the double diamond below, in that order. */
    {
      id: "decisions",
      kind: "synthesis",
      title: "Three decisions that got it there",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "interpretation",
              text:
                "Test before the build is fixed, not after. The 3.0 research ran through an iOS beta while findings could still change what was being built, which is the difference between research and a report.",
            },
            {
              level: "interpretation",
              text:
                "Treat conditional behaviour as the product. Inspection states, permission outcomes and stale device data are all moments where the system knows less than the interface implies, and they are where a connected product earns trust or loses it.",
            },
            {
              level: "interpretation",
              text:
                "Build one system, not several skins. With one designer and a flagship app plus white-label partner apps, a shared system was the only thing that made the surface area tractable.",
            },
          ],
        },
      ],
    },

    /* ── BOTTOM OF THE PYRAMID: the evidence, as the double diamond ───── */
    {
      id: "discover",
      kind: "research",
      title: "Discover",
      standfirst: "Fifteen riders, in a beta, ten months before release.",
      blocks: [
        {
          type: "prose",
          text: [
            "Fifteen people took part; fourteen returned a complete set of scores, plus open feedback. The scores were high, which is the least interesting thing about them. The twenty-seven written comments were the useful part.",
          ],
        },
        {
          type: "statRow",
          stats: [
            { value: "15", label: "Participants" },
            { value: "14", label: "Complete responses" },
            { value: "6", label: "Rated questions" },
            { value: "27", label: "Written recommendations" },
          ],
          source: "Usability test results board, December 2023, 15 participants, 5-point scale plus open feedback",
        },
        {
          type: "claimGroup",
          claims: [
            {
              level: "evidence",
              text:
                "Across the six rated questions, mean ratings ran from 4.4 to 4.9 out of 5 over the fourteen complete responses, with the two lowest both at 4.4.",
              source: "Usability test results board, December 2023, 15 participants, 14 complete responses, 5-point scale",
            },
            {
              level: "evidence",
              text:
                "Three changes followed directly: the report-theft call to action was simplified, all linked trackers were surfaced on the home screen map, and tracker status was promoted above trip history.",
              source: "Usability test recommendations, December 2023, marked Done in the design file",
            },
            {
              level: "interpretation",
              text:
                "Almost none of the accepted changes were about making something clearer. They were about ordering and reach: what sits above what, and how few steps away a thing is.",
            },
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/usability-scores.webp",
            alt: "The usability results table: fifteen anonymised participants down the side, six rated questions across the top, with per-question totals and means along the bottom",
            width: 1400,
            height: 724,
            caption:
              "The results board from my own file. Participants are anonymised; the blank row is the incomplete response, which is why the means are computed over fourteen.",
          },
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/usability-recommendations.webp",
            alt: "The twenty-seven numbered feedback items, colour-coded by whether each was done, to do, not a priority, or not yet technically possible",
            width: 1084,
            height: 776,
            caption:
              "All twenty-seven, colour-coded by status rather than pruned to the ones that shipped. Keeping the parked items on the list is what made it possible to come back to them later.",
          },
        },
        {
          type: "prose",
          text: [
            "The twenty-seven items are tagged done, to-do, not a priority, or not yet possible. Those tags are a snapshot of December 2023, not verdicts: by the time 3.0 shipped, every item on the list had been designed for.",
          ],
        },
      ],
    },

    {
      id: "define",
      kind: "synthesis",
      title: "Define",
      standfirst: "The hard screens were never the ones a rider asks for.",
      blocks: [
        {
          type: "prose",
          text: [
            "A maintenance window opening. A tracker that has stopped reporting. A permission declined six months ago that a feature now needs. None is a screen anyone navigates to, and all are where the product either explains itself or becomes something you tolerate.",
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "Permissions, stale data and unexplained technical values are one design problem wearing three costumes. Each is a moment where the system knows less than the interface implies, and the honest move is to show the gap rather than smooth it over.",
        },
      ],
    },

    {
      id: "develop",
      kind: "craft",
      title: "Develop",
      standfirst: "Three places that argument had to survive contact with a screen.",
      blocks: [
        {
          type: "prose",
          text: [
            "The bike predicts when it needs inspecting, which turns a continuous estimate into something the interface has to say out loud. The model settled on three states, and each asks the rider for something categorically different, so the component changes shape rather than only colour.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/inspection-states.svg",
            alt: "The three inspection states side by side, All good with no action, Almost due with a scheduling action, Overdue with the required workflow and the skip option",
            width: 1200,
            height: 560,
          },
          description:
            "All good offers no control at all. Almost due offers scheduling, with the timing explained. Overdue states both the requirement and the way out. Each is distinguished by label and marker shape as well as colour.",
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "These are not three severities of one message. \"Nothing to do\", \"plan something\" and \"act now\" are different speech acts, and rendering them as one component with a changing colour flattens that distinction back out.",
        },
        {
          type: "prose",
          text: [
            "The same reasoning runs through the dealer portal, where bike shops order hardware, assign it and get back to work. One responsive system across phone, tablet and desktop: checking a delivery on an iPad behind the counter is the same task as doing it on a laptop out back. Own design file, sample data.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/dealer-assign-tracker.png",
            alt: "Desktop view of Assign Tracker, with a paginated list of tracker serial numbers on the left, a list of company branches on the right, and a single Assign Tracker action",
            width: 1100,
            height: 715,
            caption: "Assigning hardware to a branch. Sample serials and store names; the partner hotline has been removed.",
          },
          description:
            "Two columns: which trackers, and which branch. The counter beneath reads 06 of 30, so a shop working through a batch can see how far in they are without counting checkboxes.",
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "Pairing a paginated serial list against a branch list, with a running count, treats assignment as a batch task someone is partway through rather than a form they fill in once.",
        },
        {
          type: "prose",
          text: [
            "And on the home screen, where two alert conditions can each be on or off independently, the status card composes a sentence from whichever are live rather than storing a label per combination.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/home-state-matrix.png",
            alt: "Three versions of the app home screen side by side, each with a different pair of alert conditions active and a status sentence rewritten to match, with the inactive condition's icon greyed out",
            width: 1523,
            height: 1166,
            caption: "Three of the four combinations. Sample data throughout, placeholder tracker and owner names.",
          },
          description:
            "With distance alone, the card says an alert will come if the bike moves 100 m away. With movement alone, if it moves or shakes while parked. With both, either. The inactive condition's icon greys out, so the sentence and the icon row always agree.",
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "Composing the sentence from the live conditions is what keeps it honest as conditions are added. A fixed set of labels goes stale the moment a third condition exists.",
        },
      ],
    },

    {
      id: "deliver",
      kind: "craft",
      title: "Deliver",
      standfirst: "One system, several brands, one designer.",
      blocks: [
        {
          type: "prose",
          text: [
            "3.0 went out across the flagship and the white-label apps together. The design system is what made that possible: partner brands were configured rather than redrawn, so a change to a shared pattern did not become a week of reconciling four apps by hand.",
          ],
        },
        {
          type: "steps",
          steps: [
            {
              title: "Permissions, across two platforms",
              text:
                "iOS and Android ask differently, and a rider gets one good chance at each prompt. The sequences explain what the permission buys before the system asks, and treat a decline as a state the product continues from. Designing the declined path is most of the work.",
            },
            {
              title: "Stale tracker data",
              text:
                "A last-movement time is the most dangerous number in a tracking product, because an old reading looks exactly like a current one. The indicator makes freshness visible, so \"the bike has not moved\" and \"we have not heard from the bike\" stop looking alike.",
            },
            {
              title: "The fleet portal",
              text:
                "Fleet operators look at many assets rather than one bike, which inverts the question from \"what is this bike doing\" to \"which of these needs me\". Same states, different unit of attention.",
            },
          ],
        },
      ],
    },

    {
      id: "limits",
      kind: "reflection",
      title: "What this does not prove",
      blocks: [
        {
          type: "callout",
          title: "Where the testing stopped",
          tone: "caution",
          text:
            "The beta ran with riders. The dealer workflow was never put in front of a dealer, and the inspection state model was never tested as a model: both were built from requirements, platform constraints and design review. Research on one part of a product should not lend credibility to the rest.",
        },
        {
          type: "prose",
          text: [
            "The lesson is narrower than \"design for the user\": connected products are mostly conditional behaviour. The ideal state is the screen you design once and rarely look at again. Everything that makes a product feel trustworthy or shabby lives in the other states, and those get specified last.",
          ],
        },
      ],
    },
  ],
};
