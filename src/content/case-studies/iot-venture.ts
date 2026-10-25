import type { CaseStudy } from "../types";

/**
 * IoT Venture GmbH — the full case study.
 *
 * History: this file previously stopped at an NDA boundary and published
 * nothing beyond the résumé. Efemena confirmed on 2026-10-24 that the
 * product-level material is cleared for public disclosure. The slug is
 * unchanged so the existing URL keeps working.
 *
 * WHAT IS DELIBERATELY WITHHELD, and must stay withheld unless she says
 * otherwise — the source pack flags each of these as needing permission:
 *   · The vendor/OEM integration names (the drive-system and tracker
 *     manufacturers). Named nowhere on this page.
 *   · CAN field names, units and value semantics. Described only as
 *     "vendor-specific technical values", never enumerated.
 *   · Exact rider-app copy, timing thresholds and stale-data trigger rules.
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
    "A connected bike reports states a rider never asked about — a maintenance window opening, a tracker that stopped reporting, a permission that was declined — and each one has to be legible enough to act on without the rider learning the system.",
  boundary:
    "Employer work. Product behaviour, design reasoning and the dealer-portal screens are published with permission, with sample data throughout; the drive-system and tracker vendor integrations, their technical field definitions, a partner's support details, exact rider-app copy and timing thresholds are not reproduced here.",
  shortRole: "Sole UI/UX designer",
  projectType: "Full-time, in-house role · Oct 2023 – Aug 2025",
  headline:
    "Led the 3.0 redesign across the flagship app and the white-label partner apps it had to stay compatible with, and shaped the state model behind predictive inspection. A self-reported 20% increase in user retention followed; the figure is hers and unaudited.",
  summary:
    "As the company's only designer, owned UX and UI across a connected-bike product — the flagship app, a partner dashboard and white-label partner apps. The through-line is conditional behaviour: inspection states, permission outcomes and stale device data are all cases where the interface has to be honest about what it does and does not know.",
  featured: true,
  order: 7,
  status: "complete",
  year: "2023–2025",
  timeline: "Oct 2023 – Aug 2025 · Darmstadt, Germany",
  context: "Full-time, in-house role",
  roles: ["Sole UI/UX Designer"],
  tools: [],
  disciplines: ["ux-research", "product-design", "interaction-design", "design-systems"],
  cover: { alt: "A phone and a connected-device panel, joined by a single line", accent: "blue" },

  atAGlance: {
    problem:
      "A connected-bike product spanning a consumer app, a partner dashboard and several white-label apps, where the hardest screens were the ones reporting a state the rider had not asked about — maintenance due, data gone stale, permission declined.",
    role: "Sole designer. Owned all UX and UI: research, the 3.0 redesign, usability testing, and the design system holding the surfaces together.",
    approach:
      "Ran user research into the redesign and usability tests through an iOS beta before full release, iterating on what came back. Designed the predictive inspection state model and its conditional dealer workflow, the responsive dealer ordering portal across phone, tablet and desktop, the iOS and Android permission sequences, the fleet-portal views and the stale-data indicator.",
    outcome:
      "The 3.0 redesign shipped across the flagship app and the white-label apps, with a design system that kept them coherent. A 20% increase in user retention followed — her own figure, unaudited, and reported here as such.",
  },

  ethics: {
    is: [
      "Interface and interaction design for a connected-hardware product, across mobile and fleet-facing surfaces.",
      "Grounded in user research and usability testing she ran herself, named where the claims rest on them.",
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
            "IoT Venture builds connected-bike hardware and the software around it: a consumer app for riders, a dashboard for partners, and white-label apps carrying partner brands on the same platform. For two years I was the only designer in the company, which meant every one of those surfaces was mine and none of them could be redesigned in isolation — a change to the flagship app had to survive being rebranded for a partner who had not asked for it.",
            "The 3.0 redesign was the centre of the role. But the work I keep returning to is smaller and less photogenic: the screens that appear when the system knows something the rider did not ask about. A maintenance window opening. A tracker that has stopped reporting. A permission the rider declined six months ago that a feature now needs. Those are the screens where a connected product either explains itself or becomes something you tolerate.",
          ],
        },
        {
          type: "callout",
          title: "How this page is put together",
          text:
            "These workstreams ran across two years, not inside one release, and I have not pretended otherwise by arranging them as a single project. They share a theme rather than a timeline. Where a claim rests on research I ran, the study is named; where it is design reasoning, it is marked as mine rather than as a finding.",
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
            "The 3.0 redesign was shaped by user research, and tested through an iOS beta before full release rather than after it. That sequencing mattered more than the method: it meant the findings could still change the build.",
          ],
        },
        {
          type: "claimGroup",
          title: "From the beta",
          claims: [
            {
              level: "evidence",
              text: "Testers could not reliably find features under the existing menu order, which was reworked before rollout rather than after.",
              source: "Usability testing via the iOS beta, ahead of the 3.0 release",
            },
            {
              level: "evidence",
              text: "Report generation was too involved for the frequency with which people actually did it, and was simplified before release.",
              source: "Usability testing via the iOS beta, ahead of the 3.0 release",
            },
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Both findings were navigation and effort problems rather than comprehension problems — people understood what the app was offering and could not get to it economically. That pushed the redesign toward reducing steps rather than adding explanation.",
        },
        {
          type: "callout",
          title: "Where the testing stopped",
          tone: "caution",
          text:
            "The beta ran with riders. The dealer and workshop workflow below was never put in front of a dealer, and the inspection state model was never tested as a model. Both were built from product requirements, platform constraints and design review. I would rather say that than let research on one part of the product borrow credibility for the rest.",
        },
      ],
    },

    {
      id: "inspection",
      kind: "concept",
      title: "Predictive inspection — three states doing three different jobs",
      standfirst: "The piece of this product with the clearest design argument in it.",
      blocks: [
        {
          type: "prose",
          text: [
            "The bike predicts when it needs inspecting, which turns a continuous estimate into something the interface has to say out loud. The model settled on three states: all good, almost due, overdue. The temptation with a scale like that is to treat it as one component with a colour that changes. It is not. Each state is asking the rider to do something categorically different, and the component has to change shape with it.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/iot-venture/inspection-states.svg",
            alt: "The three inspection states side by side — All good with no action, Almost due with a scheduling action, Overdue with the required workflow and the skip option",
            width: 1200,
            height: 560,
          },
          description:
            "All good: nothing to do, so no control is offered — a button here would invent a decision the rider does not have to make. Almost due: plan something, with the timing explained so that \"soon\" carries information, and a forward-looking action that is not the same as the overdue one. Overdue: act now, with both the requirement and the way out made clear. Each state is distinguished by label and marker shape as well as colour.",
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
            "The conditional behaviour sits in the dealer and workshop flow, where an inspection item can be skipped — but only once it is already overdue.",
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
            "A dealer opens an inspection item and reads its state. All good offers no action, so there is nothing to skip. Almost due offers scheduling, but not skipping. Only the overdue branch reaches the skip action. The asymmetry is the decision: skip available everywhere would be a way to dismiss a reminder, whereas skip available only once something is overdue makes it an escape hatch for a case the workflow cannot otherwise clear — a bike that is not present, or an inspection already done elsewhere.",
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
      title: "The dealer portal — the same product, a different job",
      standfirst:
        "Bike shops do not use this product the way riders do. They order hardware, assign it and move on.",
      blocks: [
        {
          type: "prose",
          text: [
            "Alongside the rider-facing work there is a portal for the bike shops that sell and fit the trackers. Their relationship to the product is transactional rather than ongoing: order a batch of trackers, receive them, assign them to the right branch, get back to running the shop. Designed as one responsive system across phone, tablet and desktop rather than as a separate web product, because a shop owner checking a delivery on an iPad behind the counter and doing the same thing on a laptop in the back office is the same person doing the same task.",
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
            "Orders is one screen with three tabs — Pending Deliveries, Order Trackers, Order History — rather than three destinations, because they are three views of one relationship with the same stock. The ordering form itself is two fields and one button. The note underneath explains that trackers ordered through the portal are assigned to the store automatically, which is the sentence that tells a shop owner they do not have to key in access codes.",
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
            "Pending Deliveries with nothing pending. The empty state says plainly that there are no orders and offers nothing else — no illustration, no prompt to order. For a shop owner checking whether something is on its way, the fastest useful answer is the word no.",
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
            "Assign Tracker sits as the last step of a tabbed account setup — personal data, company data, branch data, packaging units, then assignment. Two columns: which trackers, and which branch. The counter beneath the list reads 06 of 30, so a shop working through a batch can see how far in they are without counting checkboxes.",
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
          type: "steps",
          steps: [
            {
              title: "Permissions, across two platforms",
              text:
                "iOS and Android ask differently, and a rider gets one good chance at each prompt. The sequences explain what the permission buys before the operating system asks, and treat a decline as a state the product continues from rather than a dead end. Designing the declined path properly is most of the work — the granted path is the easy one.",
            },
            {
              title: "Stale tracker data",
              text:
                "A last-movement time is the most dangerous number in a tracking product, because an old reading looks exactly like a current one. The indicator makes freshness visible, so \"the bike has not moved\" and \"we have not heard from the bike\" stop looking alike. The exact trigger and threshold are not published here.",
            },
            {
              title: "Vendor-specific technical values",
              text:
                "The product surfaces technical values from several drive-system and tracker integrations, which mean little as bare numbers. The design work was giving them a hierarchy — the value, what it means, and whether anyone needs to do something — rather than letting the reader infer it. The integrations and their field definitions are confidential and are not described here.",
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
          text: "Permissions, stale data and unexplained technical values are the same design problem wearing three costumes — each is a moment where the system knows less than the interface implies, and the honest move is to show the gap rather than smooth it over.",
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
            "The 3.0 redesign shipped across the flagship app and the white-label apps built on the same platform, with a design system — colour, type, components — that kept them coherent without requiring each partner brand to be designed separately. For a company with one designer, that system was the only thing making the surface area tractable.",
            "A 20% increase in user retention followed. That figure is mine and unaudited: I have not attached a measurement window, a baseline or an analytics source to it on this page, because I would be reconstructing those after the fact. It is reported here the way it appears on my résumé, as my own account rather than as a verified result.",
            "What the work does demonstrate without needing a number: a state model that distinguishes three different asks rather than three shades of one, a conditional rule designed so its exception stays legible, and permission and freshness behaviour treated as primary design surfaces instead of error handling. Those stand or fall on the reasoning, which is on this page to be argued with.",
          ],
        },
        {
          type: "prose",
          text: [
            "The lesson I took, and it is narrower than \"design for the user\": connected products are mostly conditional behaviour. The ideal state — bike fine, data fresh, permissions granted — is the screen you design once and rarely look at again. Everything that makes the product feel trustworthy or shabby lives in the other states, and those are the ones that get specified last, by whoever is left.",
          ],
        },
      ],
    },
  ],
};
