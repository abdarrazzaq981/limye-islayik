"use client";

import { useEffect, useState } from "react";
import { type AppProgress, getProgress, subscribeProgress } from "./storage";

/**
 * Subscribe to the progress store. Components mount with a hydration-safe
 * default and re-render when storage changes (including from other tabs).
 */
export function useProgress(): AppProgress {
  const [state, setState] = useState<AppProgress>(() => getProgress());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only sync after hydration
    setState(getProgress());
    return subscribeProgress(setState);
  }, []);

  return state;
}
