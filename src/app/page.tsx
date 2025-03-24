'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { conversionTypes } from '@/lib/conversion-types'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { UnitType } from '@/lib/i18n/units'

// 定义单位转换类型接口
interface UnitConversion {
  from: string;
  to: string;
  fromName: string;
  toName: string;
}

interface UnitConversionsData {
  conversions: UnitConversion[];
  baseUnit: string;
  total: number;
}

export default function HomePage() {
  const { t, language } = useLanguage()

  // 获取每个单位类型的主要单位之间的转换关系
  const getMainUnitConversions = (typeId: UnitType, maxDisplay: number = 5): UnitConversionsData | null => {
    const units = t.units[typeId]?.units
    if (!units) return null
    
    // 获取单位名称
    const unitNames = Object.values(units)
    if (unitNames.length < 2) return null
    
    // 把主要的单位放在前面
    const mainUnits = Object.keys(units).slice(0, maxDisplay + 1)
    const baseUnit = mainUnits[0]
    
    // 生成转换对
    const conversions = mainUnits.slice(1, maxDisplay + 1).map(toUnit => ({
      from: baseUnit,
      to: toUnit,
      fromName: units[baseUnit],
      toName: units[toUnit]
    }))
    
    return {
      conversions,
      baseUnit,
      total: Object.keys(units).length
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.common.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionTypes.map((type) => (
              <Link
                key={type.id}
                href={`/${language}/${type.id}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8">
                    {<type.icon className="w-8 h-8 text-blue-600" />}
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      {t.units[type.id]?.title || type.id}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {t.units[type.id]?.description || ''}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {conversionTypes.map((type) => {
              const unitData = getMainUnitConversions(type.id)
              if (!unitData) return null
              
              return (
                <div
                  key={type.id}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className='text-lg font-medium text-gray-900 mb-4'>
                    {t.units[type.id]?.title || type.id}
                  </div>
                  <div className="mt-2 space-y-2">
                    {unitData.conversions.map((conversion: UnitConversion) => (
                      <Link
                        key={`${conversion.from}-${conversion.to}`}
                        href={`/${language}/${type.id}?from=${conversion.from}&to=${conversion.to}`}
                        className="block text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {conversion.fromName} {language === 'zh-CN' ? '转换' : 'to'} {conversion.toName}
                      </Link>
                    ))}
                    <Link
                      href={`/${language}/${type.id}`}
                      className="block text-sm text-blue-600 hover:text-blue-800 hover:underline mt-3 font-medium"
                    >
                      {language === 'zh-CN' ? '点击查看更多...' : 'See more...'}
                    </Link>
                  </div>
                  
                  {/* 隐藏的SEO内容，对用户不可见但搜索引擎可以索引 */}
                  <div className="hidden">
                    {Object.entries(t.units[type.id]?.units || {}).flatMap(([fromKey, fromValue]) =>
                      Object.entries(t.units[type.id]?.units || {})
                        .filter(([toKey]) => fromKey !== toKey)
                        .map(([toKey, toValue]) => (
                          <span key={`${fromKey}-${toKey}`}>
                            {fromValue} {language === 'zh-CN' ? '转换' : 'to'} {toValue}
                          </span>
                        ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 