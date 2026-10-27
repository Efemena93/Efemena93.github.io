import { Container } from "@/components/primitives";

import { StudioHero } from "./StudioHero";
import { StudioAmbient, StudioScene, type StudioArtifacts } from "./StudioScene";

/**
 * StudioHomepage — the two halves of the homepage, in order.
 *
 * Section 01 is the studio: a full-viewport introduction with four objects
 * drifting around it and nothing else. Section 02 is the work, beginning
 * below that viewport under its own heading.
 *
 * ── Why they are separate landmarks ───────────────────────────────────────
 * They used to be one region, with the introduction tucked into the corner of
 * the same surface as the projects. Splitting them gives a screen-reader user
 * navigating by landmark the same two-beat structure a sighted user gets by
 * scrolling: here is who she is, and here is the work.
 *
 * ── The screen-reader index ───────────────────────────────────────────────
 * A spatial arrangement is worth nothing to someone who cannot see it, so the
 * work section opens with two plain ordered lists: the four featured projects,
 * then the three explorations. Two lists rather than one because the split is
 * the editorial point of the section, and a single list of seven would flatten
 * exactly the hierarchy the visual layout exists to express.
 *
 * Deliberately not links — the artifacts below are the links, and duplicating
 * them would give a keyboard user fourteen tab stops for seven projects.
 */

export function StudioHomepage({ artifacts }: { artifacts: StudioArtifacts }) {
  const { iotVenture, merlinMines, zalando, hearEase, oliveIlive, vocHub, virtualBuddy } =
    artifacts;

  const featured = [
    { study: iotVenture, name: "IoT Venture GmbH, It's My Bike", what: "connected-bike app and partner dashboards" },
    { study: merlinMines, name: merlinMines.title, what: "CI/CD automation product for in-house developers" },
    { study: zalando, name: "Zalando Plus", what: "service design and design-system contributions" },
    { study: hearEase, name: hearEase.title, what: "assistive smart glasses and companion app" },
  ];

  const explorations = [
    { study: oliveIlive, name: oliveIlive.title, what: "responsive health portal" },
    { study: vocHub, name: vocHub.title, what: "vocabulary-learning app" },
    { study: virtualBuddy, name: virtualBuddy.title, what: "responsive study-community app" },
  ];

  return (
    <>
      {/* ── Section 01: the studio ── */}
      <StudioHero />

      {/* ── Section 02: the work ── */}
      <section id="selected-work" aria-labelledby="selected-work-heading" className="scroll-mt-24">
        <div className="sr-only">
          <p>Four featured projects, in the order they appear.</p>
          <ol>
            {featured.map(({ study, name, what }) => (
              <li key={study.slug}>
                {name}, {what}.
              </li>
            ))}
          </ol>
          <p>Then three further explorations.</p>
          <ol>
            {explorations.map(({ study, name, what }) => (
              <li key={study.slug}>
                {name}, {what}.
              </li>
            ))}
          </ol>
        </div>

        <StudioScene artifacts={artifacts} />

        <Container className="relative pb-16 lg:pb-20">
          <StudioAmbient />
        </Container>
      </section>
    </>
  );
}
