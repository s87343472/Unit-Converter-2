import type { ConversionCategory } from './types'

// 使用米作为基准单位
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'metric_meter',
  units: {
    // 基本单位
    metric_meter: {
      id: 'metric_meter',
      label: '米',
      symbol: 'm',
      ratio: 1,
      category: 'metric'
    },

    // 公制长度单位
    metric_kilometer: {
      id: 'metric_kilometer',
      label: '千米',
      symbol: 'km',
      ratio: 1000,
      category: 'metric'
    },
    metric_decimeter: {
      id: 'metric_decimeter',
      label: '分米',
      symbol: 'dm',
      ratio: 0.1,
      category: 'metric'
    },
    metric_centimeter: {
      id: 'metric_centimeter',
      label: '厘米',
      symbol: 'cm',
      ratio: 0.01,
      category: 'metric'
    },
    metric_millimeter: {
      id: 'metric_millimeter',
      label: '毫米',
      symbol: 'mm',
      ratio: 0.001,
      category: 'metric'
    },
    metric_micrometer: {
      id: 'metric_micrometer',
      label: '微米',
      symbol: 'μm',
      ratio: 0.000001,
      category: 'metric'
    },
    metric_nanometer: {
      id: 'metric_nanometer',
      label: '纳米',
      symbol: 'nm',
      ratio: 0.000000001,
      category: 'metric'
    },
    metric_picometer: {
      id: 'metric_picometer',
      label: '皮米',
      symbol: 'pm',
      ratio: 1e-12,
      category: 'metric'
    },

    // 英制长度单位
    imperial_mile: {
      id: 'imperial_mile',
      label: '英里',
      symbol: 'mi',
      ratio: 1609.344,
      category: 'imperial'
    },
    imperial_yard: {
      id: 'imperial_yard',
      label: '码',
      symbol: 'yd',
      ratio: 0.9144,
      category: 'imperial'
    },
    imperial_foot: {
      id: 'imperial_foot',
      label: '英尺',
      symbol: 'ft',
      ratio: 0.3048,
      category: 'imperial'
    },
    imperial_inch: {
      id: 'imperial_inch',
      label: '英寸',
      symbol: 'in',
      ratio: 0.0254,
      category: 'imperial'
    },

    // 航海单位
    nautical_mile: {
      id: 'nautical_mile',
      label: '海里',
      symbol: 'nmi',
      ratio: 1852,
      category: 'scientific'
    },
    nautical_fathom: {
      id: 'nautical_fathom',
      label: '英寻',
      symbol: 'ftm',
      ratio: 1.8288,
      category: 'scientific'
    },
    nautical_cable: {
      id: 'nautical_cable',
      label: '缆',
      symbol: 'cb',
      ratio: 185.2,
      category: 'scientific'
    },

    // 天文单位
    astronomical_light_year: {
      id: 'astronomical_light_year',
      label: '光年',
      symbol: 'ly',
      ratio: 9.461e15,
      category: 'scientific'
    },
    astronomical_unit: {
      id: 'astronomical_unit',
      label: '天文单位',
      symbol: 'AU',
      ratio: 1.496e11,
      category: 'scientific'
    },
    astronomical_parsec: {
      id: 'astronomical_parsec',
      label: '秒差距',
      symbol: 'pc',
      ratio: 3.086e16,
      category: 'scientific'
    },
    astronomical_light_second: {
      id: 'astronomical_light_second',
      label: '光秒',
      symbol: 'ls',
      ratio: 299792458, // 光速 * 1秒
      category: 'scientific'
    },

    // 中国传统长度单位
    traditional_li: {
      id: 'traditional_li',
      label: '里',
      symbol: '里',
      ratio: 500,
      category: 'traditional'
    },
    traditional_zhang: {
      id: 'traditional_zhang',
      label: '丈',
      symbol: '丈',
      ratio: 3.33333,
      category: 'traditional'
    },
    traditional_chi: {
      id: 'traditional_chi',
      label: '尺',
      symbol: '尺',
      ratio: 0.33333,
      category: 'traditional'
    },
    traditional_cun: {
      id: 'traditional_cun',
      label: '寸',
      symbol: '寸',
      ratio: 0.033333,
      category: 'traditional'
    },

    // 测量专用单位
    survey_chain: {
      id: 'survey_chain',
      label: '测链',
      symbol: 'ch',
      ratio: 20.1168,
      category: 'scientific'
    },
    survey_rod: {
      id: 'survey_rod',
      label: '杆',
      symbol: 'rd',
      ratio: 5.0292,
      category: 'scientific'
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