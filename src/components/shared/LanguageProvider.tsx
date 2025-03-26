'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { defaultLocale, type ValidLocale, isValidLocale } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/translations'
import type { Translation } from '@/lib/i18n/types'
import { useRouter, usePathname } from 'next/navigation'

// 添加存储键常量
const LANGUAGE_HINT_STORAGE_KEY = 'language_hint_dismissed'
const LAST_PROMPT_TIME_KEY = 'last_lang_prompt_time'
const PREFERRED_LANGUAGE_KEY = 'preferred_language'

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

  // 更新语言并同时更新URL和Cookie
  const setLanguage = (newLanguage: ValidLocale) => {
    if (newLanguage === language) return

    const currentPathname = pathname || ''
    const pathWithoutLocale = currentPathname.replace(/^\/[^/]+/, '')
    const newPath = newLanguage === 'en' ? pathWithoutLocale : `/${newLanguage}${pathWithoutLocale}`
    
    // 更新状态
    setLanguageState(newLanguage)
    
    // 保存到localStorage和cookie
    localStorage.setItem(PREFERRED_LANGUAGE_KEY, newLanguage)
    document.cookie = `preferred_language=${newLanguage}; path=/; max-age=${30 * 24 * 60 * 60}` // 30天过期
    
    // 更新URL
    router.push(newPath)
  }

  useEffect(() => {
    // 从 localStorage 和 cookie 获取已保存的语言设置
    const savedLanguage = localStorage.getItem(PREFERRED_LANGUAGE_KEY)
    if (savedLanguage && isValidLocale(savedLanguage) && savedLanguage !== language) {
      setLanguage(savedLanguage)
      return
    }

    // 检测浏览器语言
    const detectBrowserLanguage = () => {
      // 检查是否需要显示语言提示
      const showPrompt = document.cookie.includes('X-Show-Language-Prompt=true')
      const detectedLang = document.cookie.match(/X-Detected-Language=([^;]+)/)?.[1]
      
      if (showPrompt && detectedLang && isValidLocale(detectedLang)) {
        // 检查上次提示时间
        const lastPromptTime = localStorage.getItem(LAST_PROMPT_TIME_KEY)
        const now = new Date().getTime()
        
        if (!lastPromptTime || (now - parseInt(lastPromptTime)) > 24 * 60 * 60 * 1000) {
          setBrowserLanguage(detectedLang as ValidLocale)
          setShowLanguageHint(true)
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

  // 关闭提示时保存状态
  const dismissLanguageHint = () => {
    setShowLanguageHint(false)
    localStorage.setItem(LANGUAGE_HINT_STORAGE_KEY, 'true')
    localStorage.setItem(LAST_PROMPT_TIME_KEY, new Date().getTime().toString())
    document.cookie = `last_lang_prompt_time=${new Date().toISOString()}; path=/; max-age=${24 * 60 * 60}`
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, browserLanguage, t: translation }}>
      {children}
      {showLanguageHint && browserLanguage && browserLanguage !== language && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm border border-gray-200 z-50">
          <p className="text-sm text-gray-600">
            {language === 'zh-CN'
              ? '您的浏览器语言设置为中文，是否切换到中文版？'
              : language === 'zh-TW'
              ? '您的瀏覽器語言設置為中文，是否切換到繁體中文版？'
              : language === 'ja'
              ? 'ブラウザの言語設定が日本語になっています。日本語版に切り替えますか？'
              : browserLanguage === 'zh-CN'
              ? 'Your browser language is set to Simplified Chinese. Would you like to switch to Chinese version?'
              : browserLanguage === 'zh-TW'
              ? 'Your browser language is set to Traditional Chinese. Would you like to switch to Chinese version?'
              : browserLanguage === 'ja'
              ? 'Your browser language is set to Japanese. Would you like to switch to Japanese version?'
              : 'Would you like to switch to your browser language?'}
          </p>
          <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={dismissLanguageHint}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {language === 'zh-CN'
                ? '不用了'
                : language === 'zh-TW'
                ? '不用了'
                : language === 'ja'
                ? 'いいえ'
                : 'No, thanks'}
            </button>
            <button
              onClick={() => {
                setLanguage(browserLanguage)
                dismissLanguageHint()
              }}
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              {language === 'zh-CN'
                ? '切换语言'
                : language === 'zh-TW'
                ? '切換語言'
                : language === 'ja'
                ? '言語を切り替える'
                : 'Switch language'}
            </button>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  )
} 