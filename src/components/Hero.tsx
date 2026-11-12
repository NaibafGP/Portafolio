import {
  SiKotlin,
  SiSpringboot,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiPython,
  SiOdoo,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { ArrowDown, MapPin } from 'lucide-react';
import profilePic from '../assets/profile.png';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

const techStack = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Python', icon: SiPython },
  { name: 'Odoo', icon: SiOdoo },
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
    <section id="hero" className="min-h-[85vh] flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          {personalInfo.availableForHire && (
            <div className="inline-flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-secondary">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>{labels.status}</span>
              </div>
              {personalInfo.location && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-primary">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-accent mb-6">
            // {personalInfo.title}
          </h2>

          <div className="flex flex-wrap gap-3 mb-4">
            {techStack.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="p-2.5 rounded-xl bg-surface border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors shadow-sm select-none cursor-default"
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              );
            })}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent transition-colors group mt-4"
            aria-label={labels.explore}
          >
            <span className="tracking-wider uppercase">{labels.explore}</span>
            <ArrowDown className="w-4 h-4 text-accent animate-bounce" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <img
            src={profilePic}
            alt={personalInfo.name}
            className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover bg-surface border-2 border-accent shadow-2xl shadow-accent/10"
          />
        </div>
      </div>
    </section>
  );
}
