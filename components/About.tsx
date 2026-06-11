'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { personal } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
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
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setDisplay(suffix.replace(/^(\+|%)/, '') ? `${Math.round(v)}${suffix}` : `${Math.round(v)}${suffix}`),
    })
    return ctrl.stop
  }, [inView, numeric, suffix, motionVal])

  return (
    <div ref={ref} className="space-y-2">
      <p className="font-display text-3xl font-semibold tracking-tight text-stone-900">
        {inView ? display : `0${suffix}`}
      </p>
      <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <motion.div {...reveal(0)} className="lg:pt-8">
            <div className="group relative aspect-[4/5] max-h-[640px] overflow-hidden rounded-[2rem] border border-stone-900/10 bg-white/75">
              <Image
                src={personal.avatar}
                alt="Vitor Oliveira"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f8f3ea]/90 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-stone-900/8" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-stone-500">
              <span>Brasil</span>
              <span>Remote first</span>
              <span>Interface aware</span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 lg:pt-4">
            <motion.div {...reveal(0.08)}>
              <span className="kicker mb-4 block">Sobre mim</span>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-stone-900 lg:text-5xl">
                Código que organiza.
                <br />Produto que respira.
              </h2>
            </motion.div>

            <motion.div {...reveal(0.16)} className="max-w-2xl space-y-5 leading-8 text-stone-700">
              <p>{personal.bio}</p>
              <p className="border-l border-stone-900/10 pl-5 text-stone-600">{personal.bio2}</p>
            </motion.div>

            <motion.div {...reveal(0.24)} className="grid gap-4 border-t border-stone-900/10 pt-6 sm:grid-cols-3">
              {personal.stats.map((s, i) => (
                <AnimatedStat key={i} value={s.value} label={s.label} />
              ))}
            </motion.div>

            <motion.div {...reveal(0.3)} className="grid gap-4 border-t border-stone-900/10 pt-6 lg:grid-cols-[220px_1fr]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">What I value</p>
              <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
                {['Clarity over decoration.', 'Speed without visual noise.', 'Interfaces that read well in real use.'].map(v => (
                  <motion.div
                    key={v}
                    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(95,70,48,0.10)' }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-stone-900/10 bg-white/70 p-4 cursor-default"
                  >
                    {v}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.38)}>
              <Link href="/stack" className="btn-secondary w-fit">
                Ver stack completa <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
