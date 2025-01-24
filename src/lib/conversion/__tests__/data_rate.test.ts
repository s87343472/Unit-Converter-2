import { convert } from '../converter'

describe('Data Rate Conversion', () => {
  // 测试基本单位转换
  describe('Basic Metric Conversions', () => {
    test('metric_bit_per_second to metric_byte_per_second', () => {
      const result = convert('data_rate', 8, 'metric_bit_per_second', 'metric_byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_byte_per_second')
    })

    test('metric_byte_per_second to metric_bit_per_second', () => {
      const result = convert('data_rate', 1, 'metric_byte_per_second', 'metric_bit_per_second')
      expect(result.value).toBe(8)
      expect(result.unit).toBe('metric_bit_per_second')
    })
  })

  // 测试二进制单位转换
  describe('Binary Unit Conversions', () => {
    test('metric_byte_per_second to binary_kibibyte_per_second', () => {
      const result = convert('data_rate', 1024, 'metric_byte_per_second', 'binary_kibibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('binary_kibibyte_per_second')
    })

    test('binary_kibibyte_per_second to binary_mebibyte_per_second', () => {
      const result = convert('data_rate', 1024, 'binary_kibibyte_per_second', 'binary_mebibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('binary_mebibyte_per_second')
    })

    test('binary_mebibyte_per_second to binary_gibibyte_per_second', () => {
      const result = convert('data_rate', 1024, 'binary_mebibyte_per_second', 'binary_gibibyte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('binary_gibibyte_per_second')
    })
  })

  // 测试十进制单位转换
  describe('Decimal Unit Conversions', () => {
    test('metric_bit_per_second to metric_kilobit_per_second', () => {
      const result = convert('data_rate', 1000, 'metric_bit_per_second', 'metric_kilobit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_kilobit_per_second')
    })

    test('metric_kilobit_per_second to metric_megabit_per_second', () => {
      const result = convert('data_rate', 1000, 'metric_kilobit_per_second', 'metric_megabit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_megabit_per_second')
    })

    test('metric_megabit_per_second to metric_gigabit_per_second', () => {
      const result = convert('data_rate', 1000, 'metric_megabit_per_second', 'metric_gigabit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_gigabit_per_second')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('metric_megabit_per_second to binary_mebibyte_per_second', () => {
      const result = convert('data_rate', 8, 'metric_megabit_per_second', 'binary_mebibyte_per_second')
      expect(result.value).toBeCloseTo(0.953674, 6)
      expect(result.unit).toBe('binary_mebibyte_per_second')
    })

    test('binary_gibibyte_per_second to metric_gigabit_per_second', () => {
      const result = convert('data_rate', 1, 'binary_gibibyte_per_second', 'metric_gigabit_per_second')
      expect(result.value).toBeCloseTo(8.58993, 5)
      expect(result.unit).toBe('metric_gigabit_per_second')
    })
  })

  // 测试极端值和边界条件
  describe('Edge Cases', () => {
    test('should handle very small data rates', () => {
      const result = convert('data_rate', 1, 'metric_bit_per_second', 'binary_gibibyte_per_second')
      expect(result.value).toBeCloseTo(1.1641532182693481e-10, 20)
      expect(result.unit).toBe('binary_gibibyte_per_second')
    })

    test('should handle very large data rates', () => {
      const result = convert('data_rate', 1, 'binary_gibibyte_per_second', 'metric_bit_per_second')
      expect(result.value).toBe(8589934592)
      expect(result.unit).toBe('metric_bit_per_second')
    })

    test('should handle zero data rate', () => {
      const result = convert('data_rate', 0, 'metric_bit_per_second', 'metric_gigabit_per_second')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_gigabit_per_second')
    })
  })
}) 