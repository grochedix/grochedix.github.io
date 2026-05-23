import { type FormEvent, lazy, type ReactNode, Suspense, useEffect, useState } from 'react'
import {
  COPY,
  getInitialLocale,
  LOCALE_OPTIONS,
  LOCALE_STORAGE_KEY,
  type Locale,
} from './locales'
import SocialFooter from './SocialFooter'
import { useReducedMotion } from './useReducedMotion'

const OrbitalScene = lazy(() => import('./OrbitalScene'))
import './App.css'

const THEME_STORAGE_KEY = 'lunathon-theme'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const fromDoc = document.documentElement.dataset.theme
  if (fromDoc === 'light' || fromDoc === 'dark') return fromDoc
  try {
    const s = localStorage.getItem(THEME_STORAGE_KEY)
    if (s === 'light' || s === 'dark') return s
  } catch {
    /* ignore */
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

function renderBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [registered, setRegistered] = useState(false)
  const reducedMotion = useReducedMotion()
  const m = COPY[locale]

  useEffect(() => {
    document.documentElement.lang = m.htmlLang
    document.title = m.docTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', m.metaDescription)
  }, [m.docTitle, m.htmlLang, m.metaDescription])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  function setTheme(next: Theme) {
    setThemeState(next)
  }

  function setLocalePersist(next: Locale) {
    setLocale(next)
    setRegistered(false)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setRegistered(true)
  }

  return (
    <div className="page">
      <div className="stars" aria-hidden />
      <div className="wrap">
        <header className="nav">
          <div className="nav-brand">
            <a className="logo" href="#top">
              Luna<span>thón</span>
            </a>
            <div className="theme-switcher" role="group" aria-label={m.theme.switcher}>
              <button
                type="button"
                className={`theme-btn${theme === 'dark' ? ' is-active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-pressed={theme === 'dark'}
              >
                {m.theme.dark}
              </button>
              <button
                type="button"
                className={`theme-btn${theme === 'light' ? ' is-active' : ''}`}
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
              >
                {m.theme.light}
              </button>
            </div>
          </div>
          <div className="nav-right">
            <div className="lang-switcher" role="group" aria-label={m.langSwitcher}>
              {LOCALE_OPTIONS.map(({ locale: code, label }) => (
                <button
                  key={code}
                  type="button"
                  className={`lang-btn${locale === code ? ' is-active' : ''}`}
                  onClick={() => setLocalePersist(code)}
                  aria-pressed={locale === code}
                >
                  {label}
                </button>
              ))}
            </div>
            <nav className="nav-links" aria-label={m.navSections}>
              <a href="#course">{m.nav.course}</a>
              <a href="#dates">{m.nav.dates}</a>
              <a href="#parcours">{m.nav.parcours}</a>
              <a href="#inscription">{m.nav.registration}</a>
              <a href="#partenaires">{m.nav.partners}</a>
            </nav>
          </div>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <p className="hero-badge">{m.hero.badge}</p>
            <h1 id="hero-title">{m.hero.title}</h1>
            <p className="hero-lead">{m.hero.lead}</p>
            <div className="orbit-scene" aria-hidden>
              <Suspense
                fallback={<div className="orbit-canvas-wrap orbit-canvas-placeholder" />}
              >
                <OrbitalScene theme={theme} reducedMotion={reducedMotion} />
              </Suspense>
            </div>
          </section>

          <section id="course" aria-labelledby="course-title">
            <h2 className="section-title" id="course-title">
              {m.course.title}
            </h2>
            <div className="card">
              <p>{renderBold(m.course.p1)}</p>
              <p>{renderBold(m.course.p2)}</p>
            </div>
          </section>

          <section id="dates" aria-labelledby="dates-title">
            <h2 className="section-title" id="dates-title">
              {m.dates.title}
            </h2>
            <div className="dates-grid">
              <div className="date-box">
                <div className="day">30</div>
                <div className="month">{m.dates.month}</div>
                <p className="note">{m.dates.day30}</p>
              </div>
              <div className="date-box">
                <div className="day">31</div>
                <div className="month">{m.dates.month}</div>
                <p className="note">{renderBold(m.dates.day31)}</p>
              </div>
            </div>
            <p className="form-note" style={{ marginTop: '1rem' }}>
              {m.dates.footnote}
            </p>
          </section>

          <section id="parcours" aria-labelledby="parcours-title">
            <h2 className="section-title" id="parcours-title">
              {m.parcours.title}
            </h2>
            <div className="card">
              <ul className="timeline">
                {m.parcours.steps.map((step) => (
                  <li key={step}>{renderBold(step)}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="inscription" aria-labelledby="inscription-title">
            <h2 className="section-title" id="inscription-title">
              {m.registration.title}
            </h2>
            <div className="card">
              <p>{renderBold(m.registration.fee)}</p>
              {!registered ? (
                <form className="form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="nom">{m.registration.labelName}</label>
                    <input
                      id="nom"
                      name="nom"
                      required
                      placeholder={m.registration.placeholderName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">{m.registration.labelEmail}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={m.registration.placeholderEmail}
                    />
                  </div>
                  <div>
                    <label htmlFor="cat">{m.registration.labelCategory}</label>
                    <select id="cat" name="cat" defaultValue="solo">
                      <option value="solo">{m.registration.catSolo}</option>
                      <option value="relai">{m.registration.catRelay}</option>
                      <option value="marche">{m.registration.catWalk}</option>
                    </select>
                  </div>
                  <button type="submit" className="form-submit">
                    {m.registration.submit}
                  </button>
                  <p className="form-note">{m.registration.note}</p>
                </form>
              ) : (
                <div className="toast" role="status">
                  {m.registration.toast}
                </div>
              )}
            </div>
          </section>

          <section id="partenaires" aria-labelledby="partenaires-title">
            <h2 className="section-title" id="partenaires-title">
              {m.partners.title}
            </h2>
            <div className="partners">
              {m.partners.items.map((p) => (
                <article className="partner" key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.line}</p>
                </article>
              ))}
            </div>
          </section>

          <footer className="footer">
            <p>{m.footer.line1}</p>
            <p>{m.footer.line2}</p>
            <SocialFooter footer={m.footer} />
          </footer>
        </main>
      </div>
    </div>
  )
}
