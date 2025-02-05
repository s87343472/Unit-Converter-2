import type { ConversionCategory } from './types'

// 使用美元作为基准单位
const currency: ConversionCategory = {
  id: 'currency',
  baseUnit: 'fiat_usd',
  description: '货币单位转换',
  units: {
    // 法定货币（带前缀）
    fiat_usd: {
      id: 'fiat_usd',
      label: '美元',
      symbol: '$',
      ratio: 1, // 基准单位
      category: 'fiat'
    },
    fiat_eur: {
      id: 'fiat_eur',
      label: '欧元',
      symbol: '€',
      ratio: 0.92, // 1 EUR = 0.92 USD
      category: 'fiat'
    },
    fiat_gbp: {
      id: 'fiat_gbp',
      label: '英镑',
      symbol: '£',
      ratio: 1.27, // 1 GBP = 1.27 USD
      category: 'fiat'
    },
    fiat_jpy: {
      id: 'fiat_jpy',
      label: '日元',
      symbol: '¥',
      ratio: 0.0067, // 1 JPY = 0.0067 USD
      category: 'fiat'
    },
    fiat_cny: {
      id: 'fiat_cny',
      label: '人民币',
      symbol: '¥',
      ratio: 0.14, // 1 CNY = 0.14 USD
      category: 'fiat'
    },
    fiat_krw: {
      id: 'fiat_krw',
      label: '韩元',
      symbol: '₩',
      ratio: 0.00076, // 1 KRW = 0.00076 USD
      category: 'fiat'
    },
    fiat_inr: {
      id: 'fiat_inr',
      label: '印度卢比',
      symbol: '₹',
      ratio: 0.012, // 1 INR = 0.012 USD
      category: 'fiat'
    },

    // 法定货币（不带前缀，用于兼容）
    usd: {
      id: 'usd',
      label: '美元',
      symbol: '$',
      ratio: 1,
      category: 'fiat'
    },
    eur: {
      id: 'eur',
      label: '欧元',
      symbol: '€',
      ratio: 0.92,
      category: 'fiat'
    },
    gbp: {
      id: 'gbp',
      label: '英镑',
      symbol: '£',
      ratio: 1.27,
      category: 'fiat'
    },
    jpy: {
      id: 'jpy',
      label: '日元',
      symbol: '¥',
      ratio: 0.0067,
      category: 'fiat'
    },
    cny: {
      id: 'cny',
      label: '人民币',
      symbol: '¥',
      ratio: 0.14,
      category: 'fiat'
    },
    krw: {
      id: 'krw',
      label: '韩元',
      symbol: '₩',
      ratio: 0.00076,
      category: 'fiat'
    },
    inr: {
      id: 'inr',
      label: '印度卢比',
      symbol: '₹',
      ratio: 0.012,
      category: 'fiat'
    }
  },

  // 知识点
  knowledge: {
    title: '货币知识',
    items: [
      '汇率会随时间波动，这里的转换比率仅供参考',
      '美元是国际主要结算货币',
      '欧元是欧盟的统一货币',
      '人民币是中国的法定货币',
      '日元是日本的法定货币',
      '英镑是英国的法定货币',
      '韩元是韩国的法定货币',
      '印度卢比是印度的法定货币'
    ]
  },

  // 转换提示
  conversion_tips: {
    title: '货币换算提示',
    items: [
      '汇率每天都在变动，建议使用实时汇率进行转换',
      '银行和货币兑换处的汇率可能与市场汇率有所不同',
      '不同货币的最小单位不同，如：\n  - 美元：1美分（$0.01）\n  - 日元：1日元（¥1）\n  - 欧元：1欧分（€0.01）',
      '部分国家可能对货币兑换有管制，需要注意相关规定'
    ]
  }
} as const

export default currency 