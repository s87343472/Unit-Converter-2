import { convert } from '../converter'

describe('Frequency Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('hertz to kilohertz', () => {
      const result = convert('frequency', 1000, 'hertz', 'kilohertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('kilohertz')
    })

    test('kilohertz to megahertz', () => {
      const result = convert('frequency', 1000, 'kilohertz', 'megahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('megahertz')
    })

    test('megahertz to gigahertz', () => {
      const result = convert('frequency', 1000, 'megahertz', 'gigahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('gigahertz')
    })

    test('gigahertz to terahertz', () => {
      const result = convert('frequency', 1000, 'gigahertz', 'terahertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('terahertz')
    })
  })

  // 测试周期单位
  describe('Cycle Units', () => {
    test('cycle per second to hertz', () => {
      const result = convert('frequency', 1, 'cycle_per_second', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })

    test('cycle per minute to hertz', () => {
      const result = convert('frequency', 60, 'cycle_per_minute', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })
  })

  // 测试转速单位
  describe('Rotation Units', () => {
    test('revolution per minute to hertz', () => {
      const result = convert('frequency', 60, 'revolution_per_minute', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })

    test('revolution per second to hertz', () => {
      const result = convert('frequency', 1, 'revolution_per_second', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })
  })

  // 测试特殊应用单位
  describe('Special Application Units', () => {
    test('beat per minute to hertz', () => {
      const result = convert('frequency', 60, 'beat_per_minute', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })

    test('frame per second to hertz', () => {
      const result = convert('frequency', 1, 'frame_per_second', 'hertz')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hertz')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very low frequencies', () => {
      const result = convert('frequency', 1, 'cycle_per_minute', 'hertz')
      expect(result.value).toBeCloseTo(0.016667, 6)
      expect(result.unit).toBe('hertz')
    })

    test('should handle very high frequencies', () => {
      const result = convert('frequency', 1, 'terahertz', 'hertz')
      expect(result.value).toBe(1e12)
      expect(result.unit).toBe('hertz')
    })
  })
}) 