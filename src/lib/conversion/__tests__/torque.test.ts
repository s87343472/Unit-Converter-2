import { convert } from '../converter'

describe('Torque Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('metric_newton_meter to metric_kilonewton_meter', () => {
      const result = convert('torque', 1000, 'metric_newton_meter', 'metric_kilonewton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_kilonewton_meter')
    })

    test('metric_kilonewton_meter to metric_meganewton_meter', () => {
      const result = convert('torque', 1000, 'metric_kilonewton_meter', 'metric_meganewton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_meganewton_meter')
    })
  })

  // 测试公制单位转换
  describe('Metric Unit Conversions', () => {
    test('metric_newton_meter to metric_newton_centimeter', () => {
      const result = convert('torque', 1, 'metric_newton_meter', 'metric_newton_centimeter')
      expect(result.value).toBeCloseTo(100, 3)
      expect(result.unit).toBe('metric_newton_centimeter')
    })

    test('metric_newton_centimeter to metric_newton_millimeter', () => {
      const result = convert('torque', 1, 'metric_newton_centimeter', 'metric_newton_millimeter')
      expect(result.value).toBeCloseTo(10, 3)
      expect(result.unit).toBe('metric_newton_millimeter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Unit Conversions', () => {
    test('imperial_pound_foot to metric_newton_meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(1.35582, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('imperial_pound_inch to imperial_pound_foot', () => {
      const result = convert('torque', 12, 'imperial_pound_inch', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_foot')
    })

    test('imperial_ounce_inch to imperial_pound_inch', () => {
      const result = convert('torque', 16, 'imperial_ounce_inch', 'imperial_pound_inch')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_inch')
    })
  })

  // 测试工程单位转换
  describe('Engineering Unit Conversions', () => {
    test('engineering_kilogram_force_meter to metric_newton_meter', () => {
      const result = convert('torque', 1, 'engineering_kilogram_force_meter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('engineering_gram_force_centimeter to metric_newton_meter', () => {
      const result = convert('torque', 100000, 'engineering_gram_force_centimeter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })
  })

  // 测试科学单位转换
  describe('Scientific Unit Conversions', () => {
    test('scientific_dyne_centimeter to metric_newton_meter', () => {
      const result = convert('torque', 10000000, 'scientific_dyne_centimeter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('metric_newton_meter to scientific_dyne_centimeter', () => {
      const result = convert('torque', 1, 'metric_newton_meter', 'scientific_dyne_centimeter')
      expect(result.value).toBeCloseTo(10000000, 0)
      expect(result.unit).toBe('scientific_dyne_centimeter')
    })
  })

  // 测试汽车工业单位转换
  describe('Automotive Unit Conversions', () => {
    test('automotive_kilogram_force_meter to metric_newton_meter', () => {
      const result = convert('torque', 1, 'automotive_kilogram_force_meter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('automotive_newton_meter to metric_kilogram_force_meter', () => {
      const result = convert('torque', 9.80665, 'automotive_newton_meter', 'automotive_kilogram_force_meter')
      expect(result.value).toBeCloseTo(1, 5)
      expect(result.unit).toBe('automotive_kilogram_force_meter')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('imperial_pound_foot to engineering_kilogram_force_meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'engineering_kilogram_force_meter')
      expect(result.value).toBeCloseTo(0.138255, 6)
      expect(result.unit).toBe('engineering_kilogram_force_meter')
    })

    test('engineering_kilogram_force_meter to imperial_pound_foot', () => {
      const result = convert('torque', 0.138255, 'engineering_kilogram_force_meter', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_foot')
    })

    test('scientific_dyne_centimeter to engineering_gram_force_centimeter', () => {
      const result = convert('torque', 980.665, 'scientific_dyne_centimeter', 'engineering_gram_force_centimeter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('engineering_gram_force_centimeter')
    })
  })

  // 测试精度
  describe('Precision', () => {
    test('should handle very small torques', () => {
      const result = convert('torque', 0.000001, 'metric_newton_meter', 'scientific_dyne_centimeter')
      expect(result.value).toBeCloseTo(10, 3)
      expect(result.unit).toBe('scientific_dyne_centimeter')
    })

    test('should handle very large torques', () => {
      const result = convert('torque', 1000000, 'metric_newton_meter', 'metric_meganewton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_meganewton_meter')
    })

    test('should handle high precision conversions', () => {
      const result = convert('torque', 1, 'engineering_gram_force_centimeter', 'scientific_dyne_centimeter')
      expect(result.value).toBeCloseTo(980.665, 3)
      expect(result.unit).toBe('scientific_dyne_centimeter')
    })
  })
}) 