import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça Vitor Oliveira — desenvolvedor full stack freelance no Brasil. Trajetória, valores e o que prioriza em cada produto digital.',
  alternates: { canonical: 'https://www.vitorprogramador.com.br/sobre' },
  openGraph: {
    title: 'Sobre | Vitor Oliveira',
    description: 'Desenvolvedor full stack freelance. Trajetória, valores e o que prioriza em cada produto digital.',
    url: 'https://www.vitorprogramador.com.br/sobre',
  },
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        index="01"
        kicker="01 — Sobre"
        title="Quem está por"
        titleAccent="trás do código."
        subtitle="Desenvolvedor, construtor de produtos, focado em clareza e entrega real."
      />
      <About />
      <Experience />
      <Footer />
    </>
  )
}
