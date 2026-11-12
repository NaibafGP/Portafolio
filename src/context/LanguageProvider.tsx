import { useState, type ReactNode } from 'react';
import type { Language } from '../types/portafolio';
import { LanguageContext } from './languageContext';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'en' || urlLang === 'es') return urlLang;

  const saved = window.localStorage.getItem('portfolio-lang');
  if (saved === 'en' || saved === 'es') return saved;

  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-lang', next);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
