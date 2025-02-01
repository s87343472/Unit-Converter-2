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
    default: 'Metric Converter - Professional Online Unit Conversion Tool',
  },
  description: 'Free online unit converter with 20+ measurement types including length, area, volume, weight, temperature, pressure, and more. Real-time conversion with scientific notation support.',
  metadataBase: new URL('https://www.metric-converter.com'),
  applicationName: 'Metric Converter',
  authors: [{ name: 'Metric Converter Team' }],
  generator: 'Next.js',
  keywords: ['unit converter', 'metric converter', 'measurement converter', 'unit conversion tool', 'online calculator'],
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      'en': 'https://www.metric-converter.com',
      'zh': 'https://www.metric-converter.com/zh',
      'x-default': 'https://www.metric-converter.com'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: 'https://www.metric-converter.com',
    siteName: 'metric-converter',
    title: 'metric-converter - Professional Metric Conversion Tool',
    description: 'Free online metric converter with 20+ measurement types. Convert between metric, imperial and other units instantly.',
    images: [
      {
        url: 'https://www.metric-converter.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'metric-converter Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@metricconverter',
    creator: '@metricconverter',
    title: 'metric-converter - Metric Conversion Made Easy',
    description: 'Professional metric conversion tool supporting 20+ measurement types. Convert between metric, imperial and other units instantly.',
    images: ['https://www.metric-converter.com/twitter-card.png'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'yandex-verification': 'yandex-verification-code',
      'baidu-site-verification': 'baidu-verification-code',
      'msvalidate.01': 'bing-verification-code'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
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
