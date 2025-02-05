import { Unit } from './types'

// 使用立方米(m³)作为基准单位
export const volumeUnits: Unit[] = [
  { id: 'cubic_kilometer', symbol: 'km³', ratio: 1e9, category: 'metric' }, // 1 km³ = 1,000,000,000 m³
  { id: 'cubic_meter', symbol: 'm³', ratio: 1, category: 'metric' }, // 基准单位
  { id: 'cubic_decimeter', symbol: 'dm³', ratio: 0.001, category: 'metric' }, // 1 dm³ = 0.001 m³ = 1 L
  { id: 'cubic_centimeter', symbol: 'cm³', ratio: 1e-6, category: 'metric' }, // 1 cm³ = 0.000001 m³ = 1 mL
  { id: 'cubic_millimeter', symbol: 'mm³', ratio: 1e-9, category: 'metric' }, // 1 mm³ = 0.000000001 m³
  { id: 'liter', symbol: 'L', ratio: 0.001, category: 'metric' }, // 1 L = 0.001 m³
  { id: 'milliliter', symbol: 'mL', ratio: 1e-6, category: 'metric' }, // 1 mL = 0.000001 m³
  { id: 'cubic_foot', symbol: 'ft³', ratio: 0.028316846592, category: 'imperial' }, // 1 ft³ ≈ 0.028317 m³
  { id: 'cubic_inch', symbol: 'in³', ratio: 0.000016387064, category: 'imperial' }, // 1 in³ ≈ 0.000016387 m³
  { id: 'gallon', symbol: 'gal', ratio: 0.003785411784, category: 'us' }, // 1 US gal ≈ 0.003785 m³
  { id: 'quart', symbol: 'qt', ratio: 0.000946352946, category: 'us' }, // 1 US qt ≈ 0.000946 m³
  { id: 'pint', symbol: 'pt', ratio: 0.000473176473, category: 'us' }, // 1 US pt ≈ 0.000473 m³
  { id: 'cup', symbol: 'cup', ratio: 0.0002365882365, category: 'us' }, // 1 US cup ≈ 0.000237 m³
  { id: 'fluid_ounce', symbol: 'fl oz', ratio: 0.0000295735295625, category: 'us' }, // 1 US fl oz ≈ 0.0000296 m³
  { id: 'tablespoon', symbol: 'tbsp', ratio: 0.0000147867647813, category: 'us' }, // 1 US tbsp ≈ 0.0000148 m³
  { id: 'teaspoon', symbol: 'tsp', ratio: 0.00000492892159375, category: 'us' } // 1 US tsp ≈ 0.00000493 m³
]

// 转换函数
export function convertVolume(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 使用高精度计算，先转换为基准单位（立方米）
  const baseValue = Number((value * fromUnit.ratio).toPrecision(15))
  
  // 转换为目标单位
  const result = Number((baseValue / toUnit.ratio).toPrecision(15))
  
  // 只有当结果非常接近0时才返回0
  if (Math.abs(result) < 1e-20) {
    return 0
  }
  
  return result
} 