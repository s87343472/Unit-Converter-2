'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType } from '@/lib/conversion/types'
import type { ValidLocale } from '@/lib/i18n/types'
import ConversionIntroduction from '@/components/conversion/ConversionIntroduction'
import ConversionFormula from '@/components/conversion/ConversionFormula'
import ConversionTable from '@/components/conversion/ConversionTable'
import RelatedConversions from '@/components/conversion/RelatedConversions'
import SpecificUnitConverter from '@/components/conversion/SpecificUnitConverter'

interface ConversionPageClientProps {
  type: ConversionType
  locale: ValidLocale
  fromUnit: string
  toUnit: string
  conversionFactor: number
  fromUnitSymbol: string
  toUnitSymbol: string
  fromUnitUrl: string
  toUnitUrl: string
}

export default function ConversionPageClient({
  type,
  locale,
  fromUnit,
  toUnit,
  conversionFactor,
  fromUnitSymbol,
  toUnitSymbol,
  fromUnitUrl,
  toUnitUrl
}: ConversionPageClientProps) {
  const { t } = useLanguage()
  
  // 从翻译中获取单位显示名称，如果没有则使用URL参数
  // UnitInfo中的units是 { [key: string]: string }，所以直接访问该字符串
  const sourceUnitLabel = t?.units?.[type]?.units?.[fromUnit] || fromUnitUrl
  const targetUnitLabel = t?.units?.[type]?.units?.[toUnit] || toUnitUrl

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {sourceUnitLabel}转{targetUnitLabel}换算器
      </h1>
      
      {/* 专用单位转换器组件 */}
      <div className="mb-12">
        <SpecificUnitConverter 
          type={type} 
          fromUnit={fromUnit} 
          toUnit={toUnit} 
          fromUnitLabel={sourceUnitLabel}
          toUnitLabel={targetUnitLabel}
          fromUnitSymbol={fromUnitSymbol}
          toUnitSymbol={toUnitSymbol}
        />
      </div>

      {/* SEO 优化的内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
        <div>
          <ConversionIntroduction 
            type={type} 
            fromUnit={fromUnit} 
            toUnit={toUnit} 
            fromUnitLabel={sourceUnitLabel}
            toUnitLabel={targetUnitLabel}
            fromUnitSymbol={fromUnitSymbol}
            toUnitSymbol={toUnitSymbol}
          />
        </div>
      </div>
      
      <div className="mb-12">
        <ConversionFormula 
          type={type} 
          fromUnit={fromUnit}
          toUnit={toUnit}
          fromUnitLabel={sourceUnitLabel}
          toUnitLabel={targetUnitLabel}
          conversionFactor={conversionFactor}
        />
      </div>

      {/* 常见转换值表格 */}
      <div className="mb-12">
        <ConversionTable 
          type={type} 
          fromUnit={fromUnit} 
          toUnit={toUnit} 
          fromUnitLabel={sourceUnitLabel}
          toUnitLabel={targetUnitLabel}
          fromUnitSymbol={fromUnitSymbol}
          toUnitSymbol={toUnitSymbol}
        />
      </div>

      {/* 相关转换链接 */}
      <div className="mb-8">
        <RelatedConversions 
          type={type} 
          currentFromUnit={fromUnit} 
          currentToUnit={toUnit} 
        />
      </div>
    </div>
  )
} 