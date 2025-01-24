import type { ConversionCategory } from './types'

// 使用美元作为基准单位
const currency: ConversionCategory = {
  id: 'currency',
  baseUnit: 'usd',
  units: {
    usd: {
      id: 'usd',
      label: '美元 (USD)',
      symbol: '$',
      ratio: 1,
    },
    eur: {
      id: 'eur',
      label: '欧元 (EUR)',
      symbol: '€',
      ratio: 1.09,
    },
    jpy: {
      id: 'jpy',
      label: '日元 (JPY)',
      symbol: '¥',
      ratio: 0.0067,
    },
    gbp: {
      id: 'gbp',
      label: '英镑 (GBP)',
      symbol: '£',
      ratio: 1.27,
    },
    cny: {
      id: 'cny',
      label: '人民币 (CNY)',
      symbol: '¥',
      ratio: 0.14,
    },
    krw: {
      id: 'krw',
      label: '韩元 (KRW)',
      symbol: '₩',
      ratio: 0.00076,
    },
    chf: {
      id: 'chf',
      label: '瑞士法郎 (CHF)',
      symbol: 'Fr',
      ratio: 1.17,
    },
    aud: {
      id: 'aud',
      label: '澳元 (AUD)',
      symbol: 'A$',
      ratio: 0.66,
    },
    cad: {
      id: 'cad',
      label: '加元 (CAD)',
      symbol: 'C$',
      ratio: 0.74,
    },
    hkd: {
      id: 'hkd',
      label: '港元 (HKD)',
      symbol: 'HK$',
      ratio: 0.13,
    },
    sgd: {
      id: 'sgd',
      label: '新加坡元 (SGD)',
      symbol: 'S$',
      ratio: 0.75,
    },
    inr: {
      id: 'inr',
      label: '印度卢比 (INR)',
      symbol: '₹',
      ratio: 0.012,
    },
  },
}

export default currency 