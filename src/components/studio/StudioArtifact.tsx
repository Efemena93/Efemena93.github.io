import Link from "next/link";
import type { ReactNode } from "react";

import type { CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

import { ArtifactLabel } from "./ArtifactLabel";

/**
 * StudioArtifact — the shared shell every case-study object in the studio uses.
 *
 * One <article>, one <a>. A keyboard user gets exactly one stop per project,
 * in visual order, with an accessible name that says where it goes. Label and
 * visual both sit inside the link, so the whole composition is the target —
 * far past 44×44px at every breakpoint.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component. Every state change is CSS driven by `group-hover` and
 * `group-focus-within` on this element. Nothing tracks the pointer, so it
 * behaves identically to touch, keyboard and mouse.
 *
 * ── The visual is decorative; the text is the content ─────────────────────
 * The SVG scenes are schematic — geometric regions standing in for research
 * material and interface layers. They are `aria-hidden`, and they carry no
 * meaning that is not also written in the label. That is what makes it
 * honest: nothing is lost by not seeing them. A visually-hidden sentence
 * describes what each scene depicts, so a screen-reader user is told what is
 * on the page rather than walked silently past it.
 */

export function StudioArtifact({
  study,
  index,
  title,
  subtitle,
  discipline,
  /** Plain-language description of the scene, for assistive technology. */
  sceneDescription,
  children,
  className,
  /**
   * Raises this column at scene widths so its label sits higher, as in the
   * reference. The same amount is added back as padding under the object, so
   * the object itself stays on the shared desk line — raising the article
   * alone moved the whole column, and the phone and monitor ended up floating
   * 24px above the desk.
   */
  raise,
}: {
  study: CaseStudy;
  index: number;
  /** Display name for the label; defaults to the case study's own title. */
  title?: string;
  subtitle: string;
  discipline: string;
  sceneDescription: string;
  children: ReactNode;
  className?: string;
  raise?: "sm" | "md";
}) {
  return (
    <article
      className={cx(
        "group relative flex h-full flex-col",
        raise === "md" && "lg:-mt-24",
        raise === "sm" && "lg:-mt-20",
        className,
      )}
    >
      <Link
        href={`/work/${study.slug}`}
        aria-label={`${title ?? study.title} — ${subtitle}. Open the full case study.`}
        className="flex flex-1 flex-col rounded focus-visible:outline-offset-4"
      >
        <ArtifactLabel
          study={study}
          index={index}
          title={title ?? study.title}
          subtitle={subtitle}
          discipline={discipline}
        />

        <p className="sr-only">{sceneDescription}</p>

        {/* The object itself, pushed to the bottom of the column so that all
            three sit on the same desk line however tall their labels are. */}
        <div
          className={cx(
            "artifact-stage relative mt-auto pt-8",
            // Translate, not padding: the article above was pulled up by
            // this amount to raise the label, and the object has to come
            // back down by the same amount to sit on the shared desk line.
            // Padding would have moved it further up, not back.
            raise === "md" && "lg:translate-y-24",
            raise === "sm" && "lg:translate-y-20",
            "transition-transform duration-500 ease-[var(--ease-out-soft)]",
            "group-hover:-translate-y-1 group-focus-within:-translate-y-1",
          )}
        >
          {children}
        </div>
      </Link>
    </article>
  );
}
