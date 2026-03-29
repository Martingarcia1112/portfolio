import { useEffect } from 'react'
import type { SiteContent } from '../i18n/siteContent'

export function useSyncDocumentLang(content: SiteContent) {
  useEffect(() => {
    document.documentElement.lang = content.htmlLang
    document.title = content.documentTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', content.documentDescription)
  }, [content])
}
