'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from './LanguageProvider'
import { isValidLocale, type ValidLocale, localeNames } from '@/lib/i18n/config'

export default function LanguagePrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [detectedLocale, setDetectedLocale] = useState<ValidLocale | null>(null)
  const router = useRouter()
  const { language, t } = useLanguage()

  useEffect(() => {
    // 获取浏览器语言
    const browserLang = navigator.language.split('-')[0]
    
    // 检查是否是支持的语言
    if (isValidLocale(browserLang) && browserLang !== language) {
      setDetectedLocale(browserLang)
      setShowPrompt(true)
    }
  }, [language])

  if (!showPrompt || !detectedLocale) {
    return null
  }

  const handleSwitch = () => {
    // 构建新的 URL
    const currentPath = window.location.pathname
    const pathWithoutLang = currentPath.split('/').slice(2).join('/')
    
    // 使用 router.push 进行导航
    const newPath = `/${detectedLocale}/${pathWithoutLang}`
    router.push(newPath)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
  }

  // 根据当前语言获取提示文本
  const getPromptText = () => {
    switch (language) {
      case 'zh-CN':
        return `看起来您的浏览器语言是${localeNames[detectedLocale]}，是否切换？`
      case 'en':
        return `Would you like to switch to your browser language (${localeNames[detectedLocale]})?`
      default:
        return `Would you like to switch to your browser language (${localeNames[detectedLocale]})?`
    }
  }

  // 根据当前语言获取按钮文本
  const getButtonText = (type: 'switch' | 'dismiss') => {
    const texts = {
      switch: {
        zh: '切换',
        de: 'Wechseln',
        fr: 'Changer',
        ja: '切り替え',
        ru: 'Переключить',
        en: 'Switch'
      },
      dismiss: {
        zh: '关闭',
        de: 'Schließen',
        fr: 'Fermer',
        ja: '閉じる',
        ru: 'Закрыть',
        en: 'Dismiss'
      }
    }
    return texts[type][language as keyof typeof texts[typeof type]] || texts[type].en
  }

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            {getPromptText()}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleSwitch}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {getButtonText('switch')}
          </button>
          <button
            onClick={handleDismiss}
            className="text-sm font-medium text-gray-500 hover:text-gray-400"
          >
            {getButtonText('dismiss')}
          </button>
        </div>
      </div>
    </div>
  )
} 