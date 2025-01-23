'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType, ConversionResult, NumeralConversionResult } from '@/lib/conversion/types'
import { convert } from '@/lib/conversion/converter'
import Link from 'next/link'

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
        const result = convert(type, numValue, fromUnit, toUnitId) as ConversionResult
        return result.value.toPrecision(10).replace(/\.?0+$/, '')
      }
    } catch {
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
      {/* 面包屑导航 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center py-3 text-sm" aria-label="Breadcrumb">
            <Link href={`/${t?.common?.language}`} className="text-gray-500 hover:text-gray-700">
              {t?.common?.home}
            </Link>
            <svg className="mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900" aria-current="page">
              {t?.units?.[type]?.title || t?.converter?.title}
            </span>
          </nav>
        </div>
      </div>

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
            <h2 className="text-sm font-medium text-gray-700 mb-4">{t?.converter?.from}:</h2>
            <input
              type="text"
              value={value}
              onChange={handleInput}
              className="block w-full h-12 rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder={type === 'numeral' ? `输入${units[fromUnit] || ''}数值` : t?.common?.inputValue}
            />
            <div className="mt-4 divide-y divide-gray-100 rounded-md border border-gray-200 overflow-y-auto max-h-[calc(100vh-360px)] custom-scrollbar">
              {Object.entries(units).map(([unitId, unit]) => (
                <button
                  key={unitId}
                  className={`w-full flex items-center justify-between h-9 px-4 text-sm text-left transition-colors
                    ${fromUnit === unitId ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setFromUnit(unitId)}
                >
                  <span>{unit}</span>
                  <span className="text-gray-500">({unitId})</span>
                </button>
              ))}
            </div>
          </div>

          {/* 右侧 - To */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-gray-700">{t?.converter?.to}:</h2>
              <button
                onClick={() => handleCopy(`${value} ${fromUnit && units[fromUnit]}`)}
                className="p-1.5 text-gray-500 hover:text-gray-700 rounded transition-colors"
                title={t?.common?.copy}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="relative mb-4">
              <div className="block w-full h-12 rounded-md border border-gray-200 px-3 py-2 text-sm bg-gray-50">
                <span>
                  {value && fromUnit ? handleConvert(toUnit || Object.keys(units)[0]) : '0'}
                  {toUnit && ` ${units[toUnit]}`}
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-100 rounded-md border border-gray-200 overflow-y-auto max-h-[calc(100vh-360px)] custom-scrollbar">
              {Object.entries(units).map(([unitId, unit]) => (
                <button
                  key={unitId}
                  className={`w-full flex items-center justify-between h-9 px-4 text-sm text-left transition-colors
                    ${toUnit === unitId ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setToUnit(unitId)}
                >
                  <span>{unit}</span>
                  <div className="flex items-center">
                    <span>{fromUnit && value ? handleConvert(unitId) : '0'}</span>
                    <span className="text-gray-500 ml-1">({unitId})</span>
                  </div>
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