import { ImageResponse } from 'next/og'
import { ogTemplate, ogSize, ogContentType } from '@/lib/og'

export const runtime = 'edge'
export const alt = 'Sobre Vitor Oliveira | Desenvolvedor Full Stack Freelance'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      kicker: 'Portfolio · Sobre',
      title: 'Quem está por trás do código.',
      subtitle: 'Vitor Oliveira — Desenvolvedor Full Stack',
      footer: 'Trajetória, valores e o que prioriza em cada produto digital',
    }),
    { ...size },
  )
}
