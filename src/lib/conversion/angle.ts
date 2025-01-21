import type { ConversionCategory } from './types'

// 使用弧度作为基准单位
const angle: ConversionCategory = {
  id: 'angle',
  baseUnit: 'radian',
  units: {
    radian: {
      id: 'radian',
      label: '弧度',
      symbol: 'rad',
      ratio: 1,
    },
    degree: {
      id: 'degree',
      label: '度',
      symbol: '°',
      ratio: 0.0174533, // 1° = π/180 rad ≈ 0.0174533 rad
    },
    gradian: {
      id: 'gradian',
      label: '百分度',
      symbol: 'grad',
      ratio: 0.015708, // 1 grad = π/200 rad ≈ 0.015708 rad
    },
    minute_arc: {
      id: 'minute_arc',
      label: '角分',
      symbol: '′',
      ratio: 0.000290888, // 1′ = 1/60° ≈ 0.000290888 rad
    },
    second_arc: {
      id: 'second_arc',
      label: '角秒',
      symbol: '″',
      ratio: 0.00000484814, // 1″ = 1/3600° ≈ 0.00000484814 rad
    },
    turn: {
      id: 'turn',
      label: '圈',
      symbol: 'turn',
      ratio: 6.28319, // 1 turn = 2π rad ≈ 6.28319 rad
    },
    quadrant: {
      id: 'quadrant',
      label: '象限角',
      symbol: 'quad',
      ratio: 1.5708, // 1 quadrant = π/2 rad ≈ 1.5708 rad
    },
  },
}

export default angle 