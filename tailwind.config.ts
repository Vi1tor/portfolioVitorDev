import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: { DEFAULT: 'var(--paper)', raised: 'var(--paper-raised)', sunk: 'var(--paper-sunk)' },
        ink: { DEFAULT: 'var(--ink)', muted: 'var(--ink-muted)', faint: 'var(--ink-faint)' },
        line: { DEFAULT: 'var(--line)', strong: 'var(--line-strong)' },
        accent: { DEFAULT: 'var(--accent)', bright: 'var(--accent-bright)' },
        forest: {
          DEFAULT: 'var(--forest)',
          raised: 'var(--forest-raised)',
          line: 'var(--forest-line)',
          ink: 'var(--forest-ink)',
          muted: 'var(--forest-muted)',
        },
      },
    },
  },
  plugins: [],
}
export default config
