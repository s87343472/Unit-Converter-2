import { ConversionCategory } from './types'

export const data_rate: ConversionCategory = {
  id: 'data_rate',
  baseUnit: 'bit_per_second',
  description: '数据传输速率单位，基于IEC 80000-13标准。',
  units: {
    // 基本单位
    bit_per_second: {
      id: 'bit_per_second',
      label: '比特每秒',
      symbol: 'bit/s',
      category: 'metric',
      ratio: 1
    },
    byte_per_second: {
      id: 'byte_per_second',
      label: '字节每秒',
      symbol: 'B/s', 
      category: 'metric',
      ratio: 8
    },

    // SI前缀单位 - 比特系列
    digital_kilobit_per_second: {
      id: 'digital_kilobit_per_second',
      label: '千比特每秒',
      symbol: 'kbit/s',
      category: 'scientific',
      ratio: 1000
    },
    digital_megabit_per_second: {
      id: 'digital_megabit_per_second',
      label: '兆比特每秒',
      symbol: 'Mbit/s',
      category: 'scientific',
      ratio: 1000000
    },
    digital_gigabit_per_second: {
      id: 'digital_gigabit_per_second',
      label: '吉比特每秒',
      symbol: 'Gbit/s',
      category: 'scientific',
      ratio: 1000000000
    },
    digital_terabit_per_second: {
      id: 'digital_terabit_per_second',
      label: '太比特每秒',
      symbol: 'Tbit/s',
      category: 'scientific',
      ratio: 1000000000000
    },

    // SI前缀单位 - 字节系列
    digital_byte_per_second: {
      id: 'digital_byte_per_second',
      label: '字节每秒',
      symbol: 'B/s',
      category: 'scientific',
      ratio: 8
    },
    digital_kilobyte_per_second: {
      id: 'digital_kilobyte_per_second',
      label: '千字节每秒',
      symbol: 'kB/s',
      category: 'scientific',
      ratio: 8000
    },
    digital_megabyte_per_second: {
      id: 'digital_megabyte_per_second',
      label: '兆字节每秒',
      symbol: 'MB/s',
      category: 'scientific',
      ratio: 8000000
    },
    digital_gigabyte_per_second: {
      id: 'digital_gigabyte_per_second',
      label: '吉字节每秒',
      symbol: 'GB/s',
      category: 'scientific',
      ratio: 8000000000
    },
    digital_terabyte_per_second: {
      id: 'digital_terabyte_per_second',
      label: '太字节每秒',
      symbol: 'TB/s',
      category: 'scientific',
      ratio: 8000000000000
    },

    // IEC前缀单位 - 比特系列
    digital_kibibit_per_second: {
      id: 'digital_kibibit_per_second',
      label: '二进制千比特每秒',
      symbol: 'Kibit/s',
      category: 'scientific',
      ratio: 1024
    },
    digital_mebibit_per_second: {
      id: 'digital_mebibit_per_second',
      label: '二进制兆比特每秒',
      symbol: 'Mibit/s',
      category: 'scientific',
      ratio: 1048576
    },
    digital_gibibit_per_second: {
      id: 'digital_gibibit_per_second',
      label: '二进制吉比特每秒',
      symbol: 'Gibit/s',
      category: 'scientific',
      ratio: 1073741824
    },
    digital_tebibit_per_second: {
      id: 'digital_tebibit_per_second',
      label: '二进制太比特每秒',
      symbol: 'Tibit/s',
      category: 'scientific',
      ratio: 1099511627776
    },

    // IEC前缀单位 - 字节系列
    digital_kibibyte_per_second: {
      id: 'digital_kibibyte_per_second',
      label: '二进制千字节每秒',
      symbol: 'KiB/s',
      category: 'scientific',
      ratio: 8192
    },
    digital_mebibyte_per_second: {
      id: 'digital_mebibyte_per_second',
      label: '二进制兆字节每秒',
      symbol: 'MiB/s',
      category: 'scientific',
      ratio: 8388608
    },
    digital_gibibyte_per_second: {
      id: 'digital_gibibyte_per_second',
      label: '二进制吉字节每秒',
      symbol: 'GiB/s',
      category: 'scientific',
      ratio: 8589934592
    },
    digital_tebibyte_per_second: {
      id: 'digital_tebibyte_per_second',
      label: '二进制太字节每秒',
      symbol: 'TiB/s',
      category: 'scientific',
      ratio: 8796093022208
    }
  },
  knowledge: {
    title: '数据传输速率知识',
    items: [
      '比特和字节的关系：1字节(B) = 8比特(bit)。这是计算机中最基本的数据单位关系。',
      'SI前缀和IEC前缀：SI前缀使用1000作为倍数(如：1 kB = 1000 B)，而IEC前缀使用1024作为倍数(如：1 KiB = 1024 B)。',
      '网络带宽：网络带宽通常使用比特每秒(bit/s)为单位。例如，1 Gbit/s的网络可以理论上每秒传输1,000,000,000比特。',
      '存储传输速度：存储设备的传输速度通常使用字节每秒(B/s)为单位。例如，一个SSD的读取速度可能达到500 MB/s。',
      'SI前缀单位换算：1 kbit/s = 1000 bit/s，1 Mbit/s = 1000 kbit/s，1 Gbit/s = 1000 Mbit/s，1 Tbit/s = 1000 Gbit/s',
      'SI前缀字节换算：1 kB/s = 1000 B/s = 8000 bit/s，1 MB/s = 1000 kB/s，1 GB/s = 1000 MB/s，1 TB/s = 1000 GB/s',
      'IEC前缀单位换算：1 Kibit/s = 1024 bit/s，1 Mibit/s = 1024 Kibit/s，1 Gibit/s = 1024 Mibit/s，1 Tibit/s = 1024 Gibit/s',
      'IEC前缀字节换算：1 KiB/s = 1024 B/s = 8192 bit/s，1 MiB/s = 1024 KiB/s，1 GiB/s = 1024 MiB/s，1 TiB/s = 1024 GiB/s',
      '使用规范：网络速度通常使用比特(bit)为单位，而存储速度通常使用字节(byte)为单位。',
      '实际性能：实际数据传输速率通常低于理论速率，因为存在协议开销和其他限制因素。',
      '单位选择：选择合适的单位可以使数值更易读，例如使用MB/s而不是B/s来表示较大的传输速率。'
    ]
  }
}

export default data_rate 