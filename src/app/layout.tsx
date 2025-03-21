import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Analytics from '@/components/shared/Analytics'
import LanguageProvider from '@/components/shared/LanguageProvider'
import { locales } from '@/lib/i18n/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.metric-converter.com'

// 生成所有语言版本的 URL
const generateLanguageAlternates = (path: string = '') => {
  return locales.reduce((acc, locale) => {
    acc[locale] = `${baseUrl}/${locale}${path}`
    return acc
  }, {} as Record<string, string>)
}

export const metadata: Metadata = {
  title: 'Metric Converter',
  description: 'A powerful online unit conversion tool',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: generateLanguageAlternates(),
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Metric Converter',
    description: 'A powerful online unit conversion tool',
    siteName: 'Metric Converter',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Metric Converter - A powerful online unit conversion tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metric Converter',
    description: 'A powerful online unit conversion tool',
    images: [`${baseUrl}/og-image.png`]
  }
}

// 结构化数据
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Metric Converter',
  description: 'A powerful online unit conversion tool',
  url: baseUrl,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  inLanguage: locales,
  author: {
    '@type': 'Organization',
    name: 'Metric Converter',
    url: baseUrl
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
        {/* 添加 hreflang 标签 */}
        {locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`${baseUrl}/${locale}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        {/* 添加结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{
        minHeight: '100vh',
        color: 'rgb(var(--foreground-rgb))',
        background: 'rgb(var(--background-rgb))'
      }} className="font-sans antialiased">
        <Analytics />
        <LanguageProvider defaultLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
