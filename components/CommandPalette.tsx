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
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const actions: Action[] = useMemo(() => [
    { id: 'home',     label: 'Início',          hint: 'Voltar ao topo',      icon: ArrowRight, run: () => scrollTo('#home') },
    { id: 'sobre',    label: 'Sobre',           hint: 'Quem eu sou',         icon: ArrowRight, run: () => scrollTo('#sobre') },
    { id: 'projetos', label: 'Projetos',        hint: 'Trabalho selecionado', icon: ArrowRight, run: () => scrollTo('#projetos') },
    { id: 'stack',    label: 'Stack',           hint: 'Tecnologias que uso', icon: ArrowRight, run: () => scrollTo('#stack') },
    { id: 'terminal', label: 'Console',         hint: 'Terminal interativo', icon: ArrowRight, run: () => scrollTo('#terminal') },
    { id: 'contato',  label: 'Contato',         hint: 'Falar comigo',        icon: ArrowRight, run: () => scrollTo('#contato') },
    { id: 'github',   label: 'Abrir GitHub',    hint: 'github.com/Vi1tor',   icon: Github, run: () => { window.open(personal.github, '_blank'); close() } },
    { id: 'email',    label: 'Copiar email',    hint: personal.email,        icon: Mail, run: () => copyEmail() },
  ], [])

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    close()
  }

  function copyEmail() {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    copyTimeoutRef.current = setTimeout(() => { setCopied(false); close() }, 700)
  }

  function close() {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current)
      copyTimeoutRef.current = null
    }
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
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[var(--ink)]/40 px-4 pt-[14vh]"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border shadow-card-hover"
            style={{ background: 'var(--paper-raised)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2.5 border-b px-4 py-3.5" style={{ borderColor: 'var(--border)' }}>
              <span className="text-[15px]" style={{ color: 'var(--accent)' }}>/</span>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="ir para uma seção ou ação..."
                className="flex-1 bg-transparent text-[14.5px] outline-none text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)]"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="rounded-md border px-1.5 py-0.5 text-[10px]" style={{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }}>esc</span>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-[13px] text-[color:var(--ink-faint)]">nenhum comando encontrado</p>
              )}
              {filtered.map((a, i) => {
                const Icon = copied && a.id === 'email' ? Check : a.icon
                return (
                  <button
                    key={a.id}
                    onClick={a.run}
                    onMouseEnter={() => setSelected(i)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors"
                    style={{ background: selected === i ? 'var(--paper-dim)' : 'transparent' }}
                  >
                    <Icon size={15} style={{ color: selected === i ? 'var(--accent)' : 'var(--ink-faint)' }} />
                    <span className="text-[14px] font-medium text-[color:var(--ink)]">{a.label}</span>
                    <span className="ml-auto text-[12px] text-[color:var(--ink-faint)]">{copied && a.id === 'email' ? 'copiado!' : a.hint}</span>
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
