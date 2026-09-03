import Link from "next/link";

import { Container, Eyebrow } from "@/components/primitives";
import type { CaseStudy } from "@/content/types";

import { StudioAmbient, StudioIntro, StudioScene } from "./StudioScene";

/**
 * StudioHomepage — "Efemena's Design Studio".
 *
 * The homepage's introduction and selected-work section, on one surface.
 *
 * ── Landmarks ─────────────────────────────────────────────────────────────
 * The whole thing is one region labelled by the page's h1, with the selected
 * work inside it as its own section labelled "Selected work". Nesting them
 * matters: the artifacts are the selected-work section, so a screen-reader
 * user navigating by landmark reaches "Selected work" and finds the three
 * projects there, rather than three unexplained articles adrift in the hero.
 *
 * ── The screen-reader index ───────────────────────────────────────────────
 * A spatial arrangement is worth nothing to someone who cannot see it, so the
 * section opens with a plain ordered list of the three projects. It is
 * deliberately not links — the artifacts below are the links, and duplicating
 * them would give a keyboard user six tab stops for three projects.
 */

export function StudioHomepage({
  wall,
  prototype,
  dashboard,
}: {
  wall: CaseStudy;
  prototype: CaseStudy;
  dashboard: CaseStudy;
}) {
  const projects = [
    { study: wall, name: "Holding Pattern", what: "graduate research capstone" },
    { study: prototype, name: prototype.title, what: "mobile product design" },
    { study: dashboard, name: dashboard.title, what: "responsive health portal" },
  ];

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <section aria-labelledby="studio-heading" className="contents">
        <StudioScene
          wall={wall}
          prototype={prototype}
          dashboard={dashboard}
          intro={<StudioIntro />}
        />
      </section>

      <Container className="relative pb-16 lg:pb-20">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6 border-t border-line pt-8">
          <div>
            <Eyebrow as="h2" id="studio-heading" className="mb-3">
              Selected work
            </Eyebrow>

            {/* The plain index, for anyone not receiving the picture. */}
            <p className="sr-only">Three projects, in the order they appear:</p>
            <ol className="sr-only">
              {projects.map(({ study, name, what }) => (
                <li key={study.slug}>
                  {name} — {what}.
                </li>
              ))}
            </ol>

            <p className="measure text-small leading-relaxed text-charcoal-muted">
              Three projects, arranged as they sit in the studio: the research on the
              wall, the prototype on the desk, the interface on the screen. Each object
              opens its case study, and hovering or tabbing to one brings up the problem
              it started from, my role and where it currently stands. Everything works
              from the keyboard —{" "}
              <Link href="/work" className="link-underline text-blue-deep">
                the conventional list is here
              </Link>{" "}
              if you would rather read it that way.
            </p>
          </div>

          <StudioAmbient />
        </div>
      </Container>
    </section>
  );
}
