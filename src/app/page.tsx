import Link from "next/link";

import { ContactCTA } from "@/components/content/ContactCTA";
import { StoryCard } from "@/components/content/StoryCard";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow, Section } from "@/components/primitives";
import { StudioHomepage } from "@/components/studio/StudioHomepage";
import { getCaseStudy } from "@/content/case-studies";
import { featuredFieldNotes } from "@/content/field-notes";
import { site } from "@/content/site";

/**
 * Homepage — the floating studio, revised 2026-10-25.
 *
 * Two clearly separated sections, which is the whole of the revision:
 *
 *   Section 01  The studio. A full-viewport introduction with four objects
 *               drifting around it. No project cards, thumbnails or names
 *               appear in the first viewport — the studio is the experience,
 *               and the work is discovered after it.
 *   Section 02  Selected work, beginning below that viewport under its own
 *               heading: IoT Venture, SpellCarver, Zalando, HearEase, then
 *               Olive-Ilive, VocHub and VirtualBuddy.
 *
 * Then: practice statement, From the Library, contact CTA. Navigation and
 * footer come from the layout.
 *
 * The seven studio projects are deliberately not repeated in a card grid
 * below. The compact route for anyone who would rather scan a list is the
 * "View all work" link in the work section's header.
 *
 * Earlier revisions removed the glowing moon, the drifting orbs and the
 * pointer-tracking constellation; the four studio symbols are not a return
 * to those. They are fixed to the hero's peripheral space, aria-hidden,
 * non-interactive, and they stop entirely under reduced motion.
 */

const iotVenture = getCaseStudy("iot-venture");
const merlinMines = getCaseStudy("merlin-mines");
const zalando = getCaseStudy("zalando");
const hearEase = getCaseStudy("hearease");
const oliveIlive = getCaseStudy("olive-ilive");
const vocHub = getCaseStudy("vochub");
const virtualBuddy = getCaseStudy("virtualbuddy");

const studioArtifacts =
  iotVenture && merlinMines && zalando && hearEase && oliveIlive && vocHub && virtualBuddy
    ? { iotVenture, merlinMines, zalando, hearEase, oliveIlive, vocHub, virtualBuddy }
    : null;

const [featuredStory, ...moreStories] = featuredFieldNotes;

export default function HomePage() {
  return (
    <>
      {/* ═══ 2 + 3 + 4. Introduction, studio, and how to explore ═════════ */}
      {studioArtifacts ? <StudioHomepage artifacts={studioArtifacts} /> : null}

      {/* ═══ 5. Practice statement ══════════════════════════════════════════ */}
      <Section labelledBy="practice-heading" className="border-t border-line">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Eyebrow as="h2" id="practice-heading">
                How I work
              </Eyebrow>
            </div>
            <div className="mt-6 lg:col-span-9 lg:mt-0">
              <Reveal>
                <p className="measure font-display text-h2 leading-snug text-charcoal">
                  {site.practice.lead}
                </p>
                <div className="mt-8 measure space-y-5 text-body text-charcoal-soft">
                  {site.practice.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-8">
                  <Link href="/about" className="link-underline label-type text-charcoal-soft">
                    More about my practice →
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ 6. From the Library ════════════════════════════════════════════
          Quieter than the work above it: one featured story at size, the
          rest as a short list. */}
      {featuredStory ? (
        <Section
          spacing="tight"
          labelledBy="library-heading"
          className="border-t border-line bg-paper"
        >
          <Container>
            <div className="lg:grid lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <Eyebrow as="h2" id="library-heading" className="mb-4">
                  From the Library
                </Eyebrow>
                <p className="measure text-small leading-relaxed text-charcoal-soft">
                  Outside the case studies, I write short stories about the emotional
                  details that shape how people connect, remember and change.
                </p>
                <p className="mt-6">
                  <Link
                    href="/field-notes"
                    className="link-underline label-type text-charcoal-soft"
                  >
                    Visit the Library →
                  </Link>
                </p>
              </div>

              <div className="mt-10 lg:col-span-8 lg:mt-0">
                <StoryCard note={featuredStory} lead />

                {moreStories.length > 0 ? (
                  <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {moreStories.slice(0, 2).map((note) => (
                      <li key={note.slug} className="border-t border-line pt-5">
                        <Link
                          href={`/field-notes/${note.slug}`}
                          className="group block rounded focus-visible:outline-offset-4"
                        >
                          <p className="label-type text-charcoal-muted">
                            {note.tags[0]} · {note.readingMinutes} min read
                          </p>
                          <p className="mt-2 font-display text-h3 text-charcoal">
                            <span className="link-underline">{note.title}</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ═══ 7. Contact ═════════════════════════════════════════════════════ */}
      <ContactCTA />
    </>
  );
}
