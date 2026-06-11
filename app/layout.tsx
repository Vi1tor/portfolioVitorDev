import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
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

const BASE_URL = 'https://www.vitorprogramador.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vitor Oliveira — Desenvolvedor Full Stack',
    template: '%s | Vitor Oliveira',
  },
  description:
    'Portfólio de Vitor Oliveira, desenvolvedor full stack freelance no Brasil. Especialista em React, TypeScript, Node.js e Java. Produtos digitais claros, estáveis e bem resolvidos.',
  keywords: [
    'Vitor Oliveira',
    'Vitor Oliveira desenvolvedor',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Full Stack Freelance',
    'Desenvolvedor Freelance Brasil',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Java',
    'Portfólio',
  ],
  authors: [{ name: 'Vitor Oliveira', url: BASE_URL }],
  creator: 'Vitor Oliveira',
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Vitor Oliveira — Desenvolvedor Full Stack',
    title: 'Vitor Oliveira — Desenvolvedor Full Stack',
    description:
      'Produtos digitais claros, estáveis e bem resolvidos. React, TypeScript, Node.js, Java.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitor Oliveira — Desenvolvedor Full Stack',
    description: 'Produtos digitais claros, estáveis e bem resolvidos.',
    creator: '@vitor_oliveira',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vitor Oliveira',
  url: BASE_URL,
  sameAs: ['https://github.com/Vi1tor'],
  jobTitle: 'Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack freelance no Brasil. React, TypeScript, Node.js, Java.',
  image: 'https://avatars.githubusercontent.com/u/161656799?v=4',
  email: 'vitor7pb@gmail.com',
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Java', 'PostgreSQL', 'Tailwind CSS'],
  worksFor: { '@type': 'Organization', name: 'Freelance' },
  address: { '@type': 'PostalAddress', addressCountry: 'BR' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
