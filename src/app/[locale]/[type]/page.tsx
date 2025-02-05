'use client'

import UnitConverterLayout from '@/components/unit-converter/UnitConverterLayout'
import type { ConversionType } from '@/lib/conversion/types'
import type { ValidLocale } from '@/lib/i18n/types'

interface ConversionPageProps {
  params: {
    locale: ValidLocale
    type: ConversionType
  }
}

export default function ConversionPage({ params }: ConversionPageProps) {
  return <UnitConverterLayout type={params.type} />
} 