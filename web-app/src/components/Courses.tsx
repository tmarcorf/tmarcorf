const courses = [
  {
    title: 'Git e GitHub',
    platform: 'Alura',
    year: '2023',
  },
  {
    title: 'JavaScript do Básico ao Avançado com Node.js e Projetos',
    platform: 'Udemy',
    year: '2023',
  },
  {
    title: 'Arquitetura de Microsserviços do Zero com ASP.NET, .NET 6 e C#',
    platform: 'Udemy',
    year: '2023',
  },
  {
    title: 'Clean Architecture Essencial — ASP.NET Core com C#',
    platform: 'Udemy',
    year: '2022',
  },
];

export function Courses() {
  return (
    <section className="section" id="courses">
      <div className="section__inner">
        <div className="section-divider">// courses</div>

        <div className="grid-3">
          {courses.map((course) => (
            <div className="card" key={course.title}>
              <h3 className="course-card__title">{course.title}</h3>
              <div className="course-card__meta">
                <span className="course-card__platform">{course.platform}</span>
                <span>{course.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
