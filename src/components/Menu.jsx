import { useState, useEffect } from 'react';

const links = [
  ['Cardápio', '#funcionalidades'],
  ['Sobre', '#beneficios'],
  ['Contato', '#contato'],
];

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: '1.25rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: scrolled ? 'rgba(10, 9, 8, 0.96)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.4s ease',
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--text)', letterSpacing: '-0.01em' }}>
        GourmetOn
      </a>

      <ul style={{ gap: '2.5rem', listStyle: 'none', alignItems: 'center' }} className="hidden md:flex">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contato"
        style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '0.5rem 1.25rem', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#0A0908'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
      >
        Baixar
      </a>
    </nav>
  );
}
