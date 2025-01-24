import type { ConversionCategory } from './types'

// 使用焦耳作为基准单位
const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'joule',
  units: {
    joule: {
      id: 'joule',
      label: '焦耳 (公制)',
      symbol: 'J',
      ratio: 1,
    },
    kilojoule: {
      id: 'kilojoule',
      label: '千焦 (公制)',
      symbol: 'kJ',
      ratio: 1000, // 1 kJ = 1000 J
    },
    megajoule: {
      id: 'megajoule',
      label: '兆焦 (公制)',
      symbol: 'MJ',
      ratio: 1000000, // 1 MJ = 1,000,000 J
    },
    calorie: {
      id: 'calorie',
      label: '卡路里 (热力)',
      symbol: 'cal',
      ratio: 4.184, // 1 cal = 4.184 J
    },
    kilocalorie: {
      id: 'kilocalorie',
      label: '千卡 (热力)',
      symbol: 'kcal',
      ratio: 4184, // 1 kcal = 1000 cal = 4184 J
    },
    watt_hour: {
      id: 'watt_hour',
      label: '瓦时 (电力)',
      symbol: 'Wh',
      ratio: 3600, // 1 Wh = 3600 J
    },
    kilowatt_hour: {
      id: 'kilowatt_hour',
      label: '千瓦时 (电力)',
      symbol: 'kWh',
      ratio: 3600000, // 1 kWh = 3,600,000 J
    },
    megawatt_hour: {
      id: 'megawatt_hour',
      label: '兆瓦时 (电力)',
      symbol: 'MWh',
      ratio: 3600000000, // 1 MWh = 3,600,000,000 J
    },
    electronvolt: {
      id: 'electronvolt',
      label: '电子伏 (原子)',
      symbol: 'eV',
      ratio: 1.602177e-19, // 1 eV = 1.602177×10⁻¹⁹ J
    },
    british_thermal_unit: {
      id: 'british_thermal_unit',
      label: '英热单位 (英制)',
      symbol: 'BTU',
      ratio: 1055.06, // 1 BTU ≈ 1055.06 J
    },
    therm: {
      id: 'therm',
      label: '撒姆 (英制)',
      symbol: 'thm',
      ratio: 105506000, // 1 therm = 100,000 BTU ≈ 105,506,000 J
    },
    foot_pound_force: {
      id: 'foot_pound_force',
      label: '英尺磅力 (英制)',
      symbol: 'ft⋅lbf',
      ratio: 1.35582, // 1 ft⋅lbf ≈ 1.35582 J
    },
    erg: {
      id: 'erg',
      label: '尔格(CGS)',
      symbol: 'erg',
      ratio: 1e-7, // 1 erg = 10⁻⁷ J
    },
    ton_of_tnt: {
      id: 'ton_of_tnt',
      label: 'TNT当量吨 (爆炸)',
      symbol: 'tTNT',
      ratio: 4184000000, // 1 tTNT = 4,184,000,000 J
    },
  },
}

export default energy 