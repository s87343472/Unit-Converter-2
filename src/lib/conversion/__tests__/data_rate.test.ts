import { convert } from '../converter'

describe('Data Transfer Rate Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('bit per second to byte per second', () => {
      const result = convert('data_rate', 8, 'bit_per_second', 'byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('byte_per_second')
    })

    test('byte per second to bit per second', () => {
      const result = convert('data_rate', 1, 'byte_per_second', 'bit_per_second')
      expect(result.value).toBe(8)
      expect(result.unit).toBe('bit_per_second')
    })
  })

  // 测试二进制单位（1024进制）
  describe('Binary Units', () => {
    test('byte per second to kibibyte per second', () => {
      const result = convert('data_rate', 1024, 'byte_per_second', 'kibibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kibibyte_per_second')
    })

    test('kibibyte per second to mebibyte per second', () => {
      const result = convert('data_rate', 1024, 'kibibyte_per_second', 'mebibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('mebibyte_per_second')
    })

    test('mebibyte per second to gibibyte per second', () => {
      const result = convert('data_rate', 1024, 'mebibyte_per_second', 'gibibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gibibyte_per_second')
    })
  })

  // 测试十进制单位（1000进制）
  describe('Decimal Units', () => {
    test('bit per second to kilobit per second', () => {
      const result = convert('data_rate', 1000, 'bit_per_second', 'kilobit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilobit_per_second')
    })

    test('kilobit per second to megabit per second', () => {
      const result = convert('data_rate', 1000, 'kilobit_per_second', 'megabit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('megabit_per_second')
    })

    test('megabit per second to gigabit per second', () => {
      const result = convert('data_rate', 1000, 'megabit_per_second', 'gigabit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gigabit_per_second')
    })
  })

  // 测试混合单位转换
  describe('Mixed Unit Conversions', () => {
    test('megabit per second to mebibyte per second', () => {
      const result = convert('data_rate', 8, 'megabit_per_second', 'mebibyte_per_second')
      expect(result.value).toBeCloseTo(0.953674, 6)
      expect(result.unit).toBe('mebibyte_per_second')
    })

    test('gibibyte per second to gigabit per second', () => {
      const result = convert('data_rate', 1, 'gibibyte_per_second', 'gigabit_per_second')
      expect(result.value).toBeCloseTo(8.589935, 6)
      expect(result.unit).toBe('gigabit_per_second')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very slow transfer rates', () => {
      const result = convert('data_rate', 1, 'bit_per_second', 'gibibyte_per_second')
      expect(result.value).toBeCloseTo(1.1641532182693481e-10, 20)
      expect(result.unit).toBe('gibibyte_per_second')
    })

    test('should handle very fast transfer rates', () => {
      const result = convert('data_rate', 1, 'gibibyte_per_second', 'bit_per_second')
      expect(result.value).toBe(8589934592)
      expect(result.unit).toBe('bit_per_second')
    })
  })
}) 