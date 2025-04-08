'use client'

import React, { ReactElement } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType } from '@/lib/conversion/types'

interface ConversionFormulaProps {
  type: ConversionType
  fromUnit: string
  toUnit: string
  fromUnitLabel: string
  toUnitLabel: string
  conversionFactor: number
  formula?: string
}

export default function ConversionFormula({
  type,
  fromUnit,
  toUnit,
  fromUnitLabel,
  toUnitLabel,
  conversionFactor,
  formula
}: ConversionFormulaProps) {
  const { language } = useLanguage()

  // 格式化转换因子，处理科学计数法和非常小/大的数
  const formatFactor = (factor: number): string => {
    if (factor === 1) return '1'
    
    // 处理特殊情况
    if (Math.abs(factor) < 0.0000001 || Math.abs(factor) > 10000000) {
      return factor.toExponential(6)
    }
    
    // 常规处理
    const precision = factor % 1 === 0 ? 0 : 6
    return factor.toFixed(precision).replace(/\.?0+$/, '')
  }

  // 生成默认公式（如果没有提供自定义公式）
  const generateDefaultFormula = (): string => {
    const factor = formatFactor(conversionFactor)
    if (factor === '1') {
      return `${toUnitLabel} = ${fromUnitLabel}`
    } else if (conversionFactor > 1) {
      return `${toUnitLabel} = ${fromUnitLabel} × ${factor}`
    } else {
      return `${toUnitLabel} = ${fromUnitLabel} × ${factor}`
    }
  }

  // 根据语言获取标题和说明
  const getTitle = (): string => {
    switch (language) {
      case 'en':
        return `${fromUnitLabel} to ${toUnitLabel} Formula`
      case 'zh-TW':
        return `${fromUnitLabel}至${toUnitLabel}公式`
      case 'ja':
        return `${fromUnitLabel}から${toUnitLabel}への変換公式`
      default: // 默认中文（简体）
        return `${fromUnitLabel}至${toUnitLabel}公式`
    }
  }

  const getDescription = (): ReactElement => {
    const displayFormula = formula || generateDefaultFormula()
    
    switch (language) {
      case 'en':
        return (
          <>
            <p className="mb-3">
              To convert from {fromUnitLabel} to {toUnitLabel}, you can use the following formula:
            </p>
            <div className="bg-gray-50 p-3 rounded mb-3 font-mono text-center">
              {displayFormula}
            </div>
            <p>
              This means you need to {conversionFactor > 1 ? 'multiply' : 'multiply'} your {fromUnitLabel} value by {formatFactor(conversionFactor)} to get the equivalent value in {toUnitLabel}.
            </p>
          </>
        )
      case 'zh-TW':
        return (
          <>
            <p className="mb-3">
              要將{fromUnitLabel}轉換為{toUnitLabel}，您可以使用以下公式：
            </p>
            <div className="bg-gray-50 p-3 rounded mb-3 font-mono text-center">
              {displayFormula}
            </div>
            <p>
              這表示您需要將{fromUnitLabel}值{conversionFactor > 1 ? '乘以' : '乘以'} {formatFactor(conversionFactor)}，即可得到{toUnitLabel}的等值。
            </p>
          </>
        )
      case 'ja':
        return (
          <>
            <p className="mb-3">
              {fromUnitLabel}から{toUnitLabel}に変換するには、次の公式を使用できます：
            </p>
            <div className="bg-gray-50 p-3 rounded mb-3 font-mono text-center">
              {displayFormula}
            </div>
            <p>
              これは、{fromUnitLabel}の値を{formatFactor(conversionFactor)}で{conversionFactor > 1 ? '掛ける' : '掛ける'}と、{toUnitLabel}での等価値が得られることを意味します。
            </p>
          </>
        )
      default: // 默认中文（简体）
        return (
          <>
            <p className="mb-3">
              要将{fromUnitLabel}转换为{toUnitLabel}，您可以使用以下公式：
            </p>
            <div className="bg-gray-50 p-3 rounded mb-3 font-mono text-center">
              {displayFormula}
            </div>
            <p>
              这表示您需要将{fromUnitLabel}值{conversionFactor > 1 ? '乘以' : '乘以'} {formatFactor(conversionFactor)}，即可得到{toUnitLabel}的等值。
            </p>
          </>
        )
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h3 className="text-lg font-semibold mb-4">{getTitle()}</h3>
      {getDescription()}
    </div>
  )
} 