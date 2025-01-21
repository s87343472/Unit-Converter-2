import type { ConversionType, ConversionResult, ConversionCategory } from './types'
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

const categories: Record<ConversionType, ConversionCategory> = {
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
  frequency,
  data,
  data_rate,
  currency,
  cooking,
  numeral,
} as const

export function convert(
  type: ConversionType,
  value: number,
  fromUnit: string,
  toUnit: string
): ConversionResult {
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
    } else if (from.ratio) {
      baseValue = value * from.ratio
    } else {
      throw new Error(`No conversion method for unit: ${fromUnit}`)
    }

    // 从基准单位转换到目标单位
    let result: number
    if (to.fromBase) {
      result = to.fromBase(baseValue)
    } else if (to.ratio) {
      result = baseValue / to.ratio
    } else {
      throw new Error(`No conversion method for unit: ${toUnit}`)
    }

    return {
      value: result,
      unit: toUnit,
    }
  } catch (error) {
    return {
      value: 0,
      unit: toUnit,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
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