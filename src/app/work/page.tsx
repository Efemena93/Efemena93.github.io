import { CaseStudyCard } from "@/components/content/CaseStudyCard";
import { ContactCTA } from "@/components/content/ContactCTA";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { Container, Eyebrow, Section } from "@/components/primitives";
import { GlowField } from "@/components/signals/GlowField";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies in UX research, product design and interaction design — health and wellbeing, long-distance communication, enterprise engineering tools, and a capstone on military family separation.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <GlowField />
        <Container className="relative py-16 sm:py-24">
          <Eyebrow className="mb-6">Work</Eyebrow>
          <h1 className="max-w-[18ch] font-display text-display-2 text-charcoal">
            Six projects, and what each one is actually evidence of
          </h1>
          <p className="mt-6 measure text-lead text-charcoal-soft">
            Each case study separates what was observed from what was inferred and what is
            still only proposed. Two are written in full; the rest are being written as I go
            back through the material.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <RevealGroup className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <RevealItem key={study.slug} index={index}>
                <CaseStudyCard study={study} index={index} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
