import Link from "next/link";

import { PROJECT_OBJECTS } from "@/content/project-objects";

import { ProjectSymbol } from "./ProjectSymbol";

/**
 * StudioObjectRow: the four studio objects as a labelled row, for phones.
 *
 * A phone hero has no periphery. Anything drifting in it sits on top of the
 * introduction or squeezes it, so the objects do not float below `md`. They
 * become a compact row of four chips instead: same four links, same order,
 * same single list in `content/project-objects`, but labelled outright rather
 * than discovered by hovering, since there is no hover to discover them with.
 *
 * Short names, not the full accessible names. "IoT Venture, It's My Bike"
 * wraps to three lines in a chip this size. The accessible name stays
 * complete via `aria-label`, so what is announced is not what is abbreviated.
 *
 * Hidden above `md`, where `FloatingSymbols` takes over, and hidden on short
 * viewports, where the introduction and the scroll cue need the room more
 * than a second route to the work section that is already one scroll below.
 */

const SHORT_LABEL: Record<string, string> = {
  bicycle: "IoT Venture",
  wand: "SpellCarver",
  garment: "Zalando Plus",
  glasses: "HearEase",
};

export function StudioObjectRow() {
  return (
    <ul className="mt-9 flex flex-wrap gap-2 md:hidden [@media(max-height:620px)]:hidden">
      {PROJECT_OBJECTS.map((object) => (
        <li key={object.name}>
          <Link
            href={object.href}
            aria-label={object.label}
            className="flex min-h-11 items-center gap-2 rounded-full border border-[var(--studio-rule)] bg-[rgba(20,16,13,0.42)] px-3.5 text-[var(--studio-ink)] transition-colors duration-300 ease-[var(--ease-out-soft)] focus-visible:outline-offset-4 active:bg-[rgba(20,16,13,0.62)]"
          >
            <ProjectSymbol name={object.name} className="h-5 w-5 shrink-0" strokeWidth={1.4} />
            <span className="label-type">{SHORT_LABEL[object.name]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
