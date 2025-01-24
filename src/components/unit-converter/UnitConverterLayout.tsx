'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType, ConversionResult, NumeralConversionResult } from '@/lib/conversion/types'
import { convert } from '@/lib/conversion/converter'

interface UnitConverterLayoutProps {
  type: ConversionType
}

export default function UnitConverterLayout({ type }: UnitConverterLayoutProps) {
  const { t } = useLanguage()
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState(type === 'numeral' ? 'decimal' : '')
  const [toUnit, setToUnit] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)

  // 获取当前类型的所有单位
  const units = type === 'numeral' ? {
    decimal: t?.units?.numeral?.decimal?.title || '十进制',
    binary: t?.units?.numeral?.binary?.title || '二进制',
    octal: t?.units?.numeral?.octal?.title || '八进制',
    hexadecimal: t?.units?.numeral?.hexadecimal?.title || '十六进制'
  } : (t?.units?.[type]?.units || {})

  // 格式化数值显示
  const formatNumber = (num: number): string => {
    if (Math.abs(num) === 0) return '0'
    
    // 使用统一的格式化规则
    if (Math.abs(num) < 0.001 || Math.abs(num) >= 10000) {
      // 科学计数法，保持6位有效数字
      return num.toExponential(6)
        .replace(/\.?0+e/, 'e')  // 移除小数点后的多余0
        .replace(/e\+?/, 'e')    // 统一e的格式
    }
    
    // 普通数字，最多保留6位小数
    const fixed = num.toFixed(6)
    return fixed.replace(/\.?0+$/, '')  // 移除末尾的0和不必要的小数点
  }

  // 处理转换
  const handleConvert = (toUnitId: string) => {
    if (!value || !fromUnit) return '0'
    try {
      if (type === 'numeral') {
        // 移除前缀并解析数值
        const cleanValue = value.replace(/^0[box]?/i, '')
        const base = fromUnit === 'decimal' ? 10 : 
                    fromUnit === 'binary' ? 2 : 
                    fromUnit === 'octal' ? 8 : 16
        const numValue = parseInt(cleanValue, base)
        
        if (isNaN(numValue)) return '0'
        
        // 转换为目标进制
        let result = ''
        switch (toUnitId) {
          case 'binary':
            result = '0b' + numValue.toString(2)
            break
          case 'octal':
            result = '0o' + numValue.toString(8)
            break
          case 'decimal':
            result = numValue.toString(10)
            break
          case 'hexadecimal':
            result = '0x' + numValue.toString(16).toUpperCase()
            break
          default:
            result = '0'
        }
        return result
      } else {
        const numValue = parseFloat(value)
        if (isNaN(numValue)) return '0'
        
        // 添加错误处理
        try {
          const result = convert(type, numValue, fromUnit, toUnitId) as ConversionResult
          if (result.error) {
            console.error('Conversion error:', result.error)
            return '0'
          }
          return formatNumber(result.value)
        } catch (error) {
          if (error instanceof Error && error.message.includes('Invalid unit')) {
            console.error('Invalid unit error:', error.message)
            return '0'
          }
          throw error // 重新抛出其他错误
        }
      }
    } catch (error) {
      console.error('Conversion error:', error)
      return '0'
    }
  }

  // 处理输入验证
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (type === 'numeral') {
      // 根据当前选择的进制验证输入
      const base = fromUnit === 'decimal' ? /^[0-9]*$/ :
                  fromUnit === 'binary' ? /^(0b)?[01]*$/i :
                  fromUnit === 'octal' ? /^(0o)?[0-7]*$/i :
                  /^(0x)?[0-9A-Fa-f]*$/i
      
      if (base.test(newValue)) {
        setValue(newValue)
      }
    } else {
      setValue(newValue)
    }
  }

  // 处理复制
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch {}
  }

  // 获取当前类型的所有单位
  const knowledge = t?.units?.[type]?.knowledge || t?.converter?.knowledge

  return (
    <div className="flex-1 bg-gray-50">
      {/* 标题和描述 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <p className="text-sm text-gray-500">{t?.units?.[type]?.description || t?.converter?.description}</p>
          </div>
        </div>
      </div>

      {/* 主体内容 */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* 转换区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 左侧 - From */}
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-4">{t.common.from}:</h2>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              className="block w-full h-12 rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={type === 'numeral' ? `输入${units[fromUnit] || ''}数值` : t?.common?.inputValue}
            />
            <div className="mt-4 rounded-md border border-gray-200 overflow-hidden">
              {Object.entries(units).map(([unitId, unit]) => (
                <button
                  key={unitId}
                  className={`w-full flex items-center h-10 px-4 text-sm transition-colors
                    ${fromUnit === unitId 
                      ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                  onClick={() => setFromUnit(unitId)}
                >
                  <span className="flex-1">{unit}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 右侧 - To */}
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-4">{t.common.to}:</h2>
            <div className="h-12 mb-4 rounded-md border border-gray-200 px-3 py-2 text-sm bg-gray-50 font-mono">
              {value && fromUnit ? handleConvert(toUnit || Object.keys(units)[0]) : '0'}
            </div>
            <div className="rounded-md border border-gray-200 overflow-hidden">
              {Object.entries(units).map(([unitId, unit]) => (
                <button
                  key={unitId}
                  className={`w-full flex items-center h-10 px-4 text-sm transition-colors
                    ${toUnit === unitId 
                      ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                  onClick={() => setToUnit(unitId)}
                >
                  <span className="flex-1">{unit}</span>
                  <span className="text-gray-600 font-mono text-right w-[180px] tabular-nums">
                    ({fromUnit && value ? handleConvert(unitId) : '0'})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 使用指南和知识区域 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="max-w-3xl">
            {/* 使用说明 */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">{t?.converter?.instructions?.title}</h2>
              <div className="space-y-3">
                {t?.converter?.instructions?.steps?.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm mr-3">
                      {index + 1}
                    </span>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 限制条件 */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">{t?.converter?.limitations?.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {t?.converter?.limitations?.items?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 有趣的知识 */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">{knowledge?.title}</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-4 text-gray-600">
                {knowledge?.items?.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* 复制提示 */}
        {copySuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t?.messages?.copied}
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 