import { convert } from '../converter'

describe('数据传输速率单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('比特每秒到字节每秒', () => {
      const result = convert('data_rate', 8, 'bit_per_second', 'byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('byte_per_second')
    })

    test('字节每秒到比特每秒', () => {
      const result = convert('data_rate', 1, 'byte_per_second', 'bit_per_second')
      expect(result.value).toBe(8)
      expect(result.unit).toBe('bit_per_second')
    })
  })

  // SI前缀单位转换测试
  describe('SI前缀单位转换', () => {
    test('比特每秒到千比特每秒', () => {
      const result = convert('data_rate', 1000, 'bit_per_second', 'kilo_bit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilo_bit_per_second')
    })

    test('千比特每秒到兆比特每秒', () => {
      const result = convert('data_rate', 1000, 'kilo_bit_per_second', 'mega_bit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('mega_bit_per_second')
    })

    test('兆字节每秒到吉字节每秒', () => {
      const result = convert('data_rate', 1000, 'mega_byte_per_second', 'giga_byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('giga_byte_per_second')
    })

    test('吉字节每秒到太字节每秒', () => {
      const result = convert('data_rate', 1000, 'giga_byte_per_second', 'tera_byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('tera_byte_per_second')
    })
  })

  // IEC前缀单位转换测试
  describe('IEC前缀单位转换', () => {
    test('比特每秒到二进制千比特每秒', () => {
      const result = convert('data_rate', 1024, 'bit_per_second', 'kibi_bit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kibi_bit_per_second')
    })

    test('二进制千比特每秒到二进制兆比特每秒', () => {
      const result = convert('data_rate', 1024, 'kibi_bit_per_second', 'mebi_bit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('mebi_bit_per_second')
    })

    test('二进制兆字节每秒到二进制吉字节每秒', () => {
      const result = convert('data_rate', 1024, 'mebi_byte_per_second', 'gibi_byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gibi_byte_per_second')
    })

    test('二进制吉字节每秒到二进制太字节每秒', () => {
      const result = convert('data_rate', 1024, 'gibi_byte_per_second', 'tebi_byte_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('tebi_byte_per_second')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('千比特每秒到二进制千比特每秒', () => {
      const result = convert('data_rate', 1000, 'kilo_bit_per_second', 'kibi_bit_per_second')
      expect(result.value).toBeCloseTo(0.9765625, 6) // 1000/1024
      expect(result.unit).toBe('kibi_bit_per_second')
    })

    test('兆字节每秒到二进制兆字节每秒', () => {
      const result = convert('data_rate', 1000, 'mega_byte_per_second', 'mebi_byte_per_second')
      expect(result.value).toBeCloseTo(953.674316, 6) // 1000 * 1000/1024
      expect(result.unit).toBe('mebi_byte_per_second')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('data_rate', 1e12, 'bit_per_second', 'tera_bit_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('tera_bit_per_second')
    })

    test('小数值转换', () => {
      const result = convert('data_rate', 0.008, 'byte_per_second', 'bit_per_second')
      expect(result.value).toBe(0.064)
      expect(result.unit).toBe('bit_per_second')
    })

    test('零值转换', () => {
      const result = convert('data_rate', 0, 'mega_bit_per_second', 'giga_bit_per_second')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('giga_bit_per_second')
    })
  })
}) 