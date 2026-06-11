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
          950: '#f8f3ea',
          900: '#f4ecdf',
          800: '#ede2cf',
          700: '#e4d4bb',
          600: '#d9c5a4',
          500: '#cfae87',
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
      },
      backgroundSize: { '300%': '300%' },
      boxShadow: {
        'glow-sm':  '0 0 20px rgba(183,119,62,0.12)',
        'glow':     '0 0 40px rgba(183,119,62,0.16)',
        'glow-lg':  '0 0 80px rgba(183,119,62,0.2)',
        'card':     '0 4px 24px rgba(118,92,65,0.1)',
        'card-hover': '0 12px 40px rgba(118,92,65,0.14), 0 0 40px rgba(183,119,62,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
