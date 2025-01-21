import type { ConversionType } from '@/lib/conversion/types'

interface TypeSelectorProps {
  value: ConversionType
  onChange: (type: ConversionType) => void
}

const types: { id: ConversionType; label: string; icon: string }[] = [
  { id: 'length', label: '长度', icon: '📏' },
  { id: 'weight', label: '重量', icon: '⚖️' },
  { id: 'temperature', label: '温度', icon: '🌡️' },
]

export default function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {types.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`p-4 rounded-lg border-2 transition-colors ${
            value === id
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-gray-200 hover:border-indigo-200'
          }`}
        >
          <div className="text-2xl mb-2">{icon}</div>
          <div className="font-medium">{label}</div>
        </button>
      ))}
    </div>
  )
} 