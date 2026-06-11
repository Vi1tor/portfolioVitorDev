import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TechStack from '@/components/TechStack'
import Terminal from '@/components/Terminal'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { techStack } from '@/lib/data'

const URL = 'https://www.vitorprogramador.com.br/stack'

export const metadata: Metadata = {
  title: { absolute: 'Stack Tecnológica de Vitor Oliveira | Desenvolvedor Full Stack' },
  description:
    'Stack técnica de Vitor Oliveira: React, TypeScript, Next.js, Node.js, Java, PostgreSQL e mais. Ferramentas usadas com domínio real em projetos de produção.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Stack Tecnológica de Vitor Oliveira | Desenvolvedor Full Stack',
    description: 'React, TypeScript, Next.js, Node.js, Java, PostgreSQL — ferramentas com domínio real.',
    url: URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stack Tecnológica de Vitor Oliveira | Desenvolvedor Full Stack',
    description: 'React, TypeScript, Next.js, Node.js, Java, PostgreSQL — ferramentas com domínio real.',
  },
  robots: { index: true, follow: true },
}

const technologies = techStack.flatMap(cat => cat.items)

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Stack Tecnológica de Vitor Oliveira',
  url: URL,
  description:
    'Stack técnica de Vitor Oliveira: React, TypeScript, Next.js, Node.js, Java, PostgreSQL e mais. Ferramentas usadas com domínio real em projetos de produção.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: technologies.map((tech, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tech,
    })),
  },
}

export default function StackPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <PageHero
        index="03"
        kicker="03 — Stack"
        title="Ferramentas com"
        titleAccent="domínio real."
        subtitle="A lista é curta porque prefiro profundidade ao acúmulo de tecnologias."
      />
      <TechStack />
      <Terminal />
      <Footer />
    </>
  )
}
