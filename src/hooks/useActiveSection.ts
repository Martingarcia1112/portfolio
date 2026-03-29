import { useEffect, useState } from 'react'
import { sectionIds } from '../data/cvContent'

/** Nav activo según la sección más visible (IntersectionObserver). */
const observedIds = [
  sectionIds.home,
  sectionIds.about,
  sectionIds.skills,
  sectionIds.experience,
  sectionIds.education,
  sectionIds.contact,
] as const

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState<string>(sectionIds.home)

  useEffect(() => {
    const elements = observedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-12% 0px -50% 0px',
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
