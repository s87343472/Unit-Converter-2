import type { ConversionCategory } from './types'

// 使用弧度作为基准单位
const angle: ConversionCategory = {
  id: 'angle',
  baseUnit: 'radian',
  units: {
    radian: {
      id: 'radian',
      label: '弧度 (基本)',
      symbol: 'rad',
      ratio: 1,
    },
    degree: {
      id: 'degree',
      label: '度 (基本)',
      symbol: '°',
      ratio: 0.0174533, // 1° = π/180 rad ≈ 0.0174533 rad
    },
    gradian: {
      id: 'gradian',
      label: '百分度 (基本)',
      symbol: 'grad',
      ratio: 0.015708, // 1 grad = π/200 rad ≈ 0.015708 rad
    },
    arcminute: {
      id: 'arcminute',
      label: '角分 (基本)',
      symbol: '′',
      ratio: 0.000290888, // 1′ = 1/60° ≈ 0.000290888 rad
    },
    arcsecond: {
      id: 'arcsecond',
      label: '角秒 (基本)',
      symbol: '″',
      ratio: 0.00000484814, // 1″ = 1/3600° ≈ 0.00000484814 rad
    },
    revolution: {
      id: 'revolution',
      label: '周 (基本)',
      symbol: 'rev',
      ratio: 6.28319, // 1 turn = 2π rad ≈ 6.28319 rad
    },
    quadrant: {
      id: 'quadrant',
      label: '象限 (基本)',
      symbol: 'quad',
      ratio: 1.5708, // 1 quadrant = π/2 rad ≈ 1.5708 rad
    },
    sextant: {
      id: 'sextant',
      label: '六分仪 (航海)',
      symbol: 'sext',
      ratio: 1.0472,
    },
    octant: {
      id: 'octant',
      label: '八分仪 (航海)',
      symbol: 'oct',
      ratio: 0.785398,
    },
  },
}

export default angle 