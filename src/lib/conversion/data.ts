import type { ConversionCategory } from './types'

// 使用比特作为基准单位
const data: ConversionCategory = {
  id: 'data',
  baseUnit: 'bit',
  description: '数据单位转换 (IEC 60027-2)',
  units: {
    // 基本单位
    bit: {
      id: 'bit',
      label: '比特',
      symbol: 'bit',
      ratio: 1,
      category: 'metric'
    },
    byte: {
      id: 'byte',
      label: '字节',
      symbol: 'B',
      ratio: 8,
      category: 'metric'
    },

    // 十进制比特单位（1000倍数）
    petabit: {
      id: 'petabit',
      label: '拍比特',
      symbol: 'Pbit',
      ratio: 1e15,
      category: 'metric'
    },
    terabit: {
      id: 'terabit',
      label: '太比特',
      symbol: 'Tbit',
      ratio: 1e12,
      category: 'metric'
    },
    gigabit: {
      id: 'gigabit',
      label: '吉比特',
      symbol: 'Gbit',
      ratio: 1e9,
      category: 'metric'
    },
    megabit: {
      id: 'megabit',
      label: '兆比特',
      symbol: 'Mbit',
      ratio: 1e6,
      category: 'metric'
    },
    kilobit: {
      id: 'kilobit',
      label: '千比特',
      symbol: 'kbit',
      ratio: 1e3,
      category: 'metric'
    },
    millibit: {
      id: 'millibit',
      label: '毫比特',
      symbol: 'mbit',
      ratio: 1e-3,
      category: 'metric'
    },

    // 十进制字节单位（1000倍数）
    petabyte: {
      id: 'petabyte',
      label: '拍字节',
      symbol: 'PB',
      ratio: 8e15,
      category: 'metric'
    },
    terabyte: {
      id: 'terabyte',
      label: '太字节',
      symbol: 'TB',
      ratio: 8e12,
      category: 'metric'
    },
    gigabyte: {
      id: 'gigabyte',
      label: '吉字节',
      symbol: 'GB',
      ratio: 8e9,
      category: 'metric'
    },
    megabyte: {
      id: 'megabyte',
      label: '兆字节',
      symbol: 'MB',
      ratio: 8e6,
      category: 'metric'
    },
    kilobyte: {
      id: 'kilobyte',
      label: '千字节',
      symbol: 'kB',
      ratio: 8e3,
      category: 'metric'
    },

    // 二进制比特单位（1024倍数）
    pebibit: {
      id: 'pebibit',
      label: '皮比特',
      symbol: 'Pibit',
      ratio: Math.pow(1024, 5),
      category: 'scientific'
    },
    tebibit: {
      id: 'tebibit',
      label: '太比特',
      symbol: 'Tibit',
      ratio: Math.pow(1024, 4),
      category: 'scientific'
    },
    gibibit: {
      id: 'gibibit',
      label: '吉比特',
      symbol: 'Gibit',
      ratio: Math.pow(1024, 3),
      category: 'scientific'
    },
    mebibit: {
      id: 'mebibit',
      label: '米比特',
      symbol: 'Mibit',
      ratio: Math.pow(1024, 2),
      category: 'scientific'
    },
    kibibit: {
      id: 'kibibit',
      label: '基比特',
      symbol: 'Kibit',
      ratio: 1024,
      category: 'scientific'
    },

    // 二进制字节单位（1024倍数）
    pebibyte: {
      id: 'pebibyte',
      label: '皮字节',
      symbol: 'PiB',
      ratio: 8 * Math.pow(1024, 5),
      category: 'scientific'
    },
    tebibyte: {
      id: 'tebibyte',
      label: '太字节',
      symbol: 'TiB',
      ratio: 8 * Math.pow(1024, 4),
      category: 'scientific'
    },
    gibibyte: {
      id: 'gibibyte',
      label: '吉字节',
      symbol: 'GiB',
      ratio: 8 * Math.pow(1024, 3),
      category: 'scientific'
    },
    mebibyte: {
      id: 'mebibyte',
      label: '米字节',
      symbol: 'MiB',
      ratio: 8 * Math.pow(1024, 2),
      category: 'scientific'
    },
    kibibyte: {
      id: 'kibibyte',
      label: '基字节',
      symbol: 'KiB',
      ratio: 8 * 1024,
      category: 'scientific'
    }
  },

  // 知识点
  knowledge: {
    title: '你知道吗？',
    items: [
      '1字节(B)等于8比特(bit)，用于存储一个字符。',
      '十进制前缀(k, M, G)使用1000为基数，而二进制前缀(Ki, Mi, Gi)使用1024为基数。',
      '硬盘制造商使用十进制前缀（KB、MB、GB），而操作系统通常使用二进制前缀（KiB、MiB、GiB）。',
      'IEC 60027-2标准建议使用二进制前缀（Ki、Mi、Gi、Ti、Pi）来避免混淆。',
      '一个ASCII字符占用1字节，而一个Unicode字符可能占用1-4字节。',
      '现代计算机的内存地址通常是字节寻址的，而不是比特寻址。'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '转换提示',
    items: [
      '存储介质参考值：\n  - U盘：8-256 GB\n  - SSD：256 GB-2 TB\n  - 机械硬盘：1-18 TB\n  - 企业级存储：100 TB-1 PB',
      '文件大小参考值：\n  - 文本文档：几KB\n  - 图片：100 KB-10 MB\n  - MP3音乐：3-10 MB\n  - 1080p电影：4-8 GB\n  - 4K电影：50-100 GB',
      '内存容量参考值：\n  - 智能手机：4-12 GB\n  - 笔记本电脑：8-32 GB\n  - 游戏电脑：16-128 GB\n  - 服务器：64 GB-2 TB',
      '云存储参考值：\n  - 个人云盘：5-200 GB\n  - 企业存储：1-100 TB\n  - 数据中心：1-100 PB\n  - 超大规模云：1-100 EB'
    ]
  }
}

export default data 