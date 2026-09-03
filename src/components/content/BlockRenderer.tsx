import { Eyebrow, Hairline } from "@/components/primitives";
import { SignalPoint } from "@/components/signals/SignalPoint";
import type { Block } from "@/content/types";

import { Claim, ClaimGroup } from "./Claim";

/**
 * Maps a content block onto a component.
 *
 * The switch is exhaustive: the `never` assertion at the bottom means adding
 * a block type to the union without writing its renderer is a build error,
 * not a silently missing section.
 */
export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <div className="measure space-y-5 text-body text-charcoal-soft">
          {block.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      );

    case "claim":
      return (
        <Claim
          level={block.level}
          text={block.text}
          source={block.source}
          className="measure"
        />
      );

    case "claimGroup":
      return <ClaimGroup title={block.title} claims={block.claims} />;

    case "statRow":
      return (
        <div className="measure">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
            {block.stats.map((stat) => (
              <div key={stat.label} className="border-t border-line pt-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-h2 tabular-nums text-charcoal">
                    {stat.value}
                  </span>
                  <span className="label-type mt-1 block text-charcoal-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          {block.source ? (
            <p className="mt-5 text-small text-charcoal-muted">
              <span className="label-type mr-2">Source</span>
              {block.source}
            </p>
          ) : null}
        </div>
      );

    case "quote":
      return (
        <figure className="measure border-l border-sage pl-6">
          <blockquote>
            <p className="font-display text-h3 leading-snug text-charcoal">
              &ldquo;{block.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-4 text-small text-charcoal-muted">
            <cite className="not-italic">{block.attribution}</cite>
            {block.note ? <span className="block opacity-80">{block.note}</span> : null}
          </figcaption>
        </figure>
      );

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <div className="measure">
          {block.title ? <h3 className="mb-4 text-h3 text-charcoal">{block.title}</h3> : null}
          <List className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-body text-charcoal-soft">
                {block.ordered ? (
                  <span className="label-type mt-1.5 w-6 shrink-0 text-charcoal-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : (
                  <SignalPoint className="mt-2.5" />
                )}
                <span>{item}</span>
              </li>
            ))}
          </List>
        </div>
      );
    }

    case "steps":
      return (
        <div className="measure">
          {block.title ? <h3 className="mb-6 text-h3 text-charcoal">{block.title}</h3> : null}
          <ol className="relative space-y-8 border-l border-line pl-8">
            {block.steps.map((step, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.15rem] top-2 h-2 w-2 rounded-full bg-sage"
                />
                <Eyebrow as="p" className="mb-1.5">
                  Step {String(i + 1).padStart(2, "0")}
                </Eyebrow>
                <h4 className="font-display text-h3 text-charcoal">{step.title}</h4>
                <p className="mt-2 text-body text-charcoal-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "figure":
      return (
        <figure
          className={
            block.width === "bleed"
              ? "w-full"
              : block.width === "wide"
                ? "w-full lg:max-w-[52rem]"
                : "measure"
          }
        >
          <div className="forced-border flex aspect-[16/10] w-full items-center justify-center rounded border border-line bg-sunk">
            <p className="label-type px-6 text-center text-charcoal-muted">{block.image.alt}</p>
          </div>
          {block.image.caption ? (
            <figcaption className="mt-3 text-small text-charcoal-muted">
              {block.image.caption}
            </figcaption>
          ) : null}
          {block.description ? (
            <p className="measure mt-4 text-small text-charcoal-soft">{block.description}</p>
          ) : null}
        </figure>
      );

    case "comparison":
      return (
        <div className="measure">
          {block.title ? <h3 className="mb-5 text-h3 text-charcoal">{block.title}</h3> : null}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <thead>
                <tr>
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="label-type border-b border-line-strong pb-3 pr-6 text-charcoal"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="border-b border-line py-4 pr-6 align-top text-small text-charcoal-soft"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "callout":
      return (
        <aside
          className={[
            "forced-border measure rounded border-l-2 bg-paper p-6",
            block.tone === "caution" ? "border-l-clay" : "border-l-sage",
          ].join(" ")}
        >
          <h3 className="label-type mb-2 text-charcoal">{block.title}</h3>
          <p className="text-small text-charcoal-soft">{block.text}</p>
        </aside>
      );

    case "divider":
      return <Hairline className="measure" />;

    case "todo":
      return (
        <aside className="forced-border measure rounded border border-dashed border-clay bg-paper p-5">
          <p className="label-type mb-1.5 text-clay-deep">To write</p>
          <p className="text-small text-charcoal-soft">{block.note}</p>
        </aside>
      );

    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
}
