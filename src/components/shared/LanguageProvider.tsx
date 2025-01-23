'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { defaultLocale } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/translations'
import type { Translation, ValidLocale } from '@/lib/i18n/types'

interface LanguageContextType {
  t: Translation
  language: ValidLocale
  setLanguage: (lang: ValidLocale) => void
}

export const LanguageContext = createContext<LanguageContextType | null>(null)

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: ValidLocale
}

export default function LanguageProvider({
  children,
  defaultLanguage = defaultLocale
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<ValidLocale>(defaultLanguage)
  const [translation, setTranslation] = useState<Translation>(translations[defaultLanguage])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 加载翻译的函数
  const loadTranslation = useCallback(async (lang: ValidLocale) => {
    setIsLoading(true)
    try {
      if (!translations[lang]) {
        throw new Error(`Translation not found for language: ${lang}`)
      }
      
      // 强制重新加载翻译
      const newTranslation = translations[lang]
      if (!newTranslation) {
        throw new Error(`Failed to load translation for language: ${lang}`)
      }
      
      setTranslation(newTranslation)
      setError(null)
    } catch (err) {
      console.error('Error loading translations:', err)
      setError(err instanceof Error ? err.message : 'Failed to load translations')
      // 回退到默认语言
      if (lang !== defaultLocale) {
        setLanguage(defaultLocale)
        const fallbackTranslation = translations[defaultLocale]
        if (fallbackTranslation) {
          setTranslation(fallbackTranslation)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 监听语言变化
  useEffect(() => {
    loadTranslation(language)
  }, [language, loadTranslation])

  // 提供一个更新语言的函数
  const handleSetLanguage = useCallback((newLanguage: ValidLocale) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    } else {
      console.error(`Translation not found for language: ${newLanguage}`)
      setLanguage(defaultLocale)
    }
  }, [])

  if (isLoading) {
    return <span className="sr-only">Loading translations...</span>
  }

  if (error) {
    console.error('Translation error:', error)
    return null
  }

  const value = {
    t: translation,
    language,
    setLanguage: handleSetLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 