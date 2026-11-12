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
import { ArrowDown, Terminal, MapPin, Globe } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-secondary mb-5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>{labels.status}</span>
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

        {/* Developer Terminal Card */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="w-full max-w-md rounded-2xl bg-surface border border-border shadow-2xl shadow-accent/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-page/60 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-secondary">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>{labels.terminalFile}</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-2">
              <p className="text-secondary">
                <span className="text-accent">class</span>{' '}
                <span className="text-primary font-semibold">DeveloperProfile</span>:
              </p>
              <div className="pl-4 space-y-1.5 border-l border-border/80">
                <p>
                  <span className="text-secondary">role</span> ={' '}
                  <span className="text-success">&quot;{labels.roleLabel}&quot;</span>
                </p>
                <p>
                  <span className="text-secondary">current_work</span> ={' '}
                  <span className="text-success">&quot;Cisclon S.A.C. (Odoo 20)&quot;</span>
                </p>
                <p>
                  <span className="text-secondary">stack</span> = [
                  <span className="text-primary">&quot;Java&quot;</span>,{' '}
                  <span className="text-primary">&quot;Python&quot;</span>,{' '}
                  <span className="text-primary">&quot;Odoo&quot;</span>,{' '}
                  <span className="text-primary">&quot;Kotlin&quot;</span>]
                </p>
                <p>
                  <span className="text-secondary">english</span> ={' '}
                  <span className="text-success">&quot;{labels.englishLabel}&quot;</span>
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs text-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent" />
                  <span>{labels.focusLabel}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
