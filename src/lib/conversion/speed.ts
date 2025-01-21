import type { ConversionCategory } from './types'

// 使用米/秒作为基准单位
const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'meters_per_second',
  units: {
    meters_per_second: {
      id: 'meters_per_second',
      label: '米/秒',
      symbol: 'm/s',
      ratio: 1,
    },
    kilometers_per_hour: {
      id: 'kilometers_per_hour',
      label: '千米/时',
      symbol: 'km/h',
      ratio: 0.277778, // 1 km/h = 0.277778 m/s
    },
    miles_per_hour: {
      id: 'miles_per_hour',
      label: '英里/时',
      symbol: 'mph',
      ratio: 0.44704, // 1 mph = 0.44704 m/s
    },
    knots: {
      id: 'knots',
      label: '节',
      symbol: 'kn',
      ratio: 0.514444, // 1 knot = 0.514444 m/s
    },
    feet_per_second: {
      id: 'feet_per_second',
      label: '英尺/秒',
      symbol: 'ft/s',
      ratio: 0.3048, // 1 ft/s = 0.3048 m/s
    },
    mach: {
      id: 'mach',
      label: '马赫',
      symbol: 'M',
      ratio: 340.3, // 1 Mach ≈ 340.3 m/s（在海平面标准大气压下）
    },
  },
}

export default speed 