import type { ConversionCategory } from './types'

// 使用帕斯卡作为基准单位
const pressure: ConversionCategory = {
  id: 'pressure',
  baseUnit: 'pascal',
  units: {
    pascal: {
      id: 'pascal',
      label: '帕斯卡',
      symbol: 'Pa',
      ratio: 1,
    },
    kilopascal: {
      id: 'kilopascal',
      label: '千帕',
      symbol: 'kPa',
      ratio: 1000, // 1 kPa = 1000 Pa
    },
    megapascal: {
      id: 'megapascal',
      label: '兆帕',
      symbol: 'MPa',
      ratio: 1000000, // 1 MPa = 1,000,000 Pa
    },
    bar: {
      id: 'bar',
      label: '巴',
      symbol: 'bar',
      ratio: 100000, // 1 bar = 100,000 Pa
    },
    millibar: {
      id: 'millibar',
      label: '毫巴',
      symbol: 'mbar',
      ratio: 100, // 1 mbar = 100 Pa
    },
    atmosphere: {
      id: 'atmosphere',
      label: '标准大气压',
      symbol: 'atm',
      ratio: 101325, // 1 atm = 101,325 Pa
    },
    torr: {
      id: 'torr',
      label: '托',
      symbol: 'Torr',
      ratio: 133.322, // 1 Torr ≈ 133.322 Pa
    },
    mmhg: {
      id: 'mmhg',
      label: '毫米汞柱',
      symbol: 'mmHg',
      ratio: 133.322, // 1 mmHg ≈ 133.322 Pa（与 Torr 基本相同）
    },
    psi: {
      id: 'psi',
      label: '磅力/平方英寸',
      symbol: 'psi',
      ratio: 6894.557823129252, // 1 psi = 101325 Pa / 14.7 psi = 6894.557823129252 Pa
    },
    ksi: {
      id: 'ksi',
      label: '千磅力/平方英寸',
      symbol: 'ksi',
      ratio: 6894760, // 1 ksi = 1000 psi ≈ 6,894,760 Pa
    },
    cmh2o: {
      id: 'cmh2o',
      label: '厘米水柱',
      symbol: 'cmH₂O',
      ratio: 98.0665, // 1 cmH₂O ≈ 98.0665 Pa
    },
  },
}

export default pressure 