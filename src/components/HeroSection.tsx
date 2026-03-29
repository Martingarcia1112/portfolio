import { personal, sectionIds } from '../data/cvContent'
import { ProfilePortrait } from './ProfilePortrait'
import styles from './HeroSection.module.scss'

/**
 * Bloque principal: presentación, foto (slot), links rápidos y CTA hacia contacto.
 */
export function HeroSection() {
  return (
    <section
      id={sectionIds.home}
      className={styles.section}
      aria-labelledby="hero-heading"
    >
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Cosquín, Córdoba · Software desde 2022</p>
          <h1 id="hero-heading" className={styles.title}>
            {personal.name}
          </h1>
          <p className={styles.subtitle}>{personal.title}</p>
          <p className={styles.tagline}>{personal.tagline}</p>
          <div className={styles.links}>
            <a
              href={personal.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personal.linkedin.label} · {personal.linkedin.handle}
            </a>
            <span className={styles.dot} aria-hidden />
            <a
              href={personal.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personal.github.label} · {personal.github.handle}
            </a>
          </div>
          <div className={styles.actions}>
            <a className={styles.ctaPrimary} href={`#${sectionIds.contact}`}>
              Contactar
            </a>
            <a className={styles.ctaGhost} href={`#${sectionIds.experience}`}>
              Ver experiencia
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.frameGlow} aria-hidden />
          <ProfilePortrait alt={`Retrato de ${personal.name}`} />
        </div>
      </div>
    </section>
  )
}
