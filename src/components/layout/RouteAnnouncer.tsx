"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * A client-side route change does not reload the document, so assistive
 * technology is given no signal that the page changed. This announces the new
 * page politely and moves focus to its <h1>, which is what a full page load
 * would have done.
 */
export function RouteAnnouncer() {
  const pathname = usePathname();
  const [message, setMessage] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On the very first load the browser has already put focus at the top of
    // the document, which is where a keyboard user expects it — one Tab
    // should reach the skip link. Moving focus here would steal that.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("main h1");
      const title = heading?.textContent?.trim() || document.title;
      setMessage(`${title} — page loaded`);

      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}
