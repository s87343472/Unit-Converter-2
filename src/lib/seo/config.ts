import type { ConversionType } from '@/lib/conversion/types'

/**
 * SEO配置常量
 */

// 增量静态再生成 (ISR) 的默认刷新时间（单位：秒）
// 1年 = 31536000秒
export const DEFAULT_REVALIDATE_TIME = 31536000 

// 需要优先生成的热门单位转换组合
export const POPULAR_CONVERSIONS: {
  type: ConversionType
  fromUnit: string
  toUnit: string
}[] = [
  // 长度单位热门转换
  { type: 'length', fromUnit: 'meter', toUnit: 'centimeter' },
  { type: 'length', fromUnit: 'meter', toUnit: 'kilometer' },
  { type: 'length', fromUnit: 'meter', toUnit: 'inch' },
  { type: 'length', fromUnit: 'meter', toUnit: 'foot' },
  { type: 'length', fromUnit: 'foot', toUnit: 'meter' },
  { type: 'length', fromUnit: 'inch', toUnit: 'centimeter' },
  { type: 'length', fromUnit: 'kilometer', toUnit: 'mile' },
  
  // 重量单位热门转换
  { type: 'weight', fromUnit: 'kilogram', toUnit: 'pound' },
  { type: 'weight', fromUnit: 'gram', toUnit: 'ounce' },
  { type: 'weight', fromUnit: 'pound', toUnit: 'kilogram' },
  
  // 温度单位热门转换
  { type: 'temperature', fromUnit: 'celsius', toUnit: 'fahrenheit' },
  { type: 'temperature', fromUnit: 'fahrenheit', toUnit: 'celsius' },
  
  // 面积单位热门转换
  { type: 'area', fromUnit: 'square_meter', toUnit: 'square_foot' },
  { type: 'area', fromUnit: 'hectare', toUnit: 'acre' },
  
  // 体积单位热门转换
  { type: 'volume', fromUnit: 'liter', toUnit: 'gallon' },
  { type: 'volume', fromUnit: 'milliliter', toUnit: 'fluid_ounce' },
]

// 每种单位类型对应的单位数量限制（用于控制静态生成规模）
export const UNITS_PER_TYPE_LIMIT: Record<ConversionType, number> = {
  length: 20,     // 生成约 20*19=380 个页面
  weight: 12,     // 生成约 12*11=132 个页面
  temperature: 4, // 生成约 4*3=12 个页面
  area: 10,       // 生成约 10*9=90 个页面
  volume: 12,     // 生成约 12*11=132 个页面
  time: 10,       // 默认限制
  speed: 10,      // 默认限制
  angle: 6,       // 默认限制
  pressure: 8,    // 默认限制
  power: 10,      // 默认限制
  energy: 10,     // 默认限制
  force: 8,       // 默认限制
  density: 8,     // 默认限制
  flow: 8,        // 默认限制
  torque: 6,      // 默认限制
  frequency: 8,   // 默认限制
  data: 10,       // 默认限制
  data_rate: 10,  // 默认限制
  cooking: 8,     // 默认限制
  numeral: 0,     // 暂不生成
}

/**
 * 获取单位类型的显示名称
 * @param type 单位类型
 * @param locale 语言
 * @returns 单位类型的本地化显示名称
 */
export function getTypeDisplayName(type: ConversionType, locale: string): string {
  const typeDisplayNames: Record<ConversionType, Record<string, string>> = {
    length: {
      'en': 'Length',
      'zh-CN': '长度',
      'zh-TW': '長度',
      'ja': '長さ',
    },
    weight: {
      'en': 'Weight',
      'zh-CN': '重量',
      'zh-TW': '重量',
      'ja': '重量',
    },
    temperature: {
      'en': 'Temperature',
      'zh-CN': '温度',
      'zh-TW': '溫度',
      'ja': '温度',
    },
    area: {
      'en': 'Area',
      'zh-CN': '面积',
      'zh-TW': '面積',
      'ja': '面積',
    },
    volume: {
      'en': 'Volume',
      'zh-CN': '体积',
      'zh-TW': '體積',
      'ja': '体積',
    },
    // 可以根据需要添加更多类型
    time: { 'en': 'Time', 'zh-CN': '时间', 'zh-TW': '時間', 'ja': '時間' },
    speed: { 'en': 'Speed', 'zh-CN': '速度', 'zh-TW': '速度', 'ja': '速度' },
    angle: { 'en': 'Angle', 'zh-CN': '角度', 'zh-TW': '角度', 'ja': '角度' },
    pressure: { 'en': 'Pressure', 'zh-CN': '压力', 'zh-TW': '壓力', 'ja': '圧力' },
    power: { 'en': 'Power', 'zh-CN': '功率', 'zh-TW': '功率', 'ja': '電力' },
    energy: { 'en': 'Energy', 'zh-CN': '能量', 'zh-TW': '能量', 'ja': 'エネルギー' },
    force: { 'en': 'Force', 'zh-CN': '力', 'zh-TW': '力', 'ja': '力' },
    density: { 'en': 'Density', 'zh-CN': '密度', 'zh-TW': '密度', 'ja': '密度' },
    flow: { 'en': 'Flow', 'zh-CN': '流量', 'zh-TW': '流量', 'ja': '流量' },
    torque: { 'en': 'Torque', 'zh-CN': '扭矩', 'zh-TW': '扭矩', 'ja': 'トルク' },
    frequency: { 'en': 'Frequency', 'zh-CN': '频率', 'zh-TW': '頻率', 'ja': '周波数' },
    data: { 'en': 'Data', 'zh-CN': '数据', 'zh-TW': '數據', 'ja': 'データ' },
    data_rate: { 'en': 'Data Rate', 'zh-CN': '数据速率', 'zh-TW': '數據速率', 'ja': 'データ速度' },
    cooking: { 'en': 'Cooking', 'zh-CN': '烹饪单位', 'zh-TW': '烹飪單位', 'ja': '調理単位' },
    numeral: { 'en': 'Numeral', 'zh-CN': '进制', 'zh-TW': '進制', 'ja': '数字' },
  }

  return typeDisplayNames[type]?.[locale] || type
} 