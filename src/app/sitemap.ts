import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { POPULAR_CONVERSIONS } from '@/lib/seo/config'
import { UNIT_ID_MAP, UNIT_URL_MAP, getUnitUrlName } from '@/lib/conversion/url-mapping'

// 网站基本URL
const BASE_URL = 'https://www.metric-converter.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // 添加首页和主要类型页面
  for (const locale of locales) {
    // 首页
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    })
    
    // 主要类型页面
    for (const type of Object.keys(UNIT_URL_MAP)) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/${type}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      })
    }
    
    // 热门单位转换页面（优先级高）
    for (const { type, fromUnit, toUnit } of POPULAR_CONVERSIONS) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/${type}/${fromUnit}-to-${toUnit}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
    
    // 生成其他常见单位转换组合的站点地图条目
    // 为了避免站点地图过大，这里只包含一部分常见组合
    for (const type of Object.keys(UNIT_URL_MAP)) {
      // 获取该类型下的单位（限制数量）
      const units = Object.keys(UNIT_ID_MAP[type] || {}).slice(0, 10)
      
      // 只生成部分常见组合，而非所有可能的组合（避免站点地图过大）
      for (let i = 0; i < units.length; i++) {
        for (let j = 0; j < units.length; j++) {
          // 如果是自己转自己，跳过
          if (i === j) continue;
          
          const fromUnit = units[i]
          const toUnit = units[j]
          
          // 添加转换页面
          sitemapEntries.push({
            url: `${BASE_URL}/${locale}/${type}/${fromUnit}-to-${toUnit}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      }
    }
    
    // 特别添加所有长度单位的转换页面（完整覆盖）
    if (UNIT_ID_MAP['length']) {
      const lengthUnits = Object.keys(UNIT_ID_MAP['length'])
      for (let i = 0; i < lengthUnits.length; i++) {
        for (let j = 0; j < lengthUnits.length; j++) {
          // 如果是自己转自己，跳过
          if (i === j) continue;
          
          const fromUnit = lengthUnits[i]
          const toUnit = lengthUnits[j]
          
          // 添加转换页面
          sitemapEntries.push({
            url: `${BASE_URL}/${locale}/length/${fromUnit}-to-${toUnit}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      }
    }
  }
  
  return sitemapEntries
} 