import type { ConversionCategory } from './types'

// 使用比特每秒作为基准单位
const data_rate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'digital_bit_per_second',
  description: '数据传输速率单位转换',
  units: {
    // 基本单位
    digital_bit_per_second: {
      id: 'digital_bit_per_second',
      label: '比特每秒',
      symbol: 'bps',
      ratio: 1, // 基准单位
      category: 'metric'
    },
    digital_byte_per_second: {
      id: 'digital_byte_per_second',
      label: '字节每秒',
      symbol: 'B/s',
      ratio: 8, // 1 B/s = 8 bps
      category: 'metric'
    },

    // 千位单位
    digital_kilobit_per_second: {
      id: 'digital_kilobit_per_second',
      label: '千比特每秒',
      symbol: 'kbps',
      ratio: 1e3, // 1 kbps = 1,000 bps
      category: 'metric'
    },
    digital_kilobyte_per_second: {
      id: 'digital_kilobyte_per_second',
      label: '千字节每秒',
      symbol: 'kB/s',
      ratio: 8e3, // 1 kB/s = 8,000 bps
      category: 'metric'
    },

    // 兆位单位
    digital_megabit_per_second: {
      id: 'digital_megabit_per_second',
      label: '兆比特每秒',
      symbol: 'Mbps',
      ratio: 1e6, // 1 Mbps = 1,000,000 bps
      category: 'metric'
    },
    digital_megabyte_per_second: {
      id: 'digital_megabyte_per_second',
      label: '兆字节每秒',
      symbol: 'MB/s',
      ratio: 8e6, // 1 MB/s = 8,000,000 bps
      category: 'metric'
    },

    // 吉位单位
    digital_gigabit_per_second: {
      id: 'digital_gigabit_per_second',
      label: '吉比特每秒',
      symbol: 'Gbps',
      ratio: 1e9, // 1 Gbps = 1,000,000,000 bps
      category: 'metric'
    },
    digital_gigabyte_per_second: {
      id: 'digital_gigabyte_per_second',
      label: '吉字节每秒',
      symbol: 'GB/s',
      ratio: 8e9, // 1 GB/s = 8,000,000,000 bps
      category: 'metric'
    },

    // 太位单位
    digital_terabit_per_second: {
      id: 'digital_terabit_per_second',
      label: '太比特每秒',
      symbol: 'Tbps',
      ratio: 1e12, // 1 Tbps = 1,000,000,000,000 bps
      category: 'metric'
    },
    digital_terabyte_per_second: {
      id: 'digital_terabyte_per_second',
      label: '太字节每秒',
      symbol: 'TB/s',
      ratio: 8e12, // 1 TB/s = 8,000,000,000,000 bps
      category: 'metric'
    },

    // 二进制单位 - 比特
    binary_kibibit_per_second: {
      id: 'binary_kibibit_per_second',
      label: '二进制千比特每秒',
      symbol: 'Kibps',
      ratio: 1024, // 1 Kibps = 1,024 bps
      category: 'binary'
    },
    binary_mebibit_per_second: {
      id: 'binary_mebibit_per_second',
      label: '二进制兆比特每秒',
      symbol: 'Mibps',
      ratio: Math.pow(1024, 2), // 1 Mibps = 1,048,576 bps
      category: 'binary'
    },
    binary_gibibit_per_second: {
      id: 'binary_gibibit_per_second',
      label: '二进制吉比特每秒',
      symbol: 'Gibps',
      ratio: Math.pow(1024, 3), // 1 Gibps = 1,073,741,824 bps
      category: 'binary'
    },
    binary_tebibit_per_second: {
      id: 'binary_tebibit_per_second',
      label: '二进制太比特每秒',
      symbol: 'Tibps',
      ratio: Math.pow(1024, 4), // 1 Tibps = 1,099,511,627,776 bps
      category: 'binary'
    },

    // 二进制单位 - 字节
    binary_kibibyte_per_second: {
      id: 'binary_kibibyte_per_second',
      label: '二进制千字节每秒',
      symbol: 'KiB/s',
      ratio: 8 * 1024, // 1 KiB/s = 8,192 bps
      category: 'binary'
    },
    binary_mebibyte_per_second: {
      id: 'binary_mebibyte_per_second',
      label: '二进制兆字节每秒',
      symbol: 'MiB/s',
      ratio: 8 * Math.pow(1024, 2), // 1 MiB/s = 8,388,608 bps
      category: 'binary'
    },
    binary_gibibyte_per_second: {
      id: 'binary_gibibyte_per_second',
      label: '二进制吉字节每秒',
      symbol: 'GiB/s',
      ratio: 8 * Math.pow(1024, 3), // 1 GiB/s = 8,589,934,592 bps
      category: 'binary'
    },
    binary_tebibyte_per_second: {
      id: 'binary_tebibyte_per_second',
      label: '二进制太字节每秒',
      symbol: 'TiB/s',
      ratio: 8 * Math.pow(1024, 4), // 1 TiB/s = 8,796,093,022,208 bps
      category: 'binary'
    }
  },

  // 知识点
  knowledge: {
    title: '数据传输速率知识',
    items: [
      '1字节(Byte) = 8比特(bit)',
      '常用的前缀：k(千，10³)、M(兆，10⁶)、G(吉，10⁹)、T(太，10¹²)',
      '网络速率通常用比特(bit)表示，而存储传输速率通常用字节(Byte)表示',
      '实际传输速率可能受网络条件、硬件限制等因素影响'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '数据传输速率换算提示',
    items: [
      '网络速率参考：\n  - 4G网络：100 Mbps\n  - 5G网络：1-10 Gbps\n  - 千兆光纤：1 Gbps',
      '存储速率参考：\n  - USB 2.0：60 MB/s\n  - USB 3.0：640 MB/s\n  - SSD：500-3500 MB/s',
      '视频流参考：\n  - 1080p视频：5-8 Mbps\n  - 4K视频：15-25 Mbps\n  - 8K视频：50-100 Mbps',
      '注意区分大小写：\n  - b(bit)：比特\n  - B(Byte)：字节'
    ]
  }
} as const

export default data_rate 