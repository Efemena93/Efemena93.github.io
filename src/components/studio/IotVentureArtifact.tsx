import type { CaseStudy } from "@/content/types";

import { SignalThread } from "./SignalThread";
import { StudioArtifact } from "./StudioArtifact";

/**
 * IoT Venture GmbH — the connected-bike product.
 *
 * A phone standing on the desk, a small connected-bike device/key beside it,
 * and a fragment of the partner dashboard tucked behind the phone. All three
 * are schematic — there is no approved employer content in the repository,
 * and the amendment governing this page (docs/homepage-studio-amendment.md)
 * is explicit that confidential screens are never shown. The shapes read as
 * "a connected product being designed", not as the product itself.
 *
 * On hover or focus the phone screen and dashboard fragment illuminate
 * slightly and one restrained signal travels between the connected-bike
 * device and the phone — CSS only, neutralised under reduced motion.
 */
export function IotVentureArtifact({
  study,
  index,
  className,
  raise,
}: {
  study: CaseStudy;
  index: number;
  className?: string;
  raise?: "sm" | "md";
}) {
  return (
    <StudioArtifact
      className={className}
      raise={raise}
      study={study}
      index={index}
      title="IoT Venture GmbH"
      subtitle="“It's My Bike” app and partner dashboards"
      discipline="Product design · Mobile · IoT · Dashboards"
      sceneDescription="An illustration of a phone standing on a desk beside a small connected-bike key device, with a fragment of a partner dashboard panel tucked behind the phone. A fine signal travels between the device and the phone on hover or focus. This is an illustrative reconstruction, not a real project screen."
      symbol="bicycle"
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-blue"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <clipPath id="iv-screen">
            <rect x="150" y="30" width="62" height="122" rx="5" />
          </clipPath>
        </defs>

        {/* Dashboard fragment, tucked behind the phone. */}
        <rect x="196" y="46" width="82" height="64" rx="4" className="fill-raised" opacity="0.5"
              stroke="currentColor" strokeOpacity="0.24" strokeWidth="1" />
        <g className="opacity-60 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-95 group-focus-within:opacity-95">
          {[56, 68, 80, 92].map((y, i) => (
            <rect key={y} x="204" y={y} width={i % 2 ? 50 : 62} height="4" rx="2" className="fill-charcoal" opacity="0.18" />
          ))}
        </g>

        {/* Phone, standing on the desk. */}
        <ellipse cx="181" cy="176" rx="52" ry="4" fill="#000" opacity="0.5" />
        <rect x="144" y="22" width="74" height="138" rx="11" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.34" strokeWidth="1" />
        <rect x="150" y="30" width="62" height="122" rx="5" className="fill-sunk" />
        <g clipPath="url(#iv-screen)" className="opacity-70 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          <rect x="150" y="30" width="62" height="15" className="fill-blue" opacity="0.32" />
          {[52, 71, 90].map((y, i) => (
            <g key={y}>
              <rect x="158" y={y} width={i === 1 ? 38 : 46} height="4" rx="2" className="fill-charcoal" opacity="0.28" />
              <rect x="158" y={y + 8} width={i === 1 ? 30 : 40} height="3" rx="1.5" className="fill-charcoal" opacity="0.15" />
            </g>
          ))}
          <rect x="158" y="130" width="46" height="12" rx="6" className="fill-blue" opacity="0.34" />
        </g>
        <rect x="136" y="160" width="90" height="12" rx="3" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.22" />

        {/* Connected-bike device, a small fob with a wheel glyph. */}
        <ellipse cx="52" cy="150" rx="30" ry="4" fill="#000" opacity="0.45" />
        <rect x="30" y="96" width="44" height="54" rx="10" className="fill-raised"
              stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        <circle cx="52" cy="120" r="13" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="52" cy="120" r="3" className="fill-blue" opacity="0.7" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <line
            key={deg}
            x1={52 + 5 * Math.cos((deg * Math.PI) / 180)}
            y1={120 + 5 * Math.sin((deg * Math.PI) / 180)}
            x2={52 + 11 * Math.cos((deg * Math.PI) / 180)}
            y2={120 + 11 * Math.sin((deg * Math.PI) / 180)}
            stroke="currentColor"
            strokeOpacity="0.32"
          />
        ))}
        <rect x="44" y="136" width="16" height="5" rx="2.5" className="fill-charcoal" opacity="0.2" />

        {/* One restrained signal, device → phone. */}
        <SignalThread d="M74 118 C 100 100, 118 88, 148 70" restingOpacity={0.3} travelDuration="1.6s" />
      </svg>
    </StudioArtifact>
  );
}
