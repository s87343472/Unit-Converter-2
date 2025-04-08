import type { ConversionType } from './types'

/**
 * 单位ID映射表，从路径参数到系统单位ID
 */
export const UNIT_ID_MAP: Record<string, Record<string, string>> = {
  length: {
    meter: 'metric_meter',
    kilometer: 'metric_kilometer',
    centimeter: 'metric_centimeter',
    millimeter: 'metric_millimeter',
    inch: 'imperial_inch',
    foot: 'imperial_foot',
    yard: 'imperial_yard',
    mile: 'imperial_mile',
    decimeter: 'metric_decimeter',
    micrometer: 'metric_micrometer',
    nanometer: 'metric_nanometer',
    picometer: 'metric_picometer',
    lightyear: 'astronomical_light_year',
    au: 'astronomical_unit',
    parsec: 'astronomical_parsec',
    lightsecond: 'astronomical_light_second',
    nautical_mile: 'nautical_mile',
    fathom: 'nautical_fathom',
    li: 'chinese_li',
    zhang: 'chinese_zhang',
    chi: 'chinese_chi',
    cun: 'chinese_cun',
    fen: 'chinese_fen',
  },
  weight: {
    kilogram: 'metric_kilogram',
    gram: 'metric_gram',
    milligram: 'metric_milligram',
    pound: 'imperial_pound',
    ounce: 'imperial_ounce',
    ton: 'metric_ton',
    stone: 'imperial_stone',
    jin: 'chinese_jin',
    liang: 'chinese_liang',
    qian: 'chinese_qian',
  },
  area: {
    'square_meter': 'metric_square_meter',
    'square_kilometer': 'metric_square_kilometer',
    'square_centimeter': 'metric_square_centimeter',
    'square_millimeter': 'metric_square_millimeter',
    'square_foot': 'imperial_square_foot',
    'square_inch': 'imperial_square_inch',
    'square_yard': 'imperial_square_yard',
    'square_mile': 'imperial_square_mile',
    'acre': 'imperial_acre',
    'hectare': 'metric_hectare',
    'mu': 'chinese_mu',
  },
  volume: {
    'cubic_meter': 'metric_cubic_meter',
    'liter': 'metric_liter',
    'milliliter': 'metric_milliliter',
    'cubic_centimeter': 'metric_cubic_centimeter',
    'cubic_inch': 'imperial_cubic_inch',
    'cubic_foot': 'imperial_cubic_foot',
    'gallon': 'imperial_gallon',
    'quart': 'imperial_quart',
    'pint': 'imperial_pint',
    'fluid_ounce': 'imperial_fluid_ounce',
  },
  temperature: {
    'celsius': 'metric_celsius',
    'fahrenheit': 'imperial_fahrenheit',
    'kelvin': 'metric_kelvin',
    'rankine': 'imperial_rankine',
  },
  // 可以根据需要添加更多单位类型
}

/**
 * 反向映射，从系统单位ID到URL友好名称
 */
export const UNIT_URL_MAP: Record<string, Record<string, string>> = {}

// 自动生成反向映射
Object.entries(UNIT_ID_MAP).forEach(([type, units]) => {
  UNIT_URL_MAP[type] = {}
  Object.entries(units).forEach(([urlName, unitId]) => {
    UNIT_URL_MAP[type][unitId] = urlName
  })
})

// 调试函数，打印URL映射信息
export function debugUnitMapping(type: string, urlName: string): void {
  console.log('调试单位映射:')
  console.log('- 类型:', type)
  console.log('- URL名称:', urlName)
  console.log('- 类型是否存在:', !!UNIT_ID_MAP[type])
  
  if (UNIT_ID_MAP[type]) {
    console.log('- 类型下可用单位:', Object.keys(UNIT_ID_MAP[type]))
    console.log('- 请求的单位ID:', UNIT_ID_MAP[type][urlName])
  }
}

/**
 * 获取单位的URL友好名称
 * @param type 单位类型
 * @param unitId 单位ID
 * @returns URL友好的单位名称
 */
export function getUnitUrlName(type: ConversionType, unitId: string): string {
  return UNIT_URL_MAP[type]?.[unitId] || unitId
}

/**
 * 获取单位ID
 * @param type 单位类型
 * @param urlName URL友好的单位名称
 * @returns 单位ID
 */
export function getUnitId(type: ConversionType, urlName: string): string {
  debugUnitMapping(type, urlName)
  return UNIT_ID_MAP[type]?.[urlName] || urlName
} 