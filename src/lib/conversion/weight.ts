import type { ConversionCategory } from './types'

// 使用千克作为基准单位
const weight: ConversionCategory = {
  id: 'weight',
  baseUnit: 'metric_kilogram',
  units: {
    // 公制单位
    metric_kilogram: {
      id: 'metric_kilogram',
      label: '千克',
      symbol: 'kg',
      ratio: 1,
    },
    metric_gram: {
      id: 'metric_gram',
      label: '克',
      symbol: 'g',
      ratio: 0.001,
    },
    metric_milligram: {
      id: 'metric_milligram',
      label: '毫克',
      symbol: 'mg',
      ratio: 0.000001,
    },
    metric_microgram: {
      id: 'metric_microgram',
      label: '微克',
      symbol: 'μg',
      ratio: 0.000000001,
    },
    metric_tonne: {
      id: 'metric_tonne',
      label: '公吨',
      symbol: 't',
      ratio: 1000,
    },
    // 英制单位
    imperial_pound: {
      id: 'imperial_pound',
      label: '磅',
      symbol: 'lb',
      ratio: 0.45359237,
    },
    imperial_ounce: {
      id: 'imperial_ounce',
      label: '盎司',
      symbol: 'oz',
      ratio: 0.028349523125,
    },
    imperial_stone: {
      id: 'imperial_stone',
      label: '英石',
      symbol: 'st',
      ratio: 6.35029318,
    },
    imperial_ton: {
      id: 'imperial_ton',
      label: '英吨',
      symbol: 'ton',
      ratio: 1016.047,
    },
    // 中国传统单位
    chinese_dan: {
      id: 'chinese_dan',
      label: '担',
      symbol: '担',
      ratio: 50,
    },
    chinese_jin: {
      id: 'chinese_jin',
      label: '斤',
      symbol: '斤',
      ratio: 0.5,
    },
    chinese_liang: {
      id: 'chinese_liang',
      label: '两',
      symbol: '两',
      ratio: 0.05,
    },
    chinese_qian: {
      id: 'chinese_qian',
      label: '钱',
      symbol: '钱',
      ratio: 0.005,
    },
    // 珠宝重量单位
    jewelry_carat: {
      id: 'jewelry_carat',
      label: '克拉',
      symbol: 'ct',
      ratio: 0.0002,
    },
    jewelry_grain: {
      id: 'jewelry_grain',
      label: '格令',
      symbol: 'gr',
      ratio: 0.0000647989,
    },
    // 药用重量单位
    pharmacy_grain: {
      id: 'pharmacy_grain',
      label: '药用格令',
      symbol: 'gr',
      ratio: 0.0000647989,
    },
    pharmacy_dram: {
      id: 'pharmacy_dram',
      label: '药用打兰',
      symbol: 'dr',
      ratio: 0.0017718451953125,
    },
    pharmacy_ounce: {
      id: 'pharmacy_ounce',
      label: '药用盎司',
      symbol: 'oz',
      ratio: 0.028349523125,
    },
    // 食品工业单位
    food_pound: {
      id: 'food_pound',
      label: '食品磅',
      symbol: 'lb',
      ratio: 0.45359237,
    },
    food_ounce: {
      id: 'food_ounce',
      label: '食品盎司',
      symbol: 'oz',
      ratio: 0.028349523125,
    },
  },
}

export default weight 