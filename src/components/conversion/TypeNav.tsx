'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const types = [
  // 基础单位
  { id: 'length', icon: '📏', label: '长度' },
  { id: 'weight', icon: '⚖️', label: '重量' },
  { id: 'temperature', icon: '🌡️', label: '温度' },
  
  // 面积体积
  { id: 'area', icon: '⬜', label: '面积' },
  { id: 'volume', icon: '📦', label: '体积' },
  
  // 时间相关
  { id: 'time', icon: '⏰', label: '时间' },
  { id: 'speed', icon: '🚀', label: '速度' },
  { id: 'frequency', icon: '📊', label: '频率' },
  
  // 物理单位
  { id: 'angle', icon: '📐', label: '角度' },
  { id: 'pressure', icon: '🎈', label: '压力' },
  { id: 'power', icon: '⚡', label: '功率' },
  { id: 'energy', icon: '🔋', label: '能量' },
  { id: 'force', icon: '💪', label: '力' },
  { id: 'density', icon: '💧', label: '密度' },
  { id: 'flow', icon: '🌊', label: '流量' },
  
  // 数据单位
  { id: 'data', icon: '💾', label: '数据存储' },
  { id: 'data_rate', icon: '📶', label: '数据传输速率' },
  
  // 其他单位
  { id: 'currency', icon: '💰', label: '货币' }
]

export default function TypeNav() {
  const pathname = usePathname()
  const [, lang, currentType] = pathname.split('/')

  return (
    <nav className="border-b border-gray-200 overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 -mb-px">
          {types.map(({ id, icon, label }) => (
            <Link
              key={id}
              href={`/${lang}/${id}`}
              className={`
                flex items-center px-4 py-2 border-b-2 text-sm font-medium whitespace-nowrap
                ${currentType === id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <span className="mr-2">{icon}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 