import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com Vitor Oliveira para projetos freelance. Desenvolvedor full stack disponível para trabalho remoto. Resposta em até 24h.',
  alternates: { canonical: 'https://www.vitorprogramador.com.br/contato' },
  openGraph: {
    title: 'Contato | Vitor Oliveira',
    description: 'Desenvolvedor full stack freelance disponível para projetos remotos. Resposta em até 24h.',
    url: 'https://www.vitorprogramador.com.br/contato',
  },
}

export default function ContatoPage() {
  return (
    <>
      <PageHero
        index="04"
        kicker="04 — Contato"
        title="Vamos construir"
        titleAccent="com intenção."
        subtitle="Se houver um problema real para resolver, começo sempre pela clareza do briefing."
      />
      <Contact />
      <Footer />
    </>
  )
}
