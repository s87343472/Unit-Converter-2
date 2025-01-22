import { convert } from '../converter'

describe('Data Storage Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('bit to byte', () => {
      const result = convert('data', 8, 'bit', 'byte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('byte')
    })

    test('byte to bit', () => {
      const result = convert('data', 1, 'byte', 'bit')
      expect(result.value).toBe(8)
      expect(result.unit).toBe('bit')
    })
  })

  // 测试二进制单位（1024进制）
  describe('Binary Units', () => {
    test('byte to kibibyte', () => {
      const result = convert('data', 1024, 'byte', 'kibibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kibibyte')
    })

    test('kibibyte to mebibyte', () => {
      const result = convert('data', 1024, 'kibibyte', 'mebibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('mebibyte')
    })

    test('mebibyte to gibibyte', () => {
      const result = convert('data', 1024, 'mebibyte', 'gibibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gibibyte')
    })

    test('gibibyte to tebibyte', () => {
      const result = convert('data', 1024, 'gibibyte', 'tebibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('tebibyte')
    })
  })

  // 测试十进制单位（1000进制）
  describe('Decimal Units', () => {
    test('byte to kilobyte', () => {
      const result = convert('data', 1000, 'byte', 'kilobyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilobyte')
    })

    test('kilobyte to megabyte', () => {
      const result = convert('data', 1000, 'kilobyte', 'megabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('megabyte')
    })

    test('megabyte to gigabyte', () => {
      const result = convert('data', 1000, 'megabyte', 'gigabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gigabyte')
    })

    test('gigabyte to terabyte', () => {
      const result = convert('data', 1000, 'gigabyte', 'terabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('terabyte')
    })
  })

  // 测试二进制和十进制单位之间的转换
  describe('Binary to Decimal Conversions', () => {
    test('mebibyte to megabyte', () => {
      const result = convert('data', 1, 'mebibyte', 'megabyte')
      expect(result.value).toBeCloseTo(1.048576, 6)
      expect(result.unit).toBe('megabyte')
    })

    test('gigabyte to gibibyte', () => {
      const result = convert('data', 1, 'gigabyte', 'gibibyte')
      expect(result.value).toBeCloseTo(0.931323, 6)
      expect(result.unit).toBe('gibibyte')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small data sizes', () => {
      const result = convert('data', 1, 'bit', 'tebibyte')
      expect(result.value).toBeCloseTo(1.1368683772161603e-13, 20)
      expect(result.unit).toBe('tebibyte')
    })

    test('should handle very large data sizes', () => {
      const result = convert('data', 1, 'tebibyte', 'bit')
      expect(result.value).toBe(8796093022208)
      expect(result.unit).toBe('bit')
    })
  })
}) 