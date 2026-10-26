import { Container } from "@/components/primitives";

import { FloatingSymbols } from "./FloatingSymbols";
import { StudioHour } from "./StudioHour";
import { StudioObjectRow } from "./StudioObjectRow";

/**
 * StudioHero, section 01: the studio itself, as a room you are looking into.
 *
 * The rule this component exists to enforce: nothing from the work section
 * appears here. No cards, no thumbnails, no project names in text. Someone
 * arriving gets the room and an introduction, and finds the work by
 * scrolling, which is the point of calling the page a studio rather than a
 * list.
 *
 * ── The photograph ────────────────────────────────────────────────────────
 * An `img` rather than a CSS background, for three reasons that matter here:
 * `srcset` lets the browser pick a width, `fetchPriority="high"` makes it the
 * largest contentful paint rather than something discovered late, and a
 * `picture` element can art-direct, which this needs. A phone does not get
 * the landscape frame squeezed into a portrait box; it gets a crop made for
 * it, holding the monitor, the desk and the shelving, and dropping the
 * reading corner, which is the part a phone has no room for.
 *
 * The source is 1536px wide, so nothing is generated above that. Upscaling
 * would add file size and no detail.
 *
 * ── Why the scrim is shaped the way it is ─────────────────────────────────
 * Measured, not guessed. Across the frame the mean luminance is 110 of 255
 * with a standard deviation around 56, which is to say: mid-toned and busy
 * everywhere. No region of this photograph carries text unaided.
 *
 * The darkest and calmest area is the lower left, the desk front, at mean 83.
 * So the introduction sits there and the scrim is an ellipse anchored to that
 * corner rather than a blanket over the whole image. The right side, the
 * window, the armchair and the reading corner, stays close to its own
 * brightness, which is what the room is for.
 *
 * ── Height ────────────────────────────────────────────────────────────────
 * `calc(100svh - var(--header-h))`. `svh` because a mobile toolbar makes `vh`
 * taller than the visible area; minus the header because it is sticky and
 * occupies flow above this section, so a full `100svh` pushes its own bottom
 * edge below the fold by exactly the header's height.
 */

export function StudioHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="studio-hero relative flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden pb-10 pt-12 sm:pt-16 lg:pb-12 lg:pt-14"
    >
      {/* The room. Decorative: everything it conveys is also written in the
          introduction, so it carries an empty alt rather than a description
          of furniture. It is an imagined studio, not a photograph of a real
          office, and no copy on this page claims otherwise. */}
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet="/studio/studio-room-portrait-480.webp 480w, /studio/studio-room-portrait-720.webp 720w"
          sizes="100vw"
        />
        <source
          srcSet="/studio/studio-room-768.webp 768w, /studio/studio-room-1152.webp 1152w, /studio/studio-room-1536.webp 1536w"
          sizes="100vw"
        />
        <img
          src="/studio/studio-room-1536.webp"
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
        />
      </picture>

      {/* The scrim, in three layers: a uniform base that settles the whole
          room, a lift from the floor, and an ellipse anchored to the corner
          the introduction sits in. The right of the room stays the brightest
          part of the frame, so the window and the reading corner still read
          as the light source. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            // Localised: heaviest in the corner the introduction occupies.
            "radial-gradient(ellipse 95% 80% at 6% 94%, rgba(20,16,13,0.88) 0%, rgba(20,16,13,0.72) 30%, rgba(20,16,13,0.42) 54%, rgba(20,16,13,0.12) 74%, rgba(20,16,13,0) 88%)",
            // Grounds the floor, so the lower edge does not glare.
            "linear-gradient(to top, rgba(20,16,13,0.55) 0%, rgba(20,16,13,0.16) 38%, rgba(20,16,13,0) 62%)",
            // Uniform base. Takes the whole room down far enough that the
            // drifting objects read against the window and the pinboard as
            // well as against the wall, and turns the photograph into a
            // lit room rather than an image competing with the text.
            "linear-gradient(rgba(20,16,13,0.52), rgba(20,16,13,0.52))",
          ].join(", "),
        }}
      />

      <Container className="relative flex flex-1 flex-col justify-end">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="label-type eyebrow-tick mb-5 text-[var(--studio-ink-muted)]">
              Product + Interaction Designer
            </p>

            <h1
              id="hero-heading"
              className="max-w-[13ch] font-display text-display-2 leading-[0.98] text-[var(--studio-ink)] xl:text-display-1 xl:leading-[0.95]"
            >
              Efemena Udezi
            </h1>

            <p className="mt-6 max-w-[46ch] text-lead text-[var(--studio-ink-soft)]">
              I design thoughtful digital experiences for everyday life.
            </p>

            <p className="mt-8">
              <a
                href="#selected-work"
                className="link-underline label-type inline-flex min-h-11 items-center gap-2 text-[var(--studio-ink)]"
              >
                Explore my work
                <span aria-hidden="true">↓</span>
              </a>
            </p>

            {/* The same four projects as the drifting objects, for phones,
                where nothing drifts. */}
            <StudioObjectRow />
          </div>
        </div>

        {/* The foot of the room. The middle line is not decoration: four
            projects are reachable by their object and nothing else on the
            page says so, which would make a discoverable affordance an
            undiscoverable one. Shown only from md, where the objects are. */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[var(--studio-rule)] pt-5 [@media(max-height:620px)]:hidden">
          <p className="label-type hidden text-[var(--studio-ink-muted)] md:block">
            Some objects in this room are projects. Try one.
          </p>
          <StudioHour />
        </div>
      </Container>

      <FloatingSymbols />
    </section>
  );
}
