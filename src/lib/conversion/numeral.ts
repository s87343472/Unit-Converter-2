import type { NumeralConversionCategory } from './types'

// 使用十进制作为基准单位
const numeral: NumeralConversionCategory = {
  id: 'numeral',
  baseUnit: 'decimal',
  units: {
    // 基本进制
    decimal: {
      id: 'decimal',
      label: '十进制',
      symbol: 'dec',
      base: 10,
    },
    binary: {
      id: 'binary',
      label: '二进制',
      symbol: 'bin',
      base: 2,
    },
    octal: {
      id: 'octal',
      label: '八进制',
      symbol: 'oct',
      base: 8,
    },
    hexadecimal: {
      id: 'hexadecimal',
      label: '十六进制',
      symbol: 'hex',
      base: 16,
    },
    // 特殊进制
    base3: {
      id: 'base3',
      label: '三进制',
      symbol: 'tri',
      base: 3,
    },
    base4: {
      id: 'base4',
      label: '四进制',
      symbol: 'quat',
      base: 4,
    },
    base6: {
      id: 'base6',
      label: '六进制',
      symbol: 'sex',
      base: 6,
    },
    base12: {
      id: 'base12',
      label: '十二进制',
      symbol: 'duodec',
      base: 12,
    },
    // 科学计算进制
    base32: {
      id: 'base32',
      label: '三十二进制',
      symbol: 'b32',
      base: 32,
    },
    base36: {
      id: 'base36',
      label: '三十六进制',
      symbol: 'b36',
      base: 36,
    },
    base64: {
      id: 'base64',
      label: '六十四进制',
      symbol: 'b64',
      base: 64,
    },
    // 历史进制
    base20: {
      id: 'base20',
      label: '二十进制',
      symbol: 'viges',
      base: 20,
    },
    base60: {
      id: 'base60',
      label: '六十进制',
      symbol: 'sexages',
      base: 60,
    },
  },
}

export default numeral 