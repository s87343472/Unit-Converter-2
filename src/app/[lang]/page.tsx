'use client'

import { use } from 'react'
import Link from 'next/link'

const conversionTypes = [
  { id: 'length', icon: '📏', label: '长度', desc: '长度单位转换' },
  { id: 'area', icon: '⬜', label: '面积', desc: '面积单位转换' },
  { id: 'volume', icon: '📦', label: '体积', desc: '体积单位转换' },
  { id: 'weight', icon: '⚖️', label: '质量', desc: '质量单位转换' },
  { id: 'time', icon: '⏰', label: '时间', desc: '时间单位转换' },
  { id: 'temperature', icon: '🌡️', label: '温度', desc: '温度单位转换' },
  { id: 'speed', icon: '🚀', label: '速度', desc: '速度单位转换' },
  { id: 'angle', icon: '📐', label: '角度', desc: '角度单位转换' },
  { id: 'pressure', icon: '🎈', label: '压力', desc: '压力单位转换' },
  { id: 'power', icon: '⚡', label: '功率', desc: '功率单位转换' },
  { id: 'energy', icon: '🔋', label: '能量', desc: '能量单位转换' },
  { id: 'force', icon: '💪', label: '力', desc: '力单位转换' },
  { id: 'density', icon: '💧', label: '密度', desc: '密度单位转换' },
  { id: 'flow', icon: '🌊', label: '流量', desc: '流量单位转换' },
  { id: 'frequency', icon: '📻', label: '扭矩', desc: '扭矩单位转换' },
  { id: 'data', icon: '💾', label: '数据存储', desc: '数据存储单位转换' },
  { id: 'datarate', icon: '📡', label: '数据传输', desc: '数据传输速率转换' },
  { id: 'currency', icon: '💰', label: '货币', desc: '货币单位转换' },
  { id: 'cooking', icon: '🍳', label: '烹饪', desc: '烹饪单位转换' },
  { id: 'numeral', icon: '🔢', label: '进制', desc: '数字进制转换' },
]

export default function Home({
  params,
}: {
  params: { lang: string }
}) {
  const lang = use(Promise.resolve(params.lang))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        单位转换器
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        在线单位转换工具，支持各种单位的转换计算。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {conversionTypes.map(({ id, icon, label, desc }) => (
          <Link
            key={id}
            href={`/${lang}/${id}`}
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <h2 className="text-lg font-medium text-gray-900">{label}</h2>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 