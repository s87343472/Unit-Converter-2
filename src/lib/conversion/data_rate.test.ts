import { convert } from './converter'

describe('数据传输率单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('bit/s 到 B/s', () => {
      const result = convert('data_rate', 8, 'bit_per_second', 'byte_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('byte_per_second')
    })

    test('B/s 到 bit/s', () => {
      const result = convert('data_rate', 1, 'byte_per_second', 'bit_per_second')
      expect(result.value).toBeCloseTo(8, 6)
      expect(result.unit).toBe('bit_per_second')
    })
  })

  // 十进制倍数单位转换测试
  describe('十进制倍数单位转换', () => {
    test('bit/s 到 kbit/s', () => {
      const result = convert('data_rate', 1000, 'bit_per_second', 'kilobit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilobit_per_second')
    })

    test('kbit/s 到 Mbit/s', () => {
      const result = convert('data_rate', 1000, 'kilobit_per_second', 'megabit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('megabit_per_second')
    })

    test('Mbit/s 到 Gbit/s', () => {
      const result = convert('data_rate', 1000, 'megabit_per_second', 'gigabit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gigabit_per_second')
    })
  })

  // 二进制倍数单位转换测试
  describe('二进制倍数单位转换', () => {
    test('bit/s 到 Kibit/s', () => {
      const result = convert('data_rate', 1024, 'bit_per_second', 'kibibit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kibibit_per_second')
    })

    test('Kibit/s 到 Mibit/s', () => {
      const result = convert('data_rate', 1024, 'kibibit_per_second', 'mebibit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('mebibit_per_second')
    })

    test('Mibit/s 到 Gibit/s', () => {
      const result = convert('data_rate', 1024, 'mebibit_per_second', 'gibibit_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('gibibit_per_second')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('kbit/s 到 Kibit/s', () => {
      const result = convert('data_rate', 1000, 'kilobit_per_second', 'kibibit_per_second')
      expect(result.value).toBeCloseTo(976.5625, 6)
      expect(result.unit).toBe('kibibit_per_second')
    })

    test('MB/s 到 MiB/s', () => {
      const result = convert('data_rate', 1000, 'megabyte_per_second', 'mebibyte_per_second')
      expect(result.value).toBeCloseTo(953.674316, 6)
      expect(result.unit).toBe('mebibyte_per_second')
    })

    test('Gbit/s 到 GiB/s', () => {
      const result = convert('data_rate', 8, 'gigabit_per_second', 'gibibyte_per_second')
      expect(result.value).toBeCloseTo(0.931323, 6)
      expect(result.unit).toBe('gibibyte_per_second')
    })
  })

  // 精度测试
  describe('精度测试', () => {
    test('大数值转换', () => {
      const result = convert('data_rate', 1, 'terabyte_per_second', 'bit_per_second')
      expect(result.value).toBeCloseTo(8e12, 6)
      expect(result.unit).toBe('bit_per_second')
    })

    test('小数值转换', () => {
      const result = convert('data_rate', 0.0001, 'gigabit_per_second', 'bit_per_second')
      expect(result.value).toBeCloseTo(100000, 6)
      expect(result.unit).toBe('bit_per_second')
    })

    test('复杂转换链', () => {
      const result = convert('data_rate', 1, 'mebibyte_per_second', 'gigabit_per_second')
      expect(result.value).toBeCloseTo(0.008389, 6)
      expect(result.unit).toBe('gigabit_per_second')
    })
  })
}) 