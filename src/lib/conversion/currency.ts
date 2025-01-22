import { ConversionCategory } from './types'

// 基准单位为美元(USD)
const currency: ConversionCategory = {
  id: 'currency',
  baseUnit: 'usd',
  units: {
    // 主要货币
    usd: {
      id: 'usd',
      label: '美元',
      ratio: 1,
      symbol: '$',
    },
    cny: {
      id: 'cny',
      label: '人民币',
      ratio: 0.140845070422535, // 1 USD = 7.10 CNY
      symbol: '¥',
    },
    eur: {
      id: 'eur',
      label: '欧元',
      ratio: 1.0869565217391304, // 1 EUR = 1.09 USD
      symbol: '€',
    },
    gbp: {
      id: 'gbp',
      label: '英镑',
      ratio: 1.27, // 1 GBP = 1.27 USD
      symbol: '£',
    },
    jpy: {
      id: 'jpy',
      label: '日元',
      ratio: 0.006756756756757, // 1 USD = 148 JPY
      symbol: '¥',
    },
    krw: {
      id: 'krw',
      label: '韩元',
      ratio: 0.000769230769231, // 1 USD = 1300 KRW
      symbol: '₩',
    },
    hkd: {
      id: 'hkd',
      label: '港元',
      ratio: 0.127877237851662, // 1 USD = 7.82 HKD
      symbol: 'HK$',
    },
    aud: {
      id: 'aud',
      label: '澳元',
      ratio: 0.66, // 1 AUD = 0.66 USD (示例汇率)
      symbol: 'A$',
    },
    cad: {
      id: 'cad',
      label: '加元',
      ratio: 0.74, // 1 CAD = 0.74 USD (示例汇率)
      symbol: 'C$',
    },
    chf: {
      id: 'chf',
      label: '瑞士法郎',
      ratio: 1.16, // 1 CHF = 1.16 USD (示例汇率)
      symbol: 'Fr',
    },
    sgd: {
      id: 'sgd',
      label: '新加坡元',
      ratio: 0.75, // 1 SGD = 0.75 USD (示例汇率)
      symbol: 'S$',
    },
    nzd: {
      id: 'nzd',
      label: '新西兰元',
      ratio: 0.62, // 1 NZD = 0.62 USD (示例汇率)
      symbol: 'NZ$',
    },
  },
} as const

export default currency 