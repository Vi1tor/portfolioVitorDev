'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  index: string
  kicker: string
  title: string
  titleAccent?: string
  subtitle: string
}

export default function PageHero({ index, kicker, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14" style={{
      background: 'linear-gradient(160deg, #ffffff 0%, #faf6f0 45%, #f2e8db 100%)',
    }}>
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      {/* Ghost index */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-4 font-display font-black leading-none"
        style={{
          fontSize: 'clamp(8rem, 26vw, 20rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(183,107,42,0.08)',
        }}
      >
        {index}
      </div>

      <div className="section-container relative z-10">
        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="kicker mb-7 block"
        >
          {kicker}
        </motion.span>

        {/* Title + subtitle row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display font-semibold leading-[0.88] tracking-[-0.05em]"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: 'var(--text)' }}
          >
            {title}
            {titleAccent && (
              <span className="block" style={{ color: 'var(--accent)' }}>{titleAccent}</span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            className="max-w-xs text-sm leading-[1.85] text-stone-500 lg:pb-1 lg:text-right"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="mt-10 h-px origin-left"
          style={{ background: 'linear-gradient(to right, var(--accent), rgba(183,107,42,0.15), transparent)' }}
        />
      </div>
    </section>
  )
}
