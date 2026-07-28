'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'

const links = [
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Projetos',  href: '#projetos' },
  { label: 'Stack',     href: '#stack' },
  { label: 'Contato',   href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent))
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'sobre', 'projetos', 'stack', 'contato']
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const isActive = (href: string) => active === href

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'border-[var(--border)]' : 'border-transparent'
        }`}
        style={{ backgroundColor: scrolled ? 'var(--paper)' : 'transparent' }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* Mark */}
            <Link href="#home" className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-display font-semibold italic"
                style={{ background: 'var(--ink)', color: 'var(--paper)' }}
              >
                V
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight text-[color:var(--ink)]">
                Vitor Oliveira
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-[13.5px] font-medium transition-colors duration-150 ${
                    isActive(l.href) ? 'text-[color:var(--ink)]' : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'
                  }`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#contato" className="hidden sm:inline-flex btn-secondary !px-4 !py-2 !text-[13px]">
                Falar comigo
              </a>
              <button
                onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
                className="hidden items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] transition-colors sm:flex"
                style={{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }}
                aria-label="Abrir busca rápida"
              >
                {isMac ? <Command size={11} /> : <span>Ctrl</span>}
                <span>K</span>
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="rounded-full p-2 text-[color:var(--ink)] transition-colors hover:bg-[var(--paper-dim)] md:hidden"
                aria-label="Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[72px] left-0 right-0 z-40 border-b md:hidden"
            style={{ borderColor: 'var(--border)', background: 'var(--paper)' }}
          >
            <div className="flex flex-col p-3">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                    isActive(l.href) ? 'bg-[var(--paper-dim)] text-[color:var(--ink)]' : 'text-[color:var(--ink-muted)] hover:bg-[var(--paper-dim)]'
                  }`}
                >
                  <span>{l.label}</span>
                  {isActive(l.href) && <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent)' }} />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
