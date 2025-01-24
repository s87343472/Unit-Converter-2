import { convert } from '../converter'

describe('Time Conversion', () => {
  // 测试基本时间单位转换
  describe('Basic Time Units', () => {
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

    test('week to month', () => {
      const result = convert('time', 4.348214285714286, 'week', 'month')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('month')
    })

    test('month to year', () => {
      const result = convert('time', 12, 'month', 'year')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('year')
    })
  })

  // 测试更大的时间单位
  describe('Larger Time Units', () => {
    test('year to decade', () => {
      const result = convert('time', 10, 'year', 'decade')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('decade')
    })

    test('decade to century', () => {
      const result = convert('time', 10, 'decade', 'century')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('century')
    })

    test('century to millennium', () => {
      const result = convert('time', 10, 'century', 'millennium')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('millennium')
    })
  })

  // 测试更小的时间单位
  describe('Smaller Time Units', () => {
    test('second to millisecond', () => {
      const result = convert('time', 1, 'second', 'millisecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('millisecond')
    })

    test('millisecond to microsecond', () => {
      const result = convert('time', 1, 'millisecond', 'microsecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('microsecond')
    })

    test('microsecond to nanosecond', () => {
      const result = convert('time', 1, 'microsecond', 'nanosecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('nanosecond')
    })

    test('nanosecond to picosecond', () => {
      const result = convert('time', 1, 'nanosecond', 'picosecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('picosecond')
    })
  })

  // 测试天文时间单位
  describe('Astronomical Time Units', () => {
    test('sidereal day to second', () => {
      const result = convert('time', 1, 'sidereal_day', 'second')
      expect(result.value).toBeCloseTo(86164.0905, 4)
      expect(result.unit).toBe('second')
    })

    test('sidereal year to day', () => {
      const result = convert('time', 1, 'sidereal_year', 'day')
      expect(result.value).toBeCloseTo(365.256363004, 6)
      expect(result.unit).toBe('day')
    })

    test('tropical year to day', () => {
      const result = convert('time', 1, 'tropical_year', 'day')
      expect(result.value).toBeCloseTo(365.242190402, 6)
      expect(result.unit).toBe('day')
    })
  })

  // 测试计算机时间单位
  describe('Computer Time Units', () => {
    test('second to jiffy', () => {
      const result = convert('time', 1, 'second', 'jiffy')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('jiffy')
    })

    test('second to tick', () => {
      const result = convert('time', 1, 'second', 'tick')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('tick')
    })
  })

  // 测试跨类型转换
  describe('Cross-Type Conversions', () => {
    test('year to sidereal year', () => {
      const result = convert('time', 1, 'year', 'sidereal_year')
      expect(result.value).toBeCloseTo(0.99997862, 6)
      expect(result.unit).toBe('sidereal_year')
    })

    test('day to sidereal day', () => {
      const result = convert('time', 1, 'day', 'sidereal_day')
      expect(result.value).toBeCloseTo(0.99726968, 6)
      expect(result.unit).toBe('sidereal_day')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small times', () => {
      const result = convert('time', 1, 'picosecond', 'second')
      expect(result.value).toBe(1e-12)
      expect(result.unit).toBe('second')
    })

    test('should handle very large times', () => {
      const result = convert('time', 1, 'millennium', 'second')
      expect(result.value).toBe(31536000000)
      expect(result.unit).toBe('second')
    })

    test('should handle fractional times', () => {
      const result = convert('time', 0.5, 'day', 'hour')
      expect(result.value).toBe(12)
      expect(result.unit).toBe('hour')
    })
  })
}) 