import type { ConversionCategory } from './types'

// 角度单位转换 (ISO 80000-3)
const angle: ConversionCategory = {
  id: 'angle',
  baseUnit: 'radian',
  units: {
    // 公制角度单位
    radian: {
      id: 'radian',
      label: '弧度',
      symbol: 'rad',
      ratio: 1,
      category: 'metric'
    },
    milliradian: {
      id: 'milliradian',
      label: '毫弧度',
      symbol: 'mrad',
      ratio: 0.001,
      category: 'metric'
    },
    microradian: {
      id: 'microradian',
      label: '微弧度',
      symbol: 'μrad',
      ratio: 1e-6,
      category: 'metric'
    },
    nanoradian: {
      id: 'nanoradian',
      label: '纳弧度',
      symbol: 'nrad',
      ratio: 1e-9,
      category: 'metric'
    },

    // 标准角度单位
    degree: {
      id: 'degree',
      label: '度',
      symbol: '°',
      ratio: Math.PI / 180,
      category: 'traditional'
    },
    arcminute: {
      id: 'arcminute',
      label: '角分',
      symbol: '′',
      ratio: Math.PI / (180 * 60),
      category: 'traditional'
    },
    arcsecond: {
      id: 'arcsecond',
      label: '角秒',
      symbol: '″',
      ratio: Math.PI / (180 * 3600),
      category: 'traditional'
    },
    gradian: {
      id: 'gradian',
      label: '百分度',
      symbol: 'grad',
      ratio: Math.PI / 200,
      category: 'traditional'
    },

    // 周期单位
    revolution: {
      id: 'revolution',
      label: '周',
      symbol: 'rev',
      ratio: 2 * Math.PI,
      category: 'scientific'
    },
    quadrant: {
      id: 'quadrant',
      label: '象限',
      symbol: 'quad',
      ratio: Math.PI / 2,
      category: 'scientific'
    },
    semicircle: {
      id: 'semicircle',
      label: '半圆',
      symbol: 'sc',
      ratio: Math.PI,
      category: 'scientific'
    },

    // 航海单位
    point: {
      id: 'point',
      label: '罗盘点',
      symbol: 'pt',
      ratio: Math.PI / 16,  // 1 point = 11.25°
      category: 'traditional'
    },
    sextant: {
      id: 'sextant',
      label: '六分仪',
      symbol: 'sext',
      ratio: Math.PI / 3,  // 1 sextant = 60°
      category: 'traditional'
    },
    octant: {
      id: 'octant',
      label: '八分仪',
      symbol: 'oct',
      ratio: Math.PI / 4,  // 1 octant = 45°
      category: 'traditional'
    },

    // 军事单位
    mil: {
      id: 'mil',
      label: '密位',
      symbol: 'mil',
      ratio: 2 * Math.PI / 6400,  // NATO标准：6400密位=360°
      category: 'scientific'
    },
    nato_mil: {
      id: 'nato_mil',
      label: 'NATO密位',
      symbol: 'mil',
      ratio: Math.PI / 3200,  // NATO标准：6400密位=360°
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '角度知识',
    items: [
      'ISO 80000-3标准定义了角度的基本单位弧度(rad)，表示圆弧长度等于半径时的角度',
      '一个完整的圆周对应：2π弧度、360度、400百分度或6400密位',
      '度分秒制源自古巴比伦的六十进制，1度=60分，1分=60秒',
      '百分度(Gradian)源自法国大革命时期的十进制化运动',
      '密位(Mil)主要用于军事瞄准和测距，不同国家标准略有差异',
      '航海中使用的点(Point)源自传统罗盘的32分度法'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '转换参考',
    items: [
      '常用角度参考：\n  - 直角：90° = π/2 rad = 100 grad\n  - 平角：180° = π rad = 200 grad\n  - 周角：360° = 2π rad = 400 grad',
      '精确度参考：\n  - 天文观测：角秒(″)级\n  - 测绘测量：角分(′)级\n  - 工程应用：度(°)级\n  - 军事瞄准：密位(mil)级',
      '弧度制优势：\n  - 微积分计算更简单\n  - 小角度时弧度≈正弦值\n  - 是国际单位制基本单位',
      '实际应用参考：\n  - 天文：赤经赤纬（时分秒）\n  - 导航：方位角（度或点）\n  - 测绘：经纬度（度分秒）\n  - 军事：射击诸元（密位）'
    ]
  }
}

export default angle 