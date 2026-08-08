'use client'

import { motion } from 'framer-motion'
import { Cpu, Server, Database, Cloud, Wrench, Megaphone, BookOpen, type LucideIcon } from 'lucide-react'
import { techStack } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
})

const icons: Record<string, LucideIcon> = {
  'Frontend': Cpu,
  'Backend': Server,
  'Database': Database,
  'Cloud & Deploy': Cloud,
  'Ferramentas': Wrench,
  'Tráfego Pago': Megaphone,
  'Aprendendo': BookOpen,
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2 {...reveal(0)} className="kicker block">Stack</motion.h2>
          <motion.p {...reveal(0.06)} className="max-w-sm text-[13px] text-[color:var(--ink-faint)] sm:text-right">
            O menor conjunto que resolve, sustenta manutenção e mantém a interface legível.
          </motion.p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: 'var(--border)', background: 'var(--border)' }}>
          {techStack.map((cat, i) => {
            const Icon = icons[cat.category] ?? Cpu
            return (
              <motion.div key={cat.category} {...reveal(0.04 * i)} className="p-7" style={{ background: 'var(--paper-raised)' }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'var(--accent-dim)' }}>
                    <Icon size={16} style={{ color: 'var(--accent)' }} />
                  </span>
                  <h3 className="text-[15px] font-semibold text-[color:var(--ink)]">{cat.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="tag-pill">{item}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
