import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import { personal } from '@/lib/data'
import { profileJsonLd, siteDescription, siteTitle, siteUrl } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Vitor Oliveira',
  },
  description: siteDescription,
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  category: 'technology',
  alternates: { canonical: siteUrl },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: `${personal.name} — ${personal.role}`,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/opengraph-image', alt: siteTitle }],
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

export const viewport: Viewport = {
  themeColor: '#080b0d',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <script
          id="profile-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
