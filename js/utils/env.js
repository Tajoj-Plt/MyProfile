/** What the visitor's device supports or prefers. */
export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = window.matchMedia('(pointer: fine)').matches;
