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
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <div className="max-w-xl">
            <motion.span {...reveal(0)} className="kicker mb-4 block">Contato</motion.span>
            <motion.h2 {...reveal(0.06)} className="font-display text-4xl font-semibold tracking-[-0.04em] text-stone-900 lg:text-5xl">
              Vamos construir algo <span className="text-stone-400">com intenção.</span>
            </motion.h2>
            <motion.p {...reveal(0.12)} className="mt-6 leading-8 text-stone-700">
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
                    className="flex items-center gap-4 rounded-[1.25rem] border border-stone-900/10 bg-white/75 p-4 transition-colors hover:bg-white/95"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-stone-900/10 bg-white/70 text-stone-700">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">{c.label}</p>
                      <p className="mt-1 truncate text-sm text-stone-700 transition-colors group-hover:text-stone-900">{c.val}</p>
                    </div>
                    <ArrowRight size={14} className="text-stone-500 transition-transform group-hover:translate-x-0.5" />
                  </a>
                )
              })}
            </motion.div>

            <motion.div {...reveal(0.24)} className="mt-6 rounded-[1.75rem] border border-stone-900/10 bg-white/75 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Status</p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-stone-700">Disponível para projetos e parcerias remotas</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-stone-500">Resposta típica em até 24h.</p>
            </motion.div>
          </div>

          <motion.div {...reveal(0.12)} className="rounded-[2rem] border border-stone-900/10 bg-white/82 p-6 lg:p-8">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-stone-900">Enviar mensagem</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-500">
              Conte o que precisa acontecer e o que já existe. Quanto mais contexto, mais claro fica o próximo passo.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Nome</label>
                  <input name="name" className="form-input" placeholder="Seu nome" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Email</label>
                  <input name="email" type="email" className="form-input" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Assunto</label>
                <input name="subject" className="form-input" placeholder="Sobre o projeto..." />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Mensagem</label>
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
