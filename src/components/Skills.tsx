import { skillsCategories } from '../data/skillsData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Cabecera */}
      <div className="mb-12">
        <span className="text-accent font-mono text-sm tracking-wider uppercase">// Arsenal Técnico</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">Habilidades Técnicas</h2>
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

                  return (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 group"
                      title={skill.name}
                    >
                      <span 
                        className="w-8 h-8 rounded-lg bg-page border border-border flex items-center justify-center transition-transform group-hover:scale-110"
                      >
                        <Icon className="w-4 h-4" style={{ color: skill.color }} />
                      </span>
                      <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
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
