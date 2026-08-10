'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TerminalSquare } from 'lucide-react'
import { easeOut } from '@/lib/motion'

const PROMPT = 'vitor@portfolio:~$'

const COMMANDS: Record<string, string[]> = {
  help: [
    'Comandos disponíveis:',
    '  whoami     — quem sou eu',
    '  skills     — tecnologias que uso',
    '  projects   — projetos publicados',
    '  contact    — como me encontrar',
    '  clear      — limpar o terminal',
  ],
  whoami: [
    'Vitor Oliveira — Desenvolvedor Full Stack',
    'Brasil · Remote · Interface-aware',
    '',
    'Construo produtos com React, TypeScript e Node.js.',
    'Foco em clareza, entrega e uso real.',
  ],
  skills: [
    'Frontend  →  React · TypeScript · Next.js · Framer Motion',
    'Backend   →  Node.js · Java · Express · REST APIs',
    'Database  →  PostgreSQL · MySQL · Firebase · Prisma',
    'Deploy    →  Vercel · Railway · Docker · GitHub Actions',
  ],
  projects: [
    '01  GuiaDigital       — guia para hotelaria',
    '02  Guia Gran Reserva — hóspedes, contexto local',
    '03  Villa Monte Verde — estrutura editorial',
    '04  AuditSystem       — diagnóstico de websites',
    '05  Siqueira Passeios — site institucional',
    '',
    'Veja todos em: github.com/Vi1tor',
  ],
  contact: [
    'Email   →  vitor7pb@gmail.com',
    'GitHub  →  github.com/Vi1tor',
    'Site    →  vitorprogramador.com.br',
  ],
}

type Line = { type: 'input' | 'output' | 'error'; text: string }

const WELCOME: Line[] = [
  { type: 'output', text: 'Curioso? Isso aqui funciona de verdade.' },
  { type: 'output', text: 'Digite "help" para ver os comandos disponíveis.' },
  { type: 'output', text: '' },
]

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const el = outputRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: Line[] = [...lines, { type: 'input', text: `${PROMPT} ${cmd}` }]

    if (!trimmed) {
      setLines([...newLines])
      return
    }

    if (trimmed === 'clear') {
      setLines(WELCOME)
      return
    }

    const result = COMMANDS[trimmed]
    if (result) {
      result.forEach(t => newLines.push({ type: 'output', text: t }))
    } else {
      newLines.push({ type: 'error', text: `comando não encontrado: ${trimmed}. Tente "help".` })
    }

    newLines.push({ type: 'output', text: '' })
    setLines(newLines)
    setHistory(h => [cmd, ...h].slice(0, 20))
    setHistoryIdx(-1)
  }

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = Math.min(historyIdx + 1, history.length - 1)
      setHistoryIdx(idx)
      setInput(history[idx] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = Math.max(historyIdx - 1, -1)
      setHistoryIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    }
  }

  return (
    <section id="terminal" className="relative py-8 pb-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="mb-6 flex items-center gap-2.5">
            <TerminalSquare size={15} style={{ color: 'var(--ink-faint)' }} />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.22em] text-[color:var(--ink-faint)]">
              Antes de ir — um console de verdade
            </span>
          </div>

          <div
            className="overflow-hidden rounded-2xl border shadow-card"
            style={{ background: 'var(--dark-bg)', borderColor: 'var(--dark-border)' }}
          >
            <div className="flex items-center gap-2 border-b px-5 py-3.5" style={{ borderColor: 'var(--dark-border)' }}>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] tracking-wide" style={{ color: 'var(--dark-muted)' }}>terminal</span>
            </div>

            <div onClick={() => inputRef.current?.focus()}>
              <div ref={outputRef} className="h-64 overflow-y-auto px-5 pt-4 pb-2 font-mono text-[13px] leading-6 lg:px-6">
                <AnimatePresence initial={false}>
                  {lines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        color:
                          line.type === 'input' ? 'var(--accent)'
                          : line.type === 'error' ? '#f28b82'
                          : 'var(--dark-muted)',
                      }}
                    >
                      {line.text || ' '}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 border-t px-5 py-3.5 lg:px-6" style={{ borderColor: 'var(--dark-border)' }}>
                <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>{PROMPT}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKey}
                  className="flex-1 bg-transparent font-mono text-sm outline-none"
                  style={{ color: 'var(--dark-text)' }}
                  placeholder="digite um comando..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
