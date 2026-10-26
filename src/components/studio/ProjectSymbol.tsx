/**
 * ProjectSymbol — the four studio objects, as one consistent line set.
 *
 * One component, used in two places, which is the whole point: the symbols
 * drifting around the hero are the same drawings that mark the first four
 * project cards below. That is what ties the two halves of the homepage
 * together without repeating a single word of copy.
 *
 * Drawing rules, kept identical across all four so they read as a set:
 *   · 32×32 viewBox, stroked not filled, `currentColor`.
 *   · 1.5 stroke width at the default size, round caps and joins.
 *   · No fills, no gradients, no detail that disappears below 24px.
 *
 * Every instance is decorative. The component hard-codes aria-hidden and
 * focusable="false" rather than taking them as props, because there is no
 * correct use of these as meaningful images: each one sits beside the project
 * name it belongs to, so announcing it would only repeat that name.
 */

export type SymbolName = "bicycle" | "wand" | "garment" | "glasses";

const PATHS: Record<SymbolName, React.ReactNode> = {
  // IoT Venture — It's My Bike.
  bicycle: (
    <>
      <circle cx="8" cy="22" r="6" />
      <circle cx="24" cy="22" r="6" />
      <path d="M8 22 13 12h7l4 10" />
      <path d="M13 12h-2" />
      <path d="M20 12 18 8h-3" />
      <path d="M16 22h-3" />
    </>
  ),
  // SpellCarver — automation as a cast spell.
  wand: (
    <>
      <path d="M9 23 23 9" />
      <path d="M20 6.5 21 9l2.5 1-2.5 1-1 2.5-1-2.5L16.5 10l2.5-1z" />
      <path d="M7.5 13.5 8 15l1.5.5L8 16l-.5 1.5L7 16l-1.5-.5L7 15z" />
      <path d="M24 18.5l.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4z" />
    </>
  ),
  // Zalando — a hanger. Drawn as the hanger alone rather than a garment on
  // one: at 48px and 20% opacity a shirt silhouette loses its shoulders and
  // reads as a house, which is what the first version did.
  garment: (
    <>
      <path d="M16 11.5a2.75 2.75 0 1 1 2.75-2.75" />
      <path d="M16 11.5 4.6 19.4a1.6 1.6 0 0 0 .95 2.9h20.9a1.6 1.6 0 0 0 .95-2.9L16 11.5Z" />
    </>
  ),
  // HearEase — the glasses themselves.
  glasses: (
    <>
      <circle cx="8.5" cy="18" r="5" />
      <circle cx="23.5" cy="18" r="5" />
      <path d="M13.5 17.4a4 4 0 0 1 5 0" />
      <path d="M3.5 18C3.5 12 5.5 9 9 8" />
      <path d="M28.5 18c0-6-2-9-5.5-10" />
    </>
  ),
};

export function ProjectSymbol({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: SymbolName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}
