# Signals of Care

Portfolio site for **Efemena Udezi** — UX / Product / Interaction Designer.

> UX/Product Designer creating emotionally intelligent digital experiences through research, storytelling and interaction design.

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion (Framer Motion) · zero runtime dependencies beyond those.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export — writes 18 HTML pages into `out/` |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint, including the jsx-a11y rules |
| `npm run check` | Typecheck + lint |
| **`npm run content:todo`** | **Lists every piece of content still to write or fill in** |

Start with `npm run content:todo`. It is the to-do list for finishing the site.

---

## Filling in your details

Everything personal lives in **one file**: `src/content/site.ts`. Replace the `TODO(...)` values and the header, footer, contact page, résumé, sitemap, JSON-LD and social cards all update together. Nothing else hard-codes an email, a URL or a location.

Then:

| What | Where |
| --- | --- |
| Employment history, education, skills | `src/content/resume.ts` |
| Résumé PDF | drop at `public/efemena-udezi-resume.pdf`, set `site.resumePdf` |
| Case studies | `src/content/case-studies/*.ts` |
| Field notes | `src/content/field-notes/index.ts` |
| Contact form delivery | `FORM_ENDPOINT` in `src/components/content/ContactForm.tsx` — leave empty and it composes an email instead, which always works |

### Case study status

| Slug | State |
| --- | --- |
| `synchearts` | **Written** from your published case study. Figures preserved exactly (27 respondents, 19 questions, 5 interviews, 16 weeks). |
| `olive-ilive` | **Written** from your published case study. Figures preserved exactly (52 participants, 19 questions, 5 interviews; A/B n=17, 12/5 at 95%). |
| `holding-pattern` | **Written from your framing.** No research findings were invented — where fieldwork data belongs there is a `todo` block. Verify every claim's level before publishing. |
| `windchill-engineering-change` | Scaffold |
| `vochub` | Scaffold |
| `virtualbuddy` | Scaffold |

---

## Publishing

The site is a **static export** — `npm run build` writes plain HTML into `out/`. There is no server to run. Eighteen HTML pages plus a sitemap, robots.txt and a social image; about 5MB in total.

### GitHub Pages (recommended)

The repository ships with `.github/workflows/deploy.yml`, which builds and publishes on every push to `main`. It works out for itself whether this is a **user site** (`you.github.io`) or a **project site** (`you.github.io/repo-name`) and sets the base path and canonical URL to match — which is the single thing that silently breaks a statically-exported Next.js site on Pages.

```bash
cd efemena-portfolio

# Create the repository on github.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/efemena-portfolio.git
git push -u origin main
```

Then, once: **Settings → Pages → Build and deployment → Source: GitHub Actions.** The next push publishes.

Nothing in the workflow needs editing. Rename the repository and the URLs follow.

### Any other static host

Netlify, Cloudflare Pages, Vercel, S3 — point them at this repository with build command `npm run build` and publish directory `out`. Or drag the contents of `out/` straight into the host's upload box; it is a complete site with no build step required.

### Publishing at a custom domain

Set `NEXT_PUBLIC_SITE_URL` to the domain (it drives canonical links, the sitemap and social cards) and leave `NEXT_PUBLIC_BASE_PATH` unset. For Pages, add the domain under Settings → Pages → Custom domain and commit a `public/CNAME` file containing it.

### What was changed to make the export work

Three route handlers that Next would otherwise treat as dynamic — `opengraph-image`, `robots.txt` and `sitemap.xml` — are marked `export const dynamic = "force-static"`, so they are rendered once at build time and written into `out/` like any other file. `images.unoptimized` is set because there is no server to optimise on; the site uses inline SVG rather than bitmaps, so nothing is lost, and `next/image` stays usable if real cover artwork is added later.

`trailingSlash: true` produces directory-style URLs (`/work/holding-pattern/`), which every static host resolves without rewrite rules.

### Verified against the built output, not the dev server

- Every page returns 200 from a plain static file server; unknown paths 404
- 0 axe violations across the route templates
- The client bundle hydrates: the studio objects drift, hover and focus both reveal their titles, and selecting one navigates
- Every internal link on the homepage resolves
- No console errors
- The project-site build (`NEXT_PUBLIC_BASE_PATH=/efemena-portfolio`) was served under that subpath and re-tested: fonts load, JS hydrates, navigation resolves, no failed requests

---

## The homepage

Two sections, then three short ones. Navigation and footer come from the layout.

**01. The studio.** A full-height photograph of a working room, with the name, the discipline and a short introduction over it as plain text. No project card, thumbnail or project name appears in this first screen: the visitor gets the room, and finds the work by scrolling or by touching one of the objects.

- **Four floating objects** (`FloatingSymbols`) drift in the edges of the room from `md` upward. Each links to a real project: a bicycle to IoT Venture, a wand to SpellCarver, a garment to Zalando and glasses to HearEase. The list lives in one place, `src/content/project-objects.ts`.
- **On phones** the objects do not float. `StudioObjectRow` shows the same four links as a labelled row of chips, in the same order.
- **One line that follows the visitor's own hour** (`StudioHour`), for example "A morning for noticing". It describes the hour, not the designer's availability. The server cannot know the visitor's time, so it renders after hydration, and the slot keeps its height so nothing below moves.
- The photograph is an `img` with `srcset` and a portrait crop for phones, in `public/studio/`. A scrim anchored to the darkest corner keeps the text readable.

**02. Selected work.** Below the first screen, under its own heading, seven artifacts in this order: IoT Venture, SpellCarver (Merlin Mines), Zalando, HearEase, Olive-Ilive, VocHub and VirtualBuddy. Each has a name, a one-line description, a short label and a link to its case study. The work is not repeated in a card grid. A "View all work" link goes to the full list at `/work`.

Then: the practice statement ("How I work"), "From the Library", and the contact call to action.

### Project images

Each artifact shows an image from `src/content/project-images.ts`, keyed by case-study slug.

- To use a real image, put the file in `public/work/<slug>/`, point the entry's `src` at it and describe it in `alt`. Use the `real(...)` helper.
- An entry made with `stand(...)` is a placeholder. It shows the caption "Placeholder image, real screen to come" until it is replaced. VirtualBuddy is the only one left.
- If a project has no entry, its artifact falls back to a drawn illustration.
- Only add images that are approved for public display.

---

## The evidence system

The one thing on this site that a design director will not have seen elsewhere.

**No claim can be authored without declaring what kind of claim it is.** The type system enforces it:

```ts
{ type: "claim", level: "evidence", text: "…", source: "Survey of 52 participants" }
```

| Level | Renders as | Means |
| --- | --- | --- |
| `evidence` | **Observed** · filled sage dot · solid rule | Came from data you collected. Name the source. |
| `interpretation` | **Interpreted** · half-filled blue dot · solid rule | Your reading of that data. |
| `hypothesis` | **Hypothesis** · hollow clay dot · dashed rule | Proposed, not yet tested. |
| `concept` | **Unvalidated concept** · hollow charcoal dot · dotted rule | A design idea with no evidence behind it. |

Encoding is never colour alone — label, dot fill and rule style all differ, so the distinction survives greyscale, colour blindness, forced-colors mode and a screen reader.

`EvidenceLegend` renders once near the top of any case study that uses claims, so the vocabulary is established before it is used.

**The discipline only holds if downgrading is possible.** If evidence turns out to be thinner than you remembered, move the claim down a level. If a concept fails testing, delete it rather than quietly relabelling it.

---

## Architecture

```
src/
  app/                     routes — home, work, work/[slug], about,
                           field-notes, field-notes/[slug], resume,
                           contact, 404, sitemap, robots, opengraph-image
  components/
    layout/                header, footer, skip link, route announcer
    primitives/            container, section, eyebrow, links, meta
    motion/                MotionProvider + Reveal / RevealGroup / toggle
    signals/               the atmosphere: thread field, cover fields,
                           glow, grain, cursor trace
    studio/                the homepage: photographic hero, floating objects,
                           project artifacts
    content/               case study & field note rendering, evidence system
    seo/                   JSON-LD
  content/                 all site content, as typed data
  lib/                     fonts, seo helpers, utilities
```

Two rules hold the "70% clarity / 30% poetry" line:

1. **No component outside `motion/` imports `motion/react` or reads `matchMedia` for motion.** One decision about motion, made once, honoured everywhere.
2. **Everything in `signals/` is `aria-hidden` and `pointer-events: none`, and never contains text, a control, or information.** Remove the entire atmosphere layer and every page is still a complete document.

`BlockRenderer` switches exhaustively on the block union with a `never` assertion, so adding a content block type without writing its renderer is a build error rather than a silently missing section.

---

## Motion

Three inputs resolved in priority order: the visitor's explicit choice → the OS `prefers-reduced-motion` setting → full motion. The choice is offered in the footer because people frequently browse on borrowed or freshly installed machines where the OS setting was never turned on.

A tiny inline script in `<head>` resolves it before first paint, so the page never renders animated and then snaps to still.

**Under reduced motion:** the animated canvas is replaced by `ThreadFieldStatic` — a seeded SVG of *the same composition*. It stops moving; it does not disappear. Reveals render at final state. Page transitions are instant. Cursor trace and cover scaling are off, but hover still produces a colour and underline change, so affordance survives. Nothing is hidden and nothing becomes unreachable.

Evidence markers never animate under any setting. Evidence that shimmers reads as decoration.

---

## Accessibility

Verified with axe-core across the route templates at 1440px and 375px, plus mobile, reduced-motion and keyboard passes.

- **0 axe violations** on every route
- Skip link is the first Tab stop on every page
- Exactly one `<h1>` per page; no skipped heading levels
- No horizontal scroll at 375px or 1440px
- Mobile nav: labelled `Menu` button (never a bare icon), focus trapped, Escape closes, focus returns to the trigger
- Studio objects: real links with accessible names, in the same order as the work section; each is a tab stop with a visible focus ring and a hit area of at least 44 by 44 pixels; focus and hover show the same title; they stop moving under reduced motion
- Body text at 13.9:1; every text colour ≥ 5:1; light accents are markers and surfaces only, never type
- `forced-colors`, `prefers-contrast: more` and `prefers-reduced-transparency` all drop the atmosphere layer and keep the content
- Contact form: visible persistent labels, `autocomplete` tokens, inline errors linked with `aria-describedby` plus an assertive summary, and **no CAPTCHA** — a honeypot and a timing check instead, so no puzzle is put in front of a human
- Route changes move focus to the new `<h1>` and announce politely — but *not* on first load, where the browser's own focus position is what a keyboard user expects

**No analytics, no cookies, no cookie banner, no third-party font request.** Fonts are self-hosted at build time by `next/font`. The site collects nothing, so it never has to ask.

---

## Case study images

Images inside a case study are set in the content file, in a `figure` block with `src`, `alt` and a caption. Put the files in `public/work/<slug>/`. For the homepage artifacts, see "Project images" above.

Alt text policy: describe what a screen *does* and what decision it supports. Never "screenshot of app". Complex diagrams get a short `alt` plus a visible text equivalent, so the reasoning is available to everyone.
