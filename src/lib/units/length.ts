export interface Unit {
  id: string
  symbol: string
  ratio: number  // 相对于基准单位的比率
}

// 使用米(m)作为基准单位
export const lengthUnits: Unit[] = [
  { id: 'light_year', symbol: 'ly', ratio: 9.461e15 },
  { id: 'astronomical_unit', symbol: 'AU', ratio: 1.496e11 },
  { id: 'kilometer', symbol: 'km', ratio: 1000 },
  { id: 'meter', symbol: 'm', ratio: 1 },
  { id: 'decimeter', symbol: 'dm', ratio: 0.1 },
  { id: 'centimeter', symbol: 'cm', ratio: 0.01 },
  { id: 'millimeter', symbol: 'mm', ratio: 0.001 },
  { id: 'micrometer', symbol: 'μm', ratio: 1e-6 },
  { id: 'nanometer', symbol: 'nm', ratio: 1e-9 },
  { id: 'picometer', symbol: 'pm', ratio: 1e-12 },
  { id: 'mile', symbol: 'mi', ratio: 1609.344 },
  { id: 'yard', symbol: 'yd', ratio: 0.9144 },
  { id: 'foot', symbol: 'ft', ratio: 0.3048 },
  { id: 'inch', symbol: 'in', ratio: 0.0254 }
]

// 转换函数
export function convertLength(value: number, fromUnit: Unit, toUnit: Unit): number {
  // 先转换为基准单位（米），再转换为目标单位
  return (value * fromUnit.ratio) / toUnit.ratio
} 