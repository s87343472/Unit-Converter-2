import type { ConversionCategory } from './types'

// 使用米作为基准单位
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'meter',
  units: {
    // 基本单位
    meter: {
      id: 'meter',
      label: '米',
      symbol: 'm',
      ratio: 1,
    },

    // 公制长度单位
    kilometer: {
      id: 'kilometer',
      label: '千米',
      symbol: 'km',
      ratio: 1000,
    },
    decimeter: {
      id: 'decimeter',
      label: '分米',
      symbol: 'dm',
      ratio: 0.1,
    },
    centimeter: {
      id: 'centimeter',
      label: '厘米',
      symbol: 'cm',
      ratio: 0.01,
    },
    millimeter: {
      id: 'millimeter',
      label: '毫米',
      symbol: 'mm',
      ratio: 0.001,
    },
    micrometer: {
      id: 'micrometer',
      label: '微米',
      symbol: 'μm',
      ratio: 0.000001,
    },
    nanometer: {
      id: 'nanometer',
      label: '纳米',
      symbol: 'nm',
      ratio: 0.000000001,
    },

    // 英制长度单位
    mile: {
      id: 'mile',
      label: '英里',
      symbol: 'mi',
      ratio: 1609.344,
    },
    yard: {
      id: 'yard',
      label: '码',
      symbol: 'yd',
      ratio: 0.9144,
    },
    foot: {
      id: 'foot',
      label: '英尺',
      symbol: 'ft',
      ratio: 0.3048,
    },
    inch: {
      id: 'inch',
      label: '英寸',
      symbol: 'in',
      ratio: 0.0254,
    },

    // 航海单位
    nautical_mile: {
      id: 'nautical_mile',
      label: '海里',
      symbol: 'nmi',
      ratio: 1852,
    },
    fathom: {
      id: 'fathom',
      label: '英寻',
      symbol: 'ftm',
      ratio: 1.8288,
    },
    cable: {
      id: 'cable',
      label: '缆',
      symbol: 'cb',
      ratio: 185.2,
    },

    // 天文单位
    light_year: {
      id: 'light_year',
      label: '光年',
      symbol: 'ly',
      ratio: 9.461e15,
    },
    astronomical_unit: {
      id: 'astronomical_unit',
      label: '天文单位',
      symbol: 'AU',
      ratio: 1.496e11,
    },
    parsec: {
      id: 'parsec',
      label: '秒差距',
      symbol: 'pc',
      ratio: 3.086e16,
    },

    // 中国传统长度单位
    li: {
      id: 'li',
      label: '里',
      symbol: '里',
      ratio: 500,
    },
    zhang: {
      id: 'zhang',
      label: '丈',
      symbol: '丈',
      ratio: 3.33333,
    },
    chi: {
      id: 'chi',
      label: '尺',
      symbol: '尺',
      ratio: 0.33333,
    },
    cun: {
      id: 'cun',
      label: '寸',
      symbol: '寸',
      ratio: 0.033333,
    },

    // 测量专用单位
    survey_chain: {
      id: 'survey_chain',
      label: '测链',
      symbol: 'ch',
      ratio: 20.1168,
    },
    survey_rod: {
      id: 'survey_rod',
      label: '杆',
      symbol: 'rd',
      ratio: 5.0292,
    },
    survey_link: {
      id: 'survey_link',
      label: '链节',
      symbol: 'lk',
      ratio: 0.201168,
    },
  },
} as const

export default length 