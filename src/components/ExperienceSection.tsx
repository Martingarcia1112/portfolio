import { experience, sectionIds } from '../data/cvContent'
import { SectionShell } from './SectionShell'
import styles from './ExperienceSection.module.scss'

/**
 * Línea de tiempo de roles en Social Learning.
 */
export function ExperienceSection() {
  return (
    <SectionShell
      id={sectionIds.experience}
      indexLabel="03"
      title="Experiencia"
      variant="muted"
    >
      <ol className={styles.timeline}>
        {experience.map((job, i) => (
          <li key={`${job.role}-${job.period}`} className={styles.item}>
            <div className={styles.marker} aria-hidden>
              <span className={styles.dot} />
              {i < experience.length - 1 ? <span className={styles.line} /> : null}
            </div>
            <article className={styles.card}>
              <p className={styles.company}>{job.company}</p>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.period}>{job.period}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
