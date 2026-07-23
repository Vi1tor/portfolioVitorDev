'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { personal } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})


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
    <div ref={ref} className="space-y-1.5">
      <p className="font-mono text-2xl font-semibold text-[color:var(--accent)]">
        {inView ? display : `0${suffix}`}
      </p>
      <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre" className="relative py-24 scroll-mt-20">
      <div className="section-container">
        <motion.span {...reveal(0)} className="kicker mb-5 block">sobre</motion.span>

        <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <motion.div {...reveal(0.06)}>
            <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-xl border border-white/10">
              <Image
                src={personal.avatar}
                alt="Vitor Oliveira"
                fill
                className="object-cover object-top grayscale-[15%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/35">
              <span>Brasil</span>
              <span>Remote first</span>
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)}>
            <Window path="sobre.md">
              <div className="p-6 lg:p-7">
                <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white lg:text-4xl">
                  Código que organiza.<br />Produto que respira.
                </h2>

                <div className="mt-6 max-w-2xl space-y-4 font-mono text-sm leading-7 text-white/60">
                  <p><span className="text-white/25">01 </span>{personal.bio}</p>
                  <p><span className="text-white/25">02 </span>{personal.bio2}</p>
                </div>

                <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {personal.stats.map((s, i) => (
                    <AnimatedStat key={i} value={s.value} label={s.label} />
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/35"># what-i-value</p>
                  <div className="grid gap-2.5 text-sm text-white/65 sm:grid-cols-3">
                    {['Clareza acima de decoração.', 'Velocidade sem ruído visual.', 'Interfaces que funcionam no uso real.'].map(v => (
                      <div key={v} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5">
                        {v}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="#stack" className="btn-secondary mt-7 w-fit">
                  ver stack completa <ArrowRight size={14} />
                </Link>
              </div>
            </Window>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
