import type { FieldNote } from "../types";
import { assertContentIntegrity, validateFieldNotes } from "../validate";

/**
 * Field Notes.
 *
 * Short pieces about practice — one idea each, no listicles, no
 * thought-leadership register. A note is worth publishing if it says
 * something you would actually say out loud in a critique.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  AUTHORSHIP NOTE — read before deploying.
 *
 *  The three notes below were drafted to the brief Efemena set: emotional
 *  design, researching sensitive experiences, and returning to design with a
 *  deeper understanding of care. They are grounded only in things she has
 *  stated herself — her projects, her résumé, and her own landing-page copy.
 *  Nothing about a project's findings, outcomes or validation is asserted
 *  beyond what the case studies already say.
 *
 *  They are still someone else's sentences about her life. She should read
 *  and edit them in her own voice before this site goes public. Until then
 *  they are complete enough to build and audit against, but they are not
 *  yet hers.
 * ─────────────────────────────────────────────────────────────────────────
 */

const feelingsAreRequirements: FieldNote = {
  slug: "feelings-are-requirements",
  visibility: "published",
  title: "Feelings are requirements",
  standfirst:
    "Emotional design usually arrives last, as warmth applied to a finished thing. On the projects I care about it arrives first, as the constraint that decides what the thing can be.",
  date: "2026-08-28",
  readingMinutes: 4,
  tags: ["Emotional design", "Practice"],
  blocks: [
    {
      type: "prose",
      text: [
        "The standard order of operations is: solve the problem, then make it feel good. Requirements, flows, states, edge cases — and then, near the end, someone adds an illustration of a friendly cloud and a line of copy that says we know this is frustrating. The feeling is treated as a finish. Something you apply to a surface once the structure underneath has been settled by other means.",
        "I have worked that way. It produces products that are perfectly usable and that people quietly stop using.",
      ],
    },
    {
      type: "prose",
      text: [
        "Here is the version I believe now. On any product that touches something a person finds difficult, their emotional state is not a quality of the experience. It is a constraint on the solution space, and it belongs in the requirements document next to the technical ones.",
        "A health portal is the clearest case. On Olive-Ilive I kept meeting a problem that looked like an efficiency problem: people abandoned forms partway through. The efficiency answer is well known — fewer fields, better progress indication, save and resume. All good moves. None of them touch the actual reason, which is that some of the questions are humiliating to answer truthfully, and abandoning the form is a rational way to avoid saying the true thing to a screen that has given you no reason to trust it.",
      ],
    },
    {
      type: "callout",
      title: "The reframe",
      text: "“Reduce friction” and “reduce the cost of being honest” look like the same requirement until you try to design for them. The first gets you a shorter form. The second gets you a different form.",
    },
    {
      type: "prose",
      text: [
        "Once the feeling is written down as a requirement, it starts doing what requirements do: it rules things out. It tells you that the progress bar counting down to the end of the questionnaire is working against you, because it turns a disclosure into a chore to be completed. It tells you that the field labelled Other, please specify is where your most important data is going to die. It suggests, quite specifically, that the order of the questions matters more than the number of them, because trust is built in the first three and spent in the rest.",
        "None of that comes from asking what feeling should this evoke. It comes from asking what is this person's actual emotional position when they arrive here, and what does that make impossible.",
      ],
    },
    {
      type: "prose",
      text: [
        "The failure mode I watch for in myself is the opposite one — treating emotional framing as a licence to skip the functional work. It is very pleasant to write a paragraph about dignity and much harder to specify the empty state. A feeling that has not been turned into a decision about a screen is not design yet. It is just a good intention with better vocabulary.",
        "So the test I apply is blunt: name the feeling, then name the thing it stopped you from building. If there is no second half, the first half was decoration.",
      ],
    },
  ],
};

const askingAboutTheHardThing: FieldNote = {
  slug: "asking-about-the-hard-thing",
  visibility: "published",
  title: "Asking about the hard thing",
  standfirst:
    "How I run research on subjects people find painful, and why I have stopped going straight at the difficult question.",
  date: "2026-08-21",
  readingMinutes: 5,
  tags: ["Research practice", "Ethics"],
  blocks: [
    {
      type: "prose",
      text: [
        "The difficult subject is where the insight is. Everyone knows this, which is why the temptation in a study about something painful is to get there quickly — to spend the warm-up questions impatiently, waiting for the part that will justify the recruitment effort.",
        "I have learned to do the opposite, for reasons that are partly ethical and partly just methodological self-interest.",
      ],
    },
    {
      type: "prose",
      text: [
        "My capstone is a research project about how military families hold a life together across a deployment. It is ongoing, and I am deliberately not writing here about what it has found. What I can write about is how I ask.",
        "I ask about logistics. What time do you call. Who is awake. What happens to the school run. Who pays the bills that month, and did that change. Whether the internet at the other end is good enough for video or whether it is a voice call, and what the difference is between those two things.",
      ],
    },
    {
      type: "callout",
      title: "Why the boring questions",
      text: "Logistics are safe to answer and impossible to answer without revealing the shape of the difficulty. A person will tell you the truth about a calendar long before they will tell you the truth about a feeling — and the calendar contains the feeling.",
    },
    {
      type: "prose",
      text: [
        "The second reason is that it hands the pacing to the participant. When you ask directly about the hardest part, you have set the register of the conversation and they now have to either meet it or disappoint you. Most people, being generous, will meet it. That is not consent so much as good manners, and building a study on someone's good manners is how you end up with material you should not have.",
        "When the questions stay concrete, the emotional material arrives when the participant decides to bring it, in the words they chose, at the depth they chose. In my experience it almost always arrives. It just arrives on their schedule.",
      ],
    },
    {
      type: "prose",
      text: [
        "A few practical commitments that follow from this. I say at the start that any question can be skipped without explanation, and I mean it visibly — when someone skips, I move on immediately rather than rephrasing. I do not ask follow-up questions designed to deepen distress, however good the quote would be. I stop early if the session has turned into something the participant needs rather than something I need.",
        "And I accept in advance that some of what I learn will not be publishable. Not because it is confidential in the formal sense, but because a finding that is only usable by exposing a specific person's private life is not a finding I have earned the right to use. There is a version of this work that would make a more affecting case study. I would rather have the participants.",
      ],
    },
    {
      type: "prose",
      text: [
        "The thing I am still working out is where the line sits between careful and evasive. Research that never approaches the difficult subject at all is not sensitive, it is timid, and it produces a study about scheduling when the study was supposed to be about separation. I do not think the answer is a rule. I think it is paying attention to who the caution is protecting — and being honest when the answer is me.",
      ],
    },
  ],
};

const careIsASystem: FieldNote = {
  slug: "care-is-a-system",
  visibility: "published",
  title: "Care is a system, not a sentiment",
  standfirst:
    "A period away from full-time practice changed what I notice in an interface. Mostly it changed my idea of who is on the other side of it.",
  date: "2026-08-18",
  readingMinutes: 4,
  tags: ["Practice", "Emotional design"],
  blocks: [
    {
      type: "prose",
      text: [
        "I stepped back from full-time design work for a while. It was a period of becoming a mother and of reading for a Master's at the same time, and I came back to the work with my attention rearranged rather than interrupted. I want to be precise about that, because there is a version of this note that apologises for a gap, and there is nothing here to apologise for. It was the most useful thing that has happened to my practice.",
      ],
    },
    {
      type: "prose",
      text: [
        "What changed is that I stopped thinking about care as a feeling.",
        "Before, if you had asked me to design something caring, I would have reached for tone. Gentler copy. Softer corners. A slower transition. Warmth, essentially, applied at the surface — which is the same instinct I have written about elsewhere and still catch myself having.",
        "Care in practice turned out to be almost entirely logistics. It is remembering, on someone else's behalf, at a time that is not convenient, repeatedly, while tired. It is holding a schedule that only exists in your head. It is the invisible labour of tracking what another person needs before they can say it. Very little of that is warm. Most of it is administrative, and the administrative part is the part that is actually hard.",
      ],
    },
    {
      type: "callout",
      title: "What that means for an interface",
      text: "If care is mostly load-bearing memory and timing, then a caring product is one that carries some of the load — not one that expresses sympathy about it.",
    },
    {
      type: "prose",
      text: [
        "This is not a subtle distinction in practice. It changes what I flag in a critique.",
        "I notice, now, how many interfaces assume an undistracted user with both hands free, full attention and an uninterrupted five minutes. I notice flows that can only be completed in one sitting and lose everything if you leave. I notice the ones that ask you to remember something the system already knows. I notice how often a product's answer to a difficult moment is a message, when the useful answer would have been to have kept the state.",
        "And I notice that these are usually not accessibility failures in the formal sense. They pass the audit. They are simply designed for a person with more slack than most people have.",
      ],
    },
    {
      type: "prose",
      text: [
        "It also gave me the question that most of my work now turns on. When a system says nothing — when the status has not changed, when the reply has not come, when the notification stops arriving — the person on the other end concludes something anyway. Interfaces are careful about what they say and careless about what a silence means. That is the thread running through the capstone, and it is not a thread I would have been able to see clearly from a desk.",
        "I am not romanticising the season. It was exhausting and a good deal of it had nothing to do with design. But I would not trade what it taught me about what people are actually carrying when they open something I made.",
      ],
    },
  ],
};

const labelledClaims: FieldNote = {
  slug: "what-a-label-costs",
  visibility: "published",
  title: "What a label costs",
  standfirst:
    "Marking every claim in a case study by how much weight it can carry makes the writing less confident. That turns out to be the point.",
  date: "2026-08-14",
  readingMinutes: 4,
  tags: ["Research practice", "Writing"],
  blocks: [
    {
      type: "prose",
      text: [
        "Somewhere in the standard case study there is a sentence that goes: users struggle to find the information they need. It sits under a heading that says Research, so the reader takes it as a finding. Often it is a finding. Just as often it is a reasonable inference from three interviews, or a restatement of the brief, or something the designer believed before the study began and did not stop believing afterwards.",
        "Nobody is lying. The format simply does not have a place to put the difference.",
      ],
    },
    {
      type: "prose",
      text: [
        "So I started labelling. Every claim in a case study on this site is marked as observed, interpreted, a hypothesis, or an unvalidated concept. Observed claims carry a source. Hypotheses are written down before the fieldwork that might disprove them, which is a slightly uncomfortable thing to publish.",
      ],
    },
    {
      type: "callout",
      title: "The cost",
      text: "A labelled case study reads as less certain than an unlabelled one, because it is being honest about how certain it was in the first place. That is a real cost in a portfolio, where confidence is part of what is being sold.",
    },
    {
      type: "prose",
      text: [
        "It is worth paying for two reasons. The first is that it makes the strong claims mean something. If four claims on a page are marked observed and the rest are marked as interpretation, the four observed ones land harder than they would in a document where everything is asserted flatly.",
        "The second reason is more selfish. Labelling forces the question at the moment of writing, when it is still cheap to answer. You sit down to type 'users want' and you have to decide, immediately, whether you watched that happen or concluded it. About a third of the time the honest answer is the second one, and knowing which third is most of what research practice actually is.",
      ],
    },
    {
      type: "prose",
      text: [
        "The failure mode I am watching for is that labels become decoration — a badge next to every sentence, applied loosely, meaning nothing. The discipline only holds if downgrading is possible: if a claim can move from observed to interpretation when the evidence turns out to be thinner than remembered, and if a concept that fails testing gets deleted rather than quietly relabelled.",
      ],
    },
  ],
};

const notAnApp: FieldNote = {
  slug: "the-outcome-does-not-have-to-be-an-app",
  // Unwritten. Kept in the repository, excluded from every public surface.
  visibility: "draft",
  title: "The outcome does not have to be an app",
  standfirst:
    "A guardrail I set at the start of my capstone, and what it changed about the questions I could ask.",
  date: "2026-07-02",
  readingMinutes: 5,
  tags: ["Research practice", "Capstone"],
  blocks: [
    {
      type: "todo",
      note: "The argument: committing to a screen too early narrows the research to questions a screen can answer. Open with the moment you wrote the guardrail down. Middle: something you would not have asked if you had been heading for a prototype. End: the honest counter-argument — that this guardrail can also become an excuse not to commit to anything. Around 600 words, no headings, no bullet list.",
    },
  ],
};

const allFieldNotes: FieldNote[] = [
  feelingsAreRequirements,
  askingAboutTheHardThing,
  careIsASystem,
  labelledClaims,
  notAnApp,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Fails the production build if a published note contains a placeholder or a
// "to write" block.
assertContentIntegrity(validateFieldNotes(allFieldNotes));

/**
 * Published notes — the index, the sitemap, structured data, the homepage
 * preview. Drafts are preserved in this file but never routed or listed.
 */
export const fieldNotes = allFieldNotes.filter((n) => n.visibility === "published");

/** The homepage preview. Three most recent, newest first. */
export const featuredFieldNotes = fieldNotes.slice(0, 3);

/** Published and archived both get a page; drafts do not. */
export const routableFieldNotes = allFieldNotes.filter((n) => n.visibility !== "draft");

export const draftFieldNotes = allFieldNotes.filter((n) => n.visibility === "draft");

/** Returns undefined for drafts, so a draft slug cannot render by accident. */
export function getFieldNote(slug: string): FieldNote | undefined {
  return routableFieldNotes.find((note) => note.slug === slug);
}
