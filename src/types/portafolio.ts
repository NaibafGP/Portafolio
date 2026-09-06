import type { IconType } from 'react-icons';

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  availableForHire: boolean;
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveDemo?: string;
  image?: string;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  certifications: string[];
  achievements?: string[];
}