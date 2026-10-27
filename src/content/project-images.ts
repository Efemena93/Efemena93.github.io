/**
 * Homepage artifact images, keyed by case-study slug.
 *
 * To swap in real project evidence: put the file in `public/projects/`,
 * point `src` at it, and set `placeholder: false`. The "placeholder" caption
 * under the artifact disappears with that flag; nothing else needs editing.
 * Only add images that are approved for public display.
 */
export interface ProjectImage {
  src: string;
  alt: string;
  /** True while the file is a stand-in rather than real project evidence. */
  placeholder: boolean;
  width: number;
  height: number;
}

/** Static export serves plain files, so the base path is added by hand. */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stand = (slug: string, alt: string): ProjectImage => ({
  src: `${base}/projects/${slug}.svg`,
  alt,
  placeholder: true,
  width: 800,
  height: 520,
});

const real = (path: string, alt: string, width: number, height: number): ProjectImage => ({
  src: `${base}${path}`,
  alt,
  placeholder: false,
  width,
  height,
});

export const projectImages: Record<string, ProjectImage> = {
  zalando: real("/work/zalando/zalando-logo.png", "The Zalando wordmark in white on an orange rounded card", 2000, 1211),
  "iot-venture": real(
    "/work/iot-venture/dealer-assign-tracker.png",
    "The IoT Venture dealer portal screen for assigning an order to a tracker",
    1100,
    715,
  ),
  // The security report rather than the experience map. The map is Efemena's
  // own diagram and still opens the case study; this is the product itself,
  // which is what the card is for.
  "merlin-mines": real(
    "/work/merlin-mines/security-report-1400.webp",
    "The SpellCarver security report: SAST, CVE and Bearer vulnerability counts by severity, above a filterable list of findings",
    1400,
    919,
  ),
  "olive-ilive": real(
    "/work/olive-ilive/splash-preference-test.png",
    "The two Olive-Ilive splash screens tested against each other, beside a bar showing 12 of 17 people chose the first design",
    1028,
    700,
  ),
  vochub: real(
    "/work/vochub/splash-before-after.png",
    "The VocHub splash screen before and after the preference test",
    996,
    781,
  ),
  virtualbuddy: stand("virtualbuddy", "A study-community workspace with shared feed and profiles"),
};
