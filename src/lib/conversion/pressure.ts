import type { ConversionCategory } from './types'

// 使用帕斯卡作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'metric_pascal',
  units: {
    // 公制单位（SI）
    metric_pascal: {
      id: 'metric_pascal',
      label: '帕斯卡 (公制)',
      symbol: 'Pa',
      ratio: 1,
    },
    metric_kilopascal: {
      id: 'metric_kilopascal',
      label: '千帕 (公制)',
      symbol: 'kPa',
      ratio: 1e3, // 1 kPa = 1000 Pa
    },
    metric_megapascal: {
      id: 'metric_megapascal',
      label: '兆帕 (公制)',
      symbol: 'MPa',
      ratio: 1e6, // 1 MPa = 1,000,000 Pa
    },
    metric_hectopascal: {
      id: 'metric_hectopascal',
      label: '百帕 (公制)',
      symbol: 'hPa',
      ratio: 1e2, // 1 hPa = 100 Pa
    },
    
    // 工业单位
    industrial_bar: {
      id: 'industrial_bar',
      label: '巴 (工业)',
      symbol: 'bar',
      ratio: 1e5, // 1 bar = 100,000 Pa
    },
    industrial_millibar: {
      id: 'industrial_millibar',
      label: '毫巴 (工业)',
      symbol: 'mbar',
      ratio: 1e2, // 1 mbar = 100 Pa
    },
    
    // 科学单位
    scientific_atmosphere: {
      id: 'scientific_atmosphere',
      label: '标准大气压 (科学)',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101,325 Pa
    },
    scientific_torr: {
      id: 'scientific_torr',
      label: '托 (科学)',
      symbol: 'Torr',
      ratio: 133.322, // 1 Torr ≈ 133.322 Pa
    },
    
    // 医学单位
    medical_millimeter_of_mercury: {
      id: 'medical_millimeter_of_mercury',
      label: '毫米汞柱 (医学)',
      symbol: 'mmHg',
      ratio: 133.322, // 1 mmHg ≈ 133.322 Pa（与 Torr 基本相同）
    },
    
    // 英制单位
    imperial_pound_per_square_inch: {
      id: 'imperial_pound_per_square_inch',
      label: '磅每平方英寸 (英制)',
      symbol: 'psi',
      ratio: 6894.76, // 1 psi ≈ 6,894.76 Pa
    },
    imperial_pound_per_square_foot: {
      id: 'imperial_pound_per_square_foot',
      label: '磅每平方英尺 (英制)',
      symbol: 'psf',
      ratio: 47.8803, // 1 psf ≈ 47.8803 Pa
    },
    imperial_inch_of_mercury: {
      id: 'imperial_inch_of_mercury',
      label: '英寸汞柱 (英制)',
      symbol: 'inHg',
      ratio: 3386.39, // 1 inHg ≈ 3,386.39 Pa
    },
    imperial_inch_of_water: {
      id: 'imperial_inch_of_water',
      label: '英寸水柱 (英制)',
      symbol: 'inH₂O',
      ratio: 249.089, // 1 inH₂O ≈ 249.089 Pa
    },
    
    // 工程单位
    engineering_kilopound_per_square_inch: {
      id: 'engineering_kilopound_per_square_inch',
      label: '千磅每平方英寸 (工程)',
      symbol: 'ksi',
      ratio: 6.89476e6, // 1 ksi = 1000 psi ≈ 6,894,760 Pa
    },
    engineering_centimeter_of_water: {
      id: 'engineering_centimeter_of_water',
      label: '厘米水柱 (工程)',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O ≈ 98.0665 Pa
    },
  },
} as const

export default pressure 