'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail } from 'lucide-react'
import { personal } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-32 pb-20">
      <div className="section-container relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
        {/* Left: main content */}
        <div>
          <motion.div {...reveal(0)} className="mb-8 flex items-center gap-2 font-mono text-[13px] text-white/45">
            <span className="text-[color:var(--accent)]">vitor@portfolio</span>
            <span>:~$</span>
            <span className="text-white/70">whoami</span>
          </motion.div>

          <motion.h1
            {...reveal(0.08)}
            className="font-display font-semibold leading-[0.96] tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.75rem)' }}
          >
            {personal.name}
            <span className="animate-caret ml-1 inline-block h-[0.85em] w-[0.5ch] translate-y-[0.08em] bg-[var(--accent)] align-middle" />
          </motion.h1>

          <motion.p {...reveal(0.16)} className="mt-5 font-mono text-lg text-[color:var(--accent)]">
            &gt; {personal.role}
          </motion.p>

          <motion.p {...reveal(0.22)} className="mt-5 max-w-xl text-base leading-7 text-white/60">
            {personal.tagline}
          </motion.p>

          <motion.div {...reveal(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="btn-primary">
              $ ver --projetos
            </a>
            <a href="#contato" className="btn-secondary">
              $ contato --abrir
            </a>
          </motion.div>

          <motion.div {...reveal(0.38)} className="mt-9 flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/55">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[var(--accent)]" />
              </span>
              disponível para novos projetos
            </span>
            <div className="flex items-center gap-4 text-white/40">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
                <Github size={17} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email" className="transition-colors hover:text-white">
                <Mail size={17} />
              </a>
              <span className="font-mono text-xs">Brasil · Remote</span>
            </div>
          </motion.div>
        </div>

        {/* Right: code panel */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="hidden lg:block"
        >
          <Window path="whoami.ts">
            <div className="p-5 font-mono text-[13px] leading-7">
              <p className="text-white/30">// desenvolvedor full stack</p>
              <p><span className="text-[color:var(--keyword)]">const</span> <span className="text-white">dev</span> = {'{'}</p>
              <p className="pl-4 text-white/70">name: <span className="text-[color:var(--accent)]">'Vitor Oliveira'</span>,</p>
              <p className="pl-4 text-white/70">stack: <span className="text-[color:var(--accent)]">'React · Node · Java'</span>,</p>
              <p className="pl-4 text-white/70">focus: <span className="text-[color:var(--accent)]">'clareza & entrega'</span>,</p>
              <p>{'}'}</p>
              <p className="mt-3 text-white/30">// output</p>
              <div className="mt-2 grid grid-cols-3 gap-3 border-t border-white/8 pt-4">
                {personal.stats.map(s => (
                  <div key={s.label}>
                    <p className="text-lg font-semibold text-white">{s.value}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 font-mono text-white/30 transition-colors hover:text-white/60"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">rolar</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
