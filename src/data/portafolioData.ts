import type { Language, PortfolioContent, UiLabels } from '../types/portafolio';

export const portfolioByLang: Record<Language, PortfolioContent> = {
  es: {
    personalInfo: {
      name: 'Fabian Garcia',
      title: 'Desarrollador de Software | Backend & Mobile',
      summary:
        'Desarrollador de software con experiencia práctica en ingeniería backend (Java / Spring Boot, Python / Odoo) y desarrollo móvil nativo (Kotlin / Jetpack Compose). En Cisclon S.A.C., desarrollo y personalizo módulos empresariales en Odoo con PostgreSQL, participo activamente en la migración hacia Odoo 20 y gestiono servidores de correo corporativo (Mailcow) y monitoreo con Datto RMM. Mi enfoque técnico prioriza la arquitectura en capas, la consistencia transaccional en bases de datos relacionales y el desarrollo de software confiable para procesos de negocio reales.',
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
        headline: 'API REST empresarial con Spring Boot, JPA y Transacciones ACID',
        description:
          'API REST empresarial estructurada bajo una arquitectura limpia de 4 capas (Controller, Service, Repository, Entity) desarrollada con Spring Boot y JPA. Implementa demarcación transaccional con @Transactional para garantizar consistencia ACID y prevenir condiciones de carrera durante la venta y actualización de stock. Incorpora DTOs desacoplados del modelo de persistencia, validación defensiva con Jakarta Bean Validation, manejo global centralizado de excepciones con @RestControllerAdvice y cobertura de pruebas unitarias en la capa de servicio con JUnit 5 y Mockito.',
        tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'H2', 'JUnit 5', 'Mockito'],
        github: 'https://github.com/NaibafGP/tienda-backend',
        githubLink: 'https://github.com/NaibafGP/tienda-backend',
        previewType: 'api',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/tienda-backend',
          layers: [
            {
              name: 'Controller',
              responsibility: 'Expone endpoints RESTful, valida payloads entrantes y serializa respuestas DTO.',
              tech: 'Spring Web · Jakarta Validation',
            },
            {
              name: 'Service',
              responsibility: 'Ejecuta la lógica de negocio, gestiona límites transaccionales (@Transactional) y coordina persistencia.',
              tech: 'Spring Service · Spring Tx',
            },
            {
              name: 'Repository',
              responsibility: 'Abstrae el acceso a datos mediante Spring Data JPA, paginación y consultas derivadas.',
              tech: 'Spring Data JPA · Hibernate',
            },
            {
              name: 'Entity',
              responsibility: 'Mapeo de modelos relacionales desacoplados de los contratos de la API pública.',
              tech: 'JPA Entities · MySQL / H2',
            },
          ],
          decisions: [
            {
              title: 'Aislamiento Transaccional ACID',
              explanation:
                'Se configuró @Transactional en operaciones de checkout para asegurar que la deducción de inventario y la creación de órdenes ocurran de manera atómica, evitando sobreventas ante peticiones concurrentes.',
            },
            {
              title: 'Desacoplamiento Estricto con DTOs',
              explanation:
                'Las entidades de persistencia no se exponen a la capa web; los DTOs filtran campos internos, previenen referencias circulares y aseguran la estabilidad del contrato API.',
            },
            {
              title: 'Manejo Global de Excepciones',
              explanation:
                'Mediante @RestControllerAdvice se interceptan excepciones del dominio (e.g., ResourceNotFound, MethodArgumentNotValid), retornando respuestas JSON estandarizadas con códigos HTTP semánticos.',
            },
          ],
          contracts: [
            {
              method: 'GET',
              path: '/api/v1/products',
              response: '[ { "id": 101, "nombre": "Teclado Mecánico", "stock": 25, "precio": 79.99 } ]',
              status: 200,
            },
            {
              method: 'POST',
              path: '/api/v1/orders',
              request: '{ "clienteId": 12, "items": [ { "productoId": 101, "cantidad": 2 } ] }',
              response: '{ "ordenId": 5042, "estado": "CONFIRMADO", "total": 159.98, "transaccionId": "tx_981a2f" }',
              status: 201,
            },
            {
              method: 'GET',
              path: '/api/v1/orders/5042',
              response: '{ "ordenId": 5042, "estado": "CONFIRMADO", "total": 159.98, "itemsCount": 1 }',
              status: 200,
            },
          ],
        },
      },
      {
        id: '2',
        title: 'PvZ Wiki — App Móvil',
        headline: 'App Android Nativa con Jetpack Compose, MVVM y StateFlow',
        description:
          'Aplicación móvil nativa para Android construida con Kotlin bajo arquitectura MVVM y una interfaz de usuario 100% declarativa desarrollada en Jetpack Compose. Implementa el patrón Unidirectional Data Flow (UDF) gestionando el estado reactivo con StateFlow para mantener la interfaz fluida sin bloquear el hilo principal. Realiza operaciones de red asíncronas no bloqueantes mediante Kotlin Coroutines (Dispatchers.IO) consumiendo una API REST personalizada vinculada a una base de datos MySQL en Alwaysdata.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'StateFlow', 'Coroutines', 'REST API', 'MySQL'],
        github: 'https://github.com/NaibafGP/PvzWiki',
        githubLink: 'https://github.com/NaibafGP/PvzWiki',
        previewType: 'mobile',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/PvzWiki',
          layers: [
            {
              name: 'UI / Compose',
              responsibility: 'Componentes declarativos en Jetpack Compose que renderizan según el estado reactivo.',
              tech: 'Jetpack Compose · Material 3',
            },
            {
              name: 'ViewModel',
              responsibility: 'Gestiona el estado de pantalla con StateFlow y procesa eventos del ciclo de vida.',
              tech: 'Android ViewModel · StateFlow',
            },
            {
              name: 'Repository & I/O',
              responsibility: 'Ejecuta peticiones asíncronas de red en segundo plano con Coroutines en Dispatchers.IO.',
              tech: 'Kotlin Coroutines · Retrofit / OkHttp',
            },
            {
              name: 'Remote DB',
              responsibility: 'Persistencia externa relacional que aloja el catálogo y detalles de entidades.',
              tech: 'MySQL · Alwaysdata Cloud',
            },
          ],
          decisions: [
            {
              title: 'Arquitectura Declarativa con Jetpack Compose',
              explanation:
                'Se reemplazaron los layouts tradicionales en XML por Compose para reducir el código boilerplate, unificar el lenguaje en Kotlin y acelerar la renderización reactiva.',
            },
            {
              title: 'Gestión Reactiva de Estado con StateFlow',
              explanation:
                'El ViewModel expone StateFlow inmutable a la interfaz, asegurando que las recomposiciones ocurran únicamente ante cambios de datos reales sin fugas de memoria.',
            },
          ],
        },
      },
      {
        id: '3',
        title: 'Sistema de Gestión de Supermercado',
        headline: 'Sistema de Escritorio Modular en C# .NET y Windows Forms',
        description:
          'Sistema de escritorio empresarial desarrollado en C# y .NET Windows Forms diseñado para la administración integral de inventario comercial, gestión de clientes y operaciones de punto de venta (POS). Aplica principios de diseño orientado a objetos (encapsulamiento, separación de responsabilidades y modelos de dominio estructurados) para asegurar un control transaccional estricto de existencias, cálculo automatizado de totales e impuestos y generación de comprobantes de venta.',
        tags: ['C#', '.NET', 'Windows Forms', 'OOP', 'Desktop Architecture'],
        github: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        githubLink: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        previewType: 'desktop',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
          layers: [
            {
              name: 'UI / Forms',
              responsibility: 'Formularios interactivos con validación de entradas de usuario y presentación gráfica.',
              tech: 'C# · Windows Forms',
            },
            {
              name: 'Domain Models',
              responsibility: 'Modelos de dominio encapsulados (Producto, Cliente, Venta, DetalleVenta) con invariantes de negocio.',
              tech: 'C# OOP · Encapsulation',
            },
            {
              name: 'Business Services',
              responsibility: 'Controladores de módulos que coordinan stock, cálculos de impuestos y flujo de venta POS.',
              tech: '.NET Business Logic',
            },
            {
              name: 'Data Access',
              responsibility: 'Almacenamiento y serialización de registros de transacciones y catálogo comercial.',
              tech: 'ADO.NET / Local Storage',
            },
          ],
          decisions: [
            {
              title: 'Encapsulamiento del Modelo de Dominio',
              explanation:
                'Las reglas de negocio (e.g., cálculo de descuentos, validación de stock y recargos fiscales) se concentran en las clases de dominio, impidiendo lógica dispersa en eventos de formularios.',
            },
            {
              title: 'Flujo POS Transaccional',
              explanation:
                'Separación modular entre Inventario, Clientes y Facturación, garantizando la verificación de disponibilidad antes de confirmar cualquier transacción de venta.',
            },
          ],
        },
      },
    ],
    experiences: [
      {
        id: 'exp-cisclon',
        company: 'Cisclon S.A.C.',
        role: 'Programador Odoo & Soporte TI (Helpdesk)',
        period: 'Septiembre 2026 — Actualidad',
        location: 'Lima, Perú',
        type: 'featured',
        isCurrent: true,
        description: [
          'Desarrollo y personalización de módulos ERP empresariales en Odoo utilizando Python, Odoo ORM, vistas XML y modelos de datos relacionales sobre PostgreSQL.',
          'Participación activa en el análisis funcional, adaptación de flujos comerciales e inventario y migración técnica hacia Odoo 20.',
          'Administración y mantenimiento del servidor de correo corporativo Mailcow (aprovisionamiento de buzones, gestión de dominios, políticas antispam y soporte a usuarios).',
          'Soporte técnico Helpdesk a usuarios finales y monitoreo preventivo de endpoints y servidores mediante Datto RMM / Kaseya.',
        ],
        technologies: ['Odoo 20', 'Python', 'PostgreSQL', 'Mailcow', 'Datto RMM / Kaseya'],
      },
      {
        id: 'exp-coolbox',
        company: 'Coolbox',
        role: 'Operario de Almacén',
        period: 'Julio 2025 — Mayo 2026',
        location: 'Lima, Perú',
        type: 'standard',
        description: [
          'Control diario de existencias y conciliación de stock físico contra el sistema digital de gestión de almacenes (WMS).',
          'Ejecución de procesos de recepción, picking, packing y despacho con estricta trazabilidad de órdenes y control de mermas.',
          'Comprensión operativa directa de la cadena de suministro y flujos de inventario que hoy fundamenta y enriquece el diseño de módulos ERP y software de punto de venta.',
        ],
        technologies: ['WMS / Inventario', 'Picking & Packing', 'Control de Stock', 'Logística'],
      },
    ],
    education: [
      {
        institution: 'Instituto San Ignacio de Loyola (ISIL)',
        degree: 'Desarrollo de Sistemas de Información',
        period: '2023 — 2026',
        certifications: [
          'Tecnologías de Desarrollo de Software (ISIL)',
          'Análisis y Diseño de Sistemas de Información (ISIL)',
          'Implantación y Calidad de Sistemas de Información (ISIL)',
          'EF SET English Certificate — B2 (Upper Intermediate)',
        ],
      },
    ],
  },
  en: {
    personalInfo: {
      name: 'Fabian Garcia',
      title: 'Software Developer | Backend & Mobile',
      summary:
        'Software developer with hands-on experience in backend engineering (Java / Spring Boot, Python / Odoo) and native Android development (Kotlin / Jetpack Compose). At Cisclon S.A.C., I develop custom ERP modules using Python and PostgreSQL, actively contribute to the company migration toward Odoo 20, and administer corporate email servers (Mailcow) and Datto RMM infrastructure. My engineering approach emphasizes clean layered architecture, transactional integrity in relational databases, and building robust, maintainable systems that power real-world business workflows.',
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
        headline: 'Layered REST API with Spring Boot, JPA & ACID Transactions',
        description:
          'Enterprise REST API built on a clean 4-tier architecture (Controller, Service, Repository, Entity) using Spring Boot and JPA. Implements robust transactional boundaries via @Transactional to enforce ACID consistency and eliminate stock race conditions during concurrent checkout operations. Features decoupled DTO request/response schemas, defensive payload validation with Jakarta Bean Validation, centralized exception handling via @RestControllerAdvice, and comprehensive service-layer unit testing with JUnit 5 and Mockito.',
        tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'H2', 'JUnit 5', 'Mockito'],
        github: 'https://github.com/NaibafGP/tienda-backend',
        githubLink: 'https://github.com/NaibafGP/tienda-backend',
        previewType: 'api',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/tienda-backend',
          layers: [
            {
              name: 'Controller',
              responsibility: 'Exposes RESTful endpoints, validates incoming payloads, and serializes DTO responses.',
              tech: 'Spring Web · Jakarta Validation',
            },
            {
              name: 'Service',
              responsibility: 'Executes domain business logic, enforces transactional boundaries (@Transactional), and coordinates data flow.',
              tech: 'Spring Service · Spring Tx',
            },
            {
              name: 'Repository',
              responsibility: 'Abstracts database persistence using Spring Data JPA derived queries and pagination.',
              tech: 'Spring Data JPA · Hibernate',
            },
            {
              name: 'Entity',
              responsibility: 'Relational schema mapping decoupled from public API contracts.',
              tech: 'JPA Entities · MySQL / H2',
            },
          ],
          decisions: [
            {
              title: 'ACID Transactional Isolation',
              explanation:
                'Configured @Transactional boundaries across checkout routines to guarantee atomic inventory decrement and order generation, preventing concurrency overbooking.',
            },
            {
              title: 'Strict DTO Decoupling',
              explanation:
                'Database entities are strictly decoupled from public web contracts using DTOs, avoiding entity leak and eliminating serialization cycles.',
            },
            {
              title: 'Centralized Exception Handling',
              explanation:
                'Unified @RestControllerAdvice maps domain exceptions (ResourceNotFound, MethodArgumentNotValid) into RFC-7807 problem payloads with accurate HTTP status codes.',
            },
          ],
          contracts: [
            {
              method: 'GET',
              path: '/api/v1/products',
              response: '[ { "id": 101, "nombre": "Mechanical Keyboard", "stock": 25, "precio": 79.99 } ]',
              status: 200,
            },
            {
              method: 'POST',
              path: '/api/v1/orders',
              request: '{ "clienteId": 12, "items": [ { "productoId": 101, "cantidad": 2 } ] }',
              response: '{ "ordenId": 5042, "estado": "CONFIRMED", "total": 159.98, "transaccionId": "tx_981a2f" }',
              status: 201,
            },
            {
              method: 'GET',
              path: '/api/v1/orders/5042',
              response: '{ "ordenId": 5042, "estado": "CONFIRMED", "total": 159.98, "itemsCount": 1 }',
              status: 200,
            },
          ],
        },
      },
      {
        id: '2',
        title: 'PvzWiki — Android App',
        headline: 'Native Android App with Jetpack Compose, MVVM & StateFlow',
        description:
          'Native Android application engineered in Kotlin utilizing MVVM architecture and a 100% declarative UI built with Jetpack Compose. Employs Unidirectional Data Flow (UDF) with StateFlow for reactive, non-blocking UI state management. Offloads network I/O to background threads using Kotlin Coroutines (Dispatchers.IO), consuming a custom REST API backed by a remote MySQL database hosted on Alwaysdata.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'StateFlow', 'Coroutines', 'REST API', 'MySQL'],
        github: 'https://github.com/NaibafGP/PvzWiki',
        githubLink: 'https://github.com/NaibafGP/PvzWiki',
        previewType: 'mobile',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/PvzWiki',
          layers: [
            {
              name: 'UI / Compose',
              responsibility: 'Declarative Compose functions rendering UI states and dispatching user interaction events.',
              tech: 'Jetpack Compose · Material 3',
            },
            {
              name: 'ViewModel',
              responsibility: 'Manages lifecycle-aware UI state via StateFlow and processes user actions.',
              tech: 'Android ViewModel · StateFlow',
            },
            {
              name: 'Repository & I/O',
              responsibility: 'Coordinates asynchronous background network requests using Coroutines on Dispatchers.IO.',
              tech: 'Kotlin Coroutines · Retrofit / OkHttp',
            },
            {
              name: 'Remote DB',
              responsibility: 'Remote relational persistence optimized for catalog and character lookups.',
              tech: 'MySQL · Alwaysdata Cloud',
            },
          ],
          decisions: [
            {
              title: 'Declarative UI with Jetpack Compose',
              explanation:
                'Migrated from legacy XML view hierarchies to 100% Jetpack Compose, achieving a single language paradigm and predictable UI state reconciliation.',
            },
            {
              title: 'Reactive Unidirectional Data Flow',
              explanation:
                'Decoupled business logic into Android ViewModels exposing read-only StateFlow streams, preventing state desynchronization and lifecycle leaks.',
            },
          ],
        },
      },
      {
        id: '3',
        title: 'Supermarket Management System',
        headline: 'Modular Desktop Management System in C# .NET & WinForms',
        description:
          'Enterprise desktop application engineered with C# and .NET Windows Forms for integrated inventory management, customer administration, and point-of-sale (POS) checkout operations. Applies foundational Object-Oriented Programming (OOP) principles—encapsulation, domain separation, and structured models—to enforce rigorous stock tracking, automated taxation/total calculation, and sales receipt logging.',
        tags: ['C#', '.NET', 'Windows Forms', 'OOP', 'Desktop Architecture'],
        github: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        githubLink: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
        previewType: 'desktop',
        architecture: {
          githubUrl: 'https://github.com/NaibafGP/Sistema-Gestion-Supermercado',
          layers: [
            {
              name: 'UI / Forms',
              responsibility: 'Desktop user forms with real-time input validation, event handlers, and data binding.',
              tech: 'C# · Windows Forms',
            },
            {
              name: 'Domain Models',
              responsibility: 'Encapsulated domain entities (Product, Customer, Sale, SaleDetail) enforcing invariant business rules.',
              tech: 'C# OOP · Encapsulation',
            },
            {
              name: 'Business Services',
              responsibility: 'Module coordinators calculating stock availability, taxes, and checkout calculations.',
              tech: '.NET Business Logic',
            },
            {
              name: 'Data Access',
              responsibility: 'Local storage management and transaction record persistence.',
              tech: 'ADO.NET / Local Storage',
            },
          ],
          decisions: [
            {
              title: 'Domain Entity Encapsulation',
              explanation:
                'Pricing, discounts, and inventory deduction rules are encapsulated inside domain models rather than leaked into UI form event handlers.',
            },
            {
              title: 'Transactional POS Flow',
              explanation:
                'Decoupled modules for Inventory, Customers, and Checkout ensure real-time stock verification prior to completing any sales transaction.',
            },
          ],
        },
      },
    ],
    experiences: [
      {
        id: 'exp-cisclon',
        company: 'Cisclon S.A.C.',
        role: 'Odoo Developer & IT Support Specialist',
        period: 'September 2026 — Present',
        location: 'Lima, Peru',
        type: 'featured',
        isCurrent: true,
        description: [
          'Engineered and customized enterprise Odoo ERP modules leveraging Python, Odoo ORM, XML views, and relational PostgreSQL data structures.',
          'Contributed to functional workflow refactoring, business process adaptation, and schema migration toward Odoo 20.',
          'Administered corporate Mailcow mail server infrastructure, handling domain configuration, mailbox provisioning, and email troubleshooting.',
          'Provided tier-1/tier-2 IT helpdesk support and managed proactive endpoint health monitoring via Datto RMM / Kaseya.',
        ],
        technologies: ['Odoo 20', 'Python', 'PostgreSQL', 'Mailcow', 'Datto RMM / Kaseya'],
      },
      {
        id: 'exp-coolbox',
        company: 'Coolbox',
        role: 'Warehouse Operations Associate',
        period: 'July 2025 — May 2026',
        location: 'Lima, Peru',
        type: 'standard',
        description: [
          'Conducted daily physical inventory audits and stock reconciliations using the company digital Warehouse Management System (WMS).',
          'Executed high-volume receiving, picking, packing, and dispatch workflows with strict order traceability and error reduction.',
          'Gained foundational real-world domain expertise in supply chain logistics and inventory control that directly informs ERP module engineering and retail systems design.',
        ],
        technologies: ['WMS / Inventory', 'Picking & Packing', 'Stock Control', 'Logistics'],
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

export const uiLabels: Record<Language, UiLabels> = {
  es: {
    meta: {
      title: 'Fabian Garcia — Desarrollador de Software | Backend & Mobile',
      description:
        'Desarrollador de software con experiencia práctica en Java (Spring Boot), Python (Odoo ERP) y Kotlin (Jetpack Compose). Lima, Perú.',
    },
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre Mí',
      downloadCv: 'Descargar ',
      cvShort: 'CV',
    },
    hero: {
      explore: 'Explorar Proyectos',
      status: 'Disponible para trabajo remoto y nuevos proyectos',
      roleLabel: 'Backend & Odoo ERP',
      englishLabel: 'Inglés B2 (EF SET)',
      focusLabel: 'Java · Python · Odoo 20 · Kotlin',
      emailTitle: 'Enviar correo electrónico',
    },
    experience: {
      tagline: 'Experiencia Profesional',
      heading: 'Trayectoria Laboral',
      currentBadge: 'Actual',
    },
    projects: {
      tagline: 'Proyectos de Ingeniería',
      heading: 'Proyectos Destacados',
      viewGithub: 'Ver en GitHub',
      viewArchitecture: 'Ver Arquitectura',
      testApiLive: 'Simular Transacción API',
      preview: {
        apiBadge: 'Spring Boot · API REST',
        passBadge: 'JUnit 5 APROBADO',
        layerArch: 'Controller → Service → Repository',
        db: 'MySQL / H2',
        mobileTitle: 'Jetpack Compose',
        uiLayer: 'Capa UI',
        asyncIo: 'E/S Asíncrona',
        desktopTitle: 'C# · Escritorio .NET',
        desktopSubtitle: 'WinForms · POO',
        module1Label: 'Módulo 01',
        module1Name: 'Inventario',
        module2Label: 'Módulo 02',
        module2Name: 'Clientes',
        module3Label: 'Módulo 03',
        module3Name: 'Ventas',
        oopArchitecture: 'Arquitectura Orientada a Objetos',
        statusActive: 'Activo',
      },
    },
    skills: {
      tagline: 'Habilidades Técnicas',
      heading: 'Stack Tecnológico',
    },
    about: {
      tagline: 'Perfil Profesional',
      heading: 'Sobre Mí',
      tabs: {
        about: 'Sobre mí',
        education: 'Educación',
        certifications: 'Certificaciones',
      },
      badgeTitle: 'Ingeniería Backend & ERP',
      badgeSubtitle: 'Arquitectura limpia, sistemas de negocio y aprendizaje continuo',
      badgePills: {
        apisErp: 'APIs & ERP',
        sqlOrm: 'SQL / ORM',
      },
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
      emailCopied: '¡Correo copiado al portapapeles!',
      phoneCopied: '¡Teléfono copiado al portapapeles!',
      copyEmailLabel: 'Copiar correo electrónico',
      copyPhoneLabel: 'Copiar número de teléfono',
    },
  },
  en: {
    meta: {
      title: 'Fabian Garcia — Software Developer | Backend & Mobile',
      description:
        'Software developer with hands-on experience in Java (Spring Boot), Python (Odoo ERP), and Kotlin (Jetpack Compose). Lima, Peru.',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      downloadCv: 'Download ',
      cvShort: 'CV',
    },
    hero: {
      explore: 'Explore Projects',
      status: 'Available for remote work & engineering opportunities',
      roleLabel: 'Backend & Odoo ERP',
      englishLabel: 'English B2 (EF SET)',
      focusLabel: 'Java · Python · Odoo 20 · Kotlin',
      emailTitle: 'Send an email',
    },
    experience: {
      tagline: 'Professional Experience',
      heading: 'Work Experience',
      currentBadge: 'Current',
    },
    projects: {
      tagline: 'Featured Engineering',
      heading: 'Featured Projects',
      viewGithub: 'View on GitHub',
      viewArchitecture: 'View Architecture',
      testApiLive: 'Simulate API Transaction',
      preview: {
        apiBadge: 'Spring Boot · REST API',
        passBadge: 'JUnit 5 PASS',
        layerArch: 'Controller → Service → Repository',
        db: 'MySQL / H2',
        mobileTitle: 'Jetpack Compose',
        uiLayer: 'UI Layer',
        asyncIo: 'Async I/O',
        desktopTitle: 'C# · .NET Desktop',
        desktopSubtitle: 'WinForms · OOP',
        module1Label: 'Module 01',
        module1Name: 'Inventory',
        module2Label: 'Module 02',
        module2Name: 'Customers',
        module3Label: 'Module 03',
        module3Name: 'Sales',
        oopArchitecture: 'Object-Oriented Architecture',
        statusActive: 'Active',
      },
    },
    skills: {
      tagline: 'Technical Stack',
      heading: 'Technical Skills',
    },
    about: {
      tagline: 'Professional Background',
      heading: 'About Me',
      tabs: {
        about: 'About me',
        education: 'Education',
        certifications: 'Certifications',
      },
      badgeTitle: 'Backend & ERP Engineering',
      badgeSubtitle: 'Clean architecture, business systems & continuous growth',
      badgePills: {
        apisErp: 'APIs & ERP',
        sqlOrm: 'SQL / ORM',
      },
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
      emailCopied: 'Email copied to clipboard!',
      phoneCopied: 'Phone copied to clipboard!',
      copyEmailLabel: 'Copy email address',
      copyPhoneLabel: 'Copy phone number',
    },
  },
};
