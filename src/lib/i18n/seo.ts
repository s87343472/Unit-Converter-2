import { ValidLocale } from './config'

type SEOConfig = {
  title: string
  description: string
  keywords: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterCard: string
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
    ogImage: 'https://www.metric-converter.com/og-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - Metric Conversion Made Easy',
    twitterDescription: 'Professional metric conversion tool supporting 20+ measurement types. Convert between metric, imperial and other units instantly.',
    twitterImage: 'https://www.metric-converter.com/twitter-card.png'
  },
  'zh-CN': {
    title: '单位换算器 - 在线免费单位转换工具 - Metric-Converter.com',
    description: '免费在线单位换算器，支持20+种单位类型，瞬间完成长度、重量、温度、面积、体积等单位转换。快速、准确、易用！',
    keywords: '单位换算器, 单位转换, 在线单位换算, 公制单位转换, 英制单位转换, 长度单位换算, 重量单位换算',
    canonical: 'https://www.metric-converter.com/zh-CN',
    ogTitle: 'metric-converter - 专业公制单位换算工具',
    ogDescription: '在线公制单位转换工具，支持公制、英制等多种单位系统，提供20多种计量单位的即时转换。',
    ogImage: 'https://www.metric-converter.com/og-image-zh.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - 轻松进行公制单位换算',
    twitterDescription: '专业公制单位转换工具，支持20多种计量单位类型，实现公制、英制等单位系统的即时转换。',
    twitterImage: 'https://www.metric-converter.com/twitter-card-zh.png'
  }
};