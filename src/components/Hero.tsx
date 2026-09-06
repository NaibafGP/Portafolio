import { personalInfo } from '../data/portafolioData';
import { SiKotlin, SiSpringboot, SiMysql, SiDotnet, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';
import profilePic from '../assets/profile.png';
import { ArrowDown } from 'lucide-react';

const techStack = [
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MySQL', icon: SiMysql },
  { name: '.NET / C#', icon: SiDotnet },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
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
                  className="p-2.5 rounded-xl bg-surface border border-border text-secondary shadow-sm select-none cursor-default"
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              );
            })}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent transition-colors group mt-4"
            aria-label="Explorar proyectos"
          >
            <span className="tracking-wider uppercase">Explorar Proyectos</span>
            <ArrowDown className="w-4 h-4 text-accent animate-bounce" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <img 
            src={profilePic} 
            alt={personalInfo.name} 
            className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover border-2 border-accent shadow-2xl shadow-accent/10" 
          />
        </div>
      </div>

    
    </section>
  );
}