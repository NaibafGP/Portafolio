import type { Language, SkillCategoryGroup } from '../types/portafolio';
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
  SiPython,
  SiOdoo,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { Mail, ShieldCheck } from 'lucide-react';

export function getSkillsCategories(lang: Language): SkillCategoryGroup[] {
  return [
    {
      category: 'Backend & APIs',
      description: lang === 'es' ? 'APIs REST, microservicios y bases de datos' : 'REST APIs, microservices & databases',
      skills: [
        { name: 'Java', icon: FaJava },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Python', icon: SiPython },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
      ],
    },
    {
      category: 'Mobile',
      description: lang === 'es' ? 'Android nativo y arquitectura reactiva' : 'Native Android & reactive architecture',
      skills: [
        { name: 'Kotlin', icon: SiKotlin },
        { name: 'Jetpack Compose', icon: SiJetpackcompose },
        { name: 'Android SDK', icon: SiAndroid },
        { name: 'Coroutines & StateFlow', icon: SiKotlin },
      ],
    },
    {
      category: 'Web Frontend',
      description: lang === 'es' ? 'Interfaces web modernas y tipado estricto' : 'Modern web UI & strict typing',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML5 / CSS3', icon: SiHtml5 },
      ],
    },
    {
      category: lang === 'es' ? 'ERP, Sistemas & Herramientas' : 'ERP, Systems & Tools',
      description: lang === 'es' ? 'Módulos ERP, testing y soporte TI' : 'ERP modules, testing & IT infrastructure',
      skills: [
        { name: 'Odoo 20', icon: SiOdoo },
        { name: 'JUnit 5', icon: SiJunit5 },
        { name: 'C# / .NET', icon: TbBrandCSharp },
        { name: 'Mailcow', icon: Mail },
        { name: 'Datto RMM / Kaseya', icon: ShieldCheck },
      ],
    },
  ];
}
