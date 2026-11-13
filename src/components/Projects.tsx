import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { Server, Smartphone, Monitor, CheckCircle2, Database, Layers } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';
import type { Project, ProjectPreviewLabels } from '../types/portafolio';
import { ProjectModal } from './ProjectModal';

function ProjectPreview({
  project,
  labels,
}: {
  project: Project;
  labels: ProjectPreviewLabels;
}) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    );
  }

  if (project.previewType === 'api') {
    return (
      <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-page/90 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border pb-2.5 sm:pb-3">
          <span className="inline-flex items-center gap-2 text-primary font-semibold">
            <Server className="w-4 h-4 text-accent" />
            <span>{labels.apiBadge}</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-success/15 text-success text-[11px] font-medium">
            {labels.passBadge}
          </span>
        </div>

        <div className="space-y-1.5 sm:space-y-2 my-2.5 sm:my-3">
          <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary text-[11px] sm:text-xs">
              <span className="text-success font-semibold mr-1.5 sm:mr-2">GET</span>/api/v1/products
            </span>
            <span className="text-success font-medium text-[11px]">200 OK</span>
          </div>
          <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary text-[11px] sm:text-xs">
              <span className="text-accent font-semibold mr-1.5 sm:mr-2">POST</span>/api/v1/orders
            </span>
            <span className="text-accent font-medium text-[11px]">@Transactional</span>
          </div>
          <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary text-[11px] sm:text-xs">
              <span className="text-primary font-semibold mr-1.5 sm:mr-2">ERR</span>@RestControllerAdvice
            </span>
            <span className="text-secondary font-medium text-[11px]">DTOs</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-secondary pt-2 border-t border-border">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>{labels.layerArch}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-accent" />
            <span>{labels.db}</span>
          </span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'mobile') {
    return (
      <div className="w-full h-full p-4 sm:p-5 flex items-center justify-center bg-page/90 font-mono text-xs">
        <div className="w-full max-w-xs rounded-2xl bg-surface border border-border p-3.5 sm:p-4 shadow-lg space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <span className="inline-flex items-center gap-2 text-primary font-semibold">
              <Smartphone className="w-4 h-4 text-accent" />
              <span>{labels.mobileTitle}</span>
            </span>
            <span className="text-[11px] text-accent font-medium">MVVM</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 sm:p-2.5 rounded-lg bg-page border border-border">
              <p className="text-[10px] text-secondary">{labels.uiLayer}</p>
              <p className="text-primary font-semibold mt-0.5 text-xs">StateFlow</p>
            </div>
            <div className="p-2 sm:p-2.5 rounded-lg bg-page border border-border">
              <p className="text-[10px] text-secondary">{labels.asyncIo}</p>
              <p className="text-primary font-semibold mt-0.5 text-xs">Coroutines</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-page border border-border text-[11px] text-secondary">
            <span>REST API → MySQL</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-page/90 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-border pb-2.5 sm:pb-3">
        <span className="inline-flex items-center gap-2 text-primary font-semibold">
          <Monitor className="w-4 h-4 text-accent" />
          <span>{labels.desktopTitle}</span>
        </span>
        <span className="text-[11px] text-secondary font-medium">{labels.desktopSubtitle}</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-2.5 sm:my-3">
        <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border text-center">
          <p className="text-[9px] sm:text-[10px] text-secondary">{labels.module1Label}</p>
          <p className="text-primary font-semibold mt-0.5 text-xs truncate">{labels.module1Name}</p>
        </div>
        <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border text-center">
          <p className="text-[9px] sm:text-[10px] text-secondary">{labels.module2Label}</p>
          <p className="text-primary font-semibold mt-0.5 text-xs truncate">{labels.module2Name}</p>
        </div>
        <div className="p-2 sm:p-2.5 rounded-lg bg-surface border border-border text-center">
          <p className="text-[9px] sm:text-[10px] text-secondary">{labels.module3Label}</p>
          <p className="text-primary font-semibold mt-0.5 text-xs truncate">{labels.module3Name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-surface border border-border text-[11px] text-secondary">
        <span>{labels.oopArchitecture}</span>
        <span className="text-success font-medium">{labels.statusActive}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const { projects } = portfolioByLang[lang];
  const labels = uiLabels[lang].projects;
  const isSpanish = lang === 'es';
  const [selectedProjectId, setSelectedProject] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === selectedProjectId) ?? null;

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="mb-16 text-left">
        <span className="text-accent font-sans text-xs font-semibold tracking-wider uppercase">
          {labels.tagline}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">{labels.heading}</h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <article
              key={project.id}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-stretch ${
                isReverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Responsive Preview Card: min-h-[240px] prevents mobile clipping; md:aspect-video preserves 16:9 desktop */}
              <div className="w-full md:w-1/2 min-h-[240px] md:min-h-0 md:aspect-video bg-surface border border-border hover:border-accent/40 transition-colors rounded-2xl shadow-xl relative overflow-hidden group flex flex-col justify-between">
                <ProjectPreview project={project} labels={labels.preview} />
              </div>

              {/* Narrative Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between items-start text-left">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent font-mono text-xs">0{index + 1}.</span>
                    {/* Category Pill replacing template numbering */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-medium">
                      {project.previewType === 'api'
                        ? (isSpanish ? 'Backend · API REST' : 'Backend · REST API')
                        : project.previewType === 'mobile'
                        ? (isSpanish ? 'Móvil · Android Nativo' : 'Mobile · Android Native')
                        : (isSpanish ? 'Escritorio · C# .NET' : 'Desktop · C# .NET')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-1.5">{project.title}</h3>

                  {project.headline && (
                    <p className="text-accent text-sm font-medium mb-3 font-sans">{project.headline}</p>
                  )}

                  <p className="text-secondary text-sm md:text-base leading-relaxed mb-5 max-w-prose">
                    {project.description}
                  </p>

                  {/* Clean Pill Badges for Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-secondary mb-6 select-none">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tag} className="inline-flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-md bg-page border border-border text-xs font-mono text-secondary">
                          {tag}
                        </span>
                        {tagIndex < project.tags.length - 1 && (
                          <span className="text-border select-none">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors text-sm font-medium cursor-pointer shadow-sm"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{labels.viewArchitecture ?? (isSpanish ? 'Ver Arquitectura' : 'View Architecture')}</span>
                  </button>

                  <a
                    href={project.githubLink || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${labels.viewGithub}: ${project.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-all text-sm font-medium"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>{labels.viewGithub}</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ProjectModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
