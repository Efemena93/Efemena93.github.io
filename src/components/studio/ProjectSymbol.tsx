/**
 * ProjectSymbol — the four studio objects, drawn as a set.
 *
 * One component, used in two places, which is the whole point: the symbols
 * drifting around the hero are the same drawings that mark the first four
 * project cards below. That is what ties the two halves of the homepage
 * together without repeating a single word of copy.
 *
 * ── Why these are not icons ───────────────────────────────────────────────
 * The first version was built to icon-library spec: 32×32 box, one uniform
 * stroke, round caps, no fills, nothing that disappears below 24px. That
 * specification is exactly what makes Lucide look like Feather look like
 * Material, and four of them in a row read as a set someone installed rather
 * than a set someone drew.
 *
 * So the rules changed, in three ways, none of which is an imperfection for
 * its own sake:
 *
 *   · Two weights per drawing. A heavier contour carries the silhouette and
 *     a lighter line carries the interior detail, which is how a drawn
 *     object is read and how a pictogram never is.
 *   · One solid mark each, placed where the object's weight actually sits:
 *     the bicycle's hub, the brightest point of the wand, the hook of the
 *     hanger, the bridge of the glasses.
 *   · Specific rather than generic subjects. The bicycle has a dropped bar
 *     and a saddle, not two circles and a triangle; the glasses have the
 *     rounded frame of the pair in the HearEase file rather than a symmetric
 *     pictogram.
 *
 * They still share a palette, a box and a construction logic, so they remain
 * a set. They are simply a drawn one.
 *
 * ── Accessibility ─────────────────────────────────────────────────────────
 * Every instance is decorative. The component hard-codes aria-hidden and
 * focusable="false" rather than taking them as props, because there is no
 * correct use of these as meaningful images: each sits beside the project
 * name it belongs to, so announcing it would only repeat that name.
 */

export type SymbolName = "bicycle" | "wand" | "garment" | "glasses";

/**
 * Each symbol is a contour group (heavier), a detail group (lighter) and an
 * optional solid. `strokeWidth` scales the contour; detail is drawn at 0.6 of
 * it and the ratio holds at every size.
 */
interface SymbolDrawing {
  contour: React.ReactNode;
  detail?: React.ReactNode;
  solid?: React.ReactNode;
}

const DRAWINGS: Record<SymbolName, SymbolDrawing> = {
  // IoT Venture, It's My Bike. A bike with a frame, not a diagram of one.
  bicycle: {
    contour: (
      <>
        <circle cx="8" cy="21.5" r="6.2" />
        <circle cx="24" cy="21.5" r="6.2" />
        <path d="M8 21.5 13.2 11.6h6.9l4 9.9" />
      </>
    ),
    detail: (
      <>
        {/* down tube, fork and the dropped bar */}
        <path d="M13.2 11.6h-2.4" />
        <path d="M20.1 11.6 18.3 7.6h-3.1" />
        <path d="M14.6 7.6c-1.5 0-2.4.8-2.6 1.9" />
        {/* saddle */}
        <path d="M11 10.2h3.3" />
        <path d="M16.4 21.5h-3.2" />
      </>
    ),
    solid: (
      <>
        <circle cx="8" cy="21.5" r="1.5" />
        <circle cx="24" cy="21.5" r="1.5" />
      </>
    ),
  },

  // SpellCarver, automation as a cast spell. One star carries the light.
  wand: {
    contour: <path d="M8.4 23.6 20.6 11.4" />,
    detail: (
      <>
        <path d="M7.4 13.2 7.9 14.8l1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5z" />
        <path d="M24.6 18.2l.42 1.25 1.25.42-1.25.42-.42 1.25-.42-1.25-1.25-.42 1.25-.42z" />
        <path d="M20.6 11.4a2.1 2.1 0 0 1 3 0" />
      </>
    ),
    solid: (
      <path d="M21.2 5.4 22.35 8.25 25.2 9.4l-2.85 1.15L21.2 13.4l-1.15-2.85L17.2 9.4l2.85-1.15z" />
    ),
  },

  // Zalando Plus. The hanger alone: at 48px a shirt silhouette loses its
  // shoulders and reads as a house, which is what the first version did.
  garment: {
    contour: (
      <path d="M16 11.4 4.8 19.2a1.55 1.55 0 0 0 .92 2.8h20.56a1.55 1.55 0 0 0 .92-2.8L16 11.4Z" />
    ),
    detail: <path d="M16 11.4a2.65 2.65 0 1 1 2.65-2.65" />,
    solid: <circle cx="18.65" cy="8.75" r="1.35" />,
  },

  // HearEase. Rounded frames, a low bridge, arms that taper back.
  glasses: {
    contour: (
      <>
        <rect x="3.2" y="13.4" width="10.6" height="9.4" rx="4.4" />
        <rect x="18.2" y="13.4" width="10.6" height="9.4" rx="4.4" />
      </>
    ),
    detail: (
      <>
        <path d="M13.8 17.2a3.6 3.6 0 0 1 4.4 0" />
        <path d="M3.2 17.2C3.2 11.8 5.1 9.2 8.4 8.3" />
        <path d="M28.8 17.2c0-5.4-1.9-8-5.2-8.9" />
      </>
    ),
    solid: <path d="M14.4 16.9a3.1 3.1 0 0 1 3.2 0l-.5.95a2.1 2.1 0 0 0-2.2 0z" />,
  },
};

export function ProjectSymbol({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: SymbolName;
  className?: string;
  /** Contour weight. Detail is always drawn at 0.6 of this. */
  strokeWidth?: number;
}) {
  const drawing = DRAWINGS[name];

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeWidth={strokeWidth}>{drawing.contour}</g>
      {drawing.detail ? (
        <g strokeWidth={strokeWidth * 0.6}>{drawing.detail}</g>
      ) : null}
      {drawing.solid ? (
        <g fill="currentColor" stroke="none">
          {drawing.solid}
        </g>
      ) : null}
    </svg>
  );
}
