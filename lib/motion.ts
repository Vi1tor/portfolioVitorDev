export const easeOut = [0.16, 1, 0.3, 1] as const

/** Scroll-triggered fade + rise, used by every section below the fold. */
export const reveal = (
  delay = 0,
  opts: { y?: number; duration?: number; margin?: string } = {}
) => ({
  initial: { opacity: 0, y: opts.y ?? 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: opts.margin ?? '-60px' },
  transition: { duration: opts.duration ?? 0.55, ease: easeOut, delay },
})

/** Fade + rise that plays on mount rather than on scroll — used above the fold. */
export const fadeInUp = (delay = 0, y = 16, duration = 0.7) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease: easeOut, delay },
})
