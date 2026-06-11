import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Projetos reais de Vitor Oliveira em produção — guias digitais para hotelaria, sistemas de auditoria, sites institucionais e ferramentas sob medida.',
  alternates: { canonical: 'https://www.vitorprogramador.com.br/projetos' },
  openGraph: {
    title: 'Projetos | Vitor Oliveira',
    description: 'Projetos em produção: guias digitais, auditoria, sites institucionais e ferramentas sob medida.',
    url: 'https://www.vitorprogramador.com.br/projetos',
  },
}

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        index="02"
        kicker="02 — Projetos"
        title="Trabalho"
        titleAccent="publicado."
        subtitle="Cada projeto com problema real, contexto definido e entrega em produção."
      />
      <Projects />
      <Footer />
    </>
  )
}
