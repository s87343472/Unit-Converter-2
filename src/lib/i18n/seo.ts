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
    title: 'metric-converter - Professional Online Unit Conversion Tool',
    description: 'Free online metric converter with 20+ measurement types. Convert between metric, imperial and other units instantly. Supports length, area, volume, weight, temperature, pressure and more.',
    keywords: 'metric converter, unit converter, measurement converter, metric to imperial converter, imperial to metric converter, length converter, weight converter, temperature converter',
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
    title: 'metric-converter - 专业在线度量衡换算工具',
    description: '免费在线公制单位转换器，支持20多种计量单位，包括长度、面积、体积、重量、温度、压力等。提供公制与英制单位互换，支持科学计数法。',
    keywords: 'metric converter,公制转换器,单位换算,度量衡换算,公制单位,英制单位,长度换算,重量换算,温度换算',
    canonical: 'https://www.metric-converter.com/zh-CN',
    ogTitle: 'metric-converter - 专业公制单位换算工具',
    ogDescription: '在线公制单位转换工具，支持公制、英制等多种单位系统，提供20多种计量单位的即时转换。',
    ogImage: 'https://www.metric-converter.com/og-image-zh.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'metric-converter - 轻松进行公制单位换算',
    twitterDescription: '专业公制单位转换工具，支持20多种计量单位类型，实现公制、英制等单位系统的即时转换。',
    twitterImage: 'https://www.metric-converter.com/twitter-card-zh.png'
  }
} 