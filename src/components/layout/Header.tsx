'use client'

import { useLanguage } from '@/components/shared/LanguageProvider'
import LanguageSwitcher from '@/components/shared/LanguageSwitcher'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { t, language } = useLanguage()
  const pathname = usePathname()
  
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href={`/${language}`} 
          className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors"
        >
          {t.common.title}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  )
} 