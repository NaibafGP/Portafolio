import { createContext, useContext } from 'react';
import type { Language, PortfolioContent, UiLabels } from '../types/portafolio';

export interface LanguageContextValue {
  /** Active language code ('es' | 'en') */
  lang: Language;
  /** PROJECT.md contract alias for lang */
  language: Language;
  /** Setter for language */
  setLang: (lang: Language) => void;
  /** PROJECT.md contract alias for setLang */
  setLanguage: (lang: Language) => void;
  /** Toggles between 'es' and 'en' */
  toggleLang: () => void;
  /** Localized portfolio data for the active language */
  content: PortfolioContent;
  /** Localized UI strings and labels for the active language */
  labels: UiLabels;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
