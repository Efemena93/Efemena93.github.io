"use client";

import { useEffect, useRef } from "react";

import { useMotionPreference } from "@/components/motion/MotionProvider";
import {
  POINTER_PULL,
  POINTER_RADIUS,
  POINTER_THREAD_ALPHA,
  THREAD_DISTANCE,
  THREAD_MAX_ALPHA,
  buildField,
  pointCountFor,
  type SignalSeed,
} from "./field-seed";
import { ThreadFieldStatic } from "./ThreadFieldStatic";

/**
 * The animated signal field.
 *
 * Constraints this component holds itself to:
 *  - it is decorative, so it is aria-hidden and pointer-events: none;
 *  - it never contains text, a control, or information;
 *  - it renders at low alpha over ivory, so text above it always clears
 *    contrast requirements with room to spare;
 *  - it is capped at 30fps, paused when off-screen and when the tab is
 *    hidden, and never runs at all under reduced motion.
 */
export function ThreadField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { reduced, resolved } = useMotionPreference();

  useEffect(() => {
    if (!resolved || reduced) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let points: SignalSeed[] = [];
    let raf = 0;
    let last = 0;
    let visible = true;
    let documentVisible = true;

    const pointer = { x: -9999, y: -9999, active: false };
    const styles = getComputedStyle(document.documentElement);
    const readColour = (token: string, fallback: string) =>
      styles.getPropertyValue(token).trim() || fallback;

    let sageRgb = hexToRgb(readColour("--color-sage", "#7e9585"));
    let blueRgb = hexToRgb(readColour("--color-blue", "#7b93a8"));

    function measure() {
      const rect = wrap!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = pointCountFor(window.innerWidth);
      if (count !== points.length) points = buildField(count);
    }

    function step(now: number) {
      raf = window.requestAnimationFrame(step);
      if (!visible || !documentVisible) return;
      // Cap at ~30fps. The field is atmosphere; it does not need 120.
      if (now - last < 33) return;
      last = now;

      ctx!.clearRect(0, 0, width, height);
      if (points.length === 0) return;

      const positions = points.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0.02 || p.x >= 0.98) p.vx *= -1;
        if (p.y <= 0.02 || p.y >= 0.98) p.vy *= -1;

        let px = p.x * width;
        let py = p.y * height;

        if (pointer.active) {
          const dx = pointer.x - px;
          const dy = pointer.y - py;
          const d = Math.hypot(dx, dy);
          if (d < POINTER_RADIUS && d > 0.5) {
            const pull = (1 - d / POINTER_RADIUS) * POINTER_PULL;
            px += dx * pull;
            py += dy * pull;
          }
        }

        return { px, py, p };
      });

      // Threads first, so points sit on top of their own connections.
      for (let i = 0; i < positions.length; i += 1) {
        for (let j = i + 1; j < positions.length; j += 1) {
          const a = positions[i];
          const b = positions[j];
          const d = Math.hypot(a.px - b.px, a.py - b.py);
          if (d >= THREAD_DISTANCE) continue;

          let alpha = (1 - d / THREAD_DISTANCE) * THREAD_MAX_ALPHA;

          if (pointer.active) {
            const mid = { x: (a.px + b.px) / 2, y: (a.py + b.py) / 2 };
            const pd = Math.hypot(pointer.x - mid.x, pointer.y - mid.y);
            if (pd < POINTER_RADIUS) {
              const lift = 1 - pd / POINTER_RADIUS;
              alpha = alpha + (POINTER_THREAD_ALPHA - alpha) * lift * 0.75;
            }
          }

          ctx!.strokeStyle = `rgba(${blueRgb}, ${alpha.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.px, a.py);
          ctx!.lineTo(b.px, b.py);
          ctx!.stroke();
        }
      }

      for (const { px, py, p } of positions) {
        const glow = ctx!.createRadialGradient(px, py, 0, px, py, p.r * 6);
        glow.addColorStop(0, `rgba(${sageRgb}, ${(p.a * 0.5).toFixed(3)})`);
        glow.addColorStop(1, `rgba(${sageRgb}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(px, py, p.r * 6, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(${sageRgb}, ${p.a.toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(px, py, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const rect = wrap!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function onPointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function onVisibility() {
      documentVisible = document.visibilityState === "visible";
    }

    function onThemeChange() {
      const next = getComputedStyle(document.documentElement);
      sageRgb = hexToRgb(next.getPropertyValue("--color-sage").trim() || "#7e9585");
      blueRgb = hexToRgb(next.getPropertyValue("--color-blue").trim() || "#7b93a8");
    }

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(wrap);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(wrap);

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, resolved]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`atmosphere pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* The static field is always in the DOM: it is the no-JS and
          reduced-motion rendering, and it prevents an empty first paint. */}
      <ThreadFieldStatic className={reduced || !resolved ? "opacity-100" : "opacity-0"} />
      {resolved && !reduced ? (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      ) : null}
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
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r}, ${g}, ${b}`;
}
