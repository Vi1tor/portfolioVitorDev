import { ImageResponse } from 'next/og'

export const alt = 'Vitor Oliveira — Desenvolvedor Full Stack. React, Next.js e Node.js.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: '#080b0d',
          color: '#edf2f0',
          padding: '58px 68px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 5,
            background: '#c3f85c',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="36" height="36" viewBox="0 0 32 32">
            <path d="M6 8h6l4 10 4-10h6L16 26Z" fill="#c3f85c" />
          </svg>
          <span style={{ fontSize: 20, letterSpacing: '0.12em', color: '#b0beba' }}>
            DESENVOLVEDOR FULL STACK
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 750 }}>
          <div style={{ display: 'flex', fontSize: 94, fontWeight: 700, letterSpacing: '-0.065em', lineHeight: 1.08 }}>
            Vitor Oliveira<span style={{ color: '#c3f85c' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 32, color: '#b0beba', marginTop: 24, lineHeight: 1.4 }}>
            Transformando ideias em experiências digitais.
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 30 }}>
            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  padding: '10px 16px',
                  background: '#101619',
                  border: '1px solid #293335',
                  borderRadius: 8,
                  fontSize: 17,
                  color: '#c3f85c',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', right: 45, top: 176, display: 'flex' }}>
          <svg width="278" height="278" viewBox="0 0 278 278" fill="none">
            <rect x="41" y="41" width="196" height="196" rx="30" stroke="#293335" transform="rotate(15 139 139)" />
            <rect x="41" y="41" width="196" height="196" rx="30" fill="#101619" stroke="#455035" transform="rotate(-12 139 139)" />
            <path d="M75 83h38l26 69 26-69h38l-64 122Z" fill="#c3f85c" />
            <circle cx="237" cy="46" r="5" fill="#c3f85c" />
            <path d="M237 20v12M237 60v12M211 46h12M251 46h12" stroke="#c3f85c" strokeWidth="2" />
          </svg>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #293335',
            paddingTop: 24,
            color: '#b0beba',
            fontSize: 18,
          }}
        >
          <span>vitorprogramador.com.br</span>
          <span style={{ color: '#c3f85c', letterSpacing: '0.08em', fontSize: 15 }}>BRASIL / REMOTO</span>
        </div>
      </div>
    ),
    size,
  )
}
