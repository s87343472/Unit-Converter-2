import type { ConversionCategory } from './types'

const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'metric_watt',
  units: {
    // 公制单位（SI）
    metric_watt: {
      id: 'metric_watt',
      label: '瓦特 (公制)',
      symbol: 'W',
      ratio: 1,
    },
    metric_kilowatt: {
      id: 'metric_kilowatt',
      label: '千瓦 (公制)',
      symbol: 'kW',
      ratio: 1e3, // 1 kW = 1,000 W
    },
    metric_megawatt: {
      id: 'metric_megawatt',
      label: '兆瓦 (公制)',
      symbol: 'MW',
      ratio: 1e6, // 1 MW = 1,000,000 W
    },
    metric_gigawatt: {
      id: 'metric_gigawatt',
      label: '吉瓦 (公制)',
      symbol: 'GW',
      ratio: 1e9, // 1 GW = 1,000,000,000 W
    },
    
    // 机械功率单位
    mechanical_horsepower: {
      id: 'mechanical_horsepower',
      label: '马力 (机械)',
      symbol: 'hp',
      ratio: 745.7, // 1 hp ≈ 745.7 W
    },
    mechanical_metric_horsepower: {
      id: 'mechanical_metric_horsepower',
      label: '公制马力 (机械)',
      symbol: 'PS',
      ratio: 735.49875, // 1 PS ≈ 735.49875 W
    },
    mechanical_foot_pound_per_second: {
      id: 'mechanical_foot_pound_per_second',
      label: '英尺磅每秒 (机械)',
      symbol: 'ft⋅lb/s',
      ratio: 1.355818, // 1 ft⋅lb/s ≈ 1.355818 W
    },
    mechanical_newton_meter_per_second: {
      id: 'mechanical_newton_meter_per_second',
      label: '牛顿米每秒 (机械)',
      symbol: 'N⋅m/s',
      ratio: 1, // 1 N⋅m/s = 1 W
    },
    
    // 热功率单位
    thermal_kilocalorie_per_hour: {
      id: 'thermal_kilocalorie_per_hour',
      label: '千卡每小时 (热)',
      symbol: 'kcal/h',
      ratio: 1.163, // 1 kcal/h ≈ 1.163 W
    },
    thermal_british_thermal_unit_per_hour: {
      id: 'thermal_british_thermal_unit_per_hour',
      label: '英热单位每小时 (热)',
      symbol: 'BTU/h',
      ratio: 0.29307107, // 1 BTU/h ≈ 0.29307107 W
    },
    thermal_ton_of_refrigeration: {
      id: 'thermal_ton_of_refrigeration',
      label: '制冷吨 (热)',
      symbol: 'RT',
      ratio: 3516.853, // 1 RT ≈ 3,516.853 W
    },
    
    // 辐射功率单位
    radiation_erg_per_second: {
      id: 'radiation_erg_per_second',
      label: '尔格每秒 (辐射)',
      symbol: 'erg/s',
      ratio: 1e-7, // 1 erg/s = 10⁻⁷ W
    },
    radiation_solar_luminosity: {
      id: 'radiation_solar_luminosity',
      label: '太阳光度 (辐射)',
      symbol: 'L☉',
      ratio: 3.828e26, // 1 L☉ ≈ 3.828×10²⁶ W
    },
  },
} as const

export default power 