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
    lang: ValidLocale
  }
}

export async function generateMetadata({ params: { lang } }: Props): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  const path = pathname.replace(`/${lang}`, '') || '/'
  const baseUrl = 'https://metric-converter.com'

  // 生成所有语言版本的URL
  const languages = i18n.locales.reduce((acc, locale) => {
    acc[locale] = `${baseUrl}/${locale}${path}`
    return acc
  }, {} as Record<ValidLocale, string>)

  // 添加x-default
  languages['x-default' as ValidLocale] = `${baseUrl}/en${path}`

  // 获取SEO配置，如果没有找到对应语言的配置，使用英文配置
  const seo = seoConfig[lang] || seoConfig['en']
  const currentUrl = `${baseUrl}/${lang}${path}`

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
      locale: searchEngineLocales[lang],
      alternateLocale: Object.values(searchEngineLocales).filter(l => l !== searchEngineLocales[lang]),
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