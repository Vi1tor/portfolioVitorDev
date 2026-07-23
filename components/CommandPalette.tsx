'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Mail, Copy, Check } from 'lucide-react'
import { personal } from '@/lib/data'

type Action = {
  id: string
  label: string
  hint: string
  icon: typeof ArrowRight
  run: () => void
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const actions: Action[] = useMemo(() => [
    { id: 'home',     label: 'cd ~/inicio',     hint: 'Ir para o início',    icon: ArrowRight, run: () => scrollTo('#home') },
    { id: 'sobre',    label: 'cat sobre.md',    hint: 'Ir para Sobre',       icon: ArrowRight, run: () => scrollTo('#sobre') },
    { id: 'projetos', label: 'ls projetos/',    hint: 'Ir para Projetos',    icon: ArrowRight, run: () => scrollTo('#projetos') },
    { id: 'stack',    label: 'cat stack.json',  hint: 'Ir para Stack',       icon: ArrowRight, run: () => scrollTo('#stack') },
    { id: 'terminal', label: 'open terminal',   hint: 'Terminal interativo', icon: ArrowRight, run: () => scrollTo('#terminal') },
    { id: 'contato',  label: 'exec contato.sh', hint: 'Ir para Contato',     icon: ArrowRight, run: () => scrollTo('#contato') },
    { id: 'github',   label: 'open --github',   hint: 'github.com/Vi1tor',  icon: Github, run: () => window.open(personal.github, '_blank') },
    { id: 'email',    label: 'copy --email',    hint: personal.email,       icon: Mail, run: () => copyEmail() },
  ], [])

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    close()
  }

  function copyEmail() {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => { setCopied(false); close() }, 700)
  }

  function close() {
    setOpen(false)
    setQuery('')
    setSelected(0)
  }

  const filtered = actions.filter(a =>
    (a.label + a.hint).toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      } else if (e.key === 'Escape') {
        close()
      }
    }
    const onOpenEvent = () => setOpen(true)
    window.addEventListener('keydown', onKeydown)
    window.addEventListener('open-command-palette', onOpenEvent)
    return () => {
      window.removeEventListener('keydown', onKeydown)
      window.removeEventListener('open-command-palette', onOpenEvent)
    }
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10)
  }, [open])

  useEffect(() => setSelected(0), [query])

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => Math.max(s - 1, 0))
    } else if (e.key === 'Enter') {
      filtered[selected]?.run()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[14vh]"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={e => e.stopPropagation()}
            className="win w-full max-w-lg"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="font-mono text-sm text-[color:var(--accent)]">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="digite um comando ou seção..."
                className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-white/25"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/35">esc</span>
            </div>

            <div className="max-h-72 overflow-y-auto p-1.5">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center font-mono text-xs text-white/30">nenhum comando encontrado</p>
              )}
              {filtered.map((a, i) => {
                const Icon = copied && a.id === 'email' ? Check : a.icon
                return (
                  <button
                    key={a.id}
                    onClick={a.run}
                    onMouseEnter={() => setSelected(i)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                      selected === i ? 'bg-white/[0.06]' : ''
                    }`}
                  >
                    <Icon size={14} className={selected === i ? 'text-[color:var(--accent)]' : 'text-white/35'} />
                    <span className="font-mono text-[13px] text-white/85">{a.label}</span>
                    <span className="ml-auto font-mono text-[11px] text-white/35">{copied && a.id === 'email' ? 'copiado!' : a.hint}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
