"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { primaryNav, site } from "@/content/site";
import { cx } from "@/lib/utils";

/**
 * Sticky, always-present navigation.
 *
 * This is the component that holds the "clear navigation must always remain
 * available" line. It is never hidden on scroll, never replaced by an icon
 * without a label, and never collapsed on desktop.
 */
export function SiteHeader() {
  const pathname = usePathname();
  /**
   * The sheet's open state is stored as the pathname it was opened on, so a
   * route change closes it by derivation rather than by an effect. Setting
   * state inside an effect on every navigation causes a cascading render.
   */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const sheetId = useId();

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sheet behaviour: scroll lock, Escape, focus trap, focus return.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenedOn(null);
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = sheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      (trigger ?? previouslyFocused)?.focus?.();
    };
  }, [open]);

  return (
    <header
      className={cx(
        // Opaque, not translucent: body text scrolling underneath a blurred
        // bar is unreadable and fails contrast in the overlap.
        "sticky top-0 z-40 bg-ivory transition-colors duration-300",
        scrolled ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[var(--container-page)] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        {/* Wordmark only. The role sits in the page's own hero, and repeating
            it here made the same line appear twice above the fold. */}
        <Link
          href="/"
          className="gradient-text font-display text-[1.125rem] tracking-tight"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  {/* The active indicator is a signal rather than an
                      underline: a gradient thread that draws left-to-right,
                      with a lit point travelling at its head. It draws on
                      hover and focus too, so the affordance and the state
                      share one vocabulary. `aria-current` is what actually
                      communicates the state; this is decoration on top. */}
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "group label-type relative inline-flex min-h-11 items-center transition-colors duration-150",
                      active ? "text-charcoal" : "text-charcoal-muted hover:text-charcoal",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cx(
                        "absolute inset-x-0 bottom-2.5 h-px origin-left transition-transform duration-300 ease-[var(--ease-out-soft)]",
                        active ? "scale-x-100" : "scale-x-0",
                        "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                      )}
                      style={{ backgroundImage: "var(--gradient-signal)" }}
                    />
                    <span
                      aria-hidden="true"
                      className={cx(
                        "absolute -right-1 bottom-[7px] block h-1.5 w-1.5 rounded-full bg-sage",
                        "transition-[opacity,transform] duration-300 ease-[var(--ease-out-soft)]",
                        active
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile trigger — always carries a text label, never a bare icon. */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpenedOn(pathname)}
          aria-expanded={open}
          aria-controls={sheetId}
          className="label-type forced-border inline-flex min-h-11 items-center gap-2 rounded border border-line px-4 py-2 text-charcoal lg:hidden"
        >
          <span
            aria-hidden="true"
            className="flex h-2.5 w-3.5 flex-col justify-between"
          >
            <span className="block h-px w-full bg-charcoal" />
            <span className="block h-px w-full bg-charcoal" />
            <span className="block h-px w-full bg-charcoal" />
          </span>
          Menu
        </button>
      </div>

      {/* Mobile sheet */}
      {open ? (
        <div
          ref={sheetRef}
          id={sheetId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8">
            <span className="font-display text-[1.0625rem] text-charcoal">{site.name}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpenedOn(null)}
              className="label-type forced-border inline-flex min-h-11 items-center gap-2 rounded border border-line px-4 py-2 text-charcoal"
            >
              Close
            </button>
          </div>

          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-5 py-8 sm:px-8">
            <ul className="flex flex-col">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-14 items-center justify-between py-4 font-display text-h3 text-charcoal"
                    >
                      {item.label}
                      {active ? (
                        <span className="label-type text-charcoal-muted">Current</span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
