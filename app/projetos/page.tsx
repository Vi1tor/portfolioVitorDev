import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { projects } from '@/lib/data'

const URL = 'https://www.vitorprogramador.com.br/projetos'

export const metadata: Metadata = {
  title: { absolute: 'Projetos de Vitor Oliveira | Desenvolvedor Full Stack Freelance' },
  description:
    'Projetos reais de Vitor Oliveira em produção — guias digitais para hotelaria, sistemas de auditoria, sites institucionais e ferramentas sob medida.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Projetos de Vitor Oliveira | Desenvolvedor Full Stack Freelance',
    description: 'Projetos em produção: guias digitais, auditoria, sites institucionais e ferramentas sob medida.',
    url: URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos de Vitor Oliveira | Desenvolvedor Full Stack Freelance',
    description: 'Projetos em produção: guias digitais, auditoria, sites institucionais e ferramentas sob medida.',
  },
  robots: { index: true, follow: true },
}

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projetos de Vitor Oliveira',
  url: URL,
  description:
    'Projetos reais de Vitor Oliveira em produção — guias digitais para hotelaria, sistemas de auditoria, sites institucionais e ferramentas sob medida.',
  hasPart: projects.map(p => ({
    '@type': 'CreativeWork',
    name: p.name,
    description: p.description,
    url: p.live ?? p.github,
    keywords: p.tech.join(', '),
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vitorprogramador.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Projetos', item: URL },
  ],
}

export default function ProjetosPage() {
  return (
    <>
      <JsonLd data={collectionPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
