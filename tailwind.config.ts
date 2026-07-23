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
        display: ['var(--font-syne)',     'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)','ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'scroll-line':  'scrollLine 2s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'caret':        'caret 1s step-end infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        scrollLine: {
          '0%':   { opacity: '0', scaleY: '0', transformOrigin: 'top' },
          '50%':  { opacity: '1', scaleY: '1', transformOrigin: 'top' },
          '100%': { opacity: '0', scaleY: '1', transformOrigin: 'bottom' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 16px 44px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
