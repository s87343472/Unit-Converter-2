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

  // 测试二进制单位转换（1024进制）
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

    test('tebibyte to pebibyte', () => {
      const result = convert('data', 1024, 'tebibyte', 'pebibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('pebibyte')
    })
  })

  // 测试十进制单位转换（1000进制）
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

    test('terabyte to petabyte', () => {
      const result = convert('data', 1000, 'terabyte', 'petabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('petabyte')
    })
  })

  // 测试数据传输速率单位转换
  describe('Data Transfer Rate Units', () => {
    test('bit per second to byte', () => {
      const result = convert('data', 8, 'bit_per_second', 'byte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('byte')
    })

    test('kilobit per second to kilobyte', () => {
      const result = convert('data', 8, 'kilobit_per_second', 'kilobyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilobyte')
    })

    test('megabit per second to megabyte', () => {
      const result = convert('data', 8, 'megabit_per_second', 'megabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('megabyte')
    })

    test('gigabit per second to gigabyte', () => {
      const result = convert('data', 8, 'gigabit_per_second', 'gigabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gigabyte')
    })
  })

  // 测试存储容量单位转换
  describe('Storage Capacity Units', () => {
    test('decimal kilobyte to kilobyte', () => {
      const result = convert('data', 1, 'decimal_kilobyte', 'kilobyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilobyte')
    })

    test('decimal megabyte to megabyte', () => {
      const result = convert('data', 1, 'decimal_megabyte', 'megabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('megabyte')
    })

    test('decimal gigabyte to gigabyte', () => {
      const result = convert('data', 1, 'decimal_gigabyte', 'gigabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gigabyte')
    })

    test('decimal terabyte to terabyte', () => {
      const result = convert('data', 1, 'decimal_terabyte', 'terabyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('terabyte')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('kibibyte to kilobyte', () => {
      const result = convert('data', 1, 'kibibyte', 'kilobyte')
      expect(result.value).toBeCloseTo(1.024, 3)
      expect(result.unit).toBe('kilobyte')
    })

    test('mebibyte to megabyte', () => {
      const result = convert('data', 1, 'mebibyte', 'megabyte')
      expect(result.value).toBeCloseTo(1.048576, 6)
      expect(result.unit).toBe('megabyte')
    })

    test('gibibyte to gigabyte', () => {
      const result = convert('data', 1, 'gibibyte', 'gigabyte')
      expect(result.value).toBeCloseTo(1.073741824, 9)
      expect(result.unit).toBe('gigabyte')
    })

    test('kilobyte to kibibyte', () => {
      const result = convert('data', 1, 'kilobyte', 'kibibyte')
      expect(result.value).toBeCloseTo(0.9765625, 7)
      expect(result.unit).toBe('kibibyte')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small data sizes', () => {
      const result = convert('data', 1, 'bit', 'byte')
      expect(result.value).toBeCloseTo(0.125, 3)
      expect(result.unit).toBe('byte')
    })

    test('should handle very large data sizes', () => {
      const result = convert('data', 1125899906842624, 'byte', 'pebibyte')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('pebibyte')
    })

    test('should handle decimal to binary conversion precision', () => {
      const result = convert('data', 1000000, 'kilobyte', 'mebibyte')
      expect(result.value).toBeCloseTo(953.674316, 6)
      expect(result.unit).toBe('mebibyte')
    })
  })
}) 