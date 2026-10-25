'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import PhoneFrame from '@/components/PhoneFrame'
import { clients, guides, personal, stats } from '@/lib/data'
import { easeOut, fadeInUp } from '@/lib/motion'

const fan = [
  { guide: guides[1], className: 'left-0 top-[9%] -rotate-[9deg] z-10', delay: 0.35 },
  { guide: guides[0], className: 'left-1/2 top-0 -translate-x-1/2 z-20', delay: 0.2 },
  { guide: guides[3], className: 'right-0 top-[9%] rotate-[9deg] z-10', delay: 0.5 },
]

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[72px]">
      <div className="container-x">
        <div className="grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24 lg:pt-20">
          <div>
            <motion.div {...fadeInUp(0)} className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <Image
                src={personal.avatar}
                alt=""
                width={44}
                height={44}
                priority
                className="h-11 w-11 rounded-full border-2 border-paper-raised object-cover shadow-sm"
              />
              <div className="text-[14px] leading-tight">
                <p className="font-medium">{personal.name}</p>
                <p className="text-ink-muted">{personal.role}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3 py-1.5 text-[13px] text-ink-muted">
                <span className="status-dot" aria-hidden="true" />
                Disponível para projetos
              </span>
            </motion.div>

            <motion.h1
              {...fadeInUp(0.08)}
              id="hero-title"
              className="display mt-9 text-[clamp(2.65rem,6.6vw,5.9rem)] leading-[0.98]"
            >
              Do balcão
              <br />
              da pousada
              <br />
              ao <em>deploy</em>.
            </motion.h1>

            <motion.p
              {...fadeInUp(0.16)}
              className="mt-8 max-w-[34rem] text-pretty text-[17px] leading-[1.65] text-ink-muted sm:text-lg"
            >
              Sou desenvolvedor full stack. Antes de programar, trabalhei no atendimento de uma pousada.
              Hoje construo os <span className="text-ink">guias digitais, sites e sistemas</span> que eu
              queria ter tido do outro lado do balcão.
            </motion.p>

            <motion.div {...fadeInUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projetos" className="btn btn-dark">
                Ver projetos <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href="#contato" className="btn btn-ghost">
                Vamos conversar <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Vitrine: três guias do hóspede reais */}
          <div className="relative mx-auto aspect-[1/0.92] w-[88%] max-w-[460px] sm:w-full lg:max-w-none">
            {fan.map(({ guide, className, delay }) => (
              <div key={guide.name} className={`absolute w-[42%] hover:z-30 ${className}`}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: easeOut, delay }}
                >
                  <a
                    href={guide.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Guia do hóspede ${guide.name} (abre em nova aba)`}
                    className="block rounded-[2.1rem] transition-transform duration-500 hover:-translate-y-3"
                  >
                    {guide.image && (
                      <PhoneFrame
                        src={guide.image}
                        alt=""
                        sizes="(min-width: 1024px) 220px, 42vw"
                        priority
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            ))}
            <div className="absolute -bottom-2 left-0 right-0 z-30 flex justify-center">
              <motion.p
                {...fadeInUp(0.8)}
                className="whitespace-nowrap rounded-full border border-line bg-paper-raised px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted shadow-sm"
              >
                Guias reais · em produção
              </motion.p>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeInUp(0.3 + i * 0.08)}
              className={`flex flex-row-reverse items-baseline justify-end gap-4 py-6 sm:flex-col-reverse sm:items-start sm:gap-2 sm:py-8 ${i > 0 ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-8' : ''}`}
            >
              <dt className="text-[14px] text-ink-muted">{stat.label}</dt>
              <dd className="display m-0 text-[2.75rem] leading-none sm:text-[3.4rem]">{stat.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <div className="marquee overflow-hidden border-y border-line bg-paper-raised py-5" aria-label="Clientes com projeto entregue">
        <ul className="marquee-track flex w-max items-center">
          {[...clients, ...clients].map((client, i) => (
            <li
              key={`${client}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex items-center whitespace-nowrap font-serif text-xl italic text-ink-muted sm:text-2xl"
            >
              <span className="px-7">{client}</span>
              <span className="text-accent not-italic" aria-hidden="true">✳</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
