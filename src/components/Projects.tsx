import { projects } from '../data/portafolioData';
import { SiGithub } from 'react-icons/si';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-16 text-primary">Proyectos Destacados</h2> 
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
              <div className="w-full md:w-1/2 aspect-video bg-surface border border-border rounded-2xl flex items-center justify-center p-6 shadow-xl relative overflow-hidden group">
                <span className="text-secondary font-mono text-sm">
                  [ Imagen / Mockup de {project.title} ]
                </span>
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <span className="text-accent font-mono text-xs mb-2">0{index + 1}.</span>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-secondary mb-6">
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
                  aria-label={`Ver código de ${project.title} en GitHub`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-all text-sm font-medium"
                >
                  <SiGithub className="w-4 h-4" />
                  <span>Ver en GitHub</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}