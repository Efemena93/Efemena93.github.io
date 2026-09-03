import { ContactCTA } from "@/components/content/ContactCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow, Hairline, LinkButton, Section, Tag } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { resume } from "@/content/resume";
import { profile, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Résumé",
  description: `${site.name} — ${site.role}. Experience, education and capabilities.`,
  path: "/resume",
});

export default function ResumePage() {
  const pdfReady = !site.resumePdf.startsWith("[TODO");

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow className="mb-6">Résumé</Eyebrow>
          <h1 className="font-display text-display-2 text-charcoal">{site.name}</h1>
          <p className="mt-4 text-lead text-charcoal-soft">{site.role}</p>
          <p className="mt-6 measure text-body text-charcoal-soft">{site.positioning}</p>

          <div className="mt-10 flex flex-wrap gap-4 no-print">
            {pdfReady ? (
              <LinkButton href={site.resumePdf}>Download PDF</LinkButton>
            ) : (
              <span className="label-type inline-flex min-h-11 items-center rounded-full border border-dashed border-line-strong px-5 text-charcoal-muted">
                PDF on request
              </span>
            )}
            <LinkButton href="/contact" variant="outline">
              Contact
            </LinkButton>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sticky meta rail */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <Eyebrow as="h2" className="mb-4">
                  Details
                </Eyebrow>
                <dl className="space-y-5 text-small text-charcoal-soft">
                  <div>
                    <dt className="label-type text-charcoal-muted">Location</dt>
                    <dd>{site.contact.location}</dd>
                  </div>
                  <div>
                    <dt className="label-type text-charcoal-muted">Availability</dt>
                    <dd>{site.contact.availability}</dd>
                  </div>
                  <div>
                    <dt className="label-type text-charcoal-muted">Email</dt>
                    <dd className="break-words">{site.contact.email}</dd>
                  </div>
                </dl>
              </div>
            </aside>

            <div className="mt-14 lg:col-span-9 lg:mt-0">
              {/* Experience */}
              <section aria-labelledby="experience-heading">
                <Eyebrow as="h2" id="experience-heading" className="mb-8">
                  Experience
                </Eyebrow>
                <ol className="space-y-12">
                  {resume.roles.map((role, index) => (
                    <li key={index}>
                      <Reveal>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <h3 className="font-display text-h3 text-charcoal">{role.title}</h3>
                          <span className="label-type text-charcoal-muted">
                            {role.start} — {role.end}
                          </span>
                        </div>
                        <p className="mt-1 text-small text-charcoal-muted">
                          {role.organisation}
                          {role.location ? ` · ${role.location}` : ""}
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {role.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="border-l border-line pl-4 text-small text-charcoal-soft"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </section>

              <Hairline className="my-16" />

              {/* Education */}
              <section aria-labelledby="education-heading">
                <Eyebrow as="h2" id="education-heading" className="mb-8">
                  Education
                </Eyebrow>
                <ol className="space-y-10">
                  {resume.education.map((entry, index) => (
                    <li key={index}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3 className="font-display text-h3 text-charcoal">
                          {entry.qualification}
                        </h3>
                        <span className="label-type text-charcoal-muted">
                          {entry.start} — {entry.end}
                        </span>
                      </div>
                      <p className="mt-1 text-small text-charcoal-muted">{entry.institution}</p>
                      {entry.note ? (
                        <p className="mt-3 measure text-small text-charcoal-soft">{entry.note}</p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </section>

              {resume.certifications && resume.certifications.length > 0 ? (
                <>
                  <Hairline className="my-16" />
                  <section aria-labelledby="certifications-heading">
                    <Eyebrow as="h2" id="certifications-heading" className="mb-8">
                      Certifications
                    </Eyebrow>
                    <ul className="space-y-5">
                      {resume.certifications.map((cert) => (
                        <li
                          key={cert.title}
                          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-l border-line pl-4"
                        >
                          <span className="text-body text-charcoal">{cert.title}</span>
                          <span className="label-type text-charcoal-muted">
                            {cert.issuer} · {cert.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : null}

              <Hairline className="my-16" />

              {/* Skills */}
              <section aria-labelledby="skills-heading">
                <Eyebrow as="h2" id="skills-heading" className="mb-8">
                  Capabilities
                </Eyebrow>
                <div className="grid gap-10 sm:grid-cols-3">
                  {resume.skillClusters.map((cluster) => (
                    <div key={cluster.title}>
                      <h3 className="label-type mb-4 text-charcoal">{cluster.title}</h3>
                      <ul className="space-y-2">
                        {cluster.items.map((item) => (
                          <li key={item} className="text-small text-charcoal-soft">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <Hairline className="my-16" />

              <section aria-labelledby="tools-heading">
                <Eyebrow as="h2" id="tools-heading" className="mb-6">
                  Tools
                </Eyebrow>
                <ul className="flex flex-wrap gap-2">
                  {profile.tools.map((tool) => (
                    <li key={tool}>
                      <Tag>{tool}</Tag>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
