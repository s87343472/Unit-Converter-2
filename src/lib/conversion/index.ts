import type { ConversionType, ConversionCategory } from './types'
import { convert } from './converter'
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
// import currency from './currency' // 注销货币单位,变化太快
import cooking from './cooking'
import numeral from './numeral'
import torque from './torque'

// 获取所有单位类别
export const categories = {
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
  data_rate: data_rate,
  // currency, // 注销货币单位,变化太快
  cooking,
  numeral,
} as Record<ConversionType, ConversionCategory>

/**
 * 获取单位转换因子
 * @param type 转换类型
 * @param fromUnit 源单位ID
 * @param toUnit 目标单位ID
 * @returns 转换因子
 */
export function getUnitConversionFactor(type: ConversionType, fromUnit: string, toUnit: string): number {
  const category = categories[type]
  
  if (!category) {
    throw new Error(`不支持的转换类型: ${type}`)
  }
  
  const from = category.units[fromUnit]
  const to = category.units[toUnit]
  
  if (!from || !to) {
    throw new Error(`无效的单位: ${!from ? fromUnit : toUnit}`)
  }
  
  // 如果单位有直接的转换比率，则直接计算
  if (from.ratio && to.ratio) {
    return from.ratio / to.ratio
  }
  
  // 否则使用转换函数进行计算
  try {
    const result = convert(type, 1, fromUnit, toUnit)
    if (typeof result.value === 'number') {
      return result.value
    } else {
      // 处理字符串值（如进制转换的情况）
      return 1
    }
  } catch (error) {
    // 如果转换失败，返回默认值
    console.error(`计算转换因子错误: ${error}`)
    return 1
  }
}

export default categories 