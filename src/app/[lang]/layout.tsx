import { use } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/navigation/Header'
import { isValidLocale } from '@/lib/i18n/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '单位转换器',
  description: '一个功能强大的在线单位转换工具',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = use(Promise.resolve(params.lang))
  
  if (!isValidLocale(lang)) {
    // 如果语言无效，可以在这里处理重定向
    return null
  }

  return (
    <html lang={lang} className={inter.className}>
      <body>
        <Header lang={lang} />
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
} 