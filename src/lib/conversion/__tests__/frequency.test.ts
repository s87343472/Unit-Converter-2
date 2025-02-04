import { convert } from '../converter'

describe('频率单位转换', () => {
  // 基本单位转换测试
  describe('基本单位转换', () => {
    test('赫兹到千赫兹', () => {
      const result = convert('frequency', 1000, 'hertz', 'kilo_hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('kilo_hertz')
    })

    test('千赫兹到兆赫兹', () => {
      const result = convert('frequency', 1000, 'kilo_hertz', 'mega_hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('mega_hertz')
    })

    test('兆赫兹到吉赫兹', () => {
      const result = convert('frequency', 1000, 'mega_hertz', 'giga_hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('giga_hertz')
    })
  })

  // 角速度单位测试
  describe('角速度单位转换', () => {
    test('弧度每秒到角度每秒', () => {
      const result = convert('frequency', 1, 'angular_radian_per_second', 'angular_degree_per_second')
      expect(result.value).toBeCloseTo(57.2958, 4)
      expect(result.unit).toBe('angular_degree_per_second')
    })

    test('转每分钟到转每秒', () => {
      const result = convert('frequency', 60, 'angular_revolution_per_minute', 'angular_revolution_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('angular_revolution_per_second')
    })

    test('千转每分钟到兆转每分钟', () => {
      const result = convert('frequency', 1000, 'angular_kilo_rpm', 'angular_mega_rpm')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('angular_mega_rpm')
    })
  })

  // 音频单位测试
  describe('音频单位转换', () => {
    test('拍每分钟到赫兹', () => {
      const result = convert('frequency', 60, 'audio_beat_per_minute', 'hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('hertz')
    })
  })

  // 跨系统转换测试
  describe('跨系统转换', () => {
    test('转每分钟到赫兹', () => {
      const result = convert('frequency', 60, 'angular_revolution_per_minute', 'hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('hertz')
    })

    test('弧度每秒到转每分钟', () => {
      const result = convert('frequency', 2 * Math.PI, 'angular_radian_per_second', 'angular_revolution_per_minute')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('angular_revolution_per_minute')
    })
  })

  // 边界情况测试
  describe('边界情况', () => {
    test('大数值转换', () => {
      const result = convert('frequency', 1e12, 'hertz', 'tera_hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('tera_hertz')
    })

    test('小数值转换', () => {
      const result = convert('frequency', 0.001, 'hertz', 'milli_hertz')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('milli_hertz')
    })

    test('零值转换', () => {
      const result = convert('frequency', 0, 'angular_revolution_per_minute', 'hertz')
      expect(result.value).toBeCloseTo(0, 6)
      expect(result.unit).toBe('hertz')
    })
  })
}) 