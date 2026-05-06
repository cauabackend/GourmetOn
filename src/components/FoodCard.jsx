import { useRecipes } from '../hooks/useRecipes';

function Skeleton() {
  return (
    <div style={{ background: 'var(--surface)', overflow: 'hidden' }}>
      <div style={{ height: '220px', background: 'var(--surface-2)' }} className="animate-pulse" />
      <div style={{ padding: '1.25rem' }}>
        <div style={{ height: '1rem', background: 'var(--surface-2)', marginBottom: '0.5rem', width: '70%' }} className="animate-pulse" />
        <div style={{ height: '0.75rem', background: 'var(--surface-2)', width: '40%' }} className="animate-pulse" />
      </div>
    </div>
  );
}

export default function FoodCard() {
  const { recipes, loading, error } = useRecipes();

  return (
    <section id="funcionalidades" style={{ padding: '8rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}>
            No cardápio
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Atualizado toda manhã
          </p>
        </div>

        {error && (
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
            Não foi possível carregar o cardápio. Verifique a API key no .env.local.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : recipes.map((r) => (
                <div
                  key={r.id}
                  style={{ background: 'var(--surface)', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
                >
                  <div style={{ overflow: 'hidden', height: '220px' }}>
                    <img
                      src={r.image}
                      alt={r.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3, marginBottom: '0.4rem' }}>
                      {r.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                      {r.readyInMinutes} min — {r.servings} {r.servings === 1 ? 'pessoa' : 'pessoas'}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
