export const defaultLocale = 'en'
export const locales = ['en', 'zh', 'de', 'fr', 'ja', 'ru', 'es', 'la'] as const
export type ValidLocale = typeof locales[number]

export const localeNames: Record<ValidLocale, string> = {
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  ru: 'Русский',
  es: 'Español',
  la: 'Latina'
}

export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
}

// 语言方向配置（用于RTL支持）
export const localeDirections: Record<ValidLocale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  zh: 'ltr',
  de: 'ltr',
  fr: 'ltr',
  ja: 'ltr',
  ru: 'ltr',
  es: 'ltr',
  la: 'ltr'
} 