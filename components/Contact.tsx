'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Globe, Send, ArrowRight } from 'lucide-react'
import { personal } from '@/lib/data'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

const channels = [
  { icon: Mail,   label: 'Email',   val: personal.email,   href: `mailto:${personal.email}` },
  { icon: Github, label: 'GitHub',  val: 'github.com/Vi1tor', href: personal.github },
  { icon: Globe,  label: 'Website', val: 'vitorprogramador.com.br', href: personal.website },
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
    <section id="contato" className="relative overflow-hidden py-28 scroll-mt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <div className="max-w-xl">
            <motion.span {...reveal(0)} className="kicker mb-4 block">Contato</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
              Vamos construir algo <span className="text-white/40">com intenção.</span>
            </motion.h2>
            <motion.p {...reveal(0.12)} className="mt-6 leading-8 text-white/70">
              Se houver um problema real para resolver, eu prefiro começar pela clareza do briefing e pela forma como o produto vai ser lido.
            </motion.p>

            <motion.div {...reveal(0.18)} className="mt-10 space-y-3">
              {channels.map((c, i) => {
                const Icon = c.icon
                return (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">{c.label}</p>
                      <p className="mt-1 truncate text-sm text-white/70 transition-colors group-hover:text-white">{c.val}</p>
                    </div>
                    <ArrowRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
                  </a>
                )
              })}
            </motion.div>

            <motion.div {...reveal(0.24)} className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">Status</p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm text-white/75">Disponível para projetos e parcerias remotas</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/45">Resposta típica em até 24h.</p>
            </motion.div>
          </div>

          <motion.div {...reveal(0.12)} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 lg:p-8">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">Enviar mensagem</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
              Conte o que precisa acontecer e o que já existe. Quanto mais contexto, mais claro fica o próximo passo.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.28em] text-white/45">Nome</label>
                  <input name="name" className="form-input" placeholder="Seu nome" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.28em] text-white/45">Email</label>
                  <input name="email" type="email" className="form-input" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.28em] text-white/45">Assunto</label>
                <input name="subject" className="form-input" placeholder="Sobre o projeto..." />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.28em] text-white/45">Mensagem</label>
                <textarea name="message" className="form-input resize-none" rows={5} placeholder="Descreva seu projeto..." required />
              </div>
              <button type="submit" className="btn-primary mt-2 justify-center w-full">
                {sent ? 'Abrindo email...' : (<><Send size={14} /> Enviar mensagem</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
