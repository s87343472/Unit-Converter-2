export interface Unit {
  id: string
  symbol: string
  ratio: number  // 相对于基准单位的比率
  category: 'metric' | 'imperial' | 'us' | 'scientific' | 'traditional'  // 添加分类属性
}

// 使用米(m)作为基准单位
export const lengthUnits: Unit[] = [
  // 科学单位
  { id: 'scientific_light_year', symbol: 'ly', ratio: 9.461e15, category: 'scientific' },
  { id: 'scientific_astronomical_unit', symbol: 'AU', ratio: 1.496e11, category: 'scientific' },
  { id: 'scientific_parsec', symbol: 'pc', ratio: 3.086e16, category: 'scientific' },
  
  // 公制单位
  { id: 'metric_kilometer', symbol: 'km', ratio: 1000, category: 'metric' },
  { id: 'metric_meter', symbol: 'm', ratio: 1, category: 'metric' },
  { id: 'metric_decimeter', symbol: 'dm', ratio: 0.1, category: 'metric' },
  { id: 'metric_centimeter', symbol: 'cm', ratio: 0.01, category: 'metric' },
  { id: 'metric_millimeter', symbol: 'mm', ratio: 0.001, category: 'metric' },
  { id: 'metric_micrometer', symbol: 'μm', ratio: 1e-6, category: 'metric' },
  { id: 'metric_nanometer', symbol: 'nm', ratio: 1e-9, category: 'metric' },
  { id: 'metric_picometer', symbol: 'pm', ratio: 1e-12, category: 'metric' },
  
  // 英制单位
  { id: 'imperial_mile', symbol: 'mi', ratio: 1609.344, category: 'imperial' },
  { id: 'imperial_yard', symbol: 'yd', ratio: 0.9144, category: 'imperial' },
  { id: 'imperial_foot', symbol: 'ft', ratio: 0.3048, category: 'imperial' },
  { id: 'imperial_inch', symbol: 'in', ratio: 0.0254, category: 'imperial' },
  
  // 航海单位
  { id: 'nautical_mile', symbol: 'nmi', ratio: 1852, category: 'scientific' },
  { id: 'nautical_fathom', symbol: 'ftm', ratio: 1.8288, category: 'scientific' }
]

// 转换函数
export function convertLength(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 使用高精度计算，先转换为基准单位（米）
  const baseValue = Number((value * fromUnit.ratio).toPrecision(15))
  
  // 转换为目标单位
  const result = Number((baseValue / toUnit.ratio).toPrecision(15))
  
  // 只有当结果非常接近0时才返回0
  if (Math.abs(result) < 1e-20) {
    return 0
  }
  
  return result
} 