import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.ts'
import fr from '../locales/fr.ts'
import nl from '../locales/nl.ts'

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  nl: { translation: nl },
} as const

const fallbackLng: keyof typeof resources = 'fr'

function detectInitialLanguage(): keyof typeof resources {
  if (typeof window === 'undefined') return fallbackLng
  const stored = window.localStorage.getItem('lang') as keyof typeof resources | null
  if (stored && stored in resources) return stored
  const nav = navigator.language.slice(0, 2).toLowerCase()
  if (nav in resources) return nav as keyof typeof resources
  return fallbackLng
}

void i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    window.localStorage.setItem('lang', lng)
  } catch {
    /* ignore */
  }
})

document.documentElement.lang = i18n.language

export default i18n
