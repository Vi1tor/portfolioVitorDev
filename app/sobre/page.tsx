import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sobre — Vitor Oliveira',
  description: 'Desenvolvedor Full Stack focado em produtos digitais claros e bem resolvidos.',
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
