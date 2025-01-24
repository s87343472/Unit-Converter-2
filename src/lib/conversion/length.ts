import type { ConversionCategory } from './types'

// 使用米作为基准单位
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'meter',
  units: {
    // 公制单位
    meter: {
      id: 'meter',
      label: '米 (公制)',
      symbol: 'm',
      ratio: 1,
    },
    kilometer: {
      id: 'kilometer',
      label: '千米 (公制)',
      symbol: 'km',
      ratio: 1000,
    },
    decimeter: {
      id: 'decimeter',
      label: '分米 (公制)',
      symbol: 'dm',
      ratio: 0.1,
    },
    centimeter: {
      id: 'centimeter',
      label: '厘米 (公制)',
      symbol: 'cm',
      ratio: 0.01,
    },
    millimeter: {
      id: 'millimeter',
      label: '毫米 (公制)',
      symbol: 'mm',
      ratio: 0.001,
    },
    micrometer: {
      id: 'micrometer',
      label: '微米 (公制)',
      symbol: 'μm',
      ratio: 1e-6,
    },
    nanometer: {
      id: 'nanometer',
      label: '纳米 (公制)',
      symbol: 'nm',
      ratio: 1e-9,
    },
    picometer: {
      id: 'picometer',
      label: '皮米 (公制)',
      symbol: 'pm',
      ratio: 1e-12,
    },
    
    // 英制单位
    mile: {
      id: 'mile',
      label: '英里 (英制)',
      symbol: 'mi',
      ratio: 1609.344,
    },
    yard: {
      id: 'yard',
      label: '码 (英制)',
      symbol: 'yd',
      ratio: 0.9144,
    },
    foot: {
      id: 'foot',
      label: '英尺 (英制)',
      symbol: 'ft',
      ratio: 0.3048,
    },
    inch: {
      id: 'inch',
      label: '英寸 (英制)',
      symbol: 'in',
      ratio: 0.0254,
    },
    
    // 天文单位
    light_year: {
      id: 'light_year',
      label: '光年 (天文)',
      symbol: 'ly',
      ratio: 9.461e15,
    },
    astronomical_unit: {
      id: 'astronomical_unit',
      label: '天文单位 (天文)',
      symbol: 'AU',
      ratio: 1.496e11,
    },
    parsec: {
      id: 'parsec',
      label: '秒差距 (天文)',
      symbol: 'pc',
      ratio: 3.086e16,
    },
    light_second: {
      id: 'light_second',
      label: '光秒 (天文)',
      symbol: 'ls',
      ratio: 299792458,
    },
    
    // 航海单位
    nautical_mile: {
      id: 'nautical_mile',
      label: '海里 (航海)',
      symbol: 'nmi',
      ratio: 1852,
    },
    fathom: {
      id: 'fathom',
      label: '英寻 (航海)',
      symbol: 'ftm',
      ratio: 1.8288,
    },
  },
} as const

export default length 