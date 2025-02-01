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
  | 'torque'
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
  category?: 'metric' | 'imperial' | 'us' | 'scientific' | 'traditional' | 'industrial' // 单位分类
}

export interface KnowledgeSection {
  title: string
  items: string[]
}

export interface ConversionCategory {
  id: string
  baseUnit: string
  description?: string
  units: {
    [key: string]: ConversionUnit
  }
  knowledge?: KnowledgeSection
  conversion_tips?: KnowledgeSection
}

export interface ConversionResult {
  value: number
  unit: string
}

export interface NumeralConversionCategory {
  id: string
  baseUnit: string
  units: {
    [key: string]: {
      id: string
      label: string
      symbol: string
      base: number
    }
  }
}

export interface NumeralConversionResult {
  value: string
  unit: string
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value)
} 