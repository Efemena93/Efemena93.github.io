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
 * The phone number in the PDF is deliberately not published here. A public
 * portfolio does not need it; the contact page routes through email.
 */

export const resume: Resume = {
  roles: [
    {
      organisation: "IoT Venture GmbH",
      title: "Sole UI/UX Designer",
      start: "Oct 2023",
      end: "Aug 2025",
      location: "Darmstadt, Germany",
      bullets: [
        "As the company's only designer, owned all UX and UI across the product.",
        "Led the 3.0 redesign, running user research and turning insights into design decisions that kept the product compatible with the “It's My Bike” app and white-label partners' apps — increased user retention by 20%.",
        "Ran usability tests and iterated on feedback, surfacing high-impact fixes such as menu reordering and simpler report generation.",
        "Built and maintained design systems that kept brand coherence across platforms — consistent colour, typography and components.",
        "Partnered with cross-functional teams to align design with business objectives.",
      ],
    },
    {
      organisation: "Merlinmines",
      title: "UI/UX Design Intern",
      start: "Jun 2025",
      end: "Aug 2025",
      location: "Remote, US",
      bullets: [
        "Sole designer on the team: owned end-to-end UX and UI for an internal workflow web app used by the company's in-house software engineers.",
        "Translated engineers' daily workflows into a clear, streamlined interface — from information architecture and user flows through wireframes and high-fidelity UI.",
        "Established the product's core UI patterns and components as its first dedicated design resource.",
      ],
    },
    {
      organisation: "Zalando SE",
      title: "Product Design Intern",
      start: "Jun 2022",
      end: "Dec 2022",
      location: "Berlin, Germany",
      bullets: [
        "Led the design process from research and concept through service blueprinting and pilot launch, shipping several features for Zalando Plus.",
        "Created a comprehensive design blueprint for the Zalando Plus team to ensure cohesive, consistent design across the platform.",
        "Revamped outdated UI/UX templates with developers, PMs and stakeholders — 15% increase in user engagement.",
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
        "Led the design and architecture for converting web templates into iOS and Android mobile templates — seamless cross-device experience and a 25% increase in app downloads.",
        "Designed UX and UI for the company website and mobile app with a consistent system across touchpoints — 15% increase in website conversion.",
        "Handed off CSS starter templates to frontend developers via Figma — cut design-to-production timelines by 30%.",
        "Built user journeys from personas to sharpen the experience — 25% increase in user engagement.",
      ],
    },
  ],

  education: [
    {
      institution: "University of North Texas — Denton, TX",
      qualification: "M.A., Interaction Design",
      start: "In progress",
      end: "Expected Dec 2026",
      note: "Capstone: emotional continuity for military families during deployment. The research is ongoing; nothing from it is presented on this site as a validated outcome.",
    },
    {
      institution: "OTH Amberg-Weiden — Germany",
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
        "Accessible design to WCAG 2.2 AA",
        "Developer handoff",
      ],
    },
    {
      title: "Languages",
      items: ["English — fluent", "German — intermediate"],
    },
  ],

  recognition: [],
};
