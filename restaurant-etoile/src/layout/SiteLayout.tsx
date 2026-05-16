import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { useI18n } from '../i18n/useI18n'
import { LOCALES, type Locale } from '../types/locale'
import '../App.css'

function langPath(locale: Locale, pathname: string) {
  const rest = pathname.replace(/^\/[^/]+/, '') || '/'
  if (rest === '/') return `/${locale}`
  return `/${locale}${rest}`
}

export function SiteLayout() {
  const { lang } = useParams<{ lang: string }>()
  const location = useLocation()
  const { u } = useI18n()
  const base = `/${lang ?? 'fr'}`

  return (
    <div className="site">
      <header className="site-header">
        <NavLink to={base} className="site-brand-link" end>
          <div className="site-brand">
            <span className="site-star" aria-hidden>
              ✶
            </span>
            <div>
              <span className="site-name">L’Auberge du Pavé</span>
              <span className="site-tag">{u.brandTag}</span>
            </div>
          </div>
        </NavLink>
        <nav className="site-nav" aria-label={u.nav.ariaMain}>
          <NavLink to={base} end className={({ isActive }) => (isActive ? 'active' : '')}>
            {u.nav.home}
          </NavLink>
          <Link to={`${base}#menu`} className="site-nav-anchor">
            {u.nav.menu}
          </Link>
          <NavLink
            to={`${base}/equipe`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {u.nav.team}
          </NavLink>
          <NavLink
            to={`${base}/reservation`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {u.nav.reserve}
          </NavLink>
        </nav>
        <div className="lang-switch" role="navigation" aria-label={u.langAria}>
          {LOCALES.map((loc) => (
            <NavLink
              key={loc}
              to={langPath(loc, location.pathname)}
              className={({ isActive }) =>
                isActive ? 'lang-link lang-link--active' : 'lang-link'
              }
            >
              {u.lang[loc]}
            </NavLink>
          ))}
        </div>
      </header>

      <Outlet />

      <SiteFooter />
    </div>
  )
}
