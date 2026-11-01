import type { CaseStudy } from "./types";

/**
 * The homepage project gallery — one editable structure.
 *
 * Brief of 2026-11-01: present the four featured projects as large, nearly
 * full-width stacking panels, in the order IoT, HearEase, SpellCarver,
 * Zalando. Everything a panel renders is declared here so that the layout
 * component holds no content and the content holds no layout.
 *
 * ── Nothing here is new copy ──────────────────────────────────────────────
 * Every string a panel shows is pulled from the case study it links to:
 *
 *   title        study.title            (SpellCarver's own name, etc.)
 *   description  study.premise          one sentence, already ≤ 150 chars
 *   tags         study.card.category    split, first two only
 *   year         study.year             verified
 *   reached      study.card.reached     "Shipped, Oct to Nov 2024"
 *   ownership    study.card.ownership   "Sole designer"
 *
 * The brief said not to invent outcomes, metrics, dates, findings,
 * responsibilities or shipped status, so the gallery invents none: it is a
 * projection of the case studies, and a correction to a case study reaches
 * the homepage without anyone remembering to make it twice.
 *
 * ── Covers ────────────────────────────────────────────────────────────────
 * The brief offered images and none arrived with it, so each cover is an
 * asset already approved and published in this repository. Where a project
 * has no screen, it gets no screen: see `cover: null` on Zalando. Inventing
 * a cover for it would mean fabricating UI for a real employer's product,
 * which the brief forbids and which is the one thing on this site that
 * could not be defended in an interview.
 *
 * `fit` is per-cover rather than global, as the brief asked:
 *   contain — the whole screen must stay legible (flows, matrices, reports)
 *   cover   — cropping helps the composition, with `position` set for it
 */

export interface GalleryPanel {
  slug: string;
  href: string;
  /** Overrides study.title only where the product name differs from it. */
  name?: string;
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
    fit: "contain" | "cover";
    /** object-position, desktop and mobile. Only read when fit is "cover". */
    position?: string;
    positionMobile?: string;
    /** Panel wash, drawn from the asset's own dominant tone. */
    accent: "sage" | "blue" | "clay";
  } | null;
  /** Said plainly on the panel when there is no cover. Never a placeholder. */
  noCoverNote?: string;
  /**
   * A client wordmark, for a panel that has no cover. It identifies whose
   * product the work was and gives the panel something real to hold, and it
   * is kept deliberately small: a employer's logo at hero size is a brand
   * standing where the work should be. Only ever an asset already published
   * on this site — never a generated or sourced one.
   */
  mark?: { src: string; alt: string; width: number; height: number };
  accent: "sage" | "blue" | "clay";
}

export const galleryPanels: GalleryPanel[] = [
  {
    slug: "iot-venture",
    href: "/work/iot-venture",
    name: "IoT Venture — It's My Bike",
    accent: "sage",
    cover: {
      src: "/work/iot-venture/dealer-assign-tracker.png",
      alt:
        "The It's My Bike partner dashboard: assigning a tracker to a bike, with the " +
        "tracker's identifier, its pairing state and the dealer's own order list beside it",
      width: 1100,
      height: 715,
      fit: "contain",
      accent: "sage",
    },
  },
  {
    slug: "hearease",
    href: "/work/hearease",
    accent: "clay",
    /* The devices cropped out of `connect-flow.png` by
       `scripts/crop-hearease-cover.py`. The full sheet is not used here: it
       carries a baked heading that competes with this panel's own title,
       and its captions overlap and clip in the source. */
    cover: {
      src: "/work/hearease/connect-flow-cover.webp",
      alt:
        "Three screens of the HearEase connect flow: the first step at rest with step two " +
        "dimmed, the same screen with step one active, and the glasses connecting",
      width: 1500,
      height: 944,
      fit: "contain",
      accent: "clay",
    },
  },
  {
    slug: "merlin-mines",
    href: "/work/merlin-mines",
    accent: "blue",
    cover: {
      src: "/work/merlin-mines/product-dashboard.webp",
      alt:
        "The SpellCarver dashboard: four summary tiles for total pipelines, successful " +
        "pipelines, average duration and deployments today, an insights chart, and a " +
        "pipeline list showing a running build with its latest log line and progress",
      width: 1630,
      height: 961,
      fit: "cover",
      position: "50% 18%",
      positionMobile: "22% 18%",
      accent: "blue",
    },
  },
  {
    slug: "zalando",
    href: "/work/zalando",
    accent: "clay",
    cover: null,
    mark: {
      src: "/work/zalando/zalando-logo.png",
      alt: "The Zalando wordmark",
      width: 2000,
      height: 1211,
    },
    noCoverNote:
      "No interface from this project is published here. The work is described in the case study.",
  },
];

/** Up to two discipline tags, taken from the study's editorial category. */
export function panelTags(study: CaseStudy): string[] {
  return (study.card?.category ?? study.problemArea)
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2);
}
