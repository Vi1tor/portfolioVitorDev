'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  { type: 'output', text: 'Bem-vindo ao portfolio de Vitor Oliveira.' },
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
    <section id="terminal" className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <span className="kicker mb-4 block">Interativo</span>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
              Terminal <span className="text-white/40">direto</span>
            </h2>
          </div>

          <div
            className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0a0b10] shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] tracking-wider text-white/30">
                vitor@portfolio — terminal
              </span>
            </div>

            {/* Output */}
            <div ref={outputRef} className="h-80 overflow-y-auto px-6 pt-5 pb-3 font-mono text-sm leading-7">
              <AnimatePresence initial={false}>
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={
                      line.type === 'input'
                        ? 'text-cyan-300'
                        : line.type === 'error'
                        ? 'text-red-400/80'
                        : 'text-white/60'
                    }
                  >
                    {line.text || ' '}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="flex items-center gap-3 border-t border-white/8 px-6 py-4">
              <span className="font-mono text-sm text-[#b7773e]">{PROMPT}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                className="flex-1 bg-transparent font-mono text-sm text-white/80 outline-none placeholder:text-white/20"
                placeholder="digite um comando..."
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
