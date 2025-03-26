import { ValidLocale } from '../config'
import en from './en'
import zhCN from './zh-CN'
import ja from './ja'
import zhTW from './zh-TW'

export const translations: Record<ValidLocale, any> = {
  'en': en,
  'zh-CN': zhCN,
  'ja': ja,
  'zh-TW': zhTW
}

// 确保所有翻译文件都被正确加载
Object.entries(translations).forEach(([locale, translation]) => {
  if (!translation) {
    console.error(`Translation file for locale ${locale} is missing or invalid`)
  }
}) 