import type { ConversionCategory } from './types'

// 使用牛顿米作为基准单位
const torque: ConversionCategory = {
  id: 'torque',
  baseUnit: 'metric_newton_meter',
  units: {
    // 公制单位
    metric_newton_meter: {
      id: 'metric_newton_meter',
      label: '牛顿米 (公制)',
      symbol: 'N⋅m',
      ratio: 1,
    },
    metric_kilonewton_meter: {
      id: 'metric_kilonewton_meter',
      label: '千牛顿米 (公制)',
      symbol: 'kN⋅m',
      ratio: 1000,
    },
    metric_meganewton_meter: {
      id: 'metric_meganewton_meter',
      label: '兆牛顿米 (公制)',
      symbol: 'MN⋅m',
      ratio: 1000000,
    },
    metric_newton_centimeter: {
      id: 'metric_newton_centimeter',
      label: '牛顿厘米 (公制)',
      symbol: 'N⋅cm',
      ratio: 0.01,
    },
    metric_newton_millimeter: {
      id: 'metric_newton_millimeter',
      label: '牛顿毫米 (公制)',
      symbol: 'N⋅mm',
      ratio: 0.001,
    },
    // 英制单位
    imperial_pound_foot: {
      id: 'imperial_pound_foot',
      label: '磅英尺 (英制)',
      symbol: 'lb⋅ft',
      ratio: 1.35582,
    },
    imperial_pound_inch: {
      id: 'imperial_pound_inch',
      label: '磅英寸 (英制)',
      symbol: 'lb⋅in',
      ratio: 0.112985,
    },
    imperial_ounce_inch: {
      id: 'imperial_ounce_inch',
      label: '盎司英寸 (英制)',
      symbol: 'oz⋅in',
      ratio: 0.00706155,
    },
    // 工程单位
    engineering_kilogram_force_meter: {
      id: 'engineering_kilogram_force_meter',
      label: '千克力米 (工程)',
      symbol: 'kgf⋅m',
      ratio: 9.80665,
    },
    engineering_gram_force_centimeter: {
      id: 'engineering_gram_force_centimeter',
      label: '克力厘米 (工程)',
      symbol: 'gf⋅cm',
      ratio: 0.0000980665,
    },
    // 科学单位
    scientific_dyne_centimeter: {
      id: 'scientific_dyne_centimeter',
      label: '达因厘米 (科学)',
      symbol: 'dyn⋅cm',
      ratio: 0.0000001,
    },
    // 汽车工业单位
    automotive_kilogram_force_meter: {
      id: 'automotive_kilogram_force_meter',
      label: '千克力米 (汽车)',
      symbol: 'kgf⋅m',
      ratio: 9.80665,
    },
    automotive_newton_meter: {
      id: 'automotive_newton_meter',
      label: '牛顿米 (汽车)',
      symbol: 'N⋅m',
      ratio: 1,
    },
  },
}

export default torque 