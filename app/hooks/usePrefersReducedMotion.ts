export const usePrefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};