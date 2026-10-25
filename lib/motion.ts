export const easeOut = [0.16, 1, 0.3, 1] as const

/** Aparece e sobe ao entrar na tela — usado nas seções abaixo da dobra. */
export const reveal = (
  delay = 0,
  opts: { y?: number; duration?: number; margin?: string } = {}
) => ({
  initial: { opacity: 0, y: opts.y ?? 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: opts.margin ?? '-80px' },
  transition: { duration: opts.duration ?? 0.8, ease: easeOut, delay },
})

/** Mesmo efeito, mas ao carregar a página — usado no hero. */
export const fadeInUp = (delay = 0, y = 20, duration = 0.9) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease: easeOut, delay },
})
