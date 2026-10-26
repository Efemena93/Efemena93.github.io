import Link from "next/link";

import { ProjectSymbol, type SymbolName } from "./ProjectSymbol";

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
 * ── Where they appear ─────────────────────────────────────────────────────
 * Governed by where there is genuinely empty space, measured rather than
 * assumed:
 *
 *   · Below `md`, none. A phone hero has no periphery: anything drifting
 *     there would sit under the introduction or squeeze it. The work section
 *     is one short scroll away and every project is linked there.
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

interface FloatingSymbol {
  name: SymbolName;
  /** Where it goes, and what it is called when announced. */
  href: string;
  label: string;
  position: string;
  /** Which side the title sits on, so it never runs off-screen. */
  labelSide: string;
  size: string;
  visibility: string;
  animation: string;
  rotate: string;
  tone: string;
}

const SYMBOLS: FloatingSymbol[] = [
  {
    name: "bicycle",
    href: "/work/iot-venture",
    label: "IoT Venture, It's My Bike",
    position: "left-[2%] top-[38%]",
    labelSide: "left-full ml-3",
    size: "h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20",
    visibility: "hidden min-[1400px]:grid",
    animation: "float-a",
    rotate: "-6deg",
    tone: "text-sage-deep",
  },
  {
    name: "wand",
    href: "/work/merlin-mines",
    label: "SpellCarver",
    position: "right-[4%] top-[16%] xl:right-[7%]",
    labelSide: "right-full mr-3",
    size: "h-14 w-14 xl:h-16 xl:w-16",
    visibility: "grid",
    animation: "float-b",
    rotate: "8deg",
    tone: "text-amber",
  },
  {
    name: "garment",
    href: "/work/zalando",
    label: "Zalando",
    position: "left-[3%] bottom-[14%]",
    labelSide: "left-full ml-3",
    size: "h-14 w-14 xl:h-16 xl:w-16",
    visibility: "hidden min-[1400px]:grid",
    animation: "float-c",
    rotate: "4deg",
    tone: "text-blue-deep",
  },
  {
    name: "glasses",
    href: "/work/hearease",
    label: "HearEase",
    position: "right-[8%] bottom-[20%] xl:right-[12%]",
    labelSide: "right-full mr-3",
    size: "h-12 w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]",
    visibility: "grid",
    animation: "float-d",
    rotate: "-3deg",
    tone: "text-clay-deep",
  },
];

export function FloatingSymbols() {
  return (
    /* The layer itself stays pointer-events-none and each link turns pointer
       events back on, so the empty space between the four objects never
       intercepts a click meant for the text underneath. It renders after the
       hero's content and carries z-10, because the content's own container is
       positioned: in DOM order alone the container painted over the two
       right-hand objects and swallowed their clicks entirely. */
    <div className="pointer-events-none absolute inset-0 z-10 hidden select-none md:block">
      {SYMBOLS.map((symbol) => (
        <Link
          key={symbol.name}
          href={symbol.href}
          aria-label={symbol.label}
          className={`studio-symbol group/sym pointer-events-auto absolute min-h-11 min-w-11 place-items-center rounded-full p-2 focus-visible:outline-offset-4 ${symbol.visibility} ${symbol.position}`}
        >
          <span
            aria-hidden="true"
            className={`drifting block ${symbol.tone} opacity-[0.22] transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover/sym:opacity-95 group-focus-visible/sym:opacity-95`}
            style={{ rotate: symbol.rotate, animationName: symbol.animation }}
          >
            <ProjectSymbol name={symbol.name} className={symbol.size} strokeWidth={1.25} />
          </span>

          {/* The project's name, on hover and on focus. aria-hidden because
              it repeats the link's accessible name. */}
          <span
            aria-hidden="true"
            className={`label-type pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1.5 text-charcoal-soft opacity-0 shadow-[var(--shadow-object)] transition-opacity duration-300 ease-[var(--ease-out-soft)] group-hover/sym:opacity-100 group-focus-visible/sym:opacity-100 ${symbol.labelSide}`}
          >
            {symbol.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
