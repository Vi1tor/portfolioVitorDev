'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
})

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 scroll-mt-20">
      <div className="section-container">
        <motion.span {...reveal(0)} className="kicker mb-5 block">tecnologias</motion.span>

        <Window path="stack.json">
          <div className="p-6 font-mono text-sm lg:p-7">
            <p className="text-white/50">{'{'}</p>
            <p className="pl-4 text-white/40">
              <span className="text-[color:var(--keyword)]">"princípio"</span>
              <span className="text-white/50">: </span>
              <span className="text-[color:var(--accent)]">"o menor conjunto que resolve, sustenta manutenção e mantém a interface legível"</span>
              <span className="text-white/50">,</span>
            </p>

            {techStack.map((cat, i) => (
              <motion.div key={cat.category} {...reveal(0.04 * i)} className="pl-4 py-3">
                <p className="mb-2.5">
                  <span className="text-[color:var(--keyword)]">"{cat.category.toLowerCase()}"</span>
                  <span className="text-white/50">: [</span>
                </p>
                <div className="flex flex-wrap gap-2 pl-4">
                  {cat.items.map(item => (
                    <span key={item} className="tech-pill">{item}</span>
                  ))}
                </div>
                <p className="mt-2.5 text-white/50">],</p>
              </motion.div>
            ))}

            <p className="text-white/50">{'}'}</p>
          </div>
        </Window>
      </div>
    </section>
  )
}
