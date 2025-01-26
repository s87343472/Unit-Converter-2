import type { ConversionCategory } from './types'

// 使用千克作为基准单位
const weight: ConversionCategory = {
  id: 'weight',
  baseUnit: 'metric_kilogram',
  units: {
    // 公制重量单位
    metric_kilogram: {
      id: 'metric_kilogram',
      label: '千克 (公制)',
      symbol: 'kg',
      ratio: 1, // 基准单位
    },
    metric_tonne: {
      id: 'metric_tonne',
      label: '公吨 (公制)',
      symbol: 't',
      ratio: 1000, // 1 t = 1000 kg
    },
    metric_gram: {
      id: 'metric_gram',
      label: '克 (公制)',
      symbol: 'g',
      ratio: 0.001, // 1 g = 0.001 kg
    },
    metric_milligram: {
      id: 'metric_milligram',
      label: '毫克 (公制)',
      symbol: 'mg',
      ratio: 0.000001, // 1 mg = 0.000001 kg
    },
    metric_microgram: {
      id: 'metric_microgram',
      label: '微克 (公制)',
      symbol: 'μg',
      ratio: 0.000000001, // 1 μg = 0.000000001 kg
    },

    // Avoirdupois 重量单位
    avoirdupois_pound: {
      id: 'avoirdupois_pound',
      label: '磅 (Avoirdupois)',
      symbol: 'lb',
      ratio: 0.45359237, // 1 lb = 0.45359237 kg（国际标准）
    },
    avoirdupois_ounce: {
      id: 'avoirdupois_ounce',
      label: '盎司 (Avoirdupois)',
      symbol: 'oz',
      ratio: 0.028349523125, // 1 oz = 0.028349523125 kg（1/16 lb）
    },
    avoirdupois_stone: {
      id: 'avoirdupois_stone',
      label: '英石 (Avoirdupois)',
      symbol: 'st',
      ratio: 6.35029318, // 1 st = 6.35029318 kg（14 lb）
    },
    avoirdupois_long_ton: {
      id: 'avoirdupois_long_ton',
      label: '长吨 (Avoirdupois)',
      symbol: 'long tn',
      ratio: 1016.047, // 1 long ton = 1016.047 kg（2240 lb）
    },
    avoirdupois_short_ton: {
      id: 'avoirdupois_short_ton',
      label: '短吨 (Avoirdupois)',
      symbol: 'sh tn',
      ratio: 907.18474, // 1 short ton = 907.18474 kg（2000 lb）
    },

    // 中国传统重量单位
    traditional_jin: {
      id: 'traditional_jin',
      label: '斤 (中国传统)',
      symbol: '斤',
      ratio: 0.5, // 1 斤 = 0.5 kg（现代标准）
    },
    traditional_liang: {
      id: 'traditional_liang',
      label: '两 (中国传统)',
      symbol: '两',
      ratio: 0.05, // 1 两 = 0.05 kg（1/10 斤）
    },
    traditional_qian: {
      id: 'traditional_qian',
      label: '钱 (中国传统)',
      symbol: '钱',
      ratio: 0.005, // 1 钱 = 0.005 kg（1/10 两）
    },

    // 珠宝重量单位
    jewelry_carat: {
      id: 'jewelry_carat',
      label: '克拉 (珠宝)',
      symbol: 'ct',
      ratio: 0.0002, // 1 ct = 0.0002 kg（国际标准）
    },
    jewelry_grain: {
      id: 'jewelry_grain',
      label: '格令 (珠宝)',
      symbol: 'gr',
      ratio: 0.0000647989, // 1 gr = 0.0000647989 kg（国际标准）
    },

    // 药用重量单位
    pharmacy_grain: {
      id: 'pharmacy_grain',
      label: '药用格令 (药用)',
      symbol: 'gr',
      ratio: 0.0000647989, // 1 gr = 0.0000647989 kg（同普通格令）
    },
    pharmacy_dram: {
      id: 'pharmacy_dram',
      label: '药用打兰 (药用)',
      symbol: 'dr',
      ratio: 0.00388793445, // 1 dr = 0.00388793445 kg (1/8 pharmacy_ounce)
    },
    pharmacy_ounce: {
      id: 'pharmacy_ounce',
      label: '药用盎司 (药用)',
      symbol: 'oz',
      ratio: 0.031103476, // 1 pharmacy oz = 0.031103476 kg（480 gr）
    }
  }
} as const

export default weight 