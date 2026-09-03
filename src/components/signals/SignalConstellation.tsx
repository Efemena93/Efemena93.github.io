"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useMotionPreference } from "@/components/motion/MotionProvider";
import { KIND_LABEL, signalNodes, signalThreads, type SignalNode } from "@/content/signals";
import { cx, seededRandom } from "@/lib/utils";

import { setSignalOrigin } from "./signal-origin";

/**
 * The signal field.
 *
 * A calm, interactive constellation where each point is a real thing — a
 * project, a research theme, or something noticed during the work.
 *
 * How this stays usable rather than being a puzzle:
 *
 *  1. Every point is a real anchor element in the DOM, absolutely positioned
 *     over a decorative canvas. So every point is keyboard-reachable, has a
 *     visible focus ring, and works identically on hover and on focus.
 *  2. The canvas draws threads and glow only. It is aria-hidden and never
 *     carries information that is not also in the DOM.
 *  3. The same content is rendered as a plain text list beneath the hero
 *     (`SignalIndex`), always visible, so nothing here has to be discovered.
 *  4. Below the large breakpoint the field is not rendered at all — a
 *     pointer-proximity interaction has no touch equivalent worth faking.
 *     The list is the whole experience there, and it is a good one.
 *
 * Motion: points drift on a slow seeded orbit around their authored anchor,
 * so the composition is always recognisably the same place. Nothing bounces,
 * nothing chases the cursor, nothing reacts faster than ~300ms.
 */

const ORBIT_RADIUS = 0.012; // normalised — a barely-perceptible wander
const ORBIT_SECONDS = 34;
const PROXIMITY_PX = 96;
/** Label geometry: 14rem wide plus a 1rem gap. */
const LABEL_W = 224;
const LABEL_PX = LABEL_W + 16;

const ACCENT_VAR: Record<SignalNode["accent"], string> = {
  sage: "--color-sage",
  blue: "--color-blue",
  clay: "--color-clay",
};

const KIND_DOT: Record<SignalNode["kind"], string> = {
  project: "h-3 w-3",
  theme: "h-2 w-2",
  observation: "h-1.5 w-1.5",
};

export function SignalConstellation({ className }: { className?: string }) {
  const router = useRouter();
  const { reduced, resolved } = useMotionPreference();

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  /** Live pixel positions, written by the rAF loop, read by the canvas. */
  const livePositions = useRef<Record<string, { x: number; y: number }>>({});

  const [activeId, setActiveId] = useState<string | null>(null);
  /**
   * Which side of its point the label sits on. Decided from the measured
   * position rather than the authored x, because "is there room" depends on
   * the viewport — and the one place a label must never land is on top of
   * the headline.
   */
  const [side, setSide] = useState<"right" | "left" | "below">("right");
  const [departing, setDeparting] = useState<{ x: number; y: number; accent: string } | null>(null);

  /**
   * The rAF loop needs the current selection without re-subscribing every
   * time it changes, so it is mirrored into a ref — updated in an effect
   * rather than during render.
   */
  const activeRef = useRef<string | null>(null);
  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  /**
   * Where the label goes, measured rather than assumed.
   *
   * Right by default. Left when the right would overflow the field. Below
   * when neither fits — which happens on narrower large screens, and is the
   * case that would otherwise push a label over the headline. The field
   * element itself starts to the right of the headline column, so "left"
   * can never reach the text.
   */
  const chooseSide = useCallback((id: string | null) => {
    if (!id) return;
    const wrap = wrapRef.current;
    const p = livePositions.current[id];
    if (!wrap || !p) return;

    const width = wrap.getBoundingClientRect().width;
    // The point keeps drifting after the side is chosen, so the margin has to
    // absorb a full orbit's worth of travel — otherwise a label decided as
    // "just fits" ends up a few pixels off-screen a second later.
    const margin = 8 + ORBIT_RADIUS * width * 2;
    if (p.x + LABEL_PX <= width - margin) setSide("right");
    else if (p.x - LABEL_PX >= margin) setSide("left");
    else setSide("below");
  }, []);

  const phases = useMemo(() => {
    const rand = seededRandom(90210);
    return Object.fromEntries(signalNodes.map((node) => [node.id, rand() * Math.PI * 2])) as Record<
      string,
      number
    >;
  }, []);

  const activeNode = activeId ? signalNodes.find((n) => n.id === activeId) : undefined;

  /* ----------------------------------------------------- the animation loop */

  useEffect(() => {
    if (!resolved) return;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let last = 0;
    const pointer = { x: -9999, y: -9999, inside: false };

    const styles = getComputedStyle(document.documentElement);
    const rgb = (token: string) => hexToRgb(styles.getPropertyValue(token).trim() || "#7e9585");
    let threadRgb = rgb("--color-blue");
    let sageRgb = rgb("--color-sage");

    function measure() {
      const rect = wrap!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function positionsFor(time: number) {
      const out: Record<string, { x: number; y: number }> = {};
      for (const node of signalNodes) {
        let nx = node.x;
        let ny = node.y;
        if (!reduced) {
          const t = time / (ORBIT_SECONDS * 1000) + phases[node.id];
          nx += Math.cos(t) * ORBIT_RADIUS;
          ny += Math.sin(t * 0.82) * ORBIT_RADIUS * 0.72;
        }
        out[node.id] = { x: nx * width, y: ny * height };
      }
      return out;
    }

    function paint(time: number) {
      const positions = positionsFor(time);
      livePositions.current = positions;

      // Move the DOM points to match, without a React render.
      for (const node of signalNodes) {
        const el = nodeRefs.current[node.id];
        const p = positions[node.id];
        if (el && p) el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }

      ctx!.clearRect(0, 0, width, height);

      const active = activeRef.current;

      for (const [aId, bId] of signalThreads) {
        const a = positions[aId];
        const b = positions[bId];
        if (!a || !b) continue;

        const touched = active === aId || active === bId;
        const alpha = touched ? 0.44 : 0.14;

        ctx!.strokeStyle = `rgba(${threadRgb}, ${alpha})`;
        ctx!.lineWidth = touched ? 1.2 : 1;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      // A soft halo behind each point. The DOM element draws the point itself,
      // so the thing you click is the thing you see.
      for (const node of signalNodes) {
        const p = positions[node.id];
        if (!p) continue;
        const isActive = active === node.id;
        const near =
          pointer.inside && Math.hypot(pointer.x - p.x, pointer.y - p.y) < PROXIMITY_PX;
        const strength = isActive ? 1 : near ? 0.55 : 0.22;
        const radius = node.kind === "project" ? 26 : 18;

        const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * (1 + strength));
        glow.addColorStop(0, `rgba(${sageRgb}, ${(0.28 * strength).toFixed(3)})`);
        glow.addColorStop(1, `rgba(${sageRgb}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius * (1 + strength), 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function frame(now: number) {
      raf = window.requestAnimationFrame(frame);
      if (!visible) return;
      if (now - last < 33) return; // 30fps is plenty for a drift this slow
      last = now;
      paint(now);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const rect = wrap!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.inside =
        pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;

      if (reduced) return;

      // Proximity, not collision: the nearest point within the radius wins, so
      // a point responds slightly before the cursor reaches it.
      let nearestId: string | null = null;
      let nearestDistance = PROXIMITY_PX;
      for (const node of signalNodes) {
        const p = livePositions.current[node.id];
        if (!p) continue;
        const d = Math.hypot(pointer.x - p.x, pointer.y - p.y);
        if (d < nearestDistance) {
          nearestDistance = d;
          nearestId = node.id;
        }
      }
      if (nearestId !== activeRef.current) {
        setActiveId(nearestId);
        chooseSide(nearestId);
      }
    }

    function onPointerLeave() {
      pointer.inside = false;
      pointer.x = -9999;
      pointer.y = -9999;
      setActiveId(null);
    }

    function onTheme() {
      const next = getComputedStyle(document.documentElement);
      threadRgb = hexToRgb(next.getPropertyValue("--color-blue").trim() || "#7b93a8");
      sageRgb = hexToRgb(next.getPropertyValue("--color-sage").trim() || "#7e9585");
    }

    measure();
    paint(0);

    const resizeObserver = new ResizeObserver(() => {
      measure();
      paint(performance.now());
    });
    resizeObserver.observe(wrap);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(wrap);

    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    wrap.addEventListener("pointermove", onPointerMove, { passive: true });
    wrap.addEventListener("pointerleave", onPointerLeave, { passive: true });

    if (!reduced) raf = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [reduced, resolved, phases, chooseSide]);

  /* --------------------------------------------------------- navigation */

  const go = useCallback(
    (node: SignalNode, href: string, event: React.MouseEvent) => {
      // Let modified clicks (new tab, download) behave normally.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();

      const wrap = wrapRef.current;
      const p = livePositions.current[node.id];

      if (reduced || !wrap || !p) {
        router.push(href);
        return;
      }

      const rect = wrap.getBoundingClientRect();
      // Record where the point sat on screen, so the destination page can
      // continue the movement from the same place.
      setSignalOrigin({
        xPct: ((rect.left + p.x) / window.innerWidth) * 100,
        yPct: ((rect.top + p.y) / window.innerHeight) * 100,
        accent: node.accent,
      });

      setDeparting({ x: p.x, y: p.y, accent: ACCENT_VAR[node.accent] });
      window.setTimeout(() => router.push(href), 420);
    },
    [reduced, router],
  );

  return (
    <div
      ref={wrapRef}
      className={cx("relative h-full w-full", className)}
      // The field is a supplementary way to browse. The list below the hero
      // is the primary one, and it is announced as such.
      aria-label="Signal field — an interactive map of projects, research themes and observations"
      role="group"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="atmosphere absolute inset-0" />

      {/* Departure bloom: the selected point expands before the route changes,
          and the destination page resumes from the same coordinates. */}
      {departing ? (
        <span
          aria-hidden="true"
          className="atmosphere pointer-events-none absolute z-20 block rounded-full"
          style={{
            left: departing.x,
            top: departing.y,
            width: 24,
            height: 24,
            marginLeft: -12,
            marginTop: -12,
            background: `radial-gradient(circle, color-mix(in srgb, var(${departing.accent}) 46%, transparent) 0%, transparent 70%)`,
            animation: "signal-depart 420ms var(--ease-out-soft) forwards",
          }}
        />
      ) : null}

      {signalNodes.map((node) => {
        const href = `/work/${node.slug ?? node.fromSlug}`;
        const isActive = activeId === node.id;
        const labelId = `signal-label-${node.id}`;

        return (
          <Link
            key={node.id}
            href={href}
            ref={(el) => {
              nodeRefs.current[node.id] = el;
            }}
            onMouseEnter={() => {
              setActiveId(node.id);
              chooseSide(node.id);
            }}
            onFocus={() => {
              setActiveId(node.id);
              chooseSide(node.id);
            }}
            onBlur={() => setActiveId((current) => (current === node.id ? null : current))}
            onClick={(event) => go(node, href, event)}
            aria-describedby={isActive ? labelId : undefined}
            className="absolute left-0 top-0 z-10 flex items-center justify-center rounded-full p-3 focus-visible:outline-offset-0"
            style={{
              // Overwritten each frame by the rAF loop; this is the first paint
              // and the reduced-motion resting position.
              transform: `translate3d(${node.x * 100}%, ${node.y * 100}%, 0) translate(-50%, -50%)`,
              left: 0,
              top: 0,
            }}
          >
            <span className="sr-only">
              {KIND_LABEL[node.kind]}: {node.title}. {node.description}
              {node.kind === "project" ? " Opens the case study." : ` Traces back to a case study.`}
            </span>

            <span
              aria-hidden="true"
              className={cx(
                "block rounded-full transition-all duration-300 ease-[var(--ease-out-soft)]",
                KIND_DOT[node.kind],
                node.accent === "sage" && "bg-sage",
                node.accent === "blue" && "bg-blue",
                node.accent === "clay" && "bg-clay",
                isActive ? "scale-150 opacity-100" : "opacity-70",
              )}
            />

            {/* Label. Rendered only when this point is active, positioned
                relative to the point so it never covers the headline. */}
            {isActive ? (
              <span
                id={labelId}
                aria-hidden="true"
                className={cx(
                  "pointer-events-none absolute w-56 rounded border border-line bg-ivory/95 p-4 shadow-[var(--shadow-lift)]",
                  side === "right" && "left-full top-1/2 ml-4 -translate-y-1/2",
                  side === "left" && "right-full top-1/2 mr-4 -translate-y-1/2",
                  side === "below" && "left-1/2 top-full mt-4 -translate-x-1/2",
                )}
                style={{
                  animation:
                    side === "below"
                      ? "signal-label-in-below 300ms var(--ease-out-soft) both"
                      : "signal-label-in 300ms var(--ease-out-soft) both",
                }}
              >
                <span className="label-type block text-charcoal-muted">
                  {KIND_LABEL[node.kind]}
                </span>
                <span className="mt-1.5 block font-display text-[1.0625rem] leading-snug text-charcoal">
                  {node.title}
                </span>
                <span className="mt-2 block text-small leading-relaxed text-charcoal-soft">
                  {node.description}
                </span>
                <span className="label-type mt-3 block text-blue-deep">
                  {node.kind === "project" ? "Open case study →" : "Where this came from →"}
                </span>
              </span>
            ) : null}
          </Link>
        );
      })}

      {/* A live region so a screen-reader or keyboard user gets the same
          information a pointer user gets on hover. */}
      <p aria-live="polite" className="sr-only">
        {activeNode ? `${activeNode.title}. ${activeNode.description}` : ""}
      </p>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const int = Number.parseInt(full || "7e9585", 16);
  return `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
}
