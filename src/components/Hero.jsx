export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 1.5rem clamp(3rem, 8vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '70%',
        background: 'radial-gradient(ellipse at top right, rgba(200, 134, 58, 0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', width: '100%' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '1.75rem',
        }}>
          Delivery e Receitas
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4.5rem, 13vw, 11rem)',
          fontWeight: 300,
          lineHeight: 0.9,
          color: 'var(--text)',
          marginBottom: '3rem',
          letterSpacing: '-0.02em',
        }}>
          Comida<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>de verdade.</em>
        </h1>

        <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '2.5rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--muted)',
            maxWidth: '26rem',
            fontWeight: 300,
            lineHeight: 1.75,
          }}>
            Mais de 50 mil receitas testadas. Peça os ingredientes ou o prato pronto, como preferir. Chega em 30 minutos.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a
              href="#funcionalidades"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: '#0A0908',
                padding: '0.9rem 2rem',
                fontWeight: 500,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Ver cardápio
            </a>
            <a
              href="#contato"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                padding: '0.9rem 2rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--muted)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              Baixar app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
