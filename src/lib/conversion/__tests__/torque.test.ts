import { convert } from '../converter'

describe('Torque Conversion', () => {
  // 测试基本单位转换
  describe('Basic Conversions', () => {
    test('newton meter to kilonewton meter', () => {
      const result = convert('torque', 1000, 'metric_newton_meter', 'metric_kilonewton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_kilonewton_meter')
    })

    test('kilonewton meter to meganewton meter', () => {
      const result = convert('torque', 1000, 'metric_kilonewton_meter', 'metric_meganewton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_meganewton_meter')
    })
  })

  // 测试公制单位转换
  describe('Metric Unit Conversions', () => {
    test('newton meter to newton centimeter', () => {
      const result = convert('torque', 1, 'metric_newton_meter', 'metric_newton_centimeter')
      expect(result.value).toBeCloseTo(100, 3)
      expect(result.unit).toBe('metric_newton_centimeter')
    })

    test('newton centimeter to newton millimeter', () => {
      const result = convert('torque', 1, 'metric_newton_centimeter', 'metric_newton_millimeter')
      expect(result.value).toBeCloseTo(10, 3)
      expect(result.unit).toBe('metric_newton_millimeter')
    })
  })

  // 测试英制单位转换
  describe('Imperial Unit Conversions', () => {
    test('pound foot to newton meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(1.35582, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('pound inch to pound foot', () => {
      const result = convert('torque', 12, 'imperial_pound_inch', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_foot')
    })

    test('ounce inch to pound inch', () => {
      const result = convert('torque', 16, 'imperial_ounce_inch', 'imperial_pound_inch')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_inch')
    })
  })

  // 测试工程单位转换
  describe('Engineering Unit Conversions', () => {
    test('kilogram force meter to newton meter', () => {
      const result = convert('torque', 1, 'engineering_kilogram_force_meter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('gram force centimeter to newton meter', () => {
      const result = convert('torque', 100000, 'engineering_gram_force_centimeter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })
  })

  // 测试科学单位转换
  describe('Scientific Unit Conversions', () => {
    test('dyne centimeter to newton meter', () => {
      const result = convert('torque', 10000000, 'scientific_dyne_centimeter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('newton meter to dyne centimeter', () => {
      const result = convert('torque', 1, 'metric_newton_meter', 'scientific_dyne_centimeter')
      expect(result.value).toBeCloseTo(10000000, 0)
      expect(result.unit).toBe('scientific_dyne_centimeter')
    })
  })

  // 测试汽车工业单位转换
  describe('Automotive Unit Conversions', () => {
    test('automotive kilogram force meter to newton meter', () => {
      const result = convert('torque', 1, 'automotive_kilogram_force_meter', 'metric_newton_meter')
      expect(result.value).toBeCloseTo(9.80665, 5)
      expect(result.unit).toBe('metric_newton_meter')
    })

    test('automotive newton meter to kilogram force meter', () => {
      const result = convert('torque', 9.80665, 'automotive_newton_meter', 'automotive_kilogram_force_meter')
      expect(result.value).toBeCloseTo(1, 5)
      expect(result.unit).toBe('automotive_kilogram_force_meter')
    })
  })

  // 测试跨系统转换
  describe('Cross-System Conversions', () => {
    test('pound foot to kilogram force meter', () => {
      const result = convert('torque', 1, 'imperial_pound_foot', 'engineering_kilogram_force_meter')
      expect(result.value).toBeCloseTo(0.138255, 6)
      expect(result.unit).toBe('engineering_kilogram_force_meter')
    })

    test('kilogram force meter to pound foot', () => {
      const result = convert('torque', 0.138255, 'engineering_kilogram_force_meter', 'imperial_pound_foot')
      expect(result.value).toBeCloseTo(1, 3)
      expect(result.unit).toBe('imperial_pound_foot')
    })

    test('dyne centimeter to gram force centimeter', () => {
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