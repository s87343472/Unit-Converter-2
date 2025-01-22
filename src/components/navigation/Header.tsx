'use client'

import Link from 'next/link'
import LanguageSwitcher from '../shared/LanguageSwitcher'
import { useLanguage } from '../shared/LanguageProvider'

export default function Header() {
  const { language, t } = useLanguage()

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${language}`} className="text-xl font-bold text-gray-800">
            {t.common.title}
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
} 