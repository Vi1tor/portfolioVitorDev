import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const URL = 'https://www.vitorprogramador.com.br/contato'

export const metadata: Metadata = {
  title: { absolute: 'Contato | Vitor Oliveira — Desenvolvedor Full Stack Freelance' },
  description:
    'Entre em contato com Vitor Oliveira para projetos freelance. Desenvolvedor full stack disponível para trabalho remoto. Resposta em até 24h.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Contato | Vitor Oliveira — Desenvolvedor Full Stack Freelance',
    description: 'Desenvolvedor full stack freelance disponível para projetos remotos. Resposta em até 24h.',
    url: URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | Vitor Oliveira — Desenvolvedor Full Stack Freelance',
    description: 'Desenvolvedor full stack freelance disponível para projetos remotos. Resposta em até 24h.',
  },
  robots: { index: true, follow: true },
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato — Vitor Oliveira',
  url: URL,
  description:
    'Entre em contato com Vitor Oliveira para projetos freelance. Desenvolvedor full stack disponível para trabalho remoto.',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vitorprogramador.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: URL },
  ],
}

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
