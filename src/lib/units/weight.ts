import { Unit } from './types'

// 使用千克(kg)作为基准单位
export const weightUnits: Unit[] = [
  { id: 'metric_ton', symbol: 't', ratio: 1000, category: 'metric' },
  { id: 'kilogram', symbol: 'kg', ratio: 1, category: 'metric' },
  { id: 'gram', symbol: 'g', ratio: 0.001, category: 'metric' },
  { id: 'milligram', symbol: 'mg', ratio: 1e-6, category: 'metric' },
  { id: 'microgram', symbol: 'μg', ratio: 1e-9, category: 'metric' },
  { id: 'pound', symbol: 'lb', ratio: 0.45359237, category: 'imperial' },
  { id: 'ounce', symbol: 'oz', ratio: 0.028349523125, category: 'imperial' },
  { id: 'stone', symbol: 'st', ratio: 6.35029318, category: 'imperial' },
  { id: 'long_ton', symbol: 'long ton', ratio: 1016.047, category: 'imperial' },
  { id: 'short_ton', symbol: 'short ton', ratio: 907.18474, category: 'imperial' },
  { id: 'troy_ounce', symbol: 'oz t', ratio: 0.0311034768, category: 'scientific' },
  { id: 'troy_pound', symbol: 'lb t', ratio: 0.3732417216, category: 'scientific' },
  { id: 'carat', symbol: 'ct', ratio: 0.0002, category: 'metric' }
]

// 转换函数
export function convertWeight(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 使用高精度计算，先转换为基准单位（千克）
  const baseValue = Number((value * fromUnit.ratio).toPrecision(15))
  
  // 转换为目标单位
  const result = Number((baseValue / toUnit.ratio).toPrecision(15))
  
  // 只有当结果非常接近0时才返回0
  if (Math.abs(result) < 1e-20) {
    return 0
  }
  
  return result
} 