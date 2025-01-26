import type { ConversionCategory } from './types'

// 使用比特每秒(bit/s)作为基准单位
const data_rate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'bit_per_second',
  units: {
    // 基本单位
    bit_per_second: {
      id: 'bit_per_second',
      label: '比特/秒',
      symbol: 'bit/s',
      ratio: 1 // 基准单位
    },
    byte_per_second: {
      id: 'byte_per_second',
      label: '字节/秒',
      symbol: 'B/s',
      ratio: 8 // 1 B/s = 8 bit/s（1字节 = 8比特）
    },

    // 十进制比特单位（1000倍数）
    kilobit_per_second: {
      id: 'kilobit_per_second',
      label: '千比特/秒',
      symbol: 'kbit/s',
      ratio: 1000 // 1 kbit/s = 1000 bit/s（10^3）
    },
    megabit_per_second: {
      id: 'megabit_per_second',
      label: '兆比特/秒',
      symbol: 'Mbit/s',
      ratio: 1000000 // 1 Mbit/s = 1000000 bit/s（10^6）
    },
    gigabit_per_second: {
      id: 'gigabit_per_second',
      label: '吉比特/秒',
      symbol: 'Gbit/s',
      ratio: 1000000000 // 1 Gbit/s = 1000000000 bit/s（10^9）
    },
    terabit_per_second: {
      id: 'terabit_per_second',
      label: '太比特/秒',
      symbol: 'Tbit/s',
      ratio: 1000000000000 // 1 Tbit/s = 1000000000000 bit/s（10^12）
    },

    // 十进制字节单位（1000倍数）
    kilobyte_per_second: {
      id: 'kilobyte_per_second',
      label: '千字节/秒',
      symbol: 'kB/s',
      ratio: 8000 // 1 kB/s = 8000 bit/s（10^3 * 8）
    },
    megabyte_per_second: {
      id: 'megabyte_per_second',
      label: '兆字节/秒',
      symbol: 'MB/s',
      ratio: 8000000 // 1 MB/s = 8000000 bit/s（10^6 * 8）
    },
    gigabyte_per_second: {
      id: 'gigabyte_per_second',
      label: '吉字节/秒',
      symbol: 'GB/s',
      ratio: 8000000000 // 1 GB/s = 8000000000 bit/s（10^9 * 8）
    },
    terabyte_per_second: {
      id: 'terabyte_per_second',
      label: '太字节/秒',
      symbol: 'TB/s',
      ratio: 8000000000000 // 1 TB/s = 8000000000000 bit/s（10^12 * 8）
    },

    // 二进制比特单位（1024倍数）
    kibibit_per_second: {
      id: 'kibibit_per_second',
      label: '二进制千比特/秒',
      symbol: 'Kibit/s',
      ratio: 1024 // 1 Kibit/s = 1024 bit/s（2^10）
    },
    mebibit_per_second: {
      id: 'mebibit_per_second',
      label: '二进制兆比特/秒',
      symbol: 'Mibit/s',
      ratio: 1048576 // 1 Mibit/s = 1048576 bit/s（2^20）
    },
    gibibit_per_second: {
      id: 'gibibit_per_second',
      label: '二进制吉比特/秒',
      symbol: 'Gibit/s',
      ratio: 1073741824 // 1 Gibit/s = 1073741824 bit/s（2^30）
    },
    tebibit_per_second: {
      id: 'tebibit_per_second',
      label: '二进制太比特/秒',
      symbol: 'Tibit/s',
      ratio: 1099511627776 // 1 Tibit/s = 1099511627776 bit/s（2^40）
    },

    // 二进制字节单位（1024倍数）
    kibibyte_per_second: {
      id: 'kibibyte_per_second',
      label: '二进制千字节/秒',
      symbol: 'KiB/s',
      ratio: 8192 // 1 KiB/s = 8192 bit/s（2^10 * 8）
    },
    mebibyte_per_second: {
      id: 'mebibyte_per_second',
      label: '二进制兆字节/秒',
      symbol: 'MiB/s',
      ratio: 8388608 // 1 MiB/s = 8388608 bit/s（2^20 * 8）
    },
    gibibyte_per_second: {
      id: 'gibibyte_per_second',
      label: '二进制吉字节/秒',
      symbol: 'GiB/s',
      ratio: 8589934592 // 1 GiB/s = 8589934592 bit/s（2^30 * 8）
    },
    tebibyte_per_second: {
      id: 'tebibyte_per_second',
      label: '二进制太字节/秒',
      symbol: 'TiB/s',
      ratio: 8796093022208 // 1 TiB/s = 8796093022208 bit/s（2^40 * 8）
    }
  },
} as const

export default data_rate 