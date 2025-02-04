import type { ConversionCategory } from './types'

// 使用立方米每秒(m³/s)作为基准单位
const flow: ConversionCategory = {
  id: 'flow',
  baseUnit: 'metric_cubic_meter_per_second',
  description: '流量单位转换',
  units: {
    // 基本单位
    metric_cubic_meter_per_second: {
      id: 'metric_cubic_meter_per_second',
      label: '立方米/秒',
      symbol: 'm³/s',
      ratio: 1, // 基准单位
      category: 'metric'
    },

    // 公制流量单位
    metric_cubic_meter_per_minute: {
      id: 'metric_cubic_meter_per_minute',
      label: '立方米/分钟',
      symbol: 'm³/min',
      ratio: 1/60, // 1 m³/min = 1/60 m³/s
      category: 'metric'
    },
    metric_cubic_meter_per_hour: {
      id: 'metric_cubic_meter_per_hour',
      label: '立方米/小时',
      symbol: 'm³/h',
      ratio: 1/3600, // 1 m³/h = 1/3600 m³/s
      category: 'metric'
    },
    metric_liter_per_second: {
      id: 'metric_liter_per_second',
      label: '升/秒',
      symbol: 'L/s',
      ratio: 0.001, // 1 L/s = 0.001 m³/s
      category: 'metric'
    },
    metric_liter_per_minute: {
      id: 'metric_liter_per_minute',
      label: '升/分钟',
      symbol: 'L/min',
      ratio: 0.001/60, // 1 L/min = 0.001/60 m³/s
      category: 'metric'
    },
    metric_liter_per_hour: {
      id: 'metric_liter_per_hour',
      label: '升/小时',
      symbol: 'L/h',
      ratio: 0.001/3600, // 1 L/h = 0.001/3600 m³/s
      category: 'metric'
    },
    metric_milliliter_per_second: {
      id: 'metric_milliliter_per_second',
      label: '毫升/秒',
      symbol: 'mL/s',
      ratio: 0.000001, // 1 mL/s = 0.000001 m³/s
      category: 'metric'
    },
    metric_milliliter_per_minute: {
      id: 'metric_milliliter_per_minute',
      label: '毫升/分钟',
      symbol: 'mL/min',
      ratio: 0.000001/60, // 1 mL/min = 0.000001/60 m³/s
      category: 'metric'
    },
    metric_milliliter_per_hour: {
      id: 'metric_milliliter_per_hour',
      label: '毫升/小时',
      symbol: 'mL/h',
      ratio: 0.000001/3600, // 1 mL/h = 0.000001/3600 m³/s
      category: 'metric'
    },

    // 英制流量单位
    imperial_cubic_foot_per_second: {
      id: 'imperial_cubic_foot_per_second',
      label: '立方英尺/秒',
      symbol: 'ft³/s',
      ratio: 0.028316846592, // 1 ft³/s = 0.028316846592 m³/s
      category: 'imperial'
    },
    imperial_cubic_foot_per_minute: {
      id: 'imperial_cubic_foot_per_minute',
      label: '立方英尺/分钟',
      symbol: 'ft³/min',
      ratio: 0.028316846592/60, // 1 ft³/min = 0.028316846592/60 m³/s
      category: 'imperial'
    },
    imperial_cubic_foot_per_hour: {
      id: 'imperial_cubic_foot_per_hour',
      label: '立方英尺/小时',
      symbol: 'ft³/h',
      ratio: 0.028316846592/3600, // 1 ft³/h = 0.028316846592/3600 m³/s
      category: 'imperial'
    },

    // 美制流量单位
    us_gallon_per_second: {
      id: 'us_gallon_per_second',
      label: '美制加仑/秒',
      symbol: 'gal(US)/s',
      ratio: 0.003785411784, // 1 US gal/s = 0.003785411784 m³/s
      category: 'us'
    },
    us_gallon_per_minute: {
      id: 'us_gallon_per_minute',
      label: '美制加仑/分钟',
      symbol: 'gal(US)/min',
      ratio: 0.003785411784/60, // 1 US gal/min = 0.003785411784/60 m³/s
      category: 'us'
    },
    us_gallon_per_hour: {
      id: 'us_gallon_per_hour',
      label: '美制加仑/小时',
      symbol: 'gal(US)/h',
      ratio: 0.003785411784/3600, // 1 US gal/h = 0.003785411784/3600 m³/s
      category: 'us'
    },

    // 英制加仑流量单位
    imperial_gallon_per_second: {
      id: 'imperial_gallon_per_second',
      label: '英制加仑/秒',
      symbol: 'gal(UK)/s',
      ratio: 0.00454609, // 1 UK gal/s = 0.00454609 m³/s
      category: 'imperial'
    },
    imperial_gallon_per_minute: {
      id: 'imperial_gallon_per_minute',
      label: '英制加仑/分钟',
      symbol: 'gal(UK)/min',
      ratio: 0.00454609/60, // 1 UK gal/min = 0.00454609/60 m³/s
      category: 'imperial'
    },
    imperial_gallon_per_hour: {
      id: 'imperial_gallon_per_hour',
      label: '英制加仑/小时',
      symbol: 'gal(UK)/h',
      ratio: 0.00454609/3600, // 1 UK gal/h = 0.00454609/3600 m³/s
      category: 'imperial'
    },

    // 质量流量单位
    mass_kilogram_per_second: {
      id: 'mass_kilogram_per_second',
      label: '千克/秒',
      symbol: 'kg/s',
      ratio: 0.001, // 基于水的密度 (1000 kg/m³)
      category: 'metric'
    },
    mass_kilogram_per_minute: {
      id: 'mass_kilogram_per_minute',
      label: '千克/分钟',
      symbol: 'kg/min',
      ratio: 0.001/60,
      category: 'metric'
    },
    mass_kilogram_per_hour: {
      id: 'mass_kilogram_per_hour',
      label: '千克/小时',
      symbol: 'kg/h',
      ratio: 0.001/3600,
      category: 'metric'
    },
    mass_gram_per_second: {
      id: 'mass_gram_per_second',
      label: '克/秒',
      symbol: 'g/s',
      ratio: 0.000001,
      category: 'metric'
    },
    mass_gram_per_minute: {
      id: 'mass_gram_per_minute',
      label: '克/分钟',
      symbol: 'g/min',
      ratio: 0.000001/60,
      category: 'metric'
    },
    mass_gram_per_hour: {
      id: 'mass_gram_per_hour',
      label: '克/小时',
      symbol: 'g/h',
      ratio: 0.000001/3600,
      category: 'metric'
    },
    mass_pound_per_second: {
      id: 'mass_pound_per_second',
      label: '磅/秒',
      symbol: 'lb/s',
      ratio: 0.00045359237, // 基于 1 lb = 0.45359237 kg
      category: 'imperial'
    },
    mass_pound_per_minute: {
      id: 'mass_pound_per_minute',
      label: '磅/分钟',
      symbol: 'lb/min',
      ratio: 0.00045359237/60,
      category: 'imperial'
    },
    mass_pound_per_hour: {
      id: 'mass_pound_per_hour',
      label: '磅/小时',
      symbol: 'lb/h',
      ratio: 0.00045359237/3600,
      category: 'imperial'
    },

    // 工业流量单位
    industrial_standard_cubic_meter_per_hour: {
      id: 'industrial_standard_cubic_meter_per_hour',
      label: '标准立方米/小时',
      symbol: 'Nm³/h',
      ratio: 1/3600, // 在标准状态下 (0°C, 1 atm)
      category: 'industrial'
    },
    industrial_standard_cubic_foot_per_minute: {
      id: 'industrial_standard_cubic_foot_per_minute',
      label: '标准立方英尺/分钟',
      symbol: 'SCFM',
      ratio: 0.028316846592/60, // 在标准状态下
      category: 'industrial'
    }
  },

  // 知识点
  knowledge: {
    title: '流量知识',
    items: [
      '流量是单位时间内通过某个截面的流体体积或质量，分为体积流量和质量流量。',
      '标准状态下的流量（如Nm³/h、SCFM）是在0°C和1个标准大气压下测量的。',
      '在工业应用中，液体通常用体积流量表示，而气体常用质量流量或标准状态下的体积流量。',
      '英制加仑和美制加仑的容积不同：1英制加仑 ≈ 4.54609升，1美制加仑 ≈ 3.78541升。',
      'SCFM（标准立方英尺每分钟）在暖通空调和压缩空气系统中广泛使用。'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '转换参考',
    items: [
      '家用水流量参考：\n  - 水龙头：4-8 L/min\n  - 花洒：6-12 L/min\n  - 马桶冲水：6-8 L/次',
      '工业流量参考：\n  - 小型泵：10-100 L/min\n  - 中型泵：1-10 m³/h\n  - 大型泵：10-1000 m³/h',
      '空调制冷量参考：\n  - 1匹空调：约400-600 m³/h\n  - 5匹空调：约2000-3000 m³/h',
      '压缩空气系统：\n  - 小型压缩机：1-5 SCFM\n  - 中型压缩机：10-50 SCFM\n  - 大型压缩机：100+ SCFM'
    ]
  }
} as const

export default flow 