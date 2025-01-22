import { Unit } from './length'

// 使用千克(kg)作为基准单位
export const weightUnits: Unit[] = [
  { id: 'metric_ton', symbol: 't', ratio: 1000 },
  { id: 'kilogram', symbol: 'kg', ratio: 1 },
  { id: 'gram', symbol: 'g', ratio: 0.001 },
  { id: 'milligram', symbol: 'mg', ratio: 1e-6 },
  { id: 'microgram', symbol: 'μg', ratio: 1e-9 },
  { id: 'imperial_ton', symbol: 'long tn', ratio: 1016.047 },
  { id: 'us_ton', symbol: 'short tn', ratio: 907.1847 },
  { id: 'stone', symbol: 'st', ratio: 6.35029 },
  { id: 'pound', symbol: 'lb', ratio: 0.453592 },
  { id: 'ounce', symbol: 'oz', ratio: 0.0283495 },
  { id: 'carat', symbol: 'ct', ratio: 0.0002 }
]

// 转换函数
export function convertWeight(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（千克），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
} 