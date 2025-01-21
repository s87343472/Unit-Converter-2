import type { ConversionCategory } from './types'

// 使用赫兹作为基准单位
const frequency: ConversionCategory = {
  id: 'frequency',
  baseUnit: 'hertz',
  units: {
    hertz: {
      id: 'hertz',
      label: '赫兹',
      symbol: 'Hz',
      ratio: 1,
    },
    kilohertz: {
      id: 'kilohertz',
      label: '千赫兹',
      symbol: 'kHz',
      ratio: 1000, // 1 kHz = 1000 Hz
    },
    megahertz: {
      id: 'megahertz',
      label: '兆赫兹',
      symbol: 'MHz',
      ratio: 1000000, // 1 MHz = 1,000,000 Hz
    },
    gigahertz: {
      id: 'gigahertz',
      label: '吉赫兹',
      symbol: 'GHz',
      ratio: 1000000000, // 1 GHz = 1,000,000,000 Hz
    },
    terahertz: {
      id: 'terahertz',
      label: '太赫兹',
      symbol: 'THz',
      ratio: 1000000000000, // 1 THz = 1,000,000,000,000 Hz
    },
    cycle_per_second: {
      id: 'cycle_per_second',
      label: '周/秒',
      symbol: 'cps',
      ratio: 1, // 1 cps = 1 Hz
    },
    cycle_per_minute: {
      id: 'cycle_per_minute',
      label: '周/分钟',
      symbol: 'cpm',
      ratio: 1/60, // 1 cpm = 1/60 Hz
    },
    revolution_per_minute: {
      id: 'revolution_per_minute',
      label: '转/分钟',
      symbol: 'rpm',
      ratio: 1/60, // 1 rpm = 1/60 Hz
    },
    revolution_per_second: {
      id: 'revolution_per_second',
      label: '转/秒',
      symbol: 'rps',
      ratio: 1, // 1 rps = 1 Hz
    },
    beat_per_minute: {
      id: 'beat_per_minute',
      label: '拍/分钟',
      symbol: 'bpm',
      ratio: 1/60, // 1 bpm = 1/60 Hz
    },
    frame_per_second: {
      id: 'frame_per_second',
      label: '帧/秒',
      symbol: 'fps',
      ratio: 1, // 1 fps = 1 Hz
    },
  },
}

export default frequency 