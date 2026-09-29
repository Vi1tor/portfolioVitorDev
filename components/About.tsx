import { ArrowUpRight, Code2, Layers3, Megaphone } from 'lucide-react'
import { personal } from '@/lib/data'
import Experience from '@/components/Experience'

const services = [
  { number: '01', icon: Code2, title: 'Sites & interfaces', text: 'Sites institucionais e aplicações web com React, Next.js e TypeScript.' },
  { number: '02', icon: Layers3, title: 'Sistemas & integrações', text: 'Soluções sob medida, APIs e backend com Node.js e Java.' },
  { number: '03', icon: Megaphone, title: 'Tráfego pago', text: 'Gestão de campanhas no Meta Ads e Google Ads para conectar negócio e público.' },
]

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="section-spacing scroll-mt-24 border-t border-[color:var(--border)]">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="kicker mb-4">// 02 — Sobre mim</p>
            <h2 id="about-heading" className="section-heading">Desenvolvedor full stack.<br /><span className="text-[color:var(--ink-muted)]">Do início à entrega.</span></h2>
            <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-[color:var(--ink-muted)] sm:text-[15px]">
              <p>{personal.bio}</p>
              <p>{personal.bio2}</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-wider text-[color:var(--ink-faint)]">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />Brasil · Trabalho remoto</span>
              <span>Fuso de São Paulo</span>
            </div>
          </div>

          <div className="surface self-start p-6 sm:p-8">
            <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--ink-faint)]">Como posso contribuir</p>
            <ul className="space-y-6">
              {services.map(service => (
                <li key={service.number} className="flex gap-4 border-b border-[color:var(--border)] pb-6 last:border-b-0 last:pb-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border-hi)] bg-[color:var(--paper)] text-accent">
                    <service.icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[color:var(--ink)]">{service.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[color:var(--ink-muted)]">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-accent transition-colors hover:text-[color:var(--ink)]">
              Vamos conversar sobre seu projeto <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Experience />
      </div>
    </section>
  )
}
