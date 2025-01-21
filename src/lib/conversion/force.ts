import type { ConversionCategory } from './types'

// 使用牛顿作为基准单位
const force: ConversionCategory = {
  id: 'force',
  baseUnit: 'newton',
  units: {
    newton: {
      id: 'newton',
      label: '牛顿',
      symbol: 'N',
      ratio: 1,
    },
    kilonewton: {
      id: 'kilonewton',
      label: '千牛顿',
      symbol: 'kN',
      ratio: 1000, // 1 kN = 1000 N
    },
    meganewton: {
      id: 'meganewton',
      label: '兆牛顿',
      symbol: 'MN',
      ratio: 1000000, // 1 MN = 1,000,000 N
    },
    dyne: {
      id: 'dyne',
      label: '达因',
      symbol: 'dyn',
      ratio: 0.00001, // 1 dyn = 10^-5 N
    },
    kilogram_force: {
      id: 'kilogram_force',
      label: '千克力',
      symbol: 'kgf',
      ratio: 9.80665, // 1 kgf = 9.80665 N
    },
    pound_force: {
      id: 'pound_force',
      label: '磅力',
      symbol: 'lbf',
      ratio: 4.44822, // 1 lbf ≈ 4.44822 N
    },
    ton_force: {
      id: 'ton_force',
      label: '吨力',
      symbol: 'tf',
      ratio: 9806.65, // 1 tf = 1000 kgf = 9806.65 N
    },
    gram_force: {
      id: 'gram_force',
      label: '克力',
      symbol: 'gf',
      ratio: 0.00980665, // 1 gf = 0.00980665 N
    },
    poundal: {
      id: 'poundal',
      label: '磅达',
      symbol: 'pdl',
      ratio: 0.138255, // 1 pdl ≈ 0.138255 N
    },
  },
}

export default force 