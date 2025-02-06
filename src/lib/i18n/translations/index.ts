import { ValidLocale } from '../config'
import en from './en'
import zhCN from './zh-CN'
import fr from './fr'
import de from './de'
import es from './es'
import ru from './ru'
import ja from './ja'

export const translations: Record<ValidLocale, any> = {
  'en': en,
  'zh-CN': zhCN,
  'fr': fr,
  'de': de,
  'es': es,
  'ru': ru,
  'ja': ja
}

// 确保所有翻译文件都被正确加载
Object.entries(translations).forEach(([locale, translation]) => {
  if (!translation) {
    console.error(`Translation file for locale ${locale} is missing or invalid`)
  }
}) 