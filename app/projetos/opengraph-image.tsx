import { ImageResponse } from 'next/og'
import { ogTemplate, ogSize, ogContentType } from '@/lib/og'

export const runtime = 'edge'
export const alt = 'Projetos de Vitor Oliveira | Desenvolvedor Full Stack Freelance'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      kicker: 'Portfolio · Projetos',
      title: 'Trabalho publicado.',
      subtitle: 'Vitor Oliveira — Desenvolvedor Full Stack',
      footer: 'Guias digitais, sistemas de auditoria, sites institucionais e mais',
    }),
    { ...size },
  )
}
