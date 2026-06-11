import { ImageResponse } from 'next/og'
import { ogTemplate, ogSize, ogContentType } from '@/lib/og'

export const runtime = 'edge'
export const alt = 'Stack Tecnológica de Vitor Oliveira | Desenvolvedor Full Stack'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      kicker: 'Portfolio · Stack',
      title: 'Ferramentas com domínio real.',
      subtitle: 'Vitor Oliveira — Desenvolvedor Full Stack',
      footer: 'React · TypeScript · Node.js · Java · PostgreSQL',
    }),
    { ...size },
  )
}
