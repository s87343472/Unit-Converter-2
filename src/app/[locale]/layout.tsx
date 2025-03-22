import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LanguageProvider from '@/components/shared/LanguageProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'
import { isValidLocale, locales, i18n, searchEngineLocales, ValidLocale } from '@/lib/i18n/config'
import { headers } from 'next/headers'
import { seoConfig } from '@/lib/i18n/seo'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  params: {
    locale: ValidLocale
  }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  const path = pathname.replace(`/${locale}`, '') || '/'
  const baseUrl = 'https://www.metric-converter.com'

  // 生成所有语言版本的URL
  const languages = i18n.locales.reduce((acc, loc) => {
    acc[loc] = `${baseUrl}/${loc}${path}`
    return acc
  }, {} as Record<ValidLocale, string>)

  // 添加x-default
  languages['x-default' as ValidLocale] = `${baseUrl}/en${path}`

  // 获取SEO配置，如果没有找到对应语言的配置，使用英文配置
  const seo = seoConfig[locale] || seoConfig['en']
  const currentUrl = `${baseUrl}/${locale}${path}`

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${seo.title}`,
      default: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: currentUrl,
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
      url: currentUrl,
      siteName: 'Metric Converter',
      locale: searchEngineLocales[locale],
      alternateLocale: Object.values(searchEngineLocales).filter(l => l !== searchEngineLocales[locale]),
      type: 'website',
    },
    other: {
      'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    }
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isValidLocale(params.locale)) {
    return null
  }

  return (
    <LanguageProvider defaultLanguage={params.locale}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
} 