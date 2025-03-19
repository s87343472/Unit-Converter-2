import { ValidLocale } from '../config'
import { UnitType } from '../units'
import { getUnitExamples, getUsageCases } from '@/lib/i18n/seo/utils/content'
import { generateDescription, generateTitle, getKeywords } from './templates'
import { MetadataGenerationError, ContentGenerationError, TemplateError } from './errors'
import { MetadataCache } from './cache'
import { MetadataMonitoring } from './monitoring'
import { Metadata, ExtendedTwitterMetadata } from './types'

interface MetadataParams {
  locale: ValidLocale
  type: UnitType
  baseUrl: string
}

export const generateMetadata = async ({
  locale,
  type,
  baseUrl
}: MetadataParams): Promise<Metadata> => {
  const startTime = performance.now()
  const cache = MetadataCache.getInstance()
  const monitoring = MetadataMonitoring.getInstance()

  try {
    // 检查缓存
    const cachedMetadata = cache.get({ locale, type, baseUrl })
    if (cachedMetadata) {
      const duration = performance.now() - startTime
      monitoring.recordMetric({
        duration,
        locale,
        type,
        timestamp: Date.now(),
        success: true
      })
      return cachedMetadata as Metadata
    }

    // 获取单位示例和使用场景
    let unitExamples: string[]
    let usageCases: string[]
    try {
      unitExamples = getUnitExamples(locale, type)
      usageCases = getUsageCases(locale, type)
    } catch (error) {
      const duration = performance.now() - startTime
      monitoring.recordMetric({
        duration,
        locale,
        type,
        timestamp: Date.now(),
        success: false,
        error: 'Content generation failed'
      })
      throw new ContentGenerationError(
        'Failed to generate content examples and usage cases',
        locale,
        type,
        error instanceof Error ? error : undefined
      )
    }

    // 生成标题、描述和关键词
    let title: string
    let description: string
    let keywords: string[]
    try {
      title = generateTitle(locale, type, unitExamples)
      description = generateDescription({ locale, type, unitExamples, usageCases })
      keywords = getKeywords(locale, type)
    } catch (error) {
      const duration = performance.now() - startTime
      monitoring.recordMetric({
        duration,
        locale,
        type,
        timestamp: Date.now(),
        success: false,
        error: 'Template generation failed'
      })
      throw new TemplateError(
        'Failed to generate SEO templates',
        locale,
        type,
        'title',
        error instanceof Error ? error : undefined
      )
    }

    const canonicalUrl = `${baseUrl}/${locale}/${type}`
    const ogImage = `${baseUrl}/og-image/${type}.png`

    const twitter: ExtendedTwitterMetadata = {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }

    const metadata: Metadata = {
      title,
      description,
      keywords: keywords.join(', '),
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'en': `${baseUrl}/en/${type}`,
          'zh-CN': `${baseUrl}/zh-CN/${type}`,
          'fr': `${baseUrl}/fr/${type}`,
          'de': `${baseUrl}/de/${type}`,
          'es': `${baseUrl}/es/${type}`,
          'ru': `${baseUrl}/ru/${type}`,
          'ja': `${baseUrl}/ja/${type}`
        }
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: 'Metric Converter',
        images: [{
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }],
        locale,
        type: 'website'
      },
      twitter,
      robots: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
      }
    }

    // 保存到缓存
    cache.set({ locale, type, baseUrl }, metadata)

    const duration = performance.now() - startTime
    monitoring.recordMetric({
      duration,
      locale,
      type,
      timestamp: Date.now(),
      success: true
    })

    return metadata
  } catch (error) {
    const duration = performance.now() - startTime
    monitoring.recordMetric({
      duration,
      locale,
      type,
      timestamp: Date.now(),
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })

    if (error instanceof ContentGenerationError || error instanceof TemplateError) {
      throw error
    }
    throw new MetadataGenerationError(
      'Failed to generate metadata',
      locale,
      type,
      error instanceof Error ? error : undefined
    )
  }
} 