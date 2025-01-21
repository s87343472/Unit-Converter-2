import type { ConversionCategory } from './types'

// 使用焦耳作为基准单位
const energy: ConversionCategory = {
  id: 'energy',
  baseUnit: 'joule',
  units: {
    joule: {
      id: 'joule',
      label: '焦耳',
      symbol: 'J',
      ratio: 1,
    },
    kilojoule: {
      id: 'kilojoule',
      label: '千焦',
      symbol: 'kJ',
      ratio: 1000, // 1 kJ = 1000 J
    },
    megajoule: {
      id: 'megajoule',
      label: '兆焦',
      symbol: 'MJ',
      ratio: 1000000, // 1 MJ = 1,000,000 J
    },
    calorie: {
      id: 'calorie',
      label: '卡路里',
      symbol: 'cal',
      ratio: 4.184, // 1 cal = 4.184 J
    },
    kilocalorie: {
      id: 'kilocalorie',
      label: '千卡',
      symbol: 'kcal',
      ratio: 4184, // 1 kcal = 1000 cal = 4184 J
    },
    watt_hour: {
      id: 'watt_hour',
      label: '瓦时',
      symbol: 'Wh',
      ratio: 3600, // 1 Wh = 3600 J
    },
    kilowatt_hour: {
      id: 'kilowatt_hour',
      label: '千瓦时',
      symbol: 'kWh',
      ratio: 3600000, // 1 kWh = 3,600,000 J
    },
    electron_volt: {
      id: 'electron_volt',
      label: '电子伏',
      symbol: 'eV',
      ratio: 1.602176634e-19, // 1 eV = 1.602176634×10⁻¹⁹ J
    },
    british_thermal_unit: {
      id: 'british_thermal_unit',
      label: '英热单位',
      symbol: 'BTU',
      ratio: 1055.06, // 1 BTU ≈ 1055.06 J
    },
    therm: {
      id: 'therm',
      label: '热量单位',
      symbol: 'thm',
      ratio: 105506000, // 1 therm = 100,000 BTU ≈ 105,506,000 J
    },
    foot_pound: {
      id: 'foot_pound',
      label: '英尺磅',
      symbol: 'ft⋅lb',
      ratio: 1.355818, // 1 ft⋅lb ≈ 1.355818 J
    },
    erg: {
      id: 'erg',
      label: '尔格',
      symbol: 'erg',
      ratio: 1e-7, // 1 erg = 10⁻⁷ J
    },
  },
}

export default energy 