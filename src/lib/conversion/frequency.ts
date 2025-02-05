import type { ConversionCategory } from './types'

// 频率单位转换 (ISO 80000-3)
const frequency: ConversionCategory = {
  id: 'frequency',
  baseUnit: 'metric_hertz',
  description: '频率是单位时间内周期性事件发生的次数，基本单位是赫兹(Hz)。参考ISO 80000-3标准。',
  units: {
    // 公制频率单位 (SI)
    metric_hertz: {
      id: 'metric_hertz',
      label: '赫兹',
      symbol: 'Hz',
      ratio: 1,
      category: 'metric'
    },
    metric_kilohertz: {
      id: 'metric_kilohertz',
      label: '千赫兹',
      symbol: 'kHz',
      ratio: 1e3,
      category: 'metric'
    },
    metric_megahertz: {
      id: 'metric_megahertz',
      label: '兆赫兹',
      symbol: 'MHz',
      ratio: 1e6,
      category: 'metric'
    },
    metric_gigahertz: {
      id: 'metric_gigahertz',
      label: '吉赫兹',
      symbol: 'GHz',
      ratio: 1e9,
      category: 'metric'
    },
    metric_terahertz: {
      id: 'metric_terahertz',
      label: '太赫兹',
      symbol: 'THz',
      ratio: 1e12,
      category: 'metric'
    },
    metric_petahertz: {
      id: 'metric_petahertz',
      label: '拍赫兹',
      symbol: 'PHz',
      ratio: 1e15,
      category: 'metric'
    },
    metric_exahertz: {
      id: 'metric_exahertz',
      label: '艾赫兹',
      symbol: 'EHz',
      ratio: 1e18,
      category: 'metric'
    },
    metric_zettahertz: {
      id: 'metric_zettahertz',
      label: '泽赫兹',
      symbol: 'ZHz',
      ratio: 1e21,
      category: 'metric'
    },
    metric_yottahertz: {
      id: 'metric_yottahertz',
      label: '尧赫兹',
      symbol: 'YHz',
      ratio: 1e24,
      category: 'metric'
    },
    metric_millihertz: {
      id: 'metric_millihertz',
      label: '毫赫兹',
      symbol: 'mHz',
      ratio: 1e-3,
      category: 'metric'
    },
    metric_microhertz: {
      id: 'metric_microhertz',
      label: '微赫兹',
      symbol: 'μHz',
      ratio: 1e-6,
      category: 'metric'
    },
    metric_nanohertz: {
      id: 'metric_nanohertz',
      label: '纳赫兹',
      symbol: 'nHz',
      ratio: 1e-9,
      category: 'metric'
    },
    metric_picohertz: {
      id: 'metric_picohertz',
      label: '皮赫兹',
      symbol: 'pHz',
      ratio: 1e-12,
      category: 'metric'
    },
    metric_femtohertz: {
      id: 'metric_femtohertz',
      label: '飞赫兹',
      symbol: 'fHz',
      ratio: 1e-15,
      category: 'metric'
    },
    metric_attohertz: {
      id: 'metric_attohertz',
      label: '阿赫兹',
      symbol: 'aHz',
      ratio: 1e-18,
      category: 'metric'
    },

    // 周期单位
    scientific_cycle_per_second: {
      id: 'scientific_cycle_per_second',
      label: '每秒周期',
      symbol: 'cps',
      ratio: 1,
      category: 'scientific'
    },
    scientific_cycle_per_minute: {
      id: 'scientific_cycle_per_minute',
      label: '每分钟周期',
      symbol: 'cpm',
      ratio: 1/60,
      category: 'scientific'
    },
    scientific_cycle_per_hour: {
      id: 'scientific_cycle_per_hour',
      label: '每小时周期',
      symbol: 'cph',
      ratio: 1/3600,
      category: 'scientific'
    },

    // 角速度单位
    scientific_radian_per_second: {
      id: 'scientific_radian_per_second',
      label: '弧度每秒',
      symbol: 'rad/s',
      ratio: 1/(2 * Math.PI),
      category: 'scientific'
    },
    scientific_degree_per_second: {
      id: 'scientific_degree_per_second',
      label: '度每秒',
      symbol: '°/s',
      ratio: 1/360,
      category: 'scientific'
    },
    scientific_revolution_per_second: {
      id: 'scientific_revolution_per_second',
      label: '转每秒',
      symbol: 'rps',
      ratio: 1,
      category: 'scientific'
    },
    scientific_revolution_per_minute: {
      id: 'scientific_revolution_per_minute',
      label: '转每分钟',
      symbol: 'rpm',
      ratio: 1/60,
      category: 'scientific'
    },
    scientific_kilorpm: {
      id: 'scientific_kilorpm',
      label: '千转每分钟',
      symbol: 'krpm',
      ratio: 1000/60,
      category: 'scientific'
    },
    scientific_megarpm: {
      id: 'scientific_megarpm',
      label: '兆转每分钟',
      symbol: 'Mrpm',
      ratio: 1000000/60,
      category: 'scientific'
    },

    // 频率变化率单位
    scientific_hertz_per_second: {
      id: 'scientific_hertz_per_second',
      label: '赫兹每秒',
      symbol: 'Hz/s',
      ratio: 1,
      category: 'scientific'
    },
    scientific_kilohertz_per_second: {
      id: 'scientific_kilohertz_per_second',
      label: '千赫兹每秒',
      symbol: 'kHz/s',
      ratio: 1e3,
      category: 'scientific'
    },
    scientific_megahertz_per_second: {
      id: 'scientific_megahertz_per_second',
      label: '兆赫兹每秒',
      symbol: 'MHz/s',
      ratio: 1e6,
      category: 'scientific'
    },

    // 音频频率单位
    scientific_beat_per_minute: {
      id: 'scientific_beat_per_minute',
      label: '拍每分钟',
      symbol: 'bpm',
      ratio: 1/60,
      category: 'scientific'
    },

    // 光学频率单位
    scientific_wavenumber: {
      id: 'scientific_wavenumber',
      label: '波数',
      symbol: 'cm⁻¹',
      ratio: 2.998e10, // c/100，其中c是光速
      category: 'scientific'
    },

    // 电子学频率单位
    scientific_frame_per_second: {
      id: 'scientific_frame_per_second',
      label: '帧每秒',
      symbol: 'fps',
      ratio: 1,
      category: 'scientific'
    },
    scientific_refresh_rate: {
      id: 'scientific_refresh_rate',
      label: '刷新率',
      symbol: 'Hz',
      ratio: 1,
      category: 'scientific'
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
      '工业电机转速常用RPM表示，高速电机可达100krpm以上'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '频率换算提示',
    items: [
      '声音频率参考：\n  - 人声基频：80-400 Hz\n  - 钢琴音域：27.5-4186 Hz\n  - 超声波：>20 kHz',
      '电子设备参考：\n  - CPU主频：2-5 GHz\n  - WiFi频段：2.4/5 GHz\n  - 显示器刷新率：60-360 Hz',
      '机械转速参考：\n  - 汽车发动机：1000-6000 rpm\n  - 硬盘转速：5400-15000 rpm\n  - 高速电机：>100000 rpm',
      '光学频率参考：\n  - 红光：430 THz\n  - 绿光：560 THz\n  - 紫光：750 THz',
      '音乐速度参考：\n  - 慢板：60-80 bpm\n  - 中板：90-120 bpm\n  - 快板：140-200 bpm'
    ]
  }
} as const

export default frequency 