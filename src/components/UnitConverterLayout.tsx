import React, { useState } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { convert } from '@/lib/conversion/converter'
import type { ConversionType, ConversionResult, NumeralConversionResult } from '@/lib/conversion/types'

interface UnitConverterLayoutProps {
  type: ConversionType
}

export default function UnitConverterLayout({ type }: UnitConverterLayoutProps) {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')
  const [result, setResult] = useState<string>('')
  const { t } = useLanguage()

  const handleConvert = () => {
    if (!value || !fromUnit || !toUnit) {
      return
    }

    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      return
    }

    try {
      if (type === 'numeral') {
        const result = convert(type, numValue, fromUnit, toUnit) as NumeralConversionResult
        setResult(result.value)
      } else {
        const result = convert(type, numValue, fromUnit, toUnit) as ConversionResult
        setResult(result.value.toPrecision(10).replace(/\.?0+$/, ''))
      }
    } catch (error) {
      console.error('Conversion error:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t.units[type].title}</h1>
      <p className="text-gray-600 mb-8">{t.units[type].description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">{t.common.searchUnit}</span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder={t.common.inputValue}
            />
          </label>
          
          <div className="space-y-2">
            <span className="text-gray-700">{t.common.selectUnit}</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(t.units[type].units || {}).map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => setFromUnit(id)}
                  className={`p-2 text-sm rounded-md ${
                    fromUnit === id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium">{result}</span>
            {result && (
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                {t.buttons.copy}
              </button>
            )}
          </div>
          
          <div className="space-y-2">
            <span className="text-gray-700">{t.common.selectUnit}</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(t.units[type].units || {}).map(([id, name]) => (
                <button
                  key={id}
                  onClick={() => {
                    setToUnit(id)
                    handleConvert()
                  }}
                  className={`p-2 text-sm rounded-md ${
                    toUnit === id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {t.units[type].knowledge && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{t.units[type].knowledge.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.units[type].knowledge.items.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 