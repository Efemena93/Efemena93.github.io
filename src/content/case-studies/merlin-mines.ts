import type { CaseStudy } from "../types";

/**
 * Employer work — NDA-protected. There is no approved public case study for
 * this internship, and no dedicated project write-up exists anywhere in the
 * repository or on her previous portfolio (udezimena.work) — checked before
 * writing this file. Every fact here is transcribed from resume.ts (itself
 * transcribed from Efemena_Udezi_Resume_ATS_1.pdf) and nothing else.
 *
 * Naming note: the résumé spells the employer "Merlinmines" (one word);
 * this page uses "Merlin Mines" as requested. Flagged in the content
 * verification report rather than resolved silently.
 */

export const merlinMines: CaseStudy = {
  slug: "merlin-mines",
  visibility: "published",
  title: "Merlin Mines",
  premise: "UI/UX design intern building the first dedicated interface for an internal engineering workflow tool.",
  problemArea: "Internal tooling · engineering workflow",
  humanProblem:
    "The company's in-house software engineers worked their daily process without a dedicated interface, and had no design resource before this role.",
  boundary:
    "Employer work, NDA-protected. This page reproduces only what her résumé already discloses publicly — no confidential interface, workflow detail or business information is shown.",
  shortRole: "UI/UX design intern",
  projectType: "Internship, in-house · Jun 2025 – Aug 2025",
  headline: "Sole designer on the team — established the product's first UI patterns and components as its first dedicated design resource.",
  summary:
    "Owned end-to-end UX and UI for an internal workflow web app used by the company's software engineers, translating their daily workflow into a clear, streamlined interface.",
  featured: true,
  order: 9,
  status: "complete",
  year: "2025",
  timeline: "Jun 2025 – Aug 2025 · Remote, US",
  context: "Internship, in-house",
  roles: ["UI/UX Design Intern"],
  tools: [],
  disciplines: ["product-design", "interaction-design"],
  cover: { alt: "A workflow diagram of connected nodes, resolving into a single clean panel", accent: "clay" },

  atAGlance: {
    problem: "The company's in-house engineers ran their daily workflow without a dedicated interface, and had no design resource before this role.",
    role: "Sole designer on the team: owned end-to-end UX and UI for the internal workflow web app.",
    approach:
      "Translated engineers' daily workflows into a clear, streamlined interface — from information architecture and user flows through wireframes and high-fidelity UI.",
    outcome:
      "Established the product's core UI patterns and components as its first dedicated design resource. No further metrics, screens or interface detail are published here — see the boundary note above.",
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
            "As the sole designer on the team, she owned end-to-end UX and UI for an internal workflow web app used by the company's in-house software engineers — a tool that, before this internship, had no dedicated design resource at all. Establishing the product's first UI patterns and components meant setting conventions other engineers would build against, not just designing individual screens.",
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
          text: "This is employer work, protected by an NDA. Nothing beyond what her résumé already states publicly is reproduced on this page — no interface, no workflow detail, no internal business information. She's glad to talk through the work in more detail in an interview.",
        },
      ],
    },
  ],
};
