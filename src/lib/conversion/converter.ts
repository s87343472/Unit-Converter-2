import type { ConversionType, ConversionResult, NumeralConversionResult, ConversionCategory } from './types'
import { isNumber } from './types'
import length from './length'
import weight from './weight'
import temperature from './temperature'
import area from './area'
import volume from './volume'
import time from './time'
import speed from './speed'
import angle from './angle'
import pressure from './pressure'
import power from './power'
import energy from './energy'
import force from './force'
import density from './density'
import flow from './flow'
import frequency from './frequency'
import data from './data'
import data_rate from './data_rate'
import currency from './currency'
import cooking from './cooking'
import numeral from './numeral'
import torque from './torque'

const categories = {
  length,
  weight,
  temperature,
  area,
  volume,
  time,
  speed,
  angle,
  pressure,
  power,
  energy,
  force,
  density,
  flow,
  torque,
  frequency,
  data,
  data_rate,
  currency,
  cooking,
  numeral,
} as Record<ConversionType, ConversionCategory>

// 精度控制函数
function roundToSignificantDigits(value: number, digits: number = 15): number {
  if (value === 0) return 0
  
  // 计算数量级
  const magnitude = Math.floor(Math.log10(Math.abs(value)))
  
  // 计算所需精度，并确保在1-100范围内
  let precision = digits - magnitude
  
  // 如果精度超出范围，使用科学计数法
  if (precision < 1 || precision > 100) {
    // 对于非常大的数，使用较小的精度
    if (precision < 1) {
      precision = 1
    }
    // 对于非常小的数，限制最大精度
    else {
      precision = 100
    }
  }
  
  // 使用toExponential来处理非常大或非常小的数
  if (Math.abs(value) < 1e-15 || Math.abs(value) > 1e15) {
    return Number(value.toExponential(15))
  }
  
  return Number(value.toPrecision(precision))
}

export function convert(
  type: 'numeral',
  value: number,
  fromUnit: string,
  toUnit: string
): NumeralConversionResult
export function convert(
  type: Exclude<ConversionType, 'numeral'>,
  value: number,
  fromUnit: string,
  toUnit: string
): ConversionResult
export function convert(
  type: ConversionType,
  value: number,
  fromUnit: string,
  toUnit: string
): ConversionResult | NumeralConversionResult {
  if (!isNumber(value)) {
    throw new Error('Invalid input: value must be a finite number')
  }

  try {
    const category = categories[type]
    if (!category) {
      throw new Error(`Unsupported conversion type: ${type}`)
    }

    const from = category.units[fromUnit]
    const to = category.units[toUnit]

    if (!from || !to) {
      throw new Error(`Invalid unit: ${!from ? fromUnit : toUnit}`)
    }

    // 转换到基准单位
    let baseValue: number
    if (from.toBase) {
      baseValue = from.toBase(value)
      if (!isNumber(baseValue)) {
        throw new Error('Invalid conversion result: toBase must return a finite number')
      }
    } else if (from.ratio) {
      baseValue = roundToSignificantDigits(value * from.ratio)
      if (!isNumber(baseValue)) {
        throw new Error('Invalid conversion result: overflow in multiplication')
      }
    } else {
      throw new Error(`No conversion method for unit: ${fromUnit}`)
    }

    // 从基准单位转换到目标单位
    let result: number | string
    if (to.fromBase) {
      result = to.fromBase(baseValue)
    } else if (to.ratio) {
      result = roundToSignificantDigits(baseValue / to.ratio)
      if (!isNumber(result)) {
        throw new Error('Invalid conversion result: overflow in division')
      }
    } else {
      throw new Error(`No conversion method for unit: ${toUnit}`)
    }

    // 对于数字系统转换，返回字符串结果
    if (type === 'numeral') {
      if (toUnit === 'decimal') {
        if (!isNumber(result)) {
          throw new Error('Decimal conversion must return a number')
        }
        return {
          value: result,
          unit: toUnit,
        } as ConversionResult
      }
      if (typeof result !== 'string') {
        throw new Error('Numeral conversion must return a string')
      }
      return {
        value: result,
        unit: toUnit,
      } as NumeralConversionResult
    }

    // 对于其他转换，确保结果是数字
    if (!isNumber(result)) {
      throw new Error('Invalid conversion result: must be a finite number')
    }

    return {
      value: result,
      unit: toUnit,
    } as ConversionResult
  } catch (error) {
    throw error instanceof Error ? error : new Error('Unknown error')
  }
}

export function getUnits(type: ConversionType): string[] {
  return Object.keys(categories[type]?.units || {})
}

export function getBaseUnit(type: ConversionType): string {
  return categories[type]?.baseUnit
}

export function isValidUnit(type: ConversionType, unit: string): boolean {
  return unit in (categories[type]?.units || {})
} 