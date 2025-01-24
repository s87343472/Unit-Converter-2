import type { ConversionCategory } from './types'

// 使用弧度作为基准单位
const angle: ConversionCategory = {
  id: 'angle',
  baseUnit: 'metric_radian',
  units: {
    // 公制单位（SI）
    metric_radian: {
      id: 'metric_radian',
      label: '弧度 (公制)',
      symbol: 'rad',
      ratio: 1,
    },
    metric_milliradian: {
      id: 'metric_milliradian',
      label: '毫弧度 (公制)',
      symbol: 'mrad',
      ratio: 0.001, // 1 mrad = 0.001 rad
    },
    metric_microradian: {
      id: 'metric_microradian',
      label: '微弧度 (公制)',
      symbol: 'μrad',
      ratio: 1e-6, // 1 μrad = 0.000001 rad
    },

    // 标准角度单位
    standard_degree: {
      id: 'standard_degree',
      label: '度 (标准)',
      symbol: '°',
      ratio: 0.0174533, // 1° = π/180 rad ≈ 0.0174533 rad
    },
    standard_arcminute: {
      id: 'standard_arcminute',
      label: '角分 (标准)',
      symbol: '′',
      ratio: 2.90888e-4, // 1′ = 1/60° ≈ 0.000290888 rad
    },
    standard_arcsecond: {
      id: 'standard_arcsecond',
      label: '角秒 (标准)',
      symbol: '″',
      ratio: 4.84814e-6, // 1″ = 1/3600° ≈ 0.00000484814 rad
    },
    standard_gradian: {
      id: 'standard_gradian',
      label: '百分度 (标准)',
      symbol: 'grad',
      ratio: 0.015708, // 1 grad = π/200 rad ≈ 0.015708 rad
    },

    // 周期单位
    cycle_revolution: {
      id: 'cycle_revolution',
      label: '周 (周期)',
      symbol: 'rev',
      ratio: 6.28319, // 1 rev = 2π rad ≈ 6.28319 rad
    },
    cycle_quadrant: {
      id: 'cycle_quadrant',
      label: '象限 (周期)',
      symbol: 'quad',
      ratio: 1.5708, // 1 quad = π/2 rad ≈ 1.5708 rad
    },
    cycle_semicircle: {
      id: 'cycle_semicircle',
      label: '半圆 (周期)',
      symbol: 'sc',
      ratio: 3.14159, // 1 sc = π rad ≈ 3.14159 rad
    },

    // 航海单位
    nautical_point: {
      id: 'nautical_point',
      label: '罗盘点 (航海)',
      symbol: 'pt',
      ratio: 0.0490874, // 1 point = 11.25° ≈ 0.0490874 rad
    },
    nautical_sextant: {
      id: 'nautical_sextant',
      label: '六分仪 (航海)',
      symbol: 'sext',
      ratio: 1.0472, // 1 sextant = π/3 rad ≈ 1.0472 rad
    },
    nautical_octant: {
      id: 'nautical_octant',
      label: '八分仪 (航海)',
      symbol: 'oct',
      ratio: 0.785398, // 1 octant = π/4 rad ≈ 0.785398 rad
    },

    // 军事单位
    military_mil: {
      id: 'military_mil',
      label: '密位 (军事)',
      symbol: 'mil',
      ratio: 0.0009817, // 1 mil = 1/6400 rev ≈ 0.0009817 rad
    },
    military_nato_mil: {
      id: 'military_nato_mil',
      label: 'NATO密位 (军事)',
      symbol: 'mil',
      ratio: 0.0009817, // 1 NATO mil = π/3200 rad ≈ 0.0009817 rad
    },
  },
} as const

export default angle 