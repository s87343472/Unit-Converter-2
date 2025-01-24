import type { ConversionCategory } from './types'

// 使用美元作为基准单位
const currency: ConversionCategory = {
  id: 'currency',
  baseUnit: 'usd',
  units: {
    // 主要国际货币
    usd: {
      id: 'usd',
      label: '美元',
      symbol: '$',
      ratio: 1,
    },
    eur: {
      id: 'eur',
      label: '欧元',
      symbol: '€',
      ratio: 1.09, // 1 EUR = 1.09 USD
    },
    gbp: {
      id: 'gbp',
      label: '英镑',
      symbol: '£',
      ratio: 1.27, // 1 GBP = 1.27 USD
    },
    jpy: {
      id: 'jpy',
      label: '日元',
      symbol: '¥',
      ratio: 0.0067, // 1 JPY = 0.0067 USD
    },
    cny: {
      id: 'cny',
      label: '人民币',
      symbol: '¥',
      ratio: 0.14, // 1 CNY = 0.14 USD
    },
    // 其他主要货币
    chf: {
      id: 'chf',
      label: '瑞士法郎',
      symbol: 'Fr',
      ratio: 1.16, // 1 CHF = 1.16 USD
    },
    aud: {
      id: 'aud',
      label: '澳元',
      symbol: 'A$',
      ratio: 0.66, // 1 AUD = 0.66 USD
    },
    cad: {
      id: 'cad',
      label: '加拿大元',
      symbol: 'C$',
      ratio: 0.74, // 1 CAD = 0.74 USD
    },
    nzd: {
      id: 'nzd',
      label: '新西兰元',
      symbol: 'NZ$',
      ratio: 0.61, // 1 NZD = 0.61 USD
    },
    // 亚洲货币
    hkd: {
      id: 'hkd',
      label: '港元',
      symbol: 'HK$',
      ratio: 0.13, // 1 HKD = 0.13 USD
    },
    krw: {
      id: 'krw',
      label: '韩元',
      symbol: '₩',
      ratio: 0.00076, // 1 KRW = 0.00076 USD
    },
    sgd: {
      id: 'sgd',
      label: '新加坡元',
      symbol: 'S$',
      ratio: 0.75, // 1 SGD = 0.75 USD
    },
    // 加密货币
    btc: {
      id: 'btc',
      label: '比特币',
      symbol: '₿',
      ratio: 43000, // 1 BTC = 43000 USD
    },
    eth: {
      id: 'eth',
      label: '以太币',
      symbol: 'Ξ',
      ratio: 2200, // 1 ETH = 2200 USD
    },
    // 贵金属
    xau: {
      id: 'xau',
      label: '黄金盎司',
      symbol: 'XAU',
      ratio: 2030, // 1 XAU = 2030 USD
    },
    xag: {
      id: 'xag',
      label: '白银盎司',
      symbol: 'XAG',
      ratio: 23, // 1 XAG = 23 USD
    },
    // 特殊货币单位
    sdr: {
      id: 'sdr',
      label: '特别提款权',
      symbol: 'SDR',
      ratio: 1.34, // 1 SDR = 1.34 USD
    },
  },
}

export default currency 