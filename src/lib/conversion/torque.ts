import type { ConversionCategory } from './types'

// 使用牛顿米作为基准单位
const torque: ConversionCategory = {
  id: 'torque',
  baseUnit: 'newton_meter',
  units: {
    newton_meter: {
      id: 'newton_meter',
      label: '牛顿米 (公制)',
      symbol: 'N⋅m',
      ratio: 1,
    },
    kilonewton_meter: {
      id: 'kilonewton_meter',
      label: '千牛顿米 (公制)',
      symbol: 'kN⋅m',
      ratio: 1000,
    },
    newton_centimeter: {
      id: 'newton_centimeter',
      label: '牛顿厘米 (公制)',
      symbol: 'N⋅cm',
      ratio: 0.01,
    },
    kilogram_force_meter: {
      id: 'kilogram_force_meter',
      label: '千克力米 (工程)',
      symbol: 'kgf⋅m',
      ratio: 9.80665,
    },
    gram_force_meter: {
      id: 'gram_force_meter',
      label: '克力米 (工程)',
      symbol: 'gf⋅m',
      ratio: 0.00980665,
    },
    foot_pound_force: {
      id: 'foot_pound_force',
      label: '英尺磅力 (英制)',
      symbol: 'ft⋅lbf',
      ratio: 1.35582,
    },
    inch_pound_force: {
      id: 'inch_pound_force',
      label: '英寸磅力 (英制)',
      symbol: 'in⋅lbf',
      ratio: 0.112985,
    },
    ounce_force_inch: {
      id: 'ounce_force_inch',
      label: '盎司力英寸 (英制)',
      symbol: 'oz⋅in',
      ratio: 0.00706155,
    },
    dyne_centimeter: {
      id: 'dyne_centimeter',
      label: '达因厘米 (科学)',
      symbol: 'dyn⋅cm',
      ratio: 1e-7,
    },
  },
}

export default torque 