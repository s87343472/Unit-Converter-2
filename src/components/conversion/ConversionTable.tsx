'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { convert } from '@/lib/conversion/converter'
import type { ConversionType } from '@/lib/conversion/types'

interface ConversionTableProps {
  type: ConversionType
  fromUnit: string
  toUnit: string
  fromUnitLabel: string
  toUnitLabel: string
  fromUnitSymbol: string
  toUnitSymbol: string
}

export default function ConversionTable({
  type,
  fromUnit,
  toUnit,
  fromUnitLabel,
  toUnitLabel,
  fromUnitSymbol,
  toUnitSymbol
}: ConversionTableProps) {
  const { language } = useLanguage()
  const [conversionData, setConversionData] = useState<{ input: string; output: string }[]>([])

  // 格式化数值
  const formatValue = (value: number): string => {
    // 对于非常大或非常小的数值使用科学计数法
    if (value > 1e15 || (value !== 0 && value < 1e-10)) {
      return value.toExponential(6)
    }
    
    // 对于普通数值，控制小数位数
    const decimalStr = value.toString().split('.')[1]
    if (decimalStr && decimalStr.length > 8) {
      return value.toFixed(8).replace(/\.?0+$/, '')
    }
    
    return value.toString().replace(/\.?0+$/, '')
  }

  // 根据单位类型生成常用值范围
  const generateCommonValues = (type: ConversionType): number[] => {
    switch (type) {
      case 'length':
        return [0.01, 0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000]
      case 'weight':
        return [0.001, 0.01, 0.1, 0.5, 1, 2, 5, 10, 50, 100, 1000]
      case 'temperature':
        return [-40, -20, -10, 0, 10, 20, 30, 40, 50, 100]
      case 'area':
        return [0.01, 0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000, 10000]
      case 'volume':
        return [0.001, 0.01, 0.1, 0.25, 0.5, 1, 2, 5, 10, 100, 1000]
      case 'time':
        return [1, 5, 10, 30, 60, 300, 600, 3600, 86400, 604800, 2592000]
      case 'speed':
        return [1, 5, 10, 20, 30, 50, 60, 80, 100, 120, 200]
      case 'pressure':
        return [0.01, 0.1, 1, 5, 10, 50, 100, 500, 1000, 10000]
      case 'data':
        return [1, 10, 100, 512, 1024, 2048, 4096, 10240, 102400, 1048576]
      default:
        return [0.1, 0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000]
    }
  }

  // 生成转换表数据
  useEffect(() => {
    if (fromUnit && toUnit) {
      try {
        const commonValues = generateCommonValues(type)
        const convertedData = commonValues.map(value => {
          const result = convert(type, value, fromUnit, toUnit)
          
          return {
            input: `${formatValue(value)} ${fromUnitSymbol}`,
            output: `${formatValue(typeof result.value === 'number' ? result.value : parseFloat(result.value.toString()))} ${toUnitSymbol}`
          }
        })
        
        setConversionData(convertedData)
      } catch (error) {
        console.error('生成转换表错误:', error)
        setConversionData([])
      }
    }
  }, [type, fromUnit, toUnit, fromUnitSymbol, toUnitSymbol])

  // 根据语言获取标题
  const getTitle = (): string => {
    switch (language) {
      case 'en':
        return `${fromUnitLabel} to ${toUnitLabel} Conversion Table`
      case 'zh-TW':
        return `${fromUnitLabel}至${toUnitLabel}換算表`
      case 'ja':
        return `${fromUnitLabel}から${toUnitLabel}への変換表`
      default: // 默认中文（简体）
        return `${fromUnitLabel}至${toUnitLabel}换算表`
    }
  }

  // 表头文本
  const getTableHeaders = (): { from: string; to: string } => {
    switch (language) {
      case 'en':
        return { from: fromUnitLabel, to: toUnitLabel }
      case 'zh-TW':
        return { from: fromUnitLabel, to: toUnitLabel }
      case 'ja':
        return { from: fromUnitLabel, to: toUnitLabel }
      default: // 默认中文（简体）
        return { from: fromUnitLabel, to: toUnitLabel }
    }
  }

  const headers = getTableHeaders()

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{getTitle()}</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {headers.from}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {headers.to}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conversionData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.input}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.output}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 