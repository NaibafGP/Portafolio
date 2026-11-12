import { useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Code2, Server, Database } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education' | 'certifications'>('about');
  const { lang } = useLanguage();
  const { personalInfo, experiences, education } = portfolioByLang[lang];
  const labels = uiLabels[lang].about;

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <span className="text-accent font-mono text-sm tracking-wider uppercase">{labels.tagline}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-primary">{labels.heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col items-start text-left">
          <div className="flex flex-wrap gap-4 border-b border-border w-full pb-2 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
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
              onClick={() => setActiveTab('experience')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{labels.tabs.experience}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
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
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'certifications'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{labels.tabs.certifications}</span>
            </button>
          </div>

          {/* Pestañas superpuestas */}
          <div className="grid text-secondary text-base leading-relaxed w-full">
            <div
              className={`[grid-area:1/1] transition-opacity duration-200 ${
                activeTab === 'about' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <p>{personalInfo.summary}</p>
            </div>

            <div
              className={`[grid-area:1/1] transition-opacity duration-200 space-y-6 ${
                activeTab === 'experience'
                  ? 'opacity-100'
                  : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              {experiences.map((exp) => (
                <div key={exp.company} className="pb-5 border-b border-border/60 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-primary font-bold text-xl">{exp.company}</h4>
                    <span className="text-xs font-mono text-secondary">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm font-mono mb-3">{exp.role}</p>
                  <ul className="space-y-1.5 text-sm text-secondary mb-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent select-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-surface border border-border text-[11px] font-mono text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
                  <p className="text-accent text-md font-mono">{item.degree}</p>
                  <p className="text-sm text-secondary mt-1">{item.period}</p>
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
              <ul className="space-y-2">
                {education[0]?.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta profesional de icono/ingeniería */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-2xl bg-surface border border-border p-6 shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-page border border-accent/40 flex items-center justify-center shrink-0">
                <Code2 className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">{labels.badgeTitle}</h3>
                <p className="text-xs text-secondary mt-0.5">{labels.badgeSubtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-page border border-border text-xs font-mono text-secondary">
                <Server className="w-3.5 h-3.5 text-accent" />
                <span>APIs & ERP</span>
              </span>
              <span className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-page border border-border text-xs font-mono text-secondary">
                <Database className="w-3.5 h-3.5 text-accent" />
                <span>SQL / ORM</span>
              </span>
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              {labels.highlights.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-2 text-xs">
                  <span className="font-mono text-secondary uppercase">{item.label}</span>
                  <span className="text-primary font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
