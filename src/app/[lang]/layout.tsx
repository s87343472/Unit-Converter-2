import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LanguageProvider from '@/components/shared/LanguageProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'
import { isValidLocale, locales, i18n } from '@/lib/i18n/config'
import { headers } from 'next/headers'
import { seoConfig } from '@/lib/i18n/seo'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: {
    lang: string
  }
}

export async function generateMetadata({ params: { lang } }: Props): Promise<Metadata> {
  const languages = i18n.locales.reduce((acc, locale) => {
    acc[locale] = `https://metric-converter.com/${locale}`
    return acc
  }, {} as Record<string, string>)

  const seo = seoConfig[lang as keyof typeof seoConfig]
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  const path = pathname.replace(`/${lang}`, '') || '/'

  return {
    metadataBase: new URL('https://metric-converter.com'),
    title: {
      template: `%s | ${seo.title}`,
      default: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://metric-converter.com/${lang}`,
      languages,
    },
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
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://metric-converter.com/${lang}${path}`,
      siteName: 'Metric Converter',
      locale: lang,
      type: 'website',
    },
  }
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
    <LanguageProvider defaultLanguage={params.lang}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
} 