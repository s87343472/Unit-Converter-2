import { Suspense } from 'react'
import type { ConversionType } from '@/lib/conversion/types'
import type { ValidLocale } from '@/lib/i18n/types'
import { getUnitSymbol } from '@/lib/conversion/converter'
import { getUnitConversionFactor } from '@/lib/conversion'
import { UNIT_ID_MAP, UNIT_URL_MAP } from '@/lib/conversion/url-mapping'
import { DEFAULT_REVALIDATE_TIME, POPULAR_CONVERSIONS } from '@/lib/seo/config'
import ConversionTable from '@/components/conversion/ConversionTable'
import ConversionFormula from '@/components/conversion/ConversionFormula'
import ConversionIntroduction from '@/components/conversion/ConversionIntroduction'
import RelatedConversions from '@/components/conversion/RelatedConversions'
import SpecificUnitConverter from '@/components/conversion/SpecificUnitConverter'
import categories from '@/lib/conversion'
import { Metadata } from 'next'
import { seoConfig } from '@/lib/i18n/seo'

// 支持的语言
import { locales } from '@/lib/i18n/config'

// 配置静态生成 - 增量静态再生成的刷新频率
export const revalidate = DEFAULT_REVALIDATE_TIME

// 静态生成支持的类型
const SUPPORTED_TYPES: ConversionType[] = ['length', 'weight', 'area', 'volume', 'temperature', 'time', 'speed']

/**
 * 为特定转换页面生成元数据
 */
export async function generateMetadata({ 
  params 
}: { 
  params: { locale: ValidLocale; type: ConversionType; combinedParam: string } 
}): Promise<Metadata> {
  const { locale, type, combinedParam } = params;
  
  // 从URL参数中解析fromUnit和toUnit
  const [fromUnit, toUnit] = combinedParam.split('-to-');
  
  // 获取单位ID
  let sourceUnitId = UNIT_ID_MAP[type]?.[fromUnit] || fromUnit
  let targetUnitId = UNIT_ID_MAP[type]?.[toUnit] || toUnit
  
  // 获取本地化的单位显示名称
  const fromUnitLabel = getLocalizedUnitName(type, sourceUnitId, locale)
  const toUnitLabel = getLocalizedUnitName(type, targetUnitId, locale)
  
  // 基础URL
  const baseUrl = 'https://www.metric-converter.com'
  const canonicalUrl = `${baseUrl}/${locale}/${type}/${fromUnit}-to-${toUnit}`
  
  // 获取当前语言的SEO配置
  const seo = seoConfig[locale] || seoConfig['en']
  
  // 生成标题，遵循SEO最佳实践
  let title = '';
  if (locale === 'en') {
    title = `Convert ${fromUnitLabel} to ${toUnitLabel} | metric-converter.com`
  } else if (locale === 'zh-CN') {
    title = `${fromUnitLabel}转${toUnitLabel}换算器 - 长度单位转换 | metric-converter.com`
  } else if (locale === 'zh-TW') {
    title = `${fromUnitLabel}轉${toUnitLabel}換算器 - 長度單位轉換 | metric-converter.com`
  } else if (locale === 'ja') {
    title = `${fromUnitLabel}から${toUnitLabel}への変換 - 長さ単位変換 | metric-converter.com`
  }
  
  // 生成描述
  let description = '';
  if (locale === 'en') {
    description = `Use metric-converter's free ${type} converter to easily convert from ${fromUnitLabel} to ${toUnitLabel} with high precision. Includes conversion formulas and tables.`
  } else if (locale === 'zh-CN') {
    description = `使用metric-converter的免费在线${type}单位换算器，轻松将${fromUnitLabel}转换为${toUnitLabel}。提供即时、精确的转换结果，包含换算公式和换算表。`
  } else if (locale === 'zh-TW') {
    description = `使用metric-converter的免費在線${type}單位換算器，輕鬆將${fromUnitLabel}轉換為${toUnitLabel}。提供即時、精確的轉換結果，包含換算公式和換算表。`
  } else if (locale === 'ja') {
    description = `metric-converterの無料オンライン${type}単位変換ツールを使用して、${fromUnitLabel}から${toUnitLabel}への高精度変換を簡単に行えます。変換式と変換表を含む即時、正確な結果を提供します。`
  }
  
  // 生成关键词
  let keywords = '';
  if (locale === 'en') {
    keywords = `${fromUnitLabel} to ${toUnitLabel}, ${type} converter, unit converter, ${fromUnitLabel} ${toUnitLabel} conversion, online unit converter`
  } else if (locale === 'zh-CN') {
    keywords = `${fromUnitLabel}转${toUnitLabel}, ${type}换算器, 单位转换, ${fromUnitLabel}${toUnitLabel}换算, 在线单位换算器`
  } else if (locale === 'zh-TW') {
    keywords = `${fromUnitLabel}轉${toUnitLabel}, ${type}換算器, 單位轉換, ${fromUnitLabel}${toUnitLabel}換算, 在線單位換算器`
  } else if (locale === 'ja') {
    keywords = `${fromUnitLabel}から${toUnitLabel}, ${type}変換ツール, 単位変換, ${fromUnitLabel}${toUnitLabel}変換, オンライン単位変換`
  }
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        locales.map(l => [l, `${baseUrl}/${l}/${type}/${fromUnit}-to-${toUnit}`])
      ),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'metric-converter.com',
      type: 'website',
    },
  }
}

/**
 * 静态生成参数生成函数
 */
export async function generateStaticParams() {
  // 记录生成开始时间
  const startTime = Date.now()
  console.log('开始生成静态页面参数...')
  
  // 为热门组合生成参数
  const popularParams: { locale: string; type: string; combinedParam: string }[] = []

  // 生成所有热门单位组合的路径参数（优先级高）
  for (const locale of locales) {
    for (const { type, fromUnit, toUnit } of POPULAR_CONVERSIONS) {
      popularParams.push({
        locale,
        type,
        combinedParam: `${fromUnit}-to-${toUnit}`
      })
    }
  }
  
  // 记录生成耗时
  const endTime = Date.now()
  const duration = (endTime - startTime) / 1000
  
  console.log(`静态页面参数生成完成:`)
  console.log(`- 热门组合: ${popularParams.length}`)
  console.log(`- 其他组合: 0`)
  console.log(`- 总页面数: ${popularParams.length}`)
  console.log(`- 生成耗时: ${duration.toFixed(2)}秒`)
  
  return popularParams
}

// 根据语言获取本地化的单位名称
function getLocalizedUnitName(type: ConversionType, unitId: string, locale: ValidLocale): string {
  // 获取单位对象
  const category = categories[type]
  const unit = category?.units[unitId]
  
  if (!unit) return unitId
  
  // 根据语言返回对应的本地化名称
  if (locale === 'zh-CN' || locale === 'zh-TW') {
    return unit.label // 中文标签
  } else if (locale === 'ja') {
    // 日语可以添加特殊处理，如果有日语特定的标签
    return unit.label // 目前使用中文标签，可以后续扩展
  } else {
    // 英文环境下，使用英文单位名称（从URL中获取并格式化）
    // 首字母大写
    const urlName = UNIT_URL_MAP[type]?.[unitId] || ''
    return urlName.charAt(0).toUpperCase() + urlName.slice(1)
  }
}

export default function SpecificConversionPage({
  params
}: {
  params: { locale: ValidLocale; type: ConversionType; combinedParam: string }
}) {
  const { locale, type, combinedParam } = params;
  
  // 从URL参数中解析fromUnit和toUnit
  const [fromUnit, toUnit] = combinedParam.split('-to-');
  
  // 添加调试信息
  console.log('SEO友好路由 - 解析后的URL参数:', { locale, type, fromUnit, toUnit, combinedParam, original: params })
  
  // 检查类型是否支持
  if (!UNIT_ID_MAP[type]) {
    console.error(`不支持的转换类型: ${type}`)
    return <div className="flex justify-center items-center min-h-screen text-red-500">不支持的转换类型: {type}</div>
  }
  
  // 获取单位ID
  let sourceUnitId = UNIT_ID_MAP[type][fromUnit]
  let targetUnitId = UNIT_ID_MAP[type][toUnit]
  
  console.log('单位ID映射:', { fromUnit, sourceUnitId, toUnit, targetUnitId })
  
  // 如果找不到单位ID映射，尝试使用原始参数值作为ID
  if (!sourceUnitId) {
    console.warn(`找不到单位ID映射: ${type}/${fromUnit}，使用原始值`)
    sourceUnitId = fromUnit
  }
  
  if (!targetUnitId) {
    console.warn(`找不到单位ID映射: ${type}/${toUnit}，使用原始值`)
    targetUnitId = toUnit
  }
  
  // 获取转换因子
  let conversionFactor = 1
  try {
    conversionFactor = getUnitConversionFactor(type, sourceUnitId, targetUnitId)
  } catch (err) {
    console.error('获取转换因子失败:', err)
    return <div className="flex justify-center items-center min-h-screen text-red-500">
      无法获取转换因子: {sourceUnitId} 到 {targetUnitId}
    </div>
  }
  
  const sourceUnitSymbol = getUnitSymbol(type, sourceUnitId) || ''
  const targetUnitSymbol = getUnitSymbol(type, targetUnitId) || ''
  
  // 获取本地化的单位显示名称
  const fromUnitLabel = getLocalizedUnitName(type, sourceUnitId, locale)
  const toUnitLabel = getLocalizedUnitName(type, targetUnitId, locale)
  
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Suspense fallback={<div className="flex justify-center items-center h-10">加载中...</div>}>
        {/* 1. 专用单位转换区域 */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            {locale === 'en' ? `Convert ${fromUnitLabel} to ${toUnitLabel}` :
             locale === 'zh-CN' ? `${fromUnitLabel}转${toUnitLabel}换算器` :
             locale === 'zh-TW' ? `${fromUnitLabel}轉${toUnitLabel}換算器` :
             `${fromUnitLabel}から${toUnitLabel}への変換`}
          </h1>
          
          <SpecificUnitConverter
            type={type}
            fromUnit={sourceUnitId}
            toUnit={targetUnitId}
            fromUnitLabel={fromUnitLabel}
            toUnitLabel={toUnitLabel}
            fromUnitSymbol={sourceUnitSymbol}
            toUnitSymbol={targetUnitSymbol}
          />
        </section>

        {/* 2. 单位转换介绍和历史背景 */}
        <section className="mb-10">
          <ConversionIntroduction
            type={type}
            fromUnit={sourceUnitId}
            toUnit={targetUnitId}
            fromUnitLabel={fromUnitLabel}
            toUnitLabel={toUnitLabel}
          />
        </section>
        
        {/* 3. 转换公式区域 */}
        <section className="mb-10">
          <ConversionFormula
            type={type}
            fromUnit={sourceUnitId}
            toUnit={targetUnitId}
            fromUnitLabel={fromUnitLabel}
            toUnitLabel={toUnitLabel}
            conversionFactor={conversionFactor}
          />
        </section>
        
        {/* 4. 常见转换值表格 */}
        <section className="mb-10">
          <ConversionTable
            type={type}
            fromUnit={sourceUnitId}
            toUnit={targetUnitId}
            fromUnitLabel={fromUnitLabel}
            toUnitLabel={toUnitLabel}
            fromUnitSymbol={sourceUnitSymbol}
            toUnitSymbol={targetUnitSymbol}
          />
        </section>
        
        {/* 5. 相关转换链接 */}
        <section className="mb-10">
          <RelatedConversions
            type={type}
            currentFromUnit={sourceUnitId}
            currentToUnit={targetUnitId}
          />
        </section>
      </Suspense>
    </div>
  )
} 