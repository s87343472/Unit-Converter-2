import type { ConversionCategory } from './types'

const flow: ConversionCategory = {
  id: 'flow',
  baseUnit: 'metric_cubic_meter_per_second',
  units: {
    // 公制体积流量单位（SI）
    metric_cubic_meter_per_second: {
      id: 'metric_cubic_meter_per_second',
      label: '立方米每秒 (公制)',
      symbol: 'm³/s',
      ratio: 1,
    },
    metric_cubic_meter_per_hour: {
      id: 'metric_cubic_meter_per_hour',
      label: '立方米每小时 (公制)',
      symbol: 'm³/h',
      ratio: 1/3600, // 1 m³/h = 1/3600 m³/s
    },
    metric_liter_per_second: {
      id: 'metric_liter_per_second',
      label: '升每秒 (公制)',
      symbol: 'L/s',
      ratio: 0.001, // 1 L/s = 0.001 m³/s
    },
    metric_liter_per_minute: {
      id: 'metric_liter_per_minute',
      label: '升每分钟 (公制)',
      symbol: 'L/min',
      ratio: 1.666667e-5, // 1 L/min = 0.001/60 m³/s
    },
    metric_liter_per_hour: {
      id: 'metric_liter_per_hour',
      label: '升每小时 (公制)',
      symbol: 'L/h',
      ratio: 2.777778e-7, // 1 L/h = 0.001/3600 m³/s
    },
    
    // 英制体积流量单位
    imperial_cubic_foot_per_second: {
      id: 'imperial_cubic_foot_per_second',
      label: '立方英尺每秒 (英制)',
      symbol: 'ft³/s',
      ratio: 0.028316847, // 1 ft³/s ≈ 0.028316847 m³/s
    },
    imperial_cubic_foot_per_minute: {
      id: 'imperial_cubic_foot_per_minute',
      label: '立方英尺每分钟 (英制)',
      symbol: 'ft³/min',
      ratio: 0.000471947, // 1 ft³/min ≈ 0.000471947 m³/s
    },
    imperial_cubic_foot_per_hour: {
      id: 'imperial_cubic_foot_per_hour',
      label: '立方英尺每小时 (英制)',
      symbol: 'ft³/h',
      ratio: 7.865791e-6, // 1 ft³/h ≈ 0.000007865791 m³/s
    },
    
    // 美制体积流量单位
    us_gallon_per_minute: {
      id: 'us_gallon_per_minute',
      label: '美制加仑每分钟 (美制)',
      symbol: 'gpm',
      ratio: 6.309020e-5, // 1 gpm ≈ 0.00006309020 m³/s
    },
    us_gallon_per_hour: {
      id: 'us_gallon_per_hour',
      label: '美制加仑每小时 (美制)',
      symbol: 'gph',
      ratio: 1.051503e-6, // 1 gph ≈ 0.000001051503 m³/s
    },
    us_million_gallon_per_day: {
      id: 'us_million_gallon_per_day',
      label: '百万美制加仑每天 (美制)',
      symbol: 'MGD',
      ratio: 0.043813, // 1 MGD ≈ 0.043813 m³/s
    },
    
    // 工业流量单位
    industrial_barrel_per_day: {
      id: 'industrial_barrel_per_day',
      label: '桶每天 (工业)',
      symbol: 'bbl/d',
      ratio: 1.840131e-6, // 1 bbl/d ≈ 0.000001840131 m³/s
    },
    industrial_barrel_per_hour: {
      id: 'industrial_barrel_per_hour',
      label: '桶每小时 (工业)',
      symbol: 'bbl/h',
      ratio: 4.416315e-5, // 1 bbl/h ≈ 0.00004416315 m³/s
    },
    
    // 质量流量单位
    mass_kilogram_per_second: {
      id: 'mass_kilogram_per_second',
      label: '千克每秒 (质量)',
      symbol: 'kg/s',
      ratio: 0.001, // 假设水的密度为1000 kg/m³
    },
    mass_kilogram_per_hour: {
      id: 'mass_kilogram_per_hour',
      label: '千克每小时 (质量)',
      symbol: 'kg/h',
      ratio: 2.777778e-7, // 1 kg/h = 1/3600000 m³/s（假设水）
    },
    mass_pound_per_second: {
      id: 'mass_pound_per_second',
      label: '磅每秒 (质量)',
      symbol: 'lb/s',
      ratio: 0.000453592, // 假设水的密度
    },
    mass_pound_per_hour: {
      id: 'mass_pound_per_hour',
      label: '磅每小时 (质量)',
      symbol: 'lb/h',
      ratio: 1.259978e-7, // 假设水的密度
    },
  },
} as const

export default flow 