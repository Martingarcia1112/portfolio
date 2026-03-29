import { aboutParagraphs, sectionIds } from '../data/cvContent'
import { SectionShell } from './SectionShell'
import styles from './AboutSection.module.scss'

/**
 * Texto introductorio del CV en párrafos legibles.
 */
export function AboutSection() {
  return (
    <SectionShell
      id={sectionIds.about}
      indexLabel="01"
      title="Sobre mí"
      variant="muted"
    >
      <div className={styles.prose}>
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  )
}
