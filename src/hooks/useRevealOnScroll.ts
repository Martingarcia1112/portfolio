import { useEffect, useRef, type RefObject } from 'react'

/**
 * Añade `isRevealed` cuando la sección entra en vista (animación sutil).
 *
 * Nota: antes usábamos opacity:0 + threshold 0.08; en secciones altas el ratio de
 * intersección a veces no llegaba al umbral y el contenido quedaba “invisible”.
 * Ahora el observer usa threshold 0 (cualquier pixel visible) y hay un respaldo
 * por si el scroll inicial (p. ej. ancla #experiencia) deja el bloque ya visible.
 */
export function useRevealOnScroll<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const markRevealed = () => {
      el.classList.add('isRevealed')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          markRevealed()
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        rootMargin: '100px 0px 100px 0px',
      },
    )

    observer.observe(el)

    /* Respaldo tras layout: anclas o IO tardío */
    const id = window.requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.top < vh && r.bottom > 0) {
        markRevealed()
        observer.unobserve(el)
      }
    })

    return () => {
      window.cancelAnimationFrame(id)
      observer.disconnect()
    }
  }, [])

  return ref
}
