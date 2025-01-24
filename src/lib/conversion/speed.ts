import type { ConversionCategory } from './types'

const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'metric_meter_per_second',
  units: {
    // 公制单位（SI）
    metric_meter_per_second: {
      id: 'metric_meter_per_second',
      label: '米每秒 (公制)',
      symbol: 'm/s',
      ratio: 1,
    },
    metric_kilometer_per_hour: {
      id: 'metric_kilometer_per_hour',
      label: '公里每小时 (公制)',
      symbol: 'km/h',
      ratio: 0.277778, // 1 km/h = 0.277778 m/s
    },
    metric_kilometer_per_second: {
      id: 'metric_kilometer_per_second',
      label: '公里每秒 (公制)',
      symbol: 'km/s',
      ratio: 1000, // 1 km/s = 1,000 m/s
    },
    
    // 航空单位
    aviation_knot: {
      id: 'aviation_knot',
      label: '节 (航空)',
      symbol: 'kn',
      ratio: 0.514444, // 1 kn = 0.514444 m/s
    },
    aviation_mach: {
      id: 'aviation_mach',
      label: '马赫 (航空)',
      symbol: 'M',
      ratio: 340.3, // 1 M ≈ 340.3 m/s（海平面标准大气压下）
    },
    
    // 英制单位
    imperial_mile_per_hour: {
      id: 'imperial_mile_per_hour',
      label: '英里每小时 (英制)',
      symbol: 'mph',
      ratio: 0.44704, // 1 mph = 0.44704 m/s
    },
    imperial_foot_per_second: {
      id: 'imperial_foot_per_second',
      label: '英尺每秒 (英制)',
      symbol: 'ft/s',
      ratio: 0.3048, // 1 ft/s = 0.3048 m/s
    },
    imperial_yard_per_minute: {
      id: 'imperial_yard_per_minute',
      label: '码每分钟 (英制)',
      symbol: 'yd/min',
      ratio: 0.01524, // 1 yd/min = 0.01524 m/s
    },
    
    // 天文单位
    astronomical_light_speed: {
      id: 'astronomical_light_speed',
      label: '光速 (天文)',
      symbol: 'c',
      ratio: 2.99792458e8, // c = 299,792,458 m/s
    },
    astronomical_astronomical_unit_per_year: {
      id: 'astronomical_astronomical_unit_per_year',
      label: '天文单位每年 (天文)',
      symbol: 'AU/y',
      ratio: 4.74057581e-3, // 1 AU/y ≈ 0.00474057581 m/s
    },
    astronomical_parsec_per_year: {
      id: 'astronomical_parsec_per_year',
      label: '秒差距每年 (天文)',
      symbol: 'pc/y',
      ratio: 0.977813952, // 1 pc/y ≈ 0.977813952 m/s
    },
    
    // 科学单位
    scientific_speed_of_sound_air: {
      id: 'scientific_speed_of_sound_air',
      label: '声速（空气中） (科学)',
      symbol: 'a',
      ratio: 340.3, // a ≈ 340.3 m/s（海平面标准大气压下）
    },
    scientific_speed_of_sound_water: {
      id: 'scientific_speed_of_sound_water',
      label: '声速（水中） (科学)',
      symbol: 'c_w',
      ratio: 1481, // c_w ≈ 1,481 m/s（20°C纯水中）
    },
    scientific_speed_of_sound_steel: {
      id: 'scientific_speed_of_sound_steel',
      label: '声速（钢中） (科学)',
      symbol: 'c_s',
      ratio: 5120, // c_s ≈ 5,120 m/s（20°C钢中）
    },
  },
} as const

export default speed 