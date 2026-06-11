export const theme = {
  colors: {
    graphite: '#111827',
    darkSlate: '#1F2937',
    bg: '#07080F',
    surface: '#0A0C18',
    cyan: '#22D3EE',
    blue: '#3B82F6',
    text: '#E8EDF5',
  },
  spacing: {
    px: 4,
    xs: 8,
    sm: 12,
    md: 20,
    lg: 32,
    xl: 48,
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: {
      short: 0.28,
      base: 0.5,
      long: 0.9,
    },
    stagger: 0.08,
  },
} as const

export type Theme = typeof theme

export const variants = {
  fadeIn: (delay = 0) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: theme.motion.duration.base, ease: theme.motion.ease, delay } },
    exit: { opacity: 0, y: 6, transition: { duration: theme.motion.duration.short, ease: theme.motion.ease } },
  }),
  subtlePop: (delay = 0) => ({
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: theme.motion.duration.base, ease: theme.motion.ease, delay } },
    exit: { opacity: 0, scale: 0.995 },
  }),
}

export default theme
