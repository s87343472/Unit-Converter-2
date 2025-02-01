'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/components/shared/LanguageProvider'
import type { Translation } from '@/lib/i18n/types'
import { ValidLocale } from '@/lib/i18n/config'

// 定义支持的语言类型
export type SupportedLanguage = 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ru' | 'es'

// 定义翻译对象的类型
interface Translations {
  common: {
    conversionHistory: string
    clearHistory: string
    confirmClear: string
    cancel: string
    confirm: string
    delete: string
    [key: string]: string
  }
  [key: string]: { [key: string]: string }
}

// 默认翻译
const translations: Record<SupportedLanguage, Translations> = {
  en: {
    common: {
      conversionHistory: 'Conversion History',
      clearHistory: 'Clear History',
      confirmClear: 'Are you sure you want to clear all history?',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete'
    }
  },
  zh: {
    common: {
      conversionHistory: '转换历史',
      clearHistory: '清除历史',
      confirmClear: '确定要清除所有历史记录吗？',
      cancel: '取消',
      confirm: '确定',
      delete: '删除'
    }
  },
  de: {
    common: {
      conversionHistory: 'Konvertierungsverlauf',
      clearHistory: 'Verlauf löschen',
      confirmClear: 'Möchten Sie den gesamten Verlauf wirklich löschen?',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      delete: 'Löschen'
    }
  },
  fr: {
    common: {
      conversionHistory: 'Historique des conversions',
      clearHistory: 'Effacer l\'historique',
      confirmClear: 'Voulez-vous vraiment effacer tout l\'historique ?',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      delete: 'Supprimer'
    }
  },
  ja: {
    common: {
      conversionHistory: '変換履歴',
      clearHistory: '履歴をクリア',
      confirmClear: '全ての履歴を削除してもよろしいですか？',
      cancel: 'キャンセル',
      confirm: '確認',
      delete: '削除'
    }
  },
  ru: {
    common: {
      conversionHistory: 'История конвертаций',
      clearHistory: 'Очистить историю',
      confirmClear: 'Вы уверены, что хотите очистить всю историю?',
      cancel: 'Отмена',
      confirm: 'Подтвердить',
      delete: 'Удалить'
    }
  },
  es: {
    common: {
      conversionHistory: 'Historial de conversiones',
      clearHistory: 'Borrar historial',
      confirmClear: '¿Está seguro de que desea borrar todo el historial?',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      delete: 'Eliminar'
    }
  }
}

interface LanguageContextType {
  t: Translation
  language: ValidLocale
  setLanguage: (lang: ValidLocale) => void
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 