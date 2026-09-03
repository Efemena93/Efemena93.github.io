import Link from "next/link";
import type { AnchorHTMLAttributes, ElementType, HTMLAttributes, ReactNode } from "react";

import { cx } from "@/lib/utils";

/* ------------------------------------------------------------- container */

export function Container({
  children,
  className,
  width = "page",
}: {
  children: ReactNode;
  className?: string;
  width?: "page" | "measure" | "wide";
}) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        width === "page" && "max-w-[var(--container-page)]",
        width === "wide" && "max-w-[92rem]",
        width === "measure" && "max-w-[var(--container-page)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- section */

export function Section({
  children,
  className,
  id,
  labelledBy,
  as: Tag = "section",
  spacing = "normal",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
  as?: ElementType;
  spacing?: "tight" | "normal" | "loose" | "none";
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        spacing === "tight" && "py-12 sm:py-16 lg:py-20",
        spacing === "normal" && "py-16 sm:py-24 lg:py-32",
        spacing === "loose" && "py-20 sm:py-28 lg:py-40",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------------- eyebrow */

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">) {
  return (
    <Tag className={cx("label-type text-charcoal-muted", className)} {...rest}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------- hairline */

export function Hairline({ className }: { className?: string }) {
  return <hr className={cx("border-0 border-t border-line", className)} />;
}

/* ------------------------------------------------------------------ tag */

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="label-type forced-border rounded-sm border border-line px-2 py-1 text-charcoal-muted">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------ meta list */

export function MetaList({
  items,
  className,
  columns = 2,
}: {
  items: Array<{ label: string; value: ReactNode }>;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <dl
      className={cx(
        "grid gap-x-8 gap-y-6",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="label-type mb-2 text-charcoal-muted">{item.label}</dt>
          <dd className="text-small leading-relaxed text-charcoal-soft">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------------------------------------------------------------- links */

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function LinkButton({
  href,
  children,
  variant = "solid",
  className,
  ...rest
}: LinkButtonProps) {
  const classes = cx(
    "label-type forced-border inline-flex min-h-11 items-center gap-2 rounded-full py-3 transition-colors duration-150",
    // The primary action carries the signature gradient as a tinted fill with
    // a violet edge — the original page's pill, at button size. The label
    // stays a solid, high-contrast colour; the gradient is only ever the
    // ground, never the text, so contrast is measurable.
    variant === "solid" &&
      "pill border-blue px-5 text-charcoal hover:text-charcoal focus-visible:text-charcoal",
    variant === "outline" && "border border-line-strong px-5 text-charcoal hover:bg-sunk",
    // No border, so no horizontal padding — otherwise it reads as indented
    // when sitting beside bordered buttons.
    variant === "quiet" && "px-1 text-charcoal-muted hover:text-charcoal",
    className,
  );

  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = cx("link-underline text-blue-deep", className);
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------- prose */

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx("measure space-y-5 text-body text-charcoal-soft", className)}>
      {children}
    </div>
  );
}
