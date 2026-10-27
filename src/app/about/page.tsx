import { CapabilityList } from "@/components/content/CapabilityList";
import { ContactCTA } from "@/components/content/ContactCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow, Section, Tag } from "@/components/primitives";
import { CursorTrace } from "@/components/signals/CursorTrace";
import { GlowField } from "@/components/signals/GlowField";
import { ThreadFieldStatic } from "@/components/signals/ThreadFieldStatic";
import { profile, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

/**
 * About.
 *
 * Rewritten 2026-10-27 from Efemena's earlier About page, for its material
 * rather than its voice. That page opened "I am a highly motivated and
 * passionate UX/UI designer" and went on through quick learner, team player
 * and fast-paced environment: claims that cost nothing to make and therefore
 * carry nothing. Every one of them is a thing to be shown by the work on the
 * rest of this site, or not believed.
 *
 * What the old page did have, and this one was missing, is three things: a
 * path with dates on it, a tools list, and a person. Those are added here.
 *
 * The path is built from `resume.ts`, not from the old page, which had IoT
 * Venture running "till present" (it ended Aug 2025) and dated the first
 * professional role to Jan 2022 (the résumé says Dec 2021).
 */

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

      {/* ── The path ──
          A description list rather than a decorated vertical line: the dates
          and what happened in them are the content, and a rule drawn down the
          left of them adds nothing a screen reader can use. */}
      <Section labelledBy="path-heading" className="border-t border-line">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="path-heading">
                How I got here
              </Eyebrow>
            </div>

            <div className="mt-8 lg:col-span-9 lg:mt-0">
              <dl className="space-y-8">
                {profile.path.map((step) => (
                  <div
                    key={step.when}
                    className="border-t border-line pt-5 sm:grid sm:grid-cols-12 sm:gap-6"
                  >
                    <dt className="label-type text-charcoal-muted sm:col-span-3">{step.when}</dt>
                    <dd className="mt-2 text-body leading-relaxed text-charcoal-soft sm:col-span-9 sm:mt-0">
                      {step.what}
                    </dd>
                  </div>
                ))}
              </dl>
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

      {/* ── Tools ──
          Grouped by what each one is for. A single undifferentiated row of
          twenty logos tells a reader that the list was copied from a job
          advert; four short groups tell them which part of the work each
          tool belongs to. */}
      <Section spacing="tight" labelledBy="tools-heading" className="border-t border-line">
        <Container>
          <Eyebrow as="h2" id="tools-heading" className="mb-8">
            Tools
          </Eyebrow>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {profile.toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="label-type mb-4 text-charcoal-muted">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <li key={tool}>
                      <Tag>{tool}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── The person ──
          Kept short and kept last, before the contact block. A portfolio that
          never admits to a life reads as a document rather than as someone you
          might want to work beside. */}
      <Section spacing="tight" labelledBy="away-heading" className="border-t border-line">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="away-heading">
                Away from the screen
              </Eyebrow>
            </div>
            <div className="mt-6 lg:col-span-8 lg:mt-0">
              <div className="measure space-y-5 text-body text-charcoal-soft">
                {profile.awayFromWork.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA heading="I am most useful early, when the problem is still the wrong shape." />
    </>
  );
}
