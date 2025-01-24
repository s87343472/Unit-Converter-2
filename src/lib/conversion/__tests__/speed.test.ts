import { convert } from '../converter'

describe('Speed Conversion', () => {
  // 测试公制速度单位转换
  describe('Metric Speed Units', () => {
    test('meter per second to kilometer per hour', () => {
      const result = convert('speed', 1, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('kilometer per hour to meter per second', () => {
      const result = convert('speed', 36, 'metric_kilometer_per_hour', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(10, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('meter per second to kilometer per second', () => {
      const result = convert('speed', 1000, 'metric_meter_per_second', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })
  })

  // 测试英制速度单位转换
  describe('Imperial Speed Units', () => {
    test('mile per hour to foot per second', () => {
      const result = convert('speed', 1, 'imperial_mile_per_hour', 'imperial_foot_per_second')
      expect(result.value).toBeCloseTo(1.46667, 5)
      expect(result.unit).toBe('imperial_foot_per_second')
    })

    test('foot per second to mile per hour', () => {
      const result = convert('speed', 1.46667, 'imperial_foot_per_second', 'imperial_mile_per_hour')
      expect(result.value).toBeCloseTo(1, 5)
      expect(result.unit).toBe('imperial_mile_per_hour')
    })

    test('knot to mile per hour', () => {
      const result = convert('speed', 1, 'imperial_knot', 'imperial_mile_per_hour')
      expect(result.value).toBeCloseTo(1.15078, 5)
      expect(result.unit).toBe('imperial_mile_per_hour')
    })
  })

  // 测试航空速度单位转换
  describe('Aviation Speed Units', () => {
    test('mach to meter per second', () => {
      const result = convert('speed', 1, 'aviation_mach', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(340.3, 1)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('mach to kilometer per hour', () => {
      const result = convert('speed', 1, 'aviation_mach', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1225.08, 2)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })
  })

  // 测试天文速度单位转换
  describe('Astronomical Speed Units', () => {
    test('light speed to kilometer per second', () => {
      const result = convert('speed', 1, 'astronomy_light_speed', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(299792.458, 3)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('astronomical unit per year to kilometer per second', () => {
      const result = convert('speed', 1, 'astronomy_astronomical_unit_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(4.74057581, 8)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('parsec per year to kilometer per second', () => {
      const result = convert('speed', 1, 'astronomy_parsec_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(977.813952, 6)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })
  })

  // 测试运动速度单位转换
  describe('Sport Speed Units', () => {
    test('kilometer per minute to kilometer per hour', () => {
      const result = convert('speed', 1, 'sport_kilometer_per_minute', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('meter per minute to kilometer per hour', () => {
      const result = convert('speed', 1000, 'sport_meter_per_minute', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(60, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('mile per hour to kilometer per hour', () => {
      const result = convert('speed', 1, 'imperial_mile_per_hour', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.60934, 5)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('knot to kilometer per hour', () => {
      const result = convert('speed', 1, 'imperial_knot', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.852, 3)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('mach to mile per hour', () => {
      const result = convert('speed', 1, 'aviation_mach', 'imperial_mile_per_hour')
      expect(result.value).toBeCloseTo(761.207, 3)
      expect(result.unit).toBe('imperial_mile_per_hour')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small speeds', () => {
      const result = convert('speed', 0.000001, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(0.0036, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('should handle very large speeds', () => {
      const result = convert('speed', 0.1, 'astronomy_light_speed', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(29979.2458, 4)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('should handle fractional speeds', () => {
      const result = convert('speed', 0.5, 'metric_kilometer_per_hour', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.138889, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })
}) 