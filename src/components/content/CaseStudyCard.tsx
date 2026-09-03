"use client";

import Link from "next/link";

import { CoverField } from "@/components/signals/CoverField";
import { ThreadLine } from "@/components/signals/ThreadLine";
import { DISCIPLINE_LABEL, STATUS_LABEL, type CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

/**
 * One case study, one link, one tab stop.
 *
 * Deliberately not a "card": no elevated white rectangle, no shadow at rest.
 * Grouping comes from a hairline and space. The only shadow in the design
 * system appears here, on hover, on the cover alone.
 */

export function CaseStudyCard({
  study,
  featured = false,
  index = 0,
}: {
  study: CaseStudy;
  featured?: boolean;
  index?: number;
}) {
  return (
    <article className="group relative">
      <div className="border-t border-line">
        <span className="absolute inset-x-0 top-0 block opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <ThreadLine accent="sage" />
        </span>
      </div>

      <Link
        href={`/work/${study.slug}`}
        className="block pt-6 focus-visible:outline-offset-4"
        aria-label={`${study.title} — ${study.premise}`}
      >
        <div
          className={cx(
            "forced-border relative overflow-hidden rounded border border-line bg-sunk transition-shadow duration-500 group-hover:shadow-[var(--shadow-lift)]",
            featured ? "aspect-[21/9]" : "aspect-[4/3]",
          )}
        >
          {/* Placeholder cover: a constellation seeded from the slug, so each
              project has its own stable motif. Swap for next/image when the
              real artwork exists. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[620ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
          >
            <CoverField
              seed={study.slug}
              accent={study.cover.accent}
              density={featured ? 20 : 12}
            />
          </div>
          <div className="absolute inset-0 flex items-end p-5">
            <p className="label-type text-charcoal-muted">
              {String(index + 1).padStart(2, "0")} · {study.year}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="label-type text-charcoal-muted">{study.context}</span>
          {study.status !== "complete" ? (
            <span className="label-type text-clay-deep">{STATUS_LABEL[study.status]}</span>
          ) : null}
        </div>

        <h3
          className={cx(
            "mt-3 font-display text-charcoal",
            featured ? "text-h2" : "text-h3",
          )}
        >
          <span className="link-underline">{study.title}</span>
        </h3>

        <p className="mt-3 measure text-body text-charcoal-soft">{study.premise}</p>

        <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
          {study.disciplines.map((discipline, i) => (
            <li key={discipline} className="label-type flex items-center gap-2 text-charcoal-muted">
              {i > 0 ? (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              ) : null}
              {DISCIPLINE_LABEL[discipline]}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
