import { convert } from '../converter'

describe('Currency Conversion', () => {
  // 测试基本货币转换
  describe('Basic Conversions', () => {
    test('USD to CNY', () => {
      const result = convert('currency', 1, 'usd', 'cny')
      expect(result.value).toBeCloseTo(7.1, 1)
      expect(result.unit).toBe('cny')
    })

    test('CNY to USD', () => {
      const result = convert('currency', 7.1, 'cny', 'usd')
      expect(result.value).toBeCloseTo(1, 1)
      expect(result.unit).toBe('usd')
    })
  })

  // 测试欧洲货币
  describe('European Currencies', () => {
    test('USD to EUR', () => {
      const result = convert('currency', 1, 'usd', 'eur')
      expect(result.value).toBeCloseTo(0.92, 2)
      expect(result.unit).toBe('eur')
    })

    test('EUR to GBP', () => {
      const result = convert('currency', 1, 'eur', 'gbp')
      expect(result.value).toBeCloseTo(0.86, 2)
      expect(result.unit).toBe('gbp')
    })

    test('GBP to USD', () => {
      const result = convert('currency', 1, 'gbp', 'usd')
      expect(result.value).toBeCloseTo(1.27, 2)
      expect(result.unit).toBe('usd')
    })
  })

  // 测试亚洲货币
  describe('Asian Currencies', () => {
    test('USD to JPY', () => {
      const result = convert('currency', 1, 'usd', 'jpy')
      expect(result.value).toBeCloseTo(148, 0)
      expect(result.unit).toBe('jpy')
    })

    test('USD to KRW', () => {
      const result = convert('currency', 1, 'usd', 'krw')
      expect(result.value).toBeCloseTo(1300, 0)
      expect(result.unit).toBe('krw')
    })

    test('USD to HKD', () => {
      const result = convert('currency', 1, 'usd', 'hkd')
      expect(result.value).toBeCloseTo(7.82, 2)
      expect(result.unit).toBe('hkd')
    })
  })

  // 测试其他主要货币
  describe('Other Major Currencies', () => {
    test('USD to AUD', () => {
      const result = convert('currency', 1, 'usd', 'aud')
      expect(result.value).toBeCloseTo(1.52, 2)
      expect(result.unit).toBe('aud')
    })

    test('USD to CAD', () => {
      const result = convert('currency', 1, 'usd', 'cad')
      expect(result.value).toBeCloseTo(1.35, 2)
      expect(result.unit).toBe('cad')
    })

    test('USD to CHF', () => {
      const result = convert('currency', 1, 'usd', 'chf')
      expect(result.value).toBeCloseTo(0.86, 2)
      expect(result.unit).toBe('chf')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small amounts', () => {
      const result = convert('currency', 0.01, 'usd', 'jpy')
      expect(result.value).toBeCloseTo(1.48, 2)
      expect(result.unit).toBe('jpy')
    })

    test('should handle very large amounts', () => {
      const result = convert('currency', 1000000, 'usd', 'krw')
      expect(result.value).toBeCloseTo(1300000000, 0)
      expect(result.unit).toBe('krw')
    })
  })

  // 测试跨币种转换
  describe('Cross Currency Conversions', () => {
    test('EUR to JPY', () => {
      const result = convert('currency', 1, 'eur', 'jpy')
      expect(result.value).toBeCloseTo(160.87, 2)
      expect(result.unit).toBe('jpy')
    })

    test('GBP to CNY', () => {
      const result = convert('currency', 1, 'gbp', 'cny')
      expect(result.value).toBeCloseTo(9.02, 2)
      expect(result.unit).toBe('cny')
    })
  })
}) 