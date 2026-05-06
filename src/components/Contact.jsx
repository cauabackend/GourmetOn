import { useState } from 'react';

const inputStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  color: 'var(--text)',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '0.875rem 0',
  width: '100%',
  outline: 'none',
  fontWeight: 300,
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  }

  return (
    <section id="contato" style={{ padding: 'clamp(4rem, 10vw, 8rem) 1.5rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }} className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem' }}>
            Contato
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Fala<br />
            <em style={{ fontStyle: 'italic' }}>com a gente</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, maxWidth: '22rem' }}>
            Dúvida, reclamação ou sugestão. A gente lê tudo e responde no mesmo dia.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {submitted ? (
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.3 }}>
              Mensagem recebida. A gente te retorna em breve.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderBottomColor = 'var(--border)'}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderBottomColor = 'var(--border)'}
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderBottomColor = 'var(--border)'}
              />
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: 'var(--accent)',
                  color: '#0A0908',
                  padding: '0.9rem 2rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
