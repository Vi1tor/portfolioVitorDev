import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import TechStack from '@/components/TechStack'
import Terminal from '@/components/Terminal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stack — Vitor Oliveira',
  description: 'Ferramentas com domínio real. Menos rótulos, mais profundidade.',
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
