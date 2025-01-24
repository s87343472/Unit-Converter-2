import { convert } from '../converter'

describe('Force Conversion', () => {
  // 公制单位测试
  describe('Metric Unit Conversions', () => {
    test('metric_newton to metric_kilonewton', () => {
      const result = convert('force', 1000, 'metric_newton', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_kilonewton')
    })

    test('metric_kilonewton to metric_meganewton', () => {
      const result = convert('force', 1000, 'metric_kilonewton', 'metric_meganewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_meganewton')
    })

    test('metric_newton to metric_micronewton', () => {
      const result = convert('force', 1e-6, 'metric_newton', 'metric_micronewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_micronewton')
    })

    test('metric_newton to metric_millinewton', () => {
      const result = convert('force', 1e-3, 'metric_newton', 'metric_millinewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_millinewton')
    })
  })

  // 重力单位测试
  describe('Gravity Unit Conversions', () => {
    test('gravity_kilogram_force to metric_newton', () => {
      const result = convert('force', 1, 'gravity_kilogram_force', 'metric_newton')
      expect(result.value).toBeCloseTo(9.80665, 4)
      expect(result.unit).toBe('metric_newton')
    })

    test('gravity_gram_force to metric_newton', () => {
      const result = convert('force', 1000, 'gravity_gram_force', 'metric_newton')
      expect(result.value).toBeCloseTo(9.80665, 4)
      expect(result.unit).toBe('metric_newton')
    })

    test('gravity_ton_force_metric to metric_kilonewton', () => {
      const result = convert('force', 1, 'gravity_ton_force_metric', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(9.80665, 4)
      expect(result.unit).toBe('metric_kilonewton')
    })
  })

  // 英制单位测试
  describe('Imperial Unit Conversions', () => {
    test('imperial_pound_force to metric_newton', () => {
      const result = convert('force', 1, 'imperial_pound_force', 'metric_newton')
      expect(result.value).toBeCloseTo(4.448222, 4)
      expect(result.unit).toBe('metric_newton')
    })

    test('imperial_ounce_force to metric_newton', () => {
      const result = convert('force', 16, 'imperial_ounce_force', 'metric_newton')
      expect(result.value).toBeCloseTo(4.448222, 4)
      expect(result.unit).toBe('metric_newton')
    })

    test('imperial_ton_force to metric_kilonewton', () => {
      const result = convert('force', 1, 'imperial_ton_force', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(9.964017, 4)
      expect(result.unit).toBe('metric_kilonewton')
    })

    test('imperial_kip to metric_kilonewton', () => {
      const result = convert('force', 1, 'imperial_kip', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(4.448222, 4)
      expect(result.unit).toBe('metric_kilonewton')
    })
  })

  // 科学单位测试
  describe('Scientific Unit Conversions', () => {
    test('scientific_dyne to metric_newton', () => {
      const result = convert('force', 1e5, 'scientific_dyne', 'metric_newton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_newton')
    })

    test('scientific_sthene to metric_kilonewton', () => {
      const result = convert('force', 1, 'scientific_sthene', 'metric_kilonewton')
      expect(result.value).toBeCloseTo(1, 4)
      expect(result.unit).toBe('metric_kilonewton')
    })

    test('scientific_poundal to metric_newton', () => {
      const result = convert('force', 1, 'scientific_poundal', 'metric_newton')
      expect(result.value).toBeCloseTo(0.138255, 4)
      expect(result.unit).toBe('metric_newton')
    })
  })

  // 跨类型转换测试
  describe('Cross-Category Conversions', () => {
    test('gravity_kilogram_force to imperial_pound_force', () => {
      const result = convert('force', 1, 'gravity_kilogram_force', 'imperial_pound_force')
      expect(result.value).toBeCloseTo(2.204623, 4)
      expect(result.unit).toBe('imperial_pound_force')
    })

    test('imperial_kip to gravity_ton_force_metric', () => {
      const result = convert('force', 1, 'imperial_kip', 'gravity_ton_force_metric')
      expect(result.value).toBeCloseTo(0.453592, 4)
      expect(result.unit).toBe('gravity_ton_force_metric')
    })
  })

  // 边界值测试
  describe('Edge Cases', () => {
    test('zero value conversion', () => {
      const result = convert('force', 0, 'metric_newton', 'metric_kilonewton')
      expect(result.value).toBe(0)
      expect(result.unit).toBe('metric_kilonewton')
    })

    test('very small force conversion', () => {
      const result = convert('force', 1e-12, 'metric_newton', 'metric_micronewton')
      expect(result.value).toBeCloseTo(1e-6, 10)
      expect(result.unit).toBe('metric_micronewton')
    })

    test('very large force conversion', () => {
      const result = convert('force', 1e9, 'metric_newton', 'metric_meganewton')
      expect(result.value).toBeCloseTo(1e3, 4)
      expect(result.unit).toBe('metric_meganewton')
    })
  })
}) 