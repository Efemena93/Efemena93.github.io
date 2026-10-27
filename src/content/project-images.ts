/**
 * Homepage artifact images, keyed by case-study slug.
 *
 * Every entry here is real project evidence. There is deliberately no
 * placeholder mechanism: a project without an approved image simply has no
 * entry, and the homepage renders a labelled empty frame for it rather than
 * a stand-in illustration dressed as a screen. An invented picture is a
 * claim, and this file is not where claims get made.
 *
 * To add one: put the approved file in `public/work/<slug>/`, add an entry,
 * and give `alt` a functional description of what the screen does. Only add
 * images cleared for public display.
 */
export interface ProjectImage {
  src: string;
  /** Functional description: what the screen does, not "screenshot of an app". */
  alt: string;
  width: number;
  height: number;
}

/** Static export serves plain files, so the base path is added by hand. */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const image = (path: string, alt: string, width: number, height: number): ProjectImage => ({
  src: `${base}${path}`,
  alt,
  width,
  height,
});

export const projectImages: Record<string, ProjectImage> = {
  zalando: image(
    "/work/zalando/zalando-logo.png",
    "The Zalando wordmark in white on an orange rounded card",
    2000,
    1211,
  ),
  "iot-venture": image(
    "/work/iot-venture/dealer-assign-tracker.png",
    "The IoT Venture dealer portal screen for assigning an order to a tracker",
    1100,
    715,
  ),
  // The security report rather than the experience map. The map is Efemena's
  // own diagram and still opens the case study; this is the product itself,
  // which is what the card is for.
  "merlin-mines": image(
    "/work/merlin-mines/security-report-1400.webp",
    "The SpellCarver security report: SAST, CVE and Bearer vulnerability counts by severity, above a filterable list of findings",
    1400,
    919,
  ),
  "olive-ilive": image(
    "/work/olive-ilive/splash-preference-test.png",
    "The two Olive-Ilive splash screens tested against each other, beside a bar showing 12 of 17 people chose the first design",
    1028,
    700,
  ),
  vochub: image(
    "/work/vochub/splash-before-after.png",
    "The VocHub splash screen before and after the preference test",
    996,
    781,
  ),
};
