'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre',    href: '/sobre' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Stack',    href: '/stack' },
  { label: 'Contato',  href: '/contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (href: string) => pathname === href

  /* On home: transparent over video. After scroll or on inner pages: solid white */
  const solid = scrolled || !isHome

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
            solid
              ? 'border-stone-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
              : 'border-white/15 bg-black/20 shadow-[0_4px_24px_rgba(0,0,0,0.24)] backdrop-blur-md'
          }`}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <span className={`font-display text-[1.05rem] font-semibold tracking-tight transition-colors ${solid ? 'text-stone-900' : 'text-white'}`}>
                Vitor Oliveira
              </span>
              <span className={`hidden text-[9px] uppercase tracking-[0.3em] md:block transition-colors ${solid ? 'text-stone-400' : 'text-white/50'}`}>
                · Dev Full Stack
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 md:flex">
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-xl transition-colors duration-200 ${
                    isActive(l.href)
                      ? solid ? 'text-stone-900' : 'text-white'
                      : solid ? 'text-stone-500 hover:text-stone-800' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-0 rounded-xl ${solid ? 'bg-stone-100' : 'bg-white/14'}`}
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`rounded-xl p-2 transition-colors md:hidden ${solid ? 'text-stone-600 hover:bg-stone-100' : 'text-white/80 hover:bg-white/12'}`}
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
            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="flex flex-col p-2">
                {links.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive(l.href)
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{l.label}</span>
                    {isActive(l.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
