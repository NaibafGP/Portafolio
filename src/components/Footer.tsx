import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Copy, Check } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const { personalInfo } = portfolioByLang[lang];
  const labels = uiLabels[lang].footer;
  const whatsappNumber = personalInfo.phone.replace(/\D/g, '') || '51933513253';

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message: string, field: 'email' | 'phone') => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToastMessage(message);
    setCopiedField(field);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
      setCopiedField(null);
    }, 2500);
  };

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      // Fallback safely when clipboard API is restricted
    }

    const msg =
      field === 'email'
        ? labels.emailCopied ??
          (lang === 'es' ? '¡Correo copiado al portapapeles!' : 'Email copied to clipboard!')
        : labels.phoneCopied ??
          (lang === 'es' ? '¡Teléfono copiado al portapapeles!' : 'Phone copied to clipboard!');
    showToast(msg, field);
  };

  const copyEmail = () => handleCopy(personalInfo.email, 'email');
  const copyPhone = () => handleCopy(personalInfo.phone, 'phone');

  return (
    <footer className="border-t border-border bg-page py-14 px-4 mt-16 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Identidad y derechos — WCAG AA compliant contrast */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl text-primary tracking-tight font-sans">
            {personalInfo.name}
          </span>
          <p className="text-secondary text-sm mt-1 font-sans">{personalInfo.title}</p>
          <p className="text-xs text-secondary mt-3 font-sans">
            © {currentYear} {personalInfo.name}. {labels.builtWith}
          </p>
        </div>

        {/* Canales de Contacto Directo + Copiado Rápido */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6">
            {/* Teléfono / WhatsApp: wa.me/51933513253 + Quick Copy */}
            <div className="inline-flex items-center gap-1.5">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors font-sans font-medium group"
                title={labels.whatsappTitle}
                aria-label={labels.whatsappTitle}
              >
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span>{personalInfo.phone}</span>
              </a>
              <button
                type="button"
                onClick={copyPhone}
                title={labels.copyPhoneLabel ?? (lang === 'es' ? 'Copiar teléfono' : 'Copy phone')}
                aria-label={labels.copyPhoneLabel ?? (lang === 'es' ? 'Copiar teléfono' : 'Copy phone')}
                className="p-1.5 rounded-md bg-surface border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-success" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Correo + Quick Copy */}
            <div className="inline-flex items-center gap-1.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors font-sans font-medium group"
                title={labels.emailTitle}
                aria-label={labels.emailTitle}
              >
                <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span>{personalInfo.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                title={labels.copyEmailLabel ?? (lang === 'es' ? 'Copiar correo' : 'Copy email')}
                aria-label={labels.copyEmailLabel ?? (lang === 'es' ? 'Copiar correo' : 'Copy email')}
                className="p-1.5 rounded-md bg-surface border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-success" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Toast de confirmación accesible */}
          <div role="status" aria-live="polite" className="min-h-[20px]">
            {toastMessage && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-accent/40 text-xs font-medium text-primary shadow-sm">
                <Check className="w-3.5 h-3.5 text-success" />
                <span>{toastMessage}</span>
              </span>
            )}
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-2.5 mt-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 hover:scale-105 transition-all shadow-sm"
              title="GitHub"
              aria-label="GitHub"
            >
              <SiGithub className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 hover:scale-105 transition-all shadow-sm"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
