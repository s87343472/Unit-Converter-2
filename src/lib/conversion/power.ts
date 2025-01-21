import type { ConversionCategory } from './types'

// 使用瓦特作为基准单位
const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'watt',
  units: {
    watt: {
      id: 'watt',
      label: '瓦特',
      symbol: 'W',
      ratio: 1,
    },
    kilowatt: {
      id: 'kilowatt',
      label: '千瓦',
      symbol: 'kW',
      ratio: 1000, // 1 kW = 1000 W
    },
    megawatt: {
      id: 'megawatt',
      label: '兆瓦',
      symbol: 'MW',
      ratio: 1000000, // 1 MW = 1,000,000 W
    },
    gigawatt: {
      id: 'gigawatt',
      label: '吉瓦',
      symbol: 'GW',
      ratio: 1000000000, // 1 GW = 1,000,000,000 W
    },
    horsepower_mechanical: {
      id: 'horsepower_mechanical',
      label: '机械马力',
      symbol: 'hp',
      ratio: 745.7, // 1 hp ≈ 745.7 W
    },
    horsepower_metric: {
      id: 'horsepower_metric',
      label: '公制马力',
      symbol: 'PS',
      ratio: 735.49875, // 1 PS ≈ 735.49875 W
    },
    btu_per_hour: {
      id: 'btu_per_hour',
      label: '英热单位/小时',
      symbol: 'BTU/h',
      ratio: 0.29307107, // 1 BTU/h ≈ 0.29307107 W
    },
    kilocalorie_per_hour: {
      id: 'kilocalorie_per_hour',
      label: '千卡/小时',
      symbol: 'kcal/h',
      ratio: 1.163, // 1 kcal/h ≈ 1.163 W
    },
    joule_per_second: {
      id: 'joule_per_second',
      label: '焦耳/秒',
      symbol: 'J/s',
      ratio: 1, // 1 J/s = 1 W
    },
    newton_meter_per_second: {
      id: 'newton_meter_per_second',
      label: '牛顿米/秒',
      symbol: 'N⋅m/s',
      ratio: 1, // 1 N⋅m/s = 1 W
    },
    foot_pound_per_second: {
      id: 'foot_pound_per_second',
      label: '英尺磅/秒',
      symbol: 'ft⋅lb/s',
      ratio: 1.355818, // 1 ft⋅lb/s ≈ 1.355818 W
    },
  },
}

export default power 