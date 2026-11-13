import {
  SiKotlin,
  SiSpringboot,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiPython,
  SiOdoo,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaLinkedin } from 'react-icons/fa6';
import { ArrowDown, MapPin, Mail, Globe } from 'lucide-react';
import profilePic from '../assets/profile.png';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

const techStack = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Python', icon: SiPython },
  { name: 'Odoo 20', icon: SiOdoo },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
];

export default function Hero() {
  const { lang } = useLanguage();
  const { personalInfo } = portfolioByLang[lang];
  const labels = uiLabels[lang].hero;

  return (
    <section id="hero" className="min-h-[80vh] flex items-center px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mobile Avatar order-first / Desktop order-last */}
        <div className="flex justify-center md:justify-end items-center order-first md:order-last">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-300" />
            <img
              src={profilePic}
              alt={personalInfo.name}
              className="relative rounded-full w-32 h-32 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover bg-surface border-2 border-accent/60 shadow-xl"
            />
          </div>
        </div>

        {/* Text and Actions Column */}
        <div className="flex flex-col items-start text-left order-last md:order-first">
          {personalInfo.availableForHire && (
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-sans font-medium text-secondary">
                <span className="w-2 h-2 rounded-full bg-success inline-block shrink-0" />
                <span>{labels.status}</span>
              </div>
              {personalInfo.location && (
                <div className="inline-flex items-center gap-1.5 text-xs font-sans text-secondary px-2.5 py-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {labels.englishLabel && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-sans text-secondary">
                  <Globe className="w-3.5 h-3.5 text-accent" />
                  <span>{labels.englishLabel}</span>
                </div>
              )}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight text-primary">
            {personalInfo.name}
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent mb-4 tracking-normal font-sans">
            {personalInfo.title}
          </h2>

          <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6 max-w-xl">
            {personalInfo.summary}
          </p>

          {/* Labeled Featured Stack Badge Bar */}
          <div className="w-full mb-6">
            <span className="block text-xs font-semibold uppercase tracking-wider text-secondary/70 mb-2.5">
              {lang === 'es' ? 'Stack Principal' : 'Featured Stack'}
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {techStack.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-secondary hover:text-primary hover:border-accent/40 transition-colors shadow-sm select-none"
                  >
                    <IconComponent className="w-4 h-4 text-accent shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Primary Action Button & Social Links */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors shadow-sm group cursor-pointer"
              aria-label={labels.explore}
            >
              <span>{labels.explore}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>

            <span className="h-5 w-px bg-border hidden sm:inline-block" aria-hidden="true" />

            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                title={labels.emailTitle}
                aria-label={labels.emailTitle}
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
