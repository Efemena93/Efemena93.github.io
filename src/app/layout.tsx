import type { Metadata, Viewport } from "next";

import { RouteAnnouncer } from "@/components/layout/RouteAnnouncer";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Atmosphere } from "@/components/signals/Atmosphere";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { MotionProvider, motionBootScript } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import { GrainOverlay } from "@/components/signals/GrainOverlay";
import { site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Resolves the motion preference before first paint, so the page
            never renders animated and then snaps to still. */}
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body className="min-h-screen bg-ivory antialiased">
        {/* Ambient colour field. Rendered once here rather than per page, so
            it does not restart on navigation. Decorative and opt-out-aware. */}
        <Atmosphere />
        <MotionProvider>
          <SkipLink />
          <GrainOverlay />
          <SiteHeader />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
          <RouteAnnouncer />
        </MotionProvider>
        <PersonJsonLd />
      </body>
    </html>
  );
}
