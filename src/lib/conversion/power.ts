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

    // 机械功率单位
    imperial_horsepower: {
      id: 'imperial_horsepower',
      label: '马力',
      symbol: 'hp',
      ratio: 745.7, // 1 hp ≈ 745.7 W
      category: 'imperial'
    },

    // 公制功率单位
    exa_watt: {
      id: 'exa_watt',
      label: '艾瓦',
      symbol: 'EW',
      ratio: 1e18, // 1 EW = 10¹⁸ W
      category: 'metric'
    },
    peta_watt: {
      id: 'peta_watt',
      label: '拍瓦',
      symbol: 'PW',
      ratio: 1e15, // 1 PW = 10¹⁵ W
      category: 'metric'
    },
    tera_watt: {
      id: 'tera_watt',
      label: '太瓦',
      symbol: 'TW',
      ratio: 1e12, // 1 TW = 10¹² W
      category: 'metric'
    },
    kilo_watt: {
      id: 'kilo_watt',
      label: '毫瓦',
      symbol: 'mW',
      ratio: 1e-3, // 1 mW = 10⁻³ W
      category: 'metric'
    },
    milli_watt: {
      id: 'milli_watt',
      label: '毫瓦',
      symbol: 'mW',
      ratio: 1e-3, // 1 mW = 10⁻³ W
      category: 'metric'
    },
    micro_watt: {
      id: 'micro_watt',
      label: '微瓦',
      symbol: 'μW',
      ratio: 1e-6, // 1 μW = 10⁻⁶ W
      category: 'metric'
    },
    nano_watt: {
      id: 'nano_watt',
      label: '纳瓦',
      symbol: 'nW',
      ratio: 1e-9, // 1 nW = 10⁻⁹ W
      category: 'metric'
    },
    pico_watt: {
      id: 'pico_watt',
      label: '皮瓦',
      symbol: 'pW',
      ratio: 1e-12, // 1 pW = 10⁻¹² W
      category: 'metric'
    },

    // 机械功率单位
    mechanical_horsepower: {
      id: 'mechanical_horsepower',
      label: '机械马力',
      symbol: 'hp',
      ratio: 745.699872, // 1 hp = 745.699872 W（英制马力标准）
      category: 'traditional'
    },
    mechanical_metric_horsepower: {
      id: 'mechanical_metric_horsepower',
      label: '公制马力',
      symbol: 'PS',
      ratio: 735.49875, // 1 PS = 735.49875 W（公制马力标准）
      category: 'traditional'
    },
    mechanical_boiler_horsepower: {
      id: 'mechanical_boiler_horsepower',
      label: '锅炉马力',
      symbol: 'hp(B)',
      ratio: 9809.5, // 1 hp(B) = 9809.5 W（锅炉马力标准）
      category: 'traditional'
    },

    // 热功率单位
    thermal_calorie_per_second: {
      id: 'thermal_calorie_per_second',
      label: '卡路里每秒',
      symbol: 'cal/s',
      ratio: 4.1868, // 1 cal/s = 4.1868 W（基于热力学卡）
      category: 'traditional'
    },
    thermal_kilocalorie_per_hour: {
      id: 'thermal_kilocalorie_per_hour',
      label: '千卡每小时',
      symbol: 'kcal/h',
      ratio: 1.163, // 1 kcal/h = 1.163 W（基于热力学千卡）
      category: 'traditional'
    },
    thermal_btu_per_hour: {
      id: 'thermal_btu_per_hour',
      label: '英热单位每小时',
      symbol: 'BTU/h',
      ratio: 0.29307107, // 1 BTU/h = 0.29307107 W（基于国际蒸汽表）
      category: 'traditional'
    },
    thermal_btu_per_minute: {
      id: 'thermal_btu_per_minute',
      label: '英热单位每分钟',
      symbol: 'BTU/min',
      ratio: 17.584264, // 1 BTU/min = 17.584264 W
      category: 'traditional'
    },
    thermal_btu_per_second: {
      id: 'thermal_btu_per_second',
      label: '英热单位每秒',
      symbol: 'BTU/s',
      ratio: 1055.05585, // 1 BTU/s = 1055.05585 W
      category: 'traditional'
    },
    thermal_ton_refrigeration: {
      id: 'thermal_ton_refrigeration',
      label: '制冷吨',
      symbol: 'RT',
      ratio: 3516.853, // 1 RT = 3516.853 W（基于融化1短吨冰所需功率）
      category: 'traditional'
    },

    // 电气功率单位
    electric_volt_ampere: {
      id: 'electric_volt_ampere',
      label: '伏安',
      symbol: 'VA',
      ratio: 1, // 1 VA = 1 W（假设功率因数为1）
      category: 'scientific'
    },
    electric_kilovolt_ampere: {
      id: 'electric_kilovolt_ampere',
      label: '千伏安',
      symbol: 'kVA',
      ratio: 1000, // 1 kVA = 1000 W（假设功率因数为1）
      category: 'scientific'
    },
    electric_megavolt_ampere: {
      id: 'electric_megavolt_ampere',
      label: '兆伏安',
      symbol: 'MVA',
      ratio: 1000000, // 1 MVA = 1000000 W（假设功率因数为1）
      category: 'scientific'
    },
    electric_var: {
      id: 'electric_var',
      label: '乏',
      symbol: 'var',
      ratio: 1, // 1 var = 1 W（假设功率因数为0）
      category: 'scientific'
    },
    electric_kilovar: {
      id: 'electric_kilovar',
      label: '千乏',
      symbol: 'kvar',
      ratio: 1000, // 1 kvar = 1000 W（假设功率因数为0）
      category: 'scientific'
    },
    electric_megavar: {
      id: 'electric_megavar',
      label: '兆乏',
      symbol: 'Mvar',
      ratio: 1000000, // 1 Mvar = 1000000 W（假设功率因数为0）
      category: 'scientific'
    },

    // 对数功率单位
    dbm: {
      id: 'dbm',
      label: '分贝毫瓦',
      symbol: 'dBm',
      ratio: 0.001, // 0 dBm = 1 mW = 0.001 W
      category: 'scientific'
    },
    dbw: {
      id: 'dbw',
      label: '分贝瓦',
      symbol: 'dBW',
      ratio: 1, // 0 dBW = 1 W
      category: 'scientific'
    },

    // 科学功率单位
    erg_per_second: {
      id: 'erg_per_second',
      label: '尔格每秒',
      symbol: 'erg/s',
      ratio: 1e-7, // 1 erg/s = 10⁻⁷ W（基于CGS单位制）
      category: 'scientific'
    },
    joule_per_second: {
      id: 'joule_per_second',
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
      '功率是单位时间内能量的转换率，SI单位是瓦特(W)，1瓦特等于1焦耳每秒(J/s)',
      '功率单位基于ISO 80000-4标准，包括公制、传统、工程和科学等多个单位系统',
      '电功率分为有功功率(W)、视在功率(VA)和无功功率(var)，它们之间存在功率三角形关系',
      '马力最初由詹姆斯·瓦特定义，用于比较蒸汽机与马的功率，1机械马力约等于746瓦特',
      '制冷吨源自工业革命时期，定义为24小时内融化一短吨(907kg)冰所需的制冷功率',
      '分贝功率单位(dBm, dBW)在通信工程中广泛使用，便于表示很大或很小的功率值',
      '功率的测量和转换需要考虑效率损失，实际功率通常小于理论功率'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '功率换算提示',
    items: [
      '家用电器功率参考：\n  - LED灯泡：5-15 W\n  - 电冰箱：100-400 W\n  - 微波炉：600-1500 W\n  - 电热水器：1500-4500 W\n  - 空调：1000-3000 W',
      '交通工具功率参考：\n  - 电动自行车：180-250 W\n  - 小型汽车：60-100 kW\n  - 大型卡车：300-500 kW\n  - 高铁动车组：4-8 MW\n  - 大型客机：50-100 MW',
      '发电设备功率参考：\n  - 家用太阳能：2-10 kW\n  - 风力发电机：2-5 MW\n  - 水力发电机组：100-700 MW\n  - 核电机组：1-1.7 GW\n  - 三峡电站总装机：22.5 GW',
      '工业设备功率参考：\n  - 小型电动机：0.1-1 kW\n  - 中型电动机：1-100 kW\n  - 大型电动机：100-1000 kW\n  - 工业冷水机：100-1000 RT\n  - 工业锅炉：1-50 MW',
      '通信设备功率参考：\n  - WiFi路由器：5-20 W\n  - 手机发射：0.1-2 W\n  - 基站发射：20-40 dBW\n  - 卫星通信：30-60 dBW\n  - 雷达系统：40-100 dBW',
      '人体与运动功率参考：\n  - 人体基础代谢：60-100 W\n  - 步行：150-200 W\n  - 跑步：400-800 W\n  - 自行车运动：100-400 W\n  - 专业运动员峰值：1000-2000 W'
    ]
  }
} as const

export default power 