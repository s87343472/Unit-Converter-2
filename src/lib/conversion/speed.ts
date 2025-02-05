import type { ConversionCategory } from './types'

// 使用米每秒(m/s)作为基准单位
const speed: ConversionCategory = {
  id: 'speed',
  baseUnit: 'metric_meter_per_second',
  description: '速度单位转换 (ISO 80000-3)',
  units: {
    // 基本单位
    metric_meter_per_second: {
      id: 'metric_meter_per_second',
      label: '米/秒',
      symbol: 'm/s',
      ratio: 1,
      category: 'metric',
      toBase: (value: number) => value,
      fromBase: (value: number) => value
    },

    // 公制速度单位
    metric_kilometer_per_hour: {
      id: 'metric_kilometer_per_hour',
      label: '千米/时',
      symbol: 'km/h',
      ratio: 1/3.6,  // 1 km/h = 1000m/3600s = 1/3.6 m/s
      category: 'metric',
      toBase: (value: number) => value * (1/3.6),
      fromBase: (value: number) => value * 3.6
    },
    metric_kilometer_per_second: {
      id: 'metric_kilometer_per_second',
      label: '千米/秒',
      symbol: 'km/s',
      ratio: 1000,  // 1 km/s = 1000 m/s
      category: 'metric',
      toBase: (value: number) => value * 1000,
      fromBase: (value: number) => value / 1000
    },
    metric_kilometer_per_minute: {
      id: 'metric_kilometer_per_minute',
      label: '千米/分',
      symbol: 'km/min',
      ratio: 1000/60,  // 1 km/min = 1000m/60s
      category: 'metric',
      toBase: (value: number) => value * (1000/60),
      fromBase: (value: number) => value * (60/1000)
    },
    metric_meter_per_minute: {
      id: 'metric_meter_per_minute',
      label: '米/分',
      symbol: 'm/min',
      ratio: 1/60,  // 1 m/min = 1m/60s
      category: 'metric',
      toBase: (value: number) => value * (1/60),
      fromBase: (value: number) => value * 60
    },

    // 英制速度单位
    imperial_mile_per_hour: {
      id: 'imperial_mile_per_hour',
      label: '英里/时',
      symbol: 'mph',
      ratio: 0.44704,  // 1 mph = 0.44704 m/s
      category: 'imperial',
      toBase: (value: number) => value * 0.44704,
      fromBase: (value: number) => value / 0.44704
    },
    imperial_foot_per_second: {
      id: 'imperial_foot_per_second',
      label: '英尺/秒',
      symbol: 'ft/s',
      ratio: 0.3048,  // 1 ft/s = 0.3048 m/s
      category: 'imperial',
      toBase: (value: number) => value * 0.3048,
      fromBase: (value: number) => value / 0.3048
    },

    // 航海和航空单位
    nautical_knot: {
      id: 'nautical_knot',
      label: '节',
      symbol: 'kn',
      ratio: 0.514444,  // 1 knot = 0.514444 m/s
      category: 'nautical',
      toBase: (value: number) => value * 0.514444,
      fromBase: (value: number) => value / 0.514444
    },
    scientific_mach: {
      id: 'scientific_mach',
      label: '马赫',
      symbol: 'M',
      ratio: 340.3,  // 1 Mach ≈ 340.3 m/s (at sea level, 15°C)
      category: 'scientific',
      toBase: (value: number) => value * 340.3,
      fromBase: (value: number) => value / 340.3
    },

    // 天文单位
    scientific_light_speed: {
      id: 'scientific_light_speed',
      label: '光速',
      symbol: 'c',
      ratio: 299792458,  // Speed of light in m/s
      category: 'scientific',
      toBase: (value: number) => value * 299792458,
      fromBase: (value: number) => value / 299792458
    },
    scientific_astronomical_unit_per_year: {
      id: 'scientific_astronomical_unit_per_year',
      label: '天文单位/年',
      symbol: 'AU/y',
      ratio: 4.74057581,  // 约4.74 km/s
      category: 'scientific',
      toBase: (value: number) => value * 4.74057581,
      fromBase: (value: number) => value / 4.74057581
    },
    scientific_parsec_per_year: {
      id: 'scientific_parsec_per_year',
      label: '秒差距/年',
      symbol: 'pc/y',
      ratio: 977813.952,  // 约977.8 km/s
      category: 'scientific',
      toBase: (value: number) => value * 977813.952,
      fromBase: (value: number) => value / 977813.952
    }
  },

  // 知识点
  knowledge: {
    title: '速度知识',
    items: [
      'ISO 80000-3标准定义了速度的基本单位米每秒(m/s)，表示单位时间内的位移',
      '马赫数是物体速度与当地声速的比值，在标准大气条件下1马赫约等于340.3米每秒',
      '光速是真空中电磁波传播的速度，约为299792458米每秒，是自然界已知的最大速度',
      '节是航海和航空中常用的速度单位，1节等于1海里每小时，约0.514米每秒',
      '天文单位每年和秒差距每年常用于表示天体运动速度',
      '运动速度单位在体育和健身领域广泛使用，如千米每小时用于跑步配速'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '速度换算提示',
    items: [
      '日常交通速度参考：\n  - 步行：4-6 km/h\n  - 跑步：8-15 km/h\n  - 自行车：15-30 km/h\n  - 汽车：40-120 km/h\n  - 高铁：200-350 km/h',
      '航空速度参考：\n  - 直升机：150-400 km/h\n  - 客机巡航：800-950 km/h\n  - 音速：1225 km/h\n  - 战斗机：2-3 M\n  - 航天飞机：28000 km/h',
      '天文速度参考：\n  - 地球公转：29.78 km/s\n  - 太阳系相对银心：220 km/s\n  - 银河系相对邻近星系：600 km/s\n  - 光速：299792 km/s',
      '运动速度参考：\n  - 100米短跑：36 km/h\n  - 马拉松：12-20 km/h\n  - 自行车赛：40-60 km/h\n  - 滑雪：40-100 km/h\n  - F1赛车：300-350 km/h'
    ]
  }
} as const

export default speed 