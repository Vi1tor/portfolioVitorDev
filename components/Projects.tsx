'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section id="projetos" className="relative py-24 scroll-mt-20">
      <div className="section-container">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <motion.span {...reveal(0)} className="kicker block">trabalho</motion.span>
          <motion.p {...reveal(0.06)} className="max-w-md font-mono text-xs text-white/40 lg:text-right">
            $ ls -la projetos/ · {projects.length} diretórios
          </motion.p>
        </div>

        <Window path="projetos/" meta={`${projects.length} itens`}>
          <div className="divide-y divide-white/8">
            {projects.map((project, i) => {
              const isOpen = activeIdx === i
              const isLast = i === projects.length - 1
              return (
                <motion.div key={project.name} {...reveal(0.04 * i)}>
                  <button
                    onClick={() => setActiveIdx(isOpen ? null : i)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-white/[0.02] lg:px-6"
                  >
                    <span className="font-mono text-white/25">{isLast ? '└──' : '├──'}</span>
                    <span className="flex h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: project.live ? 'var(--accent)' : 'rgba(255,255,255,0.2)' }} />
                    <span className="font-mono text-[15px] text-white">{project.name}/</span>
                    <span className="hidden font-mono text-[11px] text-white/30 md:inline">{project.tech.slice(0, 3).join(' · ')}</span>
                    <span className="ml-auto font-mono text-[11px] text-white/25">{isOpen ? '−' : '+'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-11 lg:px-6 lg:pl-14">
                          <p className="max-w-2xl text-sm leading-7 text-white/60">{project.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map(t => (
                              <span key={t} className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-white/55">{t}</span>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center gap-4 font-mono text-[12px] text-white/50">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                              <Github size={13} /> github
                            </a>
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                                <ExternalLink size={13} /> live
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </Window>
      </div>
    </section>
  )
}
