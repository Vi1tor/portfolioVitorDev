import Link from 'next/link'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { ArrowUpRight } from 'lucide-react'

const pages = [
  {
    index: '01',
    title: 'Sobre',
    description: 'Quem sou, trajetória e o que valorizo em cada produto.',
    href: '/sobre',
  },
  {
    index: '02',
    title: 'Projetos',
    description: 'Trabalho publicado em produção, com problema e contexto reais.',
    href: '/projetos',
  },
  {
    index: '03',
    title: 'Stack',
    description: 'Ferramentas que uso com domínio real — sem acúmulo de rótulos.',
    href: '/stack',
  },
  {
    index: '04',
    title: 'Contato',
    description: 'Para projetos com intenção clara e briefing bem resolvido.',
    href: '/contato',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Navigation section */}
      <section className="bg-[#0e0d0c]">
        <div className="section-container">
          <div className="border-b border-white/8 py-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-white/30">Explorar</p>
          </div>

          <div className="divide-y divide-white/6">
            {pages.map((page, i) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex items-center gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] -mx-6 px-6 lg:-mx-8 lg:px-8"
              >
                <span className="font-mono text-[11px] tracking-[0.28em] text-white/20 w-6 flex-shrink-0">
                  {page.index}
                </span>

                <span
                  className="font-display font-semibold tracking-[-0.04em] text-white/80 group-hover:text-white transition-colors duration-300 flex-1"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
                >
                  {page.title}
                </span>

                <span className="hidden max-w-xs text-sm leading-7 text-white/30 group-hover:text-white/50 transition-colors duration-300 lg:block">
                  {page.description}
                </span>

                <span className="ml-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 group-hover:border-white/25 group-hover:text-white/70 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>

          <div className="border-t border-white/8 py-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.28em] text-white/20">
            <span>Vitor Oliveira</span>
            <span>Full Stack / Interface</span>
          </div>
        </div>
      </section>
    </>
  )
}
