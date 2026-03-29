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
    social: string
    whatsappAria: string
    mapsAria: (location: string) => string
  }
  photo: {
    alt: (name: string) => string
    fallbackLabel: string
    fallbackHint: string
  }
}

const es: SiteContent = {
  htmlLang: 'es-AR',
  documentTitle: 'Martín García — Desarrollador Full Stack',
  documentDescription:
    'Martín García — Desarrollador full stack. Portfolio y contacto. Córdoba, Argentina.',
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
    role: 'Desarrollador Full Stack',
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
    'Desarrollador de software con experiencia desde 2022: fuerte en Vue.js y JavaScript para productos web, y cada vez más cómodo llevando features hasta backend, datos y despliegue.',
    'Trabajo con APIs REST, Spring Boot, PostgreSQL y entornos ágiles, priorizando código mantenible y entregas con impacto en usuarios y negocio.',
    'Uso asistencia de IA (por ejemplo Cursor) para acelerar exploración, documentación y refactors, siempre validando con pruebas, revisión y buenas prácticas — la IA amplía el alcance, no reemplaza el criterio.',
  ],
  skillGroups: [
    {
      category: 'Cliente web',
      items: ['Vue.js (v2, v3)', 'React', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Spring Boot', 'REST APIs'],
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
        'AWS EC2',
        'n8n (self-hosted)',
        'Jira',
      ],
    },
    {
      category: 'Idiomas',
      items: ['Español — nativo', 'Inglés — B1'],
    },
  ],
  experience: [
    {
      company: 'Social Learning',
      role: 'Desarrollador de software',
      period: 'Diciembre 2022 — actualidad',
      bullets: [
        'Desarrollo y optimización de funcionalidades con Vue.js (v2/v3) y Spring Boot.',
        'Participación en módulos académicos, financieros y de seguridad.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Team Leader',
      period: 'Marzo 2024 — Julio 2025',
      bullets: [
        'Lideré la creación de un proyecto con Vue.js (v3), Spring Boot y PostgreSQL.',
        'Despliegues continuos en Linux sobre AWS, promoviendo buenas prácticas y trabajo colaborativo.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Soporte TI',
      period: 'Diciembre 2022 — Diciembre 2023',
      bullets: [
        'Gestión de incidencias en hardware y software mediante ticketera.',
        'Resolución de problemas con SQL alineado a normativas del negocio.',
      ],
    },
  ],
  education: [
    {
      title: 'Tecnicatura en Ciberseguridad',
      institution: 'Teclab',
      period: 'Octubre 2023 — en curso',
      status: 'En curso',
    },
    {
      title: 'Tecnicatura en Programación',
      institution: 'Teclab',
      period: 'Marzo 2021 — Agosto 2023',
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
    social: 'Redes',
    whatsappAria: 'Abrir chat de WhatsApp con este número',
    mapsAria: (location: string) => `Ver ${location} en Google Maps`,
  },
  photo: {
    alt: (name: string) => `Retrato de ${name}`,
    fallbackLabel: 'Foto de perfil',
    fallbackHint: 'public/images/profile.jpg',
  },
}

const en: SiteContent = {
  htmlLang: 'en',
  documentTitle: 'Martín García — Full Stack Developer',
  documentDescription:
    'Martín García — Full stack developer. Portfolio and contact. Córdoba, Argentina.',
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
    role: 'Full Stack Developer',
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
    'Software developer since 2022: strong in Vue.js and JavaScript for web products, increasingly comfortable taking features through backend, data, and deployment.',
    'I work with REST APIs, Spring Boot, PostgreSQL, and agile environments, focusing on maintainable code and deliveries that matter to users and the business.',
    'I use AI assistance (e.g. Cursor) to speed up exploration, documentation, and refactors — always validated with tests, review, and team standards. AI extends reach; it does not replace judgment.',
  ],
  skillGroups: [
    {
      category: 'Web client',
      items: ['Vue.js (v2, v3)', 'React', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Spring Boot', 'REST APIs'],
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
        'AWS EC2',
        'n8n (self-hosted)',
        'Jira',
      ],
    },
    {
      category: 'Languages',
      items: ['Spanish — native', 'English — B1'],
    },
  ],
  experience: [
    {
      company: 'Social Learning',
      role: 'Software Developer',
      period: 'December 2022 — present',
      bullets: [
        'Developed and optimized features with Vue.js (v2/v3) and Spring Boot.',
        'Contributed to academic, financial, and security modules.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'Team Leader',
      period: 'March 2024 — July 2025',
      bullets: [
        'Led the creation of a project with Vue.js (v3), Spring Boot, and PostgreSQL.',
        'Continuous deployment on Linux on AWS, promoting good practices and collaboration.',
      ],
    },
    {
      company: 'Social Learning',
      role: 'IT Support',
      period: 'December 2022 — December 2023',
      bullets: [
        'Handled hardware and software incidents through a ticketing system.',
        'SQL troubleshooting aligned with business policies.',
      ],
    },
  ],
  education: [
    {
      title: 'Associate in Cybersecurity',
      institution: 'Teclab',
      period: 'October 2023 — in progress',
      status: 'In progress',
    },
    {
      title: 'Associate in Programming',
      institution: 'Teclab',
      period: 'March 2021 — August 2023',
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
    social: 'Social',
    whatsappAria: 'Open WhatsApp chat with this number',
    mapsAria: (location: string) => `View ${location} on Google Maps`,
  },
  photo: {
    alt: (name: string) => `Portrait of ${name}`,
    fallbackLabel: 'Profile photo',
    fallbackHint: 'public/images/profile.jpg',
  },
}

export function getSiteContent(locale: Locale): SiteContent {
  return locale === 'en' ? en : es
}
