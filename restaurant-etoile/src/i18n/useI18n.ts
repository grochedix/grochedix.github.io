import { useParams } from 'react-router-dom'
import { isLocale, type Locale } from '../types/locale'
import { getUi } from './ui'

export function useI18n() {
  const { lang } = useParams<{ lang: string }>()
  const locale: Locale = isLocale(lang) ? lang : 'fr'
  return { locale, u: getUi(locale) }
}
