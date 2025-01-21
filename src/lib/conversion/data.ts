import { ConversionCategory } from './types'

// 基准单位为字节(byte)
const data: ConversionCategory = {
  id: 'data',
  baseUnit: 'byte',
  units: {
    // 基本单位
    bit: {
      id: 'bit',
      label: '比特',
      ratio: 0.125, // 1 byte = 8 bits
      symbol: 'bit',
    },
    byte: {
      id: 'byte',
      label: '字节',
      ratio: 1,
      symbol: 'B',
    },
    // 二进制单位 (1024进制)
    kibibyte: {
      id: 'kibibyte',
      label: '二进制千字节',
      ratio: 1024,
      symbol: 'KiB',
    },
    mebibyte: {
      id: 'mebibyte',
      label: '二进制兆字节',
      ratio: 1048576, // 1024^2
      symbol: 'MiB',
    },
    gibibyte: {
      id: 'gibibyte',
      label: '二进制吉字节',
      ratio: 1073741824, // 1024^3
      symbol: 'GiB',
    },
    tebibyte: {
      id: 'tebibyte',
      label: '二进制太字节',
      ratio: 1099511627776, // 1024^4
      symbol: 'TiB',
    },
    pebibyte: {
      id: 'pebibyte',
      label: '二进制拍字节',
      ratio: 1125899906842624, // 1024^5
      symbol: 'PiB',
    },
    // 十进制单位 (1000进制)
    kilobyte: {
      id: 'kilobyte',
      label: '十进制千字节',
      ratio: 1000,
      symbol: 'KB',
    },
    megabyte: {
      id: 'megabyte',
      label: '十进制兆字节',
      ratio: 1000000, // 1000^2
      symbol: 'MB',
    },
    gigabyte: {
      id: 'gigabyte',
      label: '十进制吉字节',
      ratio: 1000000000, // 1000^3
      symbol: 'GB',
    },
    terabyte: {
      id: 'terabyte',
      label: '十进制太字节',
      ratio: 1000000000000, // 1000^4
      symbol: 'TB',
    },
    petabyte: {
      id: 'petabyte',
      label: '十进制拍字节',
      ratio: 1000000000000000, // 1000^5
      symbol: 'PB',
    },
  },
} as const

export default data 