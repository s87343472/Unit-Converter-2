import type { ConversionCategory } from './types'

// 使用焦耳(J)作为基准单位
const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'joule',
  units: {
    // 基本单位
    joule: {
      id: 'joule',
      label: '焦耳',
      symbol: 'J',
      ratio: 1 // 基准单位（SI导出单位，1 J = 1 N·m = 1 W·s）
    },

    // 公制能量单位
    kilojoule: {
      id: 'kilojoule',
      label: '千焦',
      symbol: 'kJ',
      ratio: 1000 // 1 kJ = 1000 J（基本换算关系）
    },
    megajoule: {
      id: 'megajoule',
      label: '兆焦',
      symbol: 'MJ',
      ratio: 1000000 // 1 MJ = 1000000 J（基本换算关系）
    },
    gigajoule: {
      id: 'gigajoule',
      label: '吉焦',
      symbol: 'GJ',
      ratio: 1000000000 // 1 GJ = 1000000000 J（基本换算关系）
    },
    
    // 热能单位
    calorie: {
      id: 'calorie',
      label: '卡路里',
      symbol: 'cal',
      ratio: 4.1868 // 1 cal = 4.1868 J（热力学卡定义）
    },
    kilocalorie: {
      id: 'kilocalorie',
      label: '千卡',
      symbol: 'kcal',
      ratio: 4186.8 // 1 kcal = 4186.8 J（食品能量常用单位）
    },
    british_thermal_unit: {
      id: 'british_thermal_unit',
      label: '英热单位',
      symbol: 'BTU',
      ratio: 1055.05585262 // 1 BTU = 1055.05585262 J（国际蒸汽表）
    },
    therm: {
      id: 'therm',
      label: '撒姆',
      symbol: 'thm',
      ratio: 105505585.262 // 1 thm = 100000 BTU（天然气计量单位）
    },
    
    // 电能单位
    watt_hour: {
      id: 'watt_hour',
      label: '瓦时',
      symbol: 'Wh',
      ratio: 3600 // 1 Wh = 3600 J（1 W × 3600 s）
    },
    kilowatt_hour: {
      id: 'kilowatt_hour',
      label: '千瓦时',
      symbol: 'kWh',
      ratio: 3600000 // 1 kWh = 3600000 J（常用电能计量单位）
    },
    megawatt_hour: {
      id: 'megawatt_hour',
      label: '兆瓦时',
      symbol: 'MWh',
      ratio: 3600000000 // 1 MWh = 3600000000 J（工业用电计量单位）
    },
    
    // 机械能单位
    foot_pound: {
      id: 'foot_pound',
      label: '英尺磅',
      symbol: 'ft⋅lb',
      ratio: 1.3558179483314004 // 1 ft⋅lb = 1.3558179483314004 J（基于标准重力）
    },
    kilogram_meter: {
      id: 'kilogram_meter',
      label: '千克米',
      symbol: 'kg⋅m',
      ratio: 9.80665 // 1 kg⋅m = 9.80665 J（基于标准重力）
    },
    erg: {
      id: 'erg',
      label: '尔格',
      symbol: 'erg',
      ratio: 0.0000001 // 1 erg = 0.0000001 J（CGS单位制）
    },
    
    // 原子能单位
    electron_volt: {
      id: 'electron_volt',
      label: '电子伏',
      symbol: 'eV',
      ratio: 1.602176634e-19 // 1 eV = 1.602176634×10⁻¹⁹ J（CODATA 2018）
    },
    kiloelectron_volt: {
      id: 'kiloelectron_volt',
      label: '千电子伏',
      symbol: 'keV',
      ratio: 1.602176634e-16 // 1 keV = 1.602176634×10⁻¹⁶ J（原子物理常用单位）
    },
    megaelectron_volt: {
      id: 'megaelectron_volt',
      label: '兆电子伏',
      symbol: 'MeV',
      ratio: 1.602176634e-13 // 1 MeV = 1.602176634×10⁻¹³ J（核物理常用单位）
    },
    
    // TNT当量单位
    gram_tnt: {
      id: 'gram_tnt',
      label: '克TNT当量',
      symbol: 'g TNT',
      ratio: 4184 // 1 g TNT = 4184 J（约定值）
    },
    kilogram_tnt: {
      id: 'kilogram_tnt',
      label: '千克TNT当量',
      symbol: 'kg TNT',
      ratio: 4184000 // 1 kg TNT = 4184000 J（约定值）
    },
    ton_tnt: {
      id: 'ton_tnt',
      label: '吨TNT当量',
      symbol: 't TNT',
      ratio: 4184000000 // 1 t TNT = 4184000000 J（约定值）
    },

    // 参考能量值：
    // 日常生活：
    // - 1个苹果的能量：≈400 kJ（95 kcal）
    // - 1度电：3600 kJ（1 kWh）
    // - 1升汽油燃烧：≈34.2 MJ
    // 
    // 科学领域：
    // - 氢原子电离能：13.6 eV
    // - 铀235裂变能：≈200 MeV/核子
    // 
    // 爆炸能量：
    // - 手榴弹：≈1 MJ（0.25 kg TNT）
    // - 广岛原子弹：≈63 TJ（15 kt TNT）
    // 
    // 自然现象：
    // - 闪电：≈500 MJ
    // - 8级地震：≈1 PJ
  },
} as const

export default energy 