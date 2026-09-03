import Link from "next/link";

import { Eyebrow } from "@/components/primitives";
import { KIND_LABEL, observationNodes, projectNodes, themeNodes } from "@/content/signals";
import type { SignalNode } from "@/content/signals";

/**
 * Every point in the field, as plain text.
 *
 * This exists so that the constellation is a second way in rather than the
 * only one. It is always rendered — not a fallback, not behind a toggle —
 * and it is the entire experience below the large breakpoint, where a
 * pointer-proximity interaction has no honest touch equivalent.
 */
export function SignalIndex() {
  const groups: Array<{ kind: SignalNode["kind"]; nodes: SignalNode[]; note: string }> = [
    {
      kind: "project",
      nodes: projectNodes,
      note: "Case studies. Each one separates what was observed from what was concluded.",
    },
    {
      kind: "theme",
      nodes: themeNodes,
      note: "Questions the work keeps returning to, whatever the sector.",
    },
    {
      kind: "observation",
      nodes: observationNodes,
      note: "Things noticed during the research. Interpretations, not statistics — each traces back to a project.",
    },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
      {groups.map((group) => (
        <section key={group.kind} aria-labelledby={`index-${group.kind}`}>
          <Eyebrow as="h3" id={`index-${group.kind}`} className="mb-2">
            {KIND_LABEL[group.kind]}s
          </Eyebrow>
          <p className="mb-6 text-small text-charcoal-muted">{group.note}</p>

          <ul className="space-y-4">
            {group.nodes.map((node) => (
              <li key={node.id} className="border-t border-line pt-4">
                <Link
                  href={`/work/${node.slug ?? node.fromSlug}`}
                  className="group block focus-visible:outline-offset-4"
                >
                  <span className="link-underline font-display text-[1.0625rem] leading-snug text-charcoal">
                    {node.title}
                  </span>
                  <span className="mt-1.5 block text-small leading-relaxed text-charcoal-soft">
                    {node.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
