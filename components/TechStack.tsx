'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="max-w-xl">
            <motion.span {...reveal(0)} className="kicker mb-4 block">Tecnologias</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
              Stack <span className="text-white/40">técnica</span>
            </motion.h2>
            <motion.p {...reveal(0.12)} className="mt-6 leading-8 text-white/70">
              Ferramentas que uso com parcimônia. A lista é mais curta que a média porque prefiro domínio real ao acúmulo de rótulos.
            </motion.p>

            <motion.div {...reveal(0.2)} className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">Working rule</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Escolho o menor conjunto que resolve o problema, sustenta manutenção e mantém a interface legível.
              </p>
            </motion.div>
          </div>

          <div className="space-y-1">
            {techStack.map((cat, i) => (
              <motion.div
                key={cat.category}
                {...reveal(i * 0.06)}
                className="grid gap-4 border-t border-white/10 py-5 lg:grid-cols-[180px_1fr] lg:items-start"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg opacity-80">{cat.icon}</span>
                  <h3 className="text-sm font-medium tracking-wide text-white">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="tech-pill">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
