import Link from "next/link";

import { PROJECT_OBJECTS } from "@/content/project-objects";

import { ProjectSymbol } from "./ProjectSymbol";

/**
 * FloatingSymbols, four objects drifting in the studio's peripheral space,
 * each one a way into the project it stands for.
 *
 * ── These are links, so they are built as links ───────────────────────────
 * An earlier version was purely decorative: aria-hidden, no tab stops,
 * pointer-events none. Making them clickable changes the obligations
 * entirely, and a half-measure here is worse than decoration. So:
 *
 *   · Each is a real `next/link`, not a div with a handler. It opens in a new
 *     tab on middle click, it can be copied, and it works before hydration.
 *   · Each carries an accessible name (for example "IoT Venture, It's My
 *     Bike") rather than its drawing, because a line drawing means nothing
 *     announced aloud.
 *   · Each is a tab stop, in the same order as the work section below, with a
 *     visible focus ring. The ring is the one part that never fades.
 *   · The hit area is padded to at least 44 by 44 CSS pixels, which the 48px
 *     drawing alone does not reach once its padding is counted.
 *   · The title appears on hover AND on keyboard focus, never on hover alone.
 *
 * The visible title is `aria-hidden`: it repeats the link's own accessible
 * name, so announcing it would say the project twice. It exists for people
 * who can see the drawing and cannot tell what it refers to.
 *
 * ── Reading against a photograph ──────────────────────────────────────────
 * These used to sit on cream paper and were drawn in the palette's deep
 * tones. On the studio photograph those tones are invisible: a deep sage
 * line over a mid-toned room at 30% opacity is a smudge. Three changes:
 *
 *   · One ink for all four, the same warm off-white as the introduction. Four
 *     different hues over a photograph read as mess rather than as a set, and
 *     a single ink is what makes them look like one hand drew them.
 *   · A soft dark halo behind each. The photograph is busy, and the brightest
 *     thing in it (the window) sits exactly where two of these float. The
 *     halo is a radial fade with no edge, so it reads as shadow in the room
 *     rather than as a button.
 *   · A resting opacity of 0.72 rather than 0.22. They have to be
 *     discoverable: a link nobody can see is not a link.
 *
 * Halo depth is set per object from measured pixels, not chosen by eye. Three
 * of the four sit over dark parts of the room and reach about 5.4:1 against
 * their own backdrop. The wand floats over the window, the brightest region
 * in the frame, and at the shared depth it measured 2.27:1, under the 3:1
 * floor for a graphic that has to be perceivable. Its halo is deeper for that
 * reason alone, which is also why these numbers live in the table rather than
 * in one shared gradient.
 *
 * ── Touch ─────────────────────────────────────────────────────────────────
 * A tablet has the room but no hover, so a hover-only label is a label that
 * device never shows. Under `(hover: none)` both the object and its name rest
 * at full strength, no interaction required. On a phone the objects are not
 * used at all: `StudioObjectRow` carries the same four links as a labelled
 * row, because a phone hero has no periphery to drift in.
 *
 * ── Where they appear ─────────────────────────────────────────────────────
 * Governed by where there is genuinely empty space, measured rather than
 * assumed:
 *
 *   · Below `md`, none. See `StudioObjectRow`.
 *   · From `md`, the two right-hand objects. The introduction's measure tops
 *     out around 48 characters, so the right of the column is free.
 *   · From 1400px, the two left-hand objects join them. The page container
 *     caps at 1240px, so below roughly 1400px there is no left margin and a
 *     left-hand object would overlap the text. This is the one breakpoint
 *     here that is a measurement, not a convention.
 *
 * The left pair stays pinned near the viewport edge rather than stepping
 * inward on wider screens. Each object carries a resting rotation, and a
 * rotated box measures about 13px wider than its nominal size, enough that an
 * inward `xl` offset put the garment's corner into the CTA row at 1440 and
 * the bicycle's into the text at exactly 1400.
 *
 * The vertical anchors clear the two things that now occupy the frame: the
 * sticky header at the top, and the introduction, which is anchored to the
 * bottom-left rather than centred. So the left pair sits above the
 * introduction's cap height, and the right pair spans the open right half.
 *
 * ── Motion ────────────────────────────────────────────────────────────────
 * Each object has its own duration (9.5s to 14s), its own delay and its own
 * translate and rotate pair, so they never beat in time with each other: that
 * synchronisation is what makes drifting decoration read as a carousel. The
 * amplitudes are small, 5 to 13 pixels and 1 to 2.4 degrees, which at these
 * sizes is movement you notice only if you stop and watch. Drift pauses on
 * hover and on focus, so nobody has to chase a moving target with a pointer.
 *
 * Reduced motion is handled globally in globals.css, which clamps every
 * animation to 0.01ms unless the reader has explicitly opted into full
 * motion. These keep their resting transform and simply stop.
 */

/** Presentation per object. Destinations live in `content/project-objects`. */
const PLACEMENT: Record<
  string,
  {
    position: string;
    /** Which side the title sits on, so it never runs off-screen. */
    labelSide: string;
    size: string;
    visibility: string;
    animation: string;
    rotate: string;
    /** Halo depth. Measured per object, not styled by eye: see the note. */
    halo: number;
  }
> = {
  bicycle: {
    position: "left-[2%] top-[26%]",
    labelSide: "left-full ml-3",
    size: "h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20",
    visibility: "hidden min-[1400px]:grid",
    animation: "float-a",
    rotate: "-6deg",
    halo: 0.62,
  },
  wand: {
    position: "right-[4%] top-[18%] xl:right-[7%]",
    labelSide: "right-full mr-3",
    size: "h-14 w-14 xl:h-16 xl:w-16",
    visibility: "grid",
    animation: "float-b",
    rotate: "8deg",
    halo: 0.88,
  },
  garment: {
    position: "left-[3%] top-[48%]",
    labelSide: "left-full ml-3",
    size: "h-14 w-14 xl:h-16 xl:w-16",
    visibility: "hidden min-[1400px]:grid",
    animation: "float-c",
    rotate: "4deg",
    halo: 0.62,
  },
  glasses: {
    position: "right-[8%] top-[52%] xl:right-[12%]",
    labelSide: "right-full mr-3",
    size: "h-12 w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]",
    visibility: "grid",
    animation: "float-d",
    rotate: "-3deg",
    halo: 0.62,
  },
};

export function FloatingSymbols() {
  return (
    /* The layer itself stays pointer-events-none and each link turns pointer
       events back on, so the empty space between the four objects never
       intercepts a click meant for the text underneath. It renders after the
       hero's content and carries z-10, because the content's own container is
       positioned: in DOM order alone the container painted over the two
       right-hand objects and swallowed their clicks entirely. */
    <div className="pointer-events-none absolute inset-0 z-10 hidden select-none md:block">
      {PROJECT_OBJECTS.map((object) => {
        const place = PLACEMENT[object.name];

        return (
          <Link
            key={object.name}
            href={object.href}
            aria-label={object.label}
            className={`studio-symbol group/sym pointer-events-auto absolute min-h-11 min-w-11 place-items-center rounded-full p-2 focus-visible:outline-offset-4 ${place.visibility} ${place.position}`}
          >
            {/* Shadow in the room, not a button. A radial fade with no edge,
                sized past the drawing so the falloff is invisible against the
                photograph. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[190%] w-[190%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover/sym:opacity-100 group-focus-visible/sym:opacity-100"
              style={{
                background: `radial-gradient(circle, rgba(20,16,13,${place.halo}) 0%, rgba(20,16,13,${(
                  place.halo * 0.61
                ).toFixed(2)}) 42%, rgba(20,16,13,${(place.halo * 0.19).toFixed(
                  2,
                )}) 68%, rgba(20,16,13,0) 82%)`,
              }}
            />

            <span
              aria-hidden="true"
              className="drifting relative block text-[var(--studio-ink)] opacity-[0.72] transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover/sym:opacity-100 group-focus-visible/sym:opacity-100 [@media(hover:none)]:opacity-100"
              style={{ rotate: place.rotate, animationName: place.animation }}
            >
              <ProjectSymbol name={object.name} className={place.size} strokeWidth={1.25} />
            </span>

            {/* The project's name and what clicking does, on hover and on
                focus, and resting visible where there is no hover at all.
                aria-hidden because the name repeats the link's accessible
                name and "View project" repeats the fact that it is a link. */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-line bg-paper px-3 py-2 text-left opacity-0 shadow-[var(--shadow-object)] transition-opacity duration-300 ease-[var(--ease-out-soft)] group-hover/sym:opacity-100 group-focus-visible/sym:opacity-100 [@media(hover:none)]:opacity-100 ${place.labelSide}`}
            >
              <span className="label-type block text-charcoal">{object.label}</span>
              <span className="label-type mt-0.5 block text-[0.6875rem] text-charcoal-muted">
                View project
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
