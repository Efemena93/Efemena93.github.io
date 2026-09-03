import { Container, Eyebrow, LinkButton } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { site } from "@/content/site";

export function ContactCTA({
  heading = "If any of this is close to what you are working on, I would like to hear about it.",
}: {
  heading?: string;
}) {
  const emailReady = !site.contact.email.startsWith("[TODO");

  return (
    <section aria-labelledby="contact-cta" className="relative overflow-hidden border-t border-line">
      <GlowField />
      <Container className="relative py-20 lg:py-28">
        <Eyebrow as="h2" id="contact-cta" className="mb-6">
          Get in touch
        </Eyebrow>
        <p className="max-w-[26ch] font-display text-display-2 text-charcoal sm:max-w-[20ch]">
          {heading}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LinkButton href="/contact">Start a conversation</LinkButton>
          {emailReady ? (
            <LinkButton href={`mailto:${site.contact.email}`} variant="outline">
              {site.contact.email}
            </LinkButton>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
