import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from '@/lib/i18n/config'

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/lib/i18n/translations/${locale || defaultLocale}.ts`)).default,
  locale: locale || defaultLocale
})) 