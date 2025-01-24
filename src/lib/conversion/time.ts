import type { ConversionCategory } from './types'

// 使用秒作为基准单位
const time: ConversionCategory = {
  id: 'time',
  baseUnit: 'second',
  units: {
    // 基本时间单位
    second: {
      id: 'second',
      label: '秒',
      symbol: 's',
      ratio: 1,
    },
    minute: {
      id: 'minute',
      label: '分钟',
      symbol: 'min',
      ratio: 60,
    },
    hour: {
      id: 'hour',
      label: '小时',
      symbol: 'h',
      ratio: 3600,
    },
    day: {
      id: 'day',
      label: '天',
      symbol: 'd',
      ratio: 86400,
    },
    week: {
      id: 'week',
      label: '周',
      symbol: 'wk',
      ratio: 604800,
    },

    // 月和年（使用平均值）
    month: {
      id: 'month',
      label: '月',
      symbol: 'mo',
      ratio: 2628000, // 按30.4375天计算
    },
    year: {
      id: 'year',
      label: '年',
      symbol: 'y',
      ratio: 31536000, // 按365天计算
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

    // 更小的时间单位
    millisecond: {
      id: 'millisecond',
      label: '毫秒',
      symbol: 'ms',
      ratio: 0.001,
    },
    microsecond: {
      id: 'microsecond',
      label: '微秒',
      symbol: 'μs',
      ratio: 0.000001,
    },
    nanosecond: {
      id: 'nanosecond',
      label: '纳秒',
      symbol: 'ns',
      ratio: 0.000000001,
    },
    picosecond: {
      id: 'picosecond',
      label: '皮秒',
      symbol: 'ps',
      ratio: 0.000000000001,
    },

    // 天文时间单位
    sidereal_day: {
      id: 'sidereal_day',
      label: '恒星日',
      symbol: 'sd',
      ratio: 86164.0905, // 23小时56分4.0905秒
    },
    sidereal_year: {
      id: 'sidereal_year',
      label: '恒星年',
      symbol: 'sy',
      ratio: 31558149.504, // 365.256363004天
    },
    tropical_year: {
      id: 'tropical_year',
      label: '回归年',
      symbol: 'ty',
      ratio: 31556925.216, // 365.242190402天
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
  },
} as const

export default time 