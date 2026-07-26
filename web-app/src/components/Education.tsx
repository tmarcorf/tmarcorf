export function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <div className="section-divider">// education & languages</div>

        <div className="grid-2">
          <div className="card education__card">
            <h3 className="education__degree">Bacharelado em Sistemas de Informação</h3>
            <div className="education__school">Universidade Federal de Goiás</div>
            <div className="education__period">Superior completo</div>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div className="language__name">Português</div>
              <div className="language__level">
                <div className="language__bar">
                  <div className="language__bar-fill" style={{ width: '100%' }} />
                </div>
                <span className="language__label">Nativo</span>
              </div>
            </div>
            <div>
              <div className="language__name">Inglês</div>
              <div className="language__level">
                <div className="language__bar">
                  <div className="language__bar-fill" style={{ width: '60%' }} />
                </div>
                <span className="language__label">Intermediário</span>
              </div>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Excelente leitura e entendimento técnico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
