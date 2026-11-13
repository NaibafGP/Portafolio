import { useEffect, useRef } from 'react';
import { X, Layers, CheckCircle2, FileCode2, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project } from '../types/portafolio';
import { useLanguage } from '../context/languageContext';
import { InteractiveApiSimulator } from './InteractiveApiSimulator';

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();
  const isEs = lang === 'es';
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) {
    return null;
  }

  const architecture = project.architecture;
  const layers = architecture?.layers ?? [
    { name: 'Controller', responsibility: 'REST API Endpoints & DTO Validation', tech: 'Spring Web' },
    { name: 'Service', responsibility: 'Business Logic & @Transactional Boundaries', tech: 'Spring Tx' },
    { name: 'Repository', responsibility: 'Relational Persistence Abstraction', tech: 'Spring Data JPA' },
    { name: 'Entity / Database', responsibility: 'Relational Domain Schema', tech: 'MySQL / H2' },
  ];
  const decisions = architecture?.decisions ?? [];
  const contracts = architecture?.contracts ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl p-5 sm:p-7 space-y-6 text-left"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-medium mb-2">
              {isEs ? 'Arquitectura del Sistema' : 'System Architecture'}
            </span>
            <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-primary">
              {project.title}
            </h3>
            {project.headline && (
              <p className="text-sm text-secondary mt-1">{project.headline}</p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={isEs ? 'Cerrar' : 'Close'}
            className="p-2 rounded-lg bg-page border border-border text-secondary hover:text-primary hover:border-accent/40 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. 4-Layer Architecture Diagram */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-accent" />
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
              {isEs ? 'Capas de Arquitectura (Controller → Service → Repository → Entity)' : 'Architecture Layers (Controller → Service → Repository → Entity)'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {layers.map((layer, idx) => (
              <div
                key={layer.name}
                className="p-3.5 rounded-xl bg-page border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-primary">
                      0{idx + 1}. {layer.name}
                    </span>
                    <span className="font-mono text-[11px] text-accent">{layer.tech}</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">{layer.responsibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technical Rationale & Trade-offs (decisions / explanation) */}
        {decisions.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                {isEs
                  ? 'Decisiones Técnicas y Justificación (Trade-offs)'
                  : 'Technical Decisions & Architectural Rationale'}
              </h4>
            </div>

            <div className="space-y-2.5">
              {decisions.map((decision) => (
                <div
                  key={decision.title}
                  className="p-3.5 rounded-xl bg-page border border-border"
                >
                  <h5 className="text-sm font-semibold text-primary mb-1">{decision.title}</h5>
                  <p className="text-xs text-secondary leading-relaxed">{decision.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. REST JSON Contract Schema Viewer */}
        {contracts.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileCode2 className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
                {isEs ? 'Contratos REST y Esquemas JSON (Endpoints)' : 'REST Contracts & JSON Endpoint Schemas'}
              </h4>
            </div>

            <div className="space-y-2.5">
              {contracts.map((contract) => (
                <div
                  key={`${contract.method}-${contract.path}`}
                  className="p-3 rounded-xl bg-page border border-border font-mono text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-accent/15 text-accent font-semibold">
                        {contract.method}
                      </span>
                      <span className="text-primary">{contract.path}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-success/15 text-success">
                      HTTP {contract.status}
                    </span>
                  </div>
                  {contract.request && (
                    <div className="text-[11px] text-secondary break-all">
                      <span className="text-muted">req: </span>
                      {contract.request}
                    </div>
                  )}
                  <div className="text-[11px] text-secondary break-all">
                    <span className="text-muted">res: </span>
                    {contract.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Interactive Simulator for Spring Boot REST API */}
        {project.previewType === 'api' && (
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
              {isEs
                ? 'Simulador Interactivo de Transacciones (@Transactional ACID)'
                : 'Interactive Transaction Simulator (@Transactional ACID)'}
            </h4>
            <InteractiveApiSimulator />
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
          <a
            href={project.githubLink || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-page border border-border hover:border-accent hover:text-accent transition-colors text-xs sm:text-sm font-medium"
          >
            <SiGithub className="w-4 h-4" />
            <span>{isEs ? 'Ver repositorio en GitHub' : 'View repository on GitHub'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            {isEs ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
