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

- All 18 pages return 200 from a plain static file server; unknown paths 404
- 0 axe violations across all nine route templates
- The client bundle hydrates: the signal field drifts, hover and focus both reveal labels, and selecting a point navigates
- Every internal link on the homepage resolves
- No console errors
- The project-site build (`NEXT_PUBLIC_BASE_PATH=/efemena-portfolio`) was served under that subpath and re-tested: fonts load, JS hydrates, navigation resolves, no failed requests

---

## The homepage

The first screen carries the name, the discipline and the positioning line as plain text at first paint, with no entrance animation and nothing layered behind them. Three actions sit directly beneath: **View selected work**, **About me**, and **Download résumé** (which reads "Read résumé" and links to `/resume` until you drop a PDF in and set `site.resumePdf` — it will not promise a download that does not exist).

### The signal field

To the right of the headline, sixteen points drift on slow seeded orbits. Each one is a real thing, defined in `src/content/signals.ts`:

| Kind | What it is | Where it goes |
| --- | --- | --- |
| **Project** | A case study | That case study |
| **Research theme** | A question the work keeps returning to | The project it came from |
| **Observation** | Something noticed during research — an interpretation, never a statistic | The project it came from |

Bringing the pointer near a point brightens it, strengthens its threads, and reveals the title and a one-sentence description. Threads are **authored, not distance-derived** — each line in `signalThreads` is a relationship that actually exists between two ideas, so the network means something rather than just looking like one.

Four rules keep this from becoming a puzzle:

1. **Every point is a real `<a>` in the DOM**, positioned over a decorative canvas. Keyboard-reachable, with a visible focus ring; **focus reveals exactly what hover reveals** — verified, not assumed.
2. **The canvas draws threads and glow only.** It is `aria-hidden` and never carries information that is not also in the DOM. A live region announces the active point.
3. **`SignalIndex` renders all sixteen as plain text** directly below the hero — always, not behind a toggle. Nothing has to be discovered.
4. **Below 1024px the field is not rendered at all.** Pointer proximity has no honest touch equivalent, so the list is the whole experience there.

The field element is offset to the right of the headline column, so no point can hide behind text. Label placement is measured at runtime — right, left, or below — with a margin that absorbs a full orbit of drift. Verified across every node at 1440, 1280 and 1024: no label overlaps the copy, none goes off-screen.

### Spatial continuity

Selecting a point records its screen position (`signal-origin.ts`, sessionStorage), expands a bloom from that exact spot over 420ms, then navigates. The case study renders `ArrivalBloom`, which continues outward from the same coordinates over 700ms and clears. Open a case study any other way — direct link, work index, bookmark — and nothing is shown. Under reduced motion the origin is still consumed, so it cannot leak into a later navigation, but nothing is drawn.

### Ambient status

One line above the name that changes with **the visitor's own local hour** — "An afternoon for observing", "An evening for reflecting". Client-rendered, because the server has no idea what time it is where you are. It claims nothing: no visitor count, no "currently available", no fabricated recency. It acknowledges that someone is here at a particular moment, and no more.

### Scroll behaviour

Scroll-*linked* rather than scroll-triggered, so the page reads as one continuous space. The hero recedes to 18% opacity as the work arrives, holding full opacity through the first third of the travel so a slow reader is not fading the headline out from under themselves. A thread draws itself from the hero down into the featured work. Project covers are uncovered by a lifting mask rather than a fade. Everything sits in the 300–700ms band, and all of it is off under reduced motion — where covers are simply present rather than hidden.

### Featured cards

Each prints the facts a recruiter scans before deciding whether to read further, none of it behind a hover: **problem area**, **my role**, **project type**, and one **outcome** — or, where there is not one yet, the honest **current status**. Those four are required fields on `CaseStudy`, so a project cannot be added to the site without them. The whole card is one link and one tab stop.

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
    primitives/            container, section, eyebrow, prose, links, meta
    motion/                MotionProvider + Reveal / RevealGroup / toggle
    signals/               the atmosphere: thread field, cover fields,
                           glow, grain, cursor trace
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

Verified with axe-core across all 10 route templates at 1440px, plus mobile, reduced-motion and keyboard passes.

- **0 axe violations** on every route
- Skip link is the first Tab stop on every page
- Exactly one `<h1>` per page; no skipped heading levels
- No horizontal scroll at 375px or 1440px
- Mobile nav: labelled `Menu` button (never a bare icon), focus trapped, Escape closes, focus returns to the trigger
- Signal field: all sixteen points keyboard-reachable; focus and hover reveal identical content; positions verified stable under reduced motion
- Body text at 13.9:1; every text colour ≥ 5:1; light accents are markers and surfaces only, never type
- `forced-colors`, `prefers-contrast: more` and `prefers-reduced-transparency` all drop the atmosphere layer and keep the content
- Contact form: visible persistent labels, `autocomplete` tokens, inline errors linked with `aria-describedby` plus an assertive summary, and **no CAPTCHA** — a honeypot and a timing check instead, so no puzzle is put in front of a human
- Route changes move focus to the new `<h1>` and announce politely — but *not* on first load, where the browser's own focus position is what a keyboard user expects

**No analytics, no cookies, no cookie banner, no third-party font request.** Fonts are self-hosted at build time by `next/font`. The site collects nothing, so it never has to ask.

---

## Replacing the placeholder covers

Each project currently shows a constellation seeded from its slug — stable, unique per project, and part of the same visual environment as the hero. To use real artwork, put images in `public/work/<slug>/` and swap `CoverField` for `next/image` in `src/components/content/CaseStudyCard.tsx`. Nothing else changes.

Alt text policy: describe what a screen *does* and what decision it supports. Never "screenshot of app". Complex diagrams get a short `alt` plus a visible text equivalent, so the reasoning is available to everyone.
