import type { ConversionCategory } from './types'

const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'metric_joule',
  units: {
    // 公制单位（SI）
    metric_joule: {
      id: 'metric_joule',
      label: '焦耳 (公制)',
      symbol: 'J',
      ratio: 1,
    },
    metric_kilojoule: {
      id: 'metric_kilojoule',
      label: '千焦 (公制)',
      symbol: 'kJ',
      ratio: 1e3, // 1 kJ = 1,000 J
    },
    metric_megajoule: {
      id: 'metric_megajoule',
      label: '兆焦 (公制)',
      symbol: 'MJ',
      ratio: 1e6, // 1 MJ = 1,000,000 J
    },
    
    // 热量单位
    thermal_calorie: {
      id: 'thermal_calorie',
      label: '卡路里 (热量)',
      symbol: 'cal',
      ratio: 4.184, // 1 cal = 4.184 J
    },
    thermal_kilocalorie: {
      id: 'thermal_kilocalorie',
      label: '千卡 (热量)',
      symbol: 'kcal',
      ratio: 4184, // 1 kcal = 4,184 J
    },
    thermal_british_thermal_unit: {
      id: 'thermal_british_thermal_unit',
      label: '英热单位 (热量)',
      symbol: 'BTU',
      ratio: 1055.06, // 1 BTU ≈ 1,055.06 J
    },
    thermal_therm: {
      id: 'thermal_therm',
      label: '撒姆 (热量)',
      symbol: 'thm',
      ratio: 1.055e8, // 1 thm = 100,000 BTU ≈ 105,506,000 J
    },
    
    // 电能单位
    electric_watt_hour: {
      id: 'electric_watt_hour',
      label: '瓦时 (电能)',
      symbol: 'Wh',
      ratio: 3600, // 1 Wh = 3,600 J
    },
    electric_kilowatt_hour: {
      id: 'electric_kilowatt_hour',
      label: '千瓦时 (电能)',
      symbol: 'kWh',
      ratio: 3.6e6, // 1 kWh = 3,600,000 J
    },
    electric_megawatt_hour: {
      id: 'electric_megawatt_hour',
      label: '兆瓦时 (电能)',
      symbol: 'MWh',
      ratio: 3.6e9, // 1 MWh = 3,600,000,000 J
    },
    
    // 科学单位
    scientific_electron_volt: {
      id: 'scientific_electron_volt',
      label: '电子伏 (科学)',
      symbol: 'eV',
      ratio: 1.602176634e-19, // 1 eV ≈ 1.602176634×10⁻¹⁹ J
    },
    scientific_kilo_electron_volt: {
      id: 'scientific_kilo_electron_volt',
      label: '千电子伏 (科学)',
      symbol: 'keV',
      ratio: 1.602176634e-16, // 1 keV = 1000 eV
    },
    scientific_mega_electron_volt: {
      id: 'scientific_mega_electron_volt',
      label: '兆电子伏 (科学)',
      symbol: 'MeV',
      ratio: 1.602176634e-13, // 1 MeV = 1,000,000 eV
    },
    
    // 机械能单位
    mechanical_foot_pound: {
      id: 'mechanical_foot_pound',
      label: '英尺磅 (机械)',
      symbol: 'ft⋅lb',
      ratio: 1.355818, // 1 ft⋅lb ≈ 1.355818 J
    },
    mechanical_kilogram_force_meter: {
      id: 'mechanical_kilogram_force_meter',
      label: '公斤力米 (机械)',
      symbol: 'kgf⋅m',
      ratio: 9.80665, // 1 kgf⋅m = 9.80665 J
    },
    mechanical_erg: {
      id: 'mechanical_erg',
      label: '尔格 (机械)',
      symbol: 'erg',
      ratio: 1e-7, // 1 erg = 10⁻⁷ J
    },
  },
} as const

export default energy 