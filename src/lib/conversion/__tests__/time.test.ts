import { convert } from '../converter'

describe('Time Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('second to minute', () => {
      const result = convert('time', 60, 'second', 'minute')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('minute')
    })

    test('minute to hour', () => {
      const result = convert('time', 60, 'minute', 'hour')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('hour')
    })

    test('hour to day', () => {
      const result = convert('time', 24, 'hour', 'day')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('day')
    })

    test('day to week', () => {
      const result = convert('time', 7, 'day', 'week')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('week')
    })
  })

  // 测试小时间单位
  describe('Small Time Units', () => {
    test('microsecond to millisecond', () => {
      const result = convert('time', 1000, 'microsecond', 'millisecond')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('millisecond')
    })

    test('millisecond to second', () => {
      const result = convert('time', 1000, 'millisecond', 'second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('second')
    })
  })

  // 测试大时间单位
  describe('Large Time Units', () => {
    test('day to month', () => {
      const result = convert('time', 30, 'day', 'month')
      expect(result.value).toBeCloseTo(0.986, 3)
      expect(result.unit).toBe('month')
    })

    test('month to year', () => {
      const result = convert('time', 12, 'month', 'year')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('year')
    })

    test('year to decade', () => {
      const result = convert('time', 10, 'year', 'decade')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('decade')
    })

    test('decade to century', () => {
      const result = convert('time', 10, 'decade', 'century')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('century')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small times', () => {
      const result = convert('time', 1, 'microsecond', 'second')
      expect(result.value).toBe(0.000001)
      expect(result.unit).toBe('second')
    })

    test('should handle very large times', () => {
      const result = convert('time', 1, 'century', 'second')
      expect(result.value).toBe(3153600000)
      expect(result.unit).toBe('second')
    })
  })
}) 