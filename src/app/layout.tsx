import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layouts/ClientLayout'
import Analytics from '@/components/shared/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '单位转换器',
  description: '一个功能强大的在线单位转换工具',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
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
