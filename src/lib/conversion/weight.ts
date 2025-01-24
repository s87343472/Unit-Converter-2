import type { ConversionCategory } from './types'

// 使用千克作为基准单位
const weight: ConversionCategory = {
  id: 'weight',
  baseUnit: 'kilogram',
  units: {
    kilogram: {
      id: 'kilogram',
      label: '千克 (公制)',
      symbol: 'kg',
      ratio: 1,
    },
    gram: {
      id: 'gram',
      label: '克 (公制)',
      symbol: 'g',
      ratio: 0.001, // 1 g = 0.001 kg
    },
    milligram: {
      id: 'milligram',
      label: '毫克 (公制)',
      symbol: 'mg',
      ratio: 0.000001, // 1 mg = 0.000001 kg = 0.001 g
    },
    metric_ton: {
      id: 'metric_ton',
      label: '公吨 (公制)',
      symbol: 't',
      ratio: 1000, // 1 t = 1000 kg
    },
    pound: {
      id: 'pound',
      label: '磅 (英制)',
      symbol: 'lb',
      ratio: 0.453592,
    },
    ounce: {
      id: 'ounce',
      label: '盎司 (英制)',
      symbol: 'oz',
      ratio: 0.0283495,
    },
    stone: {
      id: 'stone',
      label: '英石 (英制)',
      symbol: 'st',
      ratio: 6.35029,
    },
    long_ton: {
      id: 'long_ton',
      label: '长吨 (英制)',
      symbol: 'long tn',
      ratio: 1016.05,
    },
    short_ton: {
      id: 'short_ton',
      label: '短吨 (美制)',
      symbol: 'short tn',
      ratio: 907.185,
    },
    grain: {
      id: 'grain',
      label: '格令 (英制)',
      symbol: 'gr',
      ratio: 0.0000647989,
    },
    carat: {
      id: 'carat',
      label: '克拉 (珠宝)',
      symbol: 'ct',
      ratio: 0.0002,
    },
  },
}

export default weight 