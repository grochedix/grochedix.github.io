import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

export function NotFoundPage() {
  const { u } = useI18n()

  return (
    <section className="not-found">
      <p className="not-found-code" aria-hidden>
        404
      </p>
      <h1 className="not-found-title">{u.notFound.title}</h1>
      <p className="not-found-body">{u.notFound.body}</p>
      <Link to="/fr" className="not-found-cta">
        {u.notFound.cta}
      </Link>
    </section>
  )
}
