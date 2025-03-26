import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.metric-converter.com'
  const lastModified = new Date()

  // 定义所有支持的语言
  const languages = ['', 'zh-CN', 'zh-TW', 'ja']
  
  // 定义所有页面路径
  const paths = [
    '',
    '/data',
    '/data_rate',
    '/cooking',
    '/numeral',
    '/about',
    '/privacy-policy',
    '/terms-of-service'
  ]

  const urls: MetadataRoute.Sitemap = []

  // 为每种语言和路径组合生成URL
  for (const lang of languages) {
    for (const path of paths) {
      const langPrefix = lang ? `/${lang}` : ''
      urls.push({
        url: `${baseUrl}${langPrefix}${path}`,
        lastModified,
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? 1 : 0.8,
      })
    }
  }

  return urls
} 