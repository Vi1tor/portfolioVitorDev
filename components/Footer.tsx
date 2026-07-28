'use client'

import { Github, Mail, Globe } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--border)' }}>
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-lg font-medium text-[color:var(--ink)]">{personal.name}</p>
            <p className="mt-2.5 text-[14px] leading-7 text-[color:var(--ink-faint)]">
              Desenvolvedor full stack com foco em produtos claros, interfaces maduras e entrega consistente.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[13px] font-medium text-[color:var(--ink-muted)]">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--ink)]">
              <Github size={14} /> GitHub
            </a>
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--ink)]">
              <Mail size={14} /> Email
            </a>
            <a href={personal.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--ink)]">
              <Globe size={14} /> Site
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-colors hover:text-[color:var(--ink)]" aria-label="Voltar ao topo">
              Topo
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-[12px] text-[color:var(--ink-faint)] md:flex-row md:items-center md:justify-between" style={{ borderColor: 'var(--border)' }}>
          <p>© {year} {personal.name}</p>
          <p>Feito com Next.js · Framer Motion · TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
