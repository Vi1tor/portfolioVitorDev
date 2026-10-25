import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
