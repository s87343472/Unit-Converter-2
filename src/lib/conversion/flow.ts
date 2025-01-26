import type { ConversionCategory } from './types'

const flow: ConversionCategory = {
  id: 'flow',
  baseUnit: 'cubic_meter_per_second',
  units: {
    // 基准单位
    cubic_meter_per_second: {
      id: 'cubic_meter_per_second',
      label: '立方米每秒',
      symbol: 'm³/s',
      ratio: 1 // 基准单位
    },

    // 体积流量单位 - 公制
    liter_per_second: {
      id: 'liter_per_second',
      label: '升每秒',
      symbol: 'L/s',
      ratio: 0.001 // 1 L/s = 0.001 m³/s（1升 = 0.001立方米）
    },
    cubic_meter_per_hour: {
      id: 'cubic_meter_per_hour',
      label: '立方米每小时',
      symbol: 'm³/h',
      ratio: 1/3600 // 1 m³/h = 1/3600 m³/s（1小时 = 3600秒）
    },
    liter_per_minute: {
      id: 'liter_per_minute',
      label: '升每分钟',
      symbol: 'L/min',
      ratio: 0.001/60 // 1 L/min = 0.001/60 m³/s（1升/分 = 0.001立方米/60秒）
    },

    // 体积流量单位 - 英制
    cubic_foot_per_second: {
      id: 'cubic_foot_per_second',
      label: '立方英尺每秒',
      symbol: 'ft³/s',
      ratio: 0.028316846592 // 1 ft³/s ≈ 0.028316846592 m³/s（基于国际标准）
    },
    cubic_foot_per_minute: {
      id: 'cubic_foot_per_minute',
      label: '立方英尺每分钟',
      symbol: 'ft³/min',
      ratio: 0.028316846592/60 // 1 ft³/min ≈ 0.028316846592/60 m³/s
    },
    cubic_foot_per_hour: {
      id: 'cubic_foot_per_hour',
      label: '立方英尺每小时',
      symbol: 'ft³/h',
      ratio: 0.028316846592/3600 // 1 ft³/h ≈ 0.028316846592/3600 m³/s
    },

    // 体积流量单位 - 美制
    gallon_per_minute: {
      id: 'gallon_per_minute',
      label: '加仑每分钟',
      symbol: 'gal/min',
      ratio: 0.0000630902 // 1 gal/min ≈ 0.0000630902 m³/s（基于美制加仑）
    },
    gallon_per_hour: {
      id: 'gallon_per_hour',
      label: '加仑每小时',
      symbol: 'gal/h',
      ratio: 0.00378541178/3600 // 1 gal/h ≈ 0.00378541178/3600 m³/s
    },

    // 质量流量单位
    kilogram_per_second: {
      id: 'kilogram_per_second',
      label: '千克每秒',
      symbol: 'kg/s',
      ratio: 0.001 // 1 kg/s ≈ 0.001 m³/s（基于水的密度，1000 kg/m³）
    },
    gram_per_minute: {
      id: 'gram_per_minute',
      label: '克每分钟',
      symbol: 'g/min',
      ratio: 0.001/60000 // 1 g/min ≈ 0.001/60000 m³/s（基于水的密度）
    },
    pound_per_hour: {
      id: 'pound_per_hour',
      label: '磅每小时',
      symbol: 'lb/h',
      ratio: 0.000126 // 1 lb/h ≈ 0.000126 m³/s（基于水的密度）
    },

    // 工业流量单位
    standard_cubic_meter_per_hour: {
      id: 'standard_cubic_meter_per_hour',
      label: '标准立方米每小时',
      symbol: 'Nm³/h',
      ratio: 1/3600 // 1 Nm³/h = 1/3600 m³/s（在标准状态下）
    },

    // 科学流量单位
    cubic_centimeter_per_second: {
      id: 'cubic_centimeter_per_second',
      label: '立方厘米每秒',
      symbol: 'cm³/s',
      ratio: 0.000001 // 1 cm³/s = 0.000001 m³/s（1立方厘米 = 0.000001立方米）
    },
    milliliter_per_minute: {
      id: 'milliliter_per_minute',
      label: '毫升每分钟',
      symbol: 'mL/min',
      ratio: 0.001/60000 // 1 mL/min = 0.001/60000 m³/s（1毫升 = 0.000001立方米）
    }
  }
} as const

export default flow 