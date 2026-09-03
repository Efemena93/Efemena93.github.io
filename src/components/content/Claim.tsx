import { SignalPoint } from "@/components/signals/SignalPoint";
import { EVIDENCE, type EvidenceLevel } from "@/content/types";
import { cx } from "@/lib/utils";

/**
 * A single levelled claim.
 *
 * Every level is encoded three ways — a text label, a dot variant, and a rule
 * style — so the distinction survives greyscale, colour blindness, forced
 * colours and a screen reader. Colour is the last of the three, not the first.
 *
 * Claims never animate. Evidence that shimmers reads as decoration.
 */

const STYLE: Record<
  EvidenceLevel,
  {
    accent: "sage" | "blue" | "clay" | "charcoal";
    dot: "filled" | "half" | "hollow";
    rule: string;
    label: string;
  }
> = {
  evidence: {
    accent: "sage",
    dot: "filled",
    rule: "border-l border-solid border-sage",
    label: "text-sage-deep",
  },
  interpretation: {
    accent: "blue",
    dot: "half",
    rule: "border-l border-solid border-blue",
    label: "text-blue-deep",
  },
  hypothesis: {
    accent: "clay",
    dot: "hollow",
    rule: "border-l border-dashed border-clay",
    label: "text-clay-deep",
  },
  concept: {
    accent: "charcoal",
    dot: "hollow",
    rule: "border-l border-dotted border-charcoal-muted",
    label: "text-charcoal-muted",
  },
};

export function Claim({
  level,
  text,
  source,
  className,
}: {
  level: EvidenceLevel;
  text: string;
  source?: string;
  className?: string;
}) {
  const style = STYLE[level];
  const meta = EVIDENCE[level];

  return (
    <div className={cx("forced-border pl-5", style.rule, className)}>
      <p className="flex items-center gap-2">
        <SignalPoint accent={style.accent} variant={style.dot} />
        <span className={cx("label-type", style.label)}>{meta.label}</span>
      </p>
      <p className="mt-2 text-body text-charcoal-soft">{text}</p>
      {source ? (
        <p className="mt-2 text-small text-charcoal-muted">
          <span className="label-type mr-2">Source</span>
          {source}
        </p>
      ) : null}
    </div>
  );
}

export function ClaimGroup({
  title,
  claims,
}: {
  title?: string;
  claims: Array<{ level: EvidenceLevel; text: string; source?: string }>;
}) {
  return (
    <div className="measure">
      {title ? <h3 className="mb-5 text-h3 text-charcoal">{title}</h3> : null}
      <div className="space-y-6">
        {claims.map((claim, index) => (
          <Claim key={index} {...claim} />
        ))}
      </div>
    </div>
  );
}
