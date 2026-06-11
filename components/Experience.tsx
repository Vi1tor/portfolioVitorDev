'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="max-w-xl">
            <motion.span {...reveal(0)} className="kicker mb-4 block">Trajetória</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-stone-900 lg:text-5xl">
              Experiência & <span className="text-stone-400">evolução</span>
            </motion.h2>
            <motion.p {...reveal(0.12)} className="mt-6 leading-8 text-stone-700">
              A linha do tempo abaixo mostra menos “cargos” e mais mudança de maturidade: do aprendizado prático à entrega consistente.
            </motion.p>

            <motion.div {...reveal(0.2)} className="mt-10 rounded-[1.75rem] border border-stone-900/10 bg-white/75 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Narrative</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                A passagem entre etapas foi marcada por mais autonomia, menos ruído visual e melhor leitura de problema.
              </p>
            </motion.div>
          </div>

          <div>
            {experience.map((item, i) => (
              <motion.div
                key={item.year}
                {...reveal(i * 0.08)}
                className="grid gap-4 border-t border-stone-900/10 py-6 lg:grid-cols-[160px_1fr] lg:items-start"
              >
                <div>
                  <p className="font-display text-3xl font-semibold tracking-tight text-stone-900">{item.year}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-stone-500">{item.period}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-stone-500">{item.company}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
