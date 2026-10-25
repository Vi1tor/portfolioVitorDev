import { personal } from '@/lib/data'

export const siteUrl = personal.website
export const siteTitle = 'Vitor Oliveira | Desenvolvedor Full Stack — sites e guias digitais para pousadas'
export const siteDescription =
  'Desenvolvedor full stack no Brasil. Crio guias digitais do hóspede, sites e sistemas com React, Next.js, TypeScript e Node.js para pousadas, turismo e serviços.'

export const profileJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: personal.name,
      url: siteUrl,
      image: personal.avatar,
      jobTitle: personal.role,
      description: siteDescription,
      email: personal.email,
      sameAs: [personal.github, personal.linkedin],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Java',
        'PostgreSQL',
        'Desenvolvimento web',
        'Guias digitais do hóspede',
        'Sites para pousadas e turismo',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: `${personal.name} — ${personal.role}`,
      url: siteUrl,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
  ],
}
