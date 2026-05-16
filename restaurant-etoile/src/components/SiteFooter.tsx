import { useMemo } from 'react'
import { useI18n } from '../i18n/useI18n'
import type { Locale } from '../types/locale'

const ADDRESS_FOR_MAP =
  'Rue de la Régence 12, 1000 Bruxelles, Belgium'

/** Liens factices pour la démo */
const SOCIAL = {
  instagram: 'https://www.instagram.com/aubergedupave.demo/',
  whatsapp: 'https://wa.me/32200055500',
  facebook: 'https://www.facebook.com/AubergeDuPaveDemo',
} as const

function mapEmbedSrc(locale: Locale): string {
  const hl =
    locale === 'en' ? 'en' : locale === 'nl' ? 'nl' : locale === 'de' ? 'de' : 'fr'
  const q = encodeURIComponent(ADDRESS_FOR_MAP)
  return `https://maps.google.com/maps?q=${q}&hl=${hl}&z=16&output=embed`
}

function IconInsta() {
  return (
    <svg
      className="footer-social-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg
      className="footer-social-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg
      className="footer-social-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  )
}

export function SiteFooter() {
  const { locale, u } = useI18n()
  const mapSrc = useMemo(() => mapEmbedSrc(locale), [locale])

  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-block">
          <p className="site-footer-name">{u.footer.line1}</p>
          <p className="site-footer-address">{u.footer.line2}</p>
          <h2 className="site-footer-heading">{u.footer.hoursTitle}</h2>
          <ul className="site-footer-hours">
            <li>{u.footer.hoursLunch}</li>
            <li>{u.footer.hoursDinner}</li>
            <li>{u.footer.hoursDays}</li>
            <li className="site-footer-hours--closed">{u.footer.hoursClosed}</li>
          </ul>
        </div>

        <div className="site-footer-block site-footer-block--map">
          <h2 className="site-footer-heading">{u.footer.mapTitle}</h2>
          <div className="site-footer-map">
            <iframe
              title={u.footer.mapIframeTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="site-footer-social-wrap">
        <p className="site-footer-heading">{u.footer.socialTitle}</p>
        <p className="site-footer-social-demo">{u.footer.socialDemo}</p>
        <div className="site-footer-social">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social-link"
            aria-label={u.footer.socialInstagram}
          >
            <IconInsta />
            <span>{u.footer.socialInstagram}</span>
          </a>
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social-link"
            aria-label={u.footer.socialWhatsapp}
          >
            <IconWhatsApp />
            <span>{u.footer.socialWhatsapp}</span>
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-social-link"
            aria-label={u.footer.socialFacebook}
          >
            <IconFacebook />
            <span>{u.footer.socialFacebook}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
