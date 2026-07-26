export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__left">
        <span>UTF-8</span>
        <span className="footer__separator">|</span>
        <span>React 19</span>
        <span className="footer__separator">|</span>
        <span>TypeScript</span>
      </div>
      <div className="footer__right">
        <span>© {new Date().getFullYear()} Marco Túlio Ribeiro Félix</span>
        <span className="footer__separator">|</span>
        <span>Built with Vite</span>
      </div>
    </footer>
  );
}
