import { personal } from '../data/cvContent'
import styles from './SiteFooter.module.scss'

/**
 * Pie de página con copyright y año dinámico.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.text}>
          © {year} {personal.name}. Hecho con React y mucho café.
        </p>
        <p className={styles.sub}>
          Portfolio estático — listo para Vercel u otro hosting de archivos estáticos.
        </p>
      </div>
    </footer>
  )
}
