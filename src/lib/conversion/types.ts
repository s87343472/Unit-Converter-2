export type ConversionType = 'length' | 'weight' | 'temperature' | 'area' | 'volume'

export interface ConversionUnit {
  id: string
  label: string
  symbol: string // 单位符号
  ratio?: number // 相对于基准单位的比率
  toBase?: (value: number) => number // 自定义转换到基准单位的函数
  fromBase?: (value: number) => number // 自定义从基准单位转换的函数
}

export interface ConversionCategory {
  id: ConversionType
  baseUnit: string // 基准单位
  units: Record<string, ConversionUnit>
}

export interface ConversionResult {
  value: number
  unit: string
  error?: string
} 