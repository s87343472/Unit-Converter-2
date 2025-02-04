import type { ConversionCategory } from './types'

// 使用牛顿米作为基准单位
const torque: ConversionCategory = {
  id: 'torque',
  baseUnit: 'metric_newton_meter',
  description: '扭矩单位转换 (ISO 80000-4)',
  units: {
    // 基本单位
    metric_newton_meter: {
      id: 'metric_newton_meter',
      label: '牛顿米',
      symbol: 'N⋅m',
      ratio: 1,
      category: 'metric'
    },

    // 公制扭矩单位
    metric_meganewton_meter: {
      id: 'metric_meganewton_meter',
      label: '兆牛顿米',
      symbol: 'MN⋅m',
      ratio: 1000000,
      category: 'metric'
    },
    metric_kilonewton_meter: {
      id: 'metric_kilonewton_meter',
      label: '千牛顿米',
      symbol: 'kN⋅m',
      ratio: 1000,
      category: 'metric'
    },
    metric_millinewton_meter: {
      id: 'metric_millinewton_meter',
      label: '毫牛顿米',
      symbol: 'mN⋅m',
      ratio: 0.001,
      category: 'metric'
    },
    metric_micronewton_meter: {
      id: 'metric_micronewton_meter',
      label: '微牛顿米',
      symbol: 'μN⋅m',
      ratio: 0.000001,
      category: 'metric'
    },
    metric_newton_centimeter: {
      id: 'metric_newton_centimeter',
      label: '牛顿厘米',
      symbol: 'N⋅cm',
      ratio: 0.01,
      category: 'metric'
    },
    metric_newton_millimeter: {
      id: 'metric_newton_millimeter',
      label: '牛顿毫米',
      symbol: 'N⋅mm',
      ratio: 0.001,
      category: 'metric'
    },

    // 英制扭矩单位
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
    imperial_ounce_inch: {
      id: 'imperial_ounce_inch',
      label: '盎司力英寸',
      symbol: 'ozf⋅in',
      ratio: 0.00706155,
      category: 'imperial'
    },
    imperial_kip_foot: {
      id: 'imperial_kip_foot',
      label: '千磅力英尺',
      symbol: 'kip⋅ft',
      ratio: 1355.82,
      category: 'imperial'
    },

    // 工程扭矩单位
    engineering_kilogram_force_meter: {
      id: 'engineering_kilogram_force_meter',
      label: '千克力米',
      symbol: 'kgf⋅m',
      ratio: 9.80665,
      category: 'traditional'
    },
    engineering_kilogram_force_centimeter: {
      id: 'engineering_kilogram_force_centimeter',
      label: '千克力厘米',
      symbol: 'kgf⋅cm',
      ratio: 0.0980665,
      category: 'traditional'
    },
    engineering_gram_force_meter: {
      id: 'engineering_gram_force_meter',
      label: '克力米',
      symbol: 'gf⋅m',
      ratio: 0.00980665,
      category: 'traditional'
    },
    engineering_gram_force_centimeter: {
      id: 'engineering_gram_force_centimeter',
      label: '克力厘米',
      symbol: 'gf⋅cm',
      ratio: 0.0000980665,
      category: 'traditional'
    },

    // 科学扭矩单位
    scientific_dyne_centimeter: {
      id: 'scientific_dyne_centimeter',
      label: '达因厘米',
      symbol: 'dyn⋅cm',
      ratio: 0.0000001,
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '扭矩知识',
    items: [
      '扭矩是力矩的一种，表示使物体发生转动的力的作用效果',
      '扭矩等于力与力臂（作用点到转轴的垂直距离）的乘积',
      '扭矩是矢量，它既有大小又有方向（遵循右手定则）',
      '1牛顿米等于1牛顿的力在1米长的力臂上产生的扭矩',
      '扭矩单位换算基于ISO 80000-4标准',
      '扭矩是衡量发动机输出功率的重要参数之一'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '扭矩换算提示',
    items: [
      '汽车发动机扭矩参考值：\n  - 小型车：100-200 N⋅m\n  - 中型车：200-400 N⋅m\n  - 大型车：400-600 N⋅m\n  - 重型卡车：1000-3000 N⋅m',
      '螺栓扭矩参考值：\n  - M6螺栓：5-12 N⋅m\n  - M8螺栓：15-25 N⋅m\n  - M10螺栓：30-50 N⋅m\n  - M12螺栓：50-80 N⋅m',
      '自行车维修扭矩参考值：\n  - 座管夹紧：5-8 N⋅m\n  - 把立夹紧：8-12 N⋅m\n  - 曲柄螺栓：35-45 N⋅m\n  - 飞轮锁环：30-50 N⋅m',
      '工业应用扭矩参考值：\n  - 精密仪器：0.1-1 N⋅m\n  - 小型电机：1-10 N⋅m\n  - 中型电机：10-100 N⋅m\n  - 大型电机：100-1000 N⋅m',
      '航空航天扭矩参考值：\n  - 小型螺旋桨：100-500 N⋅m\n  - 中型涡轮：500-2000 N⋅m\n  - 大型涡轮：2000-5000 N⋅m'
    ]
  }
} as const

export default torque 