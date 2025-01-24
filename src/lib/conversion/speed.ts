import type { ConversionCategory } from './types'

// 使用米/秒作为基准单位
const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'metric_meter_per_second',
  units: {
    // 公制速度单位
    metric_meter_per_second: {
      id: 'metric_meter_per_second',
      label: '米/秒',
      symbol: 'm/s',
      ratio: 1,
    },
    metric_kilometer_per_hour: {
      id: 'metric_kilometer_per_hour',
      label: '千米/时',
      symbol: 'km/h',
      ratio: 1/3.6, // (1000m/3600s = 1/3.6 m/s)
    },
    metric_kilometer_per_second: {
      id: 'metric_kilometer_per_second',
      label: '千米/秒',
      symbol: 'km/s',
      ratio: 1000,
    },
    
    // 航空速度单位
    aviation_mach: {
      id: 'aviation_mach',
      label: '马赫',
      symbol: 'M',
      ratio: 340.3, // 在海平面标准大气压下，1马赫 ≈ 340.3 m/s
    },
    
    // 英制速度单位
    imperial_mile_per_hour: {
      id: 'imperial_mile_per_hour',
      label: '英里/时',
      symbol: 'mph',
      ratio: 0.44704, // 1 mph = 0.44704 m/s
    },
    imperial_foot_per_second: {
      id: 'imperial_foot_per_second',
      label: '英尺/秒',
      symbol: 'ft/s',
      ratio: 0.3048, // 1 ft/s = 0.3048 m/s
    },
    imperial_knot: {
      id: 'imperial_knot',
      label: '节',
      symbol: 'kn',
      ratio: 0.514444, // 1 knot = 0.514444 m/s
    },
    
    // 天文速度单位
    astronomy_light_speed: {
      id: 'astronomy_light_speed',
      label: '光速',
      symbol: 'c',
      ratio: 299792458, // 光速 = 299,792,458 m/s
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