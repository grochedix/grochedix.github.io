import { Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { isLocale } from '../types/locale'
import { NotFoundPage } from '../pages/NotFoundPage'

export function LangOutlet() {
  const { lang } = useParams<{ lang: string }>()

  useEffect(() => {
    if (isLocale(lang)) {
      document.documentElement.lang = lang
      try {
        localStorage.setItem('lang', lang)
        localStorage.setItem('lunathon-locale', lang)
      } catch {}
    } else {
      document.documentElement.lang = 'fr'
    }
  }, [lang])

  if (!isLocale(lang)) {
    return <NotFoundPage />
  }

  return <Outlet />
}
