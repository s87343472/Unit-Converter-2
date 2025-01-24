import { convert } from '../converter'

describe('Flow Rate Conversion', () => {
  // 公制体积流量单位测试
  describe('Metric Volume Flow Conversions', () => {
    test('metric_cubic_meter_per_second to metric_cubic_meter_per_hour', () => {
      const result = convert('flow', 1, 'metric_cubic_meter_per_second', 'metric_cubic_meter_per_hour')
      expect(result.value).toBe(3600)
      expect(result.unit).toBe('metric_cubic_meter_per_hour')
    })

    test('metric_liter_per_second to metric_cubic_meter_per_second', () => {
      const result = convert('flow', 1000, 'metric_liter_per_second', 'metric_cubic_meter_per_second')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_cubic_meter_per_second')
    })

    test('metric_liter_per_minute to metric_liter_per_hour', () => {
      const result = convert('flow', 1, 'metric_liter_per_minute', 'metric_liter_per_hour')
      expect(result.value).toBe(60)
      expect(result.unit).toBe('metric_liter_per_hour')
    })
  })

  // 英制体积流量单位测试
  describe('Imperial Volume Flow Conversions', () => {
    test('imperial_cubic_foot_per_second to metric_cubic_meter_per_second', () => {
      const result = convert('flow', 1, 'imperial_cubic_foot_per_second', 'metric_cubic_meter_per_second')
      expect(result.value).toBeCloseTo(0.028316847, 9)
      expect(result.unit).toBe('metric_cubic_meter_per_second')
    })

    test('imperial_cubic_foot_per_minute to metric_liter_per_second', () => {
      const result = convert('flow', 1, 'imperial_cubic_foot_per_minute', 'metric_liter_per_second')
      expect(result.value).toBeCloseTo(0.471947, 6)
      expect(result.unit).toBe('metric_liter_per_second')
    })

    test('imperial_cubic_foot_per_hour to metric_liter_per_minute', () => {
      const result = convert('flow', 1, 'imperial_cubic_foot_per_hour', 'metric_liter_per_minute')
      expect(result.value).toBeCloseTo(0.471947, 6)
      expect(result.unit).toBe('metric_liter_per_minute')
    })
  })

  // 美制体积流量单位测试
  describe('US Volume Flow Conversions', () => {
    test('us_gallon_per_minute to metric_liter_per_minute', () => {
      const result = convert('flow', 1, 'us_gallon_per_minute', 'metric_liter_per_minute')
      expect(result.value).toBeCloseTo(3.78541, 5)
      expect(result.unit).toBe('metric_liter_per_minute')
    })

    test('us_gallon_per_hour to metric_liter_per_hour', () => {
      const result = convert('flow', 1, 'us_gallon_per_hour', 'metric_liter_per_hour')
      expect(result.value).toBeCloseTo(3.78541, 5)
      expect(result.unit).toBe('metric_liter_per_hour')
    })

    test('us_million_gallon_per_day to metric_cubic_meter_per_second', () => {
      const result = convert('flow', 1, 'us_million_gallon_per_day', 'metric_cubic_meter_per_second')
      expect(result.value).toBeCloseTo(0.043813, 6)
      expect(result.unit).toBe('metric_cubic_meter_per_second')
    })
  })

  // 工业流量单位测试
  describe('Industrial Flow Conversions', () => {
    test('industrial_barrel_per_day to metric_cubic_meter_per_day', () => {
      const result = convert('flow', 1, 'industrial_barrel_per_day', 'metric_cubic_meter_per_hour')
      expect(result.value).toBeCloseTo(0.006624, 6)
      expect(result.unit).toBe('metric_cubic_meter_per_hour')
    })

    test('industrial_barrel_per_hour to metric_liter_per_hour', () => {
      const result = convert('flow', 1, 'industrial_barrel_per_hour', 'metric_liter_per_hour')
      expect(result.value).toBeCloseTo(158.987, 3)
      expect(result.unit).toBe('metric_liter_per_hour')
    })
  })

  // 质量流量单位测试
  describe('Mass Flow Conversions', () => {
    test('mass_kilogram_per_second to metric_cubic_meter_per_second', () => {
      const result = convert('flow', 1, 'mass_kilogram_per_second', 'metric_cubic_meter_per_second')
      expect(result.value).toBe(0.001)
      expect(result.unit).toBe('metric_cubic_meter_per_second')
    })

    test('mass_kilogram_per_hour to metric_liter_per_hour', () => {
      const result = convert('flow', 1, 'mass_kilogram_per_hour', 'metric_liter_per_hour')
      expect(result.value).toBe(1)
      expect(result.unit).toBe('metric_liter_per_hour')
    })

    test('mass_pound_per_second to mass_kilogram_per_second', () => {
      const result = convert('flow', 1, 'mass_pound_per_second', 'mass_kilogram_per_second')
      expect(result.value).toBeCloseTo(0.453592, 6)
      expect(result.unit).toBe('mass_kilogram_per_second')
    })

    test('mass_pound_per_hour to mass_kilogram_per_hour', () => {
      const result = convert('flow', 1, 'mass_pound_per_hour', 'mass_kilogram_per_hour')
      expect(result.value).toBeCloseTo(0.453592, 6)
      expect(result.unit).toBe('mass_kilogram_per_hour')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('us_gallon_per_minute to imperial_cubic_foot_per_minute', () => {
      const result = convert('flow', 1, 'us_gallon_per_minute', 'imperial_cubic_foot_per_minute')
      expect(result.value).toBeCloseTo(0.133681, 6)
      expect(result.unit).toBe('imperial_cubic_foot_per_minute')
    })

    test('industrial_barrel_per_hour to us_gallon_per_minute', () => {
      const result = convert('flow', 1, 'industrial_barrel_per_hour', 'us_gallon_per_minute')
      expect(result.value).toBeCloseTo(0.7, 1)
      expect(result.unit).toBe('us_gallon_per_minute')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('flow', 0, 'metric_cubic_meter_per_second', 'metric_liter_per_second')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_liter_per_second')
    })

    test('very small value conversion', () => {
      const result = convert('flow', 1e-10, 'metric_cubic_meter_per_second', 'metric_liter_per_hour')
      expect(result.value).toBeCloseTo(0.36, 2)
      expect(result.unit).toBe('metric_liter_per_hour')
    })

    test('very large value conversion', () => {
      const result = convert('flow', 1000, 'metric_cubic_meter_per_second', 'us_million_gallon_per_day')
      expect(result.value).toBeCloseTo(22825.679, 3)
      expect(result.unit).toBe('us_million_gallon_per_day')
    })
  })
}) 