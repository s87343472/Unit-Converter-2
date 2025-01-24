import { Unit } from './length'

// 使用立方米(m³)作为基准单位
export const volumeUnits: Unit[] = [
  { id: 'cubic_kilometer', symbol: 'km³', ratio: 1e9 }, // 1 km³ = 1,000,000,000 m³
  { id: 'cubic_meter', symbol: 'm³', ratio: 1 }, // 基准单位
  { id: 'cubic_decimeter', symbol: 'dm³', ratio: 0.001 }, // 1 dm³ = 0.001 m³ = 1 L
  { id: 'cubic_centimeter', symbol: 'cm³', ratio: 1e-6 }, // 1 cm³ = 0.000001 m³ = 1 mL
  { id: 'cubic_millimeter', symbol: 'mm³', ratio: 1e-9 }, // 1 mm³ = 0.000000001 m³
  { id: 'liter', symbol: 'L', ratio: 0.001 }, // 1 L = 0.001 m³ = 1 dm³
  { id: 'milliliter', symbol: 'mL', ratio: 1e-6 }, // 1 mL = 0.000001 m³ = 1 cm³
  { id: 'gallon_us', symbol: 'gal US', ratio: 0.003785411784 }, // 1 US gal = 3.785411784 L
  { id: 'gallon_uk', symbol: 'gal UK', ratio: 0.00454609 }, // 1 UK gal = 4.54609 L
  { id: 'quart_us', symbol: 'qt US', ratio: 0.000946353 }, // 1 US qt = 0.946353 L
  { id: 'quart_uk', symbol: 'qt UK', ratio: 0.001136522 }, // 1 UK qt = 1.136522 L
  { id: 'pint_us', symbol: 'pt US', ratio: 0.000473176 }, // 1 US pt = 0.473176 L
  { id: 'pint_uk', symbol: 'pt UK', ratio: 0.000568261 }, // 1 UK pt = 0.568261 L
  { id: 'fluid_ounce_us', symbol: 'fl oz US', ratio: 2.95735e-5 }, // 1 US fl oz = 29.5735 mL
  { id: 'tablespoon', symbol: 'tbsp', ratio: 1.47868e-5 }, // 1 tbsp = 14.7868 mL
  { id: 'teaspoon', symbol: 'tsp', ratio: 4.92892e-6 }, // 1 tsp = 4.92892 mL
  { id: 'cup', symbol: 'cup', ratio: 0.000236588 }, // 1 cup = 236.588 mL
  { id: 'cubic_yard', symbol: 'yd³', ratio: 0.764555 }, // 1 yd³ = 0.764555 m³
  { id: 'cubic_foot', symbol: 'ft³', ratio: 0.0283168 }, // 1 ft³ = 0.0283168 m³
  { id: 'cubic_inch', symbol: 'in³', ratio: 1.63871e-5 } // 1 in³ = 16.3871 mL
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