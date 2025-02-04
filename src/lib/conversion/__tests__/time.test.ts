import { convert } from '../converter'

describe('Time Conversion', () => {
  // 测试基本时间单位转换
  describe('Basic Time Units', () => {
    test('metric_second to metric_minute', () => {
      const result = convert('time', 60, 'metric_second', 'metric_minute')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_minute')
    })

    test('metric_minute to metric_hour', () => {
      const result = convert('time', 60, 'metric_minute', 'metric_hour')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_hour')
    })

    test('metric_hour to metric_day', () => {
      const result = convert('time', 24, 'metric_hour', 'metric_day')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_day')
    })

    test('metric_day to metric_week', () => {
      const result = convert('time', 7, 'metric_day', 'metric_week')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_week')
    })

    test('metric_week to metric_month', () => {
      const result = convert('time', 4.348214285714286, 'metric_week', 'metric_month')
      expect(result.value).toBeCloseTo(1, 9)
      expect(result.unit).toBe('metric_month')
    })

    test('metric_month to metric_year', () => {
      const result = convert('time', 12, 'metric_month', 'metric_year')
      expect(result.value).toBeCloseTo(1, 9)
      expect(result.unit).toBe('metric_year')
    })
  })

  // 测试更大的时间单位
  describe('Larger Time Units', () => {
    test('metric_year to metric_decade', () => {
      const result = convert('time', 10, 'metric_year', 'metric_decade')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_decade')
    })

    test('metric_decade to metric_century', () => {
      const result = convert('time', 10, 'metric_decade', 'metric_century')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_century')
    })

    test('metric_century to metric_millennium', () => {
      const result = convert('time', 10, 'metric_century', 'metric_millennium')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_millennium')
    })
  })

  // 测试更小的时间单位
  describe('Smaller Time Units', () => {
    test('metric_second to scientific_millisecond', () => {
      const result = convert('time', 1, 'metric_second', 'scientific_millisecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('scientific_millisecond')
    })

    test('scientific_millisecond to scientific_microsecond', () => {
      const result = convert('time', 1, 'scientific_millisecond', 'scientific_microsecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('scientific_microsecond')
    })

    test('scientific_microsecond to scientific_nanosecond', () => {
      const result = convert('time', 1, 'scientific_microsecond', 'scientific_nanosecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('scientific_nanosecond')
    })

    test('scientific_nanosecond to scientific_picosecond', () => {
      const result = convert('time', 1, 'scientific_nanosecond', 'scientific_picosecond')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('scientific_picosecond')
    })
  })

  // 测试天文时间单位
  describe('Astronomical Time Units', () => {
    test('astronomical_sidereal_day to metric_second', () => {
      const result = convert('time', 1, 'astronomical_sidereal_day', 'metric_second')
      expect(result.value).toBeCloseTo(86164.0905, 6)
      expect(result.unit).toBe('metric_second')
    })

    test('astronomical_sidereal_year to metric_day', () => {
      const result = convert('time', 1, 'astronomical_sidereal_year', 'metric_day')
      expect(result.value).toBeCloseTo(365.256363004, 6)
      expect(result.unit).toBe('metric_day')
    })

    test('astronomical_tropical_year to metric_day', () => {
      const result = convert('time', 1, 'astronomical_tropical_year', 'metric_day')
      expect(result.value).toBeCloseTo(365.242190402, 6)
      expect(result.unit).toBe('metric_day')
    })
  })

  // 测试计算机时间单位
  describe('Computer Time Units', () => {
    test('metric_second to computing_jiffy', () => {
      const result = convert('time', 1, 'metric_second', 'computing_jiffy')
      expect(result.value).toBe(100)
      expect(result.unit).toBe('computing_jiffy')
    })

    test('metric_second to computing_tick', () => {
      const result = convert('time', 1, 'metric_second', 'computing_tick')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('computing_tick')
    })
  })

  // 测试跨类型转换
  describe('Cross-Type Conversions', () => {
    test('metric_year to astronomical_sidereal_year', () => {
      const result = convert('time', 1, 'metric_year', 'astronomical_sidereal_year')
      expect(result.value).toBeCloseTo(0.99997862, 9)
      expect(result.unit).toBe('astronomical_sidereal_year')
    })

    test('metric_day to astronomical_sidereal_day', () => {
      const result = convert('time', 1, 'metric_day', 'astronomical_sidereal_day')
      expect(result.value).toBeCloseTo(0.99726968, 9)
      expect(result.unit).toBe('astronomical_sidereal_day')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small times', () => {
      const result = convert('time', 1, 'scientific_picosecond', 'metric_second')
      expect(result.value).toBe(1e-12)
      expect(result.unit).toBe('metric_second')
    })

    test('should handle very large times', () => {
      const result = convert('time', 1, 'metric_millennium', 'metric_second')
      expect(result.value).toBe(31557000000)
      expect(result.unit).toBe('metric_second')
    })

    test('should handle fractional times', () => {
      const result = convert('time', 0.5, 'metric_day', 'metric_hour')
      expect(result.value).toBe(12)
      expect(result.unit).toBe('metric_hour')
    })
  })
}) 