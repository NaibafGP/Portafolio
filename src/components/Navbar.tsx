import type { ReactNode } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { uiLabels } from '../data/portafolioData';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const labels = uiLabels[lang].nav;

  const navLinks = [
    { href: '#experience', label: labels.experience },
    { href: '#projects', label: labels.projects },
    { href: '#skills', label: labels.skills },
    { href: '#about', label: labels.about },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center gap-2 md:grid md:grid-cols-3">
        {/* Espaciador izquierdo para centrar el menú en escritorio */}
        <div className="hidden md:flex items-center">
          <a
            href="#hero"
            className="font-mono text-xs text-secondary hover:text-accent transition-colors"
          >
            fabian.dev
          </a>
        </div>

        {/* Menú central */}
        <ul className="flex items-center gap-2 sm:gap-5 md:justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavItem href={link.href}>{link.label}</NavItem>
            </li>
          ))}
        </ul>

        {/* Botones derechos: idioma y CV */}
        <div className="flex justify-end items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-2.5 text-[11px] sm:text-xs font-mono text-secondary hover:text-primary bg-surface border border-border hover:border-accent/40 rounded-lg transition-colors cursor-pointer"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a
            href="/cv.pdf"
            download="Fabian_Garcia_CV.pdf"
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <span className="hidden sm:inline">{labels.downloadCv}</span>
            {labels.cvShort}
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="relative py-1 text-secondary hover:text-primary transition-colors text-[11px] sm:text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
    >
      {children}
    </a>
  );
}
