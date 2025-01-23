import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layouts/ClientLayout'

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
  alternates: {
    languages: {
      'x-default': '/'
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body style={{
        minHeight: '100vh',
        color: 'rgb(var(--foreground-rgb))',
        background: 'rgb(var(--background-rgb))'
      }} className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
