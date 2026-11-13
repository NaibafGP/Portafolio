import { useState } from 'react';
import { User, GraduationCap, Award, Database, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'education' | 'certifications'>('about');
  const { lang } = useLanguage();
  const { personalInfo, education } = portfolioByLang[lang];
  const labels = uiLabels[lang].about;
  const isSpanish = lang === 'es';

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="mb-12 text-left">
        <span className="text-accent font-sans text-xs font-semibold tracking-wider uppercase">
          {labels.tagline}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">{labels.heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Left Column: Dossier, Education & Certifications Tabs */}
        <div className="flex flex-col items-start text-left w-full">
          {/* Scrollable Tab Controls for narrow mobile screens */}
          <div className="flex gap-2 sm:gap-4 border-b border-border w-full pb-2 mb-6 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'about'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{labels.tabs.about}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'education'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{labels.tabs.education}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('certifications')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'certifications'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{labels.tabs.certifications}</span>
            </button>
          </div>

          {/* Overlaid Tab Content Panels */}
          <div className="grid text-secondary text-base leading-relaxed w-full">
            <div
              className={`[grid-area:1/1] transition-opacity duration-200 ${
                activeTab === 'about' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <p className="text-secondary leading-relaxed max-w-prose">{personalInfo.summary}</p>
            </div>

            <div
              className={`[grid-area:1/1] transition-opacity duration-200 ${
                activeTab === 'education'
                  ? 'opacity-100'
                  : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              {education.map((item) => (
                <div key={item.institution} className="mb-4">
                  <h4 className="text-primary font-bold text-2xl">{item.institution}</h4>
                  <p className="text-accent text-base font-sans font-medium mt-0.5">{item.degree}</p>
                  <p className="text-sm font-sans text-secondary mt-1">{item.period}</p>
                </div>
              ))}
            </div>

            <div
              className={`[grid-area:1/1] transition-opacity duration-200 ${
                activeTab === 'certifications'
                  ? 'opacity-100'
                  : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <ul className="space-y-2.5">
                {education[0]?.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2.5 text-sm text-secondary">
                    <span className="text-accent font-bold">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Philosophy & Focus Card */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-md rounded-2xl bg-surface border border-border p-6 sm:p-7 shadow-xl shadow-accent/5 space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <span className="w-10 h-10 rounded-xl bg-page border border-border flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-accent" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {isSpanish ? 'Filosofía y Enfoque Técnico' : 'Engineering Philosophy & Focus'}
                </h3>
                <p className="text-xs text-secondary mt-0.5">
                  {isSpanish
                    ? 'Arquitectura limpia, consistencia y calidad'
                    : 'Clean architecture, consistency & quality'}
                </p>
              </div>
            </div>

            {/* 3 Core Engineering Pillars */}
            <div className="space-y-3.5">
              {/* Pillar 1: Layered Architecture */}
              <div className="p-3.5 rounded-xl bg-page/70 border border-border/70 space-y-1">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="text-sm font-semibold text-primary">
                    {isSpanish ? 'Arquitectura en Capas & DTOs' : 'Layered Architecture & DTOs'}
                  </h4>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  {isSpanish
                    ? 'Desacoplamiento estricto entre controladores web, servicios y persistencia. Uso de DTOs para blindar contratos API y evitar fuga de entidades.'
                    : 'Strict decoupling across web controllers, services, and persistence. Rigorous DTO usage to shield API contracts and eliminate entity leaks.'}
                </p>
              </div>

              {/* Pillar 2: Relational Integrity */}
              <div className="p-3.5 rounded-xl bg-page/70 border border-border/70 space-y-1">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="text-sm font-semibold text-primary">
                    {isSpanish ? 'Integridad Relacional & ERP' : 'Relational & ERP Integrity'}
                  </h4>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  {isSpanish
                    ? 'Demarcación transaccional con @Transactional y esquemas normalizados en PostgreSQL/MySQL para prevenir sobreventas y garantizar consistencia ACID.'
                    : 'ACID transactional boundaries with @Transactional and normalized schemas in PostgreSQL/MySQL to eliminate stock race conditions.'}
                </p>
              </div>

              {/* Pillar 3: Testing Discipline */}
              <div className="p-3.5 rounded-xl bg-page/70 border border-border/70 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="text-sm font-semibold text-primary">
                    {isSpanish ? 'Disciplina de Pruebas & Calidad' : 'Testing Discipline & Quality'}
                  </h4>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  {isSpanish
                    ? 'Pruebas unitarias de servicios con JUnit 5 y Mockito, manejo defensivo global con @RestControllerAdvice y validación estricta de payloads.'
                    : 'Service unit testing with JUnit 5 & Mockito, centralized exception handling via @RestControllerAdvice, and defensive payload validation.'}
                </p>
              </div>
            </div>

            {/* Bottom Discipline Badges */}
            <div className="pt-3 border-t border-border flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-page border border-border text-[11px] font-mono text-secondary">
                ACID Transactions
              </span>
              <span className="px-2.5 py-1 rounded-md bg-page border border-border text-[11px] font-mono text-secondary">
                Clean Architecture
              </span>
              <span className="px-2.5 py-1 rounded-md bg-page border border-border text-[11px] font-mono text-secondary">
                Defensive APIs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
