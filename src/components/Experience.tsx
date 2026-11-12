import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';

export default function Experience() {
  const { lang } = useLanguage();
  const { experiences } = portfolioByLang[lang];
  const labels = uiLabels[lang].experience;

  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="mb-12">
        <span className="text-accent font-mono text-sm tracking-wider uppercase">
          {labels.tagline}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">{labels.heading}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((exp, index) => {
          const isCurrent = index === 0;

          return (
            <article
              key={exp.company}
              className={`bg-surface border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-sm ${
                isCurrent
                  ? 'border-accent/40 shadow-accent/5'
                  : 'border-border hover:border-accent/30'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-page border border-border flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-primary leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-accent text-sm font-mono">{exp.role}</p>
                    </div>
                  </div>

                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span>{labels.currentBadge}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs font-mono text-secondary mt-2 mb-4 pb-3 border-b border-border/70">
                  {exp.period}
                </p>

                <ul className="space-y-2 text-sm text-secondary leading-relaxed mb-5">
                  {exp.description.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-accent select-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-page border border-border text-xs font-mono text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
