import { Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function Experience() {
  const { lang } = useLanguage();
  const { experiences } = portfolioByLang[lang];
  const labels = uiLabels[lang].experience;
  const isSpanish = lang === 'es';

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      <div className="mb-14 text-left">
        <span className="text-accent font-sans text-xs font-semibold tracking-wider uppercase">
          {labels.tagline}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">{labels.heading}</h2>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-border/70 space-y-12">
        {experiences.map((exp, index) => {
          const isCurrent = exp.isCurrent !== undefined ? exp.isCurrent : index === 0;
          const isFeatured = exp.type === 'featured' || isCurrent;

          return (
            <article key={exp.company} className="relative group">
              {/* Timeline Axis Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all ${
                  isFeatured
                    ? 'bg-accent border-page ring-4 ring-accent/20'
                    : 'bg-secondary/40 border-page ring-4 ring-border/40'
                }`}
              />

              {/* Card Container */}
              <div
                className={`rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-surface border border-accent/40 shadow-xl shadow-accent/5 ring-1 ring-accent/15'
                    : 'bg-surface/60 border border-border/80 hover:border-accent/30'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isFeatured
                          ? 'bg-accent/10 border-accent/30 text-accent'
                          : 'bg-page border-border text-secondary'
                      }`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                          {exp.company}
                        </h3>
                        {!isFeatured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-medium">
                            {isSpanish ? 'Puente de Dominio · WMS' : 'Domain Bridge · WMS'}
                          </span>
                        )}
                      </div>
                      <p className="text-accent text-sm sm:text-base font-sans font-medium mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Status / Type Badges */}
                  <div className="flex items-center gap-2">
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/30 text-success text-xs font-sans font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        <span>{labels.currentBadge}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Period & Location Metadata */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-secondary font-medium mb-5 pb-3 border-b border-border/70">
                  <span>{exp.period}</span>
                  {exp.location && (
                    <>
                      <span className="text-border select-none">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                  {isFeatured && (
                    <>
                      <span className="text-border select-none">•</span>
                      <span className="text-accent font-medium">
                        {isSpanish ? 'Experiencia Comercial Principal' : 'Primary Commercial Role'}
                      </span>
                    </>
                  )}
                </div>

                {/* Domain Bridge Callout for Coolbox */}
                {!isFeatured && exp.description.length >= 3 && (
                  <div className="mb-5 p-4 rounded-xl bg-page/80 border border-border/80 text-xs text-secondary leading-relaxed max-w-prose">
                    <p className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>
                        {isSpanish
                          ? 'Fundamento Operativo para Sistemas de Negocio & ERP:'
                          : 'Operational Domain Foundation for Business Systems & ERP:'}
                      </span>
                    </p>
                    <p className="text-secondary">{exp.description[2]}</p>
                  </div>
                )}

                {/* Description Bullets with max-w-prose to eliminate tablet stretching */}
                <ul className="space-y-2.5 text-sm text-secondary leading-relaxed max-w-prose mb-6">
                  {(isFeatured ? exp.description : exp.description.slice(0, 2)).map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-accent select-none mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-page border border-border text-xs font-mono text-secondary hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
