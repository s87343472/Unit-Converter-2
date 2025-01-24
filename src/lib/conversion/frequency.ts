import type { ConversionCategory } from './types'

// 使用赫兹作为基准单位
const frequency: ConversionCategory = {
  id: 'frequency',
  baseUnit: 'hertz',
  units: {
    hertz: {
      id: 'hertz',
      label: '赫兹 (基本)',
      symbol: 'Hz',
      ratio: 1,
    },
    kilohertz: {
      id: 'kilohertz',
      label: '千赫兹 (基本)',
      symbol: 'kHz',
      ratio: 1000,
    },
    megahertz: {
      id: 'megahertz',
      label: '兆赫兹 (基本)',
      symbol: 'MHz',
      ratio: 1000000,
    },
    gigahertz: {
      id: 'gigahertz',
      label: '吉赫兹 (基本)',
      symbol: 'GHz',
      ratio: 1000000000,
    },
    terahertz: {
      id: 'terahertz',
      label: '太赫兹 (基本)',
      symbol: 'THz',
      ratio: 1000000000000,
    },
    cycle_per_second: {
      id: 'cycle_per_second',
      label: '周每秒 (工程)',
      symbol: 'cps',
      ratio: 1,
    },
    cycle_per_minute: {
      id: 'cycle_per_minute',
      label: '周/分钟(工程)',
      symbol: 'cpm',
      ratio: 1/60, // 1 cpm = 1/60 Hz
    },
    revolution_per_minute: {
      id: 'revolution_per_minute',
      label: '转每分钟 (工程)',
      symbol: 'rpm',
      ratio: 0.0166667,
    },
    revolution_per_second: {
      id: 'revolution_per_second',
      label: '转每秒 (工程)',
      symbol: 'rps',
      ratio: 1,
    },
    beat_per_minute: {
      id: 'beat_per_minute',
      label: '拍每分钟 (音乐)',
      symbol: 'bpm',
      ratio: 0.0166667,
    },
    frame_per_second: {
      id: 'frame_per_second',
      label: '帧每秒 (视频)',
      symbol: 'fps',
      ratio: 1,
    },
  },
}

export default frequency 