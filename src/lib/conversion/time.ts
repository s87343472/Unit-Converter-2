import type { ConversionCategory } from './types'

// 使用秒作为基准单位
const time: ConversionCategory = {
  id: 'time',
  baseUnit: 'metric_second',
  units: {
    metric_second: {
      id: 'metric_second',
      label: '秒',
      symbol: 's',
      ratio: 1, // 基准单位（SI基本单位）
    },

    // 标准时间单位
    metric_minute: {
      id: 'metric_minute',
      label: '分钟',
      symbol: 'min',
      ratio: 60, // 1 min = 60 s（标准定义）
    },
    metric_hour: {
      id: 'metric_hour',
      label: '小时',
      symbol: 'h',
      ratio: 3600, // 1 h = 3600 s（60 min）
    },
    metric_day: {
      id: 'metric_day',
      label: '天',
      symbol: 'd',
      ratio: 86400, // 1 d = 86400 s（24 h）
    },
    metric_week: {
      id: 'metric_week',
      label: '周',
      symbol: 'wk',
      ratio: 604800, // 7 * 24 * 60 * 60
    },

    // 月和年（使用平均值）
    metric_month: {
      id: 'metric_month',
      label: '月',
      symbol: 'mo',
      ratio: 2629743.83, // 更精确的平均每月秒数 (30.436875 * 24 * 60 * 60)
    },
    metric_year: {
      id: 'metric_year',
      label: '年',
      symbol: 'yr',
      ratio: 31556925.216, // 更精确的回归年秒数 (365.242190402 * 24 * 60 * 60)
    },
    metric_leap_year: {
      id: 'metric_leap_year',
      label: '闰年',
      symbol: 'ly',
      ratio: 31622400, // 按366天计算
    },

    // 更大的时间单位
    metric_decade: {
      id: 'metric_decade',
      label: '十年',
      symbol: 'dec',
      ratio: 315569520, // 10年
    },
    metric_century: {
      id: 'metric_century',
      label: '世纪',
      symbol: 'cent',
      ratio: 3155695200, // 100年
    },
    metric_millennium: {
      id: 'metric_millennium',
      label: '千年',
      symbol: 'kyr',
      ratio: 31556952000, // 1000年
    },

    // 天文时间单位
    astronomical_sidereal_day: {
      id: 'astronomical_sidereal_day',
      label: '恒星日',
      symbol: 'sid',
      ratio: 86164.0905, // 1 sid = 86164.0905 s（地球相对恒星的自转周期）
    },
    astronomical_synodic_month: {
      id: 'astronomical_synodic_month',
      label: '朔望月',
      symbol: 'syn mo',
      ratio: 2551442.8, // 1 syn mo = 2551442.8 s（月球绕地球公转的平均周期）
    },
    astronomical_tropical_year: {
      id: 'astronomical_tropical_year',
      label: '回归年',
      symbol: 'trop yr',
      ratio: 31556925.216, // 1 trop yr = 31556925.216 s（地球绕太阳公转的周期）
    },
    astronomical_sidereal_year: {
      id: 'astronomical_sidereal_year',
      label: '恒星年',
      symbol: 'sid yr',
      ratio: 31558149.504, // 1 sid yr = 31558149.504 s（地球相对恒星的公转周期）
    },

    // 计算机时间单位
    computing_jiffy: {
      id: 'computing_jiffy',
      label: '计算机时钟周期',
      symbol: 'jiffy',
      ratio: 0.01, // 在大多数系统中是1/100秒
    },
    computing_tick: {
      id: 'computing_tick',
      label: '时钟计数',
      symbol: 'tick',
      ratio: 0.001, // 在大多数系统中是1/1000秒
    },

    // 科学时间单位
    scientific_millisecond: {
      id: 'scientific_millisecond',
      label: '毫秒',
      symbol: 'ms',
      ratio: 0.001, // 1 ms = 0.001 s（基本换算关系）
    },
    scientific_microsecond: {
      id: 'scientific_microsecond',
      label: '微秒',
      symbol: 'μs',
      ratio: 0.000001, // 1 μs = 0.000001 s（基本换算关系）
    },
    scientific_nanosecond: {
      id: 'scientific_nanosecond',
      label: '纳秒',
      symbol: 'ns',
      ratio: 0.000000001, // 1 ns = 0.000000001 s（基本换算关系）
    },
    scientific_picosecond: {
      id: 'scientific_picosecond',
      label: '皮秒',
      symbol: 'ps',
      ratio: 0.000000000001, // 1 ps = 0.000000000001 s（基本换算关系）
    },
  },
} as const

export default time 