import { ImageResponse } from 'next/og'

export const alt = 'Vitor Oliveira — Desenvolvedor Full Stack. Do balcão da pousada ao deploy.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type OgFont = { name: string; data: ArrayBuffer; style: 'normal' | 'italic' }

/** Baixa a Instrument Serif (normal e itálico) só com os caracteres usados na imagem. */
async function loadSerif(text: string): Promise<OgFont[]> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Besley:ital@0;1&text=${encodeURIComponent(text)}`
  ).then(res => res.text())
  const faces = [...css.matchAll(/@font-face\s*{([^}]+)}/g)].map(m => m[1])
  return Promise.all(
    faces.map(async face => {
      const style = /font-style:\s*italic/.test(face) ? 'italic' : 'normal'
      const url = face.match(/src:\s*url\((.+?)\)/)?.[1] ?? ''
      const data = await fetch(url).then(res => res.arrayBuffer())
      return { name: 'Serif', data, style } as OgFont
    })
  )
}

const TEXT =
  'Vitor OliveiraDesenvolvedor Full StackDo balcão da pousadaao deploy.vitorprogramador.com.brGuias digitais · Sites · Sistemasv'

export default async function Image() {
  let fonts: OgFont[] = []
  try {
    fonts = await loadSerif(TEXT)
  } catch {
    // sem a fonte, cai na serifada padrão
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f2efe7',
          color: '#17150f',
          padding: '64px 72px',
          fontFamily: 'Serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 999,
              background: '#17150f',
              color: '#f2efe7',
              fontSize: 34,
              fontFamily: 'Serif',
              fontStyle: 'italic',
            }}
          >
            v
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 30 }}>Vitor Oliveira</span>
            <span style={{ fontSize: 22, color: '#57534a' }}>Desenvolvedor Full Stack</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Serif', fontSize: 92, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
          <span>Do balcão da pousada</span>
          <span style={{ display: 'flex' }}>
            ao&nbsp;<span style={{ fontStyle: 'italic', color: '#c2410c' }}>deploy</span>.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #c4bdac',
            paddingTop: 22,
            fontSize: 24,
            color: '#57534a',
          }}
        >
          <span>vitorprogramador.com.br</span>
          <span>Guias digitais · Sites · Sistemas</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}
