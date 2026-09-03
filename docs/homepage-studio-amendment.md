# Homepage Studio Amendment

Amendment to `docs/signals-of-care-spec.md`. This overrides the previous
homepage layout where the two conflict. It does not replace the rest of the
specification.

Supplied by Efemena Udezi. Reproduced verbatim.

---

Revise the homepage direction for the Signals of Care portfolio.

I want the homepage to feel like entering a thoughtful Product and Interaction Designer's studio. The studio should contain carefully arranged design artifacts, and each primary interactive artifact should lead to a corresponding case study.

This instruction overrides the previous homepage layout where it conflicts, but it does not replace the rest of `docs/signals-of-care-spec.md`.

## Central concept

Create an original interactive environment called:

**"Efemena's Design Studio"**

The homepage should feel like a working design studio where research, prototypes, evidence and stories are being shaped.

It must not look like:

* A generic portfolio-card grid
* A video game
* A fantasy room
* A children's illustration
* An interior-design website
* A literal copy of chloeyan.me
* A 3D environment requiring complicated navigation

Use a mature, editorial, slightly dimensional visual style. Build the studio with responsive HTML, CSS and lightweight SVG elements rather than a large background image.

The studio should feel curated, calm and professional.

## Recruiter clarity

Keep a clear introduction above or beside the studio:

Eyebrow:
PRODUCT + INTERACTION DESIGNER

Heading:
I design for the human experiences that are difficult to see.

Supporting text:
I'm Efemena Udezi, a Product and Interaction Designer using research, storytelling and interaction design to create emotionally intelligent digital experiences.

Supporting label:
M.S. Interaction Design · Designing professionally since 2021

Primary instruction:
Explore the studio or view all work

A recruiter must understand my name, role and value before interacting with the studio.

Keep conventional navigation visible:

* Efemena Udezi
* Work
* About
* Library
* Résumé
* Contact

Do not force visitors to discover navigation through objects.

## Studio layout

Create a composed studio environment with three primary case-study artifacts.

### 1. Research wall — Holding Pattern

Represent Holding Pattern through:

* Research notes
* An emotional-journey line
* A deployment timeline
* Small evidence labels
* Two separated points connected by a restrained signal line
* A visible project label

Default visible label:
Holding Pattern
Emotional continuity during military deployment
Graduate capstone · Research in progress

Interaction:

* Notes organize slightly when hovered or keyboard-focused.
* A fine signal connects the separated points.
* The project title and "Open case study" become more prominent.
* Clicking or activating the artifact opens the Holding Pattern case study.

Do not use real participant quotations unless they already exist in the approved case-study content.

### 2. Mobile prototype — SyncHearts

Place a mobile-device prototype or phone frame on the studio desk.

Default visible label:
SyncHearts
Supporting connection across distance and conflicting schedules
UX research + product design

Interaction:

* The phone screen changes gently between two approved interface states.
* A message signal moves once between two points.
* Additional metadata appears beside the device.
* Clicking or activating the artifact opens the SyncHearts case study.

Do not autoplay a complicated prototype or create fake product screens.

### 3. Health dashboard — Olive-Ilive

Display Olive-Ilive on a desktop monitor or tablet in the studio.

Default visible label:
Olive-Ilive
Making fragmented health information easier to access
Research, responsive UX and interface design

Interaction:

* Information layers come into focus.
* One or two interface regions receive a restrained highlight.
* Research and testing metadata becomes visible.
* Clicking or activating the artifact opens the Olive-Ilive case study.

Use real approved screens when available. Until then, use a clearly labelled abstract placeholder—not a fabricated final interface.

## Professional-experience artifacts

Reserve visual locations for:

* IOT Venture GmbH
* Zalando SE

Possible objects:

* A connected-bike device or dashboard panel for IOT Venture
* A design-token specimen or service-blueprint roll for Zalando

Do not activate these objects as case-study links until approved public content exists.

When inactive:

* Do not make them look clickable.
* Label them "Professional experience."
* Do not create empty destination pages.
* Do not expose confidential work.
* Do not publish unsupported performance metrics.

## Artifact interaction system

Every interactive artifact must:

* Have a visible project title without hover
* Have a visible or easily discoverable "Open case study" action
* Use a semantic link
* Be keyboard accessible
* Have a strong focus state
* Work without pointer tracking
* Provide a minimum 44×44px target
* Include an accessible name describing its destination
* Preserve essential information when animation is disabled
* Avoid opening in a new tab

Hover and focus may reveal:

* Human problem
* My role
* Timeline
* Project status
* Research evidence
* Case-study CTA

Do not hide all project information until hover.

## Signals of Care integration

Use Signals of Care as the connective layer inside the studio.

Examples:

* Fine lines connecting research evidence
* A signal passing from a note to a prototype
* Small illuminated points showing areas of inquiry
* Ambient labels such as "Researching," "Designing," "Testing" and "Reflecting"
* A subtle connection between the three featured projects

The studio artifacts should remain the primary experience. The signal field should support them, not compete with them.

Remove:

* Shooting stars
* Fireworks
* Falling petals
* Cursor sparks
* Magical circles
* Large glowing moon
* Constant full-screen particle animation

## Visual style

Use:

* Near-black and warm graphite studio surfaces
* Warm cream paper
* Muted indigo for inquiry and reflection
* Soft sage for evidence and validation
* Dusty blue for interface artifacts
* Restrained highlights and realistic depth
* Soft directional lighting
* Fine borders and subtle paper textures
* One sans-serif and one serif type family

Avoid:

* Photorealistic office stock imagery
* Excessive glassmorphism
* Neon cyberpunk styling
* Cartoon objects
* Clutter
* Overly literal art supplies
* Strong perspective distortion
* Tiny unreadable notes
* Decorative objects that resemble links

## Content hierarchy

Organize the homepage as:

1. Persistent navigation
2. Professional introduction
3. Interactive design studio
4. Short explanation of how to explore
5. Professional experience
6. Practice statement
7. From the Library preview
8. Contact CTA
9. Footer

The interactive studio is the selected-work section. Do not repeat the same three projects immediately beneath it in another large card grid.

Provide a compact "View all work" link for visitors who prefer conventional navigation.

## Library integration

Do not place the entire Library inside the design studio.

After the studio, create a quieter editorial section called:

**"From the Library"**

Use this text:

"Outside the case studies, I write short stories about the emotional details that shape how people connect, remember and change."

Show one featured story and up to two additional story links.

The Library must remain visually secondary to selected professional work.

## Responsive behavior

Desktop:

* Present the artifacts as a composed studio scene.
* Allow subtle spatial depth and pointer proximity.
* Keep project labels readable.
* Ensure artifacts do not overlap essential text.

Tablet:

* Simplify the scene into two visual levels.
* Maintain clear artifact labels and touch targets.

Mobile:

* Transform the studio into a vertical "studio shelf."
* Present each artifact as a clearly labelled, full-width interactive composition.
* Do not shrink the entire desktop room to fit the screen.
* Do not depend on hover.
* Avoid horizontal scrolling.
* Keep the visual metaphor while prioritizing scanability.

Reduced motion:

* Display a static, polished studio.
* Keep all projects and actions available.
* Remove signal movement and object transformations.

## Accessibility

* Use a semantic section labelled "Selected work."
* Represent each case-study artifact as an article containing a link.
* Provide a short textual project list for screen readers.
* Decorative SVG elements must use `aria-hidden="true"`.
* Project visuals require meaningful alternative text.
* Maintain WCAG AA contrast.
* Ensure focus order follows the visual order.
* Do not use color alone to communicate status.
* Test at 200% zoom.
* Test keyboard-only navigation.
* Test with reduced motion.

## Implementation requirements

Build this inside the existing Next.js component system.

Suggested components:

* `DesignStudio`
* `StudioArtifact`
* `ResearchWallArtifact`
* `MobilePrototypeArtifact`
* `DashboardArtifact`
* `SignalThread`
* `ArtifactLabel`
* `StudioMobileShelf`

Do not create one enormous component.

Use the existing case-study content and routes. Do not invent new evidence, quotations, screens or outcomes.

Keep the production JavaScript lightweight. Prefer CSS transitions and static SVG over constant canvas rendering.

## Review checkpoint

Implement only the homepage studio and its responsive variants.

Do not merge or deploy yet.

When complete, provide:

1. Desktop screenshot at 1440px
2. Tablet screenshot at 768px
3. Mobile screenshot at 375px
4. Keyboard-focus screenshot
5. Reduced-motion screenshot
6. List of artifacts and their destinations
7. Changed-file list
8. Performance comparison
9. Accessibility test results
10. Any missing images or content required from me

Stop for my approval before publishing.

---

## Implementation notes

Recorded at build time, where the amendment met something already in the
repository.

**Qualification.** The amendment says "M.S. Interaction Design". Both the ATS
résumé and Efemena's own landing page say **M.A.** The site uses M.A. This is
flagged rather than silently changed — one word, and hers to settle.

**`StudioMobileShelf`.** Built as a layout mode of `DesignStudio` rather than a
second component tree. Two trees would mean the same three projects appear
twice in the DOM, which either duplicates the tab order or hides content from
assistive technology depending on how it is suppressed. One markup, responsive
CSS, one set of tab stops.

**Interface states.** No approved product screens exist for SyncHearts or
Olive-Ilive. Every device screen in the studio is an explicitly schematic
abstraction — geometric regions, no invented copy, no fabricated final UI —
and is labelled as such in its alternative text. Replace with real screens by
dropping them in and setting `cover.src` on the case study.

**Removed.** The glowing moon, the drifting full-screen orbs and the
pointer-tracking constellation are gone from the homepage, per "Remove".
