"use client";

import { useEffect, useRef } from "react";

import { useMotionPreference } from "@/components/motion/MotionProvider";

/**
 * A faint decaying trail behind a mouse pointer — the "trace" in the concept.
 *
 * Deliberately narrow in scope: fine pointers only, desktop widths only, full
 * motion only, and only on Home and About. It never appears inside a case
 * study, where it would compete with reading.
 */
export function CursorTrace() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { reduced, resolved } = useMotionPreference();

  useEffect(() => {
    if (!resolved || reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: Array<{ x: number; y: number; t: number }> = [];
    const LIFE = 900;
    const MAX = 12;
    let raf = 0;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(window.innerWidth * dpr);
      canvas!.height = Math.round(window.innerHeight * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      points.push({ x: event.clientX, y: event.clientY, t: performance.now() });
      if (points.length > MAX) points.shift();
    }

    function draw() {
      raf = window.requestAnimationFrame(draw);
      const now = performance.now();
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      while (points.length && now - points[0].t > LIFE) points.shift();
      if (points.length < 2) return;

      for (let i = 1; i < points.length; i += 1) {
        const a = points[i - 1];
        const b = points[i];
        const age = (now - b.t) / LIFE;
        const alpha = Math.max(0, (1 - age) * 0.18);
        ctx!.strokeStyle = `color-mix(in srgb, var(--color-sage) ${(alpha * 100).toFixed(1)}%, transparent)`;
        ctx!.lineWidth = 1;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced, resolved]);

  if (!resolved || reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="atmosphere pointer-events-none fixed inset-0 z-40 hidden h-full w-full lg:block"
    />
  );
}
