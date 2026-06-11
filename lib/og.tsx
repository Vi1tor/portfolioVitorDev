export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export function ogTemplate({ kicker, title, subtitle, footer }: { kicker: string; title: string; subtitle: string; footer: string }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0C0B09 0%, #1a1814 100%)',
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
      <p
        style={{
          color: '#C8920A',
          fontSize: '14px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          margin: '0 0 32px',
        }}
      >
        {kicker}
      </p>

      <p
        style={{
          color: '#F4EFE6',
          fontSize: '76px',
          fontWeight: 700,
          margin: '0 0 12px',
          lineHeight: 1.05,
          maxWidth: '900px',
        }}
      >
        {title}
      </p>

      <p
        style={{
          color: '#C8920A',
          fontSize: '30px',
          fontWeight: 400,
          margin: '0 0 52px',
        }}
      >
        {subtitle}
      </p>

      <p
        style={{
          color: '#F4EFE6',
          fontSize: '17px',
          opacity: 0.4,
          margin: 0,
          letterSpacing: '0.06em',
        }}
      >
        {footer}
      </p>

      <p
        style={{
          position: 'absolute',
          bottom: '48px',
          right: '80px',
          color: '#C8920A',
          fontSize: '13px',
          opacity: 0.5,
          letterSpacing: '0.18em',
          margin: 0,
        }}
      >
        vitorprogramador.com.br
      </p>
    </div>
  )
}
