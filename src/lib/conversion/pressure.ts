import type { ConversionCategory } from './types'

// 使用帕斯卡作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'pascal',
  units: {
    pascal: {
      id: 'pascal',
      label: '帕斯卡 (公制)',
      symbol: 'Pa',
      ratio: 1,
    },
    kilopascal: {
      id: 'kilopascal',
      label: '千帕 (公制)',
      symbol: 'kPa',
      ratio: 1000, // 1 kPa = 1000 Pa
    },
    megapascal: {
      id: 'megapascal',
      label: '兆帕 (公制)',
      symbol: 'MPa',
      ratio: 1000000, // 1 MPa = 1,000,000 Pa
    },
    bar: {
      id: 'bar',
      label: '巴 (工程)',
      symbol: 'bar',
      ratio: 100000, // 1 bar = 100,000 Pa
    },
    millibar: {
      id: 'millibar',
      label: '毫巴 (气象)',
      symbol: 'mbar',
      ratio: 100, // 1 mbar = 100 Pa
    },
    atmosphere: {
      id: 'atmosphere',
      label: '标准大气压 (科学)',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101,325 Pa
    },
    torr: {
      id: 'torr',
      label: '托 (科学)',
      symbol: 'Torr',
      ratio: 133.322, // 1 Torr ≈ 133.322 Pa
    },
    millimeter_of_mercury: {
      id: 'millimeter_of_mercury',
      label: '毫米汞柱 (医学)',
      symbol: 'mmHg',
      ratio: 133.322, // 1 mmHg ≈ 133.322 Pa（与 Torr 基本相同）
    },
    pound_per_square_inch: {
      id: 'pound_per_square_inch',
      label: '磅每平方英寸 (英制)',
      symbol: 'psi',
      ratio: 6894.76,
    },
    inch_of_mercury: {
      id: 'inch_of_mercury',
      label: '英寸汞柱 (英制)',
      symbol: 'inHg',
      ratio: 3386.39,
    },
    inch_of_water: {
      id: 'inch_of_water',
      label: '英寸水柱 (英制)',
      symbol: 'inH2O',
      ratio: 249.089,
    },
    kilopound_per_square_inch: {
      id: 'kilopound_per_square_inch',
      label: '千磅力/平方英寸',
      symbol: 'ksi',
      ratio: 6894760, // 1 ksi = 1000 psi ≈ 6,894,760 Pa
    },
    centimeter_of_water: {
      id: 'centimeter_of_water',
      label: '厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O ≈ 98.0665 Pa
    },
  },
}

export default pressure 