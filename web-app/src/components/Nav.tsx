import { useState } from 'react';

interface NavProps {
  sections: { id: string; label: string }[];
}

export function Nav({ sections }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`nav${isMenuOpen ? ' nav--open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav__inner">
        <a href="#" className="nav__logo" aria-label="Home" onClick={closeMenu}>
          {'<MT />'}
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div className="nav__overlay" onClick={closeMenu} aria-hidden="true" />
        )}

        <ul className="nav__links" id="nav-menu">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={closeMenu}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
