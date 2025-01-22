import type { ConversionCategory } from './types'

// 基准单位为十进制
const numeral: ConversionCategory = {
  id: 'numeral',
  baseUnit: 'decimal',
  units: {
    decimal: {
      id: 'decimal',
      label: '十进制',
      symbol: 'dec',
      ratio: 1,
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    binary: {
      id: 'binary',
      label: '二进制',
      symbol: 'bin',
      toBase: (value: number) => parseInt(value.toString(), 2),
      fromBase: (value: number) => value.toString(2),
    },
    hexadecimal: {
      id: 'hexadecimal',
      label: '十六进制',
      symbol: 'hex',
      toBase: (value: number) => parseInt(value.toString(), 16),
      fromBase: (value: number) => value.toString(16).toUpperCase(),
    },
    octal: {
      id: 'octal',
      label: '八进制',
      symbol: 'oct',
      toBase: (value: number) => parseInt(value.toString(), 8),
      fromBase: (value: number) => value.toString(8),
    },
    base3: {
      id: 'base3',
      label: '三进制',
      symbol: 'b3',
      toBase: (value: number) => parseInt(value.toString(), 3),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(3),
    },
    base4: {
      id: 'base4',
      label: '四进制',
      symbol: 'b4',
      toBase: (value: number) => parseInt(value.toString(), 4),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(4),
    },
    base6: {
      id: 'base6',
      label: '六进制',
      symbol: 'b6',
      toBase: (value: number) => parseInt(value.toString(), 6),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(6),
    },
    base12: {
      id: 'base12',
      label: '十二进制',
      symbol: 'b12',
      toBase: (value: number) => parseInt(value.toString(), 12),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(12),
    },
    base20: {
      id: 'base20',
      label: '二十进制',
      symbol: 'b20',
      toBase: (value: number) => parseInt(value.toString(), 20),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(20),
    },
    base32: {
      id: 'base32',
      label: '三十二进制',
      symbol: 'b32',
      toBase: (value: number) => parseInt(value.toString(), 32),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(32).toUpperCase(),
    },
    base36: {
      id: 'base36',
      label: '三十六进制',
      symbol: 'b36',
      toBase: (value: number) => parseInt(value.toString(), 36),
      fromBase: (value: number) => parseInt(value.toString(10), 10).toString(36).toUpperCase(),
    },
  },
} as const

export default numeral 