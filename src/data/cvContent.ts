/**
 * Contenido centralizado del CV / portfolio.
 * Editá acá los textos sin tocar la estructura de componentes.
 */

export const personal = {
  name: 'Martín García',
  title: 'Desarrollador Full Stack',
  tagline:
    'Vue.js y JavaScript en el cliente, Spring Boot y PostgreSQL en el servidor, APIs REST y despliegues en Linux/AWS. Integro herramientas de IA en el flujo diario con revisión y criterio técnico.',
  location: 'Cosquín, Córdoba, Argentina',
  phone: '(54) 3541 683094',
  birthDate: '31/08/1993',
  email: 'martingarcia1112.mg@gmail.com',
  linkedin: {
    label: 'LinkedIn',
    handle: 'martinjoelgarcia',
    href: 'https://www.linkedin.com/in/martinjoelgarcia',
  },
  github: {
    label: 'GitHub',
    handle: 'Martingarcia1112',
    href: 'https://github.com/Martingarcia1112',
  },
} as const

/** Bloque “Sobre mí” — tono generalista + full stack + IA */
export const aboutParagraphs = [
  'Desarrollador de software con experiencia desde 2022: fuerte en Vue.js y JavaScript para productos web, y cada vez más cómodo llevando features hasta backend, datos y despliegue.',
  'Trabajo con APIs REST, Spring Boot, PostgreSQL y entornos ágiles, priorizando código mantenible y entregas con impacto en usuarios y negocio.',
  'Uso asistencia de IA (por ejemplo Cursor) para acelerar exploración, documentación y refactors, siempre validando con pruebas, revisión y buenas prácticas — la IA amplía el alcance, no reemplaza el criterio.',
] as const

/** Habilidades agrupadas para la grilla de chips */
export const skillGroups = [
  {
    category: 'Cliente web',
    items: ['Vue.js (v2, v3)', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Spring Boot', 'REST APIs'],
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
    items: ['Git', 'Linux CLI', 'AWS EC2', 'Jira'],
  },
  {
    category: 'Idiomas',
    items: ['Español — nativo', 'Inglés — B1'],
  },
] as const

export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: readonly string[]
}

/** Experiencia: orden de más reciente / relevante primero */
export const experience: readonly ExperienceItem[] = [
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
] as const

export type EducationItem = {
  title: string
  institution: string
  period: string
  status?: string
}

export const education: readonly EducationItem[] = [
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
    institution: '—',
    period: '2005 — 2011',
  },
] as const

/** IDs de sección — deben coincidir con los anchors del header y los <section id> */
export const sectionIds = {
  home: 'inicio',
  about: 'sobre-mi',
  skills: 'habilidades',
  experience: 'experiencia',
  education: 'educacion',
  contact: 'contacto',
} as const
