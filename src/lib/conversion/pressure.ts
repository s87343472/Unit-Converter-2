import type { ConversionCategory } from './types'

// 压力单位转换 (ISO 80000-4)
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'pascal',
  description: '压力是单位面积上的垂直力，基本单位是帕斯卡(Pa)。参考ISO 80000-4标准。',
  units: {
    // 基本单位
    pascal: {
      id: 'pascal',
      label: '帕斯卡',
      symbol: 'Pa',
      ratio: 1, // 基准单位（SI导出单位，1 Pa = 1 N/m²）
      category: 'metric'
    },

    // 公制压力单位
    exa_pascal: {
      id: 'exa_pascal',
      label: '艾帕',
      symbol: 'EPa',
      ratio: 1e18, // 1 EPa = 10¹⁸ Pa
      category: 'metric'
    },
    peta_pascal: {
      id: 'peta_pascal',
      label: '拍帕',
      symbol: 'PPa',
      ratio: 1e15, // 1 PPa = 10¹⁵ Pa
      category: 'metric'
    },
    tera_pascal: {
      id: 'tera_pascal',
      label: '太帕',
      symbol: 'TPa',
      ratio: 1e12, // 1 TPa = 10¹² Pa
      category: 'metric'
    },
    giga_pascal: {
      id: 'giga_pascal',
      label: '吉帕',
      symbol: 'GPa',
      ratio: 1e9, // 1 GPa = 10⁹ Pa
      category: 'metric'
    },
    mega_pascal: {
      id: 'mega_pascal',
      label: '兆帕',
      symbol: 'MPa',
      ratio: 1e6, // 1 MPa = 10⁶ Pa
      category: 'metric'
    },
    kilo_pascal: {
      id: 'kilo_pascal',
      label: '千帕',
      symbol: 'kPa',
      ratio: 1e3, // 1 kPa = 10³ Pa
      category: 'metric'
    },
    hecto_pascal: {
      id: 'hecto_pascal',
      label: '百帕',
      symbol: 'hPa',
      ratio: 1e2, // 1 hPa = 100 Pa
      category: 'metric'
    },
    milli_pascal: {
      id: 'milli_pascal',
      label: '毫帕',
      symbol: 'mPa',
      ratio: 1e-3, // 1 mPa = 10⁻³ Pa
      category: 'metric'
    },
    micro_pascal: {
      id: 'micro_pascal',
      label: '微帕',
      symbol: 'μPa',
      ratio: 1e-6, // 1 μPa = 10⁻⁶ Pa
      category: 'metric'
    },
    nano_pascal: {
      id: 'nano_pascal',
      label: '纳帕',
      symbol: 'nPa',
      ratio: 1e-9, // 1 nPa = 10⁻⁹ Pa
      category: 'metric'
    },
    pico_pascal: {
      id: 'pico_pascal',
      label: '皮帕',
      symbol: 'pPa',
      ratio: 1e-12, // 1 pPa = 10⁻¹² Pa
      category: 'metric'
    },
    femto_pascal: {
      id: 'femto_pascal',
      label: '飞帕',
      symbol: 'fPa',
      ratio: 1e-15, // 1 fPa = 10⁻¹⁵ Pa
      category: 'metric'
    },
    atto_pascal: {
      id: 'atto_pascal',
      label: '阿帕',
      symbol: 'aPa',
      ratio: 1e-18, // 1 aPa = 10⁻¹⁸ Pa
      category: 'metric'
    },

    // 大气压力单位
    bar: {
      id: 'bar',
      label: '巴',
      symbol: 'bar',
      ratio: 1e5, // 1 bar = 100000 Pa
      category: 'scientific'
    },
    milli_bar: {
      id: 'milli_bar',
      label: '毫巴',
      symbol: 'mbar',
      ratio: 1e2, // 1 mbar = 100 Pa
      category: 'scientific'
    },
    standard_atmosphere: {
      id: 'standard_atmosphere',
      label: '标准大气压',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101325 Pa（标准大气压定义）
      category: 'scientific'
    },
    technical_atmosphere: {
      id: 'technical_atmosphere',
      label: '工程大气压',
      symbol: 'at',
      ratio: 98066.5, // 1 at = 98066.5 Pa（基于1 kgf/cm²）
      category: 'scientific'
    },
    torr: {
      id: 'torr',
      label: '托',
      symbol: 'Torr',
      ratio: 133.322387415, // 1 Torr = 133.322387415 Pa（基于mmHg）
      category: 'scientific'
    },
    millimeter_mercury: {
      id: 'millimeter_mercury',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322387415, // 1 mmHg = 133.322387415 Pa
      category: 'traditional'
    },

    // 水柱压力单位
    centimeter_water: {
      id: 'centimeter_water',
      label: '厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O = 98.0665 Pa（4°C时）
      category: 'traditional'
    },
    millimeter_water: {
      id: 'millimeter_water',
      label: '毫米水柱',
      symbol: 'mmH₂O',
      ratio: 9.80665, // 1 mmH₂O = 9.80665 Pa
      category: 'traditional'
    },
    inch_water: {
      id: 'inch_water',
      label: '英寸水柱',
      symbol: 'inH₂O',
      ratio: 249.089, // 1 inH₂O = 249.089 Pa（4°C时）
      category: 'traditional'
    },
    foot_water: {
      id: 'foot_water',
      label: '英尺水柱',
      symbol: 'ftH₂O',
      ratio: 2989.067, // 1 ftH₂O = 2989.067 Pa
      category: 'traditional'
    },

    // 工程压力单位
    kilogram_force_per_square_centimeter: {
      id: 'kilogram_force_per_square_centimeter',
      label: '千克力/平方厘米',
      symbol: 'kgf/cm²',
      ratio: 98066.5, // 1 kgf/cm² = 98066.5 Pa
      category: 'traditional'
    },
    kilogram_force_per_square_meter: {
      id: 'kilogram_force_per_square_meter',
      label: '千克力/平方米',
      symbol: 'kgf/m²',
      ratio: 9.80665, // 1 kgf/m² = 9.80665 Pa
      category: 'traditional'
    },

    // 英制压力单位
    pound_force_per_square_inch: {
      id: 'pound_force_per_square_inch',
      label: '磅力/平方英寸',
      symbol: 'psi',
      ratio: 6894.757293168, // 1 psi = 6894.757293168 Pa
      category: 'imperial'
    },
    kilopound_force_per_square_inch: {
      id: 'kilopound_force_per_square_inch',
      label: '千磅力/平方英寸',
      symbol: 'ksi',
      ratio: 6894757.293168, // 1 ksi = 1000 psi
      category: 'imperial'
    },
    pound_force_per_square_foot: {
      id: 'pound_force_per_square_foot',
      label: '磅力/平方英尺',
      symbol: 'psf',
      ratio: 47.880258980, // 1 psf = 47.880258980 Pa
      category: 'imperial'
    },
    inch_mercury: {
      id: 'inch_mercury',
      label: '英寸汞柱',
      symbol: 'inHg',
      ratio: 3386.389, // 1 inHg = 3386.389 Pa（0°C时）
      category: 'imperial'
    }
  },

  // 知识点
  knowledge: {
    title: '压力知识',
    items: [
      'ISO 80000-4标准定义了压力的基本单位帕斯卡(Pa)，表示每平方米一牛顿的压力',
      '标准大气压定义为101325 Pa，是地球表面平均大气压力',
      '巴(bar)是工程中常用的压力单位，1 bar = 100000 Pa = 0.1 MPa',
      '血压通常用毫米汞柱(mmHg)表示，正常收缩压/舒张压约为120/80 mmHg',
      '轮胎压力通常用psi或kPa表示，乘用车通常为30-35 psi（约200-240 kPa）',
      '水深每增加10米，压力增加约1个大气压（约100 kPa）',
      '工业用高压设备通常用MPa表示压力，如高压锅炉可达10-30 MPa'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '压力换算提示',
    items: [
      '日常生活压力参考：\n  - 标准大气压：101.325 kPa\n  - 汽车轮胎：200-400 kPa\n  - 自行车轮胎：400-800 kPa\n  - 篮球：50-60 kPa',
      '医疗压力参考：\n  - 正常血压：120/80 mmHg\n  - 高血压：>140/90 mmHg\n  - 低血压：<90/60 mmHg\n  - 眼压：10-21 mmHg',
      '工业压力参考：\n  - 家用锅炉：0.1-0.3 MPa\n  - 工业蒸汽：1-3 MPa\n  - 高压锅炉：10-30 MPa\n  - 超高压反应器：100-300 MPa',
      '气象压力参考：\n  - 标准海平面：1013.25 hPa\n  - 台风中心：<950 hPa\n  - 高原地区：约700 hPa\n  - 珠穆朗玛峰顶：约330 hPa',
      '深海压力参考：\n  - 100米深：约1 MPa\n  - 1000米深：约10 MPa\n  - 马里亚纳海沟：约110 MPa\n  - 地球中心：约360 GPa',
      '真空技术参考：\n  - 低真空：100-0.1 Pa\n  - 高真空：0.1-10⁻⁵ Pa\n  - 超高真空：<10⁻⁷ Pa\n  - 极高真空：<10⁻¹⁰ Pa'
    ]
  }
}

export default pressure 