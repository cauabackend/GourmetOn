const navLinks = ['Cardápio', 'Sobre', 'Contato'];
const legalLinks = ['Termos de uso', 'Privacidade'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }} className="grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text)', marginBottom: '0.75rem' }}>
            GourmetOn
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, maxWidth: '18rem' }}>
            Receitas de verdade. Ingredientes frescos. Na sua casa em 30 minutos.
          </p>
        </div>

        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
            Navegação
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--muted)', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
            Legal
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {legalLinks.map(link => (
              <li key={link}>
                <a
                  href="#"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--muted)', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: '80rem', margin: '3rem auto 0', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 300 }}>
          © 2025 GourmetOn
        </p>
      </div>
    </footer>
  );
}
