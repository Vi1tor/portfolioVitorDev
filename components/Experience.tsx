'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Experience() {
  return (
    <section id="experiencia" className="relative pb-24">
      <div className="section-container">
        <motion.span {...reveal(0)} className="kicker mb-5 block">trajetória</motion.span>

        <Window path="experiencia.log" meta={`${experience.length} commits`}>
          <div className="divide-y divide-white/8 font-mono text-sm">
            {experience.map((item, i) => (
              <motion.div key={item.year} {...reveal(0.05 + i * 0.06)} className="grid gap-2 p-5 lg:grid-cols-[150px_1fr] lg:gap-6 lg:p-6">
                <div>
                  <p className="text-[color:var(--accent)]">{item.year}</p>
                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.18em] text-white/35">{item.period}</p>
                </div>
                <div>
                  <p className="text-white">{item.title}</p>
                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.18em] text-white/35">{item.company}</p>
                  <p className="mt-3 max-w-2xl text-[13px] leading-6 text-white/55">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Window>
      </div>
    </section>
  )
}
