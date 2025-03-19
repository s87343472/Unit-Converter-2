import { Metadata } from 'next'
import React from 'react'
import { ValidLocale } from '@/lib/i18n/types'
import { seoConfig } from '@/lib/i18n/seo'
import { pageSeoConfig } from '@/lib/i18n/page-seo'
import { UnitType } from '@/lib/i18n/units'

interface LayoutProps {
    params: {
        locale: ValidLocale
        type: UnitType
    }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const baseUrl = 'https://www.metric-converter.com'
    const canonicalUrl = `${baseUrl}/${params.locale}/${params.type}`
    const seo = seoConfig[params.locale] || seoConfig['en']
    
    // 获取页面特定的 SEO 配置
    const pageSeo = pageSeoConfig[params.locale]?.[params.type]
    
    // 生成独特的description
    let pageDescription = ''
    if (pageSeo?.description) {
        pageDescription = pageSeo.description
    } else {
        // 如果没有找到对应语言的描述，生成一个基于单位类型的独特描述
        const unitType = params.type.charAt(0).toUpperCase() + params.type.slice(1)
        pageDescription = `Convert ${unitType} units online. Free ${unitType.toLowerCase()} converter tool with real-time conversion results. Supports all major ${unitType.toLowerCase()} units and provides instant, accurate calculations.`
    }

    const pageTitle = pageSeo?.title || `${params.type.charAt(0).toUpperCase() + params.type.slice(1)} Converter | ${seo.title}`

    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: canonicalUrl,
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

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}