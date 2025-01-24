import type { ConversionCategory } from './types'

// 使用帕斯卡(Pa)作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'metric_pascal',
  units: {
    // 公制压力单位
    metric_pascal: {
      id: 'metric_pascal',
      label: '帕斯卡',
      symbol: 'Pa',
      ratio: 1,
    },
    metric_hectopascal: {
      id: 'metric_hectopascal',
      label: '百帕',
      symbol: 'hPa',
      ratio: 100, // 1 hPa = 100 Pa
    },
    metric_kilopascal: {
      id: 'metric_kilopascal',
      label: '千帕',
      symbol: 'kPa',
      ratio: 1000, // 1 kPa = 1000 Pa
    },
    metric_megapascal: {
      id: 'metric_megapascal',
      label: '兆帕',
      symbol: 'MPa',
      ratio: 1000000, // 1 MPa = 1,000,000 Pa
    },
    
    // 大气压相关单位
    standard_atmosphere: {
      id: 'standard_atmosphere',
      label: '标准大气压',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101,325 Pa
    },
    metric_bar: {
      id: 'metric_bar',
      label: '巴',
      symbol: 'bar',
      ratio: 100000, // 1 bar = 100,000 Pa
    },
    metric_millibar: {
      id: 'metric_millibar',
      label: '毫巴',
      symbol: 'mbar',
      ratio: 100, // 1 mbar = 100 Pa
    },
    
    // 医疗压力单位
    medical_millimeter_mercury: {
      id: 'medical_millimeter_mercury',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa
    },
    medical_centimeter_water: {
      id: 'medical_centimeter_water',
      label: '厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O = 98.0665 Pa
    },
    
    // 工程压力单位
    engineering_psi: {
      id: 'engineering_psi',
      label: '磅力/平方英寸',
      symbol: 'psi',
      ratio: 6894.757293168, // 1 psi = 6,894.757293168 Pa
    },
    engineering_ksi: {
      id: 'engineering_ksi',
      label: '千磅力/平方英寸',
      symbol: 'ksi',
      ratio: 6894757.293168, // 1 ksi = 1000 psi = 6,894,757.293168 Pa
    },
    
    // 气象压力单位
    meteorology_inch_mercury: {
      id: 'meteorology_inch_mercury',
      label: '英寸汞柱',
      symbol: 'inHg',
      ratio: 3386.389, // 1 inHg = 3,386.389 Pa
    },
    meteorology_millimeter_mercury: {
      id: 'meteorology_millimeter_mercury',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa
    },
    
    // 真空压力单位
    vacuum_torr: {
      id: 'vacuum_torr',
      label: '托',
      symbol: 'Torr',
      ratio: 133.322368421, // 1 Torr ≈ 133.322368421 Pa
    },
    vacuum_micron_mercury: {
      id: 'vacuum_micron_mercury',
      label: '微米汞柱',
      symbol: 'μmHg',
      ratio: 0.133322387415, // 1 μmHg = 0.133322387415 Pa
    },
  },
} as const

export default pressure 