import { ValidLocale } from '../config'
import en from './en'
import zhCN from './zh-CN'

export const translations: Record<ValidLocale, any> = {
  'en': en,
  'zh-CN': zhCN
}

// 确保所有翻译文件都被正确加载
Object.entries(translations).forEach(([locale, translation]) => {
  if (!translation) {
    console.error(`Translation file for locale ${locale} is missing or invalid`)
  }
}) 