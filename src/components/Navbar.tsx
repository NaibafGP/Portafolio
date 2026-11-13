import { useState, useEffect, type ReactNode } from 'react';
import { Globe, Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { uiLabels } from '../data/portafolioData';

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  } catch {
    return 'dark';
  }
}

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const labels = uiLabels[lang].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore storage write errors in restricted environments
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  const themeLabel =
    lang === 'es'
      ? theme === 'dark'
        ? 'Cambiar a tema claro'
        : 'Cambiar a tema oscuro'
      : theme === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme';

  const navLinks = [
    { href: '#experience', label: labels.experience },
    { href: '#projects', label: labels.projects },
    { href: '#skills', label: labels.skills },
    { href: '#about', label: labels.about },
  ] as const;

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md border-b border-border transition-colors">
      {/* Theme switcher integration slot: data-theme / Sun / Moon */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Monogram */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
            aria-label="Fabian Garcia — Inicio"
          >
            <span className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center font-bold text-xs text-accent group-hover:border-accent transition-colors">
              FG
            </span>
            <span className="font-mono text-xs text-secondary group-hover:text-primary transition-colors">
              fabian.dev
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center space-x-6" aria-label="Main Navigation">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem href={link.href}>{link.label}</NavItem>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme, Language, CV & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="inline-flex items-center justify-center p-1.5 text-secondary hover:text-primary bg-surface border border-border hover:border-accent/40 rounded-lg transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-accent" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-secondary hover:text-primary bg-surface border border-border hover:border-accent/40 rounded-lg transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* CV Download Button */}
          <a
            href="/cv.pdf"
            download="Fabian_Garcia_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors shadow-sm whitespace-nowrap"
            aria-label={labels.downloadCv + ' ' + labels.cvShort}
          >
            <FileText className="w-3.5 h-3.5 hidden sm:inline" />
            <span className="hidden sm:inline">{labels.downloadCv} </span>
            <span>{labels.cvShort}</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 text-secondary hover:text-primary hover:bg-surface rounded-lg border border-border transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Backdrop & Dropdown */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="relative z-50 md:hidden border-t border-border bg-page/95 backdrop-blur-lg px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-150">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center px-4 py-3 text-sm font-medium text-secondary hover:text-primary hover:bg-surface rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="relative py-1 text-sm font-medium text-secondary hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
    >
      {children}
    </a>
  );
}
