const experiences = [
  {
    period: 'Jun/2025 — Presente',
    company: 'Lacuna Software',
    role: 'Desenvolvedor .NET',
    active: true,
    bullets: [
      'Desenvolvimento de sistemas de certificação digital utilizando as versões mais recentes do .NET',
      'Trabalho com SQL Server e PostgreSQL para persistência de dados de alta integridade',
      'Implementação de soluções seguras e escaláveis para infraestrutura de chaves públicas (PKI)',
    ],
  },
  {
    period: 'Set/2023 — Jun/2025',
    company: 'LG lugar de gente',
    role: 'Desenvolvedor .NET Pleno',
    active: false,
    bullets: [
      'Desenvolvimento de soluções utilizando ASP.NET, C#, VB.NET e SQL Server',
      'Implementação de automações internas com C# + Selenium para Web Scraping e extração de dados em massa',
      'Liderança de revisões de código da equipe para garantir qualidade nas entregas',
      'Realização de treinamentos técnicos sobre módulos desenvolvidos, facilitando integração de novos membros',
    ],
  },
  {
    period: 'Jul/2021 — Set/2023',
    company: 'LG lugar de gente',
    role: 'Desenvolvedor .NET Júnior',
    active: false,
    bullets: [
      'Participação em projetos de integração de módulos da suíte de produtos da empresa',
      'Otimização de processos de contratação em 20%',
    ],
  },
  {
    period: 'Nov/2018 — Jul/2021',
    company: 'LG lugar de gente',
    role: 'Desenvolvedor Trainee',
    active: false,
    bullets: [
      'Apoio à equipe em demandas de back-end e integração de sistemas',
      'Ganho de experiência nas tecnologias utilizadas pelo time',
    ],
  },
];

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <div className="section-divider">// experience</div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              className={`timeline__item${exp.active ? ' timeline__item--active' : ''}`}
              key={i}
            >
              <div className="timeline__dot" />
              <div className="timeline__period">{exp.period}</div>
              <h3 className="timeline__company">{exp.company}</h3>
              <div className="timeline__role">{exp.role}</div>
              <ul className="timeline__bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
