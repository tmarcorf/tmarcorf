export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__left">
        <span><i>"Nós só podemos ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer"</i></span>
        <span>— Alan Turing</span>
      </div>
      <div className="footer__right">
        <span>© {new Date().getFullYear()} Marco Túlio</span>
      </div>
    </footer>
  );
}
