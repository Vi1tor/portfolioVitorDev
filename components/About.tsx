import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { personal, timeline } from '@/lib/data'

const facts = [
  { label: 'Formação', value: 'Análise e Desenvolvimento de Sistemas' },
  { label: 'Base', value: personal.location },
  { label: 'Foco', value: 'Hotelaria, turismo e serviços' },
]

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-line bg-paper-raised py-24 lg:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="relative w-full max-w-[340px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-paper-sunk">
                <Image
                  src={personal.avatar}
                  alt={`Foto de ${personal.name}`}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-5 -right-4 rotate-[-6deg] rounded-full bg-accent px-4 py-2 font-serif text-xl italic text-paper shadow-lg sm:-right-6">
                oi, eu sou o Vitor
              </span>
            </div>
            <dl className="mt-12 max-w-[340px] divide-y divide-line border-y border-line">
              {facts.map(fact => (
                <div key={fact.label} className="flex justify-between gap-6 py-3.5 text-[14px]">
                  <dt className="text-ink-muted">{fact.label}</dt>
                  <dd className="text-right font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="lg:col-span-8 lg:pl-6">
          <Reveal>
            <p className="eyebrow">Sobre</p>
            <h2 id="sobre-title" className="display mt-5 text-balance text-[clamp(2.4rem,5vw,4.4rem)] leading-[1]">
              Entendo o problema porque <em>já estive do outro lado.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-5 text-pretty text-[17px] leading-[1.75] text-ink-muted">
            <p>
              Passei pela recepção de uma pousada antes de escrever código. Respondia as mesmas perguntas
              todo dia: senha do Wi-Fi, horário do café, onde jantar. Quando comecei a programar, foi
              natural resolver isso primeiro.
            </p>
            <p>
              Hoje trabalho com <span className="text-ink">React, Next.js e TypeScript</span> no front e{' '}
              <span className="text-ink">Node.js e Java</span> no back. Gosto de entregar coisa que alguém
              usa na segunda-feira de manhã: simples, rápida no celular e fácil de manter.
            </p>
          </Reveal>

          <ol className="mt-16 border-t border-line">
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                className="grid gap-2 border-b border-line py-7 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="font-mono text-[12px] uppercase tracking-wider text-ink-muted sm:pt-1.5">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-7 text-ink-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
