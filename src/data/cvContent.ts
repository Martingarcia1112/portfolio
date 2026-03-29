/**
 * Datos que no dependen del idioma. Textos traducibles: `src/i18n/siteContent.ts`.
 */

export const personal = {
  name: 'Martín García',
  location: 'Córdoba, Argentina',
  phone: '(54) 3541 683094',
  email: 'martingarcia1112.mg@gmail.com',
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/martinjoelgarcia',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/Martingarcia1112',
  },
} as const

/** IDs de ancla: fijos para no romper enlaces ni el scroll spy al cambiar idioma. */
export const sectionIds = {
  home: 'inicio',
  about: 'sobre-mi',
  skills: 'habilidades',
  experience: 'experiencia',
  education: 'educacion',
  contact: 'contacto',
} as const

export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: readonly string[]
}

export type EducationItem = {
  title: string
  institution: string
  period: string
  status?: string
}
