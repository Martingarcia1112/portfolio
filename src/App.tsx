import { LocaleProvider } from './context/LocaleProvider'
import { useLocale } from './hooks/useLocale'
import { getSiteContent } from './i18n/siteContent'
import { Portfolio } from './Portfolio'

function AppContent() {
  const { locale } = useLocale()
  const c = getSiteContent(locale)
  return (
    <>
      <a className="skipLink" href="#inicio">
        {c.skipToContent}
      </a>
      <Portfolio />
    </>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  )
}
