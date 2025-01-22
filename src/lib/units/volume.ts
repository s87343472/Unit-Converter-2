import { Unit } from './length'

// 使用立方米(m³)作为基准单位
export const volumeUnits: Unit[] = [
  { id: 'cubic_kilometer', symbol: 'km³', ratio: 1e9 },
  { id: 'cubic_meter', symbol: 'm³', ratio: 1 },
  { id: 'cubic_decimeter', symbol: 'dm³', ratio: 0.001 },
  { id: 'cubic_centimeter', symbol: 'cm³', ratio: 1e-6 },
  { id: 'cubic_millimeter', symbol: 'mm³', ratio: 1e-9 },
  { id: 'liter', symbol: 'L', ratio: 0.001 },
  { id: 'milliliter', symbol: 'mL', ratio: 1e-6 },
  { id: 'gallon', symbol: 'gal', ratio: 0.00378541 },
  { id: 'quart', symbol: 'qt', ratio: 0.000946353 },
  { id: 'pint', symbol: 'pt', ratio: 0.000473176 },
  { id: 'cup', symbol: 'cup', ratio: 0.000236588 },
  { id: 'fluid_ounce', symbol: 'fl oz', ratio: 2.95735e-5 },
  { id: 'tablespoon', symbol: 'tbsp', ratio: 1.47868e-5 },
  { id: 'teaspoon', symbol: 'tsp', ratio: 4.92892e-6 },
  { id: 'cubic_yard', symbol: 'yd³', ratio: 0.764555 },
  { id: 'cubic_foot', symbol: 'ft³', ratio: 0.0283168 },
  { id: 'cubic_inch', symbol: 'in³', ratio: 1.63871e-5 }
]

// 转换函数
export function convertVolume(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（立方米），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
} 