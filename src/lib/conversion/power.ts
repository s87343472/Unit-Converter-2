import type { ConversionCategory } from './types'

// 使用瓦特作为基准单位
const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'watt',
  units: {
    watt: {
      id: 'watt',
      label: '瓦特 (公制)',
      symbol: 'W',
      ratio: 1,
    },
    kilowatt: {
      id: 'kilowatt',
      label: '千瓦 (公制)',
      symbol: 'kW',
      ratio: 1000,
    },
    megawatt: {
      id: 'megawatt',
      label: '兆瓦 (公制)',
      symbol: 'MW',
      ratio: 1000000,
    },
    gigawatt: {
      id: 'gigawatt',
      label: '吉瓦 (公制)',
      symbol: 'GW',
      ratio: 1000000000,
    },
    horsepower_mechanical: {
      id: 'horsepower_mechanical',
      label: '机械马力 (英制)',
      symbol: 'hp',
      ratio: 745.7,
    },
    horsepower_metric: {
      id: 'horsepower_metric',
      label: '公制马力 (公制)',
      symbol: 'PS',
      ratio: 735.499,
    },
    horsepower_electric: {
      id: 'horsepower_electric',
      label: '电马力 (工程)',
      symbol: 'hp(E)',
      ratio: 746,
    },
    horsepower_boiler: {
      id: 'horsepower_boiler',
      label: '锅炉马力 (工程)',
      symbol: 'hp(B)',
      ratio: 9809.5,
    },
    btu_per_hour: {
      id: 'btu_per_hour',
      label: '英热单位每小时 (英制)',
      symbol: 'BTU/h',
      ratio: 0.293071,
    },
    ton_refrigeration: {
      id: 'ton_refrigeration',
      label: '制冷吨 (工程)',
      symbol: 'TR',
      ratio: 3516.85,
    },
  },
}

export default power 