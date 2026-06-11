'use client'

import { Github, Mail, Globe, ArrowUp } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-stone-900/10 py-10">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-lg font-semibold tracking-[-0.03em] text-stone-900">Vitor Oliveira</p>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              Desenvolvedor full stack com foco em produtos claros, interfaces maduras e entrega consistente.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-stone-400">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-900">GitHub</a>
            <a href={`mailto:${personal.email}`} className="transition-colors hover:text-stone-900">Email</a>
            <a href={personal.website} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-900">Website</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-colors hover:text-stone-900" aria-label="Voltar ao topo">
              Topo
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-stone-900/10 pt-5 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Vitor Oliveira</p>
          <p>Built with Next.js, Framer Motion and TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
