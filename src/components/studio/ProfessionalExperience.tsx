import { Container, Eyebrow } from "@/components/primitives";

/**
 * Professional experience — IoT Venture GmbH and Zalando SE.
 *
 * Deliberately inert. There is no approved public case-study content for
 * either, so neither is a link, neither has a destination page, and neither
 * is styled to look like it has one: no hover lift, no arrow, no underline,
 * no cursor change. They are objects on a shelf, labelled and shown.
 *
 * What is stated here is only what the résumé already states publicly: the
 * employer, the role, the dates and the surface worked on. No performance
 * figures — the résumé's numbers are hers to give in an interview, and this
 * site does not publish unsupported metrics. No confidential material, no
 * screens.
 *
 * When approved content exists, each becomes a StudioArtifact with a real
 * destination and this component goes away.
 */

const ROLES = [
  {
    organisation: "IoT Venture GmbH",
    role: "Sole UI/UX Designer",
    period: "Oct 2023 – Aug 2025 · Darmstadt",
    note: "Owned the full design function for a connected-bike product — mobile app, partner dashboard and white-label partner apps.",
    /** A device panel: the connected-bike dashboard, abstracted. */
    kind: "panel" as const,
  },
  {
    organisation: "Zalando SE",
    role: "Product Design Intern",
    period: "Jun 2022 – Dec 2022 · Berlin",
    note: "Service blueprinting and design-system work for Zalando Plus, from research through pilot launch.",
    /** A blueprint roll. */
    kind: "blueprint" as const,
  },
];

function PanelObject() {
  return (
    <svg
      viewBox="0 0 200 96"
      role="presentation"
      aria-hidden="true"
      className="block h-auto w-full max-w-[200px] text-charcoal-muted"
    >
      <rect
        x="1"
        y="1"
        width="198"
        height="82"
        rx="6"
        className="fill-sunk"
        stroke="currentColor"
        strokeOpacity="0.22"
      />
      <rect x="14" y="16" width="52" height="52" rx="3" fill="currentColor" opacity="0.09" />
      <circle cx="40" cy="42" r="14" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="40" cy="42" r="3" fill="currentColor" opacity="0.35" />
      {[16, 30, 44, 58].map((y) => (
        <rect key={y} x="78" y={y} width={y === 58 ? 62 : 108} height="4" rx="2" fill="currentColor" opacity="0.16" />
      ))}
      <line x1="60" y1="83" x2="140" y2="83" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
    </svg>
  );
}

function BlueprintObject() {
  return (
    <svg
      viewBox="0 0 200 96"
      role="presentation"
      aria-hidden="true"
      className="block h-auto w-full max-w-[200px] text-charcoal-muted"
    >
      {/* A blueprint roll, partly unrolled: swimlanes and touchpoints. */}
      <rect x="26" y="14" width="150" height="66" rx="2" className="fill-sunk" stroke="currentColor" strokeOpacity="0.22" />
      {[28, 44, 60].map((y) => (
        <line key={y} x1="34" y1={y} x2="168" y2={y} stroke="currentColor" strokeOpacity="0.16" />
      ))}
      {[52, 80, 108, 136].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={28} r="3" fill="currentColor" opacity="0.3" />
          <circle cx={x} cy={44} r="3" fill="currentColor" opacity={i % 2 ? 0.3 : 0.14} />
          <line x1={x} y1="31" x2={x} y2="41" stroke="currentColor" strokeOpacity="0.2" />
        </g>
      ))}
      {/* Rolled edge */}
      <rect x="14" y="10" width="14" height="74" rx="7" className="fill-raised" stroke="currentColor" strokeOpacity="0.24" />
      <rect x="172" y="10" width="14" height="74" rx="7" className="fill-raised" stroke="currentColor" strokeOpacity="0.24" />
    </svg>
  );
}

export function ProfessionalExperience() {
  return (
    <section
      aria-labelledby="professional-heading"
      className="border-t border-line py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mb-10 lg:mb-14">
          <Eyebrow as="h2" id="professional-heading" className="mb-4">
            Professional experience
          </Eyebrow>
          <p className="measure text-body text-charcoal-soft">
            Work done inside companies, where the output belongs to the company. There
            are no public case studies for these — happy to talk through either of them
            properly in an interview.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-2 lg:gap-14">
          {ROLES.map((role) => (
            <li
              key={role.organisation}
              // No group, no hover lift, no cursor change: this is not a link
              // and must not read as one.
              className="rounded-lg border border-line bg-paper p-6 lg:p-8"
            >
              <div className="mb-6 opacity-80">
                {role.kind === "panel" ? <PanelObject /> : <BlueprintObject />}
              </div>
              <p className="label-type text-charcoal-muted">Professional experience</p>
              <h3 className="mt-2 font-display text-h3 text-charcoal">{role.organisation}</h3>
              <p className="mt-1.5 text-small text-charcoal-soft">{role.role}</p>
              <p className="label-type mt-2 text-charcoal-muted">{role.period}</p>
              <p className="mt-4 text-small leading-relaxed text-charcoal-soft">{role.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
