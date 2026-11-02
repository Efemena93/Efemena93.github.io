import type { CaseStudy } from "../types";

/**
 * IoT Venture GmbH — the full case study.
 *
 * History: this file previously stopped at an NDA boundary and published
 * nothing beyond the résumé. Efemena confirmed on 2026-10-24 that the
 * product-level material is cleared for public disclosure. The slug is
 * unchanged so the existing URL keeps working.
 *
 * ── STRUCTURE, rewritten 2026-11-01 ───────────────────────────────────────
 * The storytelling brief of 2026-11-01 asked for an outcome-first narrative
 * whose headings carry the story: a reader scanning only the headings should
 * get the argument. This page was previously organised as Minto over a
 * double diamond, with sections headed "Discover", "Define", "Develop",
 * "Deliver". Those are method names, and four of them in a row tell a reader
 * what process was followed rather than what was found.
 *
 * So the method names moved to the small `method` label and the headings now
 * state the finding. The order is: what shipped, who I was on it, the problem
 * worth solving, three pivotal decisions each run as
 * evidence → interpretation → decision → change → result, the experience
 * through two real tasks, then results separated from limitations, then the
 * reflection.
 *
 * No claim, figure, source or evidence level was dropped in the move. The
 * blocks were re-ordered and their connective prose rewritten; every
 * levelled claim kept its level and its `source` string verbatim.
 *
 * ── THE 20% RETENTION FIGURE, resolved 2026-10-29 ─────────────────────────
 * Efemena asked on 2026-10-27 that this be attributed rather than left as a
 * bare "self-reported", and on 2026-10-29 she named the source: the backend
 * team reported it to her. It was NOT a figure she measured, which is what
 * this page said before ("a figure of my own, taken from what we tracked at
 * the time") — that attribution was wrong and is now corrected.
 *
 * She has no baseline, comparison period or method for it, and the page says
 * so. It stays out of the body as a levelled claim, because a number
 * relayed in conversation is not evidence in the sense this site's evidence
 * levels mean; it appears in `headline`, `atAGlance.outcome` and the results
 * section, attributed every time.
 *
 * RELEASE SEQUENCE, settled by Efemena 2026-10-28: 3.0 in Oct to Nov 2024,
 * 3.1 a bug-fix release, 3.2 in Mar 2025, and the 3.3 design finished before
 * she left in Aug 2025. This supersedes an earlier note that had 3.3
 * "scheduled for release in October 2026", which sat fourteen months after
 * her departure and was flagged as unresolved. It is resolved: 3.3 is
 * completed design, not a shipped release, and the page says exactly that.
 *
 * NOT PUBLISHED: her reason for leaving. She told me on 2026-10-28 that she
 * stopped work for a maternity break. That is hers to disclose or not, and a
 * portfolio does not need a reason for a date. The page gives the date and
 * stops. Do not add it.
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
    "Led the 3.0 redesign across the flagship app and the white-label partner apps it had to stay compatible with, and shaped the state model behind predictive inspection. The backend team reported retention up 20% after the release.",
  summary:
    "As the company's only designer, owned UX and UI across a connected-bike product: the flagship app, a partner dashboard and white-label partner apps. The through-line is conditional behaviour: inspection states, permission outcomes and stale device data are all cases where the interface has to be honest about what it does and does not know.",
  featured: true,
  card: {
    description:
      "Sole designer for two years. Led the 3.0 redesign across the flagship app and the white-label partner apps it had to stay compatible with, and designed the state model behind predictive inspection.",
    ownership: "Sole designer",
    reached: "Shipped, Oct to Nov 2024",
    category: "Product Design / Interaction Design / Design Systems",
  },
  order: 1,
  status: "complete",
  year: "2023 to 2025",
  timeline: "Oct 2023 to Aug 2025 · Darmstadt, Germany",
  context: "Full-time, in-house role",
  roles: ["Sole UI/UX Designer"],
  // Named by Efemena, 2026-10-27: "i used figma, adobe suite, jira,
  // confluence, gpt enterprise, personio for my work with iot".
  //
  // Personio is deliberately not in this list. It is HR administration
  // (leave, contracts, payroll), not design tooling, and a Tools row that
  // includes it tells a reader nothing about how the work was made. It is
  // hers to put back in one line if she wants it there.
  tools: [
    "Figma",
    "Adobe Creative Cloud",
    "Jira",
    "Confluence",
    "ChatGPT Enterprise",
  ],
  disciplines: ["ux-research", "product-design", "interaction-design", "design-systems"],
  cover: { alt: "A phone and a connected-device panel, joined by a single line", accent: "blue" },

  atAGlance: {
    problem:
      "A connected-bike product across a consumer app, a partner dashboard and several white-label apps, where the hardest screens report a state the rider never asked about.",
    role: "Sole designer. Owned all UX and UI: research, the 3.0 redesign, usability testing, and the design system holding the surfaces together.",
    approach:
      "Double diamond. Research and a 15-participant beta test before the build was fixed, then the inspection state model, the responsive dealer portal, the permission sequences and the stale-data indicator, delivered on one design system.",
    outcome:
      "3.0 shipped October to November 2024 across the flagship and white-label apps on one design system. The backend team reported retention up 20% after release; I never saw the baseline or the method behind it.",
  },

  ethics: {
    is: [
      "Interface and interaction design for a connected-hardware product, across mobile and fleet-facing surfaces.",
      "Grounded in a 15-participant usability test I ran myself, named where the claims rest on it.",
    ],
    isNot: [
      "Not a disclosure of the vendor integrations, their technical field definitions, exact interface copy or timing thresholds. Those remain confidential.",
      "Not a claim that every workstream belonged to one release. These ran across two years and are gathered under one theme for the telling.",
      "Not a measured impact report. One retention figure exists, and it was reported to me rather than measured by me.",
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
    /* ── 1. THE PROJECT IN BRIEF ──────────────────────────────────────────
       Outcome first, then what the product is and who it serves, then the
       strongest final-design image on the page. The brief asked for a real
       final design early rather than after three screens of process. */
    {
      id: "outcome",
      kind: "synthesis",
      title: "3.0 shipped to the flagship app and every partner app at once",
      standfirst:
        "Mobility 3.0, October to November 2024, across It's My Bike and the white-label apps built on the same platform.",
      blocks: [
        {
          type: "prose",
          text: [
            "It's My Bike is a tracking and service product for connected bicycles. A rider sees where the bike is, whether it has moved when it should not have, and when it is due for inspection. Bike shops use a separate portal to order trackers, assign them to branches and hand them over. Both run on the same platform, and several partners ship the same product under their own brand.",
            "I was the only designer for two years, and 3.0 was the centre of it: a redesign that had to land on the flagship app and on every partner-branded app simultaneously, without any of them being redrawn by hand.",
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
            caption:
              "The 3.0 home screen in three of its four alert combinations. Notice that the sentence under the bike changes with the conditions rather than staying fixed — that is the whole design decision, visible. Sample data throughout, placeholder tracker and owner names.",
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

    /* ── 2. MY ROLE AND THE CONTEXT ──────────────────────────────────── */
    {
      id: "role",
      kind: "context",
      method: "Role and context",
      title: "One designer, three surfaces, and a platform that could not fork",
      blocks: [
        {
          type: "prose",
          text: [
            "I was IoT Venture's only designer from October 2023 to August 2025, in Darmstadt. There was no design team to divide work with, so research, interaction design, UI, the design system and usability testing were all mine. I worked day to day with the engineers building the apps and with product management, and took requirements for the dealer and fleet surfaces from the people who sold and supported them.",
            "The constraint that shaped most decisions was structural rather than visual: the flagship app and the partner-branded apps are the same product configured differently. Anything I designed for one had to be expressible as configuration rather than as a variant, or it would mean maintaining four codebases of screens by hand — with one designer, that is the same as not shipping it.",
          ],
        },
        {
          type: "claimGroup",
          title: "What was mine, and what was not",
          claims: [
            {
              level: "interpretation",
              text:
                "Mine: the 3.0 redesign across all surfaces, the usability study I ran and analysed, the inspection state model, the dealer portal, the permission sequences, the stale-data indicator, and the design system the whole thing sits on.",
            },
            {
              level: "interpretation",
              text:
                "Not mine: the prediction itself. When a bike is due for inspection was an engineering and vendor-data question. My work began where that estimate had to be said out loud.",
            },
          ],
        },
      ],
    },

    /* ── 3. THE PROBLEM WORTH SOLVING ─────────────────────────────────── */
    {
      id: "problem",
      kind: "synthesis",
      title: "The hardest screens are the ones nobody goes looking for",
      blocks: [
        {
          type: "prose",
          text: [
            "A maintenance window opening. A tracker that has stopped reporting. A permission declined six months ago that a feature now needs. None of these is a screen anyone navigates to. All of them arrive unasked, usually when the rider is doing something else, and each one has to be legible enough to act on without the rider having learned how the system works.",
            "The consequence of getting them wrong is not confusion, it is quiet distrust. A tracking product that shows a six-hour-old position the same way it shows a live one has not confused anyone — it has told them something false in a tone of complete confidence, and a rider only has to discover that once.",
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

    /* ── 4. PIVOTAL DECISIONS ─────────────────────────────────────────────
       Three, each as evidence → interpretation → decision → change →
       result. The first is the only one with research behind it, and the
       page is explicit about that rather than letting the shape imply
       otherwise. */
    {
      id: "decision-testing",
      kind: "research",
      method: "Usability testing · 15 participants, December 2023",
      title: "I tested while the build could still change, and the findings were about order, not clarity",
      standfirst: "Fifteen riders, in an iOS beta, ten months before release.",
      blocks: [
        {
          type: "prose",
          text: [
            "Research that arrives after a build is fixed is a report. I ran the study through an iOS beta while findings could still change what was being made. Fifteen people took part; fourteen returned a complete set of scores, plus open feedback.",
            "The scores were high, which is the least interesting thing about them. The twenty-seven written comments were the useful part.",
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
              level: "interpretation",
              text:
                "Almost none of the accepted changes were about making something clearer. They were about ordering and reach: what sits above what, and how few steps away a thing is. That reframed the redesign from a legibility problem to a hierarchy problem.",
            },
            {
              level: "evidence",
              text:
                "Three changes followed directly: the report-theft call to action was simplified, all linked trackers were surfaced on the home screen map, and tracker status was promoted above trip history.",
              source: "Usability test recommendations, December 2023, marked Done in the design file",
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
              "The results board from my own file. Participants are anonymised; the blank row is the incomplete response, which is why the means are computed over fourteen rather than fifteen.",
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
            "The tags — done, to-do, not a priority, not yet possible — are a snapshot of December 2023, not verdicts. By the time 3.0 shipped, every item on the list had been designed for.",
          ],
        },
      ],
    },

    {
      id: "decision-states",
      kind: "craft",
      title: "Three inspection states, because they ask the rider for three different things",
      blocks: [
        {
          type: "prose",
          text: [
            "The bike predicts when it needs inspecting, which turns a continuous engineering estimate into something the interface has to say out loud. The obvious design is one component whose colour changes with severity. I built three states that change shape instead.",
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
          type: "callout",
          title: "This one was never tested",
          tone: "caution",
          text:
            "The state model was built from requirements, platform constraints and design review. Unlike the hierarchy changes above, no study backs the choice of three states or the wording of any of them. It is reasoning, and it is offered as reasoning.",
        },
      ],
    },

    {
      id: "decision-system",
      kind: "craft",
      title: "One system, configured per brand, rather than four apps to keep in step",
      standfirst: "The only structure under which one designer could ship to four apps at once.",
      blocks: [
        {
          type: "prose",
          text: [
            "3.0 went out across the flagship and the white-label apps together. The design system is what made that possible: partner brands were configured rather than redrawn, so a change to a shared pattern did not become a week of reconciling four apps by hand.",
            "Three pieces of conditional behaviour had to survive that constraint — each one a place where the system knows less than the interface implies, and each one built once and configured rather than designed per app.",
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

    /* ── 5. SHOW THE EXPERIENCE ───────────────────────────────────────────
       One task, followed end to end, rather than a gallery of screens. */
    {
      id: "experience",
      kind: "craft",
      method: "The dealer portal",
      title: "Assigning a batch of trackers, on whatever device is on the counter",
      blocks: [
        {
          type: "prose",
          text: [
            "A bike shop has taken delivery of thirty trackers and needs them assigned to the right branch before they can be fitted. The person doing it is behind a counter, is interrupted, and will come back to the task three times before it is finished.",
            "So the screen is built around being partway through rather than around filling in a form. Trackers on one side, branches on the other, and a running count of how far into the batch you are. It is one responsive system across phone, tablet and desktop: checking a delivery on an iPad behind the counter is the same task as doing it on a laptop out back, so it is the same interface rather than a cut-down one.",
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
            caption:
              "Assigning hardware to a branch. The counter beneath the list reads 06 of 30 — that is the number that makes the screen resumable. Sample serials and store names; the partner hotline has been removed.",
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
      ],
    },

    /* ── 6. RESULTS AND LIMITATIONS ───────────────────────────────────────
       The brief asked that measured outcomes, observations and reported
       figures be told apart rather than listed together. They are three
       different kinds of thing here and the section says which is which. */
    {
      id: "results",
      kind: "synthesis",
      title: "What is known, what was observed, and what was only reported to me",
      blocks: [
        {
          type: "prose",
          text: [
            "3.0 shipped in October to November 2024 across the flagship app and the white-label apps, on one design system. That is the outcome I can show: the release happened, on every surface, and the screens on this page are from it.",
            "The backend team told me retention rose 20% after the release. I am repeating that rather than reporting it: I never saw the baseline, the comparison period or the method, and I did not measure it myself. It is the only number of its kind attached to this project, and it should be read as something I was told.",
            "From the study, what is genuinely observed is narrower and more useful: six rated questions averaging 4.4 to 4.9 across fourteen complete responses, and twenty-seven written recommendations, of which three became named changes before release.",
            "After 3.0 the work continued as evolution rather than a second redesign. 3.1 was a bug-fix release, 3.2 shipped in March 2025, and I had finished the 3.3 design by the time I left. 3.3 is design I completed, not a release I shipped, and nothing on this page shows a released 3.3.",
          ],
        },
        {
          type: "callout",
          title: "Where the testing stopped",
          tone: "caution",
          text:
            "The beta ran with riders. The dealer workflow was never put in front of a dealer, and the inspection state model was never tested as a model: both were built from requirements, platform constraints and design review. Research on one part of a product should not lend credibility to the rest.",
        },
      ],
    },

    /* ── 7. REFLECTION ────────────────────────────────────────────────── */
    {
      id: "reflection",
      kind: "reflection",
      title: "The ideal state is the screen you design once and never look at again",
      blocks: [
        {
          type: "prose",
          text: [
            "The lesson is narrower than \"design for the user\": connected products are mostly conditional behaviour. Everything that makes one feel trustworthy or shabby lives in the states nobody asks for, and those get specified last, when the deadline is closest and the appetite for a new component is lowest.",
            "The tradeoff I never resolved is the inspection model itself. Three states was a judgement, and judgement is what you have when the thing you would want to test — whether riders read \"almost due\" as a prompt or as noise — needs a study nobody was going to fund for a component that already worked. If I had the time back, that is the study I would run, and I would run it before building the component rather than after.",
          ],
        },
      ],
    },
  ],
};
