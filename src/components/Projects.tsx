import { SiGithub } from 'react-icons/si';
import { Server, Smartphone, Monitor, CheckCircle2, Database, Layers } from 'lucide-react';
import { useLanguage } from '../context/languageContext';
import { portfolioByLang, uiLabels } from '../data/portafolioData';
import type { Project } from '../types/portafolio';

function ProjectPreview({ project }: { project: Project }) {
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
      <div className="w-full h-full p-5 flex flex-col justify-between bg-page/80 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="inline-flex items-center gap-2 text-primary font-semibold">
            <Server className="w-4 h-4 text-accent" />
            <span>Spring Boot · REST API</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-success/15 text-success text-[11px]">
            JUnit 5 PASS
          </span>
        </div>

        <div className="space-y-2 my-3">
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary">
              <span className="text-success font-semibold mr-2">GET</span>/api/v1/products
            </span>
            <span className="text-secondary/70">200 OK</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary">
              <span className="text-accent font-semibold mr-2">POST</span>/api/v1/orders
            </span>
            <span className="text-secondary/70">@Transactional</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border">
            <span className="text-secondary">
              <span className="text-primary font-semibold mr-2">ERR</span>@RestControllerAdvice
            </span>
            <span className="text-secondary/70">DTOs</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-secondary/80 pt-2 border-t border-border">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>Controller → Service → Repository</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-accent" />
            <span>MySQL / H2</span>
          </span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'mobile') {
    return (
      <div className="w-full h-full p-5 flex items-center justify-center bg-page/80 font-mono text-xs">
        <div className="w-full max-w-xs rounded-2xl bg-surface border border-border p-4 shadow-lg space-y-3">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="inline-flex items-center gap-2 text-primary font-semibold">
              <Smartphone className="w-4 h-4 text-accent" />
              <span>Jetpack Compose</span>
            </span>
            <span className="text-[11px] text-accent">MVVM</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-page border border-border">
              <p className="text-[10px] text-secondary">UI Layer</p>
              <p className="text-primary font-semibold mt-0.5">StateFlow</p>
            </div>
            <div className="p-2.5 rounded-lg bg-page border border-border">
              <p className="text-[10px] text-secondary">Async I/O</p>
              <p className="text-primary font-semibold mt-0.5">Coroutines</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-page border border-border text-[11px] text-secondary">
            <span>REST API → MySQL</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-5 flex flex-col justify-between bg-page/80 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="inline-flex items-center gap-2 text-primary font-semibold">
          <Monitor className="w-4 h-4 text-accent" />
          <span>C# · .NET Desktop</span>
        </span>
        <span className="text-[11px] text-secondary">WinForms · OOP</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="p-3 rounded-lg bg-surface border border-border">
          <p className="text-[10px] text-secondary">Module 01</p>
          <p className="text-primary font-semibold mt-1">Inventory</p>
        </div>
        <div className="p-3 rounded-lg bg-surface border border-border">
          <p className="text-[10px] text-secondary">Module 02</p>
          <p className="text-primary font-semibold mt-1">Customers</p>
        </div>
        <div className="p-3 rounded-lg bg-surface border border-border">
          <p className="text-[10px] text-secondary">Module 03</p>
          <p className="text-primary font-semibold mt-1">Sales</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border text-[11px] text-secondary">
        <span>Object-Oriented Architecture</span>
        <span className="text-success">Active</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const { projects } = portfolioByLang[lang];
  const labels = uiLabels[lang].projects;

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <span className="text-accent font-mono text-sm tracking-wider uppercase">
        {labels.tagline}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-16 text-primary">{labels.heading}</h2>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <article
              key={project.id}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                isReverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 aspect-video bg-surface border border-border hover:border-accent/40 transition-colors rounded-2xl shadow-xl relative overflow-hidden group">
                <ProjectPreview project={project} />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <span className="text-accent font-mono text-xs mb-2">0{index + 1}.</span>

                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>

                <p className="text-secondary text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-secondary mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tag} className="inline-flex items-center gap-2">
                      <span>{tag}</span>
                      {tagIndex < project.tags.length - 1 && (
                        <span className="text-secondary/40 select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${labels.viewGithub}: ${project.title}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-all text-sm font-medium"
                >
                  <SiGithub className="w-4 h-4" />
                  <span>{labels.viewGithub}</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
