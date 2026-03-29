import { sectionIds } from '../data/cvContent'
import type { EducationItem, ExperienceItem } from '../data/cvContent'
import type { Locale } from '../context/locale-context'

export const CV_PATHS = {
  es: '/cv/martin-garcia-cv-es.pdf',
  en: '/cv/martin-garcia-cv-en.pdf',
} as const

export type SiteContent = {
  htmlLang: string
  documentTitle: string
  documentDescription: string
  skipToContent: string
  navAria: string
  navItems: readonly { id: string; label: string }[]
  hero: {
    kicker: string
    role: string
    availability: string
    contactCta: string
    experienceCta: string
  }
  cv: { intro: string; downloadEs: string; downloadEn: string }
  langSwitch: { es: string; en: string; groupAria: string }
  sections: {
    about: string
    skills: string
    experience: string
    education: string
    contact: string
  }
  aboutParagraphs: readonly string[]
  skillGroups: readonly { category: string; items: readonly string[] }[]
  experience: readonly ExperienceItem[]
  education: readonly EducationItem[]
  contact: {
    lead: string
    gmail: string
    whatsapp: string
    location: string
    website: string
    websiteAria: string
    social: string
    whatsappAria: string
    mapsAria: (location: string) => string
  }
  photo: {
    alt: (name: string) => string
    fallbackLabel: string
    fallbackHint: string
  }
  privacy: {
    title: string
    footerLink: string
    paragraphs: readonly string[]
  }
}

const es: SiteContent = {
  htmlLang: 'es-AR',
  documentTitle: 'Martín García — Desarrollador de software',
  documentDescription:
    'Martín García — Desarrollador de software. Portfolio y contacto. Córdoba, Argentina.',
  skipToContent: 'Saltar al contenido',
  navAria: 'Secciones del sitio',
  navItems: [
    { id: sectionIds.home, label: 'Inicio' },
    { id: sectionIds.about, label: 'Sobre mí' },
    { id: sectionIds.skills, label: 'Habilidades' },
    { id: sectionIds.experience, label: 'Experiencia' },
    { id: sectionIds.education, label: 'Educación' },
    { id: sectionIds.contact, label: 'Contacto' },
  ],
  hero: {
    kicker: 'Desde 2021',
    role: 'Desarrollador de software',
    availability: 'Disponibilidad: híbrido y remoto',
    contactCta: 'Contactar',
    experienceCta: 'Experiencia',
  },
  cv: {
    intro: 'Descargar currículum (PDF)',
    downloadEs: 'CV en español — descargar PDF',
    downloadEn: 'CV en inglés — descargar PDF',
  },
  langSwitch: {
    es: 'ES',
    en: 'EN',
    groupAria: 'Idioma del sitio',
  },
  sections: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    education: 'Educación',
    contact: 'Contacto',
  },
  aboutParagraphs: [
    'Como desarrollador front-end en Social Learning trabajo en interfaces web eficientes y escalables con Vue.js, HTML, CSS y JavaScript, usando Git y Jira en equipos ágiles — también lideré proyectos en entornos colaborativos y dinámicos.',
    'Mi formación como técnico en programación refuerza un enfoque en productos de software orientados al usuario; sumo integración con APIs REST, bases de datos y despliegues en AWS.',
    'Uso herramientas de desarrollo asistido por IA para ganar productividad y calidad, siempre con revisión humana, pruebas y estándares de equipo. Me motivan proyectos con impacto real.',
  ],
  skillGroups: [
    {
      category: 'Cliente web',
      items: ['Vue.js (v2, v3)', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Spring Boot', 'Node.js (Express)', 'REST APIs'],
    },
    {
      category: 'Datos',
      items: ['PostgreSQL', 'SQL'],
    },
    {
      category: 'IA en el flujo de trabajo',
      items: [
        'Cursor y asistentes integrados al IDE',
        'Prompts con contexto de código y arquitectura',
        'Revisión humana, tests y estándares de equipo',
      ],
    },
    {
      category: 'DevOps & herramientas',
      items: [
        'Git',
        'Linux (CLI)',
        'Windows',
        'macOS',
        'AWS',
        'Vercel',
        'Render',
        'n8n (self-hosted)',
        'Jira',
        'Notion',
      ],
    },
    {
      category: 'Metodologías',
      items: ['Scrum', 'Sprints y ceremonias', 'Estimaciones', 'Code review'],
    },
    {
      category: 'Certificaciones',
      items: [
        'Curso Básico de Vue.js 2',
        'Vue.js: Componentes y Composition API',
        'Curso de React.js',
        'Curso de Automatizaciones con n8n',
        'Scrum Foundation (self-paced)',
      ],
    },
    {
      category: 'Idiomas',
      items: ['Español — nativo', 'Inglés — nivel intermedio (working)'],
    },
  ],
  experience: [
    {
      company: 'Social Learning',
      role: 'Desarrollador front-end',
      period: 'Diciembre 2023 — actualidad',
      bullets: [
        'Interfaces web con foco en calidad, rendimiento y mantenibilidad bajo metodologías ágiles.',
        'Vue.js, HTML, CSS y JavaScript; Git para versionado y trabajo colaborativo.',
        'Consumo e integración de APIs REST; Scrum con Jira (sprints, ceremonias, estimaciones).',
        'Despliegue y mantenimiento de aplicaciones en AWS.',
        'Herramientas de IA asistida para productividad y calidad de código; colaboración con backend y code reviews.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Team Leader',
      period: 'Abril 2024 — enero 2026',
      bullets: [
        'Liderazgo de equipos de alumnos en prácticas profesionales: acompañamiento y organización del trabajo en proyectos reales.',
        'Coordinación técnica, seguimiento del equipo y planificación de sprints con Jira y Notion.',
        'Stack del proyecto: Vue.js, Spring Boot, Express y PostgreSQL.',
        'Despliegue y gestión de entornos en AWS, Render y Vercel.',
        'Buenas prácticas, revisión de código y apoyo ante bloqueos técnicos.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Técnico de soporte de TI',
      period: 'Diciembre 2022 — enero 2024',
      bullets: [
        'Soporte de primer nivel vía ticketera para incidentes de la aplicación.',
        'Diagnóstico y resolución de problemas; derivación a niveles superiores cuando correspondía.',
        'Consultas y validaciones en SQL para analizar información y resolver incidencias.',
        'Coordinación con equipos técnicos ante problemas recurrentes.',
      ],
    },
  ],
  education: [
    {
      title: 'Tecnicatura en Ciberseguridad',
      institution: 'Teclab',
      period: 'Agosto 2023 — en curso',
      status: 'En curso',
    },
    {
      title: 'Técnico en Programación',
      institution: 'Teclab',
      period: 'Febrero 2021 — agosto 2023',
    },
    {
      title: 'Secundario completo',
      institution: 'Liceo Cosquín',
      period: '2005 — 2011',
    },
  ],
  contact: {
    lead: 'Si querés charlar sobre un proyecto o una oportunidad, escribime.',
    gmail: 'Gmail',
    whatsapp: 'WhatsApp',
    location: 'Ubicación',
    website: 'Portfolio',
    websiteAria: 'Abrir este portfolio en una pestaña nueva',
    social: 'Redes',
    whatsappAria: 'Abrir chat de WhatsApp con este número',
    mapsAria: (location: string) => `Ver ${location} en Google Maps`,
  },
  photo: {
    alt: (name: string) => `Retrato de ${name}`,
    fallbackLabel: 'Foto de perfil',
    fallbackHint: 'public/images/profile.jpg',
  },
  privacy: {
    title: 'Privacidad',
    footerLink: 'Privacidad',
    paragraphs: [
      'Este sitio es un portfolio estático: no uso cookies de analítica ni de publicidad.',
      'La preferencia de idioma (español o inglés) se guarda solo en tu navegador, en tu dispositivo, mediante almacenamiento local (localStorage). No se envía a ningún servidor propio.',
      'Los enlaces a redes, correo, WhatsApp, mapas u otros sitios se rigen por las políticas de privacidad de cada servicio.',
      'El sitio está alojado en Vercel; el proveedor puede registrar datos técnicos habituales de hosting (por ejemplo solicitudes y errores) según su documentación.',
      'Para consultas sobre este aviso podés escribirme por los medios indicados en la sección de contacto.',
    ],
  },
}

const en: SiteContent = {
  htmlLang: 'en',
  documentTitle: 'Martín García — Software developer',
  documentDescription:
    'Martín García — Software developer. Portfolio and contact. Córdoba, Argentina.',
  skipToContent: 'Skip to content',
  navAria: 'Site sections',
  navItems: [
    { id: sectionIds.home, label: 'Home' },
    { id: sectionIds.about, label: 'About' },
    { id: sectionIds.skills, label: 'Skills' },
    { id: sectionIds.experience, label: 'Experience' },
    { id: sectionIds.education, label: 'Education' },
    { id: sectionIds.contact, label: 'Contact' },
  ],
  hero: {
    kicker: 'Since 2021',
    role: 'Software developer',
    availability: 'Availability: hybrid & remote',
    contactCta: 'Get in touch',
    experienceCta: 'Experience',
  },
  cv: {
    intro: 'Download résumé (PDF)',
    downloadEs: 'CV in Spanish — download PDF',
    downloadEn: 'CV in English — download PDF',
  },
  langSwitch: {
    es: 'ES',
    en: 'EN',
    groupAria: 'Site language',
  },
  sections: {
    about: 'About me',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  aboutParagraphs: [
    'As a front-end developer at Social Learning I build efficient, scalable web UIs with Vue.js, HTML, CSS, and JavaScript, using Git and Jira in agile teams — I have also led projects in collaborative, fast-moving environments.',
    'My technical programming background reinforces a user-oriented approach; I integrate REST APIs, databases, and deployments on AWS.',
    'I use AI-assisted development for productivity and quality, always with human review, tests, and team standards. I am motivated by work that has real impact.',
  ],
  skillGroups: [
    {
      category: 'Web client',
      items: ['Vue.js (v2, v3)', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Spring Boot', 'Node.js (Express)', 'REST APIs'],
    },
    {
      category: 'Data',
      items: ['PostgreSQL', 'SQL'],
    },
    {
      category: 'AI in the workflow',
      items: [
        'Cursor and IDE-integrated assistants',
        'Prompts with code and architecture context',
        'Human review, tests, and team standards',
      ],
    },
    {
      category: 'DevOps & tools',
      items: [
        'Git',
        'Linux (CLI)',
        'Windows',
        'macOS',
        'AWS',
        'Vercel',
        'Render',
        'n8n (self-hosted)',
        'Jira',
        'Notion',
      ],
    },
    {
      category: 'Methodologies',
      items: ['Scrum', 'Sprints & ceremonies', 'Estimation', 'Code review'],
    },
    {
      category: 'Certifications',
      items: [
        'Vue.js 2 basics course',
        'Vue.js: Components & Composition API',
        'React.js course',
        'n8n automation course',
        'Scrum Foundation (self-paced)',
      ],
    },
    {
      category: 'Languages',
      items: ['Spanish — native', 'English — limited working proficiency'],
    },
  ],
  experience: [
    {
      company: 'Social Learning',
      role: 'Front-end developer',
      period: 'December 2023 — present',
      bullets: [
        'Web UIs focused on quality, performance, and maintainability in agile delivery.',
        'Vue.js, HTML, CSS, and JavaScript; Git for versioning and collaboration.',
        'REST API integration; Scrum with Jira (sprints, ceremonies, estimation).',
        'Deploying and maintaining applications on AWS.',
        'AI-assisted tooling for productivity and code quality; backend collaboration and code reviews.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Team leader',
      period: 'April 2024 — January 2026',
      bullets: [
        'Led student teams in professional practice: mentoring and organizing real project work.',
        'Technical coordination, team follow-up, and sprint planning with Jira and Notion.',
        'Project stack: Vue.js, Spring Boot, Express, and PostgreSQL.',
        'Deployments and environments on AWS, Render, and Vercel.',
        'Best practices, code review, and support for technical blockers.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'IT support technician',
      period: 'December 2022 — January 2024',
      bullets: [
        'First-line support via ticketing for application incidents.',
        'Troubleshooting and resolution; escalation when needed.',
        'SQL queries and checks to analyse data and resolve incidents.',
        'Coordination with technical teams on recurring issues.',
      ],
    },
  ],
  education: [
    {
      title: 'Associate in cybersecurity',
      institution: 'Teclab',
      period: 'August 2023 — in progress',
      status: 'In progress',
    },
    {
      title: 'Technical degree in programming',
      institution: 'Teclab',
      period: 'February 2021 — August 2023',
    },
    {
      title: 'High school diploma',
      institution: 'Liceo Cosquín',
      period: '2005 — 2011',
    },
  ],
  contact: {
    lead: 'If you want to talk about a project or an opportunity, get in touch.',
    gmail: 'Gmail',
    whatsapp: 'WhatsApp',
    location: 'Location',
    website: 'Portfolio',
    websiteAria: 'Open this portfolio in a new tab',
    social: 'Social',
    whatsappAria: 'Open WhatsApp chat with this number',
    mapsAria: (location: string) => `View ${location} on Google Maps`,
  },
  photo: {
    alt: (name: string) => `Portrait of ${name}`,
    fallbackLabel: 'Profile photo',
    fallbackHint: 'public/images/profile.jpg',
  },
  privacy: {
    title: 'Privacy',
    footerLink: 'Privacy',
    paragraphs: [
      'This site is a static portfolio: it does not use analytics or advertising cookies.',
      'Your language preference (Spanish or English) is stored only in your browser on your device (localStorage). It is not sent to any server I operate.',
      'Links to social networks, email, WhatsApp, maps, or other sites are governed by each provider’s privacy policy.',
      'The site is hosted on Vercel; the platform may log standard technical data (for example requests and errors) as described in their documentation.',
      'For questions about this notice, you can reach me through the contact section.',
    ],
  },
}

export function getSiteContent(locale: Locale): SiteContent {
  return locale === 'en' ? en : es
}
