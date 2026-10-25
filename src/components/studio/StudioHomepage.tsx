import { Container } from "@/components/primitives";

import { StudioAmbient, StudioIntro, StudioScene, type StudioArtifacts } from "./StudioScene";

/**
 * StudioHomepage — "Efemena's Design Studio".
 *
 * The homepage's introduction and selected-work section, on one surface.
 *
 * ── Landmarks ─────────────────────────────────────────────────────────────
 * The whole thing is one region labelled by the page's h1, with the six
 * artifacts inside it as their own "Selected work" section — three
 * professional roles, then three case studies, each group under its own
 * heading inside StudioScene. A screen-reader user navigating by landmark
 * reaches "Selected work" and finds all six there, rather than six
 * unexplained articles adrift in the hero.
 *
 * ── The screen-reader index ───────────────────────────────────────────────
 * A spatial arrangement is worth nothing to someone who cannot see it, so the
 * section opens with a plain ordered list of the six projects, in the same
 * priority order used on mobile: the three professional roles, then the
 * three case studies. It is deliberately not links — the artifacts below are
 * the links, and duplicating them would give a keyboard user twelve tab
 * stops for six projects.
 */

export function StudioHomepage({ artifacts }: { artifacts: StudioArtifacts }) {
  const { iotVenture, zalando, merlinMines, oliveIlive, vocHub, virtualBuddy } = artifacts;

  const professional = [
    { study: zalando, name: "Zalando", what: "service design and design-system contributions" },
    { study: iotVenture, name: "IoT Venture GmbH", what: "connected-bike app and partner dashboards" },
  ];
  const caseStudies = [
    { study: oliveIlive, name: oliveIlive.title, what: "responsive health portal" },
    { study: merlinMines, name: "Merlin Mines", what: merlinMines.projectType },
    { study: vocHub, name: vocHub.title, what: "vocabulary-learning app" },
    { study: virtualBuddy, name: virtualBuddy.title, what: "responsive study-community app" },
  ];

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <section aria-labelledby="studio-heading" className="contents">
        <StudioScene artifacts={artifacts} intro={<StudioIntro />} />
      </section>

      {/* The plain index, for anyone not receiving the picture. The six
          artifacts above are the only visible list of work. */}
      <div className="sr-only">
        <h2 id="studio-heading">Selected work</h2>
        <p>Six projects, in the order they appear.</p>
        <ol>
          {[...professional, ...caseStudies].map(({ study, name, what }) => (
            <li key={study.slug}>
              {name}: {what}.
            </li>
          ))}
        </ol>
      </div>

      <Container className="relative pb-16 lg:pb-20">
        <StudioAmbient />
      </Container>
    </section>
  );
}
