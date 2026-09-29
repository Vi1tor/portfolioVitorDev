import { BookOpen, Cloud, Code2, Database, Megaphone, Server, Wrench, type LucideIcon } from 'lucide-react'
import { techStack } from '@/lib/data'

const icons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Database,
  'Cloud & Deploy': Cloud,
  Ferramentas: Wrench,
  'Tráfego Pago': Megaphone,
  Aprendendo: BookOpen,
}

const labels: Record<string, string> = {
  Frontend: 'Interfaces & experiência',
  Backend: 'Lógica & integrações',
  Database: 'Dados & persistência',
  'Cloud & Deploy': 'Infraestrutura & publicação',
  Ferramentas: 'Processo & colaboração',
  'Tráfego Pago': 'Aquisição & análise',
  Aprendendo: 'Próximos passos',
}

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="section-spacing scroll-mt-24 border-t border-[color:var(--border)]">
      <div className="section-container">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="kicker mb-4">// 03 — Tecnologias</p>
            <h2 id="stack-heading" className="section-heading">Tecnologias & ferramentas.<br /><span className="text-[color:var(--ink-muted)]">A base de cada entrega.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[color:var(--ink-muted)]">
            Do frontend ao deploy, uma stack escolhida de acordo com o que cada projeto precisa.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(category => {
            const Icon = icons[category.category] ?? Code2
            const isFrontend = category.category === 'Frontend'
            const learning = category.category === 'Aprendendo'

            return (
              <div
                key={category.category}
                className={`surface p-6 ${isFrontend ? 'sm:col-span-2' : ''}`}
                style={isFrontend ? { background: 'linear-gradient(125deg, #172018, var(--paper-raised))', borderColor: '#35472b' } : undefined}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${isFrontend ? 'border-[#435833] bg-[color:var(--accent-dim)] text-accent' : 'border-[color:var(--border)] text-[color:var(--ink-muted)]'}`}>
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  {isFrontend && <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent">Interface → Experiência</span>}
                  {learning && <span className="rounded border border-[color:var(--border)] px-2 py-1 font-mono text-[9px] text-[color:var(--ink-faint)]">Em estudo</span>}
                </div>
                <h3 className="mt-5 text-base font-semibold text-[color:var(--ink)]">{category.category === 'Database' ? 'Banco de dados' : category.category}</h3>
                <p className="mt-1 text-[11px] text-[color:var(--ink-faint)]">{labels[category.category]}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologias: ${category.category}`}>
                  {category.items.map(item => <li key={item} className="tag-pill">{item}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
