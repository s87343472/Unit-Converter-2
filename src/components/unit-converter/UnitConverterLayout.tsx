'use client'

import { useState, useEffect, useMemo } from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType, ConversionResult, NumeralConversionResult } from '@/lib/conversion/types'
import { convert, getUnits } from '@/lib/conversion/converter'

// 单位 ID 映射表
const UNIT_ID_MAP: Record<string, Record<string, string>> = {
  length: {
    meter: 'metric_meter',
    kilometer: 'metric_kilometer',
    centimeter: 'metric_centimeter',
    millimeter: 'metric_millimeter',
    inch: 'imperial_inch',
    foot: 'imperial_foot',
    yard: 'imperial_yard',
    mile: 'imperial_mile',
    light_year: 'astronomical_light_year',
    astronomical_unit: 'astronomical_unit',
    decimeter: 'metric_decimeter',
    micrometer: 'metric_micrometer',
    nanometer: 'metric_nanometer',
    picometer: 'metric_picometer'
  },
  weight: {
    kilogram: 'metric_kilogram',
    gram: 'metric_gram',
    milligram: 'metric_milligram',
    metric_ton: 'metric_tonne',
    pound: 'imperial_pound',
    ounce: 'imperial_ounce',
    carat: 'metric_carat',
    atomic_mass_unit: 'metric_microgram'
  },
  area: {
    square_meter: 'metric_square_meter',
    square_kilometer: 'metric_square_kilometer',
    square_centimeter: 'metric_square_centimeter',
    square_millimeter: 'metric_square_millimeter',
    square_inch: 'imperial_square_inch',
    square_foot: 'imperial_square_foot',
    square_yard: 'imperial_square_yard',
    square_mile: 'imperial_square_mile',
    hectare: 'metric_hectare',
    acre: 'imperial_acre'
  },
  volume: {
    cubic_meter: 'metric_cubic_meter',
    cubic_kilometer: 'metric_cubic_kilometer',
    cubic_centimeter: 'metric_cubic_centimeter',
    cubic_millimeter: 'metric_cubic_millimeter',
    cubic_decimeter: 'metric_cubic_decimeter',
    liter: 'metric_liter',
    milliliter: 'metric_milliliter',
    gallon: 'us_gallon',
    quart: 'us_quart',
    pint: 'us_pint',
    cup: 'us_cup',
    fluid_ounce: 'us_fluid_ounce',
    tablespoon: 'us_tablespoon',
    teaspoon: 'us_teaspoon',
    cubic_yard: 'imperial_cubic_yard',
    cubic_foot: 'imperial_cubic_foot',
    cubic_inch: 'imperial_cubic_inch',
    dan: 'chinese_dan',
    dou: 'chinese_dou',
    sheng: 'chinese_sheng',
    koku: 'japanese_koku',
    to: 'japanese_to',
    sho: 'japanese_sho',
    go: 'japanese_go',
    oil_barrel: 'industrial_oil_barrel',
    beer_barrel: 'industrial_beer_barrel'
  },
  temperature: {
    celsius: 'metric_celsius',
    fahrenheit: 'us_fahrenheit',
    kelvin: 'scientific_kelvin'
  },
  time: {
    second: 'metric_second',
    minute: 'metric_minute',
    hour: 'metric_hour',
    day: 'metric_day',
    week: 'metric_week',
    month: 'metric_month',
    year: 'metric_year',
    decade: 'metric_decade',
    century: 'metric_century'
  },
  speed: {
    meter_per_second: 'metric_meter_per_second',
    kilometer_per_hour: 'metric_kilometer_per_hour',
    mile_per_hour: 'imperial_mile_per_hour',
    foot_per_second: 'imperial_foot_per_second',
    knot: 'nautical_knot',
    mach: 'scientific_mach',
    light_speed: 'scientific_light_speed',
    astronomical_unit_per_year: 'scientific_astronomical_unit_per_year',
    parsec_per_year: 'scientific_parsec_per_year',
    kilometer_per_second: 'metric_kilometer_per_second',
    kilometer_per_minute: 'metric_kilometer_per_minute',
    meter_per_minute: 'metric_meter_per_minute'
  },
  pressure: {
    pascal: 'metric_pascal',
    kilopascal: 'metric_kilopascal',
    megapascal: 'metric_megapascal',
    bar: 'industrial_bar',
    atmosphere: 'scientific_atmosphere',
    torr: 'scientific_torr',
    pound_per_square_inch: 'imperial_pound_per_square_inch'
  },
  energy: {
    joule: 'metric_joule',
    kilojoule: 'metric_kilojoule',
    calorie: 'scientific_calorie',
    kilocalorie: 'scientific_kilocalorie',
    watt_hour: 'scientific_watt_hour',
    kilowatt_hour: 'scientific_kilowatt_hour',
    electron_volt: 'scientific_electron_volt',
    british_thermal_unit: 'imperial_british_thermal_unit',
    us_therm: 'scientific_therm'
  },
  power: {
    watt: 'metric_watt',
    kilowatt: 'metric_kilowatt',
    megawatt: 'metric_megawatt',
    horsepower: 'imperial_horsepower'
  },
  data: {
    bit: 'metric_bit',
    byte: 'metric_byte',
    kilobyte: 'metric_kilobyte',
    megabyte: 'metric_megabyte',
    gigabyte: 'metric_gigabyte',
    terabyte: 'metric_terabyte',
    petabyte: 'metric_petabyte',
    kibibyte: 'binary_kibibyte',
    mebibyte: 'binary_mebibyte',
    gibibyte: 'binary_gibibyte',
    tebibyte: 'binary_tebibyte',
    pebibyte: 'binary_pebibyte',
    kilobit: 'metric_kilobit',
    megabit: 'metric_megabit',
    gigabit: 'metric_gigabit',
    terabit: 'metric_terabit',
    petabit: 'metric_petabit',
    kibibit: 'binary_kibibit',
    mebibit: 'binary_mebibit',
    gibibit: 'binary_gibibit',
    tebibit: 'binary_tebibit',
    pebibit: 'binary_pebibit'
  },
  data_rate: {
    bit_per_second: 'digital_bit_per_second',
    byte_per_second: 'digital_byte_per_second',
    kilobit_per_second: 'digital_kilobit_per_second',
    kilobyte_per_second: 'digital_kilobyte_per_second',
    megabit_per_second: 'digital_megabit_per_second',
    megabyte_per_second: 'digital_megabyte_per_second',
    gigabit_per_second: 'digital_gigabit_per_second',
    gigabyte_per_second: 'digital_gigabyte_per_second',
    terabit_per_second: 'digital_terabit_per_second',
    terabyte_per_second: 'digital_terabyte_per_second',
    kibibit_per_second: 'binary_kibibit_per_second',
    kibibyte_per_second: 'binary_kibibyte_per_second',
    mebibit_per_second: 'binary_mebibit_per_second',
    mebibyte_per_second: 'binary_mebibyte_per_second',
    gibibit_per_second: 'binary_gibibit_per_second',
    gibibyte_per_second: 'binary_gibibyte_per_second',
    tebibit_per_second: 'binary_tebibit_per_second',
    tebibyte_per_second: 'binary_tebibyte_per_second'
  },
  angle: {
    degree: 'metric_degree',
    radian: 'metric_radian',
    gradian: 'metric_gradian',
    arcminute: 'metric_arcminute',
    arcsecond: 'metric_arcsecond'
  },
  force: {
    newton: 'metric_newton',
    kilonewton: 'metric_kilonewton',
    dyne: 'scientific_dyne',
    pound_force: 'imperial_pound_force',
    kilogram_force: 'scientific_kilogram_force'
  },
  density: {
    kilogram_per_cubic_meter: 'metric_kilogram_per_cubic_meter',
    gram_per_cubic_centimeter: 'metric_gram_per_cubic_centimeter',
    gram_per_milliliter: 'metric_gram_per_milliliter',
    kilogram_per_liter: 'metric_kilogram_per_liter',
    pound_per_cubic_foot: 'imperial_pound_per_cubic_foot',
    pound_per_cubic_inch: 'imperial_pound_per_cubic_inch',
    pound_per_gallon: 'us_pound_per_gallon',
    ounce_per_cubic_inch: 'imperial_ounce_per_cubic_foot',
    ounce_per_gallon: 'us_ounce_per_gallon'
  },
  flow: {
    cubic_meter_per_second: 'metric_cubic_meter_per_second',
    liter_per_second: 'metric_liter_per_second',
    cubic_foot_per_second: 'imperial_cubic_foot_per_second',
    gallon_per_minute: 'imperial_gallon_per_minute'
  },
  torque: {
    newton_meter: 'metric_newton_meter',
    newton_centimeter: 'metric_newton_centimeter',
    pound_foot: 'imperial_pound_foot',
    pound_inch: 'imperial_pound_inch',
    kilogram_force_meter: 'scientific_kilogram_force_meter',
    kilogram_force_centimeter: 'scientific_kilogram_force_centimeter'
  },
  frequency: {
    hertz: 'metric_hertz',
    kilohertz: 'metric_kilohertz',
    megahertz: 'metric_megahertz',
    gigahertz: 'metric_gigahertz',
    cycles_per_second: 'metric_cycles_per_second',
    rpm: 'metric_rpm',
    bpm: 'metric_bpm'
  }
}

interface UnitConverterLayoutProps {
  type: ConversionType
}

export default function UnitConverterLayout({ type }: UnitConverterLayoutProps) {
  const { t, language } = useLanguage()
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 使用 useMemo 缓存单位对象
  const units = useMemo(() => {
    if (type === 'numeral') {
      return {
        decimal: t?.units?.numeral?.units?.decimal || '十进制',
        binary: t?.units?.numeral?.units?.binary || '二进制',
        octal: t?.units?.numeral?.units?.octal || '八进制',
        hexadecimal: t?.units?.numeral?.units?.hexadecimal || '十六进制'
      }
    }
    return t?.units?.[type]?.units || {}
  }, [type, t])

  // 初始化默认单位
  useEffect(() => {
    const availableUnits = Object.keys(units)
    if (availableUnits.length > 0) {
      if (!fromUnit) {
        setFromUnit(availableUnits[0])
      }
      if (!toUnit && availableUnits.length > 1) {
        setToUnit(availableUnits[1])
      }
    }
  }, [units]) // 只依赖 units 的变化

  // 获取实际的单位 ID
  const getActualUnitId = (unitId: string): string => {
    if (type === 'numeral') return unitId
    
    // 标准化单位ID
    let normalizedUnitId = unitId
      .replace('bits_', 'bit_')
      .replace('bytes_', 'byte_')
      .replace('bps_', 'bit_per_second_')
      .replace('Bps_', 'byte_per_second_')
    
    // 处理常见的速率单位缩写
    if (type === 'data_rate') {
      normalizedUnitId = normalizedUnitId
        .replace('kbps', 'kilobit_per_second')
        .replace('kBps', 'kilobyte_per_second')
        .replace('mbps', 'megabit_per_second')
        .replace('mBps', 'megabyte_per_second')
        .replace('gbps', 'gigabit_per_second')
        .replace('gBps', 'gigabyte_per_second')
        .replace('tbps', 'terabit_per_second')
        .replace('tBps', 'terabyte_per_second')
    }
    
    const mappedId = UNIT_ID_MAP[type]?.[normalizedUnitId]
    if (!mappedId) {
      return normalizedUnitId
    }
    
    return mappedId
  }

  // 格式化数值显示
  const formatNumber = (num: number): string => {
    if (Math.abs(num) === 0) return '0'
    
    if (Math.abs(num) < 0.0000001 || Math.abs(num) >= 1e7) {
      return num.toExponential(15)
        .replace(/\.?0+e/, 'e')
        .replace(/e\+?/, 'e')
    }
    
    const fixed = num.toFixed(15)
    return fixed.replace(/\.?0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1')
  }

  // 处理转换
  const handleConvert = (toUnitId: string): string => {
    try {
      setError(null)
      if (!value || !fromUnit || !toUnitId) {
        setError(t?.messages?.selectUnit || '请选择两个单位')
        return '0'
      }

      const numValue = Number(value)
      if (!Number.isFinite(numValue)) {
        setError(t?.messages?.invalidNumber || '请输入有效数字')
        return '0'
      }

      const actualFromUnit = getActualUnitId(fromUnit)
      const actualToUnit = getActualUnitId(toUnitId)
      
      if (type === 'numeral') {
        const result = convert(type, numValue, actualFromUnit, actualToUnit) as NumeralConversionResult
        return result.value.toString()
      } else {
        const result = convert(type, numValue, actualFromUnit, actualToUnit) as ConversionResult
        return formatNumber(result.value)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(t?.messages?.conversionError || '转换错误')
      }
      return '0'
    }
  }

  // 处理输入验证
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setError(null)

    if (type === 'numeral') {
      const base = fromUnit === 'decimal' ? /^[0-9]*$/ :
                  fromUnit === 'binary' ? /^(0b)?[01]*$/i :
                  fromUnit === 'octal' ? /^(0o)?[0-7]*$/i :
                  /^(0x)?[0-9A-Fa-f]*$/i
      
      if (base.test(newValue)) {
        setValue(newValue)
      } else {
        setError(t?.errors?.invalidFormat || 'Invalid format')
      }
    } else {
      if (/^-?\d*\.?\d*(?:[eE][+-]?\d*)?$/.test(newValue)) {
        setValue(newValue)
      } else {
        setError(t?.errors?.invalidFormat || 'Invalid format')
      }
    }
  }

  // 处理复制
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (error) {
      setError(t?.errors?.copyFailed || 'Copy failed')
    }
  }

  // 使用 useMemo 缓存转换结果
  const conversionResults = useMemo(() => {
    if (!value || !fromUnit) return null
    return Object.keys(units).reduce((acc, unitId) => {
      acc[unitId] = handleConvert(unitId)
      return acc
    }, {} as Record<string, string>)
  }, [value, fromUnit, units])

  return (
    <div className="flex-1">
      {/* 错误提示 */}
      {error && (
        <div className="mb-4 p-4 rounded-md bg-red-50 border border-red-200">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* 转换区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左侧 - From */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">{t?.common?.from || 'From'}:</h2>
          <input
            type="text"
            value={value}
            onChange={handleInput}
            className="block w-full h-12 rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={type === 'numeral' ? 
              (t?.common?.enterValue?.replace('{unit}', units[fromUnit]) || `Enter ${units[fromUnit]} value`) :
              (t?.common?.enterValue || 'Enter value')}
          />
          <div className="mt-4 rounded-md border border-gray-200 overflow-hidden">
            {Object.entries(units).map(([unitId, unit]) => (
              <button
                key={unitId}
                className={`w-full flex items-center h-10 px-4 text-sm transition-colors
                  ${fromUnit === unitId 
                    ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500' 
                    : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                onClick={() => setFromUnit(unitId)}
              >
                <span className="flex-1">{unit}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 右侧 - To */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">{t?.common?.to || 'To'}:</h2>
          <div className="h-12 mb-4 rounded-md border border-gray-200 px-3 py-2 text-sm bg-gray-50 font-mono">
            {conversionResults && toUnit ? conversionResults[toUnit] : '0'}
          </div>
          <div className="rounded-md border border-gray-200 overflow-hidden">
            {Object.entries(units).map(([unitId, unit]) => (
              <button
                key={unitId}
                className={`w-full flex items-center h-10 px-4 text-sm transition-colors
                  ${toUnit === unitId 
                    ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500' 
                    : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                onClick={() => setToUnit(unitId)}
              >
                <span className="flex-1">{unit}</span>
                <span className="text-gray-600 font-mono text-right w-[180px] tabular-nums">
                  ({conversionResults ? conversionResults[unitId] : '0'})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 使用指南和知识区域 */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="max-w-3xl">
          {/* 使用说明 */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {t?.converter?.instructions?.title || 'Instructions'}
            </h2>
            <div className="space-y-3">
              {(t?.converter?.instructions?.steps || []).map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm mr-3">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 限制条件 */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {t?.converter?.limitations?.title || 'Limitations'}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {(t?.converter?.limitations?.items || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 有趣的知识 */}
          {t?.units?.[type]?.knowledge && (
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                {t?.units?.[type]?.knowledge?.title || 'Knowledge'}
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-4 text-gray-600">
                {(t?.units?.[type]?.knowledge?.items || []).map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* 复制提示 */}
      {copySuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t?.messages?.copied || 'Copied!'}
          </div>
        </div>
      )}
    </div>
  )
} 