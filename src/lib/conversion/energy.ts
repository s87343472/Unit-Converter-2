import type { ConversionCategory } from './types'

// 使用焦耳(J)作为基准单位
const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'joule',
  description: '能量单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    joule: {
      id: 'joule',
      label: '焦耳',
      symbol: 'J',
      ratio: 1, // 基准单位（SI导出单位，1 J = 1 N·m = 1 W·s）
      category: 'metric'
    },

    // 公制能量单位
    exa_joule: {
      id: 'exa_joule',
      label: '艾焦',
      symbol: 'EJ',
      ratio: 1e18, // 1 EJ = 10¹⁸ J
      category: 'metric'
    },
    peta_joule: {
      id: 'peta_joule',
      label: '拍焦',
      symbol: 'PJ',
      ratio: 1e15, // 1 PJ = 10¹⁵ J
      category: 'metric'
    },
    tera_joule: {
      id: 'tera_joule',
      label: '太焦',
      symbol: 'TJ',
      ratio: 1e12, // 1 TJ = 10¹² J
      category: 'metric'
    },
    giga_joule: {
      id: 'giga_joule',
      label: '吉焦',
      symbol: 'GJ',
      ratio: 1e9, // 1 GJ = 10⁹ J
      category: 'metric'
    },
    mega_joule: {
      id: 'mega_joule',
      label: '兆焦',
      symbol: 'MJ',
      ratio: 1e6, // 1 MJ = 10⁶ J
      category: 'metric'
    },
    kilo_joule: {
      id: 'kilo_joule',
      label: '千焦',
      symbol: 'kJ',
      ratio: 1e3, // 1 kJ = 10³ J
      category: 'metric'
    },
    milli_joule: {
      id: 'milli_joule',
      label: '毫焦',
      symbol: 'mJ',
      ratio: 1e-3, // 1 mJ = 10⁻³ J
      category: 'metric'
    },
    micro_joule: {
      id: 'micro_joule',
      label: '微焦',
      symbol: 'μJ',
      ratio: 1e-6, // 1 μJ = 10⁻⁶ J
      category: 'metric'
    },
    nano_joule: {
      id: 'nano_joule',
      label: '纳焦',
      symbol: 'nJ',
      ratio: 1e-9, // 1 nJ = 10⁻⁹ J
      category: 'metric'
    },
    
    // 热能单位
    thermal_calorie: {
      id: 'thermal_calorie',
      label: '卡路里',
      symbol: 'cal',
      ratio: 4.1868, // 1 cal = 4.1868 J（热力学卡定义）
      category: 'traditional'
    },
    thermal_kilocalorie: {
      id: 'thermal_kilocalorie',
      label: '千卡',
      symbol: 'kcal',
      ratio: 4186.8, // 1 kcal = 4186.8 J（食品能量常用单位）
      category: 'traditional'
    },
    thermal_british_thermal_unit: {
      id: 'thermal_british_thermal_unit',
      label: '英热单位',
      symbol: 'BTU',
      ratio: 1055.05585262, // 1 BTU = 1055.05585262 J（国际蒸汽表）
      category: 'traditional'
    },
    thermal_therm: {
      id: 'thermal_therm',
      label: '撒姆',
      symbol: 'thm',
      ratio: 105505585.262, // 1 thm = 100000 BTU（天然气计量单位）
      category: 'traditional'
    },
    thermal_thermie: {
      id: 'thermal_thermie',
      label: '热力',
      symbol: 'th',
      ratio: 4186800, // 1 th = 4.1868 MJ（欧洲传统热量单位）
      category: 'traditional'
    },
    quad: {
      id: 'quad',
      label: '夸德',
      symbol: 'quad',
      ratio: 1.055e18, // 1 quad = 10¹⁵ BTU（能源统计单位）
      category: 'traditional'
    },
    
    // 电能单位
    electric_watt_hour: {
      id: 'electric_watt_hour',
      label: '瓦时',
      symbol: 'Wh',
      ratio: 3600, // 1 Wh = 3600 J（1 W × 3600 s）
      category: 'traditional'
    },
    electric_kilowatt_hour: {
      id: 'electric_kilowatt_hour',
      label: '千瓦时',
      symbol: 'kWh',
      ratio: 3.6e6, // 1 kWh = 3.6×10⁶ J（常用电能计量单位）
      category: 'traditional'
    },
    electric_megawatt_hour: {
      id: 'electric_megawatt_hour',
      label: '兆瓦时',
      symbol: 'MWh',
      ratio: 3.6e9, // 1 MWh = 3.6×10⁹ J（工业用电计量单位）
      category: 'traditional'
    },
    electric_gigawatt_hour: {
      id: 'electric_gigawatt_hour',
      label: '吉瓦时',
      symbol: 'GWh',
      ratio: 3.6e12, // 1 GWh = 3.6×10¹² J
      category: 'traditional'
    },
    electric_terawatt_hour: {
      id: 'electric_terawatt_hour',
      label: '太瓦时',
      symbol: 'TWh',
      ratio: 3.6e15, // 1 TWh = 3.6×10¹⁵ J
      category: 'traditional'
    },
    
    // 机械能单位
    mechanical_foot_pound: {
      id: 'mechanical_foot_pound',
      label: '英尺磅',
      symbol: 'ft⋅lb',
      ratio: 1.3558179483314004, // 1 ft⋅lb = 1.3558179483314004 J（基于标准重力）
      category: 'traditional'
    },
    mechanical_kilogram_meter: {
      id: 'mechanical_kilogram_meter',
      label: '千克米',
      symbol: 'kg⋅m',
      ratio: 9.80665, // 1 kg⋅m = 9.80665 J（基于标准重力）
      category: 'traditional'
    },
    erg: {
      id: 'erg',
      label: '尔格',
      symbol: 'erg',
      ratio: 1e-7, // 1 erg = 10⁻⁷ J（CGS单位制）
      category: 'scientific'
    },
    
    // 原子能单位
    electron_volt: {
      id: 'electron_volt',
      label: '电子伏',
      symbol: 'eV',
      ratio: 1.602176634e-19, // 1 eV = 1.602176634×10⁻¹⁹ J（CODATA 2018）
      category: 'scientific'
    },
    kilo_electron_volt: {
      id: 'kilo_electron_volt',
      label: '千电子伏',
      symbol: 'keV',
      ratio: 1.602176634e-16, // 1 keV = 1.602176634×10⁻¹⁶ J
      category: 'scientific'
    },
    mega_electron_volt: {
      id: 'mega_electron_volt',
      label: '兆电子伏',
      symbol: 'MeV',
      ratio: 1.602176634e-13, // 1 MeV = 1.602176634×10⁻¹³ J
      category: 'scientific'
    },
    giga_electron_volt: {
      id: 'giga_electron_volt',
      label: '吉电子伏',
      symbol: 'GeV',
      ratio: 1.602176634e-10, // 1 GeV = 1.602176634×10⁻¹⁰ J
      category: 'scientific'
    },
    tera_electron_volt: {
      id: 'tera_electron_volt',
      label: '太电子伏',
      symbol: 'TeV',
      ratio: 1.602176634e-7, // 1 TeV = 1.602176634×10⁻⁷ J
      category: 'scientific'
    },
    
    // TNT当量单位
    gram_tnt: {
      id: 'gram_tnt',
      label: '克TNT当量',
      symbol: 'g TNT',
      ratio: 4184, // 1 g TNT = 4184 J（约定值）
      category: 'scientific'
    },
    kilogram_tnt: {
      id: 'kilogram_tnt',
      label: '千克TNT当量',
      symbol: 'kg TNT',
      ratio: 4.184e6, // 1 kg TNT = 4.184×10⁶ J
      category: 'scientific'
    },
    ton_tnt: {
      id: 'ton_tnt',
      label: '吨TNT当量',
      symbol: 't TNT',
      ratio: 4.184e9, // 1 t TNT = 4.184×10⁹ J
      category: 'scientific'
    },
    kiloton_tnt: {
      id: 'kiloton_tnt',
      label: '千吨TNT当量',
      symbol: 'kt TNT',
      ratio: 4.184e12, // 1 kt TNT = 4.184×10¹² J
      category: 'scientific'
    },
    megaton_tnt: {
      id: 'megaton_tnt',
      label: '兆吨TNT当量',
      symbol: 'Mt TNT',
      ratio: 4.184e15, // 1 Mt TNT = 4.184×10¹⁵ J
      category: 'scientific'
    },
    gigaton_tnt: {
      id: 'gigaton_tnt',
      label: '吉吨TNT当量',
      symbol: 'Gt TNT',
      ratio: 4.184e18, // 1 Gt TNT = 4.184×10¹⁸ J
      category: 'scientific'
    },

    // 石油能量单位
    barrel_oil_equivalent: {
      id: 'barrel_oil_equivalent',
      label: '桶油当量',
      symbol: 'BOE',
      ratio: 6.1178632e9, // 1 BOE = 6.1178632×10⁹ J（约定值）
      category: 'traditional'
    }
  },

  // 知识点
  knowledge: {
    title: '能量知识',
    items: [
      '焦耳是能量的SI导出单位，等于一牛顿的力使物体移动一米所做的功',
      '能量单位基于ISO 80000-4标准，包括公制、传统和科学等多个单位系统',
      '食品营养标签上的"卡路里"实际上是千卡路里，1千卡 = 4.184千焦',
      '电子伏特是粒子物理中常用的能量单位，表示一个电子在1伏特电势差下获得的能量',
      '桶油当量(BOE)用于石油工业，表示一桶原油的能量含量，约等于6.1吉焦',
      'TNT当量用于衡量爆炸威力，1克TNT爆炸释放约4.184千焦的能量',
      '千瓦时是家庭用电计量的常用单位，1千瓦时 = 3.6兆焦'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '能量换算提示',
    items: [
      '日常生活能量参考：\n  - 一个苹果：约400千焦（95千卡）\n  - 一度电：3600千焦（1千瓦时）\n  - 一升汽油：约34.2兆焦\n  - 一天饮食：8000-10000千焦（2000-2400千卡）',
      '科学领域能量参考：\n  - 氢原子电离能：13.6电子伏特\n  - 铀235裂变：约200兆电子伏特/核子\n  - 质子对撞机：13太电子伏特\n  - 宇宙射线：可达10²⁰电子伏特',
      '爆炸能量参考：\n  - 手榴弹：约1兆焦（0.25千克TNT）\n  - 常规炸弹：约4.184吉焦（1吨TNT）\n  - 广岛原子弹：约63太焦（15千吨TNT）\n  - 最大核弹：约210拍焦（50兆吨TNT）',
      '自然现象能量参考：\n  - 闪电：约500兆焦\n  - 小型地震：约1太焦\n  - 8级地震：约1拍焦\n  - 飓风（每秒）：约10拍焦',
      '工业能源参考：\n  - 工业锅炉（每小时）：约10吉焦\n  - 核电站（每天）：约1000太焦\n  - 全球年耗电量：约160艾焦\n  - 太阳辐射地球（每年）：约5.5艾焦'
    ]
  }
} as const

export default energy 