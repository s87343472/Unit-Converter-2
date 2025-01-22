import { convert } from '../converter'

describe('Speed Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('meters per second to kilometers per hour', () => {
      const result = convert('speed', 1, 'meters_per_second', 'kilometers_per_hour')
      expect(result.value).toBeCloseTo(3.6, 4)
      expect(result.unit).toBe('kilometers_per_hour')
    })

    test('kilometers per hour to meters per second', () => {
      const result = convert('speed', 3.6, 'kilometers_per_hour', 'meters_per_second')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('meters_per_second')
    })

    test('miles per hour to kilometers per hour', () => {
      const result = convert('speed', 1, 'miles_per_hour', 'kilometers_per_hour')
      expect(result.value).toBeCloseTo(1.60934, 4)
      expect(result.unit).toBe('kilometers_per_hour')
    })
  })

  // 测试航海和航空单位
  describe('Maritime and Aviation Units', () => {
    test('knots to kilometers per hour', () => {
      const result = convert('speed', 1, 'knots', 'kilometers_per_hour')
      expect(result.value).toBeCloseTo(1.852, 3)
      expect(result.unit).toBe('kilometers_per_hour')
    })

    test('mach to kilometers per hour', () => {
      const result = convert('speed', 1, 'mach', 'kilometers_per_hour')
      expect(result.value).toBeCloseTo(1225.08, 2)
      expect(result.unit).toBe('kilometers_per_hour')
    })
  })

  // 测试其他单位
  describe('Other Units', () => {
    test('feet per second to meters per second', () => {
      const result = convert('speed', 1, 'feet_per_second', 'meters_per_second')
      expect(result.value).toBeCloseTo(0.3048, 4)
      expect(result.unit).toBe('meters_per_second')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very slow speeds', () => {
      const result = convert('speed', 0.001, 'meters_per_second', 'kilometers_per_hour')
      expect(result.value).toBeCloseTo(0.0036, 4)
      expect(result.unit).toBe('kilometers_per_hour')
    })

    test('should handle very high speeds', () => {
      const result = convert('speed', 2, 'mach', 'meters_per_second')
      expect(result.value).toBeCloseTo(680.6, 1)
      expect(result.unit).toBe('meters_per_second')
    })
  })
}) 