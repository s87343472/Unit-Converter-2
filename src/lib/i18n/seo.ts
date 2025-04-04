import { ValidLocale } from './config'

type SEOConfig = {
  title: string
  description: string
  keywords: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogSiteName: string
  twitterCard: string
  twitterSite: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

export const seoConfig: Record<ValidLocale, SEOConfig> = {
  'en': {
    title: 'Unit Converter - Online Metric & Imperial Conversion - Metric-Converter.com',
    description: 'Free online unit converter with 20+ types. Instantly convert metric, imperial & other units for length, weight, temperature, area, volume & more. Fast & accurate!',
    keywords: 'unit converter, metric converter, imperial converter, online unit converter, length converter, weight converter, temperature converter',
    canonical: 'https://www.metric-converter.com',
    ogTitle: 'metric-converter - Professional Metric Conversion Tool',
    ogDescription: 'Convert between metric, imperial and other measurement units instantly. Support for length, area, volume, weight, temperature, pressure and more.',
    ogImage: '/og-image.png',
    ogSiteName: 'Metric Converter',
    twitterCard: 'summary_large_image',
    twitterSite: '@sujingshen',
    twitterTitle: 'metric-converter - Metric Conversion Made Easy',
    twitterDescription: 'Professional metric conversion tool supporting 20+ measurement types. Convert between metric, imperial and other units instantly.',
    twitterImage: '/og-image.png'
  },
  'zh-CN': {
    title: '单位换算器 - 在线免费单位转换工具 - Metric-Converter.com',
    description: '免费在线单位换算器，支持20+种单位类型，瞬间完成长度、重量、温度、面积、体积等单位转换。快速、准确、易用！',
    keywords: '单位换算器, 单位转换, 在线单位换算, 公制单位转换, 英制单位转换, 长度单位换算, 重量单位换算',
    canonical: 'https://www.metric-converter.com/zh-CN',
    ogTitle: 'metric-converter - 专业公制单位换算工具',
    ogDescription: '在线公制单位转换工具，支持公制、英制等多种单位系统，提供20多种计量单位的即时转换。',
    ogImage: '/og-image.png',
    ogSiteName: 'Metric Converter',
    twitterCard: 'summary_large_image',
    twitterSite: '@sujingshen',
    twitterTitle: 'metric-converter - 轻松进行公制单位换算',
    twitterDescription: '专业公制单位转换工具，支持20多种计量单位类型，实现公制、英制等单位系统的即时转换。',
    twitterImage: '/og-image.png'
  },
  'zh-TW': {
    title: '單位換算器 - 在線免費單位轉換工具 - Metric-Converter.com',
    description: '免費在線單位換算器，支持20+種單位類型，瞬間完成長度、重量、溫度、面積、體積等單位轉換。快速、準確、易用！',
    keywords: '單位換算器, 單位轉換, 在線單位換算, 公制單位轉換, 英制單位轉換, 長度單位換算, 重量單位換算',
    canonical: 'https://www.metric-converter.com/zh-TW',
    ogTitle: 'metric-converter - 專業公制單位換算工具',
    ogDescription: '在線公制單位轉換工具，支持公制、英制等多種單位系統，提供20多種計量單位的即時轉換。',
    ogImage: '/og-image.png',
    ogSiteName: 'Metric Converter',
    twitterCard: 'summary_large_image',
    twitterSite: '@sujingshen',
    twitterTitle: 'metric-converter - 輕鬆進行公制單位換算',
    twitterDescription: '專業公制單位轉換工具，支持20多種計量單位類型，實現公制、英制等單位系統的即時轉換。',
    twitterImage: '/og-image.png'
  },
  'ja': {
    title: '単位換算 - オンライン無料単位変換ツール - Metric-Converter.com',
    description: '無料オンライン単位換算ツール、20種類以上の単位に対応。長さ、重さ、温度、面積、体積などの単位を瞬時に変換。高速、正確、使いやすい！',
    keywords: '単位換算, 単位変換, オンライン単位換算, メートル法変換, ヤード・ポンド法変換, 長さ単位換算, 重さ単位換算',
    canonical: 'https://www.metric-converter.com/ja',
    ogTitle: 'metric-converter - プロフェッショナルな単位換算ツール',
    ogDescription: 'メートル法、ヤード・ポンド法などの単位を瞬時に変換。長さ、面積、体積、重さ、温度、圧力など20種類以上の単位に対応。',
    ogImage: '/og-image.png',
    ogSiteName: 'Metric Converter',
    twitterCard: 'summary_large_image',
    twitterSite: '@sujingshen',
    twitterTitle: 'metric-converter - 簡単な単位換算',
    twitterDescription: '20種類以上の単位に対応したプロフェッショナルな単位換算ツール。メートル法、ヤード・ポンド法などの単位を瞬時に変換。',
    twitterImage: '/og-image.png'
  }
} as const;