import { ImageResponse } from 'next/og'
import { ogTemplate, ogSize, ogContentType } from '@/lib/og'

export const runtime = 'edge'
export const alt = 'Contato | Vitor Oliveira — Desenvolvedor Full Stack Freelance'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      kicker: 'Portfolio · Contato',
      title: 'Vamos construir com intenção.',
      subtitle: 'Vitor Oliveira — Desenvolvedor Full Stack',
      footer: 'Disponível para projetos remotos · Resposta em até 24h',
    }),
    { ...size },
  )
}
