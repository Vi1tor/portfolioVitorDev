import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03040a',
          900: '#05060b',
          800: '#0a0c16',
          700: '#12141f',
          600: '#1a1d2b',
          500: '#252838',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          50:  '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
        display: ['var(--font-syne)',     'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)','ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'scroll-line':  'scrollLine 2s ease-in-out infinite',
        'gradient-x':   'gradientX 4s ease infinite',
        'float':        'float 6s ease-in-out infinite',
        'aurora':       'aurora 18s ease-in-out infinite',
        'aurora-slow':  'aurora 26s ease-in-out infinite reverse',
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
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%':      { transform: 'translate(4%, 6%) scale(1.08)' },
          '66%':      { transform: 'translate(-4%, -3%) scale(0.96)' },
        },
      },
      backgroundSize: { '300%': '300%' },
      boxShadow: {
        'glow-sm':  '0 0 20px rgba(124,108,246,0.22)',
        'glow':     '0 0 50px rgba(124,108,246,0.28)',
        'glow-lg':  '0 0 90px rgba(34,211,238,0.22)',
        'card':     '0 4px 24px rgba(0,0,0,0.35)',
        'card-hover': '0 16px 50px rgba(0,0,0,0.45), 0 0 40px rgba(124,108,246,0.16)',
      },
    },
  },
  plugins: [],
}

export default config
