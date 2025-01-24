import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layouts/ClientLayout'
import Analytics from '@/components/shared/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Metric Converter',
    default: 'Metric Converter - Online Unit Conversion Tool',
  },
  description: 'Metric Converter is a powerful online tool for converting between different units of measurement. Support length, area, volume, weight, and more.',
  metadataBase: new URL('https://www.metric-converter.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    languages: {
      'x-default': 'https://www.metric-converter.com'
    }
  },
  openGraph: {
    title: 'Metric Converter',
    description: 'A powerful online unit conversion tool',
    url: 'https://www.metric-converter.com',
    siteName: 'Metric Converter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metric Converter',
    description: 'A powerful online unit conversion tool',
  },
  verification: {
    google: 'google-site-verification-code',
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
        <Analytics />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
