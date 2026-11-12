import { Phone, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const { personalInfo } = portfolioByLang[lang];
  const labels = uiLabels[lang].footer;

  return (
    <footer className="border-t border-border bg-page py-16 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Identidad y derechos */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl text-primary tracking-tight">{personalInfo.name}</span>
          <p className="text-secondary text-sm mt-1">{personalInfo.title}</p>
          <p className="text-xs text-secondary/60 font-mono mt-4">
            © {currentYear} {personalInfo.name}. {labels.builtWith}
          </p>
        </div>

        {/* Canales de Contacto Directo */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            {/* Teléfono / WhatsApp */}
            <a
              href="https://wa.me/51933513253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors font-mono group"
              title={labels.whatsappTitle}
              aria-label={labels.whatsappTitle}
            >
              <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>{personalInfo.phone}</span>
            </a>

            {/* Correo */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors font-mono group"
              title={labels.emailTitle}
              aria-label={labels.emailTitle}
            >
              <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-3 mt-2">
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
