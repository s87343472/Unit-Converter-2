'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../shared/LanguageProvider'
import type { ConversionType } from '@/lib/conversion/types'

const types: { id: ConversionType; icon: string }[] = [
  // 基础单位
  { id: 'length', icon: '📏' },
  { id: 'weight', icon: '⚖️' },
  { id: 'temperature', icon: '🌡️' },
  
  // 面积体积
  { id: 'area', icon: '⬜' },
  { id: 'volume', icon: '📦' },
  
  // 时间相关
  { id: 'time', icon: '⏰' },
  { id: 'speed', icon: '🚀' },
  { id: 'frequency', icon: '📊' },
  
  // 物理单位
  { id: 'angle', icon: '📐' },
  { id: 'pressure', icon: '🎈' },
  { id: 'power', icon: '⚡' },
  { id: 'energy', icon: '🔋' },
  { id: 'force', icon: '💪' },
  { id: 'density', icon: '💧' },
  { id: 'flow', icon: '🌊' },
  
  // 数据单位
  { id: 'data', icon: '💾' },
  { id: 'data_rate', icon: '📶' },
  
  // 其他单位
  { id: 'currency', icon: '💰' },
  { id: 'numeral', icon: '🔢' }
]

export default function TypeNav() {
  const pathname = usePathname()
  const currentType = pathname.split('/')[2]
  const { language, t } = useLanguage()

  return (
    <nav className="border-b border-gray-200 overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 -mb-px">
          {types.map(({ id, icon }) => (
            <Link
              key={id}
              href={`/${language}/${id}`}
              className={`
                flex items-center px-4 py-2 border-b-2 text-sm font-medium whitespace-nowrap
                ${currentType === id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <span className="mr-2">{icon}</span>
              {t.units[id].title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 