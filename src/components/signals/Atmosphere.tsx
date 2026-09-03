/**
 * Atmosphere — the ambient colour of the original Simplymenah landing page,
 * ported onto this build.
 *
 * Three pieces, all purely decorative and all `aria-hidden`:
 *
 *   · Orbs — large, heavily blurred violet and teal fields that drift very
 *     slowly. They are what makes the near-black ground feel lit rather than
 *     flat.
 *   · Moon — a lit sphere with a breathing bloom, top-right of the hero.
 *   · Ring — a hairline circle around it, expanding on the same 5s cycle.
 *
 * ── Server component, zero JavaScript ─────────────────────────────────────
 * The original animated these with JS. Everything here is CSS keyframes and
 * fixed positioning, so it costs nothing in the client bundle.
 *
 * ── How it opts out ───────────────────────────────────────────────────────
 * Every element carries `.atmosphere`, which globals.css removes entirely
 * under prefers-reduced-transparency, prefers-contrast: more, forced-colours
 * and print. Reduced motion is handled by the global animation kill-switch,
 * which leaves the colour in place and stops the drift — the right outcome,
 * since the glow is identity and the movement is decoration.
 *
 * Nothing here is ever positioned where text will land: the orbs are blurred
 * to 60px and sit at low opacity behind the content, and the moon lives in
 * the top-right margin of the hero, outside the headline column.
 */

const ORBS = [
  {
    className: "left-[-10%] top-[-8%] h-[46vw] w-[46vw] max-h-[520px] max-w-[520px]",
    background: "radial-gradient(circle, rgba(124,58,237,0.30) 0%, transparent 68%)",
    duration: "26s",
    delay: "0s",
  },
  {
    className: "right-[-12%] top-[22%] h-[38vw] w-[38vw] max-h-[440px] max-w-[440px]",
    background: "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 68%)",
    duration: "34s",
    delay: "-8s",
  },
  {
    className: "bottom-[-14%] left-[24%] h-[34vw] w-[34vw] max-h-[400px] max-w-[400px]",
    background: "radial-gradient(circle, rgba(91,33,182,0.24) 0%, transparent 70%)",
    duration: "30s",
    delay: "-16s",
  },
];

/**
 * Site-wide ambient field. Rendered once, in the layout, behind everything.
 * `fixed` rather than absolute so it does not lengthen any page or create a
 * scroll container.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="atmosphere pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {ORBS.map((orb, i) => (
        <span
          key={i}
          className={`absolute block rounded-full blur-[60px] ${orb.className}`}
          style={{
            background: orb.background,
            animation: `orb-float ${orb.duration} ease-in-out ${orb.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * The moon. Hero only, and only where there is margin to put it — below
 * 1024px the hero column uses the full width, so it would sit behind text.
 */
export function Moon() {
  return (
    <div
      aria-hidden="true"
      className="atmosphere pointer-events-none absolute right-[6%] top-[14%] hidden lg:block"
    >
      <span
        className="absolute left-1/2 top-1/2 block h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/25"
        style={{ animation: "moon-ring 5s ease-in-out infinite" }}
      />
      <span
        className="block h-[100px] w-[100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #C4B5FD 0%, #7C3AED 45%, #3B0764 75%, rgba(59,7,100,0) 100%)",
          animation: "moon-glow 5s ease-in-out infinite",
        }}
      />
    </div>
  );
}
