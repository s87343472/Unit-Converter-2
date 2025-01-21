import type { ConversionCategory } from './types'

// 使用千克作为基准单位
const weight: ConversionCategory = {
  id: 'weight',
  baseUnit: 'kilogram',
  units: {
    kilogram: {
      id: 'kilogram',
      label: '千克',
      symbol: 'kg',
      ratio: 1,
    },
    gram: {
      id: 'gram',
      label: '克',
      symbol: 'g',
      ratio: 0.001,
    },
    milligram: {
      id: 'milligram',
      label: '毫克',
      symbol: 'mg',
      ratio: 0.000001,
    },
    metric_ton: {
      id: 'metric_ton',
      label: '公吨',
      symbol: 't',
      ratio: 1000,
    },
    long_ton: {
      id: 'long_ton',
      label: '英吨',
      symbol: 'long tn',
      ratio: 1016.047, // 1 英吨 = 1016.047 kg
    },
    short_ton: {
      id: 'short_ton',
      label: '美吨',
      symbol: 'sh tn',
      ratio: 907.1847, // 1 美吨 = 907.1847 kg
    },
    pound: {
      id: 'pound',
      label: '磅',
      symbol: 'lb',
      ratio: 0.45359237,
    },
    ounce: {
      id: 'ounce',
      label: '盎司',
      symbol: 'oz',
      ratio: 0.028349523125,
    },
    stone: {
      id: 'stone',
      label: '英石',
      symbol: 'st',
      ratio: 6.35029318, // 1 英石 = 14 磅 ≈ 6.35029318 kg
    },
    carat: {
      id: 'carat',
      label: '克拉',
      symbol: 'ct',
      ratio: 0.0002, // 1 克拉 = 0.2 克 = 0.0002 kg
    },
    grain: {
      id: 'grain',
      label: '格令',
      symbol: 'gr',
      ratio: 0.00006479891, // 1 格令 ≈ 0.06479891 g
    },
  },
}

export default weight 