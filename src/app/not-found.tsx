import { Container, Eyebrow, LinkButton } from "@/components/primitives";
import { ThreadFieldStatic } from "@/components/signals/ThreadFieldStatic";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="atmosphere absolute inset-0 opacity-60">
        <ThreadFieldStatic />
      </div>
      <Container className="relative py-28 sm:py-40">
        <Eyebrow className="mb-6">404</Eyebrow>
        <h1 className="max-w-[16ch] font-display text-display-2 text-charcoal">
          This signal did not reach
        </h1>
        <p className="mt-6 measure text-lead text-charcoal-soft">
          The page you were looking for is not here. It may have moved, or the link may have
          been mistyped.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <LinkButton href="/">Back to the start</LinkButton>
          <LinkButton href="/work" variant="outline">
            See the work
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
