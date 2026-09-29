'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); buttonRef.current?.focus() }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]">
      <div className="section-container flex h-[76px] items-center justify-between gap-5">
        <a href="#home" onClick={() => setMenuOpen(false)} aria-label="Vitor Oliveira — início" className="flex items-center gap-3">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#546a35] bg-[var(--accent-dim)] font-mono text-xl font-bold text-accent">v<span className="text-sm">/</span></span>
          <span className="text-[17px] font-semibold tracking-[-0.04em]">vitor<span className="text-accent">.dev</span></span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map(link => <a key={link.href} href={link.href} className="py-3 text-xs text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]">{link.label}</a>)}
        </nav>
        <a href="#contato" className="hidden min-h-10 items-center gap-3 rounded-md border border-[var(--border-hi)] px-4 text-[11px] font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:inline-flex">Vamos construir algo <ArrowUpRight size={14} aria-hidden="true" /></a>
        <button ref={buttonRef} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border)] md:hidden">
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação móvel" hidden={!menuOpen} className="border-t border-[var(--border)] bg-[var(--paper-raised)] px-6 py-3 md:!hidden">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[var(--border)] text-sm last:border-b-0 hover:text-[var(--accent)]">{link.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}
      </nav>
    </header>
  )
}
