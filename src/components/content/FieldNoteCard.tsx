import Link from "next/link";

import type { FieldNote } from "@/content/types";
import { formatDate } from "@/lib/utils";

export function FieldNoteCard({ note }: { note: FieldNote }) {
  return (
    <article className="group border-t border-line py-8">
      <Link href={`/field-notes/${note.slug}`} className="block">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <time dateTime={note.date} className="label-type text-charcoal-muted">
            {formatDate(note.date)}
          </time>
          <span className="label-type text-charcoal-muted" aria-hidden="true">
            ·
          </span>
          <span className="label-type text-charcoal-muted">
            {note.readingMinutes} min read
          </span>
        </div>

        <h2 className="mt-3 font-display text-h2 text-charcoal">
          <span className="link-underline">{note.title}</span>
        </h2>

        <p className="mt-3 measure text-body text-charcoal-soft">{note.standfirst}</p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {note.tags.map((tag) => (
            <li key={tag} className="label-type text-charcoal-muted">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
