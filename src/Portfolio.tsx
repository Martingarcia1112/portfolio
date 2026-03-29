import { useRef, useState } from 'react'
import {
  aboutParagraphs,
  education,
  experience,
  navItems,
  personal,
  sectionIds,
  skillGroups,
} from './data/cvContent'
import { useActiveSection } from './hooks/useActiveSection'
import { useAmbientPointer } from './hooks/useAmbientPointer'
import styles from './Portfolio.module.scss'

const PHOTO = '/images/profile.jpg'

export function Portfolio() {
  const shellRef = useRef<HTMLDivElement>(null)
  useAmbientPointer(shellRef)
  const active = useActiveSection()
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <div ref={shellRef} className={styles.shell}>
      <div className={styles.spotlight} aria-hidden />
      <div className={styles.layer}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a className={styles.brand} href={`#${sectionIds.home}`}>
              <span className={styles.brandDot} aria-hidden />
              MG
            </a>
            <nav className={styles.nav} aria-label="Secciones">
              <ul className={styles.navList}>
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={id === active ? styles.navLinkActive : styles.navLink}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section
            id={sectionIds.home}
            className={styles.hero}
            aria-labelledby="hero-name"
          >
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>Desde 2022 · stack web completo</p>
                <h1 id="hero-name" className={styles.heroName}>
                  {personal.name}
                </h1>
                <p className={styles.heroRole}>{personal.title}</p>
                <p className={styles.heroTag}>{personal.tagline}</p>
                <div className={styles.heroLinks}>
                  <a href={personal.linkedin.href} target="_blank" rel="noopener noreferrer">
                    {personal.linkedin.label} · {personal.linkedin.handle}
                  </a>
                  <span className={styles.linkDot} aria-hidden />
                  <a href={personal.github.href} target="_blank" rel="noopener noreferrer">
                    {personal.github.label} · {personal.github.handle}
                  </a>
                </div>
                <div className={styles.heroActions}>
                  <a className={styles.btnPrimary} href={`#${sectionIds.contact}`}>
                    Contactar
                  </a>
                  <a className={styles.btnGhost} href={`#${sectionIds.experience}`}>
                    Experiencia
                  </a>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroGlow} aria-hidden />
                {photoOk ? (
                  <img
                    src={PHOTO}
                    alt={`Retrato de ${personal.name}`}
                    className={styles.photo}
                    width={320}
                    height={400}
                    loading="eager"
                    decoding="async"
                    onError={() => setPhotoOk(false)}
                  />
                ) : (
                  <div className={styles.photoFallback} role="img" aria-label="Foto de perfil">
                    <span>
                      <code>public/images/profile.jpg</code>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section
            id={sectionIds.about}
            className={`${styles.block} ${styles.blockMuted}`}
            aria-labelledby="h-about"
          >
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <span className={styles.blockIdx}>01</span>
                <h2 id="h-about" className={styles.blockTitle}>
                  Sobre mí
                </h2>
              </header>
              <div className={styles.about}>
                {aboutParagraphs.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          </section>

          <section id={sectionIds.skills} className={styles.block} aria-labelledby="h-skills">
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <span className={styles.blockIdx}>02</span>
                <h2 id="h-skills" className={styles.blockTitle}>
                  Habilidades
                </h2>
              </header>
              <div className={styles.skillsGrid}>
                {skillGroups.map((g) => (
                  <article key={g.category} className={styles.skillCard}>
                    <h3>{g.category}</h3>
                    <ul className={styles.chips}>
                      {g.items.map((x) => (
                        <li key={x} className={styles.chip}>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id={sectionIds.experience}
            className={`${styles.block} ${styles.blockMuted}`}
            aria-labelledby="h-exp"
          >
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <span className={styles.blockIdx}>03</span>
                <h2 id="h-exp" className={styles.blockTitle}>
                  Experiencia
                </h2>
              </header>
              <ol className={styles.timeline}>
                {experience.map((job, i) => (
                  <li key={`${job.role}-${job.period}`} className={styles.tlItem}>
                    <div className={styles.tlMark} aria-hidden>
                      <span className={styles.tlDot} />
                      {i < experience.length - 1 ? <span className={styles.tlLine} /> : null}
                    </div>
                    <article className={styles.tlBody}>
                      <p className={styles.tlCo}>{job.company}</p>
                      <h3 className={styles.tlRole}>{job.role}</h3>
                      <p className={styles.tlWhen}>{job.period}</p>
                      <ul className={styles.tlBullets}>
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id={sectionIds.education} className={styles.block} aria-labelledby="h-edu">
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <span className={styles.blockIdx}>04</span>
                <h2 id="h-edu" className={styles.blockTitle}>
                  Educación
                </h2>
              </header>
              <ul className={styles.eduList}>
                {education.map((e) => (
                  <li key={e.title} className={styles.eduCard}>
                    <div className={styles.eduTop}>
                      <h3 className={styles.eduName}>{e.title}</h3>
                      {e.status ? <span className={styles.eduBadge}>{e.status}</span> : null}
                    </div>
                    <p className={styles.eduInst}>{e.institution}</p>
                    <p className={styles.eduWhen}>{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id={sectionIds.contact}
            className={`${styles.block} ${styles.blockMuted}`}
            aria-labelledby="h-contact"
          >
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <span className={styles.blockIdx}>05</span>
                <h2 id="h-contact" className={styles.blockTitle}>
                  Contacto
                </h2>
              </header>
              <div className={styles.contactGrid}>
                <p className={styles.contactLead}>
                  Si querés charlar sobre un proyecto o una oportunidad, escribime.
                </p>
                <dl className={styles.contactCard}>
                  <div className={styles.contactRow}>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${personal.email}`}>{personal.email}</a>
                    </dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>Teléfono</dt>
                    <dd>
                      <a href={`tel:+${personal.phone.replace(/\D/g, '')}`}>{personal.phone}</a>
                    </dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>Ubicación</dt>
                    <dd>{personal.location}</dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>Redes</dt>
                    <dd className={styles.contactSocial}>
                      <a href={personal.linkedin.href} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href={personal.github.href} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} {personal.name} · React + Vite
          </p>
          <p>Portfolio estático</p>
        </footer>
      </div>
    </div>
  )
}
