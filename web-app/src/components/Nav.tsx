interface NavProps {
  sections: { id: string; label: string }[];
}

export function Nav({ sections }: NavProps) {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#" className="nav__logo" aria-label="Home">
          {'<MT />'}
        </a>
        <ul className="nav__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
