import Image from "next/image";
import Link from "next/link";

import { galleryPanels, panelTags, type GalleryPanel } from "@/content/home-gallery";
import type { CaseStudy } from "@/content/types";

/**
 * ProjectGallery — the four featured projects as large stacking panels.
 *
 * Brief of 2026-11-01, referencing oterhi.me: nearly full-width panels, one
 * project each, rounded, strong imagery, quiet tags and metadata, a prominent
 * title with a concise description, and a subtle stacking effect on scroll.
 * The reference's presentation principles, this portfolio's own type, colour
 * and voice.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component. The stack is `position: sticky` and increasing z-index;
 * the recede is a scroll-driven CSS animation behind `@supports`, so a
 * browser without `animation-timeline` gets a plain, correct sticky stack
 * rather than a broken one. Hover is a transition. Nothing here hijacks
 * scrolling, and there is no carousel, no observer and no dependency.
 *
 * ── One link per panel ────────────────────────────────────────────────────
 * The whole card is a single anchor, so a keyboard user gets four stops for
 * four projects and no nested interactive elements. The arrow and the tags
 * are decorative inside it; the accessible name comes from the panel's own
 * heading, description and metadata, which is why the "View case study"
 * text stays real text and not an aria-label.
 *
 * ── Readability before overlap ────────────────────────────────────────────
 * Each panel's sticky offset steps down a little per index, so a covered
 * panel keeps a visible top edge rather than disappearing, and the travel
 * is set by padding below each panel rather than by negative margins: the
 * next panel begins its climb only once the current one has been fully in
 * view. Title, description and link sit inside the card's own bottom
 * padding, above the point where the following panel starts to cover it.
 *
 * ── Mobile ────────────────────────────────────────────────────────────────
 * Below `md` the stack is switched off entirely in CSS: plain vertically
 * stacked cards, no sticky, no scale, no dim, no blur. The brief asked for
 * that, and a 70svh sticky panel on a phone leaves no room to read.
 */

export interface GalleryStudies {
  [slug: string]: CaseStudy;
}

export function ProjectGallery({ studies }: { studies: GalleryStudies }) {
  const panels = galleryPanels
    .map((panel) => ({ panel, study: studies[panel.slug] }))
    .filter((entry): entry is { panel: GalleryPanel; study: CaseStudy } =>
      Boolean(entry.study),
    );

  return (
    <ol className="gallery-stack mt-10 lg:mt-12">
      {panels.map(({ panel, study }, index) => (
        <li
          key={panel.slug}
          className="gallery-panel"
          style={{ ["--panel-index" as string]: index, zIndex: index + 1 }}
        >
          <Link
            href={panel.href}
            className="gallery-card group/panel block overflow-hidden rounded-[20px] bg-paper ring-1 ring-line focus-visible:outline-offset-4 lg:rounded-[26px]"
          >
            {/* A definite height from `md` up, so every panel comes to rest
                at the same size and the stack reads as one object changing
                rather than as cards of random height. The height itself is
                `--panel-h` in globals.css, shared with the panel box that
                provides the sticky travel, so the two cannot drift apart.
                On a phone the card is content-height and the cover carries a
                fixed aspect instead. */}
            <div className="gallery-card-inner relative flex flex-col">
              {/* ── The cover, visually dominant ── */}
              <div
                className={[
                  "relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:aspect-auto md:min-h-0 md:flex-1",
                  panel.cover?.accent === "sage" && "gallery-wash-sage",
                  panel.cover?.accent === "blue" && "gallery-wash-blue",
                  panel.cover?.accent === "clay" && "gallery-wash-clay",
                  !panel.cover && `gallery-wash-${panel.accent}`,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {panel.cover ? (
                  /* The image sits in an absolutely-positioned frame rather
                     than in flow. A percentage height on a flow image
                     resolves against an auto-height parent as auto, which
                     let every image set its own panel height — the four came
                     out 714px to 1107px tall, against a brief asking for a
                     consistent 70–85svh. The frame's insets are the
                     breathing room a contained screenshot needs; a `cover`
                     image is flush to the edges. */
                  <div
                    className={
                      panel.cover.fit === "contain"
                        ? "absolute inset-4 sm:inset-7 lg:inset-10"
                        : "absolute inset-0"
                    }
                  >
                    <Image
                      src={panel.cover.src}
                      alt={panel.cover.alt}
                      width={panel.cover.width}
                      height={panel.cover.height}
                      sizes="(min-width: 1536px) 86rem, (min-width: 768px) 92vw, 94vw"
                      /* The first panel's cover is above the fold on a tall
                         desktop, so it is fetched with priority (which
                         implies eager). Everything below it is lazy. */
                      {...(index === 0 ? { priority: true } : { loading: "lazy" as const })}
                      className={[
                        "gallery-cover h-full w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover/panel:scale-[1.02] group-focus-visible/panel:scale-[1.02]",
                        panel.cover.fit === "contain" ? "object-contain" : "object-cover",
                      ].join(" ")}
                      style={
                        panel.cover.fit === "cover"
                          ? ({
                              ["--cover-pos" as string]: panel.cover.position ?? "50% 50%",
                              ["--cover-pos-mobile" as string]:
                                panel.cover.positionMobile ??
                                panel.cover.position ??
                                "50% 50%",
                            } as React.CSSProperties)
                          : undefined
                      }
                    />
                  </div>
                ) : (
                  /* No screen exists for this project. The panel says so in
                     its own words rather than showing a stand-in, because a
                     fabricated interface for a real employer's product is the
                     one thing here that could not be defended. */
                  <div className="flex h-full flex-col items-center justify-center gap-7 px-6 py-12">
                    {panel.mark ? (
                      <Image
                        src={panel.mark.src}
                        alt={panel.mark.alt}
                        width={panel.mark.width}
                        height={panel.mark.height}
                        sizes="12rem"
                        loading="lazy"
                        className="h-auto w-[8.5rem] opacity-70 sm:w-[10rem]"
                      />
                    ) : null}
                    <p className="max-w-[30ch] text-center text-body leading-relaxed text-charcoal-muted">
                      {panel.noCoverNote}
                    </p>
                  </div>
                )}

                {/* Quiet metadata over the cover. Tags left, year right. */}
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6 lg:p-7">
                  <ul className="flex flex-wrap gap-2">
                    {panelTags(study).map((tag) => (
                      <li
                        key={tag}
                        className="label-type rounded-full bg-ivory/85 px-3 py-1.5 text-charcoal-soft ring-1 ring-line"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="label-type shrink-0 rounded-full bg-ivory/85 px-3 py-1.5 text-charcoal-soft ring-1 ring-line">
                    {study.year}
                  </p>
                </div>
              </div>

              {/* ── The text block, on the panel's own surface ──
                  Deliberately not overlaid on the image: a gradient scrim
                  behind four lines of text over a screenshot is where
                  contrast quietly fails, and these screens are pale. */}
              <div className="relative border-t border-line bg-paper px-5 pb-6 pt-5 sm:px-7 sm:pb-7 lg:px-9 lg:pb-8 lg:pt-6">
                <div className="flex flex-col gap-x-10 gap-y-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="lg:max-w-[62%]">
                    <h3 className="font-display text-h2 leading-tight text-charcoal lg:text-[clamp(1.75rem,2.6vw,2.6rem)]">
                      <span className="link-underline">{panel.name ?? study.title}</span>
                    </h3>
                    <p className="mt-2.5 max-w-[56ch] text-body leading-snug text-charcoal-soft">
                      {study.premise}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 lg:items-end">
                    {study.card ? (
                      <p className="label-type text-charcoal-muted lg:text-right">
                        {study.card.ownership} · {study.card.reached}
                      </p>
                    ) : null}
                    <p className="label-type inline-flex min-h-11 items-center gap-2 text-blue-deep">
                      <span className="link-underline">View case study</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover/panel:translate-x-1 group-hover/panel:-translate-y-0.5 group-focus-visible/panel:translate-x-1 group-focus-visible/panel:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
