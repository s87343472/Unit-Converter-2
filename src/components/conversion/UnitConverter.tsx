'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import type { ConversionType, ConversionUnit } from '@/lib/conversion/types'
import { convert, getUnits } from '@/lib/conversion/converter'
import length from '@/lib/conversion/length'
import weight from '@/lib/conversion/weight'
import temperature from '@/lib/conversion/temperature'
import area from '@/lib/conversion/area'
import volume from '@/lib/conversion/volume'

interface UnitConverterProps {
  type: ConversionType
}

const categories = {
  length,
  weight,
  temperature,
  area,
  volume,
}

const MAX_INPUT_LENGTH = 20 // 最大输入长度（包括小数点）
const MAX_DECIMAL_PLACES = 10 // 最大小数位数

// 格式化数值，处理科学计数法和小数位数
function formatNumber(value: number): string {
  if (Math.abs(value) >= 1e15 || Math.abs(value) < 1e-10) {
    // 使用科学计数法，保留10位有效数字
    return value.toExponential(10)
  }

  // 根据数值大小动态调整小数位数
  let decimals = MAX_DECIMAL_PLACES
  if (Math.abs(value) >= 1) {
    decimals = Math.max(0, MAX_DECIMAL_PLACES - Math.floor(Math.log10(Math.abs(value))))
  }

  return value.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: 0,
  })
}

// 从带单位的字符串中提取数值
function extractNumber(input: string): string {
  // 移除所有非数字、小数点和负号的字符
  const cleaned = input.replace(/[^\d.-]/g, '')
  // 确保只有一个小数点和一个负号（在开头）
  const parts = cleaned.split('.')
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('')
  }
  return cleaned
}

export default function UnitConverter({ type }: UnitConverterProps) {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<Record<string, number>>({})
  const [units, setUnits] = useState<ConversionUnit[]>([])
  const [selectedUnit, setSelectedUnit] = useState('')
  const [copiedUnit, setCopiedUnit] = useState<string | null>(null)
  const [error, setError] = useState<string>('')
  const [isFocused, setIsFocused] = useState(false)

  // 加载单位定义
  useEffect(() => {
    const category = categories[type]
    if (category) {
      const unitList = Object.values(category.units)
      setUnits(unitList)
      setSelectedUnit(category.baseUnit)
      setValue('')
      setResults({})
    }
  }, [type])

  const handleConvert = useCallback(() => {
    if (!value || isNaN(Number(value)) || !selectedUnit) {
      setResults({})
      return
    }

    const numValue = Number(value)
    const newResults: Record<string, number> = {}

    units.forEach(unit => {
      if (unit.id !== selectedUnit) {
        const result = convert(type, numValue, selectedUnit, unit.id)
        if (!result.error) {
          newResults[unit.id] = result.value
        }
      }
    })

    setResults(newResults)
  }, [value, selectedUnit, type, units])

  // 当选中单位改变时，重新计算结果
  useEffect(() => {
    handleConvert()
  }, [selectedUnit, handleConvert])

  const selectedUnitInfo = units.find(u => u.id === selectedUnit)

  // 处理粘贴事件
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const extractedNumber = extractNumber(pastedText)
    if (extractedNumber.length <= MAX_INPUT_LENGTH) {
      setValue(extractedNumber)
      handleConvert()
    }
  }

  // 处理输入事件
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const newValue = extractNumber(inputValue)
    
    // 检查是否包含非法字符
    if (inputValue !== newValue && inputValue !== '') {
      setError('请输入有效的数字')
    } else if (inputValue.length > MAX_INPUT_LENGTH) {
      setError('输入长度不能超过20位')
    } else {
      setError('')
    }

    if (newValue.length <= MAX_INPUT_LENGTH) {
      setValue(newValue)
      handleConvert()
    }
  }

  // 复制结果
  const handleCopyResult = async (unit: ConversionUnit) => {
    const result = results[unit.id]
    if (result !== undefined) {
      const textToCopy = `${formatNumber(result)} ${unit.symbol}`
      await navigator.clipboard.writeText(textToCopy)
      setCopiedUnit(unit.id)
      setTimeout(() => setCopiedUnit(null), 2000)
    }
  }

  return (
    <div className="space-y-8">
      {/* 转换功能区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="text"
                value={value}
                onChange={handleInput}
                onPaste={handlePaste}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="请输入数值"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm transition-colors ${
                  error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                }`}
              />
              {selectedUnitInfo && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {selectedUnitInfo.symbol}
                </span>
              )}
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
            {isFocused && !error && (
              <p className="mt-2 text-sm text-gray-500">
                最多支持20位（含小数点），最多10位小数
              </p>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">选择单位</h3>
            <div className="grid grid-cols-2 gap-2">
              {units.map(unit => (
                <label
                  key={unit.id}
                  className={`
                    flex items-center p-2 rounded-md cursor-pointer transition-colors
                    ${selectedUnit === unit.id 
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                      : 'hover:bg-gray-100 border border-transparent'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="unit"
                    value={unit.id}
                    checked={selectedUnit === unit.id}
                    onChange={() => {
                      setSelectedUnit(unit.id)
                    }}
                    className="sr-only"
                  />
                  <div>
                    <div className="font-medium">{unit.label}</div>
                    <div className="text-sm text-gray-500">{unit.symbol}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              {units.filter(unit => unit.id !== selectedUnit).map(unit => (
                <div
                  key={unit.id}
                  onClick={() => handleCopyResult(unit)}
                  className="flex items-center justify-between p-2 rounded-md bg-white border border-gray-100 cursor-pointer hover:bg-gray-50 relative group"
                >
                  <div>
                    <div className="font-medium">{unit.label}</div>
                    <div className="text-sm text-gray-500">{unit.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {results[unit.id] !== undefined
                        ? formatNumber(results[unit.id])
                        : '-'
                      }
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedUnit === unit.id ? '已复制' : '点击复制'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 