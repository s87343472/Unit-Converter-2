'use client'

import { ReactNode } from 'react'
import LanguageProvider from '@/components/shared/LanguageProvider'
import Header from '@/components/layout/Header'
import { defaultLocale } from '@/lib/i18n/config'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider defaultLanguage={defaultLocale}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </LanguageProvider>
  )
} 