import { useRef, useState } from 'react'
import { IconGithub, IconGmail, IconGoogleMaps, IconLinkedIn, IconWhatsapp } from './ContactIcons'
import { useLocale } from './hooks/useLocale'
import { personal, sectionIds } from './data/cvContent'
import { CV_PATHS, getSiteContent } from './i18n/siteContent'
import { useActiveSection } from './hooks/useActiveSection'
import { useAmbientPointer } from './hooks/useAmbientPointer'
import { useSyncDocumentLang } from './hooks/useSyncDocumentLang'
import styles from './Portfolio.module.scss'

const PHOTO = '/images/profile.jpg'

export function Portfolio() {
  const shellRef = useRef<HTMLDivElement>(null)
  const { locale, setLocale } = useLocale()
  const c = getSiteContent(locale)
  useSyncDocumentLang(c)
  useAmbientPointer(shellRef)
  const active = useActiveSection()
  const [photoOk, setPhotoOk] = useState(true)
  const phoneDigits = personal.phone.replace(/\D/g, '')
  const whatsappHref = `https://wa.me/${phoneDigits}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personal.location)}`

  return (
    <div ref={shellRef} className={styles.shell}>
      <div className={styles.spotlight} aria-hidden />
      <div className={styles.layer}>
        <header className={styles.header}>
          <div className={styles.headerBar}>
            <nav className={`${styles.nav} ${styles.headerNav}`} aria-label={c.navAria}>
              <ul className={styles.navList}>
                {c.navItems.map(({ id, label }) => (
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
            <div className={styles.headerEnd} role="group" aria-label={c.langSwitch.groupAria}>
              <button
                type="button"
                className={locale === 'es' ? styles.langBtnActive : styles.langBtn}
                aria-pressed={locale === 'es'}
                onClick={() => setLocale('es')}
              >
                {c.langSwitch.es}
              </button>
              <button
                type="button"
                className={locale === 'en' ? styles.langBtnActive : styles.langBtn}
                aria-pressed={locale === 'en'}
                onClick={() => setLocale('en')}
              >
                {c.langSwitch.en}
              </button>
            </div>
          </div>
        </header>

        <main className={styles.mainWrap}>
          <section
            id={sectionIds.home}
            className={styles.hero}
            aria-labelledby="hero-name"
          >
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>{c.hero.kicker}</p>
                <h1 id="hero-name" className={styles.heroName}>
                  {personal.name}
                </h1>
                <p className={styles.heroRole}>{c.hero.role}</p>
                <p className={styles.heroAvailability}>{c.hero.availability}</p>
                <div className={styles.heroActions}>
                  <a className={styles.btnPrimary} href={`#${sectionIds.contact}`}>
                    {c.hero.contactCta}
                  </a>
                  <a className={styles.btnGhost} href={`#${sectionIds.experience}`}>
                    {c.hero.experienceCta}
                  </a>
                </div>
                <div className={styles.heroCv} role="region" aria-labelledby="hero-cv-heading">
                  <p id="hero-cv-heading" className={styles.heroCvIntro}>
                    {c.cv.intro}
                  </p>
                  <div className={styles.heroCvRow}>
                    <a className={styles.btnCv} href={CV_PATHS.es} download>
                      {c.cv.downloadEs}
                    </a>
                    <a className={styles.btnCv} href={CV_PATHS.en} download>
                      {c.cv.downloadEn}
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroGlow} aria-hidden />
                {photoOk ? (
                  <img
                    src={PHOTO}
                    alt={c.photo.alt(personal.name)}
                    className={styles.photo}
                    width={320}
                    height={400}
                    loading="eager"
                    decoding="async"
                    onError={() => setPhotoOk(false)}
                  />
                ) : (
                  <div className={styles.photoFallback} role="img" aria-label={c.photo.fallbackLabel}>
                    <span>
                      <code>{c.photo.fallbackHint}</code>
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
                <h2 id="h-about" className={styles.blockTitle}>
                  {c.sections.about}
                </h2>
              </header>
              <div className={styles.about}>
                {c.aboutParagraphs.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          </section>

          <section id={sectionIds.skills} className={styles.block} aria-labelledby="h-skills">
            <div className={styles.blockInner}>
              <header className={styles.blockHead}>
                <h2 id="h-skills" className={styles.blockTitle}>
                  {c.sections.skills}
                </h2>
              </header>
              <div className={styles.skillsGrid}>
                {c.skillGroups.map((g) => (
                  <article key={`${locale}-${g.category}`} className={styles.skillCard}>
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
                <h2 id="h-exp" className={styles.blockTitle}>
                  {c.sections.experience}
                </h2>
              </header>
              <ol className={styles.timeline}>
                {c.experience.map((job, i) => (
                  <li key={`${job.role}-${job.period}`} className={styles.tlItem}>
                    <div className={styles.tlMark} aria-hidden>
                      <span className={styles.tlDot} />
                      {i < c.experience.length - 1 ? <span className={styles.tlLine} /> : null}
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
                <h2 id="h-edu" className={styles.blockTitle}>
                  {c.sections.education}
                </h2>
              </header>
              <ul className={styles.eduList}>
                {c.education.map((e) => (
                  <li key={`${e.institution}-${e.period}-${e.title}`} className={styles.eduCard}>
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
                <h2 id="h-contact" className={styles.blockTitle}>
                  {c.sections.contact}
                </h2>
              </header>
              <div className={styles.contactGrid}>
                <p className={styles.contactLead}>{c.contact.lead}</p>
                <dl className={styles.contactCard}>
                  <div className={styles.contactRow}>
                    <dt>{c.contact.gmail}</dt>
                    <dd>
                      <a className={styles.contactLine} href={`mailto:${personal.email}`}>
                        <IconGmail className={styles.contactIcon} />
                        <span>{personal.email}</span>
                      </a>
                    </dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>{c.contact.whatsapp}</dt>
                    <dd>
                      <a
                        className={styles.contactLine}
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={c.contact.whatsappAria}
                      >
                        <IconWhatsapp className={styles.contactIcon} />
                        <span>{personal.phone}</span>
                      </a>
                    </dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>{c.contact.location}</dt>
                    <dd>
                      <a
                        className={styles.contactLine}
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={c.contact.mapsAria(personal.location)}
                      >
                        <IconGoogleMaps className={styles.contactIcon} />
                        <span>{personal.location}</span>
                      </a>
                    </dd>
                  </div>
                  <div className={styles.contactRow}>
                    <dt>{c.contact.social}</dt>
                    <dd>
                      <div className={styles.contactSocial}>
                        <a
                          className={styles.socialPill}
                          href={personal.linkedin.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconLinkedIn className={styles.socialIcon} />
                          {personal.linkedin.label}
                        </a>
                        <a
                          className={styles.socialPill}
                          href={personal.github.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconGithub className={styles.socialIcon} />
                          {personal.github.label}
                        </a>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
        </footer>
      </div>
    </div>
  )
}
