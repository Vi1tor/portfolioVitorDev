import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
