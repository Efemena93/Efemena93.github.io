import Image from "next/image";
import Link from "next/link";

import { CoverField } from "@/components/signals/CoverField";
import { STATUS_LABEL, type CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

/**
 * ProjectSignalCard — the single card component for a case study.
 *
 * Replaces FeaturedProjectCard and CaseStudyCard, which were near-duplicates
 * doing the same job in two places.
 *
 * ── Zero JavaScript ───────────────────────────────────────────────────────
 * This is a server component. Every interaction is CSS: `group-hover` and
 * `group-focus-within` drive the image saturation, the depth, the travelling
 * line and the arrow. Nothing here needs hydration, so the card costs no
 * client bundle at all, and it behaves identically if JavaScript never
 * arrives or fails. The previous version used an IntersectionObserver and
 * shipped a client component per card for a reveal that CSS does for free.
 *
 * ── Nothing essential is behind hover ─────────────────────────────────────
 * The brief asks for the problem, role, timeline and status to be revealed on
 * hover, and separately that essential information is never hover-only. Those
 * pull against each other, so: every one of those facts is rendered and
 * legible at all times, at every breakpoint. Hover and focus change their
 * colour from muted to soft and draw the thread — the card comes alive
 * without ever having been withholding. A person who cannot hover, or is
 * reading on a phone, loses no information whatsoever.
 *
 * ── One link, one tab stop ────────────────────────────────────────────────
 * The whole card is a single anchor. The "Read case study" row is a visible
 * affordance inside that anchor, not a competing control, so keyboard users
 * get one stop per project rather than two. Its accessible name names the
 * destination and the project.
 */

const ACCENT_DOT: Record<CaseStudy["cover"]["accent"], string> = {
  sage: "bg-sage",
  blue: "bg-blue",
  clay: "bg-clay",
};

export function ProjectSignalCard({
  study,
  index,
  /** The first card on the homepage gets more room and a wider cover. */
  lead = false,
  /** Below-the-fold covers load lazily; the lead cover does not. */
  priority = false,
}: {
  study: CaseStudy;
  index: number;
  lead?: boolean;
  priority?: boolean;
}) {
  const facts: Array<{ label: string; value: string }> = [
    { label: "Project type", value: study.projectType },
    { label: "My role", value: study.shortRole },
    { label: "Timeline", value: study.timeline },
  ];

  return (
    <article className="group relative">
      {/* Signal marker and the thread that travels from it to the title.
          The marker is always visible; the thread grows from zero on hover
          and focus. Both are decorative — the heading below carries the
          meaning. */}
      <div className="relative flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className={cx(
            "block h-2 w-2 shrink-0 rounded-full transition-transform duration-300 ease-[var(--ease-out-soft)]",
            "group-hover:scale-150 group-focus-within:scale-150",
            ACCENT_DOT[study.cover.accent],
          )}
        />
        <span
          aria-hidden="true"
          className={cx(
            "block h-px flex-1 origin-left scale-x-0 bg-line-strong",
            "transition-transform duration-500 ease-[var(--ease-out-soft)]",
            "group-hover:scale-x-100 group-focus-within:scale-x-100",
          )}
        />
        <span className="label-type shrink-0 text-charcoal-muted">
          {String(index + 1).padStart(2, "0")} · {study.year}
        </span>
      </div>

      <Link
        href={`/work/${study.slug}`}
        className="mt-6 block rounded focus-visible:outline-offset-4"
        aria-label={`${study.title} — ${study.humanProblem} Read the full case study.`}
      >
        {/* Cover. Desaturated at rest, full colour and lifted on hover or
            focus. A real image is used when one exists; otherwise the
            generated constellation, which is honest — there is no screenshot
            of this work to show yet. */}
        <div
          className={cx(
            "forced-border relative overflow-hidden rounded border border-line bg-sunk",
            "transition-shadow duration-500 ease-[var(--ease-out-soft)]",
            "group-hover:shadow-[var(--shadow-lift)] group-focus-within:shadow-[var(--shadow-lift)]",
            lead ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]",
          )}
        >
          <div
            className={cx(
              "absolute inset-0 saturate-[0.55] transition-[filter,transform] duration-500 ease-[var(--ease-out-soft)]",
              "group-hover:scale-[1.015] group-hover:saturate-100",
              "group-focus-within:scale-[1.015] group-focus-within:saturate-100",
            )}
          >
            {study.cover.src && study.cover.width && study.cover.height ? (
              <Image
                src={study.cover.src}
                alt={study.cover.alt}
                width={study.cover.width}
                height={study.cover.height}
                sizes={lead ? "(min-width: 1024px) 1200px, 100vw" : "(min-width: 1024px) 600px, 100vw"}
                priority={priority}
                loading={priority ? undefined : "lazy"}
                className="h-full w-full object-cover"
              />
            ) : (
              // Decorative: the alt text belongs to the project, and the
              // heading beside it already names the project.
              <CoverField
                seed={study.slug}
                accent={study.cover.accent}
                density={lead ? 20 : 13}
              />
            )}
          </div>

          {study.status !== "complete" ? (
            <p className="absolute right-4 top-4 rounded-sm border border-line bg-ivory/90 px-2 py-1">
              <span className="label-type text-clay-deep">{STATUS_LABEL[study.status]}</span>
            </p>
          ) : null}
        </div>

        <p className="label-type mt-6 text-charcoal-muted">{study.context}</p>

        <h3 className={cx("mt-3 font-display text-charcoal", lead ? "text-h2" : "text-h3")}>
          <span className="link-underline">{study.title}</span>
        </h3>

        {/* The human problem — the line that carries the card. */}
        <p className="mt-4 measure text-body text-charcoal-soft">{study.humanProblem}</p>

        {/* What the project is deliberately not. Only present where the
            obvious misreading would be harmful. */}
        {study.boundary ? (
          <p className="mt-4 border-l-2 border-l-blue pl-4 text-small text-charcoal-soft">
            {study.boundary}
          </p>
        ) : null}

        {/* Always rendered, always legible. Hover and focus lift the colour;
            they never bring information into existence. */}
        <dl
          className={cx(
            "mt-7 grid gap-x-8 gap-y-5 transition-colors duration-300",
            lead ? "sm:grid-cols-3" : "sm:grid-cols-2",
          )}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label-type mb-1.5 text-charcoal-muted">{fact.label}</dt>
              <dd className="text-small leading-relaxed text-charcoal-muted transition-colors duration-300 group-hover:text-charcoal-soft group-focus-within:text-charcoal-soft">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 border-l-2 border-l-sage pl-4">
          <p className="label-type mb-1.5 text-charcoal-muted">
            {study.status === "complete" ? "Outcome" : "Current status"}
          </p>
          <p className="measure text-small leading-relaxed text-charcoal-soft">{study.headline}</p>
        </div>

        {/* Visible action. Inside the anchor, so it is an affordance rather
            than a second tab stop — and 44px tall for touch. */}
        <p className="label-type mt-7 inline-flex min-h-11 items-center gap-2 text-blue-deep">
          <span className="link-underline">Read case study</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-focus-within:translate-x-1"
          >
            →
          </span>
        </p>
      </Link>
    </article>
  );
}
