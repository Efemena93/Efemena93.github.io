import type { SymbolName } from "@/components/studio/ProjectSymbol";

/**
 * The four objects in the studio, and the projects they stand for.
 *
 * Shared, because they are rendered twice from one list: as drifting objects
 * in the room from `md` up, and as a compact labelled row on a phone, where
 * there is no periphery to drift in. Two copies of this list would drift
 * apart, and a studio object pointing at a different project than its own
 * chip is the kind of bug nobody notices until a recruiter clicks it.
 *
 * `href` values are routes that exist. An earlier brief called the garment
 * project "Calando", which matched nothing in this portfolio; the refinement
 * brief of 2026-10-27 settled it as Zalando Plus, which is what the garment
 * links to and what its label says.
 */

export interface ProjectObject {
  name: SymbolName;
  href: string;
  /** The project, as announced and as printed on the label. */
  label: string;
}

export const PROJECT_OBJECTS: ProjectObject[] = [
  { name: "bicycle", href: "/work/iot-venture", label: "IoT Venture, It's My Bike" },
  { name: "wand", href: "/work/merlin-mines", label: "SpellCarver" },
  { name: "garment", href: "/work/zalando", label: "Zalando Plus" },
  { name: "glasses", href: "/work/hearease", label: "HearEase" },
];
