import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import styles from './SectionShell.module.scss'

type SectionShellProps = {
  id: string
  /** Número decorativo opcional (01, 02…) */
  indexLabel?: string
  title: string
  children: ReactNode
  /** Variante visual de fondo */
  variant?: 'default' | 'muted'
}

/**
 * Contenedor común de sección: título accesible, animación de entrada y variante de fondo.
 */
export function SectionShell({
  id,
  indexLabel,
  title,
  children,
  variant = 'default',
}: SectionShellProps) {
  const revealRef = useRevealOnScroll<HTMLElement>()

  return (
    <section
      ref={revealRef}
      id={id}
      className={`${styles.section} ${styles.reveal} ${variant === 'muted' ? styles.muted : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          {indexLabel ? (
            <span className={styles.index} aria-hidden>
              {indexLabel}
            </span>
          ) : null}
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
