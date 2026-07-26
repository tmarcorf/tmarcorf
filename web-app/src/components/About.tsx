import { yearsOfExperience } from "../constants/info";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="section-divider">// about</div>

        <div className="about__content">
          <div className="about__text">
            <p>
              Desenvolvedor de Software com mais de{' '}
              <span className="about__highlight">{yearsOfExperience} anos de experiência</span> em
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
            <div className="about__code-header">
              <span className="about__code-dots" aria-hidden="true" />
              <span>Developer.cs</span>
            </div>
            <pre className="about__code">
              <code>
                <span className="kw">public class</span>{" "}
                <span className="type">Developer</span>
                {"\n"}
                {"{"}
                {"\n"}
                {"    "}
                <span className="kw">public string</span>{" "}
                Name =&gt; <span className="str">"Marco Túlio"</span>;
                {"\n"}
                {"    "}
                <span className="kw">public string</span>{" "}
                Role =&gt; <span className="str">".NET Developer"</span>;
                {"\n"}
                {"    "}
                <span className="kw">public int</span>{" "}
                Experience =&gt; <span className="num">{yearsOfExperience}</span>;{" "}
                <span className="cmt">// years</span>
                {"\n\n"}
                {"    "}
                <span className="kw">public string</span>[] Stack =&gt;
                {"\n"}
                {"    "}
                [
                {"\n"}
                {"        "}
                <span className="str">"C#"</span>,
                {"\n"}
                {"        "}
                <span className="str">".NET"</span>,
                {"\n"}
                {"        "}
                <span className="str">"ASP.NET Core"</span>,
                {"\n"}
                {"        "}
                <span className="str">"SQL Server"</span>,
                {"\n"}
                {"        "}
                <span className="str">"PostgreSQL"</span>,
                {"\n"}
                {"        "}
                <span className="str">"Docker"</span>
                {"\n"}
                {"    "}
                ];
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
