'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { defaultLocale, type ValidLocale, isValidLocale } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/translations'
import type { Translation } from '@/lib/i18n/types'
import { useRouter, usePathname } from 'next/navigation'

// 添加存储键常量
const LANGUAGE_HINT_STORAGE_KEY = 'language_hint_dismissed';

interface LanguageContextType {
  language: ValidLocale
  setLanguage: (lang: ValidLocale) => void
  browserLanguage: ValidLocale | null
  t: Translation
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLocale,
  setLanguage: () => {},
  browserLanguage: null,
  t: translations[defaultLocale]
})

export function useLanguage() {
  return useContext(LanguageContext)
}

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: ValidLocale
}

export default function LanguageProvider({ children, defaultLanguage = defaultLocale }: LanguageProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguageState] = useState<ValidLocale>(defaultLanguage)
  const [browserLanguage, setBrowserLanguage] = useState<ValidLocale | null>(null)
  const [showLanguageHint, setShowLanguageHint] = useState(false)
  const [translation, setTranslation] = useState<Translation>(() => {
    const trans = translations[defaultLanguage]
    if (!trans) {
      console.error(`Translation not found for language: ${defaultLanguage}, falling back to default`)
      return translations[defaultLocale]
    }
    return trans
  })

  // 更新语言并同时更新URL
  const setLanguage = (newLanguage: ValidLocale) => {
    if (newLanguage === language) return

    const currentPathname = pathname || ''
    const pathWithoutLocale = currentPathname.replace(/^\/[^/]+/, '')
    const newPath = `/${newLanguage}${pathWithoutLocale}`
    
    setLanguageState(newLanguage)
    localStorage.setItem('preferred_language', newLanguage)
    router.push(newPath)
  }

  useEffect(() => {
    // 从 localStorage 获取已保存的语言设置
    const savedLanguage = localStorage.getItem('preferred_language')
    if (savedLanguage && isValidLocale(savedLanguage) && savedLanguage !== language) {
      setLanguage(savedLanguage)
    }

    // 检测浏览器语言
    const detectBrowserLanguage = () => {
      // 先检查是否已经显示过提示或用户已关闭提示
      const hintDismissed = localStorage.getItem(LANGUAGE_HINT_STORAGE_KEY)
      if (hintDismissed === 'true') {
        return; // 如果用户已经关闭过提示，不再显示
      }

      const languages = navigator.languages || [navigator.language]
      for (const lang of languages) {
        // 处理完整的语言代码（如 zh-CN）
        if (isValidLocale(lang)) {
          if (lang !== language) {
            setBrowserLanguage(lang)
            setShowLanguageHint(true)
          }
          break
        }
        // 处理简短的语言代码（如 zh）
        const shortLang = lang.toLowerCase().split('-')[0]
        if (shortLang === 'zh') {
          if ('zh-CN' !== language) {
            setBrowserLanguage('zh-CN')
            setShowLanguageHint(true)
          }
          break
        }
      }
    }

    detectBrowserLanguage()
  }, [language])

  // 当语言改变时更新翻译
  useEffect(() => {
    const trans = translations[language]
    if (trans) {
      setTranslation(trans)
    } else {
      console.error(`Translation not found for language: ${language}, falling back to default`)
      setTranslation(translations[defaultLocale])
    }
  }, [language])

  // 关闭提示时保存状态到本地存储
  const dismissLanguageHint = () => {
    setShowLanguageHint(false);
    localStorage.setItem(LANGUAGE_HINT_STORAGE_KEY, 'true');
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, browserLanguage, t: translation }}>
      {children}
      {showLanguageHint && browserLanguage && browserLanguage !== language && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm border border-gray-200">
          <p className="text-sm text-gray-600">
            {language === 'zh-CN'
              ? '您的浏览器语言设置为中文，是否切换到中文版？'
              : 'Your browser language is set to Chinese. Would you like to switch to Chinese version?'}
          </p>
          <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={dismissLanguageHint}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {language === 'zh-CN' ? '不用了' : 'No, thanks'}
            </button>
            <button
              onClick={() => {
                setLanguage(browserLanguage)
                dismissLanguageHint()
              }}
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              {language === 'zh-CN' ? '切换语言' : 'Switch language'}
            </button>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  )
} 