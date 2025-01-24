import type { ConversionCategory } from './types'

// 使用米作为基准单位
const length: ConversionCategory = {
  id: 'length',
  baseUnit: 'metric_meter',
  units: {
    // 公制长度单位
    metric_meter: {
      id: 'metric_meter',
      label: '米',
      symbol: 'm',
      ratio: 1,
    },
    metric_kilometer: {
      id: 'metric_kilometer',
      label: '千米',
      symbol: 'km',
      ratio: 1000,
    },
    metric_decimeter: {
      id: 'metric_decimeter',
      label: '分米',
      symbol: 'dm',
      ratio: 0.1,
    },
    metric_centimeter: {
      id: 'metric_centimeter',
      label: '厘米',
      symbol: 'cm',
      ratio: 0.01,
    },
    metric_millimeter: {
      id: 'metric_millimeter',
      label: '毫米',
      symbol: 'mm',
      ratio: 0.001,
    },
    metric_micrometer: {
      id: 'metric_micrometer',
      label: '微米',
      symbol: 'μm',
      ratio: 0.000001,
    },
    metric_nanometer: {
      id: 'metric_nanometer',
      label: '纳米',
      symbol: 'nm',
      ratio: 0.000000001,
    },
    metric_picometer: {
      id: 'metric_picometer',
      label: '皮米',
      symbol: 'pm',
      ratio: 0.000000000001,
    },

    // 英制长度单位
    imperial_mile: {
      id: 'imperial_mile',
      label: '英里',
      symbol: 'mi',
      ratio: 1609.344,
    },
    imperial_yard: {
      id: 'imperial_yard',
      label: '码',
      symbol: 'yd',
      ratio: 0.9144,
    },
    imperial_foot: {
      id: 'imperial_foot',
      label: '英尺',
      symbol: 'ft',
      ratio: 0.3048,
    },
    imperial_inch: {
      id: 'imperial_inch',
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
    nautical_fathom: {
      id: 'nautical_fathom',
      label: '英寻',
      symbol: 'ftm',
      ratio: 1.8288,
    },
    nautical_cable: {
      id: 'nautical_cable',
      label: '缆',
      symbol: 'cb',
      ratio: 185.2,
    },

    // 天文单位
    astronomy_light_year: {
      id: 'astronomy_light_year',
      label: '光年',
      symbol: 'ly',
      ratio: 9.461e15,
    },
    astronomy_astronomical_unit: {
      id: 'astronomy_astronomical_unit',
      label: '天文单位',
      symbol: 'AU',
      ratio: 1.496e11,
    },
    astronomy_parsec: {
      id: 'astronomy_parsec',
      label: '秒差距',
      symbol: 'pc',
      ratio: 3.086e16,
    },

    // 中国传统长度单位
    chinese_li: {
      id: 'chinese_li',
      label: '里',
      symbol: '里',
      ratio: 500,
    },
    chinese_zhang: {
      id: 'chinese_zhang',
      label: '丈',
      symbol: '丈',
      ratio: 3.33333,
    },
    chinese_chi: {
      id: 'chinese_chi',
      label: '尺',
      symbol: '尺',
      ratio: 0.33333,
    },
    chinese_cun: {
      id: 'chinese_cun',
      label: '寸',
      symbol: '寸',
      ratio: 0.033333,
    },
    chinese_fen: {
      id: 'chinese_fen',
      label: '分',
      symbol: '分',
      ratio: 0.0033333,
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