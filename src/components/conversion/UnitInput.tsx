import { ChangeEvent } from 'react'
import type { ConversionType } from '@/lib/conversion/types'
import { getUnits } from '@/lib/conversion/converter'

interface UnitInputProps {
  type: ConversionType
  value: string
  unit: string
  label?: string
  onChange: (value: string) => void
  onUnitChange: (unit: string) => void
  error?: string
}

export default function UnitInput({
  type,
  value,
  unit,
  label,
  onChange,
  onUnitChange,
  error,
}: UnitInputProps) {
  const units = getUnits(type)

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    // 只允许数字、小数点和负号
    if (/^-?\d*\.?\d*$/.test(newValue) || newValue === '') {
      onChange(newValue)
    }
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={handleValueChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              error ? 'border-red-300' : ''
            }`}
            placeholder="0"
          />
          {error && (
            <p className="mt-1 text-xs text-red-600">{error}</p>
          )}
        </div>
        <select
          value={unit}
          onChange={(e) => onUnitChange(e.target.value)}
          className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {units.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
} 