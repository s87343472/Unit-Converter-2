import type { ConversionCategory } from './types'

// 使用比特作为基准单位
const data: ConversionCategory = {
  id: 'data',
  baseUnit: 'metric_bit',
  description: '数据单位转换',
  units: {
    // 基本单位
    metric_bit: {
      id: 'metric_bit',
      label: '比特',
      symbol: 'bit',
      ratio: 1, // 基准单位
      category: 'metric'
    },
    metric_byte: {
      id: 'metric_byte',
      label: '字节',
      symbol: 'B',
      ratio: 8, // 1 byte = 8 bits
      category: 'metric'
    },

    // 十进制前缀单位（1000倍数）
    metric_kilobit: {
      id: 'metric_kilobit',
      label: '千比特',
      symbol: 'kbit',
      ratio: 1e3, // 1 kbit = 1,000 bits
      category: 'metric'
    },
    metric_megabit: {
      id: 'metric_megabit',
      label: '兆比特',
      symbol: 'Mbit',
      ratio: 1e6, // 1 Mbit = 1,000,000 bits
      category: 'metric'
    },
    metric_gigabit: {
      id: 'metric_gigabit',
      label: '吉比特',
      symbol: 'Gbit',
      ratio: 1e9, // 1 Gbit = 1,000,000,000 bits
      category: 'metric'
    },
    metric_terabit: {
      id: 'metric_terabit',
      label: '太比特',
      symbol: 'Tbit',
      ratio: 1e12, // 1 Tbit = 1,000,000,000,000 bits
      category: 'metric'
    },
    metric_petabit: {
      id: 'metric_petabit',
      label: '拍比特',
      symbol: 'Pbit',
      ratio: 1e15, // 1 Pbit = 1,000,000,000,000,000 bits
      category: 'metric'
    },
    metric_kilobyte: {
      id: 'metric_kilobyte',
      label: '千字节',
      symbol: 'kB',
      ratio: 8e3, // 1 kB = 8,000 bits
      category: 'metric'
    },
    metric_megabyte: {
      id: 'metric_megabyte',
      label: '兆字节',
      symbol: 'MB',
      ratio: 8e6, // 1 MB = 8,000,000 bits
      category: 'metric'
    },
    metric_gigabyte: {
      id: 'metric_gigabyte',
      label: '吉字节',
      symbol: 'GB',
      ratio: 8e9, // 1 GB = 8,000,000,000 bits
      category: 'metric'
    },
    metric_terabyte: {
      id: 'metric_terabyte',
      label: '太字节',
      symbol: 'TB',
      ratio: 8e12, // 1 TB = 8,000,000,000,000 bits
      category: 'metric'
    },
    metric_petabyte: {
      id: 'metric_petabyte',
      label: '拍字节',
      symbol: 'PB',
      ratio: 8e15, // 1 PB = 8,000,000,000,000,000 bits
      category: 'metric'
    },

    // 二进制前缀单位（1024倍数）
    binary_kibibit: {
      id: 'binary_kibibit',
      label: '二进制千比特',
      symbol: 'Kibit',
      ratio: 1024, // 1 Kibit = 1,024 bits
      category: 'binary'
    },
    binary_mebibit: {
      id: 'binary_mebibit',
      label: '二进制兆比特',
      symbol: 'Mibit',
      ratio: Math.pow(1024, 2), // 1 Mibit = 1,048,576 bits
      category: 'binary'
    },
    binary_gibibit: {
      id: 'binary_gibibit',
      label: '二进制吉比特',
      symbol: 'Gibit',
      ratio: Math.pow(1024, 3), // 1 Gibit = 1,073,741,824 bits
      category: 'binary'
    },
    binary_tebibit: {
      id: 'binary_tebibit',
      label: '二进制太比特',
      symbol: 'Tibit',
      ratio: Math.pow(1024, 4), // 1 Tibit = 1,099,511,627,776 bits
      category: 'binary'
    },
    binary_pebibit: {
      id: 'binary_pebibit',
      label: '二进制拍比特',
      symbol: 'Pibit',
      ratio: Math.pow(1024, 5), // 1 Pibit = 1,125,899,906,842,624 bits
      category: 'binary'
    },
    binary_kibibyte: {
      id: 'binary_kibibyte',
      label: '二进制千字节',
      symbol: 'KiB',
      ratio: 8 * 1024, // 1 KiB = 8,192 bits
      category: 'binary'
    },
    binary_mebibyte: {
      id: 'binary_mebibyte',
      label: '二进制兆字节',
      symbol: 'MiB',
      ratio: 8 * Math.pow(1024, 2), // 1 MiB = 8,388,608 bits
      category: 'binary'
    },
    binary_gibibyte: {
      id: 'binary_gibibyte',
      label: '二进制吉字节',
      symbol: 'GiB',
      ratio: 8 * Math.pow(1024, 3), // 1 GiB = 8,589,934,592 bits
      category: 'binary'
    },
    binary_tebibyte: {
      id: 'binary_tebibyte',
      label: '二进制太字节',
      symbol: 'TiB',
      ratio: 8 * Math.pow(1024, 4), // 1 TiB = 8,796,093,022,208 bits
      category: 'binary'
    },
    binary_pebibyte: {
      id: 'binary_pebibyte',
      label: '二进制拍字节',
      symbol: 'PiB',
      ratio: 8 * Math.pow(1024, 5), // 1 PiB = 9,007,199,254,740,992 bits
      category: 'binary'
    }
  },

  // 知识点
  knowledge: {
    title: '数据单位知识',
    items: [
      '1字节(Byte) = 8比特(bit)',
      '十进制前缀：k(千，10³)、M(兆，10⁶)、G(吉，10⁹)、T(太，10¹²)、P(拍，10¹⁵)',
      '二进制前缀：Ki(1024)、Mi(1024²)、Gi(1024³)、Ti(1024⁴)、Pi(1024⁵)',
      '存储容量通常使用二进制前缀，而数据传输速率通常使用十进制前缀'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '数据单位换算提示',
    items: [
      '存储容量参考：\n  - 文本文件：几KB到几MB\n  - 图片文件：几MB到几十MB\n  - 视频文件：几百MB到几GB',
      '常见存储设备容量：\n  - U盘：8GB-256GB\n  - 固态硬盘：256GB-2TB\n  - 机械硬盘：1TB-18TB',
      '注意区分：\n  - 1KB = 1000B（十进制）\n  - 1KiB = 1024B（二进制）',
      '硬盘厂商通常使用十进制单位，而操作系统通常使用二进制单位'
    ]
  }
} as const

export default data 