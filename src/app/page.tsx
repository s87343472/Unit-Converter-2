import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n/config'

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Unit Converter</h1>
      <p className="text-xl text-gray-600">
        A simple and intuitive unit conversion tool
      </p>
    </main>
  )
} 