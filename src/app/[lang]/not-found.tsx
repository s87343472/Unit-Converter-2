'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        {t.common.pageNotFound}
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        {t.common.pageNotFoundDesc}
      </p>
      <Link
        href={`/${language}`}
        className="mt-8 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        {t.common.backToHome}
      </Link>
    </div>
  )
} 