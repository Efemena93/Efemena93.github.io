import type { CaseStudy } from "../types";

/**
 * HearEase — adaptive accent speech-to-text smart glasses and companion app.
 *
 * Source: Efemena's own Figma file (ms3wbQDlomDxVjdF9j9l7x), read 2026-10-25,
 * plus her confirmation the same day of what she personally worked on.
 *
 * TEAM PROJECT — the single most important thing to get right here. This was
 * built by three people: Efemena Udezi, Kristy Yin and Miti Shah, as "Team
 * Golden Griffins" in autumn 2024, with Michael R Gibson as the
 * course lead. The file's Roles slide lists four roles — User Researcher, User
 * Experience Designer, Visual Designer, Interaction Designer — for the TEAM as
 * a set, not split per person. Efemena confirmed she worked across all four.
 * That is written here as her working across all four on a three-person team,
 * never as sole authorship, and the first person plural is used for anything
 * the team did together. Do not change "we" to "I" in this file.
 *
 * NOT USED, deliberately:
 *   · The "Galileo design" frames. They are branded "Voxer", not HearEase, and
 *     appear to be generated explorations or reference material rather than
 *     her team's design. Publishing them as HearEase screens would be wrong.
 *   · Any frame still carrying lorem ipsum.
 *   · The trailing paragraph on the usability notes beginning "The document
 *     appears to be a collection of user testing notes" — that reads as a
 *     tool-generated summary of the notes, not as the team's own finding.
 *
 * Figures are composed in the site's palette from her final-presentation
 * screens (node 2004:9271), not screenshots of the deck slides.
 *
 * The usability ratings are reproduced exactly as the file records them.
 * Note the direction of each scale: ease is better high, confusion is better
 * low. Task 1 scored badly on both (one ease rating of 2/5, confusion 4.4/5);
 * Task 2 scored better (ease 3/5 and 4-5/5, confusion 1.4-3.3/5). The file
 * does not state how many people took part, so no participant count appears
 * anywhere on this page.
 */

export const hearEase: CaseStudy = {
  slug: "hearease",
  visibility: "published",
  title: "HearEase",
  premise:
    "Smart glasses that transcribe speech in real time and adapt to accents, for people who are hard of hearing.",
  problemArea: "Assistive technology · wearable + companion app",
  humanProblem:
    "In a fast meeting full of unfamiliar accents, someone who is hard of hearing loses the thread, and loses the chance to contribute before they can ask anyone to repeat themselves.",
  boundary:
    "A university team project, designed and tested but never engineered. Nothing here was manufactured, and no claim is made that the transcription or accent adaptation works; that was the premise of the design, not a result of it.",
  shortRole: "One of three designers",
  projectType: "Graduate team project · Autumn 2024",
  headline:
    "Usability testing found the calibration step was the problem (rated 4.4 out of 5 for confusion, against 1.4 at the best elsewhere), and the setup flow was rebuilt around it.",
  summary:
    "A three-person graduate project on assistive wearables: smart glasses that transcribe conversation in real time and adapt to accents, with a companion app for setup, noise control and saved transcripts. The work ran from user and expert interviews through to a tested high-fidelity prototype.",
  featured: true,
  card: {
    description:
      "Exploring more inclusive conversations through adaptive speech-to-text glasses and a companion experience designed around communication needs.",
    category: "Accessibility / UX Research / Interaction Design / Concept",
  },
  order: 4,
  status: "prototype",
  year: "2024",
  timeline: "Autumn 2024 · University of North Texas",
  context: "Graduate team project",
  team: "Efemena Udezi, Kristy Yin and Miti Shah (Team Golden Griffins). Course lead: Michael R Gibson.",
  roles: ["User Researcher", "UX Designer", "Interaction Designer", "Visual Designer"],
  tools: ["Figma", "UsabilityHub"],
  disciplines: ["ux-research", "product-design", "interaction-design"],
  cover: {
    alt: "A pair of glasses with a line of transcribed text resolving across the lens",
    accent: "blue",
  },

  atAGlance: {
    problem:
      "People who are hard of hearing lose conversation in noisy, fast, multi-accent settings, and existing captioning assumes one speaker, a quiet room and a familiar accent.",
    role: "One of three designers on the team. I worked across all four of the roles we shared: user research, UX, interaction design and visual design.",
    approach:
      "User observations, user interviews and expert interviews; a persona and storyboard; information architecture and low-fidelity flows; a high-fidelity prototype; then usability testing, and a second round on the revised design.",
    outcome:
      "Testing located the failure precisely (setup and calibration, not the conversation features), and the flow was rebuilt around that. The product was never engineered, so nothing is claimed about whether the transcription itself would work.",
  },

  ethics: {
    is: [
      "A design project about communication access, grounded in interviews with hard-of-hearing people and with experts.",
      "A three-person team project. Everything described as \"we\" was done together.",
    ],
    isNot: [
      "Not a medical or hearing-care device, and not a substitute for one.",
      "Not an engineering claim. No glasses were built; whether real-time accent-adaptive transcription performs as the concept assumes is untested and outside what design can answer.",
      "Not a solo project, and not a claim to have run the research alone.",
    ],
    unvalidated: [
      "The core premise: that accent-adaptive transcription is accurate enough to follow a live meeting. The design assumes it.",
      "Whether the revised calibration flow actually fixed the problem. A second testing round was run on the revised design; the file does not record its results, so no improvement is claimed here.",
      "Everything about wearing the glasses. All testing was on the app; the AR display and the physical product were never tested on a face.",
    ],
    notRepresented: [
      "Deaf people who do not use speech: the project is framed around hard-of-hearing people in hearing workplaces, which is a narrower group than it may appear.",
      "The file does not record how many people took part in usability testing, so no participant count is given.",
    ],
  },

  sections: [
    /* ── TOP: the answer ────────────────────────────────────────────────
       Minto ordering, but deliberately NOT the double diamond: Efemena asked
       for that framing on her product work and not on this one, which ran as
       a taught graduate sequence rather than as her own process.
       First person plural throughout — see the note at the top of this file. */
    {
      id: "outcome",
      kind: "synthesis",
      title: "What the testing changed",
      standfirst:
        "The conversation features held up. The setup ritual in front of them did not, and that is what we rebuilt.",
      blocks: [
        {
          type: "prose",
          text: [
            "HearEase is a pair of smart glasses that transcribes speech in real time, adapts to different accents, and lets the wearer isolate background noise by how much they choose, with a companion app for setup, environment and saved transcripts.",
            "Usability testing rated signing up and navigating at 4.4 out of 5 for confusion, against 1.4 at the best elsewhere, and located the failure precisely: the calibration page, around naming and renaming. We rebuilt the setup flow around that finding rather than around the part we had found most interesting.",
          ],
        },
        {
          type: "callout",
          title: "A three-person team, and a concept",
          text:
            "Built with Kristy Yin and Miti Shah for a graduate course. We shared four roles between us (user research, UX, interaction and visual design) and I worked across all four. Where this page says \"we\", it means the three of us. Nothing was manufactured: no claim is made that the transcription or accent adaptation works, which was the premise of the design rather than a result of it.",
        },
      ],
    },

    /* ── MIDDLE: the arguments ─────────────────────────────────────────── */
    {
      id: "decisions",
      kind: "synthesis",
      title: "Three things that drove it",
      blocks: [
        {
          type: "claimGroup",
          claims: [
            {
              level: "interpretation",
              text:
                "The problem is speed, not volume. Missing a word is recoverable; missing the thread of an argument is not. That reframed the product from amplification towards keeping up, and it is why the hard case is a fast multi-accent meeting rather than a quiet room.",
            },
            {
              level: "interpretation",
              text:
                "Put the limit next to the ask. A product worn on the face, holding a microphone, a camera and location, has to say what happens to the data in the sentence that requests it, not behind a policy link.",
            },
            {
              level: "interpretation",
              text:
                "The front door carries the product. We spent our attention on the conversation experience because it was the interesting part; testing said that was broadly fine and the unglamorous setup was where people struggled.",
            },
          ],
        },
      ],
    },

    /* ── BOTTOM: the evidence ──────────────────────────────────────────── */
    {
      id: "research",
      kind: "research",
      title: "What we found before designing",
      standfirst: "Observations, interviews with hard-of-hearing people, and interviews with experts.",
      blocks: [
        {
          type: "prose",
          text: [
            "The expert strand mattered more than expected: people who work with hard-of-hearing clients could tell us which problems were common and which were particular to the person describing them.",
          ],
        },
        {
          type: "claim",
          level: "evidence",
          text: "Four participants took part in the interviewing process.",
          source: "Project record, HearEase user interviews, autumn 2024",
        },
        {
          type: "prose",
          text: [
            "The persona we worked from, Emma, is a composite: someone hard of hearing who works in an office, struggles with colleagues' accents in meetings, and loses points in fast discussion. We storyboarded her six panels from problem to outcome, a modest artefact that did one specific job, it kept the team arguing about the meeting rather than about the glasses.",
          ],
        },
      ],
    },

    {
      id: "testing",
      kind: "research",
      title: "Where it broke",
      blocks: [
        {
          type: "prose",
          text: [
            "We tested two task flows, signing up and navigating the home screen, then starting a conversation. The results split cleanly, and not where we expected.",
          ],
        },
        {
          type: "comparison",
          title: "The two tasks, as rated",
          columns: ["Task 1 (sign up and navigate", "Task 2) start a conversation"],
          rows: [
            ["Ease rated 2 out of 5 by one participant, with another reporting difficulty navigating", "Ease rated 3 out of 5 by one participant and 4 to 5 out of 5 by another"],
            ["Confusion reported at 4.4 out of 5", "Confusion ranged from 1.4 to 3.3 out of 5"],
            ["A notable error on the calibration page, around naming and renaming", "Back-button problems, spacing between steps, and a second step described as particularly confusing"],
          ],
        },
        {
          type: "claimGroup",
          claims: [
            {
              level: "evidence",
              text: "Multiple participants reported problems with the calibration page, and the notable error of the session occurred there, around naming and renaming.",
              source: "HearEase usability testing, autumn 2024",
            },
            {
              level: "evidence",
              text: "Participants rated page navigation generally acceptable, found the task flows properly ordered, and found the calls to action comprehensible.",
              source: "HearEase usability testing, autumn 2024",
            },
            {
              level: "interpretation",
              text:
                "Calibration is the step a team treats as plumbing and a user experiences as the moment they find out whether this thing is going to work for them.",
            },
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/hearease/connect-flow.png",
            alt: "Three stages of connecting the glasses, both steps readable but inactive, step one highlighted with step two dimmed, then a connecting state",
            width: 1010,
            height: 815,
            caption:
              "The rebuilt setup. Both steps stay legible so the length of the process is never hidden, but only the current one is live, and the physical action is described in words rather than assumed.",
          },
        },
        {
          type: "claim",
          level: "hypothesis",
          text:
            "Showing both steps while activating only one tells a user how long this will take without letting them get ahead of it. A second testing round ran on the revised design; its results are not in the project file, so whether this worked is not something I can claim.",
        },
      ],
    },

    {
      id: "permissions",
      kind: "craft",
      title: "Asking for a microphone, honestly",
      standfirst: "A product that listens all day has to explain itself before it starts.",
      blocks: [
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/hearease/permissions.png",
            alt: "The HearEase permissions screen with three toggles (microphone, location and camera) each followed by a sentence explaining its purpose and what happens to the data",
            width: 922,
            height: 876,
            caption:
              "Three toggles, all off by default, each carrying its reason and its limit. Audio is processed locally and not stored. Location is not stored or shared. The camera detects speakers and does not capture images.",
          },
        },
        {
          type: "claim",
          level: "interpretation",
          text:
            "A user of this product is choosing between handing over a microphone, a camera and their location, and going back to missing half of their meetings. That is not a free choice, and it makes the usual permission conventions (vague purposes, a policy link, defaults already on) worse here than elsewhere.",
        },
      ],
    },

    {
      id: "reflection",
      kind: "reflection",
      title: "What I took from it",
      blocks: [
        {
          type: "prose",
          text: [
            "Test the setup first. We tested it because it happened to be task one in a flow that ran front to back, and found the problem almost by accident. Had we gone looking for the least interesting screen deliberately, we would have found it weeks earlier.",
            "And saying what happens to the audio, in the sentence that asks for the audio, costs nothing. It is the one piece of this project I would carry into any product.",
          ],
        },
      ],
    },
  ],
};
