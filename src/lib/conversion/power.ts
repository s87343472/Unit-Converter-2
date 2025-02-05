import type { ConversionCategory } from './types'

// 使用瓦特(W)作为基准单位
const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'metric_watt',
  description: '功率单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    metric_watt: {
      id: 'metric_watt',
      label: '瓦特',
      symbol: 'W',
      ratio: 1, // 基准单位（SI导出单位，1 W = 1 J/s）
      category: 'metric'
    },

    // 公制功率单位
    metric_kilowatt: {
      id: 'metric_kilowatt',
      label: '千瓦',
      symbol: 'kW',
      ratio: 1e3, // 1 kW = 1000 W
      category: 'metric'
    },
    metric_megawatt: {
      id: 'metric_megawatt',
      label: '兆瓦',
      symbol: 'MW',
      ratio: 1e6, // 1 MW = 1,000,000 W
      category: 'metric'
    },
    metric_gigawatt: {
      id: 'metric_gigawatt',
      label: '吉瓦',
      symbol: 'GW',
      ratio: 1e9, // 1 GW = 1,000,000,000 W
      category: 'metric'
    },
    metric_exawatt: {
      id: 'metric_exawatt',
      label: '艾瓦',
      symbol: 'EW',
      ratio: 1e18, // 1 EW = 10¹⁸ W
      category: 'metric'
    },
    metric_petawatt: {
      id: 'metric_petawatt',
      label: '拍瓦',
      symbol: 'PW',
      ratio: 1e15, // 1 PW = 10¹⁵ W
      category: 'metric'
    },
    metric_terawatt: {
      id: 'metric_terawatt',
      label: '太瓦',
      symbol: 'TW',
      ratio: 1e12, // 1 TW = 10¹² W
      category: 'metric'
    },
    metric_milliwatt: {
      id: 'metric_milliwatt',
      label: '毫瓦',
      symbol: 'mW',
      ratio: 1e-3, // 1 mW = 10⁻³ W
      category: 'metric'
    },
    metric_microwatt: {
      id: 'metric_microwatt',
      label: '微瓦',
      symbol: 'μW',
      ratio: 1e-6, // 1 μW = 10⁻⁶ W
      category: 'metric'
    },
    metric_nanowatt: {
      id: 'metric_nanowatt',
      label: '纳瓦',
      symbol: 'nW',
      ratio: 1e-9, // 1 nW = 10⁻⁹ W
      category: 'metric'
    },
    metric_picowatt: {
      id: 'metric_picowatt',
      label: '皮瓦',
      symbol: 'pW',
      ratio: 1e-12, // 1 pW = 10⁻¹² W
      category: 'metric'
    },

    // 机械功率单位
    imperial_horsepower: {
      id: 'imperial_horsepower',
      label: '英制马力',
      symbol: 'hp',
      ratio: 745.699872, // 1 hp = 745.699872 W（英制马力标准）
      category: 'imperial'
    },
    metric_horsepower: {
      id: 'metric_horsepower',
      label: '公制马力',
      symbol: 'PS',
      ratio: 735.49875, // 1 PS = 735.49875 W（公制马力标准）
      category: 'metric'
    },
    industrial_boiler_horsepower: {
      id: 'industrial_boiler_horsepower',
      label: '锅炉马力',
      symbol: 'hp(B)',
      ratio: 9809.5, // 1 hp(B) = 9809.5 W（锅炉马力标准）
      category: 'industrial'
    },

    // 热功率单位
    scientific_calorie_per_second: {
      id: 'scientific_calorie_per_second',
      label: '卡路里每秒',
      symbol: 'cal/s',
      ratio: 4.1868, // 1 cal/s = 4.1868 W（基于热力学卡）
      category: 'scientific'
    },
    scientific_kilocalorie_per_hour: {
      id: 'scientific_kilocalorie_per_hour',
      label: '千卡每小时',
      symbol: 'kcal/h',
      ratio: 1.163, // 1 kcal/h = 1.163 W（基于热力学千卡）
      category: 'scientific'
    },
    imperial_btu_per_hour: {
      id: 'imperial_btu_per_hour',
      label: '英热单位每小时',
      symbol: 'BTU/h',
      ratio: 0.29307107, // 1 BTU/h = 0.29307107 W（基于国际蒸汽表）
      category: 'imperial'
    },
    imperial_btu_per_minute: {
      id: 'imperial_btu_per_minute',
      label: '英热单位每分钟',
      symbol: 'BTU/min',
      ratio: 17.584264, // 1 BTU/min = 17.584264 W
      category: 'imperial'
    },
    imperial_btu_per_second: {
      id: 'imperial_btu_per_second',
      label: '英热单位每秒',
      symbol: 'BTU/s',
      ratio: 1055.05585, // 1 BTU/s = 1055.05585 W
      category: 'imperial'
    },
    industrial_ton_refrigeration: {
      id: 'industrial_ton_refrigeration',
      label: '制冷吨',
      symbol: 'RT',
      ratio: 3516.853, // 1 RT = 3516.853 W（基于融化1短吨冰所需功率）
      category: 'industrial'
    },

    // 电气功率单位
    scientific_volt_ampere: {
      id: 'scientific_volt_ampere',
      label: '伏安',
      symbol: 'VA',
      ratio: 1, // 1 VA = 1 W（假设功率因数为1）
      category: 'scientific'
    },
    scientific_kilovolt_ampere: {
      id: 'scientific_kilovolt_ampere',
      label: '千伏安',
      symbol: 'kVA',
      ratio: 1000, // 1 kVA = 1000 W（假设功率因数为1）
      category: 'scientific'
    },
    scientific_megavolt_ampere: {
      id: 'scientific_megavolt_ampere',
      label: '兆伏安',
      symbol: 'MVA',
      ratio: 1000000, // 1 MVA = 1000000 W（假设功率因数为1）
      category: 'scientific'
    },
    scientific_var: {
      id: 'scientific_var',
      label: '乏',
      symbol: 'var',
      ratio: 1, // 1 var = 1 W（假设功率因数为0）
      category: 'scientific'
    },
    scientific_kilovar: {
      id: 'scientific_kilovar',
      label: '千乏',
      symbol: 'kvar',
      ratio: 1000, // 1 kvar = 1000 W（假设功率因数为0）
      category: 'scientific'
    },
    scientific_megavar: {
      id: 'scientific_megavar',
      label: '兆乏',
      symbol: 'Mvar',
      ratio: 1000000, // 1 Mvar = 1000000 W（假设功率因数为0）
      category: 'scientific'
    },

    // 对数功率单位
    scientific_dbm: {
      id: 'scientific_dbm',
      label: '分贝毫瓦',
      symbol: 'dBm',
      ratio: 0.001, // 0 dBm = 1 mW = 0.001 W
      category: 'scientific'
    },
    scientific_dbw: {
      id: 'scientific_dbw',
      label: '分贝瓦',
      symbol: 'dBW',
      ratio: 1, // 0 dBW = 1 W
      category: 'scientific'
    },

    // 科学功率单位
    scientific_erg_per_second: {
      id: 'scientific_erg_per_second',
      label: '尔格每秒',
      symbol: 'erg/s',
      ratio: 1e-7, // 1 erg/s = 10⁻⁷ W（基于CGS单位制）
      category: 'scientific'
    },
    scientific_joule_per_second: {
      id: 'scientific_joule_per_second',
      label: '焦耳每秒',
      symbol: 'J/s',
      ratio: 1, // 1 J/s = 1 W（基本定义）
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '功率知识',
    items: [
      '瓦特(W)是SI导出单位，定义为每秒钟传输或消耗1焦耳能量的功率。',
      '马力有多种定义：英制马力(745.7W)、公制马力(735.5W)、锅炉马力(9809.5W)等。',
      '电气功率包括有功功率(W)、视在功率(VA)和无功功率(var)。',
      '热功率单位常用于空调制冷和供暖系统，1制冷吨约等于3.517千瓦。',
      '分贝功率单位(dBm、dBW)常用于通信系统，是对数标度的功率单位。'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '功率换算提示',
    items: [
      '家用电器功率参考：\n  - LED灯泡：5-15 W\n  - 电视机：100-300 W\n  - 电冰箱：150-400 W\n  - 空调：1000-2000 W',
      '工业设备功率参考：\n  - 小型电动机：0.5-5 kW\n  - 工业空压机：10-100 kW\n  - 大型电炉：100-1000 kW',
      '发电设备功率参考：\n  - 家用太阳能：2-10 kW\n  - 风力发电机：2-5 MW\n  - 核电机组：500-1500 MW',
      '通信设备功率参考：\n  - WiFi路由器：5-20 W\n  - 手机发射：0.1-2 W\n  - 基站发射：20-100 W',
      '交通工具功率参考：\n  - 电动自行车：250-500 W\n  - 电动汽车：50-200 kW\n  - 高铁动力：5-20 MW'
    ]
  }
} as const

export default power 