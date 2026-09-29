'use client'

<<<<<<< ours
import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Contact() {
  const [prepared, setPrepared] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Vamos conversar sobre um projeto')}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return (
    <section id="contato" aria-labelledby="contact-heading" className="section-spacing border-t border-[var(--border)] bg-[#0c1110]">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="kicker mb-4">// 04 — Próximo passo</p>
            <h2 id="contact-heading" className="section-heading">Boas ideias merecem<br /><span className="text-accent">sair do papel.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--ink-muted)]">Tem um projeto em mente? Vamos conversar sobre o que você precisa e como posso ajudar a construir.</p>
            <a href={`mailto:${personal.email}`} className="mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[var(--border-hi)] pb-3 text-lg font-medium tracking-tight transition-colors hover:text-[var(--accent)] sm:text-xl">{personal.email}<ArrowUpRight size={19} aria-hidden="true" /></a>
            <div className="mt-7 flex items-center gap-6">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-xs text-[var(--ink-muted)] hover:text-[var(--accent)]"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
              <span className="h-4 w-px bg-[var(--border-hi)]" aria-hidden="true" />
              <span className="text-xs text-[var(--ink-muted)]">Brasil · Atendimento remoto</span>
            </div>
            <p className="hero-status mt-9">Disponível para novos projetos</p>
          </div>

          <form onSubmit={handleSubmit} className="surface flex flex-col gap-5 p-6 sm:p-8" aria-label="Preparar mensagem de contato" aria-describedby="contact-help">
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-5">
              <Mail size={16} className="text-accent" aria-hidden="true" />
              <p className="text-sm font-medium">Vamos começar uma conversa</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs text-[var(--ink-muted)]">Seu nome</label>
                <input id="contact-name" name="name" autoComplete="name" className="form-input" placeholder="Como posso te chamar?" maxLength={100} required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs text-[var(--ink-muted)]">Seu e-mail</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" className="form-input" placeholder="voce@exemplo.com" maxLength={254} required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-xs text-[var(--ink-muted)]">Sobre o que vamos conversar?</label>
              <input id="contact-subject" name="subject" className="form-input" placeholder="Um site, um sistema, uma ideia..." maxLength={150} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs text-[var(--ink-muted)]">Conte um pouco sobre o projeto</label>
              <textarea id="contact-message" name="message" className="form-input min-h-28 resize-y" rows={4} placeholder="O que você gostaria de construir?" maxLength={2000} required />
            </div>
            <button type="submit" className="btn-primary w-full">Preparar e-mail <ArrowUpRight size={16} aria-hidden="true" /></button>
            <p id="contact-help" className="text-[11px] leading-5 text-[var(--ink-faint)]">O formulário abre seu aplicativo de e-mail com a mensagem preenchida. O envio é feito por você no aplicativo.</p>
            <p role="status" className={prepared ? 'rounded-md border border-[#435833] bg-[var(--accent-dim)] p-3 text-xs leading-6 text-[var(--ink)]' : 'sr-only'}>
              {prepared ? 'Solicitamos a abertura do seu aplicativo de e-mail. Se ele não abriu, você pode escrever diretamente para vitor7pb@gmail.com.' : ''}
            </p>
          </form>
=======
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Globe, Send, ArrowUpRight } from 'lucide-react'
import { personal } from '@/lib/data'
import { reveal } from '@/lib/motion'

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
    const body = `Nome: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Contato via portfólio')}&body=${encodeURIComponent(body)}`
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
>>>>>>> theirs
        </div>
      </div>
    </section>
  )
}
