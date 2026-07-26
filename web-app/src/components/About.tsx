export function About() {
  const codeSnippet = `<span class="about__code kw">public class</span> <span class="about__code type">Developer</span>
{
    <span class="about__code kw">public string</span> Name
        => <span class="about__code str">"Marco Túlio"</span>;

    <span class="about__code kw">public string</span> Role
        => <span class="about__code str">".NET Developer"</span>;

    <span class="about__code kw">public int</span> Experience
        => <span class="about__code num">7</span>; <span class="about__code cmt">// years</span>

    <span class="about__code kw">public string</span>[] Stack
        => [ <span class="about__code str">"C#"</span>, <span class="about__code str">".NET"</span>,
             <span class="about__code str">"SQL Server"</span>,
             <span class="about__code str">"PostgreSQL"</span>,
             <span class="about__code str">"Docker"</span> ];
}`;

  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="section-divider">// about</div>

        <div className="about__content">
          <div className="about__text">
            <p>
              Desenvolvedor de Software com mais de{' '}
              <span className="about__highlight">7 anos de experiência</span> em
              tecnologias como .NET, C#, ASP.NET Core, SQL Server, Docker, Git e
              práticas de Clean Code.
            </p>
            <p>
              Forte atuação no desenvolvimento back-end, com experiência também no
              front-end utilizando HTML, CSS e JavaScript. Sólida atuação em
              integração de sistemas distribuídos, melhorias de performance e
              desenvolvimento de novas funcionalidades, da concepção à entrega.
            </p>
            <p>
              Apaixonado por soluções inovadoras, sempre buscando ações que gerem
              valor tangível para os stakeholders. Valorizo o trabalho em equipe e
              possuo ótima comunicação.
            </p>
          </div>

          <div className="about__code-block">
            <div className="about__code-header">Developer.cs</div>
            <pre className="about__code">
              <code dangerouslySetInnerHTML={{ __html: codeSnippet }} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
