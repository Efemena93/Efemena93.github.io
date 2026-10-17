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

export const projectImages: Record<string, ProjectImage> = {
  zalando: stand("zalando", "Layered service-blueprint sheets with swimlanes and touchpoints"),
  "iot-venture": stand("iot-venture", "A phone app, a partner dashboard and a connected device linked by a signal line"),
  "merlin-mines": stand("merlin-mines", "A workflow wall of connected steps with a pinned note"),
  "olive-ilive": stand("olive-ilive", "A responsive health portal on desktop and mobile"),
  vochub: stand("vochub", "A fan of vocabulary cards"),
  virtualbuddy: stand("virtualbuddy", "A study-community workspace with shared feed and profiles"),
};
