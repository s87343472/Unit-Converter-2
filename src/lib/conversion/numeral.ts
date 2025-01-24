import type { ConversionCategory } from './types'

// 使用十进制作为基准单位
const numeral: ConversionCategory = {
  id: 'numeral',
  baseUnit: 'decimal',
  units: {
    binary: {
      id: 'binary',
      label: '二进制 (基本)',
      symbol: 'bin',
      ratio: 1,
    },
    octal: {
      id: 'octal',
      label: '八进制 (基本)',
      symbol: 'oct',
      ratio: 1,
    },
    decimal: {
      id: 'decimal',
      label: '十进制 (基本)',
      symbol: 'dec',
      ratio: 1,
    },
    hexadecimal: {
      id: 'hexadecimal',
      label: '十六进制 (基本)',
      symbol: 'hex',
      ratio: 1,
    },
    base_3: {
      id: 'base_3',
      label: '三进制 (基本)',
      symbol: 'b3',
      ratio: 1,
    },
    base_4: {
      id: 'base_4',
      label: '四进制 (基本)',
      symbol: 'b4',
      ratio: 1,
    },
    base_32: {
      id: 'base_32',
      label: '三十二进制 (基本)',
      symbol: 'b32',
      ratio: 1,
    },
    base_36: {
      id: 'base_36',
      label: '三十六进制 (基本)',
      symbol: 'b36',
      ratio: 1,
    },
    base_58: {
      id: 'base_58',
      label: '五十八进制 (基本)',
      symbol: 'b58',
      ratio: 1,
    },
    base_64: {
      id: 'base_64',
      label: '六十四进制 (基本)',
      symbol: 'b64',
      ratio: 1,
    },
  },
}

export default numeral 