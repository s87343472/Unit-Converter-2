import { ConversionCategory } from './types'

// 基准单位为比特每秒(bit/s)
const data_rate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'bit_per_second',
  units: {
    // 基本单位
    bit_per_second: {
      id: 'bit_per_second',
      label: '比特每秒(SI)',
      ratio: 1,
      symbol: 'bit/s',
    },
    byte_per_second: {
      id: 'byte_per_second',
      label: '字节每秒(SI)',
      ratio: 8, // 1 B/s = 8 bit/s
      symbol: 'B/s',
    },
    // 二进制倍数单位 (1024进制)
    kibibit_per_second: {
      id: 'kibibit_per_second',
      label: '二进制千比特每秒(IEC)',
      ratio: 1024,
      symbol: 'Kibit/s',
    },
    mebibit_per_second: {
      id: 'mebibit_per_second',
      label: '二进制兆比特每秒(IEC)',
      ratio: 1048576, // 1024^2
      symbol: 'Mibit/s',
    },
    gibibit_per_second: {
      id: 'gibibit_per_second',
      label: '二进制吉比特每秒(IEC)',
      ratio: 1073741824, // 1024^3
      symbol: 'Gibit/s',
    },
    kibibyte_per_second: {
      id: 'kibibyte_per_second',
      label: '二进制千字节每秒(IEC)',
      ratio: 8192, // 1024 * 8
      symbol: 'KiB/s',
    },
    mebibyte_per_second: {
      id: 'mebibyte_per_second',
      label: '二进制兆字节每秒(IEC)',
      ratio: 8388608, // 1024^2 * 8
      symbol: 'MiB/s',
    },
    gibibyte_per_second: {
      id: 'gibibyte_per_second',
      label: '二进制吉字节每秒(IEC)',
      ratio: 8589934592, // 1024^3 * 8
      symbol: 'GiB/s',
    },
    // 十进制倍数单位 (1000进制)
    kilobit_per_second: {
      id: 'kilobit_per_second',
      label: '十进制千比特每秒(SI)',
      ratio: 1000,
      symbol: 'kbit/s',
    },
    megabit_per_second: {
      id: 'megabit_per_second',
      label: '十进制兆比特每秒(SI)',
      ratio: 1000000, // 1000^2
      symbol: 'Mbit/s',
    },
    gigabit_per_second: {
      id: 'gigabit_per_second',
      label: '十进制吉比特每秒(SI)',
      ratio: 1000000000, // 1000^3
      symbol: 'Gbit/s',
    },
    kilobyte_per_second: {
      id: 'kilobyte_per_second',
      label: '十进制千字节每秒(SI)',
      ratio: 8000, // 1000 * 8
      symbol: 'kB/s',
    },
    megabyte_per_second: {
      id: 'megabyte_per_second',
      label: '十进制兆字节每秒(SI)',
      ratio: 8000000, // 1000^2 * 8
      symbol: 'MB/s',
    },
    gigabyte_per_second: {
      id: 'gigabyte_per_second',
      label: '十进制吉字节每秒(SI)',
      ratio: 8000000000, // 1000^3 * 8
      symbol: 'GB/s',
    },
  },
} as const

export default data_rate 