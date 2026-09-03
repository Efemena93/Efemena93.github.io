/**
 * The kind labels, in their own module with no imports.
 *
 * `SignalConstellation` is a client component. Anything it imports is bundled
 * and shipped to the browser — and importing these labels from `signals.ts`
 * dragged in the case-study index, and with it the full text of every draft
 * project. No route existed for them, but the words were downloadable.
 *
 * The field's node and thread data now arrives as props from the server, and
 * only these two constants are shared.
 */
export type SignalKind = "project" | "theme" | "observation";

export const KIND_LABEL: Record<SignalKind, string> = {
  project: "Project",
  theme: "Research theme",
  observation: "Observation",
};
