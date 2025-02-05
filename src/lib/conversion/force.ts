import type { ConversionCategory } from './types'

const force: ConversionCategory = {
  id: 'force',
  description: '力单位转换 (ISO 80000-4)',
  baseUnit: 'metric_newton',
  units: {
    // 基准单位
    metric_newton: {
      id: 'metric_newton',
      label: '牛顿',
      symbol: 'N',
      ratio: 1, // 基准单位
      category: 'metric'
    },

    // 公制力单位
    metric_kilonewton: {
      id: 'metric_kilonewton',
      label: '千牛顿',
      symbol: 'kN',
      ratio: 1000, // 1 kN = 1000 N
      category: 'metric'
    },
    metric_meganewton: {
      id: 'metric_meganewton',
      label: '兆牛顿',
      symbol: 'MN',
      ratio: 1000000, // 1 MN = 1,000,000 N
      category: 'metric'
    },
    metric_giganewton: {
      id: 'metric_giganewton',
      label: '吉牛顿',
      symbol: 'GN',
      ratio: 1000000000, // 1 GN = 1,000,000,000 N
      category: 'metric'
    },
    metric_millinewton: {
      id: 'metric_millinewton',
      label: '毫牛顿',
      symbol: 'mN',
      ratio: 0.001, // 1 mN = 0.001 N
      category: 'metric'
    },
    metric_micronewton: {
      id: 'metric_micronewton',
      label: '微牛顿',
      symbol: 'μN',
      ratio: 0.000001, // 1 μN = 0.000001 N
      category: 'metric'
    },
    
    // 重力单位
    scientific_kilogram_force: {
      id: 'scientific_kilogram_force',
      label: '千克力',
      symbol: 'kgf',
      ratio: 9.80665, // 1 kgf = 9.80665 N（基于标准重力加速度）
      category: 'scientific'
    },
    scientific_gram_force: {
      id: 'scientific_gram_force',
      label: '克力',
      symbol: 'gf',
      ratio: 0.00980665, // 1 gf = 0.00980665 N
      category: 'scientific'
    },
    scientific_ton_force: {
      id: 'scientific_ton_force',
      label: '吨力',
      symbol: 'tf',
      ratio: 9806.65, // 1 tf = 9806.65 N
      category: 'scientific'
    },
    
    // 英制力单位
    imperial_pound_force: {
      id: 'imperial_pound_force',
      label: '磅力',
      symbol: 'lbf',
      ratio: 4.4482216152605, // 1 lbf = 4.4482216152605 N
      category: 'imperial'
    },
    imperial_ounce_force: {
      id: 'imperial_ounce_force',
      label: '盎司力',
      symbol: 'ozf',
      ratio: 0.278013850953781, // 1 ozf = 0.278013850953781 N
      category: 'imperial'
    },
    imperial_ton_force: {
      id: 'imperial_ton_force',
      label: '英吨力',
      symbol: 'tnf',
      ratio: 9964.01616, // 1 long tnf = 9964.01616 N
      category: 'imperial'
    },
    us_ton_force: {
      id: 'us_ton_force',
      label: '美吨力',
      symbol: 'tnf(US)',
      ratio: 8896.443230521, // 1 short tnf = 8896.443230521 N
      category: 'us'
    },
    imperial_poundal: {
      id: 'imperial_poundal',
      label: '磅达',
      symbol: 'pdl',
      ratio: 0.138254954376, // 1 pdl = 0.138254954376 N
      category: 'imperial'
    },
    
    // 科学单位
    scientific_dyne: {
      id: 'scientific_dyne',
      label: '达因',
      symbol: 'dyn',
      ratio: 0.00001, // 1 dyn = 0.00001 N
      category: 'scientific'
    },
    scientific_kilodyne: {
      id: 'scientific_kilodyne',
      label: '千达因',
      symbol: 'kdyn',
      ratio: 0.01, // 1 kdyn = 0.01 N
      category: 'scientific'
    },
    scientific_megadyne: {
      id: 'scientific_megadyne',
      label: '兆达因',
      symbol: 'Mdyn',
      ratio: 10, // 1 Mdyn = 10 N
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '力的知识',
    items: [
      '牛顿（N）是SI基本力单位，定义为使1千克质量产生1米/秒²加速度所需的力',
      '重力单位（如kgf）基于标准重力加速度g=9.80665 m/s²',
      '磅力（lbf）是英制重力单位，1 lbf约等于4.448 N',
      '磅达（pdl）是英制惯性力单位，1 pdl使1磅质量产生1英尺/秒²加速度',
      '达因（dyn）是CGS单位制的力单位，1 N = 100,000 dyn',
      '吨力有多种定义：公制吨力（1000 kgf）、英吨力（2240 lbf）、美吨力（2000 lbf）'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '力的换算提示',
    items: [
      '日常生活力参考：\n  - 1牛顿：约102克重\n  - 1千克力：约2.205磅力\n  - 苹果重力：约1牛顿',
      '工程力参考：\n  - 电梯额定载重：5000-10000 N\n  - 起重机吊重：100-1000 kN\n  - 火箭推力：1-50 MN',
      '运动力参考：\n  - 拳击冲击力：1000-4000 N\n  - 跳远起跳力：2000-3000 N\n  - 举重推举力：2000-5000 N',
      '自然力参考：\n  - 大气压力：101325 N/m²\n  - 台风风压：1000-3000 N/m²\n  - 地震力：可达GN级',
      '精密力参考：\n  - 显微操作：μN-mN级\n  - 材料测试：N-kN级\n  - 结构测试：kN-MN级',
      '航空航天力参考：\n  - 小型无人机推力：10-100 N\n  - 客机发动机推力：100-400 kN\n  - 航天飞机推力：~30 MN'
    ]
  }
} as const

export default force 