import { projects } from '../data/portafolioData';
import { SiGithub } from 'react-icons/si';
// import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-16 text-primary">Proyectos Destacados</h2> 
            <div className="flex flex-col gap-20">
  {projects.map((project, index) => {
    // Aquí sabemos si la fila es par o impar
    const isReverse = index % 2 === 1;

    return (
      <article
        key={project.id}
        className={`flex flex-col md:flex-row gap-10 items-center ${
          isReverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* 1. Mitad Visual (Mockup / Placeholder de la imagen) */}
        <div className="w-full md:w-1/2 aspect-video bg-surface border border-border rounded-2xl flex items-center justify-center p-6 shadow-xl relative overflow-hidden group">
          <span className="text-secondary font-mono text-sm">
            [ Imagen / Mockup de {project.title} ]
          </span>
        </div>

        {/* 2. Mitad Informativa (Detalles técnicos y tags) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {/* Número de proyecto */}
          <span className="text-accent font-mono text-xs mb-2">0{index + 1}.</span>

          {/* Título */}
          <h3 className="text-2xl font-bold text-primary mb-3">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-secondary text-sm md:text-base leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags de tecnologías usadas (otro map anidado) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-surface border border-border text-secondary font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Enlace a GitHub */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
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
);}