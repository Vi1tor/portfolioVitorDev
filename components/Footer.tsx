import { ArrowUpRight } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{personal.name}<span className="text-accent">.</span></p>
          <p className="mt-2 text-[11px] text-[var(--ink-faint)]">© {new Date().getFullYear()} · Desenvolvedor Full Stack</p>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[var(--ink-faint)]">Pensado com intenção. Construído com código.</p>
        <a href="#home" className="inline-flex min-h-11 items-center gap-2 text-[11px] text-[var(--ink-muted)] hover:text-[var(--accent)]">Voltar ao topo <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
