/**
 * Two or three soft radial gradients. CSS only — no blur filter, nothing
 * animated on scroll, so it costs nothing after first paint.
 */
export function GlowField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`atmosphere pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -left-[10%] top-[-15%] h-[46rem] w-[46rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-sage) 14%, transparent) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute -right-[14%] top-[22%] h-[38rem] w-[38rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-blue) 12%, transparent) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-[-18%] left-[28%] h-[32rem] w-[32rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-clay) 10%, transparent) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
