const skillGroups = [
  {
    title: 'Linguagens & Frameworks',
    skills: ['C#', '.NET', 'ASP.NET Core', 'TypeScript', 'Angular', 'React'],
  },
  {
    title: 'Bancos de Dados',
    skills: ['SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis', 'Entity Framework'],
  },
  {
    title: 'DevOps & Ferramentas',
    skills: ['Docker', 'Git', 'Selenium', 'Web Scraping'],
  },
  {
    title: 'Práticas & Arquitetura',
    skills: ['SOLID', 'DRY', 'Clean Architecture', 'Code Review', 'Microsserviços', 'CI/CD'],
  },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <div className="section-divider">// skills</div>

        <div className="stagger-children">
          {skillGroups.map((group) => (
            <div className="skills__group animate-fade-in" key={group.title}>
              <h3 className="skills__group-title">{group.title}</h3>
              <div className="flex-wrap">
                {group.skills.map((skill) => (
                  <span className="badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
