'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack',    href: '#stack' },
  { label: 'Contato',  href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className={`flex h-14 items-center justify-between rounded-2xl border px-5 transition-all duration-400 md:px-6 ${
            scrolled
              ? 'border-white/10 bg-[#05060b]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
              : 'border-white/8 bg-white/[0.03] backdrop-blur-md'
          }`}>

            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="font-display text-[1.05rem] font-semibold tracking-tight text-white">
                Vitor Oliveira
              </span>
              <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/40 md:block">
                · Dev Full Stack
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 md:flex">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-xl transition-colors duration-200 ${
                    isActive(l.href) ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="rounded-xl p-2 text-white/80 transition-colors hover:bg-white/10 md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[4.5rem] left-4 right-4 z-40 md:hidden"
          >
            <div className="glass-strong mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col p-2">
                {links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive(l.href) ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    <span>{l.label}</span>
                    {isActive(l.href) && <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
