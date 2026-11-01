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
  /* The three explorations below moved to Efemena's own presentation
     mockups on 2026-11-01. Each previously showed whichever single screen
     happened to exist — a before-and-after pair, a preference test — which
     made the row read as research scraps next to four featured projects
     with real covers. These are the same projects' finished screens as she
     presented them. Prepared by
     `scripts/prepare-exploration-covers.py`; two keep their transparency so
     the devices sit on the card surface in both themes. */
  "olive-ilive": image(
    "/work/olive-ilive/mockups.webp",
    "Two Olive-Ilive phone screens: a registration form with live password rules and consent checkboxes for terms and for processing health data, and a returning-user sign-in screen",
    1400,
    1747,
  ),
  vochub: image(
    "/work/vochub/mockups.webp",
    "The VocHub sign-up page on a laptop, with an illustration beside a Join Us form, over phone screens showing the branded splash and log-in",
    1080,
    1080,
  ),
  virtualbuddy: image(
    "/work/virtualbuddy/mockups.webp",
    "Three VirtualBuddy phone screens: the landing page, the study library filtered by audio, books and videos, and the dashboard with a reading-progress ring and buddy, library and study-plan counts",
    1400,
    1455,
  ),
};
