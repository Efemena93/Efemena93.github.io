import Link from "next/link";

import { MotionToggle } from "@/components/motion/MotionToggle";
import { Container, Eyebrow, Hairline } from "@/components/primitives";
import { primaryNav, profile, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const isPlaceholderEmail = site.contact.email.startsWith("[TODO");

  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <p className="font-display text-h3 gradient-text">{site.name}</p>
            <p className="mt-4 measure text-body text-charcoal-soft">
              I&rsquo;m open to Product, UX and Interaction Design roles, and glad to
              talk about work that is still only an idea. {site.contact.availability}.
            </p>
            <p className="mt-5 measure text-small text-charcoal-muted">
              {site.contact.location} · {site.contact.responseTime}
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-underline text-body text-blue-deep"
              >
                {site.contact.email}
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="min-w-0 lg:col-span-3">
            <Eyebrow as="h2" className="mb-4">
              Pages
            </Eyebrow>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline inline-flex min-h-11 items-center text-small text-charcoal-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-2">
            <Eyebrow as="h2" className="mb-4">
              Elsewhere
            </Eyebrow>
            <ul className="space-y-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  {social.href.startsWith("[TODO") ? (
                    <span className="inline-flex min-h-11 items-center text-small text-charcoal-muted">
                      {social.label} <span className="ml-2 text-clay-deep">{social.href}</span>
                    </span>
                  ) : (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline inline-flex min-h-11 items-center text-small text-charcoal-soft"
                    >
                      {social.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="link-underline inline-flex min-h-11 items-center text-small text-charcoal-soft"
                >
                  Résumé
                </Link>
              </li>
              <li>
                {isPlaceholderEmail ? (
                  <span className="inline-flex min-h-11 items-center text-small text-charcoal-muted">
                    Email <span className="ml-2 text-clay-deep">{site.contact.email}</span>
                  </span>
                ) : (
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-underline inline-flex min-h-11 items-center text-small text-charcoal-soft"
                  >
                    Email
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <MotionToggle />
          </div>
        </div>

        <Hairline className="my-10" />

        <div className="flex flex-col gap-4 text-small text-charcoal-muted sm:flex-row sm:items-baseline sm:justify-between">
          <p>
            © {year} {site.name}. Built with care, and with nothing that tracks you — no
            analytics, no cookies, no third-party fonts.
          </p>
          <p className="label-type">
            {profile.tools.slice(0, 3).join(" · ")} · Next.js
          </p>
        </div>
      </Container>
    </footer>
  );
}
