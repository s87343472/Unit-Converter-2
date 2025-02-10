import type { NumeralConversionCategory } from './types'

// 使用十进制作为基准单位
const numeral: NumeralConversionCategory = {
  id: 'numeral',
  baseUnit: 'decimal',
  description: 'Number Base Conversion',
  units: {
    // 基本进制
    decimal: {
      id: 'decimal',
      label: 'Decimal',
      symbol: 'dec',
      base: 10,
      category: 'scientific'
    },
    binary: {
      id: 'binary',
      label: 'Binary',
      symbol: 'bin',
      base: 2,
      category: 'scientific'
    },
    octal: {
      id: 'octal',
      label: 'Octal',
      symbol: 'oct',
      base: 8,
      category: 'scientific'
    },
    hexadecimal: {
      id: 'hexadecimal',
      label: 'Hexadecimal',
      symbol: 'hex',
      base: 16,
      category: 'scientific'
    },
    // 特殊进制
    scientific_base3: {
      id: 'scientific_base3',
      label: 'Ternary',
      symbol: 'tri',
      base: 3,
      category: 'scientific'
    },
    scientific_base4: {
      id: 'scientific_base4',
      label: 'Quaternary',
      symbol: 'quat',
      base: 4,
      category: 'scientific'
    },
    scientific_base6: {
      id: 'scientific_base6',
      label: 'Senary',
      symbol: 'sex',
      base: 6,
      category: 'scientific'
    },
    scientific_base12: {
      id: 'scientific_base12',
      label: 'Duodecimal',
      symbol: 'duodec',
      base: 12,
      category: 'scientific'
    },
    // 科学计算进制
    scientific_base32: {
      id: 'scientific_base32',
      label: 'Base-32',
      symbol: 'b32',
      base: 32,
      category: 'scientific'
    },
    scientific_base36: {
      id: 'scientific_base36',
      label: 'Hexatrinary',
      symbol: 'b36',
      base: 36,
      category: 'scientific'
    },
    scientific_base64: {
      id: 'scientific_base64',
      label: 'Base-64',
      symbol: 'b64',
      base: 64,
    },
    // 历史进制
    scientific_base20: {
      id: 'scientific_base20',
      label: 'Vigesimal',
      symbol: 'viges',
      base: 20,
      category: 'scientific'
    },
    scientific_base60: {
      id: 'scientific_base60',
      label: 'Sexagesimal',
      symbol: 'sexages',
      base: 60,
      category: 'scientific'
    },
  },

  // 知识点
  knowledge: {
    title: 'Number Base Knowledge',
    items: [
      'Decimal: Uses digits 0-9',
      'Binary: Uses digits 0-1, commonly used in computer systems',
      'Octal: Uses digits 0-7',
      'Hexadecimal: Uses digits 0-9 and letters A-F, commonly used in programming'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: 'Conversion Tips',
    items: [
      'Binary prefix: 0b or 0B',
      'Octal prefix: 0o or 0O',
      'Hexadecimal prefix: 0x or 0X',
      'Common uses:\n  - Binary: Computer data\n  - Octal: Unix file permissions\n  - Hexadecimal: Color codes, memory addresses'
    ]
  }
} as const

export default numeral 