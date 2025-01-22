'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { lengthUnits, convertLength, type Unit } from '@/lib/units/length'

export default function UnitConverterLayout() {
  const { t } = useLanguage()
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)

  // 处理转换
  const handleConvert = (unit: Unit) => {
    if (!value || !fromUnit) return '0'
    try {
      const numValue = parseFloat(value)
      if (isNaN(numValue)) return '0'
      const fromUnitObj = lengthUnits.find(u => u.id === fromUnit)
      if (!fromUnitObj) return '0'
      const result = convertLength(numValue, fromUnitObj, unit)
      return result.toPrecision(10).replace(/\.?0+$/, '')
    } catch {
      return '0'
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

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        {/* 顶部导航 */}
        <div className="mb-2.5">
          <div className="flex items-center text-[13px] text-gray-400">
            <a href="/" className="hover:text-gray-600">首页</a>
            <span className="mx-1.5">/</span>
            <span className="text-gray-900">长度单位转换</span>
          </div>
        </div>

        {/* 标题和描述 */}
        <div className="mb-6">
          <h1 className="text-xl font-normal text-gray-900">长度单位转换</h1>
          <p className="mt-1 text-[13px] text-gray-500">在线长度单位换算工具，支持多种长度单位之间的转换。</p>
        </div>

        {/* 转换区域 */}
        <div className="max-w-[800px]">
          <div className="flex">
            {/* 左侧 - From */}
            <div className="w-[360px] pr-12">
              <div className="mb-4">
                <div className="text-[13px] mb-1.5 text-gray-600">From:</div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full h-[30px] text-[13px] px-0 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-400"
                  placeholder="请输入数值"
                />
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-280px)] pr-1 -mr-1 custom-scrollbar">
                {lengthUnits.map(unit => (
                  <div
                    key={unit.id}
                    className={`flex items-center justify-between h-[26px] cursor-pointer px-1 -mx-1 rounded transition-colors
                      ${fromUnit === unit.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setFromUnit(unit.id)}
                  >
                    <span className="text-[13px] truncate">
                      {t?.units?.length?.units?.[unit.id] || unit.id}
                    </span>
                    <span className="text-[12px] text-gray-400 w-[42px] text-right flex-shrink-0">
                      ({unit.symbol})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧 - To */}
            <div className="w-[360px] pl-12 border-l border-gray-100">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[13px] text-gray-600">To:</div>
                  <button
                    onClick={() => handleCopy(`${value} ${fromUnit && lengthUnits.find(u => u.id === fromUnit)?.symbol}`)}
                    className="text-gray-300 hover:text-gray-500 p-0.5 -m-0.5 rounded transition-colors"
                    title="复制结果"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="w-full h-[30px] text-[13px] px-0 border-0 border-b border-gray-200 flex items-center">
                  <span className="flex-1">
                    {value && fromUnit ? handleConvert(lengthUnits.find(u => u.id === toUnit) || lengthUnits[0]) : '0'}
                    {toUnit && ` ${lengthUnits.find(u => u.id === toUnit)?.symbol}`}
                  </span>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-280px)] pr-1 -mr-1 custom-scrollbar">
                {lengthUnits.map(unit => (
                  <div
                    key={unit.id}
                    className={`flex items-center justify-between h-[26px] px-1 -mx-1 rounded transition-colors
                      ${toUnit === unit.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                    onClick={() => setToUnit(unit.id)}
                  >
                    <span className="text-[13px] truncate">
                      {t?.units?.length?.units?.[unit.id] || unit.id}
                    </span>
                    <div className="flex items-baseline flex-shrink-0">
                      <span className="text-[13px]">
                        {fromUnit && value ? handleConvert(unit) : '0'}
                      </span>
                      <span className="text-[12px] text-gray-400 ml-1 w-[42px] text-right">
                        ({unit.symbol})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 复制提示 */}
        {copySuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-[13px] bg-white shadow-sm rounded-full px-4 py-2 transition-opacity duration-200">
            <div className="text-green-500 flex items-center">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t?.messages?.copied || '已复制到剪贴板'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 