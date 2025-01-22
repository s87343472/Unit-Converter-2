'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { locales, localeNames, type ValidLocale, defaultLocale } from '@/lib/i18n/config'
import { useLanguage } from './LanguageProvider'
import { translations } from '@/lib/i18n/translations'

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
  const { t, language, setLanguage } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const currentLang = pathname.split('/')[1] as ValidLocale

  useEffect(() => {
    if (t) {
      setIsLoading(false)
    }
  }, [t])

  // 检查语言是否支持
  const isLanguageSupported = useCallback((locale: string): locale is ValidLocale => {
    return locales.includes(locale as ValidLocale) && !!translations[locale as ValidLocale]
  }, [])

  // 获取不包含语言代码的路径
  const getPathWithoutLang = useCallback((path: string) => {
    const parts = path.split('/')
    return parts.length > 2 ? parts.slice(2).join('/') : ''
  }, [])

  // 防抖处理的语言切换函数
  const debouncedHandleLanguageChange = useCallback(
    debounce(async (newLocale: ValidLocale) => {
      if (newLocale === currentLang || isChanging) return
      if (!isLanguageSupported(newLocale)) {
        console.warn(`Language ${newLocale} is not supported yet`)
        return
      }

      setIsChanging(true)
      try {
        // 先更新语言状态
        setLanguage(newLocale)
        localStorage.setItem(LANGUAGE_KEY, newLocale)
        
        // 构建新的路径
        const pathWithoutLang = getPathWithoutLang(pathname)
        const newPath = `/${newLocale}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`
        
        // 使用 router.push 进行导航
        await router.push(newPath)
        
        // 强制重新加载翻译
        if (translations[newLocale]) {
          setLanguage(newLocale)
        }
      } catch (error) {
        console.error('Error switching language:', error)
        // 如果出错，回退到默认语言
        if (newLocale !== defaultLocale) {
          const pathWithoutLang = getPathWithoutLang(pathname)
          const fallbackPath = `/${defaultLocale}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`
          await router.push(fallbackPath)
          setLanguage(defaultLocale)
        }
      } finally {
        setTimeout(() => setIsChanging(false), 500)
      }
    }, 300),
    [currentLang, isChanging, pathname, router, setLanguage, isLanguageSupported, getPathWithoutLang]
  )

  // 从 localStorage 加载首选语言
  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_KEY)
    if (savedLang && 
        savedLang !== currentLang && 
        isLanguageSupported(savedLang)) {
      debouncedHandleLanguageChange(savedLang as ValidLocale)
    } else {
      localStorage.setItem(LANGUAGE_KEY, currentLang)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="relative inline-block text-left">
        <div className="block w-40 rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base bg-gray-100">
          {localeNames[currentLang]}
        </div>
      </div>
    )
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLang}
        onChange={(e) => debouncedHandleLanguageChange(e.target.value as ValidLocale)}
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
        aria-label={t?.common?.selectLanguage || 'Select language'}
      >
        {locales.filter(isLanguageSupported).map((locale) => (
          <option key={locale} value={locale} className="py-1">
            {localeNames[locale]}
            {isChanging && locale === currentLang && ' (切换中...)'}
          </option>
        ))}
      </select>
    </div>
  )
} 