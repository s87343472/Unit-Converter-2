'use client'

import UnitConverterLayout from '@/components/unit-converter/UnitConverterLayout'
import type { UnitType } from '@/lib/i18n/units'
import type { ValidLocale } from '@/lib/i18n/types'

interface ConversionPageProps {
  params: {
    lang: ValidLocale
    type: UnitType
  }
}

export default function ConversionPage({ params }: ConversionPageProps) {
  return <UnitConverterLayout type={params.type} />
} 