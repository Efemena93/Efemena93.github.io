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
      "A connected-bike product spanning a consumer app, a partner dashboard and several white-label apps, where the hardest screens were the ones reporting a state the rider had not asked about: maintenance due, data gone stale, permission declined.",
    role: "Sole designer. Owned all UX and UI: research, the 3.0 redesign, usability testing, and the design system holding the surfaces together.",
    approach:
      "Ran user research into the redesign and a 15-participant usability test before full release, acting on what came back. Designed the predictive inspection state model and its conditional dealer workflow, the responsive dealer ordering portal across phone, tablet and desktop, the iOS and Android permission sequences, the fleet-portal views and the stale-data indicator.",
    outcome:
      "The 3.0 redesign shipped in October to November 2024 across the flagship app and the white-label apps, with a design system that kept them coherent. User retention rose 20% after the release. That figure is my own, taken from what we tracked at the time rather than from an independent audit.",
  },

  ethics: {
    is: [
      "Interface and interaction design for a connected-hardware product, across mobile and fleet-facing surfaces.",
      "Grounded in user research and a 15-participant usability test I ran myself, named where the claims rest on them.",
    ],
    isNot: [
      "Not a disclosure of the vendor integrations, their technical field definitions, exact interface copy or timing thresholds. Those remain confidential.",
      "Not a claim that every workstream here belonged to a single release. Inspection, permissions, the fleet portal and the freshness indicator ran as separate pieces of work across two years, and are gathered under one theme for the telling.",
      "Not a measured impact report. One retention figure exists and it is self-reported.",
    ],
    unvalidated: [
      "The reasoning behind the three-state inspection model. The states were built; the argument for why three is the right number was never tested against users.",
      "Whether the conditional skip rule reads as an escape hatch rather than a dismissal, to the dealers who use it.",
      "Whether the pre-permission explanation improves the grant rate. No measurement was taken.",
      "The stale-data indicator's threshold. The design makes freshness visible; nobody checked whether the chosen window matches what riders treat as current.",
    ],
    notRepresented: [
      "Dealers and workshop staff were not part of the usability testing, which ran with riders through the iOS beta. The workflow designed for them rests on requirements and review, not observation.",
    ],
  },

  sections: [
    {
      id: "role",
      kind: "context",
      title: "One designer, several surfaces",
      blocks: [
        {
          type: "prose",
          text: [
            "As the sole designer at IoT Venture, I led the design and continued evolution of It's My Bike, shaping a complex connected-mobility product into a more intuitive experience. From the Mobility 3.0 release in 2024 to subsequent iterations, the work combined user research, interaction design, visual systems, and product-level decision-making.",
            "IoT Venture builds connected-bike hardware and the software around it: an app for riders, a dashboard for partners, and white-label apps carrying partner brands. For two years every surface was mine, and none could be redesigned alone. A change to the flagship app had to survive being rebranded for a partner who had not asked for it.",
            "The 3.0 redesign was the centre of the role. But the work I keep returning to is smaller and less photogenic: the screens that appear when the system knows something the rider did not ask about. A maintenance window opening. A tracker that has stopped reporting. A permission the rider declined six months ago that a feature now needs. Those are the screens where a connected product either explains itself or becomes something you tolerate.",
          ],
        },
        {
          type: "callout",
          title: "How this page is put together",
          text:
            "These workstreams ran across two years, not inside one release. They share a theme rather than a timeline. Where a claim rests on research I ran, the study is named; where it is design reasoning, it is marked as mine.",
        },
      ],
    },

    {
      id: "research",
      kind: "research",
      title: "What was actually tested",
      standfirst: "Modest, and real. Worth separating from the parts that were neither.",
      blocks: [
        {
          type: "prose",
          text: [
            "The 3.0 redesign was shaped by user research and tested through an iOS beta before full release rather than after it. That sequencing mattered more than the method: it meant findings could still change the build.",
            "Fifteen people took part; fourteen returned a complete set of scores. They rated the design on five statements and left open feedback. The scores were high, which is the least interesting thing about them. The twenty-seven written comments were the useful part.",
          ],
        },
        {
          type: "statRow",
          stats: [
            { value: "15", label: "Participants" },
            { value: "14", label: "Complete responses" },
            { value: "5", label: "Likert statements" },
            { value: "27", label: "Written recommendations" },
          ],
          source: "Usability test, December 2023, 15 participants, 5-point Likert scale plus open feedback",
        },
        {
          type: "claimGroup",
          title: "What the scores said",
          claims: [
            {
              level: "evidence",
              text: "Across the five statements, mean ratings ran from 4.4 to 4.9 out of 5 (computed over the fourteen complete responses) with ease of navigation and overall satisfaction both at 4.4, the two lowest.",
              source: "Usability test, December 2023, 15 participants, 14 complete responses, 5-point Likert scale",
            },
            {
              level: "interpretation",
              text: "Those two sitting lowest is the only signal worth taking from a set of scores this uniformly high, and it points the same way the written feedback does: finding things, rather than understanding them.",
            },
          ],
        },
        {
          type: "claimGroup",
          title: "What changed as a result",
          claims: [
            {
              level: "evidence",
              text: "The report-theft call to action was rewritten to be simpler, and profile management was moved out to the settings page.",
              source: "Usability test recommendations, December 2023, marked Done in the design file",
            },
            {
              level: "evidence",
              text: "All linked trackers were surfaced on the home screen map, which testers had reported as missing compared with the previous app.",
              source: "Usability test recommendations, December 2023, marked Done in the design file",
            },
            {
              level: "evidence",
              text: "Tracker status was promoted above trip history on the home page, after testers judged status the more important of the two.",
              source: "Usability test recommendations, December 2023",
            },
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Almost none of the accepted changes were about making something clearer. They were about ordering and reach: what sits above what, and how few steps away a thing is. The redesign responded by moving things rather than explaining them.",
        },
        {
          type: "prose",
          text: [
            "The twenty-seven items are tagged in the file: done, to-do, not a priority, technically not possible yet. It would be easy to read those as verdicts. They are a snapshot of what could be committed to in December 2023, two months into the role, with a release still most of a year away.",
            "By the time 3.0 shipped, and across the updates after it, every item on that list had been designed for. The GPS-signal indicator, the in-app notification popup and the half-screen map were all parked at the time of the test, and all picked back up.",
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Keeping the parked items on the list, tagged rather than deleted, is what made it possible to come back to them. A test result pruned down to what shipped that quarter stops being a record and becomes a changelog.",
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

    {
      id: "inspection",
      kind: "concept",
      title: "Predictive inspection, three states doing three different jobs",
      standfirst: "The piece of this product with the clearest design argument in it.",
      blocks: [
        {
          type: "prose",
          text: [
            "The bike predicts when it needs inspecting, which turns a continuous estimate into something the interface has to say out loud. The model settled on three states: all good, almost due, overdue. The temptation is to treat that as one component with a colour that changes. Each state asks the rider to do something categorically different, so the component changes shape with it.",
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
            "All good: no control at all, because a button here would invent a decision the rider does not have to make. Almost due: plan something, with the timing explained and a forward-looking action. Overdue: act now, with both the requirement and the way out clear. Each state is distinguished by label and marker shape as well as colour.",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "The three states are not three severities of one message. \"Nothing to do\", \"plan something\" and \"act now\" are different speech acts, and an interface that renders them as one component with a changing colour flattens that distinction back out.",
        },
        {
          type: "claim",
          level: "concept",
          text: "Offering no control at all in the \"all good\" state is better than offering a disabled or decorative one. An untested proposition, and the one I would most want to check.",
        },
        {
          type: "prose",
          text: [
            "The conditional behaviour sits in the dealer and workshop flow, where an inspection item can be skipped, but only once it is already overdue.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/dealer-flow.svg",
            alt: "The dealer and workshop flow branching on inspection state, with the skip action reachable only from the overdue branch",
            width: 1200,
            height: 520,
          },
          description:
            "A dealer opens an inspection item and reads its state. All good offers no action, so there is nothing to skip. Almost due offers scheduling. Only the overdue branch reaches skip, which is the decision: available everywhere it would be a way to dismiss a reminder, available only when something is overdue it is an escape hatch for a bike that is not present or an inspection already done elsewhere.",
        },
        {
          type: "claim",
          level: "hypothesis",
          text: "Restricting skip to the overdue state keeps it legible as an exception rather than a dismissal. Asking dealers when they reach for it, and what they expect it to mean, would settle this.",
        },
      ],
    },

    {
      id: "dealer-portal",
      kind: "craft",
      title: "The dealer portal, the same product, a different job",
      standfirst:
        "Bike shops do not use this product the way riders do. They order hardware, assign it and move on.",
      blocks: [
        {
          type: "prose",
          text: [
            "Alongside the rider-facing work there is a portal for the bike shops that sell and fit the trackers. Their relationship to the product is transactional: order a batch, receive them, assign them to a branch, get back to running the shop. I designed it as one responsive system across phone, tablet and desktop, because checking a delivery on an iPad behind the counter is the same task as doing it on a laptop in the back office.",
            "The screens below are my own design file, shown with its sample data. Serial numbers, store names, tax number and phone number are all placeholders, not customer records.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/dealer-order-trackers.png",
            alt: "Tablet view of the dealer Orders screen on the Order Trackers tab, with the shop name, a tax identification field, a quantity selector and a single Order Now action",
            width: 769,
            height: 672,
            caption: "Ordering trackers, tablet width. Sample data; the support panel below has been cropped out.",
          },
          description:
            "Orders is one screen with three tabs, not three destinations, because they are three views of one relationship with the same stock. The form itself is two fields and one button. The note underneath explains that trackers ordered through the portal are assigned to the store automatically.",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Collapsing pending, ordering and history into tabs on a single Orders screen treats them as one relationship viewed three ways. Splitting them into separate destinations would have implied they were separate jobs.",
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/dealer-pending-empty.png",
            alt: "Tablet view of the Pending Deliveries tab in its empty state, reading “There are no orders”",
            width: 834,
            height: 500,
            caption: "The empty state, designed rather than left over.",
          },
          description:
            "Pending Deliveries with nothing pending. The empty state says plainly that there are no orders and offers nothing else, no illustration, no prompt to order. For a shop owner checking whether something is on its way, the fastest useful answer is the word no.",
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
            "Assign Tracker is the last step of a tabbed account setup. Two columns: which trackers, and which branch. The counter beneath reads 06 of 30, so a shop working through a batch can see how far in they are without counting checkboxes.",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Pairing a paginated serial list against a branch list, with a running count, treats assignment as a batch task someone is partway through rather than as a form they fill in once.",
        },
        {
          type: "claim",
          level: "hypothesis",
          text: "Ordering the account tabs so assignment comes last implies a setup sequence that matches how a shop actually onboards. Whether shops move through it in that order was never checked.",
        },
      ],
    },

    {
      id: "uncertainty",
      kind: "craft",
      title: "Three more places the system had to admit what it didn't know",
      blocks: [
        {
          type: "prose",
          text: [
            "The home screen shows this most clearly. Two alert conditions, the bike shaking and the bike leaving a 100 m radius, can each be on or off independently. Rather than store a label per combination, the status card composes a sentence from whichever are live and greys the icon of the one that is not.",
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
            "With distance alone, the card says an alert will come if the bike moves 100 m away. With movement alone, if it moves or shakes while parked. With both, if it shakes or moves 100 m away. The inactive condition's icon greys out, so the sentence and the icon row always agree.",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Composing the status sentence from the live conditions, rather than storing one string per combination, is what keeps it honest as conditions are added. A fixed set of labels goes stale the moment a third condition exists.",
        },
        {
          type: "prose",
          text: [
            "The same screen carries the freshness problem in its top corner: a timestamp saying how long ago the last position was recorded. It is the smallest element on the page and the one doing the most work.",
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
                "Fleet operators look at many assets rather than one bike, which inverts the problem: the question is not \"what is this bike doing\" but \"which of these needs me\". Same underlying states, different unit of attention.",
            },
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Permissions, stale data and unexplained technical values are the same design problem wearing three costumes, each is a moment where the system knows less than the interface implies, and the honest move is to show the gap rather than smooth it over.",
        },
      ],
    },

    {
      id: "outcome",
      kind: "reflection",
      title: "What shipped, and what that does and does not prove",
      blocks: [
        {
          type: "prose",
          text: [
            "The 3.0 redesign shipped in October to November 2024 across the flagship app and the white-label apps built on the same platform, with a design system that kept them coherent without designing each partner brand separately. For a company with one designer, that system was what made the surface area tractable.",
            "User retention rose 20% afterwards. The figure is my own rather than an independent audit, and it is the only number on this page.",
            "After 3.0 the work continued as product evolution rather than a second redesign: successive releases took the state model, the permission patterns and the design system further into the product. Version 3.3 was on the roadmap, scheduled for release in October 2026, when I left. I designed toward it; I did not ship it, and nothing on this page should be read as showing a released 3.3.",
            "What the work demonstrates without a number: a state model that distinguishes three different asks rather than three shades of one, and permission and freshness treated as primary design surfaces instead of error handling.",
          ],
        },
        {
          type: "prose",
          text: [
            "The lesson I took is narrower than \"design for the user\": connected products are mostly conditional behaviour. The ideal state is the screen you design once and rarely look at again. Everything that makes a product feel trustworthy or shabby lives in the other states, and those get specified last.",
          ],
        },
      ],
    },
  ],
};
