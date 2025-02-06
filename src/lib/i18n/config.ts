export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh-CN', 'fr', 'de', 'es', 'ru', 'ja'] as const,
} as const

export const defaultLocale = i18n.defaultLocale
export const locales = i18n.locales

export type ValidLocale = typeof locales[number]

export const localeNames: Record<ValidLocale, string> = {
  'en': 'English',
  'zh-CN': '中文（中国）',
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  ru: "Русский",
  ja: "日本語"
}

export const localeRegions: Record<ValidLocale, string> = {
  'en': 'en-US',
  'zh-CN': 'zh-CN',
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
  ru: "ru-RU",
  ja: "ja-JP"
}

export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
}

// 语言方向配置（用于RTL支持）
export const localeDirections: Record<ValidLocale, 'ltr' | 'rtl'> = {
  'en': 'ltr',
  'zh-CN': 'ltr',
  fr: "ltr",
  de: "ltr",
  es: "ltr",
  ru: "ltr",
  ja: "ltr"
}

// 搜索引擎区域设置
export const searchEngineLocales: Record<ValidLocale, string> = {
  'en': 'en_US',
  'zh-CN': 'zh_CN',
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES",
  ru: "ru_RU",
  ja: "ja_JP"
}