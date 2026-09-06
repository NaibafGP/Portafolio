import type { PersonalInfo, Project, SkillCategory, Education, Experience} from "../types/portafolio";

export const personalInfo: PersonalInfo = {
    name: "Fabian Garcia",
    title: "FullStack Developer",
    summary: "Desarrollador de software enfocado en construir aplicaciones robustas, limpias y bien estructuradas. Cuento con experiencia en el backend con Java y Spring Boot (arquitectura en capas, APIs REST y control transaccional) y en mobile con Kotlin y Jetpack Compose. Actualmente integro este conocimiento con React y TypeScript para crear soluciones Full-Stack modernas y de alto rendimiento. Apasionado por las buenas prácticas y la resolución de problemas reales.",
    email: "fgp2324@gmail.com",
    phone: "+51 933 513 253",
    github: "https://github.com/NaibafGP",
    linkedin: "https://www.linkedin.com/in/fgp2324/",
    availableForHire: true
}

export const projects: Project[] = [{
    id: "2",
    title: "Pvz Wiki",
    description: "App Móvil de la Wiki de Plantas vs Zombies, desarrollada con Kotlin y Jetpack Compose, utilizando una API REST creada desde cero para obtener la informacion de la base de datos en tiempo real",
    tags: ["Kotlin", "Jetpack Compose", "StateFlow", "MySQL", "MVVM"],
    highlights: ["Highlight 1", "Highlight 2"],
    githubLink: "https://github.com/NaibafGP/PvzWiki"
},
    {
    id: "1",
    title: "API REST de Gestión de Tienda",
    description: "Simulación de una API REST para la gestión de una tienda, desarrollada con SpringBoot y JPA, se desarrollo desde cero la base de datos y se implementaron los endpoints para la gestión de productos, clientes y pedidos",
    tags: ["SpringBoot", "JPA", "MySQL", "H2", "JUnit"],
    highlights: ["Highlight 1", "Highlight 2"],
    githubLink: "https://github.com/NaibafGP/tienda-backend"
},
    {
    id: "3",
    title: "Sistema de Gestión de Supermercado",
    description: "Aplicación de escritorio diseñada para optimizar el registro de clientes y productos en un supermercado, desarrollada con C# (.NET) y WindowsForms, enfocada en la programación orientada a objetos",
    tags: ["C#", ".NET", "WindowsForms"],
    highlights: ["Highlight 1", "Highlight 2"],
    githubLink: "https://github.com/NaibafGP/Sistema-Gestion-Supermercado"
}

]

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        skills: ["React", "TypeScript", "TailwindCSS", "HTML", "CSS"]
    },
    {
        category: "Backend",
        skills: ["SpringBoot", "JPA", "MySQL", "H2", "JUnit"]
    },
    {
        category: "Mobile",
        skills: ["Kotlin", "Jetpack Compose", "StateFlow", "MySQL", "MVVM"]
    },
    {
        category: "Desktop",
        skills: ["C#", ".NET", "WindowsForms"]
    }
]

export const experiences: Experience[] = [
    {
        company: "Coolbox",
        role: "Operario de Almacén",
        period: "Julio 2025 - Mayo 2026",
        description: ["Realicé el inventario diario de los productos en almacén.", "Fui encargado de realizar el picking, packing y envío de productos.", "Mantuve el orden y limpieza del almacén."]
    }
]

export const education: Education[] = [
    {
        institution: "Instituto San Ignacio de Loyola",
        degree: "Desarrollo de Sistemas de la Información",
        period: "2023 - 2026",
        certifications: ["Tecnologías de Desarrollo de Software", "Análisis y Diseño de Sistemas de Información", "Despliegue y Calidad de Sistemas de Información",  "EF SET English Certificate — B2 (Upper Intermediate)"]
    }
]

