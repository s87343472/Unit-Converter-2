import type { ConversionCategory } from './types'

// 使用瓦特(W)作为基准单位
const power: ConversionCategory = {
  id: 'power',
  baseUnit: 'watt',
  units: {
    // 基本单位
    watt: {
      id: 'watt',
      label: '瓦特',
      symbol: 'W',
      ratio: 1 // 基准单位（SI导出单位，1 W = 1 J/s）
    },

    // 公制功率单位
    kilowatt: {
      id: 'kilowatt',
      label: '千瓦',
      symbol: 'kW',
      ratio: 1000 // 1 kW = 1000 W（基本换算关系）
    },
    megawatt: {
      id: 'megawatt',
      label: '兆瓦',
      symbol: 'MW',
      ratio: 1000000 // 1 MW = 1000000 W（基本换算关系）
    },
    gigawatt: {
      id: 'gigawatt',
      label: '吉瓦',
      symbol: 'GW',
      ratio: 1000000000 // 1 GW = 1000000000 W（基本换算关系）
    },
    milliwatt: {
      id: 'milliwatt',
      label: '毫瓦',
      symbol: 'mW',
      ratio: 0.001 // 1 mW = 0.001 W（基本换算关系）
    },

    // 机械功率单位
    horsepower_mechanical: {
      id: 'horsepower_mechanical',
      label: '机械马力',
      symbol: 'hp',
      ratio: 745.699872 // 1 hp = 745.699872 W（英制马力标准）
    },
    horsepower_metric: {
      id: 'horsepower_metric',
      label: '公制马力',
      symbol: 'PS',
      ratio: 735.49875 // 1 PS = 735.49875 W（公制马力标准）
    },

    // 热功率单位
    calorie_per_second: {
      id: 'calorie_per_second',
      label: '卡路里/秒',
      symbol: 'cal/s',
      ratio: 4.1868 // 1 cal/s = 4.1868 W（基于热力学卡）
    },
    kilocalorie_per_hour: {
      id: 'kilocalorie_per_hour',
      label: '千卡/小时',
      symbol: 'kcal/h',
      ratio: 1.163 // 1 kcal/h = 1.163 W（基于热力学千卡）
    },
    british_thermal_unit_per_hour: {
      id: 'british_thermal_unit_per_hour',
      label: '英热单位/小时',
      symbol: 'BTU/h',
      ratio: 0.29307107 // 1 BTU/h = 0.29307107 W（基于国际蒸汽表）
    },
    ton_of_refrigeration: {
      id: 'ton_of_refrigeration',
      label: '制冷吨',
      symbol: 'RT',
      ratio: 3516.853 // 1 RT = 3516.853 W（基于融化1短吨冰所需功率）
    },

    // 电气功率单位
    kilovolt_ampere: {
      id: 'kilovolt_ampere',
      label: '千伏安',
      symbol: 'kVA',
      ratio: 1000 // 1 kVA = 1000 W（假设功率因数为1）
    },
    kilovar: {
      id: 'kilovar',
      label: '千乏',
      symbol: 'kvar',
      ratio: 1000 // 1 kvar = 1000 W（假设功率因数为0）
    },
    megavolt_ampere: {
      id: 'megavolt_ampere',
      label: '兆伏安',
      symbol: 'MVA',
      ratio: 1000000 // 1 MVA = 1000000 W（假设功率因数为1）
    },

    // 科学功率单位
    erg_per_second: {
      id: 'erg_per_second',
      label: '尔格/秒',
      symbol: 'erg/s',
      ratio: 0.0000001 // 1 erg/s = 0.0000001 W（基于CGS单位制）
    },
    joule_per_second: {
      id: 'joule_per_second',
      label: '焦耳/秒',
      symbol: 'J/s',
      ratio: 1 // 1 J/s = 1 W（基本定义）
    }

    // 参考功率值：
    // 人体静息功率：≈100 W
    // 自行车运动：≈100-200 W
    // 家用电器：
    //   - LED灯泡：5-15 W
    //   - 电冰箱：100-400 W
    //   - 微波炉：600-1500 W
    // 汽车发动机：≈75-750 kW（100-1000 hp）
    // 风力发电机：2-5 MW
    // 核电站机组：≈1 GW
  },
} as const

export default power 