import type { ConversionCategory } from './types'

// 使用牛顿作为基准单位
const force: ConversionCategory = {
  id: 'force',
  baseUnit: 'metric_newton',
  units: {
    // 公制单位 (SI)
    metric_newton: {
      id: 'metric_newton',
      label: '牛顿 (SI)',
      symbol: 'N',
      ratio: 1,
    },
    metric_kilonewton: {
      id: 'metric_kilonewton',
      label: '千牛顿 (SI)',
      symbol: 'kN',
      ratio: 1e3, // 1 kN = 1,000 N
    },
    metric_meganewton: {
      id: 'metric_meganewton',
      label: '兆牛顿 (SI)',
      symbol: 'MN',
      ratio: 1e6, // 1 MN = 1,000,000 N
    },
    metric_micronewton: {
      id: 'metric_micronewton',
      label: '微牛顿 (SI)',
      symbol: 'μN',
      ratio: 1e-6, // 1 μN = 0.000001 N
    },
    metric_millinewton: {
      id: 'metric_millinewton',
      label: '毫牛顿 (SI)',
      symbol: 'mN',
      ratio: 1e-3, // 1 mN = 0.001 N
    },

    // 重力单位
    gravity_kilogram_force: {
      id: 'gravity_kilogram_force',
      label: '千克力 (重力)',
      symbol: 'kgf',
      ratio: 9.80665, // 1 kgf = 9.80665 N (标准重力加速度)
    },
    gravity_gram_force: {
      id: 'gravity_gram_force',
      label: '克力 (重力)',
      symbol: 'gf',
      ratio: 9.80665e-3, // 1 gf = 0.00980665 N
    },
    gravity_ton_force_metric: {
      id: 'gravity_ton_force_metric',
      label: '公吨力 (重力)',
      symbol: 'tf',
      ratio: 9.80665e3, // 1 tf = 9,806.65 N
    },

    // 英制单位
    imperial_pound_force: {
      id: 'imperial_pound_force',
      label: '磅力 (英制)',
      symbol: 'lbf',
      ratio: 4.448222, // 1 lbf ≈ 4.448222 N
    },
    imperial_ounce_force: {
      id: 'imperial_ounce_force',
      label: '盎司力 (英制)',
      symbol: 'ozf',
      ratio: 0.2780139, // 1 ozf = 1/16 lbf ≈ 0.2780139 N
    },
    imperial_ton_force: {
      id: 'imperial_ton_force',
      label: '英吨力 (英制)',
      symbol: 'tonf',
      ratio: 9.964017e3, // 1 tonf ≈ 9,964.017 N
    },
    imperial_kip: {
      id: 'imperial_kip',
      label: '千磅力 (英制)',
      symbol: 'kip',
      ratio: 4.448222e3, // 1 kip = 1000 lbf ≈ 4,448.222 N
    },

    // 科学单位
    scientific_dyne: {
      id: 'scientific_dyne',
      label: '达因 (CGS)',
      symbol: 'dyn',
      ratio: 1e-5, // 1 dyn = 10⁻⁵ N
    },
    scientific_sthene: {
      id: 'scientific_sthene',
      label: '丝尼 (MTS)',
      symbol: 'sn',
      ratio: 1e3, // 1 sn = 1000 N
    },
    scientific_poundal: {
      id: 'scientific_poundal',
      label: '磅达 (英制科学)',
      symbol: 'pdl',
      ratio: 0.138255, // 1 pdl ≈ 0.138255 N
    },
  },
} as const

export default force 