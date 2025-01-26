import { convert } from '../converter'

describe('数据传输率单位转换', () => {
  // 基本单位转换
  describe('基本单位转换', () => {
    test('比特每秒到字节每秒的转换', () => {
      const result = convert('data_rate', 8, 'bit_per_second', 'byte_per_second')
      expect(result.value).toBe(1) // 精确转换：8 bit/s = 1 B/s
      expect(result.unit).toBe('byte_per_second')
    })

    test('字节每秒到比特每秒的转换', () => {
      const result = convert('data_rate', 1, 'byte_per_second', 'bit_per_second')
      expect(result.value).toBe(8) // 精确转换：1 B/s = 8 bit/s
      expect(result.unit).toBe('bit_per_second')
    })
  })

  // 二进制单位转换
  describe('二进制单位转换', () => {
    test('字节每秒到二进制千字节每秒的转换', () => {
      const result = convert('data_rate', 1024, 'byte_per_second', 'kibibyte_per_second')
      expect(result.value).toBe(1) // 精确转换：1024 B/s = 1 KiB/s
      expect(result.unit).toBe('kibibyte_per_second')
    })

    test('二进制千字节每秒到二进制兆字节每秒的转换', () => {
      const result = convert('data_rate', 1024, 'kibibyte_per_second', 'mebibyte_per_second')
      expect(result.value).toBe(1) // 精确转换：1024 KiB/s = 1 MiB/s
      expect(result.unit).toBe('mebibyte_per_second')
    })

    test('二进制兆字节每秒到二进制吉字节每秒的转换', () => {
      const result = convert('data_rate', 1024, 'mebibyte_per_second', 'gibibyte_per_second')
      expect(result.value).toBe(1) // 精确转换：1024 MiB/s = 1 GiB/s
      expect(result.unit).toBe('gibibyte_per_second')
    })
  })

  // 十进制单位转换
  describe('十进制单位转换', () => {
    test('比特每秒到千比特每秒的转换', () => {
      const result = convert('data_rate', 1000, 'bit_per_second', 'kilobit_per_second')
      expect(result.value).toBe(1) // 精确转换：1000 bit/s = 1 kbit/s
      expect(result.unit).toBe('kilobit_per_second')
    })

    test('千比特每秒到兆比特每秒的转换', () => {
      const result = convert('data_rate', 1000, 'kilobit_per_second', 'megabit_per_second')
      expect(result.value).toBe(1) // 精确转换：1000 kbit/s = 1 Mbit/s
      expect(result.unit).toBe('megabit_per_second')
    })

    test('兆比特每秒到吉比特每秒的转换', () => {
      const result = convert('data_rate', 1000, 'megabit_per_second', 'gigabit_per_second')
      expect(result.value).toBe(1) // 精确转换：1000 Mbit/s = 1 Gbit/s
      expect(result.unit).toBe('gigabit_per_second')
    })
  })

  // 跨系统转换
  describe('跨系统转换', () => {
    test('兆比特每秒到二进制兆字节每秒的转换', () => {
      const result = convert('data_rate', 8, 'megabit_per_second', 'mebibyte_per_second')
      expect(result.value).toBeCloseTo(0.953674316, 9) // 近似转换
      expect(result.unit).toBe('mebibyte_per_second')
    })

    test('二进制吉字节每秒到吉比特每秒的转换', () => {
      const result = convert('data_rate', 1, 'gibibyte_per_second', 'gigabit_per_second')
      expect(result.value).toBeCloseTo(8.589934592, 9) // 近似转换
      expect(result.unit).toBe('gigabit_per_second')
    })
  })

  // 极端值和边界条件
  describe('极端值和边界条件', () => {
    test('处理极小数据传输率', () => {
      const result = convert('data_rate', 1, 'bit_per_second', 'gibibyte_per_second')
      expect(result.value).toBeCloseTo(1.1641532182693481e-10, 19) // 保持高精度
      expect(result.unit).toBe('gibibyte_per_second')
    })

    test('处理极大数据传输率', () => {
      const result = convert('data_rate', 1, 'gibibyte_per_second', 'bit_per_second')
      expect(result.value).toBe(8589934592) // 精确转换
      expect(result.unit).toBe('bit_per_second')
    })

    test('处理零数据传输率', () => {
      const result = convert('data_rate', 0, 'bit_per_second', 'gigabit_per_second')
      expect(result.value).toBe(0) // 精确转换
      expect(result.unit).toBe('gigabit_per_second')
    })
  })
}) 