const testimonials = [
  {
    quote: 'Pedi uma vez pra testar. Continuei porque o risoto veio melhor do que o de metade dos restaurantes que conheço.',
    name: 'Lucas T.',
    city: 'São Paulo',
  },
  {
    quote: 'Uso toda semana pra montar a lista de compras. Parei de jogar comida fora sem saber o que cozinhar.',
    name: 'Mariana C.',
    city: 'Belo Horizonte',
  },
  {
    quote: 'Não sei cozinhar e não tenho vergonha de assumir. Aqui eu pelo menos sei o que tem dentro do que estou comendo.',
    name: 'Rafael M.',
    city: 'Rio de Janeiro',
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: 'clamp(4rem, 10vw, 8rem) 1.5rem', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '5rem',
        }}>
          O que dizem
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
              style={{ padding: '3rem 0', borderTop: i === 0 ? '1px solid var(--border)' : '1px solid var(--border)', alignItems: 'end', gap: '2rem' }}
            >
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--text)',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                maxWidth: '52rem',
              }}>
                "{t.quote}"
              </blockquote>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                {t.name}, {t.city}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
