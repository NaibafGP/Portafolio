import type { PersonalInfo, Project, Education, Experience, Language } from '../types/portafolio';

export interface PortfolioContent {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}

export const portfolioByLang: Record<Language, PortfolioContent> = {
  es: {
    personalInfo: {
      name: 'Fabian Garcia',
      title: 'Backend, Odoo & Mobile Developer',
      summary:
        'Desarrollador de software enfocado en Backend (Java / Spring Boot, Python / Odoo) y Mobile (Kotlin / Jetpack Compose). Actualmente trabajo desarrollando módulos empresariales en Odoo, participando en nuestra migración hacia Odoo 20 y administrando infraestructura TI (Mailcow, Datto/Kaseya). Apasionado por la arquitectura en capas, la integridad transaccional y la resolución de problemas reales.',
      email: 'fgp2324@gmail.com',
      phone: '+51 933 513 253',
      github: 'https://github.com/NaibafGP',
      linkedin: 'https://www.linkedin.com/in/fgp2324/',
      availableForHire: true,
      location: 'Lima, Perú',
    },
    projects: [
      {
        id: '1',
        title: 'API REST de Gestión de Tienda',
        description:
          'API REST en arquitectura de 4 capas (Controller / Service / Repository / Entity) desarrollada con Spring Boot y JPA. Implementa control transaccional (@Transactional) para prevenir inconsistencias de stock ante concurrencia, DTOs desacoplados, validación con Bean Validation, manejo global de errores (@RestControllerAdvice) y pruebas unitarias con JUnit 5 y Mockito.',
        tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'H2', 'JUnit 5', 'Mockito'],
        githubLink: 'https://github.com/NaibafGP/tienda-backend',
        previewType: 'api',
      },
      {
        id: '2',
        title: 'PvZ Wiki — App Móvil',
        description:
          'Aplicación nativa Android construida bajo arquitectura MVVM y UI 100% declarativa con Kotlin y Jetpack Compose. Gestiona el estado reactivo mediante StateFlow y realiza consumo asíncrono no bloqueante con Coroutines contra una API REST propia conectada a MySQL.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'StateFlow', 'Coroutines', 'MySQL'],
        githubLink: 'https://github.com/NaibafGP/PvzWiki',
        previewType: 'mobile',
      },
      {
        id: '3',
        title: 'Sistema de Gestión de Supermercado',
        description:
          'Aplicación de escritorio desarrollada en C# (.NET) y Windows Forms orientada a optimizar el registro de clientes, control de inventario y flujo de ventas aplicando Programación Orientada a Objetos y diseño modular.',
        tags: ['C#', '.NET', 'Windows Forms', 'OOP'],
        githubLink: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        previewType: 'desktop',
      },
    ],
    experiences: [
      {
        company: 'Cisclon S.A.C.',
        role: 'Programador Odoo & Soporte TI (Helpdesk)',
        period: 'Septiembre 2026 — Actualidad',
        description: [
          'Desarrollo y personalización de módulos empresariales para Odoo utilizando Python, ORM, vistas XML y PostgreSQL.',
          'Participación activa en el proceso de migración y adaptación de flujos hacia Odoo 20.',
          'Administración del servidor de correo corporativo Mailcow (webmail, creación de cuentas, dominios y soporte a usuarios).',
          'Soporte técnico Helpdesk y gestión/monitoreo remoto de endpoints mediante Datto / Kaseya.',
        ],
        technologies: ['Odoo 20', 'Python', 'PostgreSQL', 'Mailcow', 'Datto Kaseya'],
      },
      {
        company: 'Coolbox',
        role: 'Operario de Almacén',
        period: 'Julio 2025 — Mayo 2026',
        description: [
          'Control de inventario diario y verificación de existencias mediante el sistema de gestión de almacén.',
          'Ejecución de procesos logísticos de picking, packing, recepción y despacho de mercadería.',
          'Mantenimiento del orden, trazabilidad y exactitud operativa dentro del almacén.',
        ],
        technologies: ['WMS / Inventario', 'Picking & Packing', 'Control de Stock'],
      },
    ],
    education: [
      {
        institution: 'Instituto San Ignacio de Loyola (ISIL)',
        degree: 'Desarrollo de Sistemas de la Información',
        period: '2023 — 2026',
        certifications: [
          'Tecnologías de Desarrollo de Software (ISIL)',
          'Análisis y Diseño de Sistemas de Información (ISIL)',
          'Despliegue y Calidad de Sistemas de Información (ISIL)',
          'EF SET English Certificate — B2 (Upper Intermediate)',
        ],
      },
    ],
  },
  en: {
    personalInfo: {
      name: 'Fabian Garcia',
      title: 'Backend, Odoo & Mobile Developer',
      summary:
        'Software developer focused on Backend Engineering (Java / Spring Boot, Python / Odoo) and Native Mobile (Kotlin / Jetpack Compose). Currently building custom Odoo ERP modules, contributing to our migration to Odoo 20, and managing IT infrastructure (Mailcow, Datto/Kaseya). Focused on clean layered architecture, transactional integrity, and solving real business problems.',
      email: 'fgp2324@gmail.com',
      phone: '+51 933 513 253',
      github: 'https://github.com/NaibafGP',
      linkedin: 'https://www.linkedin.com/in/fgp2324/',
      availableForHire: true,
      location: 'Lima, Peru',
    },
    projects: [
      {
        id: '1',
        title: 'Store Management REST API',
        description:
          '4-layer REST API (Controller / Service / Repository / Entity) built with Spring Boot and JPA. Features transactional concurrency control (@Transactional) to prevent stock race conditions, decoupled DTOs, Bean Validation, centralized exception handling (@RestControllerAdvice), and unit tests with JUnit 5 and Mockito.',
        tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'H2', 'JUnit 5', 'Mockito'],
        githubLink: 'https://github.com/NaibafGP/tienda-backend',
        previewType: 'api',
      },
      {
        id: '2',
        title: 'PvZ Wiki — Android App',
        description:
          'Native Android application built with MVVM architecture and a 100% declarative UI using Kotlin and Jetpack Compose. Manages reactive state via StateFlow and performs non-blocking async calls with Kotlin Coroutines against a custom REST API and MySQL database.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'StateFlow', 'Coroutines', 'MySQL'],
        githubLink: 'https://github.com/NaibafGP/PvzWiki',
        previewType: 'mobile',
      },
      {
        id: '3',
        title: 'Supermarket Management System',
        description:
          'Desktop application engineered with C# (.NET) and Windows Forms to streamline customer registration, inventory tracking, and point-of-sale workflows using Object-Oriented Programming principles.',
        tags: ['C#', '.NET', 'Windows Forms', 'OOP'],
        githubLink: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        previewType: 'desktop',
      },
    ],
    experiences: [
      {
        company: 'Cisclon S.A.C.',
        role: 'Odoo Developer & IT Support Specialist',
        period: 'September 2026 — Present',
        description: [
          'Developing and customizing enterprise Odoo modules using Python, ORM, XML views, and PostgreSQL.',
          'Actively participating in the system migration and workflow adaptation toward Odoo 20.',
          'Administering corporate Mailcow email servers (webmail, user provisioning, and mail management).',
          'Providing Helpdesk technical support and endpoint monitoring/management with Datto / Kaseya RMM.',
        ],
        technologies: ['Odoo 20', 'Python', 'PostgreSQL', 'Mailcow', 'Datto Kaseya'],
      },
      {
        company: 'Coolbox',
        role: 'Warehouse Operations Associate',
        period: 'July 2025 — May 2026',
        description: [
          'Executed daily inventory counts and stock reconciliation using the company warehouse management system.',
          'Handled end-to-end picking, packing, receiving, and order dispatch workflows.',
          'Maintained operational organization and stock traceability across warehouse areas.',
        ],
        technologies: ['WMS / Inventory', 'Picking & Packing', 'Stock Control'],
      },
    ],
    education: [
      {
        institution: 'Instituto San Ignacio de Loyola (ISIL)',
        degree: 'Information Systems Development',
        period: '2023 — 2026',
        certifications: [
          'Software Development Technologies (ISIL)',
          'Information Systems Analysis & Design (ISIL)',
          'Information Systems Deployment & Quality (ISIL)',
          'EF SET English Certificate — B2 (Upper Intermediate)',
        ],
      },
    ],
  },
};

export const uiLabels: Record<
  Language,
  {
    nav: { projects: string; skills: string; about: string; downloadCv: string; cvShort: string };
    hero: {
      explore: string;
      status: string;
      terminalFile: string;
      roleLabel: string;
      englishLabel: string;
      focusLabel: string;
    };
    projects: { tagline: string; heading: string; viewGithub: string };
    skills: { tagline: string; heading: string };
    about: {
      tagline: string;
      heading: string;
      tabs: { about: string; experience: string; education: string; certifications: string };
      badgeTitle: string;
      badgeSubtitle: string;
      highlights: { label: string; value: string }[];
    };
    footer: { builtWith: string; whatsappTitle: string; emailTitle: string };
  }
> = {
  es: {
    nav: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre Mí',
      downloadCv: 'Descargar ',
      cvShort: 'CV',
    },
    hero: {
      explore: 'Explorar Proyectos',
      status: 'Disponible para remoto y nuevos retos',
      terminalFile: 'fabian_profile.py',
      roleLabel: 'Backend & Odoo ERP',
      englishLabel: 'Inglés B2 (EF SET)',
      focusLabel: 'Java · Python · Odoo 20 · Kotlin',
    },
    projects: {
      tagline: '// Portafolio de Ingeniería',
      heading: 'Proyectos Destacados',
      viewGithub: 'Ver en GitHub',
    },
    skills: {
      tagline: '// Arsenal Técnico',
      heading: 'Habilidades Técnicas',
    },
    about: {
      tagline: '// Conóceme',
      heading: 'Sobre Mí',
      tabs: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        education: 'Educación',
        certifications: 'Certificaciones',
      },
      badgeTitle: 'Ingeniería Backend & ERP',
      badgeSubtitle: 'Código limpio, sistemas empresariales y aprendizaje continuo',
      highlights: [
        { label: 'Actual', value: 'Odoo 20 & Soporte TI @ Cisclon' },
        { label: 'Formación', value: 'ISIL (2023 — 2026)' },
        { label: 'Idiomas', value: 'Español (Nativo) · Inglés (B2)' },
      ],
    },
    footer: {
      builtWith: 'Construido con React, TypeScript y Tailwind CSS.',
      whatsappTitle: 'Escribir por WhatsApp',
      emailTitle: 'Enviar correo electrónico',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      downloadCv: 'Download ',
      cvShort: 'CV',
    },
    hero: {
      explore: 'Explore Projects',
      status: 'Open to remote & relocation opportunities',
      terminalFile: 'fabian_profile.py',
      roleLabel: 'Backend & Odoo ERP',
      englishLabel: 'English B2 (EF SET)',
      focusLabel: 'Java · Python · Odoo 20 · Kotlin',
    },
    projects: {
      tagline: '// Engineering Portfolio',
      heading: 'Featured Projects',
      viewGithub: 'View on GitHub',
    },
    skills: {
      tagline: '// Tech Arsenal',
      heading: 'Technical Skills',
    },
    about: {
      tagline: '// Get to know me',
      heading: 'About Me',
      tabs: {
        about: 'About me',
        experience: 'Experience',
        education: 'Education',
        certifications: 'Certifications',
      },
      badgeTitle: 'Backend & ERP Engineering',
      badgeSubtitle: 'Clean architecture, business systems & continuous growth',
      highlights: [
        { label: 'Current', value: 'Odoo 20 & IT Support @ Cisclon' },
        { label: 'Education', value: 'ISIL (2023 — 2026)' },
        { label: 'Languages', value: 'Spanish (Native) · English (B2)' },
      ],
    },
    footer: {
      builtWith: 'Built with React, TypeScript, and Tailwind CSS.',
      whatsappTitle: 'Message on WhatsApp',
      emailTitle: 'Send an email',
    },
  },
};
