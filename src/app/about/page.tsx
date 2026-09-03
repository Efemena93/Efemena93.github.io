import { CapabilityList } from "@/components/content/CapabilityList";
import { ContactCTA } from "@/components/content/ContactCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow, Section, Tag } from "@/components/primitives";
import { CursorTrace } from "@/components/signals/CursorTrace";
import { GlowField } from "@/components/signals/GlowField";
import { ThreadFieldStatic } from "@/components/signals/ThreadFieldStatic";
import { profile, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How Efemena Udezi works: evidence discipline, research and interface craft together, and a practice built around problems where the emotional stakes are real.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <CursorTrace />

      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <div aria-hidden="true" className="atmosphere absolute inset-0 opacity-70">
          <ThreadFieldStatic />
        </div>
        <Container className="relative py-16 sm:py-24">
          <Eyebrow className="mb-6">About</Eyebrow>
          <h1 className="max-w-[20ch] font-display text-display-2 text-charcoal">
            Designing for what people find hard to say
          </h1>
          <p className="mt-6 measure text-lead text-charcoal-soft">{site.positioning}</p>
        </Container>
      </section>

      <Section labelledBy="practice-heading">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="practice-heading">
                Practice
              </Eyebrow>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <Reveal>
                <div className="measure space-y-6 text-body text-charcoal-soft">
                  {profile.about.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="capabilities-heading" className="border-t border-line">
        <Container>
          <Eyebrow as="h2" id="capabilities-heading" className="mb-12">
            What I do
          </Eyebrow>
          <CapabilityList />
        </Container>
      </Section>

      <Section spacing="tight" labelledBy="tools-heading" className="border-t border-line">
        <Container>
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
        </Container>
      </Section>

      <ContactCTA heading="I am most useful early, when the problem is still the wrong shape." />
    </>
  );
}
