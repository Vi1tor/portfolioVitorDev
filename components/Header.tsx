'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react'
import { personal } from '@/lib/data'

const links = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-[rgba(242,239,231,0.88)] backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label="Vitor Oliveira — voltar ao início"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-[18px] italic text-paper transition-transform duration-300 group-hover:-rotate-12"
          >
            v
          </span>
          <span className="text-[15px] font-medium tracking-tight">
            Vitor Oliveira
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-[rgba(251,250,246,0.7)] p-1">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-[14px] text-ink-muted transition-colors hover:bg-paper-sunk hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (abre em nova aba)"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-sunk hover:text-ink"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (abre em nova aba)"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-sunk hover:text-ink"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a href="#contato" className="btn btn-dark ml-1 min-h-10 px-5 text-[14px]">
            Fale comigo
          </a>
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação móvel"
        hidden={!open}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-paper md:!hidden"
      >
        <ul className="container-x pt-4">
          {links.map((link, i) => (
            <li key={link.href} className="border-b border-line">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5"
              >
                <span className="font-serif text-3xl">{link.label}</span>
                <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="container-x flex flex-wrap gap-3 py-8">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a href={`mailto:${personal.email}`} className="btn btn-dark">
            E-mail <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
