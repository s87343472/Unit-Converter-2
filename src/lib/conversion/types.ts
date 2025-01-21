export type ConversionType = 
  | 'length' 
  | 'weight' 
  | 'temperature' 
  | 'area' 
  | 'volume'
  | 'time'
  | 'speed'
  | 'angle'
  | 'pressure'
  | 'power'
  | 'energy'
  | 'force'
  | 'density'
  | 'flow'
  | 'frequency'
  | 'data'
  | 'data_rate'
  | 'currency'
  | 'cooking'
  | 'numeral'

export interface ConversionUnit {
  id: string
  label: string
  symbol: string // 单位符号
  ratio?: number // 相对于基准单位的比率
  toBase?: (value: number) => number // 自定义转换到基准单位的函数
  fromBase?: (value: number) => number | string // 自定义从基准单位转换的函数,支持返回字符串
}

export interface ConversionCategory {
  id: ConversionType
  baseUnit: string // 基准单位
  units: Record<string, ConversionUnit>
}

export interface ConversionResult {
  value: number | string
  unit: string
  error?: string
} 