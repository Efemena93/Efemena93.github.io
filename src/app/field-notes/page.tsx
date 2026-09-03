import { FieldNoteCard } from "@/components/content/FieldNoteCard";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { Container, Eyebrow, Section } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { fieldNotes } from "@/content/field-notes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Library",
  description:
    "Short pieces on research practice, interaction design and the parts of the work that do not fit into a case study.",
  path: "/field-notes",
});

export default function FieldNotesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow className="mb-6">Library</Eyebrow>
          <h1 className="max-w-[20ch] font-display text-display-2 text-charcoal">
            Things I keep having to work out again
          </h1>
          <p className="mt-6 measure text-lead text-charcoal-soft">
            Short pieces on research practice and interaction design. One idea each, and no
            attempt to sound certain about any of them.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <RevealGroup className="border-b border-line">
            {fieldNotes.map((note, index) => (
              <RevealItem key={note.slug} index={index}>
                <FieldNoteCard note={note} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
