import type { ConversionCategory } from './types'

// 使用赫兹作为基准单位
const frequency: ConversionCategory = {
  id: 'frequency',
  baseUnit: 'metric_hertz',
  units: {
    // 公制频率单位
    metric_hertz: {
      id: 'metric_hertz',
      label: '赫兹',
      symbol: 'Hz',
      ratio: 1,
    },
    metric_kilohertz: {
      id: 'metric_kilohertz',
      label: '千赫兹',
      symbol: 'kHz',
      ratio: 1000,
    },
    metric_megahertz: {
      id: 'metric_megahertz',
      label: '兆赫兹',
      symbol: 'MHz',
      ratio: 1000000,
    },
    metric_gigahertz: {
      id: 'metric_gigahertz',
      label: '吉赫兹',
      symbol: 'GHz',
      ratio: 1000000000,
    },
    metric_terahertz: {
      id: 'metric_terahertz',
      label: '太赫兹',
      symbol: 'THz',
      ratio: 1000000000000,
    },
    // 周期单位
    period_per_second: {
      id: 'period_per_second',
      label: '每秒周期',
      symbol: 'cps',
      ratio: 1,
    },
    period_per_minute: {
      id: 'period_per_minute',
      label: '每分钟周期',
      symbol: 'cpm',
      ratio: 1/60,
    },
    period_per_hour: {
      id: 'period_per_hour',
      label: '每小时周期',
      symbol: 'cph',
      ratio: 1/3600,
    },
    // 角速度单位
    angular_radian_per_second: {
      id: 'angular_radian_per_second',
      label: '弧度每秒',
      symbol: 'rad/s',
      ratio: 1/(2 * Math.PI),
    },
    angular_degree_per_second: {
      id: 'angular_degree_per_second',
      label: '度每秒',
      symbol: '°/s',
      ratio: 1/360,
    },
    angular_revolution_per_minute: {
      id: 'angular_revolution_per_minute',
      label: '转每分钟',
      symbol: 'rpm',
      ratio: 1/60,
    },
    angular_revolution_per_second: {
      id: 'angular_revolution_per_second',
      label: '转每秒',
      symbol: 'rps',
      ratio: 1,
    },
    // 音频频率单位
    audio_millihertz: {
      id: 'audio_millihertz',
      label: '毫赫兹',
      symbol: 'mHz',
      ratio: 0.001,
    },
    audio_beat_per_minute: {
      id: 'audio_beat_per_minute',
      label: '拍每分钟',
      symbol: 'bpm',
      ratio: 1/60,
    },
    // 光学频率单位
    optical_petahertz: {
      id: 'optical_petahertz',
      label: '拍赫兹',
      symbol: 'PHz',
      ratio: 1000000000000000,
    },
    optical_wavenumber: {
      id: 'optical_wavenumber',
      label: '波数',
      symbol: 'cm⁻¹',
      ratio: 2.998e10, // c/100，其中c是光速
    },
    // 电子学频率单位
    electronic_frame_per_second: {
      id: 'electronic_frame_per_second',
      label: '帧每秒',
      symbol: 'fps',
      ratio: 1,
    },
    electronic_refresh_rate: {
      id: 'electronic_refresh_rate',
      label: '刷新率',
      symbol: 'Hz',
      ratio: 1,
    },
  },
}

export default frequency 