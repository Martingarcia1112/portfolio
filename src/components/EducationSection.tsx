import { education, sectionIds } from '../data/cvContent'
import { SectionShell } from './SectionShell'
import styles from './EducationSection.module.scss'

/**
 * Formación académica en tarjetas compactas.
 */
export function EducationSection() {
  return (
    <SectionShell id={sectionIds.education} indexLabel="04" title="Educación">
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.top}>
              <h3 className={styles.title}>{item.title}</h3>
              {item.status ? (
                <span className={styles.badge}>{item.status}</span>
              ) : null}
            </div>
            <p className={styles.institution}>{item.institution}</p>
            <p className={styles.period}>{item.period}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
