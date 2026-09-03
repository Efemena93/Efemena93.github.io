import { ContactForm } from "@/components/content/ContactForm";
import { Container, Eyebrow, Section, TextLink } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${site.name}, ${site.role}.`,
  path: "/contact",
});

export default function ContactPage() {
  const emailReady = !site.contact.email.startsWith("[TODO");

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow className="mb-6">Contact</Eyebrow>
          <h1 className="max-w-[18ch] font-display text-display-2 text-charcoal">
            Tell me what you are working on
          </h1>
          <p className="mt-6 measure text-lead text-charcoal-soft">
            Roles, collaborations, research projects, or a question about something on this
            site. All of it is welcome.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="mt-16 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <Eyebrow as="h2" className="mb-6">
                Directly
              </Eyebrow>
              <dl className="space-y-6 text-small text-charcoal-soft">
                <div>
                  <dt className="label-type text-charcoal-muted">Email</dt>
                  <dd className="mt-1 break-words">
                    {emailReady ? (
                      <TextLink href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </TextLink>
                    ) : (
                      site.contact.email
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="label-type text-charcoal-muted">Based in</dt>
                  <dd className="mt-1">{site.contact.location}</dd>
                </div>
                <div>
                  <dt className="label-type text-charcoal-muted">Availability</dt>
                  <dd className="mt-1">{site.contact.availability}</dd>
                </div>
                <div>
                  <dt className="label-type text-charcoal-muted">Elsewhere</dt>
                  <dd className="mt-1 space-y-1">
                    {site.socials.map((social) => (
                      <p key={social.label}>
                        {social.href.startsWith("http") ? (
                          <TextLink href={social.href}>{social.label}</TextLink>
                        ) : (
                          `${social.label}: ${social.href}`
                        )}
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
