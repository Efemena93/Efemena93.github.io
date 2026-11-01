import Image from "next/image";
import Link from "next/link";

import { Container, Eyebrow } from "@/components/primitives";
import { projectImages } from "@/content/project-images";
import type { CaseStudy } from "@/content/types";

import { ProjectGallery } from "./ProjectGallery";

/**
 * StudioScene — section 02, the desk the work sits on.
 *
 * Revised for the floating-studio homepage: the introduction has moved out to
 * StudioHero and taken the whole first viewport with it, so this section now
 * begins below the fold, under its own heading, and contains nothing but
 * work. That separation is the point of the revision — the studio is the
 * experience, the projects are discovered after it.
 *
 * ── Two tiers, not seven equals ───────────────────────────────────────────
 * Selected work is the four featured projects: IoT Venture, SpellCarver,
 * Zalando Plus, HearEase. They get the artifacts, the space and the staggered
 * composition. The three self-directed and course projects follow in "More
 * explorations", a compact row that is plainly subordinate.
 *
 * Demoted is not hidden. Each exploration keeps its route, its images, its
 * place in /work and in the sitemap, and its position in next/previous
 * navigation. Seven projects at equal weight asked a visitor to rank them;
 * four at full size and three in a row does the ranking for them, which is
 * the job of a portfolio rather than of its reader.
 *
 * ── The gallery, revised 2026-11-01 ──────────────────────────────────────
 * The featured four were a staggered asymmetric grid of bespoke artifact
 * illustrations. They are now four large stacking panels of real project
 * imagery, in the order IoT, HearEase, SpellCarver, Zalando, per the brief
 * of 2026-11-01 referencing oterhi.me's project presentation.
 *
 * What a panel shows lives in `src/content/home-gallery.ts`; the stack is
 * CSS in `globals.css`. Nothing in either is new copy — every string comes
 * from the case study the panel links to, so a correction made once reaches
 * both places.
 *
 * The artifact components (IotVentureArtifact, MerlinMonitorArtifact,
 * ZalandoBlueprintArtifact, HearEaseArtifact) are no longer rendered here.
 * They are left in the tree rather than deleted: they are the only drawn
 * representation of Zalando's service blueprint and HearEase's prototype
 * that this repository has, and the gallery may yet want one where a project
 * has no screen. Nothing imports them now.
 *
 * DOM order is visual order at every breakpoint, so what a keyboard or
 * screen-reader user meets matches what a sighted user reads. No `order-*`
 * utility reshuffles anything here.
 *
 * ── Zero client JavaScript ────────────────────────────────────────────────
 * Server component throughout. Illumination and the 2–4px lift are CSS on
 * `group-hover` / `group-focus-within`. Nothing follows the pointer, so
 * keyboard and touch get the identical experience.
 */

export interface StudioArtifacts {
  iotVenture: CaseStudy;
  merlinMines: CaseStudy;
  zalando: CaseStudy;
  hearEase: CaseStudy;
  oliveIlive: CaseStudy;
  vocHub: CaseStudy;
  virtualBuddy: CaseStudy;
}

export function StudioScene({ artifacts }: { artifacts: StudioArtifacts }) {
  const { iotVenture, merlinMines, zalando, hearEase, oliveIlive, vocHub, virtualBuddy } =
    artifacts;

  const explorations = [oliveIlive, vocHub, virtualBuddy];

  return (
    <div className="relative border-t border-line bg-paper">
      {/* The transition out of the hero: the room's light falls away and the
          work surface begins. Decorative, opt-out aware. */}
      <div
        aria-hidden="true"
        className="atmosphere pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-charcoal) 5%, transparent) 0%, transparent 100%)",
        }}
      />

      <Container className="relative pb-16 pt-10 sm:pt-12 lg:pb-24 lg:pt-14">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 lg:mb-10">
          <div>
            {/* The heading stays even though the blurb under it has gone: the
                section is labelled by this id, and removing it would leave the
                work region with no accessible name. */}
            <Eyebrow as="h2" id="selected-work-heading">
              Selected work
            </Eyebrow>
          </div>
          <Link href="/work" className="link-underline label-type text-charcoal-soft">
            View all work →
          </Link>
        </div>

        {/* ── The four featured projects, as stacking panels ──
            One project per panel, in the order the brief set: IoT, HearEase,
            SpellCarver, Zalando. What each panel shows is declared in
            `src/content/home-gallery.ts`; the stack itself is CSS. */}
        <ProjectGallery
          studies={{
            "iot-venture": iotVenture,
            hearease: hearEase,
            "merlin-mines": merlinMines,
            zalando,
          }}
        />

        {/* ── More explorations ──
            Deliberately a different shape from everything above: a row, not a
            scene. No artifact illustrations, smaller type, one line each. The
            contrast is the message — these are real projects worth reading,
            and they are not what this portfolio is arguing. */}
        <div className="mt-24 border-t border-line pt-14 lg:mt-28 lg:pt-16">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <Eyebrow as="h3" id="more-explorations-heading">
                More explorations
              </Eyebrow>
              <p className="mt-3 max-w-[48ch] text-small leading-relaxed text-charcoal-soft">
                Self-directed and course projects, kept because the thinking in them
                still holds up.
              </p>
            </div>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {explorations.map((study, i) => (
              <ExplorationCard key={study.slug} study={study} index={5 + i} />
            ))}
          </ul>
        </div>

      </Container>
    </div>
  );
}

/**
 * One exploration: a thumbnail where a real one exists, a name, a line.
 *
 * Image only where one exists. VirtualBuddy has no approved screen, so it
 * renders an empty labelled frame: a stand-in illustration on the homepage
 * is worse than no image at all, because it dresses an empty slot as a
 * screen. The frame holds the row's baseline and says why it is empty.
 *
 * One link per card, named by its own contents, so a keyboard user gets three
 * stops here rather than six.
 */
function ExplorationCard({ study, index }: { study: CaseStudy; index: number }) {
  const image = projectImages[study.slug];
  const showImage = Boolean(image);

  return (
    <li>
      <Link
        href={`/work/${study.slug}`}
        className="group/exp block rounded focus-visible:outline-offset-4"
      >
        <p className="label-type text-charcoal-muted">{String(index).padStart(2, "0")}</p>

        {showImage ? (
          /* `contain`, not `cover`. These are presentation mockups of whole
             devices, and cropping one to a 160px band from the top shows
             three phone notches. The frame is a little taller than it was
             and carries a faint wash, so the two covers that keep their
             transparency sit on something rather than on nothing. */
          <div className="mt-3 overflow-hidden rounded-md bg-ivory ring-1 ring-line">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
              className="h-48 w-full object-contain p-3 opacity-90 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover/exp:opacity-100 group-focus-visible/exp:opacity-100"
            />
          </div>
        ) : (
          /* An empty frame, not a stand-in picture. It holds the row's
             baseline so the card without a screen does not read as a
             rendering fault, and it says plainly why it is empty rather
             than dressing the gap with an illustration. */
          <div className="mt-3 flex h-40 items-center justify-center rounded-md border border-dashed border-line px-4">
            <p className="label-type text-center text-charcoal-muted">
              No approved screen yet
            </p>
          </div>
        )}

        <h4 className="mt-4 font-display text-h4 text-charcoal">
          <span className="link-underline">{study.title}</span>
        </h4>
        <p className="mt-1.5 text-small leading-snug text-charcoal-soft">
          {study.problemArea}
        </p>
        <p className="label-type mt-3 inline-flex min-h-11 items-center gap-2 text-blue-deep">
          <span className="link-underline">View project</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover/exp:translate-x-1 group-focus-visible/exp:translate-x-1"
          >
            →
          </span>
        </p>
      </Link>
    </li>
  );
}

/** Ambient labels — a statement of what the room is for, not a live status. */
export function StudioAmbient() {
  const words = ["Researching", "Designing", "Testing", "Reflecting"];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <p
        aria-hidden="true"
        className="label-type flex flex-wrap gap-x-3 gap-y-1 text-charcoal-muted"
      >
        {words.map((word, i) => (
          <span key={word} className="flex items-center gap-3">
            {word}
            {i < words.length - 1 ? (
              <span className="inline-block h-px w-4 bg-line-strong" />
            ) : null}
          </span>
        ))}
      </p>
      <Link href="/work" className="link-underline label-type text-charcoal-soft">
        View all work →
      </Link>
    </div>
  );
}
