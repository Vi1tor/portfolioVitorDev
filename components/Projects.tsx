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
    <section id="projects" className="relative py-28">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.span {...reveal(0)} className="kicker mb-4 block">Trabalho</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-stone-900 lg:text-5xl">
              Projetos <span className="text-stone-400">selecionados</span>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.12)} className="max-w-md text-sm leading-7 text-stone-600 lg:text-right">
            Menos cartões, mais leitura. Cada projeto recebeu espaço proporcional ao seu papel no portfólio.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
          {/* Featured */}
          <motion.article
            {...reveal(0.08)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-900/10 bg-white/78 p-6 shadow-[0_2px_20px_rgba(95,70,48,0.04)] hover:shadow-[0_16px_48px_rgba(95,70,48,0.12)] hover:border-stone-900/16 transition-all duration-300 lg:p-8"
          >
            <div className={`h-px w-full bg-gradient-to-r ${featured.accent} opacity-70`} />
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-stone-500">Featured</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-stone-900 lg:text-4xl">
                  {featured.name}
                </h3>
              </div>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-stone-900/10 bg-white/70 p-3 text-stone-600"
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700">
              {featured.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.tech.map(t => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.06 }}
                  className="rounded-full border border-stone-900/10 bg-white/75 px-3 py-1 text-[11px] font-mono text-stone-700 cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-stone-900/10 pt-5 text-sm">
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-stone-700 transition-colors hover:text-stone-900">
                <Github size={13} /> GitHub
              </a>
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-stone-700 transition-colors hover:text-stone-900">
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
                className="group relative rounded-[1.5rem] border border-stone-900/10 bg-white/72 p-5 transition-all duration-300 hover:bg-white/92 hover:shadow-[0_12px_36px_rgba(95,70,48,0.10)] hover:border-stone-900/16 cursor-default overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">0{i + 2}</p>
                    <h3 className="mt-2 text-lg font-medium text-stone-900">{project.name}</h3>
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
                      className="text-sm leading-7 text-stone-700 overflow-hidden"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="rounded-full border border-stone-900/10 bg-white/70 px-2.5 py-1 text-[10px] font-mono text-stone-600">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-stone-900/10 pt-4 text-[11px] font-mono text-stone-500">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="transition-colors hover:text-stone-900">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="transition-colors hover:text-stone-900">
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
