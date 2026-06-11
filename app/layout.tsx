import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vitor Oliveira — Desenvolvedor Full Stack',
  description: 'Portfólio de Vitor Oliveira, desenvolvedor full stack com foco em produtos digitais claros, estáveis e bem resolvidos.',
  keywords: ['Desenvolvedor Full Stack', 'React', 'TypeScript', 'Node.js', 'Java', 'Portfolio'],
  authors: [{ name: 'Vitor Oliveira' }],
  openGraph: {
    title: 'Vitor Oliveira — Desenvolvedor Full Stack',
    description: 'Produtos digitais claros, estáveis e bem resolvidos.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
