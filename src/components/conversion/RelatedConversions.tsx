'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { getUnits } from '@/lib/conversion/converter'
import type { ConversionType } from '@/lib/conversion/types'
import type { ValidLocale } from '@/lib/i18n/types'

// 单位ID到URL友好名称的映射
const unitIdToUrlName: Record<string, string> = {
  'metric_meter': 'meter',
  'metric_kilometer': 'kilometer',
  'metric_centimeter': 'centimeter',
  'metric_millimeter': 'millimeter',
  'imperial_inch': 'inch',
  'imperial_foot': 'foot',
  'imperial_yard': 'yard',
  'imperial_mile': 'mile',
  'metric_kilogram': 'kilogram',
  'metric_gram': 'gram',
  'metric_milligram': 'milligram',
  'imperial_pound': 'pound',
  'imperial_ounce': 'ounce',
  // 可以根据需要扩展更多单位
}

interface RelatedConversionsProps {
  type: ConversionType
  currentFromUnit: string
  currentToUnit: string
  maxRelated?: number
}

export default function RelatedConversions({
  type,
  currentFromUnit,
  currentToUnit,
  maxRelated = 8
}: RelatedConversionsProps) {
  const { locale } = useParams() as { locale: ValidLocale }
  const { t, language } = useLanguage()
  const [relatedLinks, setRelatedLinks] = useState<{href: string; text: string}[]>([])
  
  useEffect(() => {
    // 获取当前类型的所有单位
    const allUnits = getUnits(type)
    
    // 过滤掉当前正在使用的单位组合
    const relatedCombinations: {fromUnit: string; toUnit: string}[] = []
    
    // 添加同源不同目标的转换
    allUnits.forEach(toUnit => {
      if (toUnit !== currentToUnit && toUnit !== currentFromUnit) {
        relatedCombinations.push({
          fromUnit: currentFromUnit,
          toUnit
        })
      }
    })
    
    // 添加同目标不同源的转换
    allUnits.forEach(fromUnit => {
      if (fromUnit !== currentFromUnit && fromUnit !== currentToUnit) {
        relatedCombinations.push({
          fromUnit,
          toUnit: currentToUnit
        })
      }
    })
    
    // 随机选择一些其他组合
    const otherUnits = allUnits.filter(unit => unit !== currentFromUnit && unit !== currentToUnit)
    const usedCombinations = new Set()
    
    while (relatedCombinations.length < maxRelated && otherUnits.length >= 2) {
      const fromIndex = Math.floor(Math.random() * otherUnits.length)
      let toIndex = Math.floor(Math.random() * otherUnits.length)
      
      // 确保源和目标不同
      while (toIndex === fromIndex) {
        toIndex = Math.floor(Math.random() * otherUnits.length)
      }
      
      const fromUnit = otherUnits[fromIndex]
      const toUnit = otherUnits[toIndex]
      
      const combinationKey = `${fromUnit}-${toUnit}`
      
      // 确保没有重复组合
      if (!usedCombinations.has(combinationKey)) {
        usedCombinations.add(combinationKey)
        relatedCombinations.push({ fromUnit, toUnit })
      }
    }
    
    // 截取所需数量的链接
    const limitedCombinations = relatedCombinations.slice(0, maxRelated)
    
    // 为每个组合创建链接
    const links = limitedCombinations.map(({ fromUnit, toUnit }) => {
      // 获取URL友好的单位名称
      const fromUrlName = unitIdToUrlName[fromUnit] || fromUnit
      const toUrlName = unitIdToUrlName[toUnit] || toUnit
      
      // 构建链接URL
      const href = `/${locale}/${type}/${fromUrlName}-to-${toUrlName}`
      
      // 获取显示用的单位名称
      const fromLabel = t?.units?.[type]?.units?.[fromUnit] || fromUnit
      const toLabel = t?.units?.[type]?.units?.[toUnit] || toUnit
      
      // 构建链接文本
      let linkText = ''
      switch (language) {
        case 'en':
          linkText = `Convert ${fromLabel} to ${toLabel}`
          break
        case 'zh-TW':
          linkText = `${fromLabel}轉${toLabel}換算`
          break
        case 'ja':
          linkText = `${fromLabel}から${toLabel}への変換`
          break
        default: // 默认中文（简体）
          linkText = `${fromLabel}转${toLabel}换算`
      }
      
      return { href, text: linkText }
    })
    
    setRelatedLinks(links)
  }, [type, currentFromUnit, currentToUnit, locale, language, t, maxRelated])
  
  // 根据语言获取标题
  const getTitle = (): string => {
    switch (language) {
      case 'en':
        return 'Related Conversions'
      case 'zh-TW':
        return '相關單位轉換'
      case 'ja':
        return '関連する変換'
      default: // 默认中文（简体）
        return '相关单位转换'
    }
  }
  
  if (relatedLinks.length === 0) {
    return null
  }
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{getTitle()}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {relatedLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-blue-600 hover:text-blue-800 hover:underline text-sm block py-1"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
} 