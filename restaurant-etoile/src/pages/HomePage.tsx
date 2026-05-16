import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuBook } from '../components/MenuBook'
import { useI18n } from '../i18n/useI18n'
import { getMenuPages } from '../data/menus'

export function HomePage() {
  const { locale, u } = useI18n()
  const location = useLocation()
  const pages = getMenuPages(locale)

  useEffect(() => {
    if (location.hash !== '#menu') return
    const id = window.requestAnimationFrame(() => {
      document.getElementById('menu')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
    return () => window.cancelAnimationFrame(id)
  }, [location.pathname, location.hash])

  return (
    <main>
      <section id="accueil" className="hero">
        <div className="hero-inner">
          <p className="hero-kicker">{u.home.kicker}</p>
          <h1 className="hero-title">
            {u.home.title1}
            <br />
            <span className="hero-title-accent">{u.home.titleAccent}</span>
          </h1>
          <p className="hero-lead">{u.home.lead}</p>
          <Link className="hero-cta" to={`/${locale}/reservation`}>
            {u.home.cta}
          </Link>
        </div>
        <div className="hero-panel" aria-hidden>
          <img
            className="hero-panel-img"
            src={`${import.meta.env.BASE_URL}photos/hero.jpg`}
            alt=""
            width={1200}
            height={800}
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-panel-overlay" />
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="section-head">
          <p className="section-kicker">{u.menuSection.kicker}</p>
          <h2 className="section-title">{u.menuSection.title}</h2>
          <p className="section-desc">{u.menuSection.desc}</p>
        </div>
        <MenuBook pages={pages} labels={u.menuBook} />
      </section>

      <section className="split">
        <div className="split-text">
          <p className="section-kicker">{u.home.splitKicker}</p>
          <h2 className="section-title">{u.home.splitTitle}</h2>
          <p>{u.home.splitBody}</p>
        </div>
        <blockquote className="split-quote">
          {u.home.quote}
          <cite>{u.home.quoteCite}</cite>
        </blockquote>
      </section>
    </main>
  )
}
