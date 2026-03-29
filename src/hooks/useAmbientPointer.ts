import { useEffect, type RefObject } from 'react'

/** Actualiza --px / --py (0–100) para un halo que sigue suavemente el puntero (solo estética). */
export function useAmbientPointer(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const move = (e: PointerEvent) => {
      root.style.setProperty('--px', ((e.clientX / window.innerWidth) * 100).toFixed(2))
      root.style.setProperty('--py', ((e.clientY / window.innerHeight) * 100).toFixed(2))
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [ref])
}
