import type { CaseStudy } from "../types";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CAPSTONE — Master's in Interaction Design
 *
 *  Written from the project's framing and strategy work. Research findings
 *  are NOT invented: where fieldwork data belongs, there is a `todo` block
 *  naming exactly what to drop in. Everything currently on the page is
 *  either framing (which is true), a hypothesis (which is labelled), or an
 *  unvalidated concept (which is labelled).
 *
 *  When you add real findings, they become `evidence` claims and each one
 *  needs a `source`. Nothing else about the page has to change.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const holdingPattern: CaseStudy = {
  slug: "holding-pattern",
  visibility: "published",
  title: "Emotional Continuity During Military Deployment",
  premise:
    "Design research into how military families keep a shared life intact across a deployment — from the side that stays.",
  problemArea: "Military family separation · emotional continuity",
  humanProblem:
    "Exploring how the civilian partner at home carries uncertainty, invisible responsibility and emotional distance when everyday communication is constrained.",
  boundary: "Research-led capstone · Not therapy, monitoring or another messaging channel",
  shortRole: "Sole researcher & designer",
  projectType: "Master's capstone · design research",
  headline: "Fieldwork in progress. The reframe — away from communication volume, toward what is withheld and how silence is read — is the finding so far.",
  summary:
    "A Master's capstone on emotional continuity during military separation, centred on the civilian partner holding the home front together. The work reframes the problem away from 'communicate more' and toward what gets shared, what gets withheld, and how silence is read.",
  featured: true,
  order: 1,
  status: "research-in-progress",
  year: "2026",
  timeline: "Ongoing",
  context: "Master's capstone · Interaction Design",
  roles: ["Design researcher", "Interaction designer", "Strategy"],
  tools: ["FigJam", "Figma", "Interview protocols", "Thematic analysis"],
  disciplines: ["ux-research", "service-design", "interaction-design"],
  cover: {
    alt: "Two points of light connected by a thread that thins in the middle",
    accent: "blue",
  },

  atAGlance: {
    problem:
      "During a deployment, a couple's shared emotional life has to survive on thin, irregular, often mistimed contact. The partner at home carries the household and the worry, and frequently manages the tone of the conversation as well.",
    role: "Sole researcher and designer. Framing, strategy, fieldwork design, synthesis and concept work.",
    approach:
      "Reframed the problem away from communication volume; built a strategy cascade across three lenses; running qualitative fieldwork with the civilian partner as the primary participant.",
    outcome:
      "A defensible problem frame and a set of design propositions that are explicitly untested. This case study reports the reasoning, not a finished product.",
  },

  ethics: {
    is: [
      "Design research into how meaning is carried, withheld and misread across a long separation.",
      "Centred on the civilian partner at home, who is usually treated as secondary in this problem space.",
      "An exploration of what a system should notice — not of what it should measure.",
      "Honest about being incomplete: this is live work, and it is presented as live work.",
    ],
    isNot: [
      "Not therapy, counselling, or any form of clinical or psychological support.",
      "Not diagnosis, screening, or assessment of anyone's mental state.",
      "Not monitoring, check-in enforcement, or any mechanism by which one partner can observe the other's activity.",
      "Not location tracking or presence sharing, in any form.",
      "Not another messaging or video-calling product. Those exist and work.",
      "Not an argument that couples should communicate more. Volume was never the finding.",
    ],
    unvalidated: [
      "Every design proposition in the Concept section. None has been tested with a participant.",
      "The claim that asynchronous, low-pressure expression reduces the cost of an unanswered message.",
      "The claim that surfacing the shape of contact — rather than its content — is useful rather than anxiety-producing.",
      "Whether anything designed here would be wanted at all during the hardest weeks of a deployment.",
    ],
    notRepresented: [
      "Fieldwork is in progress; sampling limits will be stated here honestly once recruitment closes.",
      "Participants are self-selecting, which will over-represent people willing to talk about a separation while inside it.",
      "Deployment experience varies enormously by service branch, role, length and family structure. No small qualitative study generalises across that.",
    ],
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "The side that stays",
      standfirst:
        "Most products aimed at military families are built for the person who leaves. This project starts from the person who does not.",
      blocks: [
        {
          type: "prose",
          text: [
            "A deployment is usually described in terms of the service member: where they are, how long they will be gone, when they can call. The civilian partner appears in that description as the recipient of the call. In practice they are running a household, absorbing every logistical failure that happens while the other person is unreachable, holding the emotional weather for any children involved, and — this is the part that interested me — often managing the tone of the limited contact they do get, so that the person far from home does not have to carry worry they cannot act on.",
            "That last behaviour is the seed of this project. It means the contact that does happen is frequently edited. Both people are being careful. Both people know the other is being careful. And the thing that erodes over months is not the frequency of contact but the confidence that what you are hearing is the whole of it.",
          ],
        },
        {
          type: "callout",
          title: "The reframe",
          text: "This project is not about communicating more. It is about what gets shared, what gets withheld, and how a delay or a short reply is interpreted by the person waiting.",
        },
        {
          type: "prose",
          text: [
            "That reframe is the most consequential decision in the work so far, because it rules out the obvious product. If the problem were volume, the answer would be a better messaging app, and there are already good ones. If the problem is interpretation under conditions of scarcity and asymmetry, the answer is somewhere else entirely — and possibly is not an app at all.",
          ],
        },
      ],
    },

    {
      id: "framing",
      kind: "synthesis",
      title: "Framing before fieldwork",
      standfirst:
        "I used a strategy cascade to force the scope question early, at three different altitudes.",
      blocks: [
        {
          type: "prose",
          text: [
            "Before recruiting anyone, I worked the problem through a Playing to Win choice cascade — winning aspiration, where to play, how to win, capabilities, management systems — and then ran the same cascade at three different scales. Doing it three times was the point: the same problem gives very different answers depending on who is imagined to be solving it.",
          ],
        },
        {
          type: "steps",
          title: "Three lenses on the same problem",
          steps: [
            {
              title: "Individual — this project",
              text: "What one designer with a capstone timeline and no institutional access can meaningfully learn and propose. Narrow, deep, honest about scope.",
            },
            {
              title: "Ecosystem — a large platform",
              text: "What an organisation already embedded in a family's digital life could do about military-family separation, and what it would be irresponsible for such an organisation to touch.",
            },
            {
              title: "Venture — a startup",
              text: "One repeated, high-impact situation worth building a company around. Candidates under consideration: the first extended training separation, the first PCS move, chronically inconsistent deployment communications, post-relocation adjustment, and reintegration.",
            },
          ],
        },
        {
          type: "claim",
          level: "hypothesis",
          text: "The venture lens is the sharpest test of the framing, because it forces a single repeated moment rather than a diffuse condition. The specific situation is not yet chosen, and choosing it prematurely would bias the fieldwork.",
        },
        {
          type: "callout",
          tone: "caution",
          title: "A guardrail I set for myself at the start",
          text: "The outcome does not have to be an app. It does not have to be a therapy tool, and it must not become a military communication platform. If the honest answer is a service, a ritual, a piece of policy or nothing at all, that is an acceptable result.",
        },
      ],
    },

    {
      id: "research",
      kind: "research",
      title: "Fieldwork",
      standfirst:
        "Qualitative, with the civilian partner as the primary participant and the deployed service member as secondary.",
      blocks: [
        {
          type: "prose",
          text: [
            "The study is designed around long-form semi-structured interviews rather than surveys. The questions people can answer honestly here are not the ones that fit on a five-point scale — the useful material is in the anecdote, the pause, and the thing said just after 'well, it's fine, but'.",
          ],
        },
        {
          type: "list",
          title: "What the protocol is built to surface",
          items: [
            "Uncertainty: living against a schedule that can change without notice and cannot be argued with.",
            "Unequal responsibility: the practical and emotional load that does not pause because one person is away.",
            "Loneliness that coexists with being surrounded by people, including children.",
            "Emotional withholding: what each person decides not to say, and why they decide it.",
            "Inconsistent communication: what a missed window, a short reply or a long silence is taken to mean.",
          ],
        },
        {
          type: "claimGroup",
          title: "What I expect to find, written down in advance so it can be wrong",
          claims: [
            {
              level: "hypothesis",
              text: "Partners at home systematically edit distressing information out of contact in order to protect the deployed partner's ability to function, and pay a cost for doing so that neither person fully sees.",
            },
            {
              level: "hypothesis",
              text: "The interpretation of a silence is more destabilising than the silence itself, and that interpretation gets worse the longer a couple has been separated.",
            },
            {
              level: "hypothesis",
              text: "Scheduled contact reduces logistical friction but can raise emotional stakes: a window that has to carry everything becomes a window you can fail.",
            },
            {
              level: "hypothesis",
              text: "Existing tools optimise for synchronous presence, which is precisely the resource these families have least of.",
            },
          ],
        },
        {
          type: "callout",
          title: "How participants are handled",
          text: "No participant is identifiable. Quotes are attributed by role and separation stage only — never by name, unit, base, location or dates. Anything that could identify a service member's posting is removed at transcription, not at publication.",
        },
      ],
    },

    {
      id: "concept",
      kind: "concept",
      title: "Design propositions",
      standfirst:
        "Everything in this section is unvalidated. It is here because writing a proposition down is how you find out it is wrong.",
      blocks: [
        {
          type: "prose",
          text: [
            "These are directions rather than features. Each one is an attempt to act on the reframe — to change what a system notices, rather than to move more messages through it.",
          ],
        },
        {
          type: "claimGroup",
          claims: [
            {
              level: "concept",
              text: "Asynchronous expression with no expectation of reply: a way to leave something for the other person that does not create a debt when it goes unanswered for six days.",
            },
            {
              level: "concept",
              text: "Shape without content: making the rhythm of contact visible to both people — that it has been irregular, that a window was missed — without exposing what was said, and without either partner being able to use it to check up on the other.",
            },
            {
              level: "concept",
              text: "Room for the unsaid: a private space to record what you decided not to send, so the editing itself stops being invisible labour.",
            },
            {
              level: "concept",
              text: "Continuity objects: shared artefacts that accumulate across a deployment and are worth returning to at reintegration, which is a distinct and under-designed moment.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          title: "The proposition I am most suspicious of",
          text: "Making the rhythm of contact visible is one step away from surveillance, and the step is short. If testing shows it produces monitoring behaviour or anxiety rather than reassurance, it should be abandoned rather than softened. I would rather record that here now than defend it later.",
        },
      ],
    },

    {
      id: "reflection",
      kind: "reflection",
      title: "What this work is teaching me",
      blocks: [
        {
          type: "prose",
          text: [
            "The strongest move so far has been a refusal. Deciding that the outcome does not have to be an app removed the pressure to arrive at a screen, and made it possible to sit with the framing long enough for it to change. The reframe from 'communicate more' to 'what is withheld and how silence is read' would not have survived a sprint that needed a prototype by Friday.",
            "The hardest part is proportion. This is a subject where a designer can very easily produce something that sounds moving and does nothing, or worse, something that would add a new obligation to people who already have too many. Labelling every claim by what it can actually carry is how I keep myself honest about which of those I am doing.",
          ],
        },
      ],
    },
  ],
};
