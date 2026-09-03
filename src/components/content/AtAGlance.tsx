import { Eyebrow } from "@/components/primitives";
import type { AtAGlance as AtAGlanceData } from "@/content/types";

/**
 * The recruiter's twenty seconds. Sits above the fold on desktop, directly
 * under the hero, before any narrative. If someone reads only this block they
 * should still be able to describe the project accurately.
 */
export function AtAGlance({ data }: { data: AtAGlanceData }) {
  const cells: Array<{ label: string; value: string }> = [
    { label: "The problem", value: data.problem },
    { label: "My role", value: data.role },
    { label: "What I did", value: data.approach },
    { label: "What changed", value: data.outcome },
  ];

  return (
    <section aria-labelledby="at-a-glance" className="border-y border-line py-10 sm:py-12">
      <Eyebrow as="h2" id="at-a-glance" className="mb-8">
        At a glance
      </Eyebrow>
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {cells.map((cell, i) => (
          <div
            key={cell.label}
            className={i > 0 ? "lg:border-l lg:border-line lg:pl-6" : undefined}
          >
            <dt className="label-type mb-2 text-charcoal-muted">{cell.label}</dt>
            <dd className="text-small leading-relaxed text-charcoal-soft">{cell.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
