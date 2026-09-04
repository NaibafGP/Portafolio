export type PersonalInfo = {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  availebleForHire: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  githubLink: string;
  liveLink?: string;
};

export type SkillCategory = {
    category: string;
    skills: string[];
}

export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export type Education = {
    institution: string;
    degree: string;
    period: string;
    certifications: string[];
}