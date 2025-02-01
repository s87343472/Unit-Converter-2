'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { convert } from '@/lib/conversion/converter'
import type { ConversionType } from '@/lib/conversion/types'
import type { ConversionResult, NumeralConversionResult } from '@/lib/conversion/types'

interface UnitConverterProps {
  type: ConversionType
  fromUnit: string
  toUnit: string
  onFromUnitChange: (unit: string) => void
  onToUnitChange: (unit: string) => void
}

export default function UnitConverter({
  type,
  fromUnit,
  toUnit,
  onFromUnitChange,
  onToUnitChange
}: UnitConverterProps) {
  const { t } = useLanguage()
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 获取当前单位类型的所有单位选项
  const unitOptions = t?.units?.[type]?.units 
    ? Object.entries(t.units[type].units).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))
    : []

  // 处理转换
  const handleConvert = () => {
    setError('')
    
    // 验证输入值
    const numValue = Number(value)
    if (isNaN(numValue)) {
      setError(t.messages.invalidNumber)
      setResult('')
      return
    }

    // 验证单位选择
    if (!fromUnit || !toUnit) {
      setError(t.messages.selectUnit)
      setResult('')
      return
    }

    try {
      // 执行转换
      if (type === 'numeral') {
        const result = convert('numeral', numValue, fromUnit, toUnit) as NumeralConversionResult
        setResult(result.value)
      } else {
        const result = convert(type as Exclude<ConversionType, 'numeral'>, numValue, fromUnit, toUnit) as ConversionResult
        setResult(result.value.toString().replace(/\.?0+$/, ''))
      }
    } catch (err) {
      console.error('Conversion error:', err)
      setError(t.messages.conversionError)
      setResult('')
    }
  }

  // 当输入值或单位改变时自动转换
  useEffect(() => {
    if (value && fromUnit && toUnit) {
      handleConvert()
    }
  }, [value, fromUnit, toUnit])

  // 当语言改变时重新获取单位选项
  useEffect(() => {
    if (t?.units?.[type]?.units) {
      handleConvert()
    }
  }, [t])

  return (
    <div className={`space-y-4 ${isMobile ? 'mobile' : ''}`} data-testid="converter-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 输入区域 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="from-input">
            {t.common.from}
          </label>
          <div className="flex gap-2">
            <input
              id="from-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
              placeholder="0"
              aria-label={t.common.from}
              data-testid="from-input"
            />
            <select
              id="from-unit"
              value={fromUnit}
              onChange={(e) => onFromUnitChange(e.target.value)}
              className="px-3 py-2 border rounded-md"
              aria-label={t.common.from}
              data-testid="from-unit"
            >
              <option value="">{t.common.selectUnit}</option>
              {unitOptions}
            </select>
          </div>
        </div>

        {/* 结果区域 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="to-input">
            {t.common.to}
          </label>
          <div className="flex gap-2">
            <input
              id="to-input"
              type="text"
              value={result}
              readOnly
              className="flex-1 px-3 py-2 border rounded-md bg-gray-50"
              aria-label={t.common.to}
              data-testid="to-input"
            />
            <select
              id="to-unit"
              value={toUnit}
              onChange={(e) => onToUnitChange(e.target.value)}
              className="px-3 py-2 border rounded-md"
              aria-label={t.common.to}
              data-testid="to-unit"
            >
              <option value="">{t.common.selectUnit}</option>
              {unitOptions}
            </select>
          </div>
        </div>
      </div>

      {/* 错误信息 */}
      {error && (
        <div className="text-sm text-red-500" role="alert" data-testid="error-message">
          {error}
        </div>
      )}

      {/* 转换按钮 */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => {
            setValue('')
            setResult('')
            setError('')
          }}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          data-testid="clear-button"
        >
          {t.buttons.clear}
        </button>
        <button
          onClick={handleConvert}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          data-testid="convert-button"
        >
          {t.buttons.convert}
        </button>
      </div>
    </div>
  )
} 