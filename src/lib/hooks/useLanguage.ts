'use client'

import { useContext } from 'react'
import { useLanguage as useProviderLanguage } from '@/components/shared/LanguageProvider'
import type { Translation } from '@/lib/i18n/types'
import { ValidLocale } from '@/lib/i18n/config'

export function useLanguage(): {
  language: ValidLocale
  setLanguage: (lang: ValidLocale) => void
  t: Translation
} {
  return useProviderLanguage()
}

// 为了向后兼容
export const useAppLanguage = useLanguage 