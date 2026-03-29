import { skillGroups, sectionIds } from '../data/cvContent'
import { SectionShell } from './SectionShell'
import styles from './SkillsSection.module.scss'

/**
 * Habilidades agrupadas en tarjetas con chips.
 */
export function SkillsSection() {
  return (
    <SectionShell id={sectionIds.skills} indexLabel="02" title="Habilidades">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.category} className={styles.card}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.chips}>
              {group.items.map((item) => (
                <li key={item} className={styles.chip}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
