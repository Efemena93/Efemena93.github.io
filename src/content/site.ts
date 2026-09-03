/**
 * Single source of truth for identity, contact details and social metadata.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  Everything marked TODO is a placeholder. Replace the value, and it
 *  updates the header, footer, contact page, résumé, sitemap, JSON-LD and
 *  every Open Graph image at once. Nothing else in the codebase hard-codes
 *  a personal detail.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const TODO = (what: string) => `[TODO: ${what}]`;

export const site = {
  /**
   * Canonical origin. No trailing slash.
   *
   * Read from the environment first so a deploy can set it without a code
   * change — the bundled GitHub Actions workflow sets it to the Pages URL, so
   * canonical links, the sitemap and social cards are correct wherever the
   * site actually lives. The fallback is the intended production domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://efemena93.github.io",
  name: "Efemena Udezi",
  shortName: "Efemena Udezi",
  role: "UX / Product / Interaction Designer",

  positioning:
    "UX/Product Designer creating emotionally intelligent digital experiences through research, storytelling and interaction design.",

  /** The same statement in her own voice, used as the hero line. */
  positioningFirstPerson:
    "I create emotionally intelligent digital experiences through research, storytelling and interaction design.",

  /** Used as the meta description and the OG description sitewide. */
  description:
    "Efemena Udezi is a UX, product and interaction designer working on emotionally intelligent digital experiences — research, storytelling and interaction design for the things people find hard to say.",

  locale: "en_GB",
  themeColor: "#f6f2ea",

  contact: {
    email: "udezimena@gmail.com",
    availability: "Open to design roles — US, Europe and remote",
    location: "Denton, Texas",
    responseTime: "I read everything and reply within a few days.",
  },

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/efemena-udezi/" },
    { label: "Previous portfolio", href: "https://udezimena.work" },
  ] as Array<{ label: string; href: string }>,

  resumePdf: TODO("résumé PDF — drop the file at /public/efemena-udezi-resume.pdf"),
} as const;

/* ---------------------------------------------------------------- profile */

export const profile = {
  /**
   * Homepage introduction. Two paragraphs, under 90 words, written to be read
   * in the time it takes to decide whether to keep scrolling.
   */
  intro: [
    "I have been designing since 2021, and I am now reading for a Master's in Interaction Design. My work keeps returning to the same question: what is a person actually asking for when they cannot say it plainly?",
    "That question has taken me through health and wellbeing, long-distance relationships, enterprise engineering tools, and most recently a research project on how military families hold a life together across a deployment.",
  ],

  /** About page — longer, still restrained. */
  about: [
    "I came to design sideways rather than by plan, and stayed because of what the work asks of you. Designing well means paying close attention to people who are mid-sentence, mid-decision, or mid-difficulty, and then being careful about what you build on top of what you heard.",
    "Most of my projects sit close to something tender. A health portal where the honest answer to a question is embarrassing. A couple trying to stay close across nine time zones. A partner at home managing a household alone while trying to sound fine on a video call. In each case the interface is the least interesting part; what matters is which signals a system chooses to notice, and which it quietly discards.",
    "So my practice is built around evidence discipline. I separate what I observed from what I concluded from what I am merely proposing, and I label it, in the work and on this site. It makes for less confident-sounding case studies. It also makes them true, and it means that when I do make a strong claim, it is worth something.",
    "I work across research and interface craft rather than choosing one. I run the interviews, do the synthesis, draw the flows, build the design system, and then sit in usability sessions watching my own assumptions come apart. I am at my best on problems where the emotional stakes are real and the product answer is not obvious.",
  ],

  /** Capabilities — what a recruiter is scanning for. */
  capabilities: [
    {
      title: "Research & discovery",
      items: [
        "Mixed-method studies — surveys, semi-structured interviews, diary prompts",
        "Competitive and comparative analysis",
        "Affinity mapping, thematic synthesis, rainbow spreadsheets",
        "Usability testing, moderated and unmoderated",
      ],
    },
    {
      title: "Product & interaction",
      items: [
        "Information architecture, card sorting, tree testing",
        "User flows, task flows, service blueprints",
        "Low- to high-fidelity prototyping",
        "Interaction and motion specification",
      ],
    },
    {
      title: "Craft & systems",
      items: [
        "Design language systems and component libraries",
        "Accessible colour, type and interaction design (WCAG 2.2 AA)",
        "Responsive and adaptive layout",
        "Developer handoff and design–engineering collaboration",
      ],
    },
    {
      title: "Working with others",
      items: [
        "Design studio facilitation and stakeholder workshops",
        "Research storytelling and readouts",
        "Cross-functional collaboration with engineering and product",
        "Mentoring and design critique",
      ],
    },
  ],

  tools: [
    "Figma",
    "FigJam",
    "Miro",
    "InVision",
    "Optimal Workshop",
    "UsabilityHub",
    "Maze",
    "Google Forms",
    "Notion",
  ],
} as const;

/* ------------------------------------------------------------- navigation */

export const primaryNav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  // Label only. The route stays /field-notes until we have reviewed the
  // backlink and static-export implications of renaming it.
  { label: "Library", href: "/field-notes" },
  // Résumé is out of the production build until verified employment history
  // exists — see src/app/_not-in-build/README.md. Restore this line when the
  // route returns.
  { label: "Contact", href: "/contact" },
] as const;
