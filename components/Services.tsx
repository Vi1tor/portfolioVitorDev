import Reveal from '@/components/Reveal'
import { services, techStack } from '@/lib/data'

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="border-t border-line py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-title" className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] leading-[1]">
            Como posso <em>ajudar</em>
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 0.06}
              className="group flex min-h-[260px] flex-col bg-paper p-8 transition-colors duration-300 hover:bg-paper-raised lg:p-10"
            >
              <span className="font-mono text-[12px] text-accent">0{i + 1}</span>
              <h3 className="display mt-auto pt-12 text-[1.6rem] leading-[1.15] sm:text-[1.85rem]">{service.title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-7 text-ink-muted">{service.text}</p>
            </Reveal>
          ))}
        </ul>

        <div id="stack" className="mt-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Ferramentas</p>
            <h3 className="display mt-4 text-3xl sm:text-4xl">Stack do dia a dia</h3>
            <p className="mt-4 max-w-xs text-[15px] leading-7 text-ink-muted">
              Escolho a ferramenta pelo que o projeto pede, não pelo que está na moda.
            </p>
          </Reveal>
          <dl className="border-t border-line lg:col-span-8">
            {techStack.map((row, i) => (
              <Reveal
                key={row.group}
                delay={i * 0.05}
                className="grid gap-3 border-b border-line py-5 sm:grid-cols-[140px_1fr] sm:items-baseline"
              >
                <dt className="font-mono text-[12px] uppercase tracking-wider text-ink-muted">{row.group}</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-1 text-[17px] leading-8">
                  {row.items.map((item, j) => (
                    <span key={item}>
                      {item}
                      {j < row.items.length - 1 && <span className="pl-2 text-line-strong" aria-hidden="true">/</span>}
                    </span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
