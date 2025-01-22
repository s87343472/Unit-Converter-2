import { Unit } from './length'

// 使用平方米(m²)作为基准单位
export const areaUnits: Unit[] = [
  { id: 'square_kilometer', symbol: 'km²', ratio: 1e6 },
  { id: 'hectare', symbol: 'ha', ratio: 1e4 },
  { id: 'square_meter', symbol: 'm²', ratio: 1 },
  { id: 'square_decimeter', symbol: 'dm²', ratio: 0.01 },
  { id: 'square_centimeter', symbol: 'cm²', ratio: 0.0001 },
  { id: 'square_millimeter', symbol: 'mm²', ratio: 1e-6 },
  { id: 'square_mile', symbol: 'sq mi', ratio: 2.59e6 },
  { id: 'acre', symbol: 'ac', ratio: 4046.86 },
  { id: 'square_yard', symbol: 'sq yd', ratio: 0.836127 },
  { id: 'square_foot', symbol: 'sq ft', ratio: 0.092903 },
  { id: 'square_inch', symbol: 'sq in', ratio: 0.00064516 }
]

// 转换函数
export function convertArea(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（平方米），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
} 