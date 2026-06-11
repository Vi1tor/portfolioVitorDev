import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projetos — Vitor Oliveira',
  description: 'Trabalho publicado em produção com problema definido e entrega real.',
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
