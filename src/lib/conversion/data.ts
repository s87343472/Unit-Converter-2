import type { ConversionCategory } from './types'

// 使用字节作为基准单位
const data: ConversionCategory = {
  id: 'data',
  baseUnit: 'byte',
  units: {
    // 基本单位
    bit: {
      id: 'bit',
      label: '比特',
      symbol: 'b',
      ratio: 0.125, // 1 byte = 8 bits
    },
    byte: {
      id: 'byte',
      label: '字节',
      symbol: 'B',
      ratio: 1,
    },
    // 二进制单位（1024进制）
    kibibyte: {
      id: 'kibibyte',
      label: '二进制千字节',
      symbol: 'KiB',
      ratio: 1024,
    },
    mebibyte: {
      id: 'mebibyte',
      label: '二进制兆字节',
      symbol: 'MiB',
      ratio: 1048576, // 1024^2
    },
    gibibyte: {
      id: 'gibibyte',
      label: '二进制吉字节',
      symbol: 'GiB',
      ratio: 1073741824, // 1024^3
    },
    tebibyte: {
      id: 'tebibyte',
      label: '二进制太字节',
      symbol: 'TiB',
      ratio: 1099511627776, // 1024^4
    },
    pebibyte: {
      id: 'pebibyte',
      label: '二进制拍字节',
      symbol: 'PiB',
      ratio: 1125899906842624, // 1024^5
    },
    // 十进制单位（1000进制）
    kilobyte: {
      id: 'kilobyte',
      label: '十进制千字节',
      symbol: 'KB',
      ratio: 1000,
    },
    megabyte: {
      id: 'megabyte',
      label: '十进制兆字节',
      symbol: 'MB',
      ratio: 1000000, // 1000^2
    },
    gigabyte: {
      id: 'gigabyte',
      label: '十进制吉字节',
      symbol: 'GB',
      ratio: 1000000000, // 1000^3
    },
    terabyte: {
      id: 'terabyte',
      label: '十进制太字节',
      symbol: 'TB',
      ratio: 1000000000000, // 1000^4
    },
    petabyte: {
      id: 'petabyte',
      label: '十进制拍字节',
      symbol: 'PB',
      ratio: 1000000000000000, // 1000^5
    },
    // 数据传输速率单位（每秒）
    bit_per_second: {
      id: 'bit_per_second',
      label: '比特每秒',
      symbol: 'bps',
      ratio: 0.125,
    },
    kilobit_per_second: {
      id: 'kilobit_per_second',
      label: '千比特每秒',
      symbol: 'Kbps',
      ratio: 125, // 1000 bits = 125 bytes
    },
    megabit_per_second: {
      id: 'megabit_per_second',
      label: '兆比特每秒',
      symbol: 'Mbps',
      ratio: 125000, // 1000000 bits = 125000 bytes
    },
    gigabit_per_second: {
      id: 'gigabit_per_second',
      label: '吉比特每秒',
      symbol: 'Gbps',
      ratio: 125000000, // 1000000000 bits = 125000000 bytes
    },
    // 存储容量单位（硬盘制造商使用）
    decimal_kilobyte: {
      id: 'decimal_kilobyte',
      label: '营销千字节',
      symbol: 'KB',
      ratio: 1000,
    },
    decimal_megabyte: {
      id: 'decimal_megabyte',
      label: '营销兆字节',
      symbol: 'MB',
      ratio: 1000000,
    },
    decimal_gigabyte: {
      id: 'decimal_gigabyte',
      label: '营销吉字节',
      symbol: 'GB',
      ratio: 1000000000,
    },
    decimal_terabyte: {
      id: 'decimal_terabyte',
      label: '营销太字节',
      symbol: 'TB',
      ratio: 1000000000000,
    },
  },
}

export default data 