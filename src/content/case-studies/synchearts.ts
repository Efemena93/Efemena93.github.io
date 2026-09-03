import type { CaseStudy } from "../types";

/**
 * Rewritten from the published SyncHearts case study on udezimena.work.
 * All figures preserved exactly: 27 survey respondents, 19 questions,
 * 5 interviews, Aug–Dec 2024, 16 weeks. Nothing added that was not there.
 */

export const syncHearts: CaseStudy = {
  slug: "synchearts",
  title: "SyncHearts",
  premise:
    "A communication concept for long-distance couples, built around time zones and thoughtful delay rather than constant availability.",
  problemArea: "Long-distance relationships · time-zone separation",
  shortRole: "Sole designer & researcher",
  projectType: "Self-directed product project · 16 weeks",
  headline: "Card sorting surfaced three distinct mental models of the same feature set — the argument for cross-referenced navigation rather than one fixed hierarchy.",
  summary:
    "Sixteen weeks of research and design on how couples stay close across time-zone gaps and clashing schedules. Card sorting surfaced three distinct mental models of the same feature set, which became the argument for flexible rather than fixed navigation.",
  featured: true,
  order: 2,
  status: "complete",
  year: "2024",
  timeline: "16 weeks · Aug – Dec 2024",
  context: "Self-directed product project",
  roles: ["UX Designer", "UX Researcher", "Visual Designer"],
  tools: ["Figma", "FigJam", "Google Forms", "Google Sheets"],
  disciplines: ["ux-research", "product-design", "interaction-design"],
  cover: {
    alt: "Two clock faces at different hours joined by a single line",
    accent: "clay",
  },
  externalUrl: { label: "Original case study", href: "https://udezimena.work" },

  atAGlance: {
    problem:
      "In long-distance relationships with significant time-zone differences, both the frequency and the quality of communication decline, and emotional connection erodes with them.",
    role: "Sole designer and researcher across research, synthesis, IA and mid-fidelity design.",
    approach:
      "Mixed-method research with 27 survey respondents and 5 interviews, a facilitated design studio with three stakeholders, impact/effort prioritisation, card sorting, and mid-fidelity wireframes.",
    outcome:
      "A validated problem frame and a mid-fidelity design, with usability testing and high-fidelity work identified as the next stage. The design was not tested with users before the project closed.",
  },

  ethics: {
    is: [
      "A product design study on scheduling and expression across distance.",
      "Grounded in self-reported experience from 27 survey respondents and 5 interviews.",
    ],
    isNot: [
      "Not a relationship-counselling or therapeutic tool.",
      "Not a location-sharing or presence-monitoring product.",
    ],
    unvalidated: [
      "The entire mid-fidelity design. Usability testing was the declared next step and had not been run.",
      "Whether timed, delayed messages reduce or increase anxiety in practice.",
    ],
  },

  sections: [
    {
      id: "problem",
      kind: "context",
      title: "The problem",
      blocks: [
        {
          type: "prose",
          text: [
            "Communication frequency and quality often decrease in long-distance relationships with significant time-zone differences. Individuals suffer a gradual loss of emotional connection with partners, friends and family, and the ordinary tools available to them assume both people are awake at the same time.",
            "SyncHearts was a sixteen-week attempt to design for the opposite assumption: that the two people are almost never simultaneously free, and that the design should make that survivable rather than treat it as an edge case.",
          ],
        },
      ],
    },

    {
      id: "research",
      kind: "research",
      title: "Research",
      standfirst: "Mixed method — a survey across several communities, then interviews.",
      blocks: [
        {
          type: "statRow",
          stats: [
            { value: "27", label: "Survey respondents" },
            { value: "19", label: "Survey questions" },
            { value: "5", label: "Interviews" },
          ],
          source: "Google Forms survey distributed to relevant online communities; semi-structured interviews, 2024.",
        },
        {
          type: "prose",
          text: [
            "I defined the research strategy and objectives at kickoff, built the survey in Google Forms and shared it with relevant communities, then followed up with interviews to understand how people actually manage communication day to day — not what they say they want from an app, but what they do when a call gets missed.",
          ],
        },
        {
          type: "claimGroup",
          title: "What the interviews returned",
          claims: [
            {
              level: "evidence",
              text: "Participants described experiencing emotional disconnection from their partners, not merely logistical inconvenience.",
              source: "5 semi-structured interviews, 2024",
            },
            {
              level: "evidence",
              text: "Participants wanted more flexibility than existing tools and applications allow.",
              source: "5 semi-structured interviews, 2024",
            },
            {
              level: "evidence",
              text: "Participants expressed a desire for greater emotional stability in their relationships, distinct from a desire for more contact.",
              source: "5 semi-structured interviews, 2024",
            },
            {
              level: "interpretation",
              text: "Taken together, these point away from a messaging problem and toward a scheduling-plus-expression problem: the difficulty is not sending a message, it is finding a moment that carries weight for both people.",
            },
          ],
        },
      ],
    },

    {
      id: "synthesis",
      kind: "synthesis",
      title: "Synthesis and prioritisation",
      blocks: [
        {
          type: "prose",
          text: [
            "I built two personas from the survey and interview data, updating them through the project as more evidence arrived, and mapped a journey for one of them — a scenario following the step-by-step actions of communicating with a partner around an anniversary, which concentrates every pain point into a single high-stakes day.",
            "I then ran a design studio session with three additional stakeholders. Ideas were grouped by the pain point they addressed, mapped on an affinity board, and scored on an impact/effort grid before anything was drawn.",
          ],
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Concentrating the journey map on an anniversary was a deliberate choice: an ordinary Tuesday hides the failure modes, and a date that matters exposes all of them at once.",
        },
      ],
    },

    {
      id: "ia",
      kind: "craft",
      title: "Card sorting, and three different minds",
      standfirst:
        "The most useful finding in the project came from an exercise about where things go.",
      blocks: [
        {
          type: "prose",
          text: [
            "I sketched the feature ideas and ran a card sort against them. Participants agreed on some groupings immediately and disagreed on others in a way that turned out to be structural rather than random.",
          ],
        },
        {
          type: "claimGroup",
          title: "Consistent groupings",
          claims: [
            {
              level: "evidence",
              text: "Scheduling, event reminders and time-zone syncing were consistently grouped together under a calendar concept.",
              source: "Card sorting exercise, 2024",
            },
            {
              level: "evidence",
              text: "Message in a Bottle, video journals and notifications were consistently grouped as communication.",
              source: "Card sorting exercise, 2024",
            },
            {
              level: "evidence",
              text: "Mood updates and Message in a Bottle were frequently separated into a distinct emotional or bonding category.",
              source: "Card sorting exercise, 2024",
            },
          ],
        },
        {
          type: "comparison",
          title: "Three mental models of the same feature set",
          columns: ["Model", "What they organise around"],
          rows: [
            ["Task-oriented", "Functionality and quick access to tools"],
            ["Emotionally driven", "Features that foster connection and engagement"],
            ["Planning-oriented", "Structure, organisation and forward visibility"],
          ],
        },
        {
          type: "claim",
          level: "evidence",
          text: "Mood updates and video journals straddled the emotional and planning models, sitting in different categories depending on which model the participant held.",
          source: "Card sorting exercise, 2024",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "A single fixed information architecture would therefore be wrong for at least a third of users. The overlap is not noise to be resolved by picking a winner — it is an argument for flexible categorisation or cross-referenced navigation, so the same feature can be found down more than one path.",
        },
      ],
    },

    {
      id: "design",
      kind: "craft",
      title: "Design",
      blocks: [
        {
          type: "prose",
          text: [
            "The concept centres on three things: a shared calendar for scheduling calls across time zones, a Message in a Bottle feature for sending something that arrives later, and lightweight mood sharing. The second is the one that most directly answers the research — it lets a person say something without requiring the other to be awake, available, or ready to respond.",
            "I designed greyscale wireframes in Figma at mid fidelity, with the layout defined well enough to test and loose enough to change once testing had happened.",
          ],
        },
        {
          type: "figure",
          image: {
            src: "",
            alt: "Mid-fidelity wireframes: shared calendar, Message in a Bottle composer, and mood sharing",
            width: 1600,
            height: 1000,
            caption: "Mid-fidelity screens, Figma.",
          },
          width: "wide",
        },
        {
          type: "todo",
          note: "Export the SyncHearts wireframes, personas, journey map, affinity board and impact/effort grid as images into /public/work/synchearts/ and swap the figure blocks over to next/image with functional alt text.",
        },
      ],
    },

    {
      id: "reflection",
      kind: "reflection",
      title: "What I took from it",
      blocks: [
        {
          type: "list",
          items: [
            "Ground design decisions in research and feedback rather than in taste, especially when the subject is one you have personal opinions about.",
            "Use storytelling to communicate insight — a journey map of one anniversary persuaded stakeholders faster than a summary of 27 responses.",
            "Take the emotional consequences of a design seriously when the use case is personal. A delayed message is a different object depending on what it says.",
            "Balance ambition against what can actually be finished. Stopping at mid fidelity with testing declared as the next step was more honest than rushing a polished screen nobody had used.",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          title: "Where this project stopped",
          text: "Usability testing, iteration, high-fidelity design and interactive prototyping were the declared next steps and were not completed. The design as shown is untested.",
        },
      ],
    },
  ],
};
