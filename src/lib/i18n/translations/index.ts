import type { Translation } from '../types'
import type { ValidLocale } from '../config'
import en from './en'
import zh from './zh'

const translations: Partial<Record<ValidLocale, Translation>> = {
  en,
  zh,
  // TODO: 添加其他语言的翻译
}

export function getTranslation(locale: ValidLocale): Translation {
  return translations[locale] || translations.en as Translation
} 