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
  
  console.log(`[LanguageProvider] 初始化，defaultLanguage=${defaultLanguage}, pathname=${pathname}`)
  
  // 确保使用URL中的语言作为初始语言
  const [language, setLanguageState] = useState<ValidLocale>(defaultLanguage)
  const [browserLanguage, setBrowserLanguage] = useState<ValidLocale | null>(null)
  const [showLanguageHint, setShowLanguageHint] = useState(false)
  const [translation, setTranslation] = useState<Translation>(() => {
    const trans = translations[defaultLanguage]
    if (!trans) {
      console.error(`[LanguageProvider] 找不到语言翻译: ${defaultLanguage}，回退到默认语言`)
      return translations[defaultLocale]
    }
    console.log(`[LanguageProvider] 使用初始语言: ${defaultLanguage}`)
    return trans
  })

  // 强制使用URL中的语言设置
  useEffect(() => {
    if (defaultLanguage !== language) {
      console.log(`[LanguageProvider] 更新语言状态: ${language} -> ${defaultLanguage}`)
      setLanguageState(defaultLanguage)
    }
  }, [defaultLanguage])

  // 更新语言并同时更新URL和Cookie
  const setLanguage = (newLanguage: ValidLocale) => {
    if (newLanguage === language) return

    console.log(`[LanguageProvider] 切换语言: ${language} -> ${newLanguage}`)
    
    const currentPathname = pathname || ''
    // 从路径中提取非语言部分
    let pathWithoutLocale = currentPathname
    
    // 检测当前URL是否包含语言代码
    const pathSegments = currentPathname.split('/')
    if (pathSegments.length > 1 && isValidLocale(pathSegments[1] as ValidLocale)) {
      // 移除当前语言代码
      pathWithoutLocale = currentPathname.replace(/^\/[^/]+/, '')
    }
    
    // 构建新路径
    const newPath = `/${newLanguage}${pathWithoutLocale}`
    console.log(`[LanguageProvider] 新路径: ${newPath}`)
    
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
    console.log(`[LanguageProvider] 已保存的语言: ${savedLanguage}, 当前语言: ${language}, URL语言: ${defaultLanguage}`)
    
    // 总是优先使用URL中的语言
    if (defaultLanguage !== language) {
      console.log(`[LanguageProvider] URL语言(${defaultLanguage})与当前语言(${language})不一致，使用URL语言`)
      setLanguageState(defaultLanguage)
      return
    }
    
    // 如果URL中没有语言但有保存的语言设置，不主动切换
    if (savedLanguage && isValidLocale(savedLanguage) && savedLanguage !== language) {
      console.log(`[LanguageProvider] 不自动切换语言，保持当前语言: ${language}`)
      return
    }

    // 检测浏览器语言，但不强制切换
    const detectBrowserLanguage = () => {
      try {
        const userLang = navigator.language.split('-')[0]
        console.log(`[LanguageProvider] 检测到浏览器语言: ${userLang}, 完整语言: ${navigator.language}`)
        
        // 检查是否已经显示过提示
        const dismissed = localStorage.getItem(LANGUAGE_HINT_STORAGE_KEY) === 'true'
        const lastPromptTime = localStorage.getItem(LAST_PROMPT_TIME_KEY)
        const now = new Date().getTime()
        
        // 如果24小时内已经提示过，则不再提示
        const shouldPrompt = !dismissed || !lastPromptTime || (now - parseInt(lastPromptTime)) > 24 * 60 * 60 * 1000
        
        // 确定浏览器语言对应的区域设置
        let detectedLocale: ValidLocale | null = null
        if (userLang === 'zh') {
          // 简体/繁体的区分
          const fullLang = navigator.language
          detectedLocale = fullLang === 'zh-TW' || fullLang === 'zh-HK' ? 'zh-TW' : 'zh-CN'
        } else if (userLang === 'ja') {
          detectedLocale = 'ja'
        } else if (userLang === 'en') {
          detectedLocale = 'en'
        }
        
        console.log(`[LanguageProvider] 检测到的locale: ${detectedLocale}, 当前语言: ${language}, 是否显示提示: ${shouldPrompt}`)
        
        // 如果检测到的语言是我们支持的，且与当前显示的不同，则显示提示
        if (detectedLocale && detectedLocale !== language && shouldPrompt) {
          console.log(`[LanguageProvider] 建议从 ${language} 切换到 ${detectedLocale}`)
          setBrowserLanguage(detectedLocale)
          setShowLanguageHint(true)
        }
      } catch (error) {
        console.error('[LanguageProvider] 检测浏览器语言出错:', error)
      }
    }

    // 仅在客户端运行
    if (typeof window !== 'undefined') {
      detectBrowserLanguage()
    }
  }, [language, defaultLanguage])

  // 当语言改变时更新翻译
  useEffect(() => {
    const trans = translations[language]
    if (trans) {
      console.log(`[LanguageProvider] 更新翻译数据: ${language}`)
      setTranslation(trans)
    } else {
      console.error(`[LanguageProvider] 找不到语言翻译: ${language}，回退到默认语言`)
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
      {/* 恢复语言切换提示 */}
      {showLanguageHint && browserLanguage && browserLanguage !== language && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm border border-gray-200 z-50">
          <p className="text-sm text-gray-600">
            {language === 'zh-CN'
              ? `您的浏览器语言设置为${browserLanguage === 'zh-CN' ? '简体中文' : browserLanguage === 'zh-TW' ? '繁体中文' : browserLanguage === 'ja' ? '日语' : '英语'}，是否切换？`
              : language === 'zh-TW'
              ? `您的瀏覽器語言設置為${browserLanguage === 'zh-CN' ? '簡體中文' : browserLanguage === 'zh-TW' ? '繁體中文' : browserLanguage === 'ja' ? '日語' : '英語'}，是否切換？`
              : language === 'ja'
              ? `ブラウザの言語設定が${browserLanguage === 'zh-CN' ? '中国語（簡体字）' : browserLanguage === 'zh-TW' ? '中国語（繁体字）' : browserLanguage === 'ja' ? '日本語' : '英語'}になっています。切り替えますか？`
              : `Your browser language is set to ${browserLanguage === 'zh-CN' ? 'Simplified Chinese' : browserLanguage === 'zh-TW' ? 'Traditional Chinese' : browserLanguage === 'ja' ? 'Japanese' : 'English'}. Would you like to switch?`}
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