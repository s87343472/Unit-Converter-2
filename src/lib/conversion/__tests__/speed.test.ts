import { convert } from '../converter'

describe('Speed Conversion', () => {
  // 测试公制速度单位
  describe('Metric Speed Units', () => {
    test('metric_meter_per_second to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('metric_kilometer_per_hour to metric_meter_per_second', () => {
      const result = convert('speed', 36, 'metric_kilometer_per_hour', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(10, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('metric_kilometer_per_second to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'metric_kilometer_per_second', 'metric_meter_per_second')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 测试英制速度单位
  describe('Imperial Speed Units', () => {
    test('imperial_mile_per_hour to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'imperial_mile_per_hour', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.60934, 5)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('imperial_foot_per_second to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'imperial_foot_per_second', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.3048, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 测试航空速度单位
  describe('Aviation Speed Units', () => {
    test('traditional_knot to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'traditional_knot', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.514444, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('scientific_mach to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'scientific_mach', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(340.3, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('scientific_mach to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'scientific_mach', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1225.08, 2)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })
  })

  // 测试天文速度单位
  describe('Astronomical Speed Units', () => {
    test('scientific_light_speed to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'scientific_light_speed', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(299792.458, 3)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('scientific_astronomical_unit_per_year to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'scientific_astronomical_unit_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(4.74057581, 6)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('scientific_parsec_per_year to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'scientific_parsec_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(977.813952, 6)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })
  })

  // 测试运动速度单位
  describe('Sport Speed Units', () => {
    test('metric_kilometer_per_minute to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'metric_kilometer_per_minute', 'metric_kilometer_per_hour')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('metric_meter_per_minute to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1000, 'metric_meter_per_minute', 'metric_kilometer_per_hour')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('traditional_knot to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'traditional_knot', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.852, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('scientific_mach to imperial_mile_per_hour', () => {
      const result = convert('speed', 1, 'scientific_mach', 'imperial_mile_per_hour')
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
      const result = convert('speed', 1, 'scientific_light_speed', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1079252848.8, 1)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('should handle fractional speeds', () => {
      const result = convert('speed', 0.5, 'metric_kilometer_per_hour', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.138889, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })
}) 