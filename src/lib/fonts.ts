import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Self-hosted at build time by next/font. No runtime request to Google,
 * no layout shift, no third-party connection for a visitor to consent to.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  // Variable font: the full 100–900 axis is loaded, plus the optical-size and
  // softness axes the display scale relies on.
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const monoLabel = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-label",
  weight: ["400", "500"],
});

export const fontVariables = [fraunces.variable, inter.variable, monoLabel.variable].join(" ");
