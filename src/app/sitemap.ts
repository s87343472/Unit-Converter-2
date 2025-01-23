import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { conversionTypes } from '@/lib/conversion-types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const entries: MetadataRoute.Sitemap = []

  // 添加主页
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  // 为每种语言添加条目
  locales.forEach(locale => {
    // 语言主页
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })

    // 每种转换类型的页面
    conversionTypes.forEach(({ id }) => {
      entries.push({
        url: `${baseUrl}/${locale}/${id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  })

  return entries
} 