import { convert } from '../converter'

describe('Flow Rate Conversion', () => {
  // 测试体积流量基本单位转换
  describe('Volumetric Flow Basic Conversions', () => {
    test('cubic meter per second to cubic meter per hour', () => {
      const result = convert('flow', 1, 'cubic_meter_per_second', 'cubic_meter_per_hour')
      expect(result.value).toBeCloseTo(3600, 0)
      expect(result.unit).toBe('cubic_meter_per_hour')
    })

    test('liter per second to cubic meter per second', () => {
      const result = convert('flow', 1000, 'liter_per_second', 'cubic_meter_per_second')
      expect(result.value).toBeCloseTo(1, 2)
      expect(result.unit).toBe('cubic_meter_per_second')
    })

    test('liter per minute to liter per hour', () => {
      const result = convert('flow', 1, 'liter_per_minute', 'liter_per_hour')
      expect(result.value).toBeCloseTo(60, 0)
      expect(result.unit).toBe('liter_per_hour')
    })
  })

  // 测试美制体积流量单位
  describe('US Volumetric Flow Units', () => {
    test('US gallon per minute to liter per minute', () => {
      const result = convert('flow', 1, 'gallon_per_minute_us', 'liter_per_minute')
      expect(result.value).toBeCloseTo(3.785, 3)
      expect(result.unit).toBe('liter_per_minute')
    })

    test('cubic foot per second to cubic meter per second', () => {
      const result = convert('flow', 1, 'cubic_foot_per_second', 'cubic_meter_per_second')
      expect(result.value).toBeCloseTo(0.0283, 3)
      expect(result.unit).toBe('cubic_meter_per_second')
    })

    test('cubic foot per minute to liter per second', () => {
      const result = convert('flow', 1, 'cubic_foot_per_minute', 'liter_per_second')
      expect(result.value).toBeCloseTo(0.472, 3)
      expect(result.unit).toBe('liter_per_second')
    })
  })

  // 测试质量流量单位
  describe('Mass Flow Units', () => {
    test('kilogram per second to kilogram per hour', () => {
      const result = convert('flow', 1, 'kilogram_per_second', 'kilogram_per_hour')
      expect(result.value).toBeCloseTo(3600, 0)
      expect(result.unit).toBe('kilogram_per_hour')
    })

    test('pound per second to kilogram per second', () => {
      const result = convert('flow', 1, 'pound_per_second', 'kilogram_per_second')
      expect(result.value).toBeCloseTo(0.454, 3)
      expect(result.unit).toBe('kilogram_per_second')
    })

    test('pound per hour to kilogram per hour', () => {
      const result = convert('flow', 1, 'pound_per_hour', 'kilogram_per_hour')
      expect(result.value).toBeCloseTo(0.454, 3)
      expect(result.unit).toBe('kilogram_per_hour')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small flow rates', () => {
      const result = convert('flow', 0.000001, 'cubic_meter_per_second', 'liter_per_hour')
      expect(result.value).toBeCloseTo(3.6, 1)
      expect(result.unit).toBe('liter_per_hour')
    })

    test('should handle very large flow rates', () => {
      const result = convert('flow', 1000000, 'liter_per_hour', 'cubic_meter_per_second')
      expect(result.value).toBeCloseTo(0.278, 3)
      expect(result.unit).toBe('cubic_meter_per_second')
    })
  })
}) 