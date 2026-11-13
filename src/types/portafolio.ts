import type { ComponentType, CSSProperties } from 'react';

export type Language = 'es' | 'en';

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

export interface ProjectArchitectureLayer {
  name: string;
  responsibility: string;
  tech: string;
}

export interface ProjectDecision {
  title: string;
  explanation: string;
}

export interface ProjectContract {
  method: string;
  path: string;
  request?: string;
  response: string;
  status: number;
}

export interface ProjectArchitecture {
  layers: ProjectArchitectureLayer[];
  decisions: ProjectDecision[];
  contracts?: ProjectContract[];
  githubUrl: string;
}

export interface Project {
  id: string;
  title: string;
  headline?: string;
  description: string;
  tags: string[];
  github: string;
  githubLink: string;
  liveDemo?: string;
  image?: string;
  previewType?: 'api' | 'mobile' | 'desktop';
  architecture?: ProjectArchitecture;
}

export interface SkillItem {
  name: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color?: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id?: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: 'featured' | 'standard';
  description: string[];
  technologies?: string[];
  isCurrent?: boolean;
}

/** Backward-compatible alias for existing components */
export type Experience = ExperienceItem;

export interface Education {
  institution: string;
  degree: string;
  period: string;
  certifications: string[];
  achievements?: string[];
}

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: ExperienceItem[];
  education: Education[];
}

export interface ProjectPreviewLabels {
  apiBadge: string;
  passBadge: string;
  layerArch: string;
  db: string;
  mobileTitle: string;
  uiLayer: string;
  asyncIo: string;
  desktopTitle: string;
  desktopSubtitle: string;
  module1Label: string;
  module1Name: string;
  module2Label: string;
  module2Name: string;
  module3Label: string;
  module3Name: string;
  oopArchitecture: string;
  statusActive: string;
}

export interface UiLabels {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    experience: string;
    projects: string;
    skills: string;
    about: string;
    downloadCv: string;
    cvShort: string;
  };
  hero: {
    explore: string;
    status: string;
    roleLabel?: string;
    englishLabel?: string;
    focusLabel?: string;
    emailTitle: string;
  };
  experience: {
    tagline: string;
    heading: string;
    currentBadge: string;
  };
  projects: {
    tagline: string;
    heading: string;
    viewGithub: string;
    viewArchitecture?: string;
    testApiLive?: string;
    preview: ProjectPreviewLabels;
  };
  skills: {
    tagline: string;
    heading: string;
  };
  about: {
    tagline: string;
    heading: string;
    tabs: {
      about: string;
      education: string;
      certifications: string;
    };
    badgeTitle: string;
    badgeSubtitle: string;
    badgePills?: {
      apisErp: string;
      sqlOrm: string;
    };
    highlights: { label: string; value: string }[];
  };
  footer: {
    builtWith: string;
    whatsappTitle: string;
    emailTitle: string;
    emailCopied?: string;
    phoneCopied?: string;
    copyEmailLabel?: string;
    copyPhoneLabel?: string;
  };
}
