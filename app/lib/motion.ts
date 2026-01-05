import { Transition } from "framer-motion";

/**
 * Single, type-safe easing curve.
 * NEVER use string-based easing anywhere else.
 */
export const easeSmooth: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Fade up (used later for hero, cards, sections)
 */
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: easeSmooth,
  } satisfies Transition,
};

/**
 * Fade in from left (scroll-based)
 */
export const fadeLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
    ease: easeSmooth,
  } satisfies Transition,
  viewport: { once: true },
};

/**
 * Fade in from right (scroll-based)
 */
export const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
    ease: easeSmooth,
  } satisfies Transition,
  viewport: { once: true },
};
