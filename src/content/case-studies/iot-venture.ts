import type { CaseStudy } from "../types";

/**
 * Employer work — NDA-protected. There is no approved public case study for
 * this role. Every fact here is transcribed from resume.ts (itself
 * transcribed from Efemena_Udezi_Resume_ATS_1.pdf) and nothing else: no
 * screens, no flows, no business detail, no metric she has not already
 * published on her own résumé. See `boundary` below and
 * docs/homepage-studio-amendment.md for the reasoning.
 */

export const iotVenture: CaseStudy = {
  slug: "iot-venture",
  visibility: "published",
  title: "IoT Venture GmbH",
  premise:
    "Sole UI/UX designer for a connected-bike product — the “It's My Bike” app, a partner dashboard and white-label partner apps.",
  problemArea: "Connected hardware · mobile app + partner dashboards",
  humanProblem:
    "Riders and white-label partners needed one coherent product across a mobile app, a partner dashboard and several rebranded apps, run by a single designer with no other design resource in the company.",
  boundary:
    "Employer work, NDA-protected. This page reproduces only what her résumé already discloses publicly — no confidential screens, flows or business detail are shown.",
  shortRole: "Sole UI/UX designer",
  projectType: "Full-time, in-house role · Oct 2023 – Aug 2025",
  headline: "Led the 3.0 redesign while keeping the app compatible with white-label partner apps — a self-reported 20% increase in user retention.",
  summary:
    "As the company's only designer, owned UX and UI across a connected-bike product: the “It's My Bike” app, a partner dashboard and white-label partner apps, from research through the design system.",
  featured: true,
  order: 7,
  status: "complete",
  year: "2023–2025",
  timeline: "Oct 2023 – Aug 2025 · Darmstadt, Germany",
  context: "Full-time, in-house role",
  roles: ["Sole UI/UX Designer"],
  tools: [],
  disciplines: ["product-design", "interaction-design", "design-systems"],
  cover: { alt: "A phone and a connected-device panel, joined by a single line", accent: "blue" },

  atAGlance: {
    problem:
      "The 3.0 redesign had to stay compatible with the primary “It's My Bike” app and with multiple white-label partner apps, and it was carried out by a single designer with no other UX/UI resource in the company.",
    role: "Owned all UX and UI: research, the 3.0 redesign, usability testing, and the design system that kept the brand coherent across platforms.",
    approach:
      "Ran user research and turned insights into the redesign; ran usability tests through an iOS beta ahead of full release and iterated on the findings, including menu reordering and simpler report generation; built and maintained the design system used across platforms; partnered with cross-functional teams to align design with business objectives.",
    outcome:
      "A self-reported 20% increase in user retention. No further metrics, screens or interface detail are published here — see the boundary note above.",
  },

  sections: [
    {
      id: "role",
      kind: "context",
      title: "The role",
      blocks: [
        {
          type: "prose",
          text: [
            "As the company's only designer, she owned UX and UI across the whole product: the consumer-facing “It's My Bike” app, a partner dashboard, and the white-label apps built on the same platform for partner brands. The 3.0 redesign was the central piece of work — a rebuild that had to hold together across every one of those surfaces at once, not just the flagship app.",
          ],
        },
      ],
    },
    {
      id: "scope",
      kind: "reflection",
      title: "What's shown here",
      blocks: [
        {
          type: "callout",
          title: "Confidential, by design",
          text: "This is employer work, protected by an NDA. Nothing beyond what her résumé already states publicly is reproduced on this page — no interface, no partner names, no internal metrics beyond the retention figure above. She's glad to talk through the work in more detail in an interview.",
        },
      ],
    },
  ],
};
