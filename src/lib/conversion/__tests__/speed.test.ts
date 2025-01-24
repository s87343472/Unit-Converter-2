import { convert } from '../converter'

describe('Speed Conversion', () => {
  // 公制单位测试
  describe('Metric Unit Conversions', () => {
    test('metric_meter_per_second to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(3.6, 6)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('metric_kilometer_per_hour to metric_meter_per_second', () => {
      const result = convert('speed', 3.6, 'metric_kilometer_per_hour', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('metric_kilometer_per_second to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'metric_kilometer_per_second', 'metric_meter_per_second')
      expect(result.value).toBe(1000)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 航空单位测试
  describe('Aviation Unit Conversions', () => {
    test('aviation_knot to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'aviation_knot', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.852, 3)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('aviation_mach to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'aviation_mach', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(340.3, 1)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 英制单位测试
  describe('Imperial Unit Conversions', () => {
    test('imperial_mile_per_hour to metric_kilometer_per_hour', () => {
      const result = convert('speed', 1, 'imperial_mile_per_hour', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.60934, 5)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('imperial_foot_per_second to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'imperial_foot_per_second', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.3048, 4)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('imperial_yard_per_minute to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'imperial_yard_per_minute', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(0.01524, 5)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 天文单位测试
  describe('Astronomical Unit Conversions', () => {
    test('astronomical_light_speed to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'astronomical_light_speed', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(299792.458, 3)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('astronomical_astronomical_unit_per_year to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'astronomical_astronomical_unit_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(4.74057581e-6, 12)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })

    test('astronomical_parsec_per_year to metric_kilometer_per_second', () => {
      const result = convert('speed', 1, 'astronomical_parsec_per_year', 'metric_kilometer_per_second')
      expect(result.value).toBeCloseTo(0.000977814, 9)
      expect(result.unit).toBe('metric_kilometer_per_second')
    })
  })

  // 科学单位测试
  describe('Scientific Unit Conversions', () => {
    test('scientific_speed_of_sound_air to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'scientific_speed_of_sound_air', 'metric_meter_per_second')
      expect(result.value).toBeCloseTo(340.3, 1)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('scientific_speed_of_sound_water to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'scientific_speed_of_sound_water', 'metric_meter_per_second')
      expect(result.value).toBe(1481)
      expect(result.unit).toBe('metric_meter_per_second')
    })

    test('scientific_speed_of_sound_steel to metric_meter_per_second', () => {
      const result = convert('speed', 1, 'scientific_speed_of_sound_steel', 'metric_meter_per_second')
      expect(result.value).toBe(5120)
      expect(result.unit).toBe('metric_meter_per_second')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('aviation_mach to imperial_mile_per_hour', () => {
      const result = convert('speed', 1, 'aviation_mach', 'imperial_mile_per_hour')
      expect(result.value).toBeCloseTo(761.207, 3)
      expect(result.unit).toBe('imperial_mile_per_hour')
    })

    test('scientific_speed_of_sound_air to aviation_mach', () => {
      const result = convert('speed', 1, 'scientific_speed_of_sound_air', 'aviation_mach')
      expect(result.value).toBeCloseTo(1, 6)
      expect(result.unit).toBe('aviation_mach')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('speed', 0, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('very small value conversion', () => {
      const result = convert('speed', 1e-10, 'metric_meter_per_second', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(3.6e-10, 16)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })

    test('very large value conversion', () => {
      const result = convert('speed', 1, 'astronomical_light_speed', 'metric_kilometer_per_hour')
      expect(result.value).toBeCloseTo(1.07925e9, 4)
      expect(result.unit).toBe('metric_kilometer_per_hour')
    })
  })
}) 