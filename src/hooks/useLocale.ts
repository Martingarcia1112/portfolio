import { useContext } from 'react'
import { LocaleContext, type LocaleContextValue } from '../context/locale-context'

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale debe usarse dentro de LocaleProvider')
  return ctx
}
