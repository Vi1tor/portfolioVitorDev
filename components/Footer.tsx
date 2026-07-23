'use client'

import { Github, Mail, Globe } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-lg font-semibold text-white"><span className="text-[color:var(--accent)]">~/</span>vitor-oliveira</p>
            <p className="mt-3 text-sm leading-7 text-white/45">
              Desenvolvedor full stack com foco em produtos claros, interfaces maduras e entrega consistente.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-sm text-white/40">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">github</a>
            <a href={`mailto:${personal.email}`} className="transition-colors hover:text-white">email</a>
            <a href={personal.website} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">site</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-colors hover:text-white" aria-label="Voltar ao topo">
              topo
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {year} Vitor Oliveira</p>
          <p>built with Next.js · Framer Motion · TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
