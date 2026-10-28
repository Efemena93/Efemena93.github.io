import { SignalPoint } from "@/components/signals/SignalPoint";
import { EVIDENCE, type EvidenceLevel } from "@/content/types";

const ORDER: EvidenceLevel[] = ["evidence", "interpretation", "hypothesis", "concept"];

const MARK: Record<
  EvidenceLevel,
  { accent: "sage" | "blue" | "clay" | "charcoal"; dot: "filled" | "half" | "hollow"; rule: string }
> = {
  evidence: { accent: "sage", dot: "filled", rule: "border-solid border-sage" },
  interpretation: { accent: "blue", dot: "half", rule: "border-solid border-blue" },
  hypothesis: { accent: "clay", dot: "hollow", rule: "border-dashed border-clay" },
  concept: { accent: "charcoal", dot: "hollow", rule: "border-dotted border-charcoal-muted" },
};

/**
 * Renders once near the top of a case study.
 *
 * It used to be an open panel: four definitions a reader had to walk past
 * before reaching any of the work. That put a classification system in front
 * of the thing being classified, which is the wrong way round, and it was the
 * same four definitions on all seven pages.
 *
 * Now it is one line and a disclosure. The line says what the markers mean
 * well enough to carry on reading; the definitions are a click away for
 * anyone who wants them. `details` rather than a scripted accordion, so it
 * works without JavaScript, is keyboard-operable for free, and is announced
 * as an expandable group.
 *
 * Nothing is hidden that qualifies a claim: every marker still sits against
 * the sentence it belongs to, and the "Observed" ones still name their source
 * in full on the page.
 */
export function EvidenceLegend() {
  return (
    <details className="forced-border group/legend rounded border border-line bg-paper px-6 py-5 sm:px-8">
      <summary className="flex cursor-pointer list-none items-baseline gap-3 rounded focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
        <span className="measure text-small text-charcoal-soft">
          Claims on this page are marked by how much weight they carry: observed,
          interpreted, hypothesis, unvalidated.
        </span>
        <span className="label-type shrink-0 text-blue-deep">
          <span className="link-underline group-open/legend:hidden">What these mean</span>
          <span className="link-underline hidden group-open/legend:inline">Hide</span>
        </span>
      </summary>

      <dl className="mt-7 grid gap-6 sm:grid-cols-2">
        {ORDER.map((level) => {
          const mark = MARK[level];
          return (
            <div key={level} className={`border-l pl-4 ${mark.rule}`}>
              <dt className="flex items-center gap-2">
                <SignalPoint accent={mark.accent} variant={mark.dot} />
                <span className="label-type text-charcoal">{EVIDENCE[level].label}</span>
              </dt>
              <dd className="mt-1.5 text-small text-charcoal-muted">
                {EVIDENCE[level].definition}
              </dd>
            </div>
          );
        })}
      </dl>
    </details>
  );
}
