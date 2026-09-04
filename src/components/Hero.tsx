import { personalInfo } from '../data/portafolioData';
// import { Mail, ArrowDown, Moon, Sun } from 'lucide-react';
// import { SiGithub } from 'react-icons/si';
import { SiKotlin, SiSpringboot, SiMysql, SiDotnet, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';
import profilePic from '../assets/profile.png';

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
  {/* El contenedor Grid NO se cierra aquí, abraza a las dos columnas */}
  <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* COLUMNA 1 (Izquierda): Todo el texto */}
    <div className="flex flex-col items-start text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
      <h2 className="text-xl md:text-2xl font-mono text-accent mb-6"> // {personalInfo.title}</h2>

      <div className=" flex flex-wrap gap-3 mb-8">
        {techStack.map((tech) => {
            const IconComponent = tech.icon;
        return (
            <div 
            key = {tech.name}
            title={tech.name}
            className="p-2.5 rounded-xl bg-surface border border-border text-secondary hover:text-accent hover:border-accent/40 hover:scale-110 transition-all duration-200 cursor-pointer shadow-sm"
            >
            <IconComponent className="w-5 h-5" />
            </div>
            );
        })}
    </div>
      {/* Botones de acción y redes */}
    </div>
    

    {/* COLUMNA 2 (Derecha): Tu foto */}
    <div className="flex justify-center md:justify-end">
      <img src={profilePic} alt="Profile" className="rounded-full w-48 h-48 object-cover border-2 border-accent" />
    </div>
  </div> {/* Aquí recién se cierra el contenedor de 2 columnas */}
</section>
  );
}