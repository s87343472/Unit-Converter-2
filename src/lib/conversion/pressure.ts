import type { ConversionCategory } from './types'

// 使用帕斯卡(Pa)作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'metric_pascal',
  description: '压力单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    metric_pascal: {
      id: 'metric_pascal',
      label: '帕斯卡',
      symbol: 'Pa',
      ratio: 1, // 基准单位（SI基本单位，1 Pa = 1 N/m²）
      category: 'metric'
    },

    // 公制压力单位
    metric_kilopascal: {
      id: 'metric_kilopascal',
      label: '千帕',
      symbol: 'kPa',
      ratio: 1e3, // 1 kPa = 1,000 Pa
      category: 'metric'
    },
    metric_megapascal: {
      id: 'metric_megapascal',
      label: '兆帕',
      symbol: 'MPa',
      ratio: 1e6, // 1 MPa = 1,000,000 Pa
      category: 'metric'
    },
    metric_hectopascal: {
      id: 'metric_hectopascal',
      label: '百帕',
      symbol: 'hPa',
      ratio: 1e2, // 1 hPa = 100 Pa
      category: 'metric'
    },

    // 工业压力单位
    industrial_bar: {
      id: 'industrial_bar',
      label: '巴',
      symbol: 'bar',
      ratio: 1e5, // 1 bar = 100,000 Pa
      category: 'industrial'
    },
    industrial_millibar: {
      id: 'industrial_millibar',
      label: '毫巴',
      symbol: 'mbar',
      ratio: 1e2, // 1 mbar = 100 Pa
      category: 'industrial'
    },

    // 科学压力单位
    scientific_atmosphere: {
      id: 'scientific_atmosphere',
      label: '标准大气压',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101,325 Pa
      category: 'scientific'
    },
    scientific_torr: {
      id: 'scientific_torr',
      label: '托',
      symbol: 'Torr',
      ratio: 133.322, // 1 Torr ≈ 133.322 Pa
      category: 'scientific'
    },

    // 医学压力单位（使用traditional类别）
    medical_millimeter_of_mercury: {
      id: 'medical_millimeter_of_mercury',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa
      category: 'traditional'
    },
    medical_centimeter_of_water: {
      id: 'medical_centimeter_of_water',
      label: '厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O = 98.0665 Pa
      category: 'traditional'
    },

    // 英制压力单位
    imperial_pound_per_square_inch: {
      id: 'imperial_pound_per_square_inch',
      label: '磅力/平方英寸',
      symbol: 'psi',
      ratio: 6894.757293168, // 1 psi = 6,894.757293168 Pa
      category: 'imperial'
    },
    imperial_pound_per_square_foot: {
      id: 'imperial_pound_per_square_foot',
      label: '磅力/平方英尺',
      symbol: 'psf',
      ratio: 47.88025898, // 1 psf = 47.88025898 Pa
      category: 'imperial'
    },

    // 工程压力单位（使用scientific类别）
    engineering_kilopound_per_square_inch: {
      id: 'engineering_kilopound_per_square_inch',
      label: '千磅力/平方英寸',
      symbol: 'ksi',
      ratio: 6894757.293168, // 1 ksi = 6,894,757.293168 Pa
      category: 'scientific'
    },
    engineering_centimeter_of_water: {
      id: 'engineering_centimeter_of_water',
      label: '工程厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O = 98.0665 Pa
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '压力知识',
    items: [
      '帕斯卡（Pa）是SI基本压力单位，定义为每平方米一牛顿的压力（1 Pa = 1 N/m²）',
      '标准大气压定义为101325 Pa，约等于1个大气压（atm）',
      '巴（bar）是常用的工程压力单位，1 bar = 100000 Pa = 0.1 MPa',
      '血压通常用毫米汞柱（mmHg）表示，正常收缩压约为120 mmHg',
      '轮胎压力通常用psi或kPa表示，乘客车通常为30-35 psi（约200-240 kPa）',
      '水深每增加10米，压力增加约1个大气压（约100 kPa）',
      '工业用高压设备通常用MPa表示压力，如高压锅炉可达10-30 MPa'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '压力换算提示',
    items: [
      '日常生活压力参考：\n  - 标准大气压：101.325 kPa\n  - 汽车轮胎：200-240 kPa\n  - 自行车轮胎：300-400 kPa',
      '医疗压力参考：\n  - 正常血压：120/80 mmHg\n  - 高血压：>140/90 mmHg\n  - 低血压：<90/60 mmHg',
      '工业压力参考：\n  - 家用锅炉：0.1-0.3 MPa\n  - 工业蒸汽：1-3 MPa\n  - 高压锅炉：10-30 MPa',
      '气象压力参考：\n  - 标准海平面：1013.25 hPa\n  - 台风中心：<950 hPa\n  - 高原地区：约700 hPa',
      '深海压力参考：\n  - 100米深：约1 MPa\n  - 1000米深：约10 MPa\n  - 马里亚纳海沟：约110 MPa',
      '真空技术参考：\n  - 低真空：100-0.1 Pa\n  - 高真空：0.1-10⁻⁵ Pa\n  - 超高真空：<10⁻⁷ Pa'
    ]
  }
} as const

export default pressure 