import type { ConversionCategory } from './types'

// 使用焦耳(J)作为基准单位
const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'metric_joule',
  description: '能量单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    metric_joule: {
      id: 'metric_joule',
      label: '焦耳',
      symbol: 'J',
      ratio: 1, // 基准单位（SI导出单位，1 J = 1 N·m = 1 W·s）
      category: 'metric'
    },

    // 公制能量单位
    metric_exajoule: {
      id: 'metric_exajoule',
      label: '艾焦',
      symbol: 'EJ',
      ratio: 1e18, // 1 EJ = 10¹⁸ J
      category: 'metric'
    },
    metric_petajoule: {
      id: 'metric_petajoule',
      label: '拍焦',
      symbol: 'PJ',
      ratio: 1e15, // 1 PJ = 10¹⁵ J
      category: 'metric'
    },
    metric_terajoule: {
      id: 'metric_terajoule',
      label: '太焦',
      symbol: 'TJ',
      ratio: 1e12, // 1 TJ = 10¹² J
      category: 'metric'
    },
    metric_gigajoule: {
      id: 'metric_gigajoule',
      label: '吉焦',
      symbol: 'GJ',
      ratio: 1e9, // 1 GJ = 10⁹ J
      category: 'metric'
    },
    metric_megajoule: {
      id: 'metric_megajoule',
      label: '兆焦',
      symbol: 'MJ',
      ratio: 1e6, // 1 MJ = 10⁶ J
      category: 'metric'
    },
    metric_kilojoule: {
      id: 'metric_kilojoule',
      label: '千焦',
      symbol: 'kJ',
      ratio: 1e3, // 1 kJ = 10³ J
      category: 'metric'
    },
    metric_millijoule: {
      id: 'metric_millijoule',
      label: '毫焦',
      symbol: 'mJ',
      ratio: 1e-3, // 1 mJ = 10⁻³ J
      category: 'metric'
    },
    metric_microjoule: {
      id: 'metric_microjoule',
      label: '微焦',
      symbol: 'μJ',
      ratio: 1e-6, // 1 μJ = 10⁻⁶ J
      category: 'metric'
    },
    metric_nanojoule: {
      id: 'metric_nanojoule',
      label: '纳焦',
      symbol: 'nJ',
      ratio: 1e-9, // 1 nJ = 10⁻⁹ J
      category: 'metric'
    },
    
    // 热能单位
    scientific_calorie: {
      id: 'scientific_calorie',
      label: '卡路里',
      symbol: 'cal',
      ratio: 4.1868, // 1 cal = 4.1868 J（热力学卡定义）
      category: 'scientific'
    },
    scientific_kilocalorie: {
      id: 'scientific_kilocalorie',
      label: '千卡',
      symbol: 'kcal',
      ratio: 4186.8, // 1 kcal = 4186.8 J（食品能量常用单位）
      category: 'scientific'
    },
    imperial_british_thermal_unit: {
      id: 'imperial_british_thermal_unit',
      label: '英热单位',
      symbol: 'BTU',
      ratio: 1055.05585262, // 1 BTU = 1055.05585262 J（国际蒸汽表）
      category: 'imperial'
    },
    scientific_therm: {
      id: 'scientific_therm',
      label: '撒姆',
      symbol: 'thm',
      ratio: 105505585.262, // 1 thm = 100000 BTU（天然气计量单位）
      category: 'scientific'
    },
    scientific_thermie: {
      id: 'scientific_thermie',
      label: '热力',
      symbol: 'th',
      ratio: 4186800, // 1 th = 4.1868 MJ（欧洲传统热量单位）
      category: 'scientific'
    },
    scientific_quad: {
      id: 'scientific_quad',
      label: '夸德',
      symbol: 'quad',
      ratio: 1.055e18, // 1 quad = 10¹⁵ BTU（能源统计单位）
      category: 'scientific'
    },
    
    // 电能单位
    scientific_watt_hour: {
      id: 'scientific_watt_hour',
      label: '瓦时',
      symbol: 'Wh',
      ratio: 3600, // 1 Wh = 3600 J（1 W × 3600 s）
      category: 'scientific'
    },
    scientific_kilowatt_hour: {
      id: 'scientific_kilowatt_hour',
      label: '千瓦时',
      symbol: 'kWh',
      ratio: 3.6e6, // 1 kWh = 3.6×10⁶ J（常用电能计量单位）
      category: 'scientific'
    },
    scientific_megawatt_hour: {
      id: 'scientific_megawatt_hour',
      label: '兆瓦时',
      symbol: 'MWh',
      ratio: 3.6e9, // 1 MWh = 3.6×10⁹ J（工业用电计量单位）
      category: 'scientific'
    },
    scientific_gigawatt_hour: {
      id: 'scientific_gigawatt_hour',
      label: '吉瓦时',
      symbol: 'GWh',
      ratio: 3.6e12, // 1 GWh = 3.6×10¹² J
      category: 'scientific'
    },
    scientific_terawatt_hour: {
      id: 'scientific_terawatt_hour',
      label: '太瓦时',
      symbol: 'TWh',
      ratio: 3.6e15, // 1 TWh = 3.6×10¹⁵ J
      category: 'scientific'
    },
    
    // 机械能单位
    imperial_foot_pound: {
      id: 'imperial_foot_pound',
      label: '英尺磅',
      symbol: 'ft⋅lb',
      ratio: 1.3558179483314004, // 1 ft⋅lb = 1.3558179483314004 J（基于标准重力）
      category: 'imperial'
    },
    metric_kilogram_meter: {
      id: 'metric_kilogram_meter',
      label: '千克米',
      symbol: 'kg⋅m',
      ratio: 9.80665, // 1 kg⋅m = 9.80665 J（基于标准重力）
      category: 'metric'
    },
    scientific_erg: {
      id: 'scientific_erg',
      label: '尔格',
      symbol: 'erg',
      ratio: 1e-7, // 1 erg = 10⁻⁷ J（CGS单位制）
      category: 'scientific'
    },
    
    // 原子能单位
    scientific_electron_volt: {
      id: 'scientific_electron_volt',
      label: '电子伏',
      symbol: 'eV',
      ratio: 1.602176634e-19, // 1 eV = 1.602176634×10⁻¹⁹ J（CODATA 2018）
      category: 'scientific'
    },
    scientific_kiloelectron_volt: {
      id: 'scientific_kiloelectron_volt',
      label: '千电子伏',
      symbol: 'keV',
      ratio: 1.602176634e-16, // 1 keV = 1.602176634×10⁻¹⁶ J
      category: 'scientific'
    },
    scientific_megaelectron_volt: {
      id: 'scientific_megaelectron_volt',
      label: '兆电子伏',
      symbol: 'MeV',
      ratio: 1.602176634e-13, // 1 MeV = 1.602176634×10⁻¹³ J
      category: 'scientific'
    },
    scientific_gigaelectron_volt: {
      id: 'scientific_gigaelectron_volt',
      label: '吉电子伏',
      symbol: 'GeV',
      ratio: 1.602176634e-10, // 1 GeV = 1.602176634×10⁻¹⁰ J
      category: 'scientific'
    },
    scientific_teraelectron_volt: {
      id: 'scientific_teraelectron_volt',
      label: '太电子伏',
      symbol: 'TeV',
      ratio: 1.602176634e-7, // 1 TeV = 1.602176634×10⁻⁷ J
      category: 'scientific'
    },
    
    // TNT当量单位
    scientific_gram_tnt: {
      id: 'scientific_gram_tnt',
      label: '克TNT当量',
      symbol: 'g TNT',
      ratio: 4184, // 1 g TNT = 4184 J（约定值）
      category: 'scientific'
    },
    scientific_kilogram_tnt: {
      id: 'scientific_kilogram_tnt',
      label: '千克TNT当量',
      symbol: 'kg TNT',
      ratio: 4.184e6, // 1 kg TNT = 4.184×10⁶ J
      category: 'scientific'
    },
    scientific_ton_tnt: {
      id: 'scientific_ton_tnt',
      label: '吨TNT当量',
      symbol: 't TNT',
      ratio: 4.184e9, // 1 t TNT = 4.184×10⁹ J
      category: 'scientific'
    },
    scientific_kiloton_tnt: {
      id: 'scientific_kiloton_tnt',
      label: '千吨TNT当量',
      symbol: 'kt TNT',
      ratio: 4.184e12, // 1 kt TNT = 4.184×10¹² J
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '能量知识',
    items: [
      '焦耳(J)是SI导出单位，定义为1牛顿的力移动1米距离所做的功。',
      '卡路里和英热单位是传统热量单位，1卡路里约等于4.1868焦耳。',
      '电子伏(eV)是原子物理中常用的能量单位，1eV约等于1.602×10⁻¹⁹焦耳。',
      'TNT当量用于表示爆炸威力，1克TNT当量约等于4184焦耳。',
      '千瓦时(kWh)是常用的电能计量单位，1kWh等于3.6×10⁶焦耳。'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '能量换算提示',
    items: [
      '日常能量参考：\n  - 一个鸡蛋：约80千卡\n  - 一块巧克力：约500千卡\n  - 一度电：1千瓦时\n  - 一升汽油：约34兆焦',
      '工业能量参考：\n  - 小型锅炉：1-10吉焦/小时\n  - 大型发电机：1-10太瓦时/年\n  - 工业电机：10-1000千瓦时/天',
      '核能参考：\n  - 核裂变：约200兆电子伏/原子\n  - 核电站：20-30太瓦时/年\n  - 核弹：1-50兆吨TNT当量',
      '自然能量参考：\n  - 闪电：1-10吉焦\n  - 小型地震：1-100太焦\n  - 飓风：10-100艾焦/天',
      '科技能量参考：\n  - 激光笔：1-5焦耳/秒\n  - 大型粒子对撞机：10太电子伏\n  - 太阳能电池板：100-400瓦时/天'
    ]
  }
} as const

export default energy 