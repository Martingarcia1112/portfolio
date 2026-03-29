import { personal, sectionIds } from '../data/cvContent'
import { SectionShell } from './SectionShell'
import styles from './ContactSection.module.scss'

/**
 * Datos de contacto y enlaces externos con mailto / tel.
 */
export function ContactSection() {
  const mailto = `mailto:${personal.email}`
  const telDigits = personal.phone.replace(/\D/g, '')
  const telHref = `tel:+${telDigits}`

  return (
    <SectionShell
      id={sectionIds.contact}
      indexLabel="05"
      title="Contacto"
      variant="muted"
    >
      <div className={styles.grid}>
        <p className={styles.lead}>
          Si querés charlar sobre un proyecto o una oportunidad, escribime. Respondo con
          prioridad por correo o LinkedIn.
        </p>
        <dl className={styles.details}>
          <div className={styles.row}>
            <dt>Email</dt>
            <dd>
              <a href={mailto}>{personal.email}</a>
            </dd>
          </div>
          <div className={styles.row}>
            <dt>Teléfono</dt>
            <dd>
              <a href={telHref}>{personal.phone}</a>
            </dd>
          </div>
          <div className={styles.row}>
            <dt>Ubicación</dt>
            <dd>{personal.location}</dd>
          </div>
          <div className={styles.row}>
            <dt>Redes</dt>
            <dd className={styles.social}>
              <a href={personal.linkedin.href} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={personal.github.href} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </SectionShell>
  )
}
