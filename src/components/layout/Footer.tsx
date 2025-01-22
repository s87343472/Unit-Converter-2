'use client'

import { useLanguage } from '@/components/shared/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">{t?.footer?.about}</h3>
            <p className="text-sm text-gray-600">{t?.footer?.description}</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">{t?.footer?.contact}</h3>
            <p className="text-sm text-gray-600">{t?.footer?.email}</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">{t?.footer?.legal}</h3>
            <p className="text-sm text-gray-600">
              © {currentYear} {t?.common?.title}. {t?.common?.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 