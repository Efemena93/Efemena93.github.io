"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { useMotionPreference } from "@/components/motion/MotionProvider";
import { CoverField } from "@/components/signals/CoverField";
import { ThreadLine } from "@/components/signals/ThreadLine";
import { STATUS_LABEL, type CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

/**
 * The featured project card.
 *
 * Every fact a recruiter needs in order to decide whether to read further is
 * printed here — problem area, role, project type, and one meaningful outcome
 * or the honest current status. None of it is behind a hover.
 *
 * The whole card is one link, so it is one tab stop; the "Read case study"
 * line is a visual affordance inside that link rather than a second control
 * competing with it.
 */
export function FeaturedProjectCard({
  study,
  index,
  large = false,
}: {
  study: CaseStudy;
  index: number;
  large?: boolean;
}) {
  const { reduced, resolved } = useMotionPreference();
  const coverRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  /**
   * The mask lift is driven imperatively. It is a one-way visual transition
   * on an element React does not otherwise re-render, so a state round-trip
   * would buy nothing and cost a render per card on every scroll.
   */
  useEffect(() => {
    if (!resolved) return;

    const cover = coverRef.current;
    const mask = maskRef.current;
    if (!cover || !mask) return;

    const open = () => {
      mask.style.clipPath = "inset(0 0 0 0)";
    };

    if (reduced) {
      // No animation, and no hidden state either: the cover is simply there.
      mask.style.transition = "none";
      open();
      return;
    }

    mask.style.clipPath = "inset(0 0 100% 0)";
    mask.style.transition =
      "clip-path 620ms var(--ease-out-soft), transform 620ms var(--ease-out-soft)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        open();
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(cover);
    return () => observer.disconnect();
  }, [reduced, resolved]);

  const facts: Array<{ label: string; value: string }> = [
    { label: "Problem area", value: study.problemArea },
    { label: "My role", value: study.shortRole },
    { label: "Project type", value: study.projectType },
  ];

  return (
    <article className="group relative">
      <div className="relative border-t border-line">
        <span className="absolute inset-x-0 top-0 block opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <ThreadLine accent="sage" />
        </span>
      </div>

      <Link
        href={`/work/${study.slug}`}
        className="block pt-6 focus-visible:outline-offset-4"
        aria-label={`${study.title} — ${study.premise}. Read the case study.`}
      >
        {/* Cover. Revealed by an upward-lifting mask rather than a fade, so it
            reads as being uncovered. 620ms; skipped entirely under reduced
            motion, where it is simply present. */}
        <div
          ref={coverRef}
          className={cx(
            "forced-border relative overflow-hidden rounded border border-line bg-sunk transition-shadow duration-500 group-hover:shadow-[var(--shadow-lift)]",
            large ? "aspect-[21/9]" : "aspect-[16/10]",
          )}
        >
          <div
            ref={maskRef}
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[620ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
          >
            <CoverField
              seed={study.slug}
              accent={study.cover.accent}
              density={large ? 20 : 13}
            />
          </div>

          <div className="absolute inset-0 flex items-end justify-between gap-4 p-5">
            <p className="label-type text-charcoal-muted">
              {String(index + 1).padStart(2, "0")} · {study.year}
            </p>
            {study.status !== "complete" ? (
              <p className="label-type text-clay-deep">{STATUS_LABEL[study.status]}</p>
            ) : null}
          </div>
        </div>

        <h3
          className={cx("mt-7 font-display text-charcoal", large ? "text-h2" : "text-h3")}
        >
          <span className="link-underline">{study.title}</span>
        </h3>

        <p className="mt-3 measure text-body text-charcoal-soft">{study.premise}</p>

        {/* The scannable facts. */}
        <dl className={cx("mt-7 grid gap-x-8 gap-y-5", large ? "sm:grid-cols-3" : "")}>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label-type mb-1.5 text-charcoal-muted">{fact.label}</dt>
              <dd className="text-small leading-relaxed text-charcoal-soft">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* Outcome, or the honest status when there is not one yet. */}
        <div className="mt-6 border-l-2 border-l-sage pl-4">
          <p className="label-type mb-1.5 text-charcoal-muted">
            {study.status === "complete" ? "Outcome" : "Current status"}
          </p>
          <p className="measure text-small leading-relaxed text-charcoal-soft">
            {study.headline}
          </p>
        </div>

        <p className="label-type mt-7 inline-flex items-center gap-2 text-blue-deep">
          <span className="link-underline">Read case study</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </Link>
    </article>
  );
}
