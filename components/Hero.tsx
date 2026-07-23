'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Mail } from 'lucide-react'
import { personal } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-32 pb-20">
      {/* Aurora blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -top-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-violet-500/25 blur-[120px]" />
        <div className="animate-aurora-slow absolute top-10 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-cyan-400/18 blur-[130px]" />
        <div className="animate-aurora absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="section-container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
        {/* Left: main content */}
        <div>
          <motion.div {...reveal(0)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Disponível para novos projetos</span>
          </motion.div>

          <motion.span {...reveal(0.06)} className="kicker mb-5 block">{personal.role}</motion.span>

          <motion.h1
            {...reveal(0.12)}
            className="font-display font-semibold leading-[0.96] tracking-[-0.04em] text-white"
            style={{ fontSize: 'clamp(2.6rem, 6.4vw, 5.25rem)' }}
          >
            {personal.name.split(' ')[0]}{' '}
            <span className="gradient-text-vivid animate-gradient-x bg-[length:200%_auto]">{personal.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p {...reveal(0.2)} className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            {personal.tagline}
          </motion.p>

          <motion.div {...reveal(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projetos" className="btn-primary">
              Ver projetos <ArrowRight size={15} />
            </a>
            <a href="#contato" className="btn-secondary">
              Falar comigo
            </a>
          </motion.div>

          <motion.div {...reveal(0.36)} className="mt-12 flex items-center gap-5 text-white/45">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
              <Github size={18} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="transition-colors hover:text-white">
              <Mail size={18} />
            </a>
            <span className="h-4 w-px bg-white/12" />
            <span className="font-mono text-xs tracking-wide">Brasil · Remote</span>
          </motion.div>
        </div>

        {/* Right: floating glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="glass-strong animate-float rounded-[1.75rem] p-6 shadow-card">
            <div className="flex items-center gap-2 border-b border-white/8 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] tracking-wide text-white/35">whoami.ts</span>
            </div>

            <div className="pt-5 font-mono text-[13px] leading-7">
              <p className="text-white/35">// desenvolvedor full stack</p>
              <p><span className="text-violet-400">const</span> <span className="text-cyan-300">dev</span> = {'{'}</p>
              <p className="pl-4 text-white/70">name: <span className="text-emerald-300">'Vitor Oliveira'</span>,</p>
              <p className="pl-4 text-white/70">stack: <span className="text-emerald-300">'React · Node · Java'</span>,</p>
              <p className="pl-4 text-white/70">focus: <span className="text-emerald-300">'clareza & entrega'</span>,</p>
              <p>{'}'}</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/8 pt-5">
              {personal.stats.map(s => (
                <div key={s.label}>
                  <p className="font-display text-xl font-semibold text-white">{s.value}</p>
                  <p className="mt-1 text-[9.5px] uppercase tracking-[0.2em] text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 blur-2xl" />
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/35 transition-colors hover:text-white/70"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Rolar</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
