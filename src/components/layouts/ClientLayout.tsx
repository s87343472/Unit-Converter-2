'use client'

import { ReactNode } from 'react'
import LanguageProvider from '@/components/shared/LanguageProvider'
import { defaultLocale } from '@/lib/i18n/config'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider defaultLanguage={defaultLocale}>
      {children}
    </LanguageProvider>
  )
} 