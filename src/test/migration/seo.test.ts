import { generateMetadata } from '../../lib/i18n/seo/metadata'
import { UnitType } from '../../lib/i18n/units'
import { ValidLocale } from '../../lib/i18n/config'

describe('SEO Migration Tests', () => {
  const testCases: Array<{
    locale: ValidLocale
    type: UnitType
    baseUrl: string
  }> = [
    {
      locale: 'zh-CN',
      type: 'length',
      baseUrl: 'https://www.metric-converter.com'
    },
    {
      locale: 'en',
      type: 'temperature',
      baseUrl: 'https://www.metric-converter.com'
    }
  ]

  describe('Metadata Generation', () => {
    test.each(testCases)(
      'generates valid metadata for $locale $type',
      async ({ locale, type, baseUrl }) => {
        const metadata = await generateMetadata({ locale, type, baseUrl })

        // 基本字段检查
        expect(metadata.title).toBeDefined()
        expect(metadata.description).toBeDefined()
        expect(metadata.keywords).toBeDefined()

        // OpenGraph检查
        expect(metadata.openGraph).toBeDefined()
        expect(metadata.openGraph?.title).toBeDefined()
        expect(metadata.openGraph?.description).toBeDefined()
        expect(metadata.openGraph?.images).toBeDefined()

        // Twitter Card检查
        expect(metadata.twitter).toBeDefined()
        expect(metadata.twitter?.card).toBe('summary_large_image')
        expect(metadata.twitter?.title).toBeDefined()
        expect(metadata.twitter?.description).toBeDefined()

        // 替代语言检查
        expect(metadata.alternates).toBeDefined()
        expect(metadata.alternates?.canonical).toBe(`${baseUrl}/${locale}/${type}`)
        expect(metadata.alternates?.languages).toBeDefined()

        // 机器人指令检查
        expect(metadata.robots).toBeDefined()
        expect(metadata.robots?.index).toBe(true)
        expect(metadata.robots?.follow).toBe(true)
      }
    )
  })

  describe('Content Generation', () => {
    test.each(testCases)(
      'generates appropriate content length for $locale $type',
      async ({ locale, type, baseUrl }) => {
        const metadata = await generateMetadata({ locale, type, baseUrl })

        // 标题长度检查（建议：10-70个字符）
        expect(metadata.title?.length).toBeGreaterThanOrEqual(10)
        expect(metadata.title?.length).toBeLessThanOrEqual(70)

        // 描述长度检查（建议：50-160个字符）
        expect(metadata.description?.length).toBeGreaterThanOrEqual(50)
        expect(metadata.description?.length).toBeLessThanOrEqual(160)

        // 关键词数量检查（建议：2-8个关键词）
        const keywordsCount = metadata.keywords?.split(',').length
        expect(keywordsCount).toBeGreaterThanOrEqual(2)
        expect(keywordsCount).toBeLessThanOrEqual(8)
      }
    )
  })

  describe('URL Generation', () => {
    test.each(testCases)(
      'generates valid URLs for $locale $type',
      async ({ locale, type, baseUrl }) => {
        const metadata = await generateMetadata({ locale, type, baseUrl })

        // URL格式检查
        const urlPattern = new RegExp(`^${baseUrl}/${locale}/${type}$`)
        expect(metadata.alternates?.canonical).toMatch(urlPattern)

        // 替代语言URL检查
        const languages = metadata.alternates?.languages as Record<string, string>
        Object.values(languages).forEach(url => {
          expect(url).toMatch(new RegExp(`^${baseUrl}/[a-z-]+/${type}$`))
        })
      }
    )
  })

  describe('Image Configuration', () => {
    test.each(testCases)(
      'generates valid image configuration for $locale $type',
      async ({ locale, type, baseUrl }) => {
        const metadata = await generateMetadata({ locale, type, baseUrl })

        // OpenGraph图片检查
        const ogImage = metadata.openGraph?.images?.[0]
        expect(ogImage).toBeDefined()
        expect(ogImage?.width).toBe(1200)
        expect(ogImage?.height).toBe(630)
        expect(ogImage?.url).toMatch(new RegExp(`^${baseUrl}/og-image/${type}\\.png$`))

        // Twitter图片检查
        expect(metadata.twitter?.images?.[0]).toMatch(new RegExp(`^${baseUrl}/og-image/${type}\\.png$`))
      }
    )
  })
}) 