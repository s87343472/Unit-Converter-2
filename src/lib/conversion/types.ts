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
  // | 'currency' // 注销货币单位,变化太快
  | 'cooking'
  | 'numeral'

export interface ConversionUnit {
  id: string
  label: string
  symbol: string // 单位符号
  ratio?: number // 相对于基准单位的比率
  toBase?: (value: number) => number // 自定义转换到基准单位的函数
  fromBase?: (value: number) => number | string // 自定义从基准单位转换的函数,支持返回字符串
  category?: 
    | 'metric'      // 公制单位
    | 'imperial'    // 英制单位
    | 'us'          // 美制单位
    | 'chinese'     // 中国传统单位
    | 'japanese'    // 日本传统单位
    | 'korean'      // 韩国传统单位
    | 'scientific'  // 科学单位
    | 'astronomical'// 天文单位
    | 'nautical'    // 航海单位
    | 'medical'     // 医疗单位
    | 'industrial'  // 工业单位
    | 'fiat'        // 法定货币单位
    | 'crypto'      // 加密货币单位
    | 'decimal'     // 十进制数据单位
    | 'binary'      // 二进制数据单位
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
  description?: string
  units: {
    [key: string]: {
      id: string
      label: string
      symbol: string
      base: number
      category?: 'metric' | 'imperial' | 'us' | 'chinese' | 'japanese' | 'korean' | 'scientific' | 'astronomical' | 'nautical' | 'medical' | 'industrial' | 'fiat' | 'crypto' | 'decimal' | 'binary'
    }
  }
  knowledge?: KnowledgeSection
  conversion_tips?: {
    title: string
    items: string[]
  }
}

export interface NumeralConversionResult {
  value: string
  unit: string
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value)
} 