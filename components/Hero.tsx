'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Mail } from 'lucide-react'
import { personal } from '@/lib/data'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeInUp, easeOut } from '@/lib/motion'

const reveal = fadeInUp

const [firstName, ...restName] = personal.name.split(' ')
const lastName = restName.join(' ')

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return
    const updateRect = () => { rectRef.current = sectionRef.current?.getBoundingClientRect() ?? null }
    updateRect()
    window.addEventListener('resize', updateRect)
    return () => window.removeEventListener('resize', updateRect)
  }, [reducedMotion])

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !sectionRef.current) return
    const rect = rectRef.current ?? sectionRef.current.getBoundingClientRect()
    sectionRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    sectionRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] overflow-hidden pt-40 pb-24"
    >
      {/* Soft glow that follows the cursor — subtle, disabled for reduced motion */}
      {!reducedMotion && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(480px circle at var(--mx, 60%) var(--my, 20%), var(--accent-dim), transparent 70%)',
          }}
        />
      )}

      <div className="section-container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
        {/* Left: main content */}
        <div>
          <motion.p {...reveal(0)} className="kicker mb-7">
            {personal.role} · Brasil, remoto
          </motion.p>

          <motion.h1
            {...reveal(0.08)}
            className="font-display font-medium leading-[0.98] tracking-[-0.02em] text-[color:var(--ink)] text-balance"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            {firstName}{' '}
            <span className="italic" style={{ color: 'var(--accent)' }}>{lastName}</span>
          </motion.h1>

          <motion.p
            {...reveal(0.18)}
            className="mt-7 max-w-lg text-[17px] leading-8 text-[color:var(--ink-muted)] text-balance"
          >
            {personal.tagline}
          </motion.p>

          <motion.div {...reveal(0.28)} className="mt-10 flex flex-wrap items-center gap-3.5">
            <a href="#projetos" className="btn-primary">
              Ver projetos <ArrowUpRight size={16} />
            </a>
            <a href="#contato" className="btn-secondary">
              Falar comigo
            </a>
          </motion.div>

          <motion.div {...reveal(0.36)} className="mt-11 flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--ink-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full" style={{ background: 'var(--accent)' }} />
              </span>
              Disponível para novos projetos
            </span>
            <div className="flex items-center gap-4 text-[color:var(--ink-faint)]">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-[color:var(--ink)]">
                <Github size={17} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email" className="transition-colors hover:text-[color:var(--ink)]">
                <Mail size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]" style={{ background: 'var(--paper-dim)' }}>
            <Image
              src={personal.avatar}
              alt={personal.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 0px, 38vw"
              priority
            />
          </div>

          <div
            className="absolute -bottom-6 -left-6 rounded-2xl border px-5 py-4 shadow-card"
            style={{ background: 'var(--paper-raised)', borderColor: 'var(--border)' }}
          >
            <p className="font-display text-2xl font-semibold" style={{ color: 'var(--accent)' }}>{personal.stats[0].value}</p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              {personal.stats[0].label}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-[color:var(--ink-faint)] transition-colors hover:text-[color:var(--ink)]"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">rolar</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
