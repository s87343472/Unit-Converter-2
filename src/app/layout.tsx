import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LanguageProvider from '@/components/shared/LanguageProvider'
import { defaultLocale } from '@/lib/i18n/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Unit Converter',
    default: 'Unit Converter',
  },
  description: 'A powerful online unit conversion tool that supports various unit conversions.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider defaultLanguage={defaultLocale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
