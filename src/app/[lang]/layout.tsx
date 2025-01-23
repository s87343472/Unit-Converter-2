import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LanguageProvider from '@/components/shared/LanguageProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'
import { isValidLocale, locales } from '@/lib/i18n/config'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const { lang } = params
  const languages: { [key: string]: string } = {}
  
  // 获取当前路径（不包括语言部分）
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  const path = pathname.replace(`/${lang}`, '') || '/'
  const host = headersList.get('host') || 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  
  // 为每个支持的语言添加hreflang
  locales.forEach(locale => {
    languages[locale] = `${protocol}://${host}/${locale}${path}`
  })
  
  // 添加x-default
  languages['x-default'] = path === '/' 
    ? `${protocol}://${host}/` 
    : `${protocol}://${host}/en${path}`
  
  return {
    title: 'Unit Converter - A powerful online unit conversion tool',
    description: 'A powerful online unit conversion tool that supports various unit conversions.',
    alternates: {
      languages
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
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
} 