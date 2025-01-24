import type { ConversionCategory } from './types'

// 使用米每秒作为基准单位
const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'meter_per_second',
  units: {
    meter_per_second: {
      id: 'meter_per_second',
      label: '米每秒 (公制)',
      symbol: 'm/s',
      ratio: 1,
    },
    kilometer_per_hour: {
      id: 'kilometer_per_hour',
      label: '千米每小时 (公制)',
      symbol: 'km/h',
      ratio: 0.277778, // 1 km/h = 0.277778 m/s = 1000 m/3600 s
    },
    mile_per_hour: {
      id: 'mile_per_hour',
      label: '英里每小时 (英制)',
      symbol: 'mph',
      ratio: 0.44704, // 1 mph = 0.44704 m/s ≈ 1.60934 km/h
    },
    knot: {
      id: 'knot',
      label: '节 (航海)',
      symbol: 'kn',
      ratio: 0.514444, // 1 kn = 0.514444 m/s = 1.852 km/h
    },
    foot_per_second: {
      id: 'foot_per_second',
      label: '英尺每秒 (英制)',
      symbol: 'ft/s',
      ratio: 0.3048, // 1 ft/s = 0.3048 m/s ≈ 1.09728 km/h
    },
    mach: {
      id: 'mach',
      label: '马赫 (航空)',
      symbol: 'M',
      ratio: 340.3, // 1 M ≈ 340.3 m/s ≈ 1225.08 km/h（在海平面标准大气压下）
    },
    light_speed: {
      id: 'light_speed',
      label: '光速 (天文)',
      symbol: 'c',
      ratio: 299792458,
    },
  },
}

export default speed 