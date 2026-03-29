import { useActiveSection } from '../hooks/useActiveSection'
import { sectionIds } from '../data/cvContent'
import styles from './SiteHeader.module.scss'

/** Enlaces del menú: href + id de sección para marcar activo */
const navLinks = [
  { href: `#${sectionIds.home}`, id: sectionIds.home, label: 'Inicio' },
  { href: `#${sectionIds.about}`, id: sectionIds.about, label: 'Sobre mí' },
  { href: `#${sectionIds.skills}`, id: sectionIds.skills, label: 'Habilidades' },
  { href: `#${sectionIds.experience}`, id: sectionIds.experience, label: 'Experiencia' },
  { href: `#${sectionIds.education}`, id: sectionIds.education, label: 'Educación' },
  { href: `#${sectionIds.contact}`, id: sectionIds.contact, label: 'Contacto' },
] as const

/**
 * Cabecera fija con navegación por anclas.
 * El ítem activo se sincroniza con useActiveSection (scroll).
 */
export function SiteHeader() {
  const activeId = useActiveSection()

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <a className={styles.brand} href={`#${sectionIds.home}`}>
          <span className={styles.brandMark} aria-hidden />
          MG
        </a>
        <nav className={styles.nav} aria-label="Secciones principales">
          <ul className={styles.list}>
            {navLinks.map(({ href, id, label }) => (
              <li key={id}>
                <a
                  href={href}
                  className={id === activeId ? styles.linkActive : styles.link}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
