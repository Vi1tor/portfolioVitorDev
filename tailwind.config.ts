import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains)','ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'card':       '0 1px 2px rgba(23,20,15,0.04), 0 12px 32px rgba(23,20,15,0.06)',
        'card-hover': '0 4px 8px rgba(23,20,15,0.05), 0 24px 48px rgba(23,20,15,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
