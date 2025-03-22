import { convert } from '../converter'

describe('Currency Conversion', () => {
  // 测试主要国际货币转换
  describe('Major International Currencies', () => {
    test('USD to EUR', () => {
      const result = convert('currency', 1, 'usd', 'eur')
      expect(result.value).toBeCloseTo(0.917431, 6)
      expect(result.unit).toBe('eur')
    })

    test('EUR to USD', () => {
      const result = convert('currency', 1, 'eur', 'usd')
      expect(result.value).toBeCloseTo(1.09, 2)
      expect(result.unit).toBe('usd')
    })

    test('GBP to USD', () => {
      const result = convert('currency', 1, 'gbp', 'usd')
      expect(result.value).toBeCloseTo(1.27, 2)
      expect(result.unit).toBe('usd')
    })

    test('JPY to USD', () => {
      const result = convert('currency', 1000, 'jpy', 'usd')
      expect(result.value).toBeCloseTo(6.70, 2)
      expect(result.unit).toBe('usd')
    })

    test('CNY to USD', () => {
      const result = convert('currency', 100, 'cny', 'usd')
      expect(result.value).toBeCloseTo(14.00, 2)
      expect(result.unit).toBe('usd')
    })
  })

  // 测试其他主要货币转换
  describe('Other Major Currencies', () => {
    test('CHF to EUR', () => {
      const result = convert('currency', 1, 'chf', 'eur')
      expect(result.value).toBeCloseTo(1.064220, 6)
      expect(result.unit).toBe('eur')
    })

    test('AUD to USD', () => {
      const result = convert('currency', 1, 'aud', 'usd')
      expect(result.value).toBeCloseTo(0.66, 2)
      expect(result.unit).toBe('usd')
    })

    test('CAD to USD', () => {
      const result = convert('currency', 1, 'cad', 'usd')
      expect(result.value).toBeCloseTo(0.74, 2)
      expect(result.unit).toBe('usd')
    })

    test('NZD to USD', () => {
      const result = convert('currency', 1, 'nzd', 'usd')
      expect(result.value).toBeCloseTo(0.61, 2)
      expect(result.unit).toBe('usd')
    })
  })

  // 测试亚洲货币转换
  describe('Asian Currencies', () => {
    test('HKD to USD', () => {
      const result = convert('currency', 100, 'hkd', 'usd')
      expect(result.value).toBeCloseTo(13.00, 2)
      expect(result.unit).toBe('usd')
    })

    test('KRW to USD', () => {
      const result = convert('currency', 10000, 'krw', 'usd')
      expect(result.value).toBeCloseTo(7.60, 2)
      expect(result.unit).toBe('usd')
    })

    test('SGD to USD', () => {
      const result = convert('currency', 1, 'sgd', 'usd')
      expect(result.value).toBeCloseTo(0.75, 2)
      expect(result.unit).toBe('usd')
    })
  })

  // 测试加密货币转换
  describe('Cryptocurrencies', () => {
    test('BTC to USD', () => {
      const result = convert('currency', 1, 'btc', 'usd')
      expect(result.value).toBeCloseTo(43000, 0)
      expect(result.unit).toBe('usd')
    })

    test('ETH to USD', () => {
      const result = convert('currency', 1, 'eth', 'usd')
      expect(result.value).toBeCloseTo(2200, 0)
      expect(result.unit).toBe('usd')
    })

    test('BTC to ETH', () => {
      const result = convert('currency', 1, 'btc', 'eth')
      expect(result.value).toBeCloseTo(19.545455, 6)
      expect(result.unit).toBe('eth')
    })
  })

  // 测试贵金属转换
  describe('Precious Metals', () => {
    test('XAU to USD', () => {
      const result = convert('currency', 1, 'xau', 'usd')
      expect(result.value).toBeCloseTo(2030, 0)
      expect(result.unit).toBe('usd')
    })

    test('XAG to USD', () => {
      const result = convert('currency', 1, 'xag', 'usd')
      expect(result.value).toBeCloseTo(23, 0)
      expect(result.unit).toBe('usd')
    })

    test('XAU to XAG', () => {
      const result = convert('currency', 1, 'xau', 'xag')
      expect(result.value).toBeCloseTo(88.26087, 5)
      expect(result.unit).toBe('xag')
    })
  })

  // 测试特殊货币单位转换
  describe('Special Currency Units', () => {
    test('SDR to USD', () => {
      const result = convert('currency', 1, 'sdr', 'usd')
      expect(result.value).toBeCloseTo(1.34, 2)
      expect(result.unit).toBe('usd')
    })

    test('USD to SDR', () => {
      const result = convert('currency', 1.34, 'usd', 'sdr')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('sdr')
    })
  })

  // 测试跨类型转换
  describe('Cross-Category Conversions', () => {
    test('BTC to XAU', () => {
      const result = convert('currency', 1, 'btc', 'xau')
      expect(result.value).toBeCloseTo(21.182266, 6)
      expect(result.unit).toBe('xau')
    })

    test('XAU to EUR', () => {
      const result = convert('currency', 1, 'xau', 'eur')
      expect(result.value).toBeCloseTo(1862.385321, 6)
      expect(result.unit).toBe('eur')
    })

    test('ETH to XAG', () => {
      const result = convert('currency', 1, 'eth', 'xag')
      expect(result.value).toBeCloseTo(95.652174, 6)
      expect(result.unit).toBe('xag')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small amounts', () => {
      const result = convert('currency', 0.00001, 'btc', 'usd')
      expect(result.value).toBeCloseTo(0.43, 2)
      expect(result.unit).toBe('usd')
    })

    test('should handle very large amounts', () => {
      const result = convert('currency', 1000000, 'usd', 'btc')
      expect(result.value).toBeCloseTo(23.255814, 6)
      expect(result.unit).toBe('btc')
    })

    test('should handle cross-rate precision', () => {
      const result = convert('currency', 1234.5678, 'eur', 'gbp')
      expect(result.value).toBeCloseTo(1059.240752, 6)
      expect(result.unit).toBe('gbp')
    })
  })
}) 