export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'] as const,
} as const

export const defaultLocale = i18n.defaultLocale
export const locales = i18n.locales

export type ValidLocale = typeof locales[number]

export const localeNames: Record<ValidLocale, string> = {
  en: 'English',
  zh: '中文'
}

export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
}

// 语言方向配置（用于RTL支持）
export const localeDirections: Record<ValidLocale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  zh: 'ltr'
} 