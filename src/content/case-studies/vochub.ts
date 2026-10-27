import type { CaseStudy } from "../types";

/**
 * Rewritten from the published VocHub case study on udezimena.work.
 * Figures preserved exactly: 55 survey participants, 4 attitudinal
 * interviews, 5 usability-test participants. Nothing added that was not
 * in the original — the source case study gives no exact project duration,
 * so none is stated here.
 */

export const vocHub: CaseStudy = {
  slug: "vochub",
  visibility: "published",
  title: "VocHub",
  premise: "A vocabulary learning application, designed end to end as a study in habit and retention.",
  problemArea: "Language learning · vocabulary retention",
  humanProblem:
    "People learning vocabulary lose it again, because retention depends on a habit the tools rarely help them keep, and on having someone to actually practise with.",
  shortRole: "Research, information architecture and visual design",
  projectType: "Self-directed project",
  headline:
    "A five-participant usability round before final UI surfaced concrete fixes (clearer sign-up entry points, pronunciation practice, simpler onboarding), and a preference test set the final visual direction.",
  summary:
    "A vocabulary learning app built to practise the fundamentals of UX and UI design end to end: competitor analysis, a 55-respondent survey, four attitudinal interviews, personas and task flows, then wireframes tested with five participants before final UI.",
  featured: false,
  order: 8,
  status: "complete",
  year: "2022",
  timeline: "End-to-end · 2022",
  context: "Self-directed project",
  roles: ["UX Researcher", "Information Architect", "Usability Test Moderator", "Visual Designer"],
  tools: ["InVision", "Mural", "Figma", "Miro", "Draw.io", "Pen & paper"],
  disciplines: ["ux-research", "product-design", "interaction-design"],
  cover: { alt: "Stacked cards offset in a loose fan", accent: "clay" },
  externalUrl: { label: "Original case study", href: "https://udezimena.work" },

  atAGlance: {
    problem:
      "Limited time to learn with an instructor, no practice partners to give feedback, and communication barriers while travelling; existing vocabulary apps did not address these together, for a persona built from interview data (\"Richy\").",
    role: "Market and competitor research, a survey and interviews, personas and task flows, wireframes and usability testing, then final UI and visual design.",
    approach:
      "SWOT analysis of Duolingo, Babbel and Tandem; a 55-respondent survey; four qualitative attitudinal interviews analysed with the Thinking-Feeling-Doing method; a persona and problem statement; task flows for adding study friends; low- and mid-fidelity wireframes tested with five participants (Jakob Nielsen's error severity scale, moderated remotely on Zoom and Microsoft Teams); a splash-screen preference test ahead of final UI.",
    outcome:
      "Usability testing surfaced concrete fixes (clearer sign-up and login entry points, a voice-practice feature for pronunciation, simpler onboarding), and the preference test set the final splash-screen direction. Further usability and A/B testing was the declared next step.",
  },

  sections: [
    {
      id: "context",
      kind: "context",
      title: "Discover",
      standfirst: "Competitor research first, then a survey and interviews to find where existing apps fall short.",
      blocks: [
        {
          type: "prose",
          text: [
            "I researched vocabulary and language-learning apps against the features language learners actually want, drawing on my own experience learning German and weighing cost against effectiveness. I ran a SWOT analysis on three apps (Duolingo, Babbel and Tandem), and each pointed to a different gap: Duolingo needed difficulty that adapted to the learner's progress, Babbel needed real conversation practice at the intermediate and advanced levels, and Tandem needed tutors and proficiency-based partner matching.",
          ],
        },
        {
          type: "statRow",
          stats: [
            { value: "55", label: "Survey respondents" },
            { value: "4", label: "Attitudinal interviews" },
            { value: "5", label: "Usability test participants" },
          ],
          source: "Online survey and qualitative interviews conducted for the VocHub project, published on udezimena.work.",
        },
        {
          type: "prose",
          text: [
            "The survey gathered 55 respondents' perceptions of a new vocabulary app, their experience with existing apps, and how online learning compared with onsite methods for them. I followed it with four qualitative attitudinal interviews across different backgrounds, analysed with the Thinking-Feeling-Doing method to get at what people actually thought, felt and did around learning a language, not just what they said they wanted.",
          ],
        },
      ],
    },

    {
      id: "define",
      kind: "synthesis",
      title: "Define",
      blocks: [
        {
          type: "prose",
          text: [
            "The interviews and survey converged on a persona, Richy: someone with no time for instructor-led learning, no practice partner to correct her, and real communication barriers when travelling. The problem statement that came out of it (a need for a time-efficient, interactive learning experience with partners, and confident communication while travelling) set the direction for everything that followed.",
          ],
        },
        {
          type: "list",
          title: "What the goals and challenges pointed to",
          items: [
            "Develop fluency to communicate effectively, and make friends through language proficiency.",
            "Practise real-life conversation, and stay motivated through in-app incentives.",
            "Limited time for instructor-led learning, and no practice partners to give feedback.",
            "Communication barriers when travelling to new cities.",
          ],
        },
        {
          type: "prose",
          text: [
            "I mapped a task flow for the feature that mattered most to the persona (adding study friends) from opening the app through language and level selection to finding people by contact, location or the learning community.",
          ],
        },
      ],
    },

    {
      id: "craft",
      kind: "craft",
      title: "Develop",
      standfirst: "Low-fidelity wireframes, five-participant usability testing, then final UI.",
      blocks: [
        {
          type: "prose",
          text: [
            "I built low-fidelity wireframes first, then a digital low-fidelity pass with grids and columns for consistency, and mid-fidelity wireframes that converged on typography, icons and layout while still deliberately withholding colour: the point was to test structure and hierarchy, not finish.",
            "Five participants each completed four tasks (signing up, viewing the word of the day and a saved-words dictionary, earning experience points, and adding friends) in sessions of 5 to 10 minutes, moderated remotely on Zoom and Microsoft Teams, scored against Jakob Nielsen's error severity rating scale.",
          ],
        },
        {
          type: "list",
          title: "What testing recommended",
          items: [
            "Clearer sign-up and login entry points on their own pages.",
            "A voice-practice feature to help with pronunciation of new words.",
            "Slides explaining how the app works, instead of a video tour.",
            "Pop-up reminders explaining each feature on first use.",
            "Keeping the app as simple as possible throughout.",
          ],
        },
        {
          type: "prose",
          text: [
            "After testing, I built the final screens in Figma, starting with a style guide and a small design system: colour, icons, illustration, avatar imagery, typography, grid and buttons. A preference test on the splash screen found the original layout unbalanced; I revised the logo mark, background and typography until it read as more cohesive.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/vochub/splash-before-after.png",
            alt: "The VocHub splash screen before and after the preference test, first with a large triangle and circle crowding one corner, then with the elements evenly distributed and lighter type",
            width: 996,
            height: 781,
            caption: "Before and after the splash-screen preference test.",
          },
          description:
            "The first version stacks a large triangle and circle in one corner, leaving the rest of the screen empty. The revision replaces the pseudo logo, lightens the background and changes the typeface, so the elements sit evenly across the screen. The complaint the test surfaced was balance, not taste.",
        },
        {
          type: "prose",
          text: [
            "The design system underneath it was the part I would defend hardest. For a first end-to-end project the temptation is to design screens; what made the screens consistent was deciding the smaller things once, what a form field looks like in each state, what a tooltip is for as against a pop-up, and a spacing scale to place them on.",
          ],
        },
        {
          type: "figure",
          width: "wide",
          image: {
            src: "/work/vochub/ui-tokens.png",
            alt: "VocHub interface tokens, a form field in default, success, warning and error states; four tooltip and four pop-up variants; grid settings; and a spacing scale from 8 to 72 pixels",
            width: 820,
            height: 572,
            caption: "The tokens the screens were assembled from.",
          },
          description:
            "A form field in four states, each carrying a text label (Success, Warning, Error), rather than relying on its border colour alone. Tooltips and pop-ups are separated as distinct components with their own variants. The grid is four columns with a 16-pixel margin, and the spacing scale runs 8, 12, 16, 24, 32, 48, 56, 64, 72.",
        },
        {
          type: "claim",
          level: "interpretation",
          text: "Giving each form-field state a word as well as a colour was the one accessibility decision I made without being told to, and it is the one I would carry into every project since.",
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
            "Simple is almost always the better answer.",
            "Design for the user, not for the designer, designing for the ideal user helped the process converge faster.",
            "Put ideas on paper early, and take design critique from more experienced designers seriously, it limits errors before they compound.",
            "Stay open to unlearning: design habits and trends change, and holding onto either too tightly gets in the way of the next project.",
          ],
        },
        {
          type: "callout",
          title: "Where this project stopped",
          text: "Further usability and A/B testing, additional screens and continued refinement were the declared next steps and were not completed as part of this study.",
        },
      ],
    },
  ],
};
