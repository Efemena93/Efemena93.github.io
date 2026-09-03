import Link from "next/link";

import type { FieldNote } from "@/content/types";
import { cx, formatDate } from "@/lib/utils";

/**
 * StoryCard — a Field Note, in a grid.
 *
 * FieldNoteCard is a full-width row for the index page, where a note gets a
 * whole line to itself. This is the compact version for the homepage preview
 * and for any three-up grid: same information, ranked for a reader who is
 * scanning rather than reading.
 *
 * ── Zero JavaScript ───────────────────────────────────────────────────────
 * Server component. The hover and focus states are CSS on the parent `group`,
 * so the card costs nothing in the client bundle and behaves identically
 * before hydration, or if hydration never happens.
 *
 * ── One tab stop ──────────────────────────────────────────────────────────
 * The whole card is one anchor. The tag list is presentational text inside
 * it, not a set of competing filter links — those belong on the index page,
 * where filtering is the job.
 *
 * ── Nothing is hover-only ─────────────────────────────────────────────────
 * Date, reading time, title, standfirst and tags are all legible at rest. The
 * marker fills and the rule travels on hover and focus; that is the whole of
 * what interaction adds.
 */

export function StoryCard({
  note,
  /** Renders the standfirst at body size and gives the title more room. */
  lead = false,
  className,
}: {
  note: FieldNote;
  lead?: boolean;
  className?: string;
}) {
  return (
    <article className={cx("group relative flex h-full flex-col", className)}>
      {/* Marker and travelling rule. Decorative — the heading carries the
          meaning, and the rule is drawn with a border rather than a colour
          fill so it survives forced-colours mode. */}
      <div className="flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className={cx(
            "block h-1.5 w-1.5 shrink-0 rounded-full bg-clay",
            "transition-transform duration-300 ease-[var(--ease-out-soft)]",
            "group-hover:scale-150 group-focus-within:scale-150",
          )}
        />
        <span
          aria-hidden="true"
          className={cx(
            "block h-px flex-1 origin-left scale-x-0 bg-line-strong",
            "transition-transform duration-500 ease-[var(--ease-out-soft)]",
            "group-hover:scale-x-100 group-focus-within:scale-x-100",
          )}
        />
      </div>

      <Link
        href={`/field-notes/${note.slug}`}
        className={cx(
          "mt-5 flex flex-col rounded focus-visible:outline-offset-4",
          // Only the grid variant stretches to fill its row; the featured
          // card sits at its natural height, or it opens a 150px hole.
          !lead && "flex-1",
        )}
      >
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <time dateTime={note.date} className="label-type text-charcoal-muted">
            {formatDate(note.date)}
          </time>
          <span className="label-type text-charcoal-muted" aria-hidden="true">
            ·
          </span>
          <span className="label-type text-charcoal-muted">
            {note.readingMinutes} min read
          </span>
        </p>

        <h3
          className={cx(
            "mt-3 font-display text-charcoal",
            lead ? "text-h2" : "text-h3",
          )}
        >
          <span className="link-underline">{note.title}</span>
        </h3>

        <p
          className={cx(
            "mt-3 text-charcoal-soft",
            lead ? "measure text-body" : "text-small leading-relaxed",
          )}
        >
          {note.standfirst}
        </p>

        {/* Pushed to the bottom so cards in a row align on their last line
            regardless of standfirst length. */}
        <p className={cx("pt-6", lead ? "mt-2" : "mt-auto")}>
          <span className="label-type inline-flex min-h-11 items-center gap-2 text-blue-deep">
            <span className="link-underline">Read the note</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-focus-within:translate-x-1"
            >
              →
            </span>
          </span>
        </p>
      </Link>

      {/* Tags sit outside the anchor so they are not read as part of the
          link's accessible name, which would make it long and repetitive. */}
      <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1.5">
        {note.tags.map((tag) => (
          <li key={tag} className="label-type text-charcoal-muted">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
