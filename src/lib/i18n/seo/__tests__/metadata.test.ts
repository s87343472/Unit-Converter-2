import { generateMetadata } from '../metadata'
import { MetadataCache } from '../cache'
import { MetadataMonitoring } from '../monitoring'
import { ValidLocale } from '../../config'
import { UnitType } from '../../units'

describe('Metadata Generation', () => {
  const baseUrl = 'https://example.com'
  
  beforeEach(() => {
    // 清理缓存和监控数据
    MetadataCache.getInstance().clear()
    MetadataMonitoring.getInstance().clearMetrics()
  })

  test.each<[ValidLocale, UnitType]>([
    ['en', 'length'],
    ['zh-CN', 'weight'],
    ['fr', 'temperature'],
    ['de', 'area'],
    ['es', 'volume'],
    ['ru', 'time'],
    ['ja', 'speed']
  ])('generates valid metadata for %s locale and %s type', async (locale, type) => {
    const metadata = await generateMetadata({ locale, type, baseUrl })

    // 基本元数据验证
    expect(metadata.title).toBeTruthy()
    expect(metadata.description).toBeTruthy()
    expect(metadata.keywords).toBeTruthy()

    // Open Graph 验证
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.title).toBe(metadata.title)
    expect(metadata.openGraph?.description).toBe(metadata.description)
    expect(metadata.openGraph?.url).toBe(`${baseUrl}/${locale}/${type}`)
    expect(metadata.openGraph?.images).toHaveLength(1)

    // Twitter Cards 验证
    expect(metadata.twitter).toBeDefined()
    expect(metadata.twitter?.card).toBe('summary_large_image')
    expect(metadata.twitter?.title).toBe(metadata.title)
    expect(metadata.twitter?.description).toBe(metadata.description)

    // 替代语言链接验证
    expect(metadata.alternates).toBeDefined()
    expect(metadata.alternates?.canonical).toBe(`${baseUrl}/${locale}/${type}`)
    expect(Object.keys(metadata.alternates?.languages || {})).toHaveLength(7)

    // Robots 指令验证
    expect(metadata.robots).toBeDefined()
    expect(metadata.robots?.index).toBe(true)
    expect(metadata.robots?.follow).toBe(true)
  })

  test('caches generated metadata', async () => {
    const params = { locale: 'en' as ValidLocale, type: 'length' as UnitType, baseUrl }
    
    // 首次生成
    const firstMetadata = await generateMetadata(params)
    expect(firstMetadata).toBeDefined()

    // 从缓存获取
    const cachedMetadata = MetadataCache.getInstance().get(params)
    expect(cachedMetadata).toBeDefined()
    expect(cachedMetadata).toEqual(firstMetadata)
  })

  test('records performance metrics', async () => {
    const params = { locale: 'en' as ValidLocale, type: 'length' as UnitType, baseUrl }
    
    await generateMetadata(params)
    
    const monitoring = MetadataMonitoring.getInstance()
    const metrics = monitoring.getRecentMetrics(1)[0]

    expect(metrics).toBeDefined()
    expect(metrics.success).toBe(true)
    expect(metrics.duration).toBeGreaterThan(0)
    expect(metrics.locale).toBe(params.locale)
    expect(metrics.type).toBe(params.type)
  })

  test('handles invalid locale gracefully', async () => {
    const params = { 
      locale: 'invalid' as ValidLocale, 
      type: 'length' as UnitType, 
      baseUrl 
    }

    await expect(generateMetadata(params)).rejects.toThrow()

    const monitoring = MetadataMonitoring.getInstance()
    const metrics = monitoring.getRecentMetrics(1)[0]

    expect(metrics).toBeDefined()
    expect(metrics.success).toBe(false)
    expect(metrics.error).toBeTruthy()
  })

  test('handles invalid unit type gracefully', async () => {
    const params = { 
      locale: 'en' as ValidLocale, 
      type: 'invalid' as UnitType, 
      baseUrl 
    }

    await expect(generateMetadata(params)).rejects.toThrow()

    const monitoring = MetadataMonitoring.getInstance()
    const metrics = monitoring.getRecentMetrics(1)[0]

    expect(metrics).toBeDefined()
    expect(metrics.success).toBe(false)
    expect(metrics.error).toBeTruthy()
  })
}) 