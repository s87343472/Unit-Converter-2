import { Metadata } from 'next'
import React from 'react'
import { ValidLocale } from '@/lib/i18n/types'
import { UnitType } from '@/lib/i18n/units'
import { ConversionType } from '@/lib/conversion/types'
import { locales } from '@/lib/i18n/config'
import { generateUnitConverterSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'
import { UNIT_ID_MAP } from '@/lib/conversion/url-mapping'
import Script from 'next/script'

interface LayoutProps {
    params: {
        locale: ValidLocale
        type: ConversionType
        combinedParam: string
    }
    children: React.ReactNode
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const { locale, type, combinedParam } = params;
    
    // 从URL参数中解析fromUnit和toUnit
    const [fromUnit, toUnit] = combinedParam.split('-to-');
    
    console.log('SEO友好布局 - Metadata解析的URL参数:', { locale, type, fromUnit, toUnit, combinedParam, original: params })
    
    const baseUrl = 'https://www.metric-converter.com'
    const canonicalUrl = `${baseUrl}/${locale}/${type}/${combinedParam}`
    
    // 获取单位的源ID和目标ID
    const fromUnitId = UNIT_ID_MAP[type]?.[fromUnit]
    const toUnitId = UNIT_ID_MAP[type]?.[toUnit]
    
    // 生成页面标题
    let pageTitle = ''
    let pageDescription = ''
    
    // 根据语言和单位类型生成标题和描述
    if (locale === 'en') {
        pageTitle = `Convert ${fromUnit} to ${toUnit} - ${type.charAt(0).toUpperCase() + type.slice(1)} Unit Converter`
        pageDescription = `Easily convert ${fromUnit} to ${toUnit} with our free online ${type} converter. Get instant, accurate conversions with formula and conversion table.`
    } else if (locale === 'zh-CN') {
        pageTitle = `${fromUnit}转${toUnit}换算器 - ${type}单位转换`
        pageDescription = `使用我们的免费在线${type}单位换算器，轻松将${fromUnit}转换为${toUnit}。提供即时、精确的转换结果，包含换算公式和换算表。`
    } else if (locale === 'zh-TW') {
        pageTitle = `${fromUnit}轉${toUnit}換算器 - ${type}單位轉換`
        pageDescription = `使用我們的免費在線${type}單位換算器，輕鬆將${fromUnit}轉換為${toUnit}。提供即時、精確的轉換結果，包含換算公式和換算表。`
    } else if (locale === 'ja') {
        pageTitle = `${fromUnit}から${toUnit}への変換 - ${type}単位変換ツール`
        pageDescription = `無料オンライン${type}単位変換ツールで${fromUnit}から${toUnit}へ簡単に変換。変換式と換算表を含む即時で正確な結果を提供します。`
    }

    // 生成hreflang链接
    const alternateLanguages: Record<string, string> = {}
    
    locales.forEach(lang => {
        alternateLanguages[lang] = `${baseUrl}/${lang}/${type}/${combinedParam}`
    })

    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: canonicalUrl,
            languages: alternateLanguages
        },
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            siteName: 'Metric Converter',
            type: 'website',
        },
    }
}

export default function Layout({ children, params }: LayoutProps) {
    const { locale, type, combinedParam } = params;
    
    // 从URL参数中解析fromUnit和toUnit
    const [fromUnit, toUnit] = combinedParam.split('-to-');
    
    console.log('SEO友好布局 - Layout解析的URL参数:', { locale, type, fromUnit, toUnit, combinedParam, original: params })
    
    const baseUrl = 'https://www.metric-converter.com'
    const pageUrl = `${baseUrl}/${locale}/${type}/${combinedParam}`
    
    // 安全地处理可能为undefined的值
    const safeFromUnit = fromUnit || ''
    const safeToUnit = toUnit || ''
    const safeType = type || ''
    
    // 生成单位显示名称（简化示例）
    const fromUnitLabel = safeFromUnit.charAt(0).toUpperCase() + safeFromUnit.slice(1)
    const toUnitLabel = safeToUnit.charAt(0).toUpperCase() + safeToUnit.slice(1)
    
    // 生成页面标题（简化示例）
    let pageTitle = ''
    
    if (locale === 'en') {
        pageTitle = `Convert ${fromUnitLabel} to ${toUnitLabel}`
    } else if (locale === 'zh-CN') {
        pageTitle = `${fromUnitLabel}转${toUnitLabel}换算器`
    } else if (locale === 'zh-TW') {
        pageTitle = `${fromUnitLabel}轉${toUnitLabel}換算器`
    } else if (locale === 'ja') {
        pageTitle = `${fromUnitLabel}から${toUnitLabel}への変換`
    }
    
    // 生成面包屑数据
    const breadcrumbItems = [
        { url: `${baseUrl}/${locale}`, name: locale === 'en' ? 'Home' : '首页' },
        { url: `${baseUrl}/${locale}/${safeType}`, name: safeType.charAt(0).toUpperCase() + safeType.slice(1) },
        { url: pageUrl, name: pageTitle }
    ]
    
    // 生成Schema.org结构化数据
    const converterSchema = generateUnitConverterSchema({
        fromUnitLabel,
        toUnitLabel,
        type: safeType,
        url: pageUrl,
        name: pageTitle,
        description: '',
        language: locale
    })
    
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)
    
    return (
        <div>
            {/* 注入结构化数据 */}
            <Script 
                id="converter-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: converterSchema }}
            />
            <Script 
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
            />
            {children}
        </div>
    )
} 