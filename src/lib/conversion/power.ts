import type { ConversionCategory } from './types'

// 使用瓦特(W)作为基准单位
const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'metric_watt',
  units: {
    // 公制功率单位
    metric_watt: {
      id: 'metric_watt',
      label: '瓦特',
      symbol: 'W',
      ratio: 1,
    },
    metric_kilowatt: {
      id: 'metric_kilowatt',
      label: '千瓦',
      symbol: 'kW',
      ratio: 1000, // 1 kW = 1000 W
    },
    metric_megawatt: {
      id: 'metric_megawatt',
      label: '兆瓦',
      symbol: 'MW',
      ratio: 1000000, // 1 MW = 1,000,000 W
    },
    metric_gigawatt: {
      id: 'metric_gigawatt',
      label: '吉瓦',
      symbol: 'GW',
      ratio: 1000000000, // 1 GW = 1,000,000,000 W
    },
    
    // 机械功率单位
    mechanical_horsepower: {
      id: 'mechanical_horsepower',
      label: '机械马力',
      symbol: 'hp',
      ratio: 745.699872, // 1 hp = 745.699872 W
    },
    mechanical_metric_horsepower: {
      id: 'mechanical_metric_horsepower',
      label: '公制马力',
      symbol: 'PS',
      ratio: 735.49875, // 1 PS = 735.49875 W
    },
    mechanical_british_horsepower: {
      id: 'mechanical_british_horsepower',
      label: '英制马力',
      symbol: 'bhp',
      ratio: 745.7, // 1 bhp ≈ 745.7 W
    },
    
    // 热功率单位
    thermal_btu_per_hour: {
      id: 'thermal_btu_per_hour',
      label: '英热单位/小时',
      symbol: 'BTU/h',
      ratio: 0.29307107, // 1 BTU/h = 0.29307107 W
    },
    thermal_kilocalorie_per_hour: {
      id: 'thermal_kilocalorie_per_hour',
      label: '千卡/小时',
      symbol: 'kcal/h',
      ratio: 1.163, // 1 kcal/h = 1.163 W
    },
    thermal_ton_refrigeration: {
      id: 'thermal_ton_refrigeration',
      label: '制冷吨',
      symbol: 'RT',
      ratio: 3516.853, // 1 RT = 3,516.853 W
    },
    
    // 工业功率单位
    industrial_kilovolt_ampere: {
      id: 'industrial_kilovolt_ampere',
      label: '千伏安',
      symbol: 'kVA',
      ratio: 1000, // 1 kVA = 1000 W (假设功率因数为1)
    },
    industrial_kilovar: {
      id: 'industrial_kilovar',
      label: '千乏',
      symbol: 'kvar',
      ratio: 1000, // 1 kvar = 1000 W (假设功率因数为0)
    },
    industrial_megavolt_ampere: {
      id: 'industrial_megavolt_ampere',
      label: '兆伏安',
      symbol: 'MVA',
      ratio: 1000000, // 1 MVA = 1,000,000 W (假设功率因数为1)
    },
    
    // 科学功率单位
    scientific_erg_per_second: {
      id: 'scientific_erg_per_second',
      label: '尔格/秒',
      symbol: 'erg/s',
      ratio: 1e-7, // 1 erg/s = 1e-7 W
    },
    scientific_joule_per_second: {
      id: 'scientific_joule_per_second',
      label: '焦耳/秒',
      symbol: 'J/s',
      ratio: 1, // 1 J/s = 1 W
    },
    scientific_calorie_per_second: {
      id: 'scientific_calorie_per_second',
      label: '卡路里/秒',
      symbol: 'cal/s',
      ratio: 4.1868, // 1 cal/s = 4.1868 W
    },
  },
} as const

export default power 