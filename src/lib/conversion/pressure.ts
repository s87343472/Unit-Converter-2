import type { ConversionCategory } from './types'

// 使用帕斯卡(Pa)作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'pascal',
  units: {
    // 基本单位
    pascal: {
      id: 'pascal',
      label: '帕斯卡',
      symbol: 'Pa',
      ratio: 1, // 基准单位（SI基本单位，1 Pa = 1 N/m²）
    },

    // 公制压力单位
    kilopascal: {
      id: 'kilopascal',
      label: '千帕',
      symbol: 'kPa',
      ratio: 1000, // 1 kPa = 1000 Pa（基本换算关系）
    },
    megapascal: {
      id: 'megapascal',
      label: '兆帕',
      symbol: 'MPa',
      ratio: 1000000, // 1 MPa = 1000000 Pa（基本换算关系）
    },
    hectopascal: {
      id: 'hectopascal',
      label: '百帕',
      symbol: 'hPa',
      ratio: 100, // 1 hPa = 100 Pa（基本换算关系）
    },
    bar: {
      id: 'bar',
      label: '巴',
      symbol: 'bar',
      ratio: 100000, // 1 bar = 100000 Pa（定义值）
    },
    millibar: {
      id: 'millibar',
      label: '毫巴',
      symbol: 'mbar',
      ratio: 100, // 1 mbar = 100 Pa（1/1000 bar）
    },

    // 大气压力单位
    standard_atmosphere: {
      id: 'standard_atmosphere',
      label: '标准大气压',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101325 Pa（标准大气压定义值）
    },
    technical_atmosphere: {
      id: 'technical_atmosphere',
      label: '工程大气压',
      symbol: 'at',
      ratio: 98066.5, // 1 at = 98066.5 Pa（1 kgf/cm²）
    },
    torr: {
      id: 'torr',
      label: '托',
      symbol: 'Torr',
      ratio: 133.322387415, // 1 Torr = 133.322387415 Pa（1/760 标准大气压）
    },
    millimeter_of_mercury: {
      id: 'millimeter_of_mercury',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa（同托）
    },

    // 工程压力单位
    kilogram_force_per_square_centimeter: {
      id: 'kilogram_force_per_square_centimeter',
      label: '千克力/平方厘米',
      symbol: 'kgf/cm²',
      ratio: 98066.5, // 1 kgf/cm² = 98066.5 Pa（基于标准重力）
    },
    kilogram_force_per_square_meter: {
      id: 'kilogram_force_per_square_meter',
      label: '千克力/平方米',
      symbol: 'kgf/m²',
      ratio: 9.80665, // 1 kgf/m² = 9.80665 Pa（基于标准重力）
    },

    // 英制压力单位
    pound_force_per_square_inch: {
      id: 'pound_force_per_square_inch',
      label: '磅力/平方英寸',
      symbol: 'psi',
      ratio: 6894.757293168, // 1 psi = 6894.757293168 Pa（基于标准重力）
    },
    pound_force_per_square_foot: {
      id: 'pound_force_per_square_foot',
      label: '磅力/平方英尺',
      symbol: 'psf',
      ratio: 47.880258980, // 1 psf = 47.880258980 Pa（基于标准重力）
    },
    inch_of_mercury: {
      id: 'inch_of_mercury',
      label: '英寸汞柱',
      symbol: 'inHg',
      ratio: 3386.389, // 1 inHg = 3386.389 Pa（在0°C时）
    },
    inch_of_water: {
      id: 'inch_of_water',
      label: '英寸水柱',
      symbol: 'inH₂O',
      ratio: 249.089, // 1 inH₂O = 249.089 Pa（在4°C时）
    },

    // 参考压力值：
    // 标准大气压：101325 Pa = 1 atm = 760 mmHg
    // 海平面气压：≈1013.25 hPa
    // 轮胎压力：≈200-350 kPa
    // 高压锅工作压力：≈100 kPa
    // 深海压力（10000m）：≈100 MPa
    // 人体血压（正常收缩压）：≈16 kPa (120 mmHg)
  },
} as const

export default pressure 