import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const URL = 'https://www.vitorprogramador.com.br/sobre'

export const metadata: Metadata = {
  title: { absolute: 'Sobre Vitor Oliveira | Desenvolvedor Full Stack Freelance' },
  description:
    'Conheça Vitor Oliveira — desenvolvedor full stack freelance no Brasil. Trajetória, valores e o que prioriza em cada produto digital.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Sobre Vitor Oliveira | Desenvolvedor Full Stack Freelance',
    description: 'Desenvolvedor full stack freelance. Trajetória, valores e o que prioriza em cada produto digital.',
    url: URL,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Vitor Oliveira | Desenvolvedor Full Stack Freelance',
    description: 'Desenvolvedor full stack freelance. Trajetória, valores e o que prioriza em cada produto digital.',
  },
  robots: { index: true, follow: true },
}

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre Vitor Oliveira',
  url: URL,
  description:
    'Conheça Vitor Oliveira — desenvolvedor full stack freelance no Brasil. Trajetória, valores e o que prioriza em cada produto digital.',
  about: { '@type': 'Person', name: 'Vitor Oliveira' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vitorprogramador.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Sobre', item: URL },
  ],
}

export default function SobrePage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
