'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Projects() {
  const [featured, ...rest] = projects
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="projetos" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.span {...reveal(0)} className="kicker mb-4 block">Trabalho</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
              Projetos <span className="text-white/40">selecionados</span>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.12)} className="max-w-md text-sm leading-7 text-white/60 lg:text-right">
            Menos cartões, mais leitura. Cada projeto recebeu espaço proporcional ao seu papel no portfólio.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
          {/* Featured */}
          <motion.article
            {...reveal(0.08)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-card transition-all duration-300 hover:border-white/16 hover:shadow-card-hover lg:p-8"
          >
            <div className={`h-px w-full bg-gradient-to-r ${featured.accent} opacity-80`} />
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">Featured</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white lg:text-4xl">
                  {featured.name}
                </h3>
              </div>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/60"
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
              {featured.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.tech.map(t => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.06 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-white/65 cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5 text-sm">
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white">
                <Github size={13} /> GitHub
              </a>
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white">
                  <ExternalLink size={13} /> Live
                </a>
              )}
            </div>
          </motion.article>

          {/* Rest */}
          <div className="space-y-4">
            {rest.map((project, i) => (
              <motion.article
                key={project.name}
                {...reveal(0.1 + i * 0.06)}
                layout
                onHoverStart={() => setActiveIdx(i)}
                onHoverEnd={() => setActiveIdx(null)}
                className="group relative rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/16 hover:bg-white/[0.05] hover:shadow-card-hover cursor-default overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">0{i + 2}</p>
                    <h3 className="mt-2 text-lg font-medium text-white">{project.name}</h3>
                  </div>
                  <motion.span
                    animate={{ scale: activeIdx === i ? 1.4 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${project.accent}`}
                  />
                </div>

                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm leading-7 text-white/65 overflow-hidden"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono text-white/55">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-[11px] font-mono text-white/45">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="transition-colors hover:text-white">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="transition-colors hover:text-white">
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
