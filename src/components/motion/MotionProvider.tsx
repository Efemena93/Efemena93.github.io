"use client";

import { MotionConfig } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * The single source of truth for motion in this site.
 *
 * Three inputs, resolved in priority order:
 *   1. the visitor's explicit choice (footer toggle, persisted)
 *   2. the operating system's prefers-reduced-motion setting
 *   3. full motion
 *
 * Reason for (1): people frequently browse on borrowed, shared or freshly
 * installed machines where the OS setting was never turned on. Making the
 * choice available in the page costs one control and removes the need to
 * leave the site to make it usable.
 *
 * Both external inputs are read with useSyncExternalStore rather than an
 * effect-plus-setState, so the server snapshot is deliberate (reduced, and
 * unresolved) and hydration never flashes motion on before turning it off.
 *
 * No component outside this folder may import `motion/react` or read
 * matchMedia for motion. One decision, made once, honoured everywhere.
 */

export type MotionPreference = "system" | "full" | "reduced";

export const MOTION_STORAGE_KEY = "eu:motion";

interface MotionContextValue {
  /** True when animation must not run. */
  reduced: boolean;
  /** False during SSR and the first paint — avoids a flash of motion. */
  resolved: boolean;
  preference: MotionPreference;
  setPreference: (next: MotionPreference) => void;
}

const MotionContext = createContext<MotionContextValue>({
  reduced: true,
  resolved: false,
  preference: "system",
  setPreference: () => {},
});

export function useMotionPreference() {
  return useContext(MotionContext);
}

/* ------------------------------------------------- external store: media */

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMedia(onChange: () => void) {
  const media = window.matchMedia(REDUCE_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getMediaSnapshot = () => window.matchMedia(REDUCE_QUERY).matches;
/** Assume reduced on the server: the safe default is stillness. */
const getMediaServerSnapshot = () => true;

/* ----------------------------------------------- external store: mounted */

const subscribeNever = () => () => {};
const getTrue = () => true;
const getFalse = () => false;

/* ---------------------------------------------------------------- provider */

export function MotionProvider({ children }: { children: ReactNode }) {
  const mounted = useSyncExternalStore(subscribeNever, getTrue, getFalse);
  const systemReduced = useSyncExternalStore(
    subscribeToMedia,
    getMediaSnapshot,
    getMediaServerSnapshot,
  );

  const [preference, setPreferenceState] = useState<MotionPreference>(() => {
    if (typeof window === "undefined") return "system";
    return readStoredPreference();
  });

  const reduced = !mounted || preference === "reduced" || (preference === "system" && systemReduced);

  // Mirror the resolved decision onto <html> so CSS can act on it too.
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  }, [reduced, mounted]);

  const setPreference = useCallback((next: MotionPreference) => {
    setPreferenceState(next);
    try {
      window.localStorage.setItem(MOTION_STORAGE_KEY, next);
    } catch {
      /* non-fatal: the choice simply will not persist */
    }
  }, []);

  const value = useMemo(
    () => ({ reduced, resolved: mounted, preference, setPreference }),
    [reduced, mounted, preference, setPreference],
  );

  return (
    <MotionContext.Provider value={value}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </MotionContext.Provider>
  );
}

function readStoredPreference(): MotionPreference {
  try {
    const raw = window.localStorage.getItem(MOTION_STORAGE_KEY);
    if (raw === "full" || raw === "reduced" || raw === "system") return raw;
  } catch {
    /* storage unavailable — fall back to the system setting */
  }
  return "system";
}

/**
 * Runs before first paint so the page never renders with motion enabled and
 * then snaps to reduced. Kept deliberately tiny.
 */
export const motionBootScript = `(function(){try{var s=localStorage.getItem("${MOTION_STORAGE_KEY}");var m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var r=s==="reduced"||((!s||s==="system")&&m);document.documentElement.dataset.motion=r?"reduced":"full";}catch(e){}})();`;
