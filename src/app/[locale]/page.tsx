'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/shared/LanguageProvider'
import { conversionTypes } from '@/lib/conversion-types'

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
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
        {conversionTypes.map((type) => (
          <div
            key={type.id}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className='text-lg font-medium text-gray-900'>
              {t.units[type.id]?.title || type.id}
            </div>
            <div className="mt-4 space-y-2">
              {t.units[type.id]?.units &&
                Object.entries(t.units[type.id].units || {}).flatMap(([fromKey, fromValue]) =>
                  Object.entries(t.units[type.id].units || {})
                    .filter(([toKey, toValue]) => fromValue !== toValue) // 过滤掉相同的值
                    .map(([toKey, toValue]) => (

                      <Link
                        key={`${fromKey}-${toKey}`}
                        href={`/${language}/${type.id}?from=${fromKey}&to=${toKey}`}
                        className="block text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        ·{fromValue} -- {toValue}
                      </Link>
                    ))
                )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 