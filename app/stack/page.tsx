import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TechStack from '@/components/TechStack'
import Terminal from '@/components/Terminal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stack',
  description:
    'Stack técnica de Vitor Oliveira: React, TypeScript, Next.js, Node.js, Java, PostgreSQL e mais. Ferramentas usadas com domínio real em projetos de produção.',
  alternates: { canonical: 'https://www.vitorprogramador.com.br/stack' },
  openGraph: {
    title: 'Stack | Vitor Oliveira',
    description: 'React, TypeScript, Next.js, Node.js, Java, PostgreSQL — ferramentas com domínio real.',
    url: 'https://www.vitorprogramador.com.br/stack',
  },
}

export default function StackPage() {
  return (
    <>
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
