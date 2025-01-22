import type { ConversionCategory } from './types'

// 使用秒作为基准单位
const time: ConversionCategory = {
  id: 'time',
  baseUnit: 'second',
  units: {
    second: {
      id: 'second',
      label: '秒',
      symbol: 's',
      ratio: 1,
    },
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
    minute: {
      id: 'minute',
      label: '分钟',
      symbol: 'min',
      ratio: 60, // 1 分钟 = 60 秒
    },
    hour: {
      id: 'hour',
      label: '小时',
      symbol: 'h',
      ratio: 3600, // 1 小时 = 60 分钟 = 3600 秒
    },
    day: {
      id: 'day',
      label: '天',
      symbol: 'd',
      ratio: 86400, // 1 天 = 24 小时 = 86400 秒
    },
    week: {
      id: 'week',
      label: '周',
      symbol: 'wk',
      ratio: 604800, // 1 周 = 7 天 = 604800 秒
    },
    month: {
      id: 'month',
      label: '月',
      symbol: 'mo',
      ratio: 2628000, // 修正为 30.4166667 天
    },
    year: {
      id: 'year',
      label: '年',
      symbol: 'yr',
      ratio: 31536000, // 修正为 365 天
    },
    decade: {
      id: 'decade',
      label: '十年',
      symbol: 'dec',
      ratio: 315360000, // 修正为 10 年
    },
    century: {
      id: 'century',
      label: '世纪',
      symbol: 'c',
      ratio: 3153600000, // 修正为 100 年
    },
  },
}

export default time 