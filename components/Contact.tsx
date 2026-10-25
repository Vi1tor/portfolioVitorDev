'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { personal } from '@/lib/data'

const channels = [
  { label: 'LinkedIn', handle: '/in/vi1tor', href: personal.linkedin, icon: Linkedin },
  { label: 'GitHub', handle: '@Vi1tor · 16 repositórios', href: personal.github, icon: Github },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${personal.email}`
    }
  }

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="grain relative overflow-hidden bg-forest pb-10 pt-24 text-forest-ink lg:pt-36"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow !text-forest-muted">Contato</p>
          <h2 id="contato-title" className="display mt-6 text-balance text-[clamp(2.5rem,7vw,6.6rem)] leading-[1]">
            Tem um projeto?
            <br />
            <em className="!text-accent-bright">Vamos conversar.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex max-w-full items-center gap-3 break-all text-[clamp(1.4rem,3.6vw,2.6rem)] font-light tracking-tight"
          >
            <span className="underline decoration-forest-line decoration-1 underline-offset-[10px] transition-colors group-hover:decoration-accent-bright">
              {personal.email}
            </span>
            <ArrowUpRight className="h-[0.9em] w-[0.9em] shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="btn self-start border border-forest-line text-forest-ink hover:border-forest-muted hover:bg-forest-raised lg:self-auto"
          >
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {copied ? 'Copiado!' : 'Copiar e-mail'}
          </button>
          <span role="status" className="sr-only">{copied ? 'E-mail copiado' : ''}</span>
        </Reveal>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2">
          {channels.map(({ label, handle, href, icon: Icon }, i) => (
            <Reveal as="li" key={label} delay={0.15 + i * 0.06}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-forest-line bg-[rgba(28,48,37,0.6)] p-5 transition-colors hover:border-forest-muted hover:bg-forest-raised"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-forest-ink">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium">{label}</span>
                  <span className="block truncate text-[13px] text-forest-muted">{handle}</span>
                </span>
                <ArrowUpRight size={18} className="ml-auto shrink-0 text-forest-muted transition-colors group-hover:text-accent-bright" aria-hidden="true" />
                {href.startsWith('http') && <span className="sr-only">(abre em nova aba)</span>}
              </a>
            </Reveal>
          ))}
        </ul>

        <footer className="mt-28 flex flex-col gap-6 border-t border-forest-line pt-8 text-[13px] text-forest-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personal.name}. Feito com Next.js no Brasil.
          </p>
          <p className="font-serif text-base italic text-forest-ink">Do balcão ao deploy.</p>
          <a href="#inicio" className="link-arrow !text-forest-muted hover:!text-forest-ink">
            Voltar ao topo ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
