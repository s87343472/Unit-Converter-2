import type { ConversionCategory } from './types'

// 使用秒作为基准单位
const time: ConversionCategory = {
  id: 'time',
  baseUnit: 'second',
  units: {
    second: {
      id: 'second',
      label: '秒 (基本)',
      symbol: 's',
      ratio: 1,
    },
    millisecond: {
      id: 'millisecond',
      label: '毫秒 (基本)',
      symbol: 'ms',
      ratio: 0.001,
    },
    microsecond: {
      id: 'microsecond',
      label: '微秒 (基本)',
      symbol: 'μs',
      ratio: 0.000001,
    },
    nanosecond: {
      id: 'nanosecond',
      label: '纳秒 (基本)',
      symbol: 'ns',
      ratio: 0.000000001,
    },
    minute: {
      id: 'minute',
      label: '分钟 (基本)',
      symbol: 'min',
      ratio: 60,
    },
    hour: {
      id: 'hour',
      label: '小时 (基本)',
      symbol: 'h',
      ratio: 3600,
    },
    day: {
      id: 'day',
      label: '天 (基本)',
      symbol: 'd',
      ratio: 86400,
    },
    week: {
      id: 'week',
      label: '周 (基本)',
      symbol: 'wk',
      ratio: 604800,
    },
    month: {
      id: 'month',
      label: '月 (平均)',
      symbol: 'mo',
      ratio: 2629746,
    },
    year: {
      id: 'year',
      label: '年 (平均)',
      symbol: 'yr',
      ratio: 31556952,
    },
    decade: {
      id: 'decade',
      label: '十年 (平均)',
      symbol: 'dec',
      ratio: 315569520,
    },
    century: {
      id: 'century',
      label: '世纪 (平均)',
      symbol: 'cent',
      ratio: 3155695200,
    },
    millennium: {
      id: 'millennium',
      label: '千年 (平均)',
      symbol: 'kyr',
      ratio: 31556952000,
    },
  },
}

export default time 