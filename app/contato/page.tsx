import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato — Vitor Oliveira',
  description: 'Para projetos com intenção clara. Resposta em até 24h.',
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
