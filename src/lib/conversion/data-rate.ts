import type { ConversionCategory } from './types'

// 使用比特每秒作为基准单位
const dataRate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'bit_per_second',
  units: {
    bit_per_second: {
      id: 'bit_per_second',
      label: '比特每秒 (基本)',
      symbol: 'bps',
      ratio: 1,
    },
    kilobit_per_second: {
      id: 'kilobit_per_second',
      label: '千比特每秒 (基本)',
      symbol: 'kbps',
      ratio: 1000,
    },
    megabit_per_second: {
      id: 'megabit_per_second',
      label: '兆比特每秒 (基本)',
      symbol: 'Mbps',
      ratio: 1000000,
    },
    gigabit_per_second: {
      id: 'gigabit_per_second',
      label: '吉比特每秒 (基本)',
      symbol: 'Gbps',
      ratio: 1000000000,
    },
    byte_per_second: {
      id: 'byte_per_second',
      label: '字节每秒 (基本)',
      symbol: 'B/s',
      ratio: 8,
    },
    kilobyte_per_second: {
      id: 'kilobyte_per_second',
      label: '千字节每秒 (基本)',
      symbol: 'kB/s',
      ratio: 8000,
    },
    megabyte_per_second: {
      id: 'megabyte_per_second',
      label: '兆字节每秒 (基本)',
      symbol: 'MB/s',
      ratio: 8000000,
    },
    gigabyte_per_second: {
      id: 'gigabyte_per_second',
      label: '吉字节每秒 (基本)',
      symbol: 'GB/s',
      ratio: 8000000000,
    },
    terabyte_per_second: {
      id: 'terabyte_per_second',
      label: '太字节每秒 (基本)',
      symbol: 'TB/s',
      ratio: 8000000000000,
    },
  },
}

export default dataRate 