import { TODO } from "./site";
import type { Resume } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  Replace the TODO values with your real history. The structure is right;
 *  only the strings need changing. Bullets should describe a decision and
 *  its consequence, not a responsibility — "reduced X by doing Y", not
 *  "responsible for X".
 * ─────────────────────────────────────────────────────────────────────────
 */

export const resume: Resume = {
  roles: [
    {
      organisation: TODO("employer"),
      title: TODO("job title"),
      start: TODO("start"),
      end: "Present",
      location: TODO("location"),
      bullets: [
        TODO("a decision you made and what it changed"),
        TODO("a piece of work you led, with its scale"),
        TODO("something you improved that someone else can verify"),
      ],
    },
    {
      organisation: TODO("previous employer"),
      title: TODO("job title"),
      start: TODO("start"),
      end: TODO("end"),
      location: TODO("location"),
      bullets: [TODO("bullet"), TODO("bullet")],
    },
  ],

  education: [
    {
      institution: TODO("institution"),
      qualification: "MSc / MA Interaction Design",
      start: TODO("start year"),
      end: TODO("expected completion"),
      note: "Capstone: emotional continuity for military families during deployment.",
    },
    {
      institution: "CareerFoundry",
      qualification: "UX/UI Design Immersive",
      start: TODO("start year"),
      end: TODO("end year"),
      note: "End-to-end programme; Olive-Ilive was the immersive project.",
    },
  ],

  skillClusters: [
    {
      title: "Research",
      items: [
        "Semi-structured interviews",
        "Survey design and analysis",
        "Competitive and comparative analysis",
        "Usability testing (moderated and unmoderated)",
        "Card sorting and tree testing",
        "Affinity mapping and thematic synthesis",
      ],
    },
    {
      title: "Design",
      items: [
        "Information architecture",
        "User and task flows",
        "Wireframing, low to high fidelity",
        "Interaction and motion specification",
        "Design language systems",
        "Accessible design to WCAG 2.2 AA",
      ],
    },
    {
      title: "Tools",
      items: [
        "Figma",
        "FigJam",
        "Miro",
        "InVision",
        "OptimalSort",
        "UsabilityHub",
        "Google Forms",
      ],
    },
  ],

  recognition: [],
};
