import { useState, useEffect, type ReactNode } from 'react';
import type { Language } from '../types/portafolio';
import { LanguageContext } from './languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

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
      try {
        window.localStorage.setItem('portfolio-lang', next);
        const url = new URL(window.location.href);
        if (url.searchParams.has('lang')) {
          url.searchParams.set('lang', next);
          window.history.replaceState({}, '', url.toString());
        }
      } catch (err) {
        console.error('Failed to persist language preference:', err);
      }
    }
  };

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Synchronize HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Synchronize document title
    const activeMeta = uiLabels[lang]?.meta;
    if (activeMeta?.title) {
      document.title = activeMeta.title;
    }

    // 3. Synchronize meta description
    if (activeMeta?.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', activeMeta.description);
    }
  }, [lang]);

  const value = {
    lang,
    language: lang,
    setLang,
    setLanguage: setLang,
    toggleLang,
    content: portfolioByLang[lang],
    labels: uiLabels[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
