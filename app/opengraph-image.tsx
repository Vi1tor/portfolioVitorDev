import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vitor Oliveira — Desenvolvedor Full Stack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF7F0',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          <div style={{ width: '14px', height: '2px', background: '#C1440E' }} />
          <p style={{ color: '#17140F99', fontSize: '15px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>
            Desenvolvedor Full Stack
          </p>
        </div>

        <p
          style={{
            color: '#17140F',
            fontSize: '88px',
            fontWeight: 600,
            margin: '0 0 28px',
            lineHeight: 1.02,
          }}
        >
          Vitor <span style={{ color: '#C1440E', fontStyle: 'italic' }}>Oliveira</span>
        </p>

        <p
          style={{
            color: '#17140F99',
            fontSize: '26px',
            fontWeight: 400,
            margin: 0,
            maxWidth: '720px',
          }}
        >
          Produtos digitais com direção clara, ritmo calmo e foco em uso real.
        </p>

        <p
          style={{
            position: 'absolute',
            bottom: '56px',
            right: '80px',
            color: '#17140F66',
            fontSize: '15px',
            letterSpacing: '0.1em',
            margin: 0,
          }}
        >
          vitorprogramador.com.br
        </p>
      </div>
    ),
    { ...size },
  )
}
