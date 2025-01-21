import type { ConversionCategory } from './types'

// 使用立方米/秒作为基准单位
const flow: ConversionCategory = {
  id: 'flow',
  baseUnit: 'cubic_meter_per_second',
  units: {
    // 体积流量单位
    cubic_meter_per_second: {
      id: 'cubic_meter_per_second',
      label: '立方米/秒',
      symbol: 'm³/s',
      ratio: 1,
    },
    cubic_meter_per_hour: {
      id: 'cubic_meter_per_hour',
      label: '立方米/小时',
      symbol: 'm³/h',
      ratio: 1/3600, // 1 m³/h = 1/3600 m³/s
    },
    liter_per_second: {
      id: 'liter_per_second',
      label: '升/秒',
      symbol: 'L/s',
      ratio: 0.001, // 1 L/s = 0.001 m³/s
    },
    liter_per_minute: {
      id: 'liter_per_minute',
      label: '升/分钟',
      symbol: 'L/min',
      ratio: 0.001/60, // 1 L/min = 0.001/60 m³/s
    },
    liter_per_hour: {
      id: 'liter_per_hour',
      label: '升/小时',
      symbol: 'L/h',
      ratio: 0.001/3600, // 1 L/h = 0.001/3600 m³/s
    },
    gallon_per_minute_us: {
      id: 'gallon_per_minute_us',
      label: '加仑/分钟(美)',
      symbol: 'gpm',
      ratio: 0.0000630902, // 1 gpm ≈ 0.0000630902 m³/s
    },
    gallon_per_hour_us: {
      id: 'gallon_per_hour_us',
      label: '加仑/小时(美)',
      symbol: 'gph',
      ratio: 0.0000630902/60, // 1 gph ≈ 0.0000630902/60 m³/s
    },
    cubic_foot_per_second: {
      id: 'cubic_foot_per_second',
      label: '立方英尺/秒',
      symbol: 'ft³/s',
      ratio: 0.028317, // 1 ft³/s ≈ 0.028317 m³/s
    },
    cubic_foot_per_minute: {
      id: 'cubic_foot_per_minute',
      label: '立方英尺/分钟',
      symbol: 'ft³/min',
      ratio: 0.028317/60, // 1 ft³/min ≈ 0.028317/60 m³/s
    },
    milliliter_per_second: {
      id: 'milliliter_per_second',
      label: '毫升/秒',
      symbol: 'mL/s',
      ratio: 0.000001, // 1 mL/s = 0.000001 m³/s
    },
    milliliter_per_minute: {
      id: 'milliliter_per_minute',
      label: '毫升/分钟',
      symbol: 'mL/min',
      ratio: 0.000001/60, // 1 mL/min = 0.000001/60 m³/s
    },
    // 质量流量单位（基于水的密度1000 kg/m³进行换算）
    kilogram_per_second: {
      id: 'kilogram_per_second',
      label: '千克/秒',
      symbol: 'kg/s',
      ratio: 0.001, // 1 kg/s = 0.001 m³/s（假设密度为1000 kg/m³）
    },
    kilogram_per_hour: {
      id: 'kilogram_per_hour',
      label: '千克/小时',
      symbol: 'kg/h',
      ratio: 0.001/3600, // 1 kg/h = 0.001/3600 m³/s
    },
    gram_per_second: {
      id: 'gram_per_second',
      label: '克/秒',
      symbol: 'g/s',
      ratio: 0.000001, // 1 g/s = 0.000001 m³/s
    },
    gram_per_minute: {
      id: 'gram_per_minute',
      label: '克/分钟',
      symbol: 'g/min',
      ratio: 0.000001/60, // 1 g/min = 0.000001/60 m³/s
    },
    pound_per_second: {
      id: 'pound_per_second',
      label: '磅/秒',
      symbol: 'lb/s',
      ratio: 0.000453592, // 1 lb/s ≈ 0.000453592 m³/s
    },
    pound_per_hour: {
      id: 'pound_per_hour',
      label: '磅/小时',
      symbol: 'lb/h',
      ratio: 0.000453592/3600, // 1 lb/h ≈ 0.000453592/3600 m³/s
    },
  },
}

export default flow 