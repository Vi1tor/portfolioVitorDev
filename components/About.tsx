'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { personal } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
})

const values = [
  { n: '01', title: 'Clareza acima de decoração', text: 'Cada elemento na tela precisa justificar seu lugar. O resto é ruído.' },
  { n: '02', title: 'Velocidade sem atalho', text: 'Entregar rápido é bom. Entregar rápido e estável é o que importa.' },
  { n: '03', title: 'Interface que funciona no uso real', text: 'Testado com gente de verdade usando, não só bonito em protótipo.' },
]

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  const numericMatch = value.match(/(\d+)/)
  const numeric = numericMatch ? parseInt(numericMatch[1]) : 0
  const suffix = value.replace(/\d+/, '')

  useEffect(() => {
    if (!inView || numeric === 0) return
    const ctrl = animate(motionVal, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setDisplay(`${Math.round(v)}${suffix}`),
    })
    return ctrl.stop
  }, [inView, numeric, suffix, motionVal])

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-medium" style={{ color: 'var(--ink)' }}>
        {inView ? display : `0${suffix}`}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <motion.h2 {...reveal(0)} className="kicker mb-8 block">Sobre</motion.h2>

        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.blockquote {...reveal(0.06)} className="font-display text-3xl font-medium leading-[1.28] tracking-[-0.01em] text-[color:var(--ink)] text-balance sm:text-4xl">
            Código que organiza, produto que respira. <span className="italic" style={{ color: 'var(--accent)' }}>Reduzir ruído</span> e deixar a experiência mais clara é sempre o ponto de partida.
          </motion.blockquote>

          <motion.div {...reveal(0.12)} className="grid grid-cols-3 gap-6 content-start lg:pt-2">
            {personal.stats.map((s, i) => (
              <AnimatedStat key={i} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div {...reveal(0.1)} className="space-y-5 max-w-2xl text-[16px] leading-8 text-[color:var(--ink-muted)]">
            <p>{personal.bio}</p>
            <p>{personal.bio2}</p>
            <p>{personal.bio3}</p>
          </motion.div>

          <motion.div {...reveal(0.16)}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)] mb-4">Localização</p>
            <p className="text-[15px] text-[color:var(--ink)]">Brasil</p>
            <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">Remoto, fuso America/São_Paulo</p>
          </motion.div>
        </div>

        <div className="mt-20 divider" />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {values.map((v, i) => (
            <motion.div key={v.n} {...reveal(0.05 * i)}>
              <p className="font-display text-2xl italic" style={{ color: 'var(--accent)' }}>{v.n}</p>
              <h3 className="mt-3 text-[16px] font-semibold text-[color:var(--ink)]">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-[color:var(--ink-muted)]">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
