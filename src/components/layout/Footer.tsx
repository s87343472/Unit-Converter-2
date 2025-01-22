'use client'

import { useLanguage } from '@/components/shared/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600">
          © {currentYear} {t?.common?.title || 'Unit Converter'}. {t?.common?.copyright || 'All rights reserved.'}</div>
      </div>
    </footer>
  )
} 