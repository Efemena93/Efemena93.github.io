/**
 * First focusable element on every page. Visible only on focus, but always
 * present in the DOM so it is reachable with a single Tab from page load.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="label-type sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-charcoal focus:px-4 focus:py-3 focus:text-ivory"
    >
      Skip to content
    </a>
  );
}
