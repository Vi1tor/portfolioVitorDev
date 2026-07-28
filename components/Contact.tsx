'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Globe, Send, ArrowUpRight } from 'lucide-react'
import { personal } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
})

const channels = [
  { icon: Mail,   label: 'Email',  val: personal.email,   href: `mailto:${personal.email}` },
  { icon: Github, label: 'GitHub', val: 'github.com/Vi1tor', href: personal.github },
  { icon: Globe,  label: 'Site',   val: 'vitorprogramador.com.br', href: personal.website },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const subject = data.get('subject') as string
    const message = data.get('message') as string
    const body = `Nome: ${name}%0AEmail: ${email}%0A%0A${message}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Contato via portfólio')}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contato" className="relative py-28 scroll-mt-24">
      <div className="section-container">
        <motion.span {...reveal(0)} className="kicker mb-8 block">Contato</motion.span>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <motion.div {...reveal(0.06)}>
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-[color:var(--ink)] text-balance sm:text-5xl">
              Vamos construir <span className="italic" style={{ color: 'var(--accent)' }}>algo com intenção.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[color:var(--ink-muted)]">
              Se houver um problema real pra resolver, prefiro começar pela clareza do briefing.
            </p>

            <div className="mt-9 space-y-2.5">
              {channels.map((c, i) => {
                const Icon = c.icon
                return (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border px-4 py-3.5 text-[14px] transition-colors"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--paper-dim)' }}>
                      <Icon size={14} style={{ color: 'var(--ink-muted)' }} />
                    </span>
                    <span className="font-medium text-[color:var(--ink)]">{c.label}</span>
                    <span className="ml-auto truncate text-[color:var(--ink-faint)] group-hover:text-[color:var(--ink-muted)]">{c.val}</span>
                    <ArrowUpRight size={14} className="flex-shrink-0 text-[color:var(--ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              })}
            </div>

            <div className="mt-8 flex items-center gap-2.5 border-t pt-6 text-[13px] font-medium text-[color:var(--ink-muted)]" style={{ borderColor: 'var(--border)' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full" style={{ background: 'var(--accent)' }} />
              </span>
              Disponível para projetos remotos
            </div>
          </motion.div>

          <motion.div {...reveal(0.14)} className="surface p-7 lg:p-9">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[color:var(--ink-muted)]">Nome</label>
                  <input name="name" className="form-input" placeholder="seu nome" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[color:var(--ink-muted)]">Email</label>
                  <input name="email" type="email" className="form-input" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[color:var(--ink-muted)]">Assunto</label>
                <input name="subject" className="form-input" placeholder="sobre o projeto..." />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[color:var(--ink-muted)]">Mensagem</label>
                <textarea name="message" className="form-input resize-none" rows={5} placeholder="descreva seu projeto..." required />
              </div>
              <button type="submit" className="btn-primary mt-1 w-full justify-center">
                {sent ? 'Enviando...' : (<><Send size={15} /> Enviar mensagem</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
