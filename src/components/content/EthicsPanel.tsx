import { Eyebrow } from "@/components/primitives";
import type { EthicsStatement } from "@/content/types";

/**
 * Names what a project is, what it is deliberately not, and what remains
 * untested. On sensitive research this is not a disclaimer — it is the part
 * of the work that shows judgement, and it is the first thing a thoughtful
 * hiring manager looks for.
 */
export function EthicsPanel({ ethics }: { ethics: EthicsStatement }) {
  return (
    <section
      aria-labelledby="ethics-and-limits"
      className="forced-border rounded border border-line bg-paper p-6 sm:p-10"
    >
      <Eyebrow as="h2" id="ethics-and-limits" className="mb-6">
        Scope, ethics and limits
      </Eyebrow>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-h3 text-charcoal">What this is</h3>
          <ul className="space-y-3">
            {ethics.is.map((item) => (
              <li key={item} className="border-l border-sage pl-4 text-small text-charcoal-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-h3 text-charcoal">What this is not</h3>
          <ul className="space-y-3">
            {ethics.isNot.map((item) => (
              <li
                key={item}
                className="border-l border-dashed border-clay pl-4 text-small text-charcoal-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-h3 text-charcoal">What is still unvalidated</h3>
          <ul className="space-y-3">
            {ethics.unvalidated.map((item) => (
              <li
                key={item}
                className="border-l border-dotted border-charcoal-muted pl-4 text-small text-charcoal-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {ethics.notRepresented?.length ? (
          <div>
            <h3 className="mb-4 text-h3 text-charcoal">Who is not represented</h3>
            <ul className="space-y-3">
              {ethics.notRepresented.map((item) => (
                <li
                  key={item}
                  className="border-l border-dotted border-charcoal-muted pl-4 text-small text-charcoal-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
