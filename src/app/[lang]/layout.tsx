import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LanguageProvider from '@/components/shared/LanguageProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'
import { isValidLocale } from '@/lib/i18n/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unit Converter - A powerful online unit conversion tool',
  description: 'A powerful online unit conversion tool that supports various unit conversions.',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isValidLocale(params.lang)) {
    return null
  }

  return (
    <html lang={params.lang} className={inter.className}>
      <body style={{
        minHeight: '100vh',
        color: 'rgb(var(--foreground-rgb))',
        background: 'rgb(var(--background-rgb))'
      }}>
        <LanguageProvider defaultLanguage={params.lang}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
} 