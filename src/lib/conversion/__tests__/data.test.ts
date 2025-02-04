import { convert } from '../converter'

describe('数据单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('比特到字节', () => {
      const result = convert('data', 8, 'bit', 'byte')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('byte')
    })

    test('字节到比特', () => {
      const result = convert('data', 1, 'byte', 'bit')
      expect(result.value).toBeCloseTo(8, 6)
      expect(result.unit).toBe('bit')
    })
  })

  // SI前缀单位转换测试
  describe('SI前缀单位转换', () => {
    test('比特到千比特', () => {
      const result = convert('data', 1000, 'bit', 'scientific_kilobit')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_kilobit')
    })

    test('千比特到兆比特', () => {
      const result = convert('data', 1000, 'scientific_kilobit', 'scientific_megabit')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_megabit')
    })

    test('兆字节到吉字节', () => {
      const result = convert('data', 1000, 'scientific_megabyte', 'scientific_gigabyte')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_gigabyte')
    })

    test('吉字节到太字节', () => {
      const result = convert('data', 1000, 'scientific_gigabyte', 'scientific_terabyte')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_terabyte')
    })
  })

  // IEC前缀单位转换测试
  describe('IEC前缀单位转换', () => {
    test('比特到二进制千比特', () => {
      const result = convert('data', 1024, 'bit', 'scientific_kibibit')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_kibibit')
    })

    test('二进制千比特到二进制兆比特', () => {
      const result = convert('data', 1024, 'scientific_kibibit', 'scientific_mebibit')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_mebibit')
    })

    test('二进制兆字节到二进制吉字节', () => {
      const result = convert('data', 1024, 'scientific_mebibyte', 'scientific_gibibyte')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_gibibyte')
    })

    test('二进制吉字节到二进制太字节', () => {
      const result = convert('data', 1024, 'scientific_gibibyte', 'scientific_tebibyte')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_tebibyte')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('千比特到二进制千比特', () => {
      const result = convert('data', 1000, 'scientific_kilobit', 'scientific_kibibit')
      expect(result.value).toBeCloseTo(0.9765625, 6) // 1000/1024
      expect(result.unit).toBe('scientific_kibibit')
    })

    test('兆字节到二进制兆字节', () => {
      const result = convert('data', 1000, 'scientific_megabyte', 'scientific_mebibyte')
      expect(result.value).toBeCloseTo(953.674316, 6) // 1000 * 1000/1024
      expect(result.unit).toBe('scientific_mebibyte')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('data', 1e12, 'bit', 'scientific_terabit')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('scientific_terabit')
    })

    test('小数值转换', () => {
      const result = convert('data', 0.008, 'byte', 'bit')
      expect(result.value).toBeCloseTo(0.064, 6)
      expect(result.unit).toBe('bit')
    })

    test('零值转换', () => {
      const result = convert('data', 0, 'scientific_megabit', 'scientific_gigabit')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('scientific_gigabit')
    })
  })
}) 