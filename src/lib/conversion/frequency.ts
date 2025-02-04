import type { ConversionCategory } from './types'

// 频率单位转换 (ISO 80000-3)
const frequency: ConversionCategory = {
  id: 'frequency',
  baseUnit: 'hertz',
  description: '频率是单位时间内周期性事件发生的次数，基本单位是赫兹(Hz)。参考ISO 80000-3标准。',
  units: {
    // 公制频率单位 (SI)
    hertz: {
      id: 'hertz',
      label: '赫兹',
      symbol: 'Hz',
      ratio: 1,
      category: 'metric'
    },
    kilo_hertz: {
      id: 'kilo_hertz',
      label: '千赫兹',
      symbol: 'kHz',
      ratio: 1e3,
      category: 'metric'
    },
    mega_hertz: {
      id: 'mega_hertz',
      label: '兆赫兹',
      symbol: 'MHz',
      ratio: 1e6,
      category: 'metric'
    },
    giga_hertz: {
      id: 'giga_hertz',
      label: '吉赫兹',
      symbol: 'GHz',
      ratio: 1e9,
      category: 'metric'
    },
    tera_hertz: {
      id: 'tera_hertz',
      label: '太赫兹',
      symbol: 'THz',
      ratio: 1e12,
      category: 'metric'
    },
    peta_hertz: {
      id: 'peta_hertz',
      label: '拍赫兹',
      symbol: 'PHz',
      ratio: 1e15,
      category: 'metric'
    },
    exa_hertz: {
      id: 'exa_hertz',
      label: '艾赫兹',
      symbol: 'EHz',
      ratio: 1e18,
      category: 'metric'
    },
    zetta_hertz: {
      id: 'zetta_hertz',
      label: '泽赫兹',
      symbol: 'ZHz',
      ratio: 1e21,
      category: 'metric'
    },
    yotta_hertz: {
      id: 'yotta_hertz',
      label: '尧赫兹',
      symbol: 'YHz',
      ratio: 1e24,
      category: 'metric'
    },
    milli_hertz: {
      id: 'milli_hertz',
      label: '毫赫兹',
      symbol: 'mHz',
      ratio: 1e-3,
      category: 'metric'
    },
    micro_hertz: {
      id: 'micro_hertz',
      label: '微赫兹',
      symbol: 'μHz',
      ratio: 1e-6,
      category: 'metric'
    },
    nano_hertz: {
      id: 'nano_hertz',
      label: '纳赫兹',
      symbol: 'nHz',
      ratio: 1e-9,
      category: 'metric'
    },
    pico_hertz: {
      id: 'pico_hertz',
      label: '皮赫兹',
      symbol: 'pHz',
      ratio: 1e-12,
      category: 'metric'
    },
    femto_hertz: {
      id: 'femto_hertz',
      label: '飞赫兹',
      symbol: 'fHz',
      ratio: 1e-15,
      category: 'metric'
    },
    atto_hertz: {
      id: 'atto_hertz',
      label: '阿赫兹',
      symbol: 'aHz',
      ratio: 1e-18,
      category: 'metric'
    },

    // 周期单位
    cycle_per_second: {
      id: 'cycle_per_second',
      label: '每秒周期',
      symbol: 'cps',
      ratio: 1,
      category: 'traditional'
    },
    cycle_per_minute: {
      id: 'cycle_per_minute',
      label: '每分钟周期',
      symbol: 'cpm',
      ratio: 1/60,
      category: 'traditional'
    },
    cycle_per_hour: {
      id: 'cycle_per_hour',
      label: '每小时周期',
      symbol: 'cph',
      ratio: 1/3600,
      category: 'traditional'
    },

    // 角速度单位
    angular_radian_per_second: {
      id: 'angular_radian_per_second',
      label: '弧度每秒',
      symbol: 'rad/s',
      ratio: 1/(2 * Math.PI),
      category: 'scientific'
    },
    angular_degree_per_second: {
      id: 'angular_degree_per_second',
      label: '度每秒',
      symbol: '°/s',
      ratio: 1/360,
      category: 'scientific'
    },
    angular_revolution_per_second: {
      id: 'angular_revolution_per_second',
      label: '转每秒',
      symbol: 'rps',
      ratio: 1,
      category: 'scientific'
    },
    angular_revolution_per_minute: {
      id: 'angular_revolution_per_minute',
      label: '转每分钟',
      symbol: 'rpm',
      ratio: 1/60,
      category: 'scientific'
    },
    angular_kilo_rpm: {
      id: 'angular_kilo_rpm',
      label: '千转每分钟',
      symbol: 'krpm',
      ratio: 1000/60,
      category: 'scientific'
    },
    angular_mega_rpm: {
      id: 'angular_mega_rpm',
      label: '兆转每分钟',
      symbol: 'Mrpm',
      ratio: 1000000/60,
      category: 'scientific'
    },

    // 频率变化率单位
    hertz_per_second: {
      id: 'hertz_per_second',
      label: '赫兹每秒',
      symbol: 'Hz/s',
      ratio: 1,
      category: 'scientific'
    },
    kilo_hertz_per_second: {
      id: 'kilo_hertz_per_second',
      label: '千赫兹每秒',
      symbol: 'kHz/s',
      ratio: 1e3,
      category: 'scientific'
    },
    mega_hertz_per_second: {
      id: 'mega_hertz_per_second',
      label: '兆赫兹每秒',
      symbol: 'MHz/s',
      ratio: 1e6,
      category: 'scientific'
    },

    // 音频频率单位
    audio_beat_per_minute: {
      id: 'audio_beat_per_minute',
      label: '拍每分钟',
      symbol: 'bpm',
      ratio: 1/60,
      category: 'traditional'
    },

    // 光学频率单位
    wavenumber: {
      id: 'wavenumber',
      label: '波数',
      symbol: 'cm⁻¹',
      ratio: 2.998e10, // c/100，其中c是光速
      category: 'scientific'
    },

    // 电子学频率单位
    frame_per_second: {
      id: 'frame_per_second',
      label: '帧每秒',
      symbol: 'fps',
      ratio: 1,
      category: 'traditional'
    },
    refresh_rate: {
      id: 'refresh_rate',
      label: '刷新率',
      symbol: 'Hz',
      ratio: 1,
      category: 'traditional'
    }
  },

  // 知识点
  knowledge: {
    title: '频率知识',
    items: [
      'ISO 80000-3标准定义了频率的基本单位赫兹(Hz)，表示每秒的周期性事件次数',
      '频率单位可分为公制单位(Hz)、周期单位(cps)、角速度单位(rad/s)等多个体系',
      '人耳可听频率范围约为20Hz-20kHz，超声波频率>20kHz',
      '可见光频率范围约为430-750THz，低于红外线，高于紫外线',
      '现代CPU主频通常在2-5GHz范围，高性能服务器可达更高频率',
      '工业电机转速常用RPM表示，高速电机可达100krpm以上',
      '音乐速度(BPM)通常在60-200范围内，120BPM为中等速度',
      '显示器刷新率从60Hz到360Hz不等，竞技显示器追求更高刷新率'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '转换参考',
    items: [
      '日常频率参考：\n  - 心跳：1-2Hz (60-120bpm)\n  - 交流电：50/60Hz\n  - 显示器：60-360Hz\n  - 音频采样：44.1/48kHz',
      '通信频率参考：\n  - AM广播：526.5-1606.5kHz\n  - FM广播：87.5-108MHz\n  - WiFi：2.4/5GHz\n  - 5G：600MHz-71GHz',
      '科学频率参考：\n  - 超声波：>20kHz\n  - 红外线：300GHz-430THz\n  - 可见光：430-750THz\n  - 紫外线：750THz-30PHz',
      '精度参考：\n  - 地球自转：11.6μHz\n  - 原子钟：9.192631770GHz\n  - 光波：数百THz\n  - 伽马射线：>30EHz'
    ]
  }
}

export default frequency 