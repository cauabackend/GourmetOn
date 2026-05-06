const items = [
  {
    num: '01',
    title: 'Entrega em 30 minutos',
    desc: 'Se passar disso, o próximo pedido é por nossa conta. Sem letras miúdas.',
  },
  {
    num: '02',
    title: 'Ingredientes da época',
    desc: 'Trabalhamos com fornecedores locais. Nada que ficou semanas em câmara fria.',
  },
  {
    num: '03',
    title: 'Sem taxa de adesão',
    desc: 'Não tem plano mensal nem contrato de fidelidade. Paga só quando usa.',
  },
  {
    num: '04',
    title: 'Devolução em 5 minutos',
    desc: 'Chegou errado ou faltou alguma coisa? Fala no chat, a gente resolve na hora.',
  },
];

export default function Features() {
  return (
    <section id="beneficios" style={{ padding: '8rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}>
            Por que o GourmetOn<br />
            <em style={{ fontStyle: 'italic' }}>funciona</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', maxWidth: '22rem', fontFamily: 'var(--font-body)', lineHeight: 1.75, fontWeight: 300 }}>
            Quatro pontos que a maioria dos apps de delivery ainda não resolveu direito.
          </p>
        </div>

        <div>
          {items.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-1 md:grid-cols-[4rem_1fr_1fr] gap-4 md:gap-8"
              style={{ padding: '2.25rem 0', borderTop: '1px solid var(--border)' }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.1em', paddingTop: '0.3rem' }}>
                {item.num}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300 }}>
                {item.desc}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
