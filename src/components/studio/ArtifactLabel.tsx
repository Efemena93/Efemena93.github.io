import { STATUS_LABEL, type CaseStudy } from "@/content/types";
import { cx } from "@/lib/utils";

import { ProjectSymbol, type SymbolName } from "./ProjectSymbol";

/**
 * The label that sits above each studio artifact.
 *
 * Reading order, top to bottom: index, project name, what it is, the action.
 * All of it is rendered at rest, at every breakpoint — a recruiter who never
 * moves the pointer sees the name, the subject and the way in.
 *
 * Hover and keyboard focus add a detail block: the human problem, the role,
 * the timeline and the status. Below `lg` that block is simply always
 * visible, because there is no hover on a phone and "discoverable by
 * hovering" is not a real affordance there.
 */
export function ArtifactLabel({
  study,
  index,
  title,
  subtitle,
  discipline,
  symbol,
  className,
}: {
  study: CaseStudy;
  index: number;
  /** Display name. The amendment labels the capstone "Holding Pattern". */
  title: string;
  /** Line under the title — the amendment's default visible label. */
  subtitle: string;
  /** Discipline line, e.g. "Graduate capstone · Research in progress". */
  discipline: string;
  /**
   * The object that drifts around the hero for this project, repeated here
   * beside the index as a quiet identifier. Only the four projects with one
   * pass it. Decorative — it sits next to the project name, so announcing it
   * would only say that name twice.
   */
  symbol?: SymbolName;
  className?: string;
}) {
  return (
    <div className={cx("relative lg:pb-2", className)}>
      <p className="label-type flex items-center gap-2.5 text-blue-deep">
        {String(index).padStart(2, "0")}
        {symbol ? (
          <ProjectSymbol
            name={symbol}
            className="h-5 w-5 text-charcoal-muted opacity-55 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-90 group-focus-within:opacity-90"
            strokeWidth={1.4}
          />
        ) : null}
      </p>

      <h3 className="mt-2 font-display text-h3 text-charcoal">
        <span className="link-underline">{title}</span>
      </h3>

      <p className="mt-1.5 max-w-[34ch] text-small leading-snug text-charcoal-soft">
        {subtitle}
      </p>

      <p className="label-type mt-4 inline-flex min-h-11 items-center gap-2 text-blue-deep">
        <span className="link-underline">View project</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-focus-within:translate-x-1"
        >
          →
        </span>
      </p>

      {/* Revealed detail. Present in the DOM and the accessibility tree at
          all times, this changes visual emphasis, it is not a disclosure.

          Kept to two short blocks on purpose. An earlier version listed role,
          timeline and status as a definition list and ran ~250px tall, which
          overlapped the object below it at scene widths. Compact enough to
          clear the desk is a hard requirement here, not a preference. */}
      <div
        className={cx(
          "mt-5 border-l border-line pl-4",
          // At scene widths the detail floats over the top of the object it
          // belongs to, on a translucent layer, so no empty band is reserved
          // for it at rest.
          "lg:absolute lg:inset-x-3 lg:top-full lg:z-10 lg:mt-5 lg:rounded-md lg:border lg:border-line lg:bg-ivory/90 lg:p-3 lg:backdrop-blur-sm lg:border-l lg:pl-3",
          "lg:pointer-events-none lg:opacity-0 lg:transition-opacity lg:duration-500 lg:ease-[var(--ease-out-soft)]",
          "lg:group-hover:opacity-100 lg:group-focus-within:opacity-100",
        )}
      >
        <p className="text-small leading-relaxed text-charcoal-soft lg:line-clamp-3">
          {study.humanProblem}
        </p>
        {/* Role and timeline on one line, then the discipline line, with
            the status appended only when the discipline does not already
            say it, so the capstone does not read "Research in progress ·
            Research in progress". Status is words, never colour alone. */}
        <p className="label-type mt-3 text-charcoal-muted">
          {study.shortRole} · {study.timeline}
        </p>
        <p className="label-type mt-1.5 text-charcoal-muted">
          {discipline.toLowerCase().includes(STATUS_LABEL[study.status].toLowerCase())
            ? discipline
            : `${discipline} · ${STATUS_LABEL[study.status]}`}
        </p>
      </div>

    </div>
  );
}
