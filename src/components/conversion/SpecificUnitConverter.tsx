'use client'

import React, { useState, useEffect } from 'react'
import { convert } from '@/lib/conversion/converter'
import type { ConversionType } from '@/lib/conversion/types'
import { useLanguage } from '@/components/shared/LanguageProvider'

interface SpecificUnitConverterProps {
  type: ConversionType
  fromUnit: string
  toUnit: string
  fromUnitLabel: string
  toUnitLabel: string
  fromUnitSymbol: string
  toUnitSymbol: string
}

export default function SpecificUnitConverter({
  type,
  fromUnit,
  toUnit,
  fromUnitLabel,
  toUnitLabel,
  fromUnitSymbol,
  toUnitSymbol
}: SpecificUnitConverterProps) {
  const { language } = useLanguage()
  const [inputValue, setInputValue] = useState<string>('1')
  const [outputValue, setOutputValue] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // 本地化错误消息
  const getLocalizedErrorMessage = (errorMsg: string): string => {
    if (language === 'zh-CN') {
      return errorMsg === 'Invalid input: value must be a finite number' 
        ? '请输入有效的数字' 
        : '转换发生错误';
    } else if (language === 'zh-TW') {
      return errorMsg === 'Invalid input: value must be a finite number' 
        ? '請輸入有效的數字' 
        : '轉換發生錯誤';
    } else if (language === 'ja') {
      return errorMsg === 'Invalid input: value must be a finite number' 
        ? '有効な数字を入力してください' 
        : '変換エラーが発生しました';
    } else {
      return errorMsg === 'Invalid input: value must be a finite number' 
        ? 'Please enter a valid number' 
        : 'Conversion error occurred';
    }
  }

  // 获取本地化提示文本
  const getLocalizedHint = (): string => {
    if (language === 'zh-CN') {
      return '输入任意数值进行即时转换。点击结果可复制带单位的转换结果。';
    } else if (language === 'zh-TW') {
      return '輸入任意數值進行即時轉換。點擊結果可複製帶單位的轉換結果。';
    } else if (language === 'ja') {
      return '任意の数値を入力してリアルタイムで変換します。結果をクリックすると単位付きの変換結果がコピーされます。';
    } else {
      return 'Enter any value for instant conversion. Click on the result to copy with unit.';
    }
  }

  // 获取本地化的复制确认文本
  const getLocalizedCopyConfirmation = (): string => {
    if (language === 'zh-CN') {
      return '已复制!';
    } else if (language === 'zh-TW') {
      return '已複製!';
    } else if (language === 'ja') {
      return 'コピーしました!';
    } else {
      return 'Copied!';
    }
  }
  
  // 获取本地化的输入占位符
  const getLocalizedPlaceholder = (): string => {
    if (language === 'zh-CN') {
      return '输入数值';
    } else if (language === 'zh-TW') {
      return '輸入數值';
    } else if (language === 'ja') {
      return '数値を入力';
    } else {
      return 'Enter value';
    }
  }

  // 调试信息
  useEffect(() => {
    console.log('SpecificUnitConverter组件接收到的参数:', {
      type,
      fromUnit,
      toUnit,
      fromUnitLabel,
      toUnitLabel,
      fromUnitSymbol,
      toUnitSymbol,
      language
    })
  }, [type, fromUnit, toUnit, fromUnitLabel, toUnitLabel, fromUnitSymbol, toUnitSymbol, language])

  // 执行转换
  useEffect(() => {
    if (!inputValue || inputValue === '') {
      setOutputValue('')
      setError(null)
      return
    }

    try {
      const numericValue = parseFloat(inputValue)
      if (isNaN(numericValue)) {
        setError(getLocalizedErrorMessage('Invalid input: value must be a finite number'))
        setOutputValue('')
        return
      }

      console.log(`正在执行转换: ${type} ${numericValue} ${fromUnit} -> ${toUnit}`)
      const result = convert(type, numericValue, fromUnit, toUnit)
      console.log('转换结果:', result)
      
      if (typeof result.value === 'number') {
        // 格式化输出值，处理科学计数法和小数位数
        let formattedValue = result.value.toString()
        
        // 对于非常大或非常小的数值使用科学计数法
        if (result.value > 1e15 || (result.value !== 0 && result.value < 1e-10)) {
          formattedValue = result.value.toExponential(10)
        } else {
          // 对于普通数值，控制小数位数
          const decimalStr = result.value.toString().split('.')[1]
          if (decimalStr && decimalStr.length > 10) {
            formattedValue = result.value.toFixed(10)
          }
        }
        
        setOutputValue(formattedValue)
        setError(null)
      } else {
        setOutputValue(result.value.toString())
        setError(null)
      }
    } catch (err: any) {
      console.error('转换错误:', err)
      setError(getLocalizedErrorMessage(err.message || 'Conversion error occurred'))
      setOutputValue('')
    }
  }, [inputValue, fromUnit, toUnit, type, language])

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 只允许输入数字和小数点
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setInputValue(value)
    }
  }

  // 复制结果
  const handleCopyResult = () => {
    if (outputValue) {
      const textToCopy = `${outputValue} ${toUnitSymbol}`
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 输入部分 */}
        <div>
          <label htmlFor="fromValue" className="block text-sm font-medium text-gray-700 mb-1">
            {fromUnitLabel} ({fromUnitSymbol})
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              id="fromValue"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              placeholder={getLocalizedPlaceholder()}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* 输出部分 */}
        <div>
          <label htmlFor="toValue" className="block text-sm font-medium text-gray-700 mb-1">
            {toUnitLabel} ({toUnitSymbol})
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              id="toValue"
              className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 sm:text-sm p-2 border"
              readOnly
              value={outputValue}
              onClick={handleCopyResult}
              title={language === 'zh-CN' ? "点击复制结果" : 
                    language === 'zh-TW' ? "點擊複製結果" : 
                    language === 'ja' ? "クリックして結果をコピー" : 
                    "Click to copy result"}
            />
            {outputValue && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={handleCopyResult}
              >
                {copied ? (
                  <span className="text-green-600 text-sm">{getLocalizedCopyConfirmation()}</span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 hover:text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      )}

      {/* 使用说明 */}
      <div className="mt-4 text-xs text-gray-500">
        <p>{getLocalizedHint()}</p>
      </div>
    </div>
  )
} 