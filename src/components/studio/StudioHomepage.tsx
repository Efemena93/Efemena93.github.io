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
 * work section opens with a plain ordered list of the seven projects in the
 * order they appear. It is deliberately not links — the artifacts below are
 * the links, and duplicating them would give a keyboard user fourteen tab
 * stops for seven projects.
 */

export function StudioHomepage({ artifacts }: { artifacts: StudioArtifacts }) {
  const { iotVenture, merlinMines, zalando, hearEase, oliveIlive, vocHub, virtualBuddy } =
    artifacts;

  const index = [
    { study: iotVenture, name: "IoT Venture GmbH, It's My Bike", what: "connected-bike app and partner dashboards" },
    { study: merlinMines, name: merlinMines.title, what: "CI/CD automation product for in-house developers" },
    { study: zalando, name: "Zalando", what: "service design and design-system contributions" },
    { study: hearEase, name: hearEase.title, what: "assistive smart glasses and companion app" },
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
          <p>Seven projects, in the order they appear.</p>
          <ol>
            {index.map(({ study, name, what }) => (
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
