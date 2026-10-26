import type { CaseStudy } from "@/content/types";

import { StudioArtifact } from "./StudioArtifact";

/**
 * HearEase — a pair of glasses resting on their arms, with a line of
 * transcribed speech resolving in the air above the lenses.
 *
 * Schematic, like every other object on this desk. The "transcript" is a row
 * of blank bars, not invented words: the product transcribes whatever is
 * said, and putting a sentence there would be writing dialogue for a user who
 * does not exist. The bars brighten and the trailing one extends on hover or
 * focus, which is the nearest honest gesture at live transcription.
 */
export function HearEaseArtifact({
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
      subtitle="Smart glasses that transcribe conversation and adapt to accents"
      discipline="Assistive technology · Wearable · Team project"
      sceneDescription="An illustration of a pair of glasses seen head-on, with a row of short bars above the lenses standing in for a line of live transcription. This is an illustrative reconstruction, not a real project screen."
      symbol="glasses"
    >
      <svg
        viewBox="0 0 300 182"
        role="presentation"
        aria-hidden="true"
        className="stage-svg text-blue"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* The transcript, resolving above the lenses. The last bar is the
            one still being written, so it extends on hover/focus. */}
        <g className="opacity-70 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-within:opacity-100">
          {[
            [64, 34, 46],
            [116, 34, 30],
            [152, 34, 54],
            [64, 48, 38],
            [108, 48, 62],
          ].map(([x, y, w], i) => (
            <rect key={i} x={x} y={y} width={w} height="6" rx="3" className="fill-blue" opacity="0.3" />
          ))}
          <rect
            x="176"
            y="48"
            width="20"
            height="6"
            rx="3"
            className="fill-blue transition-all duration-700 ease-[var(--ease-out-soft)] group-hover:w-[44px] group-focus-within:w-[44px]"
            opacity="0.55"
          />
        </g>

        {/* Shadow on the desk. */}
        <ellipse cx="150" cy="166" rx="92" ry="5" fill="#000" opacity="0.4" />

        {/* The glasses, head-on: two lenses, a bridge and two arms folding
            back toward the viewer. */}
        <g stroke="currentColor" fill="none" strokeWidth="2.4" strokeLinecap="round">
          <circle cx="104" cy="120" r="30" className="fill-raised" strokeOpacity="0.55" />
          <circle cx="196" cy="120" r="30" className="fill-raised" strokeOpacity="0.55" />
          {/* Lens tint, so they read as glass rather than rings. */}
          <circle cx="104" cy="120" r="30" className="fill-clay" stroke="none" opacity="0.1" />
          <circle cx="196" cy="120" r="30" className="fill-clay" stroke="none" opacity="0.1" />
          <path d="M134 116 a 16 10 0 0 1 32 0" strokeOpacity="0.55" />
          <path d="M74 118 C 60 112, 52 122, 48 136" strokeOpacity="0.4" />
          <path d="M226 118 C 240 112, 248 122, 252 136" strokeOpacity="0.4" />
        </g>

        {/* The capture indicator on the right arm, the one piece of the
            physical product the setup flow asks the wearer to find. */}
        <circle cx="236" cy="121" r="3.5" className="fill-sage" opacity="0.85" />
      </svg>
    </StudioArtifact>
  );
}
