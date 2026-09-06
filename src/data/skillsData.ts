import type { SkillCategoryGroup } from '../types/portafolio';
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

export const skillsCategories: SkillCategoryGroup[] = [
  {
    category: 'Backend',
    description: 'Arquitectura, APIs y BD',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'JUnit 5', icon: SiJunit5, color: '#25A162' },
    ],
  },
  {
    category: 'Mobile',
    description: 'Android nativo y reactivo',
    skills: [
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4' },
      { name: 'Android SDK', icon: SiAndroid, color: '#3DDC84' },
    ],
  },
  {
    category: 'Web',
    description: 'Frontend moderno',
    skills: [
      { name: 'React', icon: SiReact, color: '#00D8FF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5 / CSS3', icon: SiHtml5, color: '#E34F26' },
    ],
  },
  {
    category: 'Desktop & Tools',
    description: 'Software y versionado',
    skills: [
      { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Git & GitHub', icon: SiGit, color: '#F05032' },
    ],
  },
];
