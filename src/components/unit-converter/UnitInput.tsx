'use client'

import React from 'react'
import { ClipboardIcon } from '@heroicons/react/24/outline'

interface UnitInputProps {
  label: string
  symbol: string
  value: string
  onChange: (value: string) => void
  onCopy?: () => void
  error?: string
  readOnly?: boolean
}

export default function UnitInput({
  label,
  symbol,
  value,
  onChange,
  onCopy,
  error,
  readOnly = false
}: UnitInputProps) {
  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 只允许数字、小数点和负号
    if (/^-?\d*\.?\d*$/.test(value) || value === '') {
      onChange(value)
    }
  }

  // 处理复制
  const handleCopy = () => {
    if (value && onCopy) {
      navigator.clipboard.writeText(`${value} ${symbol}`)
      onCopy()
    }
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
          className={`
            block w-full rounded-md border-0 py-2.5 pl-4 pr-20
            text-gray-900 ring-1 ring-inset
            focus:ring-2 focus:ring-inset focus:ring-blue-600
            ${error ? 'ring-red-300' : 'ring-gray-300'}
            ${readOnly ? 'bg-gray-50' : 'bg-white'}
            sm:text-sm sm:leading-6
          `}
          placeholder="0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* 单位符号 */}
          <span className="px-3 text-gray-500 sm:text-sm border-l border-gray-300">
            {symbol}
          </span>
          {/* 复制按钮 */}
          {readOnly && onCopy && (
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <ClipboardIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {/* 错误提示 */}
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
} 