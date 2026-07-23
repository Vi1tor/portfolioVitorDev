'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Globe, Send, ArrowRight } from 'lucide-react'
import { personal } from '@/lib/data'
import Window from '@/components/Window'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
})

const channels = [
  { icon: Mail,   label: '--email',  val: personal.email,   href: `mailto:${personal.email}` },
  { icon: Github, label: '--github', val: 'github.com/Vi1tor', href: personal.github },
  { icon: Globe,  label: '--site',   val: 'vitorprogramador.com.br', href: personal.website },
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
    <section id="contato" className="relative py-24 scroll-mt-20">
      <div className="section-container">
        <motion.span {...reveal(0)} className="kicker mb-5 block">contato</motion.span>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <motion.div {...reveal(0.06)}>
            <Window path="contato.sh">
              <div className="p-6 lg:p-7">
                <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white lg:text-4xl">
                  Vamos construir<br /><span className="text-white/40">algo com intenção.</span>
                </h2>
                <p className="mt-5 font-mono text-[13px] leading-6 text-white/50">
                  Se houver um problema real pra resolver, eu prefiro começar pela clareza do briefing.
                </p>

                <div className="mt-7 space-y-2">
                  {channels.map((c, i) => {
                    const Icon = c.icon
                    return (
                      <a
                        key={i}
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-md border border-white/10 px-3.5 py-2.5 font-mono text-[13px] transition-colors hover:border-white/20 hover:bg-white/[0.02]"
                      >
                        <Icon size={14} className="text-white/40" />
                        <span className="text-[color:var(--accent)]">{c.label}</span>
                        <span className="ml-auto truncate text-white/55 group-hover:text-white/85">{c.val}</span>
                        <ArrowRight size={13} className="text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-white/60" />
                      </a>
                    )
                  })}
                </div>

                <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 font-mono text-[13px] text-white/55">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[var(--accent)]" />
                  </span>
                  status: disponível para projetos remotos
                </div>
              </div>
            </Window>
          </motion.div>

          <motion.div {...reveal(0.12)}>
            <Window path="mensagem.json">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 lg:p-7">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-white/40">--nome</label>
                    <input name="name" className="form-input" placeholder="seu nome" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-white/40">--email</label>
                    <input name="email" type="email" className="form-input" placeholder="seu@email.com" required />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-white/40">--assunto</label>
                  <input name="subject" className="form-input" placeholder="sobre o projeto..." />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-white/40">--mensagem</label>
                  <textarea name="message" className="form-input resize-none" rows={5} placeholder="descreva seu projeto..." required />
                </div>
                <button type="submit" className="btn-primary mt-2 w-full justify-center">
                  {sent ? '$ enviando...' : (<><Send size={14} /> $ enviar --mensagem</>)}
                </button>
              </form>
            </Window>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
