export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh-CN', 'ja', 'zh-TW'] as const,
} as const

export const defaultLocale = i18n.defaultLocale
export const locales = i18n.locales

export type ValidLocale = typeof locales[number]

export const localeNames: Record<ValidLocale, string> = {
  'en': 'English',
  'zh-CN': '中文（简体）',
  'ja': '日本語',
  'zh-TW': '中文（繁體）'
}

export const localeRegions: Record<ValidLocale, string> = {
  'en': 'en-US',
  'zh-CN': 'zh-CN',
  'ja': 'ja-JP',
  'zh-TW': 'zh-TW'
}

export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
}

// 语言方向配置（用于RTL支持）
export const localeDirections: Record<ValidLocale, 'ltr' | 'rtl'> = {
  'en': 'ltr',
  'zh-CN': 'ltr',
  'ja': 'ltr',
  'zh-TW': 'ltr'
}

// 搜索引擎区域设置
export const searchEngineLocales: Record<ValidLocale, string> = {
  'en': 'en_US',
  'zh-CN': 'zh_CN',
  'ja': 'ja_JP',
  'zh-TW': 'zh_TW'
}