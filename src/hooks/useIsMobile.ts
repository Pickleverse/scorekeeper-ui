'use client';

import { useState, useEffect } from 'react';

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
  const [viewport, setViewport] = useState<ViewportInfo>({
    isMobile: false,
    width: 0,
    breakpoint: 'md',
    isXS: false,
    isSM: false,
    isMD: false,
    isLG: false,
    isXL: false,
    isXXL: false,
  });

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window === 'undefined') return;

    const updateViewport = () => {
      const width = window.innerWidth;
      const breakpoint = getViewportSize(width);
      const isMobile = width <= BREAKPOINTS.sm; // Mobile is XS and SM

      setViewport({
        isMobile,
        width,
        breakpoint,
        isXS: breakpoint === 'xs',
        isSM: breakpoint === 'sm',
        isMD: breakpoint === 'md',
        isLG: breakpoint === 'lg',
        isXL: breakpoint === 'xl',
        isXXL: breakpoint === 'xxl',
      });
    };

    // Set initial value
    updateViewport();

    // Add listener for window resize
    window.addEventListener('resize', updateViewport);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  return viewport;
};

/**
 * Simplified hook that only returns isMobile boolean
 * @returns boolean - true if viewport is XS or SM (mobile), false otherwise
 */
export const useIsMobile = (): boolean => {
  const { isMobile } = useViewport();
  return isMobile;
};
