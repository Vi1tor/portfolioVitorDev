import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <div id="experiencia" className="mt-16 scroll-mt-24 border-t border-[color:var(--border)] pt-9">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-[color:var(--ink)]">Uma trajetória em construção contínua.</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--ink-faint)]">Experiência & formação</span>
      </div>
      <ol className="grid gap-7 md:grid-cols-3 md:gap-8">
        {experience.map((item, index) => (
          <li key={item.year} className="relative border-l border-[color:var(--border)] pl-5">
            <span className={`absolute -left-[4px] top-1.5 h-[7px] w-[7px] rounded-full ${index === 0 ? 'bg-[color:var(--accent)]' : 'bg-[color:var(--ink-faint)]'}`} aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--ink-faint)]">{item.period}</p>
            <h4 className="mt-3 text-sm font-semibold leading-6 text-[color:var(--ink)]">{item.title}</h4>
            <p className="mt-1 text-xs text-accent">{item.company}</p>
            <p className="mt-3 text-[13px] leading-6 text-[color:var(--ink-muted)]">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
