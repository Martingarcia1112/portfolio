import { createContext } from 'react'

export type Locale = 'es' | 'en'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
