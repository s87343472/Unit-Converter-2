import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/navigation/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Unit Converter',
  description: '在线单位转换工具',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header lang={params.lang} />
        <main className="min-h-screen bg-white">{children}</main>
      </body>
    </html>
  )
}
