import type { FieldNote } from "../types";
import { assertContentIntegrity, validateFieldNotes } from "../validate";

/**
 * Field Notes.
 *
 * The first note is written in full, to set the voice: short, specific, one
 * idea, no listicles, no thought-leadership register. The other two are
 * scaffolds — the titles are good, the arguments are yours.
 *
 * A note is worth publishing if it says something you would actually say out
 * loud in a critique. Three real notes beat twelve competent ones.
 */

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
  // Unwritten. Was rendering a public page containing only a "To write" panel.
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
      note: "Write this one. The argument: committing to a screen too early narrows the research to questions a screen can answer. Open with the moment you wrote the guardrail down. Middle: something you would not have asked if you had been heading for a prototype. End: the honest counter-argument — that this guardrail can also become an excuse not to commit to anything. Around 600 words, no headings, no bullet list.",
    },
  ],
};

const silence: FieldNote = {
  slug: "reading-a-silence",
  // Unwritten. Was rendering a public page containing only a "To write" panel.
  visibility: "draft",
  title: "Reading a silence",
  standfirst:
    "Interfaces are careful about what they say. They are careless about what a person concludes when they say nothing.",
  date: "2026-05-20",
  readingMinutes: 4,
  tags: ["Interaction design", "Emotional design"],
  blocks: [
    {
      type: "todo",
      note: "Write this one. The argument: absence is a message and most systems do not design it — a delivered receipt with no reply, a notification that stops arriving, a status that stays unchanged. Use one concrete example from outside your own work. Resist the urge to end on a tidy principle; end on the specific case.",
    },
  ],
};

const allFieldNotes: FieldNote[] = [labelledClaims, notAnApp, silence].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

// Fails the production build if a published story contains a placeholder or a
// "to write" block. Two of the three below are drafts precisely because of it.
assertContentIntegrity(validateFieldNotes(allFieldNotes));

/**
 * Published stories — the Library index, the sitemap, structured data.
 * Drafts are preserved in this file but never routed or listed.
 */
export const fieldNotes = allFieldNotes.filter((n) => n.visibility === "published");

/** Published and archived both get a page; drafts do not. */
export const routableFieldNotes = allFieldNotes.filter((n) => n.visibility !== "draft");

export const draftFieldNotes = allFieldNotes.filter((n) => n.visibility === "draft");

/** Returns undefined for drafts, so a draft slug cannot render by accident. */
export function getFieldNote(slug: string): FieldNote | undefined {
  return routableFieldNotes.find((note) => note.slug === slug);
}
