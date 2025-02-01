'use client'

import { useState, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { locales, localeNames, defaultLocale, type ValidLocale } from '@/lib/i18n/config'
import { useLanguage } from './LanguageProvider'

const LANGUAGE_KEY = 'preferred_language'

// 防抖函数
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)

  // 获取不包含语言代码的路径
  const getPathWithoutLang = useCallback((path: string) => {
    const parts = path.split('/')
    // 如果当前路径包含语言代码，则移除它
    if (parts.length > 1 && locales.includes(parts[1] as ValidLocale)) {
      return '/' + parts.slice(2).join('/')
    }
    return path
  }, [])

  // 处理语言切换
  const handleLanguageChange = useCallback(async (newLocale: ValidLocale) => {
    if (newLocale === language || isChanging) {
      return
    }

    setIsChanging(true)
    try {
      // 更新语言状态
      setLanguage(newLocale)
      localStorage.setItem(LANGUAGE_KEY, newLocale)
      
      // 构建新的路径
      const pathWithoutLang = getPathWithoutLang(pathname)
      const newPath = newLocale === defaultLocale
        ? pathWithoutLang
        : `/${newLocale}${pathWithoutLang}`
      
      // 使用 router.push 进行导航
      router.push(newPath)
    } catch (error) {
      console.error('Error switching language:', error)
      setLanguage(language)
      localStorage.setItem(LANGUAGE_KEY, language)
    } finally {
      setTimeout(() => setIsChanging(false), 500)
    }
  }, [language, isChanging, pathname, router, setLanguage, getPathWithoutLang])

  return (
    <div className="relative inline-block text-left">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as ValidLocale)}
        disabled={isChanging}
        className={`
          block w-40 rounded-md border-2 py-2 pl-3 pr-10 text-base 
          transition-all duration-200 ease-in-out
          ${isChanging
            ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
            : 'border-indigo-500 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-white text-gray-900'
          }
          font-medium sm:text-sm
        `}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} className="py-1">
            {localeNames[locale]}
            {isChanging && locale === language && ' (切换中...)'}
          </option>
        ))}
      </select>
    </div>
  )
} 