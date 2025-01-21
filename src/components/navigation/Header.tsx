'use client'

import Link from 'next/link'
import LanguageSwitcher from '../shared/LanguageSwitcher'

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} className="text-xl font-bold text-gray-800">
            单位转换器
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
} 