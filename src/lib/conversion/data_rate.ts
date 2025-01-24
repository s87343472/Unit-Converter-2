import type { ConversionCategory } from './types'

// 使用比特每秒(bit/s)作为基准单位
const data_rate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'metric_bit_per_second',
  units: {
    // 公制单位（十进制，1000进制）
    metric_bit_per_second: {
      id: 'metric_bit_per_second',
      label: '比特每秒 (公制)',
      symbol: 'bit/s',
      ratio: 1,
    },
    metric_kilobit_per_second: {
      id: 'metric_kilobit_per_second',
      label: '千比特每秒 (公制)',
      symbol: 'kbit/s',
      ratio: 1e3, // 1 kbit/s = 1000 bit/s
    },
    metric_megabit_per_second: {
      id: 'metric_megabit_per_second',
      label: '兆比特每秒 (公制)',
      symbol: 'Mbit/s',
      ratio: 1e6, // 1 Mbit/s = 1000 kbit/s
    },
    metric_gigabit_per_second: {
      id: 'metric_gigabit_per_second',
      label: '吉比特每秒 (公制)',
      symbol: 'Gbit/s',
      ratio: 1e9, // 1 Gbit/s = 1000 Mbit/s
    },
    metric_terabit_per_second: {
      id: 'metric_terabit_per_second',
      label: '太比特每秒 (公制)',
      symbol: 'Tbit/s',
      ratio: 1e12, // 1 Tbit/s = 1000 Gbit/s
    },
    
    // 公制字节单位（1字节 = 8比特）
    metric_byte_per_second: {
      id: 'metric_byte_per_second',
      label: '字节每秒 (公制)',
      symbol: 'B/s',
      ratio: 8, // 1 B/s = 8 bit/s
    },
    metric_kilobyte_per_second: {
      id: 'metric_kilobyte_per_second',
      label: '千字节每秒 (公制)',
      symbol: 'kB/s',
      ratio: 8e3, // 1 kB/s = 1000 B/s = 8000 bit/s
    },
    metric_megabyte_per_second: {
      id: 'metric_megabyte_per_second',
      label: '兆字节每秒 (公制)',
      symbol: 'MB/s',
      ratio: 8e6, // 1 MB/s = 1000 kB/s = 8000000 bit/s
    },
    metric_gigabyte_per_second: {
      id: 'metric_gigabyte_per_second',
      label: '吉字节每秒 (公制)',
      symbol: 'GB/s',
      ratio: 8e9, // 1 GB/s = 1000 MB/s = 8000000000 bit/s
    },
    metric_terabyte_per_second: {
      id: 'metric_terabyte_per_second',
      label: '太字节每秒 (公制)',
      symbol: 'TB/s',
      ratio: 8e12, // 1 TB/s = 1000 GB/s = 8000000000000 bit/s
    },

    // 二进制单位（1024进制）
    binary_kibibit_per_second: {
      id: 'binary_kibibit_per_second',
      label: '二进制千比特每秒 (IEC)',
      symbol: 'Kibit/s',
      ratio: 1024, // 1 Kibit/s = 1024 bit/s
    },
    binary_mebibit_per_second: {
      id: 'binary_mebibit_per_second',
      label: '二进制兆比特每秒 (IEC)',
      symbol: 'Mibit/s',
      ratio: Math.pow(1024, 2), // 1 Mibit/s = 1024 Kibit/s
    },
    binary_gibibit_per_second: {
      id: 'binary_gibibit_per_second',
      label: '二进制吉比特每秒 (IEC)',
      symbol: 'Gibit/s',
      ratio: Math.pow(1024, 3), // 1 Gibit/s = 1024 Mibit/s
    },
    binary_tebibit_per_second: {
      id: 'binary_tebibit_per_second',
      label: '二进制太比特每秒 (IEC)',
      symbol: 'Tibit/s',
      ratio: Math.pow(1024, 4), // 1 Tibit/s = 1024 Gibit/s
    },
    
    // 二进制字节单位
    binary_kibibyte_per_second: {
      id: 'binary_kibibyte_per_second',
      label: '二进制千字节每秒 (IEC)',
      symbol: 'KiB/s',
      ratio: 8 * 1024, // 1 KiB/s = 1024 B/s = 8192 bit/s
    },
    binary_mebibyte_per_second: {
      id: 'binary_mebibyte_per_second',
      label: '二进制兆字节每秒 (IEC)',
      symbol: 'MiB/s',
      ratio: 8 * Math.pow(1024, 2), // 1 MiB/s = 1024 KiB/s
    },
    binary_gibibyte_per_second: {
      id: 'binary_gibibyte_per_second',
      label: '二进制吉字节每秒 (IEC)',
      symbol: 'GiB/s',
      ratio: 8 * Math.pow(1024, 3), // 1 GiB/s = 1024 MiB/s
    },
    binary_tebibyte_per_second: {
      id: 'binary_tebibyte_per_second',
      label: '二进制太字节每秒 (IEC)',
      symbol: 'TiB/s',
      ratio: 8 * Math.pow(1024, 4), // 1 TiB/s = 1024 GiB/s
    }
  },
} as const

export default data_rate 