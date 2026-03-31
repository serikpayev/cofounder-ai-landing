import { useState, useEffect } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(true);

  function updateNavCta() {
    if (window.innerWidth <= 768) {
      setCtaVisible(false);
    } else {
      setCtaVisible(true);
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    updateNavCta();
    window.addEventListener('resize', updateNavCta);
    return () => window.removeEventListener('resize', updateNavCta);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav>
      <div className="logo">Co-Founder <span>AI</span></div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#problem" onClick={handleLinkClick}>Проблема</a></li>
        <li><a href="#how" onClick={handleLinkClick}>Как работает</a></li>
        <li><a href="#aha" onClick={handleLinkClick}>Демо</a></li>
        <li><a href="#compare" onClick={handleLinkClick}>Сравнение</a></li>
      </ul>
      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Меню"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span></span><span></span><span></span>
      </button>
      {ctaVisible && (
        <a href="#cta" className="btn-primary">Получить аудит</a>
      )}
    </nav>
  );
}
