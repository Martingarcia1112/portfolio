import { useState } from 'react'
import styles from './ProfilePortrait.module.scss'

/**
 * Foto de perfil desde carpeta pública.
 *
 * Colocá tu archivo como: public/images/profile.jpg
 * (también acepta .jpeg / .png si renombrás y actualizás PROFILE_SRC).
 */
const PROFILE_SRC = '/images/profile.jpg'

type ProfilePortraitProps = {
  /** Texto alternativo para lectores de pantalla */
  alt: string
}

/**
 * Muestra la imagen si existe; si falla la carga (archivo ausente), enseña un marco vacío estilizado.
 */
export function ProfilePortrait({ alt }: ProfilePortraitProps) {
  const [loadFailed, setLoadFailed] = useState(false)

  if (loadFailed) {
    return (
      <div className={styles.fallback} role="img" aria-label={alt}>
        <span className={styles.fallbackLabel}>Tu foto</span>
        <span className={styles.fallbackHint}>
          Añadí <code>profile.jpg</code> en <code>public/images/</code>
        </span>
      </div>
    )
  }

  return (
    <img
      src={PROFILE_SRC}
      alt={alt}
      className={styles.image}
      width={320}
      height={400}
      loading="eager"
      decoding="async"
      onError={() => setLoadFailed(true)}
    />
  )
}
