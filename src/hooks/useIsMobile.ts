'use client';

import { useState, useEffect, useMemo } from 'react';

/**
 * Viewport breakpoint size names
 */
export type ViewportSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * Viewport hook return type
 */
export interface ViewportInfo {
  isMobile: boolean;
  width: number;
  breakpoint: ViewportSize;
  isXS: boolean;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
  isXXL: boolean;
}

/**
 * Breakpoint definitions in pixels
 */
const BREAKPOINTS = {
  xs: 576,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1399,
} as const;

/**
 * Determine the current viewport size based on width
 */
const getViewportSize = (width: number): ViewportSize => {
  if (width <= BREAKPOINTS.xs) return 'xs';
  if (width <= BREAKPOINTS.sm) return 'sm';
  if (width <= BREAKPOINTS.md) return 'md';
  if (width <= BREAKPOINTS.lg) return 'lg';
  if (width <= BREAKPOINTS.xl) return 'xl';
  return 'xxl';
};

/**
 * Custom hook to detect viewport size and breakpoints
 *
 * Breakpoints:
 * - XS: 576px and below
 * - SM: 577px - 767px
 * - MD: 768px - 991px
 * - LG: 992px - 1199px
 * - XL: 1200px - 1399px
 * - XXL: 1400px and above
 *
 * @returns ViewportInfo object with current viewport information
 */
export const useViewport = (): ViewportInfo => {
  const [width, setWidth] = useState<number>(1024);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true);

    // Check if window is defined (client-side only)
    if (typeof window === 'undefined') return;

    // Set initial width from window
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const viewport = useMemo(() => {
    // Use default desktop breakpoint during SSR
    const effectiveWidth = isHydrated ? width : 1024;
    const breakpoint = getViewportSize(effectiveWidth);
    const isMobile = effectiveWidth <= BREAKPOINTS.sm;

    return {
      isMobile,
      width: effectiveWidth,
      breakpoint,
      isXS: breakpoint === 'xs',
      isSM: breakpoint === 'sm',
      isMD: breakpoint === 'md',
      isLG: breakpoint === 'lg',
      isXL: breakpoint === 'xl',
      isXXL: breakpoint === 'xxl',
    };
  }, [width, isHydrated]);

  return viewport;
};

/**
 * Simplified hook that only returns isMobile boolean
 * @returns boolean - true if viewport is XS or SM (mobile), false otherwise
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    // Mark as hydrated to prevent SSR mismatch
    setIsHydrated(true);

    if (typeof window === 'undefined') return;

    // Set initial value
    setIsMobile(window.innerWidth <= BREAKPOINTS.sm);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.sm);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return false during SSR to match initial render
  if (!isHydrated) {
    return false;
  }

  return isMobile;
};
