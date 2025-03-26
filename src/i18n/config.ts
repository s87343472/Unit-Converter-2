export const locales = ['en', 'zh-CN', 'zh-TW', 'ja'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale = 'en' as const 