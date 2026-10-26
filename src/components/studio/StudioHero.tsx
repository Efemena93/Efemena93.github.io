import { Container, LinkButton } from "@/components/primitives";
import { site } from "@/content/site";

import { FloatingSymbols } from "./FloatingSymbols";
import { StudioHour } from "./StudioHour";

/**
 * StudioHero — section 01, and the whole of the first viewport.
 *
 * The rule this component exists to enforce: nothing from the work section
 * appears here. No cards, no thumbnails, no project names. Someone arriving
 * gets the introduction and the room it sits in, and finds the work by
 * scrolling — which is the point of calling the page a studio rather than a
 * list.
 *
 * ── Height ────────────────────────────────────────────────────────────────
 * `min-h-[calc(100svh-var(--header-h))]` rather than `100vh`: on mobile browsers the dynamic
 * toolbar makes `vh` taller than the visible area, so a `100vh` hero is
 * always slightly cut off and the scroll cue sits below the fold — exactly
 * the element that must not. `svh` measures the small viewport, so the cue is
 * visible at rest. The layout's sticky header is accounted for by the top
 * padding rather than by subtracting from the height, which keeps the
 * calculation honest when the header wraps.
 *
 * ── Composition ───────────────────────────────────────────────────────────
 * Asymmetric and deliberately off-centre: the introduction occupies columns
 * 1–7 of a 12-column grid, leaving the right third as negative space for the
 * drifting objects. The eyebrow, the h1, the two paragraphs and the actions
 * form a single left-aligned column with a long measure, so the reading line
 * never crosses the area the symbols move through.
 *
 * ── Order of contents ─────────────────────────────────────────────────────
 * Name and role first, then the h1, then what the practice actually is, then
 * the ways out. A recruiter who reads three lines and leaves has still read
 * the three that matter.
 */

export function StudioHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="studio-hero relative flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden pb-8 pt-12 sm:pt-16 lg:pb-8 lg:pt-12"
    >
      {/* Soft directional light from the upper left, as in the rest of the
          studio. Decorative, and opt-out aware via .atmosphere. */}
      <div
        aria-hidden="true"
        className="atmosphere pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 16% 4%, color-mix(in srgb, var(--color-charcoal) 7%, transparent) 0%, transparent 64%)",
        }}
      />

      <Container className="relative flex flex-1 flex-col">
        <div className="flex flex-1 items-center">
          <div className="grid w-full lg:grid-cols-12">
            <div className="lg:col-span-7 xl:col-span-6">
              <p className="label-type eyebrow-tick mb-6 text-blue-deep">
                Efemena Udezi · {site.hero.eyebrow}
              </p>

              <h1
                id="hero-heading"
                className="max-w-[13ch] font-display text-display-2 leading-[0.98] text-charcoal xl:text-display-1 xl:leading-[0.95]"
              >
                Welcome to my studio.
              </h1>

              <p className="mt-6 max-w-[48ch] text-lead text-charcoal-soft">
                I’m Efemena, a product and interaction designer interested in the signals
                people leave behind: what they do, what they feel and what systems often
                fail to notice.
              </p>
              <p className="mt-4 hidden max-w-[48ch] text-body text-charcoal-soft sm:block [@media(max-height:760px)]:hidden">
                This is where I collect those signals, connect patterns and turn them into
                thoughtful experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LinkButton href="#selected-work">Explore my work</LinkButton>
                <LinkButton href="/resume" variant="outline">
                  Résumé
                </LinkButton>
                <LinkButton href="/contact" variant="outline">
                  Contact
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        {/* The foot of the room: a cue to scroll, an invitation to try the
            objects, and the hour.

            The middle line is not decoration. Four of the projects are
            reachable by their drifting object and nothing else on the page
            says so, which makes a discoverable affordance an undiscoverable
            one. It is shown only from md, where the objects themselves are,
            so it never promises something that is not on screen. */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 [@media(max-height:600px)]:hidden">
          <div aria-hidden="true" className="flex items-center gap-3">
            <span className="relative block h-8 w-px overflow-hidden bg-line lg:h-10">
              <span className="scroll-cue-line absolute inset-0 block bg-charcoal-muted" />
            </span>
            <span className="label-type text-charcoal-muted">Scroll</span>
          </div>

          <p className="label-type hidden text-charcoal-muted md:block">
            Some objects in this room are projects. Try one.
          </p>

          <StudioHour />
        </div>
      </Container>

      <FloatingSymbols />
    </section>
  );
}
