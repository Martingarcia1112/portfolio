import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { ContactSection } from './components/ContactSection'
import { SiteFooter } from './components/SiteFooter'
import styles from './App.module.scss'

/**
 * Raíz de la aplicación: orden de secciones del portfolio y contenedor principal.
 * Cada bloque está en su propio componente para mantener el CV fácil de extender.
 */
function App() {
  return (
    <>
      <a className="skipLink" href="#inicio">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main className={styles.main} role="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
