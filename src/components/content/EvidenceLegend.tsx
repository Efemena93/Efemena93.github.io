import { SignalPoint } from "@/components/signals/SignalPoint";
import { Eyebrow } from "@/components/primitives";
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
 * Renders once near the top of a case study, so the vocabulary is established
 * before it is used. Without this the markers would be decoration; with it
 * they are a contract with the reader.
 */
export function EvidenceLegend() {
  return (
    <div className="forced-border rounded border border-line bg-paper p-6 sm:p-8">
      <Eyebrow as="h2" className="mb-3">
        How to read this case study
      </Eyebrow>
      <p className="measure text-small text-charcoal-soft">
        Research writing gets less useful the more it blurs what was found with what was
        guessed. Every claim below is labelled with how much weight it can carry.
      </p>

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
    </div>
  );
}
