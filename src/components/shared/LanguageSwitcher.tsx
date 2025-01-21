'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, type ValidLocale } from '@/lib/i18n/config'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.split('/')[1] as ValidLocale
  const currentPath = pathname.split('/').slice(2).join('/')

  const handleLanguageChange = (newLocale: ValidLocale) => {
    const newPath = `/${newLocale}/${currentPath}`
    router.push(newPath)
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value as ValidLocale)}
        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </div>
  )
} 