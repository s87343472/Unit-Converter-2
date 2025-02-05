import type { ConversionCategory } from './types'

// 使用牛顿米作为基准单位
const torque: ConversionCategory = {
  id: 'torque',
  baseUnit: 'metric_newton_meter',
  description: '扭矩单位转换',
  units: {
    // 公制单位
    metric_newton_meter: {
      id: 'metric_newton_meter',
      label: '牛顿米',
      symbol: 'N⋅m',
      ratio: 1, // 基准单位
      category: 'metric'
    },
    metric_newton_centimeter: {
      id: 'metric_newton_centimeter',
      label: '牛顿厘米',
      symbol: 'N⋅cm',
      ratio: 0.01,
      category: 'metric'
    },

    // 英制单位
    imperial_pound_foot: {
      id: 'imperial_pound_foot',
      label: '磅力英尺',
      symbol: 'lbf⋅ft',
      ratio: 1.35582,
      category: 'imperial'
    },
    imperial_pound_inch: {
      id: 'imperial_pound_inch',
      label: '磅力英寸',
      symbol: 'lbf⋅in',
      ratio: 0.112985,
      category: 'imperial'
    },

    // 科学单位
    scientific_kilogram_force_meter: {
      id: 'scientific_kilogram_force_meter',
      label: '千克力米',
      symbol: 'kgf⋅m',
      ratio: 9.80665,
      category: 'scientific'
    },
    scientific_kilogram_force_centimeter: {
      id: 'scientific_kilogram_force_centimeter',
      label: '千克力厘米',
      symbol: 'kgf⋅cm',
      ratio: 0.0980665,
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '扭矩知识',
    items: [
      '扭矩是力和力臂的乘积',
      '1 N⋅m = 1 牛顿力作用在1米长的力臂上产生的扭矩',
      '1 kgf⋅m = 9.80665 N⋅m（基于标准重力加速度）',
      '1 lbf⋅ft = 1.35582 N⋅m'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '扭矩换算提示',
    items: [
      '汽车扭矩参考：\n  - 小型车：100-200 N⋅m\n  - 中型车：200-400 N⋅m\n  - 大型车：400-800 N⋅m',
      '工具扭矩参考：\n  - 手动扳手：10-200 N⋅m\n  - 电动扳手：50-1000 N⋅m',
      '注意单位换算：\n  - 1 N⋅m = 100 N⋅cm\n  - 1 kgf⋅m = 100 kgf⋅cm'
    ]
  }
} as const

export default torque 