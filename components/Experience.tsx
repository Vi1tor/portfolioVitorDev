'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { reveal as revealBase } from '@/lib/motion'

const reveal = (delay = 0) => revealBase(delay, { y: 20, duration: 0.6 })

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-4 pb-28">
      <div className="section-container">
        <motion.h2 {...reveal(0)} className="kicker mb-10 block">Trajetória</motion.h2>

        <div>
          {experience.map((item, i) => (
            <motion.div
              key={item.year}
              {...reveal(0.06 * i)}
              className="group grid gap-3 border-t py-8 first:border-t-0 sm:grid-cols-[140px_1fr] sm:gap-8 lg:grid-cols-[180px_1fr]"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <p className="font-display text-3xl font-medium text-[color:var(--ink)]">{item.year}</p>
                <p className="mt-1.5 text-[12px] text-[color:var(--ink-faint)]">{item.period}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[18px] font-semibold text-[color:var(--ink)]">{item.title}</h3>
                  <span className="text-[13px] text-[color:var(--ink-faint)]">{item.company}</span>
                </div>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[color:var(--ink-muted)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
