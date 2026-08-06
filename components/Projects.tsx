'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section id="projetos" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2 {...reveal(0)} className="kicker block">Trabalho selecionado</motion.h2>
          <motion.p {...reveal(0.06)} className="text-[13px] text-[color:var(--ink-faint)]">
            {projects.length} projetos publicados — a maioria para hotelaria e turismo
          </motion.p>
        </div>

        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          {projects.map((project, i) => {
            const isOpen = activeIdx === i
            return (
              <motion.div key={project.name} {...reveal(0.04 * i)} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 style={{ margin: 0, fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                <button
                  onClick={() => setActiveIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-5 py-7 text-left transition-colors sm:gap-8"
                >
                  <span
                    className="font-display text-2xl italic transition-colors sm:text-3xl"
                    style={{ color: isOpen ? 'var(--accent)' : 'var(--ink-faint)' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block truncate text-[19px] font-semibold text-[color:var(--ink)] transition-transform duration-300 sm:text-[22px] group-hover:translate-x-1">
                      {project.name}
                    </span>
                    <span className="mt-1 hidden text-[13px] text-[color:var(--ink-faint)] md:block">
                      {project.tech.slice(0, 3).join(' · ')}
                    </span>
                  </span>
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? 'var(--accent)' : 'var(--border-hi)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    <ArrowUpRight size={15} style={{ color: isOpen ? 'var(--accent)' : 'var(--ink-faint)' }} />
                  </span>
                </button>
                </h3>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-0 sm:grid-cols-[64px_1fr] sm:pl-0 lg:grid-cols-[84px_1fr]">
                        <div className="hidden sm:block" />
                        <div>
                          <p className="max-w-xl text-[15px] leading-7 text-[color:var(--ink-muted)]">{project.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map(t => (
                              <span key={t} className="tag-pill">{t}</span>
                            ))}
                          </div>
                          <div className="mt-5 flex items-center gap-5 text-[13px] font-medium">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[color:var(--ink)] transition-opacity hover:opacity-60"
                            >
                              <Github size={14} /> Código
                            </a>
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                                style={{ color: 'var(--accent)' }}
                              >
                                Ver ao vivo <ArrowUpRight size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
