import type { Resume } from "./types";

/**
 * Résumé — transcribed from Efemena_Udezi_Resume_ATS_1.pdf.
 *
 * Every organisation, title, date and figure on this page comes from that
 * document. Nothing here is inferred, rounded, re-ordered for effect or
 * embellished. Where the résumé states a number, the number is reproduced as
 * written and attributed to the role it belongs to — it is her claim about
 * her own work, not a claim this site makes on her behalf.
 *
 * One exception, flagged rather than silently folded in: the IoT Venture
 * bullet on the iOS beta test was added directly from Efemena's own account
 * of the work, not transcribed from the PDF. It's still her claim about her
 * own work — just not one that was already sitting in the résumé document.
 *
 * The phone number in the PDF is deliberately not published here. A public
 * portfolio does not need it; the contact page routes through email.
 */

export const resume: Resume = {
  /**
   * THE PERCENTAGES. Every figure on this resume is a number Efemena
   * recorded at the time, not an independently audited one, and none of the
   * source material gives a baseline, a comparison period or a method. They
   * are therefore written as what was observed after the work ("rose 15%
   * afterwards") rather than as what the work caused ("increased engagement
   * by 15%"). The difference is small on the page and large in an interview,
   * where the follow-up question is always "measured how?".
   *
   * If she can supply baseline, period and method for any of them, that one
   * can be stated more strongly. Until then they stay as observations.
   */
  roles: [
    {
      organisation: "IoT Venture GmbH",
      title: "Sole UI/UX Designer",
      start: "Oct 2023",
      end: "Aug 2025",
      location: "Darmstadt, Germany",
      bullets: [
        "As the company's only designer, owned all UX and UI across the product.",
        "Led the 3.0 redesign, running user research and turning insights into design decisions that kept the product compatible with the “It's My Bike” app and white-label partners' apps. User retention rose 20% after the release; the figure is my own rather than an independent audit.",
        "Ran usability tests through an iOS beta ahead of full release, iterating on feedback to fix issues including menu reordering and simpler report generation before rollout.",
        "Built and maintained design systems that kept brand coherence across platforms. Consistent colour, typography and components.",
        "Partnered with cross-functional teams to align design with business objectives.",
      ],
    },
    {
      organisation: "Merlinmines",
      title: "UI/UX Designer",
      start: "Jun 2025",
      end: "Aug 2025",
      location: "Remote, US",
      bullets: [
        "Sole designer on SpellCarver, Merlinmines' CI/CD and security automation product, owning end-to-end UX and UI for the interface its in-house engineers use.",
        "Translated engineers' daily workflows into a clear, streamlined interface. From information architecture and user flows through wireframes and high-fidelity UI.",
        "Established the product's core UI patterns and components as its first dedicated design resource.",
      ],
    },
    {
      organisation: "Zalando SE",
      title: "Product Designer",
      start: "Jun 2022",
      end: "Dec 2022",
      location: "Berlin, Germany",
      bullets: [
        "Led the design process from research and concept through service blueprinting and pilot launch, shipping several features for Zalando Plus.",
        "Created a comprehensive design blueprint for the Zalando Plus team to ensure cohesive, consistent design across the platform.",
        "Revamped outdated UI/UX templates with developers, PMs and stakeholders. User engagement rose 15% afterwards.",
        "Contributed to design rituals, workshops and critiques, and to the design system.",
      ],
    },
    {
      organisation: "World Simplified UG",
      title: "UI/UX Designer",
      start: "Dec 2021",
      end: "May 2022",
      location: "Germany",
      bullets: [
        "Led the design and architecture for converting web templates into iOS and Android mobile templates, for a consistent experience across devices. App downloads rose 25% afterwards.",
        "Designed UX and UI for the company website and mobile app with a consistent system across touchpoints. Website conversion rose 15% afterwards.",
        "Handed off CSS starter templates to frontend developers via Figma. Design-to-production timelines shortened by about 30% afterwards.",
        "Built user journeys from personas to sharpen the experience. User engagement rose 25% afterwards.",
      ],
    },
  ],

  education: [
    {
      institution: "University of North Texas: Denton, TX",
      qualification: "M.A., Interaction Design",
      start: "In progress",
      end: "Expected Dec 2026",
      note: "Capstone: emotional continuity for military families during deployment. The research is ongoing; nothing from it is presented on this site as a validated outcome.",
    },
    {
      institution: "OTH Amberg-Weiden: Germany",
      qualification: "B.Sc., International Business",
      start: "Feb 2021",
      end: "Feb 2024",
    },
  ],

  certifications: [
    { title: "Certified UX Designer", issuer: "CareerFoundry", year: "2021" },
    { title: "UI Design for UX Designers", issuer: "CareerFoundry", year: "2021" },
  ],

  skillClusters: [
    {
      title: "Design & research",
      items: [
        "Information architecture",
        "User research",
        "Journey mapping",
        "Wireframing and prototyping",
        "Usability testing",
        "A/B testing",
        "Heuristic evaluation",
      ],
    },
    {
      title: "Systems & craft",
      items: [
        "Design systems and component libraries",
        "Responsive and mobile-first design",
        "Interaction and motion specification",
        "Accessible design: colour contrast, keyboard paths, visible focus, state in text as well as colour, checked against WCAG 2.2 AA",
        "Developer handoff",
      ],
    },
    {
      title: "Languages",
      items: ["English, fluent", "German, intermediate"],
    },
  ],

  recognition: [],
};
