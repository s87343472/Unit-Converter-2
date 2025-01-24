import type { ConversionCategory } from './types'

// 使用字节作为基准单位
const data: ConversionCategory = {
  id: 'data',
  baseUnit: 'byte',
  units: {
    // 基本单位
    bit: {
      id: 'bit',
      label: '比特 (基本)',
      symbol: 'b',
      ratio: 0.125,
    },
    byte: {
      id: 'byte',
      label: '字节 (基本)',
      symbol: 'B',
      ratio: 1,
    },
    // 二进制单位 (1024进制)
    kibibyte: {
      id: 'kibibyte',
      label: '千字节 (二进制)',
      symbol: 'KiB',
      ratio: 1024,
    },
    mebibyte: {
      id: 'mebibyte',
      label: '兆字节 (二进制)',
      symbol: 'MiB',
      ratio: 1048576,
    },
    gibibyte: {
      id: 'gibibyte',
      label: '吉字节 (二进制)',
      symbol: 'GiB',
      ratio: 1073741824,
    },
    tebibyte: {
      id: 'tebibyte',
      label: '太字节 (二进制)',
      symbol: 'TiB',
      ratio: 1099511627776,
    },
    pebibyte: {
      id: 'pebibyte',
      label: '二进制拍字节(IEC)',
      ratio: 1125899906842624, // 1024^5
      symbol: 'PiB',
    },
    // 十进制单位 (1000进制)
    kilobyte: {
      id: 'kilobyte',
      label: '千字节 (十进制)',
      symbol: 'kB',
      ratio: 1000,
    },
    megabyte: {
      id: 'megabyte',
      label: '兆字节 (十进制)',
      symbol: 'MB',
      ratio: 1000000,
    },
    gigabyte: {
      id: 'gigabyte',
      label: '吉字节 (十进制)',
      symbol: 'GB',
      ratio: 1000000000,
    },
    terabyte: {
      id: 'terabyte',
      label: '太字节 (十进制)',
      symbol: 'TB',
      ratio: 1000000000000,
    },
    petabyte: {
      id: 'petabyte',
      label: '十进制拍字节(SI)',
      ratio: 1000000000000000, // 1000^5
      symbol: 'PB',
    },
  },
} as const

export default data 