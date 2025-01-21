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
    ton: {
      id: 'ton',
      label: '吨',
      symbol: 't',
      ratio: 1000,
    },
  },
}

export default weight 