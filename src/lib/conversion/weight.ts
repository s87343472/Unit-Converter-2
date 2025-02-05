import type { ConversionCategory } from './types'

// 使用千克作为基准单位
const weight: ConversionCategory = {
  id: 'weight',
  baseUnit: 'metric_kilogram',
  units: {
    // 基本单位
    metric_kilogram: {
      id: 'metric_kilogram',
      label: '千克',
      symbol: 'kg',
      ratio: 1,
      category: 'metric'
    },
    metric_tonne: {
      id: 'metric_tonne',
      label: '公吨',
      symbol: 't',
      ratio: 1000,
      category: 'metric'
    },
    metric_gram: {
      id: 'metric_gram',
      label: '克',
      symbol: 'g',
      ratio: 0.001,
      category: 'metric'
    },
    metric_milligram: {
      id: 'metric_milligram',
      label: '毫克',
      symbol: 'mg',
      ratio: 0.000001,
      category: 'metric'
    },
    metric_microgram: {
      id: 'metric_microgram',
      label: '微克',
      symbol: 'μg',
      ratio: 0.000000001,
      category: 'metric'
    },

    // 英制重量单位
    imperial_pound: {
      id: 'imperial_pound',
      label: '磅',
      symbol: 'lb',
      ratio: 0.45359237,
      category: 'imperial'
    },
    imperial_ounce: {
      id: 'imperial_ounce',
      label: '盎司',
      symbol: 'oz',
      ratio: 0.028349523125,
      category: 'imperial'
    },
    imperial_stone: {
      id: 'imperial_stone',
      label: '英石',
      symbol: 'st',
      ratio: 6.35029318,
      category: 'imperial'
    },
    imperial_long_ton: {
      id: 'imperial_long_ton',
      label: '长吨',
      symbol: 'long ton',
      ratio: 1016.047,
      category: 'imperial'
    },
    imperial_short_ton: {
      id: 'imperial_short_ton',
      label: '短吨',
      symbol: 'short ton',
      ratio: 907.18474,
      category: 'imperial'
    },

    // 贵金属重量单位
    troy_ounce: {
      id: 'troy_ounce',
      label: '金衡盎司',
      symbol: 'oz t',
      ratio: 0.0311034768,
      category: 'scientific'
    },
    troy_pound: {
      id: 'troy_pound',
      label: '金衡磅',
      symbol: 'lb t',
      ratio: 0.3732417216,
      category: 'scientific'
    },
    metric_carat: {
      id: 'metric_carat',
      label: '克拉',
      symbol: 'ct',
      ratio: 0.0002,
      category: 'metric'
    },

    // 中国传统重量单位
    traditional_dan: {
      id: 'traditional_dan',
      label: '担',
      symbol: '担',
      ratio: 50,
      category: 'chinese'
    },
    traditional_jin: {
      id: 'traditional_jin',
      label: '斤',
      symbol: '斤',
      ratio: 0.5,
      category: 'chinese'
    },
    traditional_liang: {
      id: 'traditional_liang',
      label: '两',
      symbol: '两',
      ratio: 0.05,
      category: 'chinese'
    },
    traditional_qian: {
      id: 'traditional_qian',
      label: '钱',
      symbol: '钱',
      ratio: 0.005,
      category: 'chinese'
    },

    // 珠宝重量单位
    jewelry_carat: {
      id: 'jewelry_carat',
      label: '克拉',
      symbol: 'ct',
      ratio: 0.0002, // 1 ct = 0.0002 kg（国际标准）
    },
    jewelry_grain: {
      id: 'jewelry_grain',
      label: '格令',
      symbol: 'gr',
      ratio: 0.0000647989, // 1 gr = 0.0000647989 kg（国际标准）
    },

    // 药用重量单位
    medical_grain: {
      id: 'medical_grain',
      label: '药用格令',
      symbol: 'gr',
      ratio: 0.00006479891,
    },
    medical_dram: {
      id: 'medical_dram',
      label: '药用打兰',
      symbol: 'dr',
      ratio: 0.0017718451953125,
    },
    medical_ounce: {
      id: 'medical_ounce',
      label: '药用盎司',
      symbol: 'oz',
      ratio: 0.031103476, // 1 pharmacy oz = 0.031103476 kg（480 gr）
    }
  }
} as const

export default weight 