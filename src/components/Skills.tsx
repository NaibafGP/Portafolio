import type { IconType } from 'react-icons';
import { 
  SiSpringboot, 
  SiMysql, 
  SiPostgresql, 
  SiJunit5, 
  SiKotlin, 
  SiJetpackcompose, 
  SiAndroid, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiDotnet, 
  SiGit 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
  level: 1 | 2 | 3;
}

interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

const skillsCategories: SkillCategoryGroup[] = [
  {
    category: 'Backend',
    description: 'Arquitectura, APIs y BD',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00', level: 3 },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', level: 3 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 3 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 2 },
      { name: 'JUnit 5', icon: SiJunit5, color: '#25A162', level: 3 },
    ],
  },
  {
    category: 'Mobile',
    description: 'Android nativo y reactivo',
    skills: [
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF', level: 3 },
      { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4', level: 3 },
      { name: 'Android SDK', icon: SiAndroid, color: '#3DDC84', level: 3 },
    ],
  },
  {
    category: 'Web',
    description: 'Frontend moderno',
    skills: [
      { name: 'React', icon: SiReact, color: '#00D8FF', level: 2 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 2 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', level: 2 },
      { name: 'HTML5 / CSS3', icon: SiHtml5, color: '#E34F26', level: 3 },
    ],
  },
  {
    category: 'Desktop & Tools',
    description: 'Software y versionado',
    skills: [
      { name: 'C#', icon: TbBrandCSharp, color: '#239120', level: 2 },
      { name: '.NET', icon: SiDotnet, color: '#512BD4', level: 2 },
      { name: 'Git & GitHub', icon: SiGit, color: '#F05032', level: 3 },
    ],
  },
];

export default function Skills() {
  const getLevelLabel = (level: number) => {
    if (level === 3) return 'Avanzado';
    if (level === 2) return 'Intermedio';
    return 'Básico';
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Cabecera y Leyenda */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-accent font-mono text-sm tracking-wider uppercase">// Arsenal Técnico</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">Habilidades Técnicas</h2>
        </div>

        {/* Leyenda de dominio */}
        <div className="inline-flex flex-wrap items-center gap-4 bg-surface border border-border px-4 py-2.5 rounded-xl text-xs font-mono text-secondary self-start md:self-auto shadow-sm">
          <span className="text-primary font-semibold">Dominio:</span>

          <div className="flex items-center gap-1.5" title="1 punto: Nivel Básico">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-2 h-2 rounded-full bg-border"></span>
              <span className="w-2 h-2 rounded-full bg-border"></span>
            </div>
            <span>Básico</span>
          </div>

          <div className="flex items-center gap-1.5" title="2 puntos: Nivel Intermedio">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-2 h-2 rounded-full bg-border"></span>
            </div>
            <span>Intermedio</span>
          </div>

          <div className="flex items-center gap-1.5" title="3 puntos: Nivel Avanzado">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-2 h-2 rounded-full bg-accent"></span>
            </div>
            <span>Avanzado</span>
          </div>
        </div>
      </div>

      {/* Cuadrícula de 4 Columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsCategories.map((group) => (
          <div
            key={group.category}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-accent/5 flex flex-col justify-between"
          >
            <div>
              <div className="border-b border-border pb-4 mb-5">
                <h3 className="text-xl font-bold text-primary">{group.category}</h3>
                <p className="text-xs font-mono text-secondary mt-1">{group.description}</p>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  const label = getLevelLabel(skill.level);

                  return (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between group"
                      title={`${skill.name} — Nivel: ${label}`}
                    >
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-8 h-8 rounded-lg bg-page border border-border flex items-center justify-center transition-transform group-hover:scale-110"
                        >
                          <Icon className="w-4 h-4" style={{ color: skill.color }} />
                        </span>
                        <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {/* Indicador de 3 puntos */}
                      <div className="flex items-center gap-1 pl-2">
                        {[1, 2, 3].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              dot <= skill.level ? 'bg-accent' : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
