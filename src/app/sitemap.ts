import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { conversionTypes } from '@/lib/conversion-types'

const baseUrl = 'https://www.metric-converter.com'
const lastMod = '2024-02-06'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // 添加主页
  entries.push({
    url: baseUrl,
    lastModified: lastMod,
    changeFrequency: 'daily',
    priority: 1,
  })

  // 为每种语言添加条目
  locales.forEach(locale => {
    // 语言主页
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    })

    // 每种转换类型的页面
    conversionTypes.forEach(({ id }) => {
      entries.push({
        url: `${baseUrl}/${locale}/${id}`,
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  // 添加其他重要页面
  const staticPages = [
    { path: '/about', priority: 0.7 },
    { path: '/privacy-policy', priority: 0.6 },
    { path: '/terms-of-service', priority: 0.6 },
  ]

  staticPages.forEach(({ path, priority }) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority,
    })
  })

  return entries
} 