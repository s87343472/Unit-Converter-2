import type { ConversionCategory } from './types'

// 使用秒作为基准单位
const time: ConversionCategory = {
  id: 'time',
  baseUnit: 'second',
  units: {
    // 基本单位
    second: {
      id: 'second',
      label: '秒',
      symbol: 's',
      ratio: 1, // 基准单位（SI基本单位）
    },

    // 标准时间单位
    minute: {
      id: 'minute',
      label: '分钟',
      symbol: 'min',
      ratio: 60, // 1 min = 60 s（标准定义）
    },
    hour: {
      id: 'hour',
      label: '小时',
      symbol: 'h',
      ratio: 3600, // 1 h = 3600 s（60 min）
    },
    day: {
      id: 'day',
      label: '天',
      symbol: 'd',
      ratio: 86400, // 1 d = 86400 s（24 h）
    },
    week: {
      id: 'week',
      label: '周',
      symbol: 'wk',
      ratio: 604800, // 1 wk = 604800 s（7 d）
    },

    // 月和年（使用平均值）
    month: {
      id: 'month',
      label: '月',
      symbol: 'mo',
      ratio: 2592000, // 1 mo = 2592000 s（30 d，平均月）
    },
    year: {
      id: 'year',
      label: '年',
      symbol: 'yr',
      ratio: 31536000, // 1 yr = 31536000 s（365 d，平年）
    },
    leap_year: {
      id: 'leap_year',
      label: '闰年',
      symbol: 'ly',
      ratio: 31622400, // 按366天计算
    },

    // 更大的时间单位
    decade: {
      id: 'decade',
      label: '十年',
      symbol: 'dec',
      ratio: 315360000,
    },
    century: {
      id: 'century',
      label: '世纪',
      symbol: 'c',
      ratio: 3153600000,
    },
    millennium: {
      id: 'millennium',
      label: '千年',
      symbol: 'kyr',
      ratio: 31536000000,
    },

    // 天文时间单位
    sidereal_day: {
      id: 'sidereal_day',
      label: '恒星日',
      symbol: 'sid',
      ratio: 86164.0905, // 1 sid = 86164.0905 s（地球相对恒星的自转周期）
    },
    synodic_month: {
      id: 'synodic_month',
      label: '朔望月',
      symbol: 'syn mo',
      ratio: 2551442.8, // 1 syn mo = 2551442.8 s（月球绕地球公转的平均周期）
    },
    tropical_year: {
      id: 'tropical_year',
      label: '回归年',
      symbol: 'trop yr',
      ratio: 31556925.216, // 1 trop yr = 31556925.216 s（地球绕太阳公转的周期）
    },
    sidereal_year: {
      id: 'sidereal_year',
      label: '恒星年',
      symbol: 'sid yr',
      ratio: 31558149.504, // 1 sid yr = 31558149.504 s（地球相对恒星的公转周期）
    },

    // 计算机时间单位
    jiffy: {
      id: 'jiffy',
      label: '计算机时钟周期',
      symbol: 'jiffy',
      ratio: 0.01, // 在大多数系统中是1/100秒
    },
    tick: {
      id: 'tick',
      label: '时钟计数',
      symbol: 'tick',
      ratio: 0.001, // 在大多数系统中是1/1000秒
    },

    // 科学时间单位
    millisecond: {
      id: 'millisecond',
      label: '毫秒',
      symbol: 'ms',
      ratio: 0.001, // 1 ms = 0.001 s（基本换算关系）
    },
    microsecond: {
      id: 'microsecond',
      label: '微秒',
      symbol: 'μs',
      ratio: 0.000001, // 1 μs = 0.000001 s（基本换算关系）
    },
    nanosecond: {
      id: 'nanosecond',
      label: '纳秒',
      symbol: 'ns',
      ratio: 0.000000001, // 1 ns = 0.000000001 s（基本换算关系）
    },
    picosecond: {
      id: 'picosecond',
      label: '皮秒',
      symbol: 'ps',
      ratio: 0.000000000001, // 1 ps = 0.000000000001 s（基本换算关系）
    },
  },
} as const

export default time 