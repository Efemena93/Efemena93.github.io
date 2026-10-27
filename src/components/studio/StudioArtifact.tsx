import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { projectImages } from "@/content/project-images";
import type { CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

import { ArtifactLabel } from "./ArtifactLabel";
import type { SymbolName } from "./ProjectSymbol";

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
 * ── Where the words come from ─────────────────────────────────────────────
 * A featured project supplies its own homepage description and category in
 * `study.card`. The `subtitle` and `discipline` props are the fallback for
 * projects without one, which is why both remain required.
 *
 * ── The visual is decorative; the text is the content ─────────────────────
 * The SVG scenes are schematic — geometric regions standing in for research
 * material and interface layers. They are `aria-hidden`, and they carry no
 * meaning that is not also written in the label. That is what makes it
 * honest: nothing is lost by not seeing them. A visually-hidden sentence
 * describes what each scene depicts, so a screen-reader user is told what is
 * on the page rather than walked silently past it.
 */

/** A different physical treatment per project, so the six do not share one
 *  frame: layered sheet, upright device, wide crop, pinned wall, fanned cards,
 *  shared workspace. */
const treatment: Record<string, string> = {
  // A wordmark, not a screen. Zalando's interfaces are under NDA, so the
  // logo is the only approved asset — and at screenshot scale it read as
  // the project's strongest visual, which it is not. Sized as the mark it is.
  zalando: "-rotate-1 max-w-[15rem] lg:max-w-[17rem]",
  "iot-venture": "rotate-1 lg:max-w-[28rem]",
  "olive-ilive": "lg:max-w-[46rem]",
  "merlin-mines": "-rotate-2 lg:max-w-[30rem]",
  vochub: "rotate-1 lg:max-w-[32rem]",
  virtualbuddy: "-rotate-1 lg:max-w-[34rem]",
  hearease: "rotate-1 lg:max-w-[30rem]",
};

export function StudioArtifact({
  study,
  index,
  title,
  subtitle,
  discipline,
  /** Plain-language description of the scene, for assistive technology. */
  sceneDescription,
  /**
   * The drifting object from the hero that belongs to this project, repeated
   * here as a quiet identifier. Only the four projects that have one pass it;
   * the rest render without, which is why it is optional rather than keyed
   * off the slug.
   */
  symbol,
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
  symbol?: SymbolName;
  children: ReactNode;
  className?: string;
  raise?: "sm" | "md";
}) {
  const image = projectImages[study.slug];

  // Content wins over markup. A featured project carries its own homepage
  // sentence and category in its case-study file; the props below remain the
  // fallback for the projects that do not.
  const cardDescription = study.card?.description ?? subtitle;
  const cardCategory = study.card?.category ?? discipline;

  return (
    <article
      className={cx(
        "group relative flex h-full flex-col",
        raise === "md" && "lg:-mt-24",
        raise === "sm" && "lg:-mt-20",
        className,
      )}
    >
      {/* No aria-label here, deliberately.
          An aria-label REPLACES the element's accessible name rather than
          adding to it, so the previous one ("<title>, <subtitle>. Open the
          full case study.") hid the rest of the label from screen-reader
          users while it stayed visible on screen, the visible text and the
          announced name disagreed. That is axe's
          `label-content-name-mismatch` (serious, WCAG 2.5.3), and it fired on
          all six cards at every breakpoint. Letting the link be named by its
          own contents keeps the two in step: index, project name, subtitle,
          and the visible "View project" action all read out, in that order. */}
      <Link
        href={`/work/${study.slug}`}
        className="flex flex-1 flex-col rounded focus-visible:outline-offset-4"
      >
        <ArtifactLabel
          study={study}
          index={index}
          title={title ?? study.title}
          subtitle={cardDescription}
          discipline={cardCategory}
          symbol={symbol}
        />

        {/* The object itself, pushed to the bottom of the column so that all
            three sit on the same desk line however tall their labels are. */}
        <div
          className={cx(
            "artifact-stage relative mt-auto pt-6",
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
          {image ? (
            <figure className={cx("mx-auto max-w-[34rem]", treatment[study.slug])}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-lg shadow-[var(--shadow-object)] ring-1 ring-line"
              />

            </figure>
          ) : (
            children
          )}
        </div>
      </Link>

      {/* Text equivalent for the illustration. Outside the link on purpose:
          inside it, this paragraph became part of the link's accessible name
          and every card announced a paragraph of scene description before the
          reader reached the action. Here it is still in the accessibility
          tree, read in document order, and attributed to the artifact rather
          than to the link. */}
      <p className="sr-only">{sceneDescription}</p>
    </article>
  );
}
