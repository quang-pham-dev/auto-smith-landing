import { useState, useEffect, useCallback } from "react";

// Interface to define scroll position coordinates
interface ScrollPosition {
  x: number;
  y: number;
}

// Interface for hook configuration options
interface UseScrollOptions {
  throttleMs?: number;
  enabled?: boolean;
}

function useScroll(
  element?: HTMLElement | null,
  options: UseScrollOptions = {},
): ScrollPosition {
  const { throttleMs = 100, enabled = true } = options;

  // Initialize with default values of 0
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  // Update scroll position on mount and when element changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentX = element ? element.scrollLeft : window.scrollX;
    const currentY = element ? element.scrollTop : window.scrollY;

    setScrollPosition({ x: currentX, y: currentY });
  }, [element]);

  const handleScroll = useCallback(() => {
    if (!enabled) return;

    const currentX = element ? element.scrollLeft : window.scrollX;
    const currentY = element ? element.scrollTop : window.scrollY;

    setScrollPosition((prev) =>
      prev.x !== currentX || prev.y !== currentY
        ? { x: currentX, y: currentY }
        : prev,
    );
  }, [element, enabled]);

  useEffect(() => {
    if (typeof window === "undefined" || !enabled) return;

    const scrollElement = element || window;
    scrollElement.addEventListener(
      "scroll",
      throttle(handleScroll, throttleMs),
    );

    return () => {
      scrollElement.removeEventListener(
        "scroll",
        throttle(handleScroll, throttleMs),
      );
    };
  }, [element, enabled, handleScroll, throttleMs]);

  return scrollPosition;
}

type ThrottleFunction = (...args: unknown[]) => void;

/**
 * Utility function to throttle function calls
 * @param func - Function to be throttled
 * @param limit - Time limit between function calls
 * @returns Throttled function
 */
function throttle(func: ThrottleFunction, limit: number): ThrottleFunction {
  let inThrottle = false;

  return function throttled(...args: unknown[]): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

export default useScroll;
