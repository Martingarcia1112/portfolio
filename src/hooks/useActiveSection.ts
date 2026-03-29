import { useEffect, useState } from 'react'
import { sectionIds } from '../data/cvContent'

/** Orden en el DOM (debe coincidir con el scroll de la página). */
const observedIds = [
  sectionIds.home,
  sectionIds.about,
  sectionIds.skills,
  sectionIds.experience,
  sectionIds.education,
  sectionIds.contact,
] as const

/**
 * Sección activa en el menú: última cuyo borde superior ya cruzó una línea bajo el header.
 * Más estable que IntersectionObserver con varias secciones a la vez (evita saltos Inicio ↔ Sobre mí).
 */
export function useActiveSection(): string {
  const [activeId, setActiveId] = useState<string>(sectionIds.home)

  useEffect(() => {
    const lineY = () => {
      const header = document.querySelector('header')
      const bottom = header?.getBoundingClientRect().bottom ?? 72
      return bottom + 20
    }

    const pickActive = (): string => {
      const y = lineY()
      let active: string = sectionIds.home
      for (const id of observedIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= y) {
          active = id
        }
      }
      return active
    }

    let raf = 0
    const schedule = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const next = pickActive()
        setActiveId((prev) => (prev === next ? prev : next))
      })
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return activeId
}
