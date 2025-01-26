import type { ConversionCategory } from './types'

// 使用米/秒作为基准单位
const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'meter_per_second',
  units: {
    // 基本单位
    meter_per_second: {
      id: 'meter_per_second',
      label: '米/秒',
      symbol: 'm/s',
      ratio: 1, // 基准单位（SI导出单位）
    },

    // 公制速度单位
    kilometer_per_hour: {
      id: 'kilometer_per_hour',
      label: '千米/小时',
      symbol: 'km/h',
      ratio: 0.277777778, // 1 km/h = 0.277777778 m/s（1 km/h = 1000 m/3600 s）
    },
    kilometer_per_second: {
      id: 'kilometer_per_second',
      label: '千米/秒',
      symbol: 'km/s',
      ratio: 1000, // 1 km/s = 1000 m/s（基本换算关系）
    },
    
    // 航空速度单位
    mach: {
      id: 'mach',
      label: '马赫',
      symbol: 'M',
      ratio: 340.3, // 1 M = 340.3 m/s（基于海平面标准大气中的声速）
    },
    
    // 英制速度单位
    mile_per_hour: {
      id: 'mile_per_hour',
      label: '英里/小时',
      symbol: 'mph',
      ratio: 0.44704, // 1 mph = 0.44704 m/s（基于国际英里）
    },
    foot_per_second: {
      id: 'foot_per_second',
      label: '英尺/秒',
      symbol: 'ft/s',
      ratio: 0.3048, // 1 ft/s = 0.3048 m/s（基于国际英尺）
    },
    knot: {
      id: 'knot',
      label: '节',
      symbol: 'kn',
      ratio: 0.514444444, // 1 kn = 0.514444444 m/s（1海里/小时）
    },
    
    // 天文速度单位
    light_speed: {
      id: 'light_speed',
      label: '光速',
      symbol: 'c',
      ratio: 299792458, // 1 c = 299792458 m/s（真空中的光速）
    },
    astronomy_astronomical_unit_per_year: {
      id: 'astronomy_astronomical_unit_per_year',
      label: '天文单位/年',
      symbol: 'AU/y',
      ratio: 4.74057581, // 约4.74 km/s
    },
    astronomy_parsec_per_year: {
      id: 'astronomy_parsec_per_year',
      label: '秒差距/年',
      symbol: 'pc/y',
      ratio: 977813.952, // 约977.8 km/s
    },
    
    // 运动速度单位
    sport_kilometer_per_minute: {
      id: 'sport_kilometer_per_minute',
      label: '千米/分',
      symbol: 'km/min',
      ratio: 16.6667, // 1 km/min = 16.6667 m/s
    },
    sport_meter_per_minute: {
      id: 'sport_meter_per_minute',
      label: '米/分',
      symbol: 'm/min',
      ratio: 1/60, // 1 m/min = 1/60 m/s
    },
  },
} as const

export default speed 