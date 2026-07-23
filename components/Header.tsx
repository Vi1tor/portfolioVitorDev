'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'

const links = [
  { label: 'sobre.md',    href: '#sobre' },
  { label: 'projetos/',   href: '#projetos' },
  { label: 'stack.json',  href: '#stack' },
  { label: 'contato.sh',  href: '#contato' },
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
          scrolled ? 'border-white/10 bg-[var(--bg)]/95' : 'border-white/[0.06] bg-[var(--bg)]/70'
        }`}
        style={{ backdropFilter: 'none' }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 font-mono text-sm">
              <span className="text-[color:var(--accent)]">~/</span>
              <span className="font-semibold text-white">vitor-oliveira</span>
            </Link>

            {/* Desktop nav — styled as open editor tabs */}
            <nav className="hidden items-stretch md:flex">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative flex items-center gap-2 border-x border-transparent px-4 py-2 font-mono text-[12.5px] transition-colors duration-150 ${
                    isActive(l.href)
                      ? 'border-white/10 bg-white/[0.04] text-white'
                      : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {isActive(l.href) && (
                    <motion.span layoutId="nav-active" className="absolute inset-x-0 -top-px h-px bg-[var(--accent)]" />
                  )}
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
                className="hidden items-center gap-2 rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-white/45 transition-colors hover:border-white/20 hover:text-white/80 sm:flex"
                aria-label="Abrir busca rápida"
              >
                {isMac ? <Command size={12} /> : <span>Ctrl</span>}
                <span>K</span>
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 md:hidden"
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
            className="fixed top-14 left-0 right-0 z-40 border-b border-white/10 bg-[var(--bg)] md:hidden"
          >
            <div className="flex flex-col p-2">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-md px-4 py-3 font-mono text-sm transition-colors ${
                    isActive(l.href) ? 'bg-white/[0.06] text-white' : 'text-white/60 hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{l.label}</span>
                  {isActive(l.href) && <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
